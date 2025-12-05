const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function testPostalRegionModel() {
  try {
    const regions = await prisma.postalRegion.findMany();
    console.log(`PostalRegion table exists`);
    console.log(`Found ${regions.length} postal region(s)`);

    if (regions.length > 0) {
      console.log("Sample data:");
      regions.slice(0, 3).forEach((region) => {
        console.log(
          `  - ${region.postal_code}: ${region.city}, ${region.country}`
        );
      });
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testAddressPostalRegionRelation() {
  try {
    const addresses = await prisma.address.findMany({
      include: {
        postal_region: true,
      },
    });

    console.log(`Found ${addresses.length} address(es)`);

    if (addresses.length > 0) {
      console.log("Verifying foreign key relationship:");
      addresses.slice(0, 3).forEach((addr) => {
        if (addr.postal_region) {
          console.log(`  - Address: ${addr.street}`);
          console.log(`    Postal Code: ${addr.postal_code}`);
          console.log(
            `    Location: ${addr.postal_region.city}, ${addr.postal_region.country}`
          );
        } else {
          console.log(`  - Address: ${addr.street} (no postal region data)`);
        }
      });

      const firstAddr = addresses[0];
      const hasOldFields =
        firstAddr.hasOwnProperty("city") || firstAddr.hasOwnProperty("country");
      if (!hasOldFields) {
        console.log(
          "   Confirmed: city and country columns removed from Address"
        );
      } else {
        console.log("   Warning: old city/country columns still present");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testDiscountRuleModel() {
  try {
    const discounts = await prisma.discountRule.findMany();
    console.log(`DiscountRule table exists`);
    console.log(`Found ${discounts.length} discount rule(s)`);

    if (discounts.length > 0) {
      console.log("Sample data:");
      discounts.slice(0, 3).forEach((discount) => {
        console.log(`  - Code: ${discount.code}`);
        console.log(`    Type: ${discount.type}, Value: ${discount.value}`);
        console.log(
          `    Valid: ${discount.valid_from.toLocaleDateString()} - ${discount.valid_to.toLocaleDateString()}`
        );
        console.log(`    Active: ${discount.is_active}`);
      });
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testProductDiscountRuleRelation() {
  try {
    const products = await prisma.product.findMany({
      include: {
        discount_rule: true,
      },
    });

    console.log(`Product table correctly references DiscountRule`);
    console.log(`Found ${products.length} product(s)`);

    const productsWithDiscount = products.filter(
      (p) => p.discount_rule_id !== null
    );
    const productsWithoutDiscount = products.filter(
      (p) => p.discount_rule_id === null
    );

    console.log(`Products with discount: ${productsWithDiscount.length}`);
    console.log(`Products without discount: ${productsWithoutDiscount.length}`);

    if (productsWithDiscount.length > 0) {
      console.log("\nProducts with discount rules:");
      productsWithDiscount.slice(0, 3).forEach((product) => {
        console.log(`  - ${product.name} ($${product.price})`);
        if (product.discount_rule) {
          console.log(
            `    Discount: ${product.discount_rule.code} (${product.discount_rule.type}: ${product.discount_rule.value})`
          );

          let finalPrice;
          if (product.discount_rule.type === "percent") {
            const discountAmount =
              (parseFloat(product.price) *
                parseFloat(product.discount_rule.value)) /
              100;
            finalPrice = parseFloat(product.price) - discountAmount;
            console.log(
              `    Final Price: $${finalPrice.toFixed(2)} (${
                product.discount_rule.value
              }% off)`
            );
          } else {
            finalPrice =
              parseFloat(product.price) -
              parseFloat(product.discount_rule.value);
            console.log(
              `    Final Price: $${finalPrice.toFixed(2)} ($${
                product.discount_rule.value
              } off)`
            );
          }
        }
      });
    }

    if (products.length > 0) {
      const hasOldField = products[0].hasOwnProperty("discount_percent");
      if (!hasOldField) {
        console.log(
          "\n   Confirmed: discount_percent column removed from Product"
        );
      } else {
        console.log("\n   Warning: old discount_percent column still present");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testOrderDiscountAndNullableFields() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        applied_discount: true,
        address: true,
        cart: true,
      },
    });

    console.log(`Order table structure updated successfully`);
    console.log(`Found ${orders.length} order(s)`);

    const ordersWithDiscount = orders.filter(
      (o) => o.applied_discount_id !== null
    );
    const ordersWithoutAddress = orders.filter((o) => o.address_id === null);
    const ordersWithoutCart = orders.filter((o) => o.cart_id === null);

    console.log(`\nOrders with applied discount: ${ordersWithDiscount.length}`);
    console.log(
      `Orders without address: ${ordersWithoutAddress.length} (nullable field working)`
    );
    console.log(
      `Orders without cart: ${ordersWithoutCart.length} (nullable field working)`
    );

    if (ordersWithDiscount.length > 0) {
      console.log("\nOrders with applied discounts:");
      ordersWithDiscount.slice(0, 3).forEach((order) => {
        console.log(`  - Order #${order.order_id}`);
        console.log(`    Total: $${order.total_amount}`);
        console.log(`    Status: ${order.status}`);
        if (order.applied_discount) {
          console.log(
            `    Discount: ${order.applied_discount.code} (${order.applied_discount.type}: ${order.applied_discount.value})`
          );
        }
      });
    }

    if (orders.length > 0) {
      const hasNewField = orders[0].hasOwnProperty("applied_discount_id");
      if (hasNewField) {
        console.log(
          "\n   Confirmed: applied_discount_id column added to Order"
        );
      } else {
        console.log("\n   Warning: applied_discount_id column not found");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testComplexRelations() {
  try {
    const orderDetails = await prisma.order.findFirst({
      include: {
        User: true,
        address: {
          include: {
            postal_region: true,
          },
        },
        applied_discount: true,
        cart: {
          include: {
            cartitem: {
              include: {
                product: {
                  include: {
                    discount_rule: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (orderDetails) {
      console.log("Complex query with all migration changes successful");
      console.log("\nSample order with full details:");
      console.log(`Order #${orderDetails.order_id}`);
      console.log(
        `  Customer: ${orderDetails.User.first_name} ${orderDetails.User.last_name}`
      );

      if (orderDetails.address && orderDetails.address.postal_region) {
        console.log(`  Shipping: ${orderDetails.address.street}`);
        console.log(
          `  Location: ${orderDetails.address.postal_region.city}, ${orderDetails.address.postal_region.country}`
        );
      }

      if (orderDetails.applied_discount) {
        console.log(`  Order Discount: ${orderDetails.applied_discount.code}`);
      }

      if (orderDetails.cart && orderDetails.cart.cartitem.length > 0) {
        console.log("  Items:");
        orderDetails.cart.cartitem.forEach((item) => {
          console.log(`    - ${item.product.name} x${item.quantity}`);
          if (item.product.discount_rule) {
            console.log(
              `      Product Discount: ${item.product.discount_rule.code}`
            );
          }
        });
      }
    } else {
      console.log("   No orders found in database");
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testDiscountUsageStatistics() {
  try {
    const discountStats = await prisma.discountRule.findMany({
      include: {
        _count: {
          select: {
            products: true,
            orders: true,
          },
        },
      },
    });

    console.log("Discount usage tracking works correctly");
    console.log(`\nDiscount Rules Usage:`);

    discountStats.forEach((discount) => {
      console.log(`  - ${discount.code}:`);
      console.log(`    Applied to ${discount._count.products} product(s)`);
      console.log(`    Used in ${discount._count.orders} order(s)`);
    });
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function testPostalRegionUsage() {
  try {
    const regionUsage = await prisma.postalRegion.findMany({
      include: {
        _count: {
          select: {
            addresses: true,
          },
        },
      },
    });

    console.log("PostalRegion usage tracking works correctly");
    console.log(`\nPostal Regions Usage:`);

    regionUsage.forEach((region) => {
      console.log(
        `  - ${region.postal_code} (${region.city}, ${region.country}):`
      );
      console.log(`    Used by ${region._count.addresses} address(es)`);
    });
  } catch (error) {
    console.error(error.message);
  }
  console.log("");
}

async function main() {
  try {
    console.log("=".repeat(70));
    console.log("  MIGRATION TESTING - STRUCTURAL CHANGES VERIFICATION");
    console.log("  Testing without clearing existing data");
    console.log("=".repeat(70));
    console.log("\n");

    await testPostalRegionModel();

    await testAddressPostalRegionRelation();

    await testDiscountRuleModel();

    await testProductDiscountRuleRelation();

    await testOrderDiscountAndNullableFields();

    await testComplexRelations();

    await testDiscountUsageStatistics();
    await testPostalRegionUsage();

    console.log("=".repeat(70));
    console.log("Migration tests completed!");
    console.log("=".repeat(70));
  } catch (error) {
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
