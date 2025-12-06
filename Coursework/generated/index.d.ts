
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DiscountRule
 * 
 */
export type DiscountRule = $Result.DefaultSelection<Prisma.$DiscountRulePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model PostalRegion
 * 
 */
export type PostalRegion = $Result.DefaultSelection<Prisma.$PostalRegionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model address
 * 
 */
export type address = $Result.DefaultSelection<Prisma.$addressPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model cartitem
 * 
 */
export type cartitem = $Result.DefaultSelection<Prisma.$cartitemPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model delivery
 * 
 */
export type delivery = $Result.DefaultSelection<Prisma.$deliveryPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model wishlist
 * 
 */
export type wishlist = $Result.DefaultSelection<Prisma.$wishlistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const delivery_statuses: {
  preparing: 'preparing',
  in_transit: 'in_transit',
  delivered: 'delivered',
  returned: 'returned'
};

export type delivery_statuses = (typeof delivery_statuses)[keyof typeof delivery_statuses]


export const discount_types: {
  percent: 'percent',
  fixed: 'fixed'
};

export type discount_types = (typeof discount_types)[keyof typeof discount_types]


export const methods: {
  card: 'card',
  paypal: 'paypal',
  cash_on_delivery: 'cash_on_delivery'
};

export type methods = (typeof methods)[keyof typeof methods]


export const order_statuses: {
  pending: 'pending',
  paid: 'paid',
  shipped: 'shipped',
  delivered: 'delivered',
  cancelled: 'cancelled'
};

export type order_statuses = (typeof order_statuses)[keyof typeof order_statuses]


export const payment_statuses: {
  pending: 'pending',
  success: 'success',
  failed: 'failed',
  refunded: 'refunded'
};

export type payment_statuses = (typeof payment_statuses)[keyof typeof payment_statuses]


export const product_statuses: {
  active: 'active',
  hidden: 'hidden',
  out_of_stock: 'out_of_stock'
};

export type product_statuses = (typeof product_statuses)[keyof typeof product_statuses]


export const rols: {
  customer: 'customer',
  admin: 'admin',
  manager: 'manager',
  support: 'support'
};

export type rols = (typeof rols)[keyof typeof rols]


export const types: {
  percent: 'percent',
  fixed: 'fixed'
};

export type types = (typeof types)[keyof typeof types]

}

export type delivery_statuses = $Enums.delivery_statuses

export const delivery_statuses: typeof $Enums.delivery_statuses

export type discount_types = $Enums.discount_types

export const discount_types: typeof $Enums.discount_types

export type methods = $Enums.methods

export const methods: typeof $Enums.methods

export type order_statuses = $Enums.order_statuses

export const order_statuses: typeof $Enums.order_statuses

export type payment_statuses = $Enums.payment_statuses

export const payment_statuses: typeof $Enums.payment_statuses

export type product_statuses = $Enums.product_statuses

export const product_statuses: typeof $Enums.product_statuses

export type rols = $Enums.rols

export const rols: typeof $Enums.rols

export type types = $Enums.types

export const types: typeof $Enums.types

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DiscountRules
 * const discountRules = await prisma.discountRule.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DiscountRules
   * const discountRules = await prisma.discountRule.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.discountRule`: Exposes CRUD operations for the **DiscountRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscountRules
    * const discountRules = await prisma.discountRule.findMany()
    * ```
    */
  get discountRule(): Prisma.DiscountRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postalRegion`: Exposes CRUD operations for the **PostalRegion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostalRegions
    * const postalRegions = await prisma.postalRegion.findMany()
    * ```
    */
  get postalRegion(): Prisma.PostalRegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartitem`: Exposes CRUD operations for the **cartitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartitems
    * const cartitems = await prisma.cartitem.findMany()
    * ```
    */
  get cartitem(): Prisma.cartitemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.deliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlist`: Exposes CRUD operations for the **wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlist.findMany()
    * ```
    */
  get wishlist(): Prisma.wishlistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DiscountRule: 'DiscountRule',
    Order: 'Order',
    PostalRegion: 'PostalRegion',
    User: 'User',
    address: 'address',
    cart: 'cart',
    cartitem: 'cartitem',
    category: 'category',
    delivery: 'delivery',
    payment: 'payment',
    product: 'product',
    review: 'review',
    wishlist: 'wishlist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "discountRule" | "order" | "postalRegion" | "user" | "address" | "cart" | "cartitem" | "category" | "delivery" | "payment" | "product" | "review" | "wishlist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DiscountRule: {
        payload: Prisma.$DiscountRulePayload<ExtArgs>
        fields: Prisma.DiscountRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          findFirst: {
            args: Prisma.DiscountRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          findMany: {
            args: Prisma.DiscountRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>[]
          }
          create: {
            args: Prisma.DiscountRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          createMany: {
            args: Prisma.DiscountRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>[]
          }
          delete: {
            args: Prisma.DiscountRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          update: {
            args: Prisma.DiscountRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          deleteMany: {
            args: Prisma.DiscountRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscountRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>[]
          }
          upsert: {
            args: Prisma.DiscountRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          aggregate: {
            args: Prisma.DiscountRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscountRule>
          }
          groupBy: {
            args: Prisma.DiscountRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountRuleCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountRuleCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      PostalRegion: {
        payload: Prisma.$PostalRegionPayload<ExtArgs>
        fields: Prisma.PostalRegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostalRegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostalRegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>
          }
          findFirst: {
            args: Prisma.PostalRegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostalRegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>
          }
          findMany: {
            args: Prisma.PostalRegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>[]
          }
          create: {
            args: Prisma.PostalRegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>
          }
          createMany: {
            args: Prisma.PostalRegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostalRegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>[]
          }
          delete: {
            args: Prisma.PostalRegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>
          }
          update: {
            args: Prisma.PostalRegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>
          }
          deleteMany: {
            args: Prisma.PostalRegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostalRegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostalRegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>[]
          }
          upsert: {
            args: Prisma.PostalRegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostalRegionPayload>
          }
          aggregate: {
            args: Prisma.PostalRegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostalRegion>
          }
          groupBy: {
            args: Prisma.PostalRegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostalRegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostalRegionCountArgs<ExtArgs>
            result: $Utils.Optional<PostalRegionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      address: {
        payload: Prisma.$addressPayload<ExtArgs>
        fields: Prisma.addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findFirst: {
            args: Prisma.addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findMany: {
            args: Prisma.addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          create: {
            args: Prisma.addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          createMany: {
            args: Prisma.addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          delete: {
            args: Prisma.addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          update: {
            args: Prisma.addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          deleteMany: {
            args: Prisma.addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          upsert: {
            args: Prisma.addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      cartitem: {
        payload: Prisma.$cartitemPayload<ExtArgs>
        fields: Prisma.cartitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>
          }
          findFirst: {
            args: Prisma.cartitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>
          }
          findMany: {
            args: Prisma.cartitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>[]
          }
          create: {
            args: Prisma.cartitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>
          }
          createMany: {
            args: Prisma.cartitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartitemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>[]
          }
          delete: {
            args: Prisma.cartitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>
          }
          update: {
            args: Prisma.cartitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>
          }
          deleteMany: {
            args: Prisma.cartitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartitemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>[]
          }
          upsert: {
            args: Prisma.cartitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemPayload>
          }
          aggregate: {
            args: Prisma.CartitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartitem>
          }
          groupBy: {
            args: Prisma.cartitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartitemCountArgs<ExtArgs>
            result: $Utils.Optional<CartitemCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      delivery: {
        payload: Prisma.$deliveryPayload<ExtArgs>
        fields: Prisma.deliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          findFirst: {
            args: Prisma.deliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          findMany: {
            args: Prisma.deliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>[]
          }
          create: {
            args: Prisma.deliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          createMany: {
            args: Prisma.deliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.deliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>[]
          }
          delete: {
            args: Prisma.deliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          update: {
            args: Prisma.deliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          deleteMany: {
            args: Prisma.deliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.deliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>[]
          }
          upsert: {
            args: Prisma.deliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.deliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.deliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      wishlist: {
        payload: Prisma.$wishlistPayload<ExtArgs>
        fields: Prisma.wishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          findFirst: {
            args: Prisma.wishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          findMany: {
            args: Prisma.wishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>[]
          }
          create: {
            args: Prisma.wishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          createMany: {
            args: Prisma.wishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wishlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>[]
          }
          delete: {
            args: Prisma.wishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          update: {
            args: Prisma.wishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          deleteMany: {
            args: Prisma.wishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.wishlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>[]
          }
          upsert: {
            args: Prisma.wishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          aggregate: {
            args: Prisma.WishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlist>
          }
          groupBy: {
            args: Prisma.wishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.wishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    discountRule?: DiscountRuleOmit
    order?: OrderOmit
    postalRegion?: PostalRegionOmit
    user?: UserOmit
    address?: addressOmit
    cart?: cartOmit
    cartitem?: cartitemOmit
    category?: categoryOmit
    delivery?: deliveryOmit
    payment?: paymentOmit
    product?: productOmit
    review?: reviewOmit
    wishlist?: wishlistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DiscountRuleCountOutputType
   */

  export type DiscountRuleCountOutputType = {
    Order: number
    product: number
  }

  export type DiscountRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | DiscountRuleCountOutputTypeCountOrderArgs
    product?: boolean | DiscountRuleCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * DiscountRuleCountOutputType without action
   */
  export type DiscountRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRuleCountOutputType
     */
    select?: DiscountRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscountRuleCountOutputType without action
   */
  export type DiscountRuleCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * DiscountRuleCountOutputType without action
   */
  export type DiscountRuleCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    payment: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | OrderCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Count Type PostalRegionCountOutputType
   */

  export type PostalRegionCountOutputType = {
    address: number
  }

  export type PostalRegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | PostalRegionCountOutputTypeCountAddressArgs
  }

  // Custom InputTypes
  /**
   * PostalRegionCountOutputType without action
   */
  export type PostalRegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegionCountOutputType
     */
    select?: PostalRegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostalRegionCountOutputType without action
   */
  export type PostalRegionCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Order: number
    address: number
    cart: number
    review: number
    wishlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | UserCountOutputTypeCountOrderArgs
    address?: boolean | UserCountOutputTypeCountAddressArgs
    cart?: boolean | UserCountOutputTypeCountCartArgs
    review?: boolean | UserCountOutputTypeCountReviewArgs
    wishlist?: boolean | UserCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wishlistWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    Order: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | AddressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    Order: number
    cartitem: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | CartCountOutputTypeCountOrderArgs
    cartitem?: boolean | CartCountOutputTypeCountCartitemArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCartitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartitemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    other_category: number
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_category?: boolean | CategoryCountOutputTypeCountOther_categoryArgs
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountOther_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    cartitem: number
    review: number
    wishlist: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartitem?: boolean | ProductCountOutputTypeCountCartitemArgs
    review?: boolean | ProductCountOutputTypeCountReviewArgs
    wishlist?: boolean | ProductCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartitemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wishlistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DiscountRule
   */

  export type AggregateDiscountRule = {
    _count: DiscountRuleCountAggregateOutputType | null
    _avg: DiscountRuleAvgAggregateOutputType | null
    _sum: DiscountRuleSumAggregateOutputType | null
    _min: DiscountRuleMinAggregateOutputType | null
    _max: DiscountRuleMaxAggregateOutputType | null
  }

  export type DiscountRuleAvgAggregateOutputType = {
    discount_rule_id: number | null
    value: Decimal | null
  }

  export type DiscountRuleSumAggregateOutputType = {
    discount_rule_id: number | null
    value: Decimal | null
  }

  export type DiscountRuleMinAggregateOutputType = {
    discount_rule_id: number | null
    code: string | null
    type: $Enums.discount_types | null
    value: Decimal | null
    valid_from: Date | null
    valid_to: Date | null
    is_active: boolean | null
  }

  export type DiscountRuleMaxAggregateOutputType = {
    discount_rule_id: number | null
    code: string | null
    type: $Enums.discount_types | null
    value: Decimal | null
    valid_from: Date | null
    valid_to: Date | null
    is_active: boolean | null
  }

  export type DiscountRuleCountAggregateOutputType = {
    discount_rule_id: number
    code: number
    type: number
    value: number
    valid_from: number
    valid_to: number
    is_active: number
    _all: number
  }


  export type DiscountRuleAvgAggregateInputType = {
    discount_rule_id?: true
    value?: true
  }

  export type DiscountRuleSumAggregateInputType = {
    discount_rule_id?: true
    value?: true
  }

  export type DiscountRuleMinAggregateInputType = {
    discount_rule_id?: true
    code?: true
    type?: true
    value?: true
    valid_from?: true
    valid_to?: true
    is_active?: true
  }

  export type DiscountRuleMaxAggregateInputType = {
    discount_rule_id?: true
    code?: true
    type?: true
    value?: true
    valid_from?: true
    valid_to?: true
    is_active?: true
  }

  export type DiscountRuleCountAggregateInputType = {
    discount_rule_id?: true
    code?: true
    type?: true
    value?: true
    valid_from?: true
    valid_to?: true
    is_active?: true
    _all?: true
  }

  export type DiscountRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountRule to aggregate.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscountRules
    **/
    _count?: true | DiscountRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountRuleMaxAggregateInputType
  }

  export type GetDiscountRuleAggregateType<T extends DiscountRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscountRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscountRule[P]>
      : GetScalarType<T[P], AggregateDiscountRule[P]>
  }




  export type DiscountRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountRuleWhereInput
    orderBy?: DiscountRuleOrderByWithAggregationInput | DiscountRuleOrderByWithAggregationInput[]
    by: DiscountRuleScalarFieldEnum[] | DiscountRuleScalarFieldEnum
    having?: DiscountRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountRuleCountAggregateInputType | true
    _avg?: DiscountRuleAvgAggregateInputType
    _sum?: DiscountRuleSumAggregateInputType
    _min?: DiscountRuleMinAggregateInputType
    _max?: DiscountRuleMaxAggregateInputType
  }

  export type DiscountRuleGroupByOutputType = {
    discount_rule_id: number
    code: string
    type: $Enums.discount_types
    value: Decimal
    valid_from: Date
    valid_to: Date
    is_active: boolean | null
    _count: DiscountRuleCountAggregateOutputType | null
    _avg: DiscountRuleAvgAggregateOutputType | null
    _sum: DiscountRuleSumAggregateOutputType | null
    _min: DiscountRuleMinAggregateOutputType | null
    _max: DiscountRuleMaxAggregateOutputType | null
  }

  type GetDiscountRuleGroupByPayload<T extends DiscountRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountRuleGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountRuleGroupByOutputType[P]>
        }
      >
    >


  export type DiscountRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discount_rule_id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    valid_from?: boolean
    valid_to?: boolean
    is_active?: boolean
    Order?: boolean | DiscountRule$OrderArgs<ExtArgs>
    product?: boolean | DiscountRule$productArgs<ExtArgs>
    _count?: boolean | DiscountRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discountRule"]>

  export type DiscountRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discount_rule_id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    valid_from?: boolean
    valid_to?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["discountRule"]>

  export type DiscountRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discount_rule_id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    valid_from?: boolean
    valid_to?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["discountRule"]>

  export type DiscountRuleSelectScalar = {
    discount_rule_id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    valid_from?: boolean
    valid_to?: boolean
    is_active?: boolean
  }

  export type DiscountRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"discount_rule_id" | "code" | "type" | "value" | "valid_from" | "valid_to" | "is_active", ExtArgs["result"]["discountRule"]>
  export type DiscountRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | DiscountRule$OrderArgs<ExtArgs>
    product?: boolean | DiscountRule$productArgs<ExtArgs>
    _count?: boolean | DiscountRuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscountRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiscountRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiscountRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscountRule"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      discount_rule_id: number
      code: string
      type: $Enums.discount_types
      value: Prisma.Decimal
      valid_from: Date
      valid_to: Date
      is_active: boolean | null
    }, ExtArgs["result"]["discountRule"]>
    composites: {}
  }

  type DiscountRuleGetPayload<S extends boolean | null | undefined | DiscountRuleDefaultArgs> = $Result.GetResult<Prisma.$DiscountRulePayload, S>

  type DiscountRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountRuleCountAggregateInputType | true
    }

  export interface DiscountRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscountRule'], meta: { name: 'DiscountRule' } }
    /**
     * Find zero or one DiscountRule that matches the filter.
     * @param {DiscountRuleFindUniqueArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountRuleFindUniqueArgs>(args: SelectSubset<T, DiscountRuleFindUniqueArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscountRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountRuleFindUniqueOrThrowArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscountRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleFindFirstArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountRuleFindFirstArgs>(args?: SelectSubset<T, DiscountRuleFindFirstArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscountRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleFindFirstOrThrowArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscountRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscountRules
     * const discountRules = await prisma.discountRule.findMany()
     * 
     * // Get first 10 DiscountRules
     * const discountRules = await prisma.discountRule.findMany({ take: 10 })
     * 
     * // Only select the `discount_rule_id`
     * const discountRuleWithDiscount_rule_idOnly = await prisma.discountRule.findMany({ select: { discount_rule_id: true } })
     * 
     */
    findMany<T extends DiscountRuleFindManyArgs>(args?: SelectSubset<T, DiscountRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscountRule.
     * @param {DiscountRuleCreateArgs} args - Arguments to create a DiscountRule.
     * @example
     * // Create one DiscountRule
     * const DiscountRule = await prisma.discountRule.create({
     *   data: {
     *     // ... data to create a DiscountRule
     *   }
     * })
     * 
     */
    create<T extends DiscountRuleCreateArgs>(args: SelectSubset<T, DiscountRuleCreateArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscountRules.
     * @param {DiscountRuleCreateManyArgs} args - Arguments to create many DiscountRules.
     * @example
     * // Create many DiscountRules
     * const discountRule = await prisma.discountRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountRuleCreateManyArgs>(args?: SelectSubset<T, DiscountRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscountRules and returns the data saved in the database.
     * @param {DiscountRuleCreateManyAndReturnArgs} args - Arguments to create many DiscountRules.
     * @example
     * // Create many DiscountRules
     * const discountRule = await prisma.discountRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscountRules and only return the `discount_rule_id`
     * const discountRuleWithDiscount_rule_idOnly = await prisma.discountRule.createManyAndReturn({
     *   select: { discount_rule_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscountRule.
     * @param {DiscountRuleDeleteArgs} args - Arguments to delete one DiscountRule.
     * @example
     * // Delete one DiscountRule
     * const DiscountRule = await prisma.discountRule.delete({
     *   where: {
     *     // ... filter to delete one DiscountRule
     *   }
     * })
     * 
     */
    delete<T extends DiscountRuleDeleteArgs>(args: SelectSubset<T, DiscountRuleDeleteArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscountRule.
     * @param {DiscountRuleUpdateArgs} args - Arguments to update one DiscountRule.
     * @example
     * // Update one DiscountRule
     * const discountRule = await prisma.discountRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountRuleUpdateArgs>(args: SelectSubset<T, DiscountRuleUpdateArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscountRules.
     * @param {DiscountRuleDeleteManyArgs} args - Arguments to filter DiscountRules to delete.
     * @example
     * // Delete a few DiscountRules
     * const { count } = await prisma.discountRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountRuleDeleteManyArgs>(args?: SelectSubset<T, DiscountRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscountRules
     * const discountRule = await prisma.discountRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountRuleUpdateManyArgs>(args: SelectSubset<T, DiscountRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountRules and returns the data updated in the database.
     * @param {DiscountRuleUpdateManyAndReturnArgs} args - Arguments to update many DiscountRules.
     * @example
     * // Update many DiscountRules
     * const discountRule = await prisma.discountRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscountRules and only return the `discount_rule_id`
     * const discountRuleWithDiscount_rule_idOnly = await prisma.discountRule.updateManyAndReturn({
     *   select: { discount_rule_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscountRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscountRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscountRule.
     * @param {DiscountRuleUpsertArgs} args - Arguments to update or create a DiscountRule.
     * @example
     * // Update or create a DiscountRule
     * const discountRule = await prisma.discountRule.upsert({
     *   create: {
     *     // ... data to create a DiscountRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscountRule we want to update
     *   }
     * })
     */
    upsert<T extends DiscountRuleUpsertArgs>(args: SelectSubset<T, DiscountRuleUpsertArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscountRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleCountArgs} args - Arguments to filter DiscountRules to count.
     * @example
     * // Count the number of DiscountRules
     * const count = await prisma.discountRule.count({
     *   where: {
     *     // ... the filter for the DiscountRules we want to count
     *   }
     * })
    **/
    count<T extends DiscountRuleCountArgs>(
      args?: Subset<T, DiscountRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscountRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountRuleAggregateArgs>(args: Subset<T, DiscountRuleAggregateArgs>): Prisma.PrismaPromise<GetDiscountRuleAggregateType<T>>

    /**
     * Group by DiscountRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscountRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountRuleGroupByArgs['orderBy'] }
        : { orderBy?: DiscountRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscountRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscountRule model
   */
  readonly fields: DiscountRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscountRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends DiscountRule$OrderArgs<ExtArgs> = {}>(args?: Subset<T, DiscountRule$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends DiscountRule$productArgs<ExtArgs> = {}>(args?: Subset<T, DiscountRule$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscountRule model
   */
  interface DiscountRuleFieldRefs {
    readonly discount_rule_id: FieldRef<"DiscountRule", 'Int'>
    readonly code: FieldRef<"DiscountRule", 'String'>
    readonly type: FieldRef<"DiscountRule", 'discount_types'>
    readonly value: FieldRef<"DiscountRule", 'Decimal'>
    readonly valid_from: FieldRef<"DiscountRule", 'DateTime'>
    readonly valid_to: FieldRef<"DiscountRule", 'DateTime'>
    readonly is_active: FieldRef<"DiscountRule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DiscountRule findUnique
   */
  export type DiscountRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule findUniqueOrThrow
   */
  export type DiscountRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule findFirst
   */
  export type DiscountRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountRules.
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountRules.
     */
    distinct?: DiscountRuleScalarFieldEnum | DiscountRuleScalarFieldEnum[]
  }

  /**
   * DiscountRule findFirstOrThrow
   */
  export type DiscountRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountRules.
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountRules.
     */
    distinct?: DiscountRuleScalarFieldEnum | DiscountRuleScalarFieldEnum[]
  }

  /**
   * DiscountRule findMany
   */
  export type DiscountRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * Filter, which DiscountRules to fetch.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscountRules.
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    distinct?: DiscountRuleScalarFieldEnum | DiscountRuleScalarFieldEnum[]
  }

  /**
   * DiscountRule create
   */
  export type DiscountRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscountRule.
     */
    data: XOR<DiscountRuleCreateInput, DiscountRuleUncheckedCreateInput>
  }

  /**
   * DiscountRule createMany
   */
  export type DiscountRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscountRules.
     */
    data: DiscountRuleCreateManyInput | DiscountRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscountRule createManyAndReturn
   */
  export type DiscountRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The data used to create many DiscountRules.
     */
    data: DiscountRuleCreateManyInput | DiscountRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscountRule update
   */
  export type DiscountRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscountRule.
     */
    data: XOR<DiscountRuleUpdateInput, DiscountRuleUncheckedUpdateInput>
    /**
     * Choose, which DiscountRule to update.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule updateMany
   */
  export type DiscountRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscountRules.
     */
    data: XOR<DiscountRuleUpdateManyMutationInput, DiscountRuleUncheckedUpdateManyInput>
    /**
     * Filter which DiscountRules to update
     */
    where?: DiscountRuleWhereInput
    /**
     * Limit how many DiscountRules to update.
     */
    limit?: number
  }

  /**
   * DiscountRule updateManyAndReturn
   */
  export type DiscountRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The data used to update DiscountRules.
     */
    data: XOR<DiscountRuleUpdateManyMutationInput, DiscountRuleUncheckedUpdateManyInput>
    /**
     * Filter which DiscountRules to update
     */
    where?: DiscountRuleWhereInput
    /**
     * Limit how many DiscountRules to update.
     */
    limit?: number
  }

  /**
   * DiscountRule upsert
   */
  export type DiscountRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscountRule to update in case it exists.
     */
    where: DiscountRuleWhereUniqueInput
    /**
     * In case the DiscountRule found by the `where` argument doesn't exist, create a new DiscountRule with this data.
     */
    create: XOR<DiscountRuleCreateInput, DiscountRuleUncheckedCreateInput>
    /**
     * In case the DiscountRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountRuleUpdateInput, DiscountRuleUncheckedUpdateInput>
  }

  /**
   * DiscountRule delete
   */
  export type DiscountRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    /**
     * Filter which DiscountRule to delete.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule deleteMany
   */
  export type DiscountRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountRules to delete
     */
    where?: DiscountRuleWhereInput
    /**
     * Limit how many DiscountRules to delete.
     */
    limit?: number
  }

  /**
   * DiscountRule.Order
   */
  export type DiscountRule$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * DiscountRule.product
   */
  export type DiscountRule$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * DiscountRule without action
   */
  export type DiscountRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    address_id: number | null
    cart_id: number | null
    total_amount: Decimal | null
    applied_discount_id: number | null
  }

  export type OrderSumAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    address_id: number | null
    cart_id: number | null
    total_amount: Decimal | null
    applied_discount_id: number | null
  }

  export type OrderMinAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    address_id: number | null
    cart_id: number | null
    total_amount: Decimal | null
    status: $Enums.order_statuses | null
    created_at: Date | null
    shipped_at: Date | null
    delivered_at: Date | null
    applied_discount_id: number | null
  }

  export type OrderMaxAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    address_id: number | null
    cart_id: number | null
    total_amount: Decimal | null
    status: $Enums.order_statuses | null
    created_at: Date | null
    shipped_at: Date | null
    delivered_at: Date | null
    applied_discount_id: number | null
  }

  export type OrderCountAggregateOutputType = {
    order_id: number
    user_id: number
    address_id: number
    cart_id: number
    total_amount: number
    status: number
    created_at: number
    shipped_at: number
    delivered_at: number
    applied_discount_id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_id?: true
    user_id?: true
    address_id?: true
    cart_id?: true
    total_amount?: true
    applied_discount_id?: true
  }

  export type OrderSumAggregateInputType = {
    order_id?: true
    user_id?: true
    address_id?: true
    cart_id?: true
    total_amount?: true
    applied_discount_id?: true
  }

  export type OrderMinAggregateInputType = {
    order_id?: true
    user_id?: true
    address_id?: true
    cart_id?: true
    total_amount?: true
    status?: true
    created_at?: true
    shipped_at?: true
    delivered_at?: true
    applied_discount_id?: true
  }

  export type OrderMaxAggregateInputType = {
    order_id?: true
    user_id?: true
    address_id?: true
    cart_id?: true
    total_amount?: true
    status?: true
    created_at?: true
    shipped_at?: true
    delivered_at?: true
    applied_discount_id?: true
  }

  export type OrderCountAggregateInputType = {
    order_id?: true
    user_id?: true
    address_id?: true
    cart_id?: true
    total_amount?: true
    status?: true
    created_at?: true
    shipped_at?: true
    delivered_at?: true
    applied_discount_id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    order_id: number
    user_id: number
    address_id: number | null
    cart_id: number | null
    total_amount: Decimal
    status: $Enums.order_statuses | null
    created_at: Date | null
    shipped_at: Date | null
    delivered_at: Date | null
    applied_discount_id: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    address_id?: boolean
    cart_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    shipped_at?: boolean
    delivered_at?: boolean
    applied_discount_id?: boolean
    address?: boolean | Order$addressArgs<ExtArgs>
    DiscountRule?: boolean | Order$DiscountRuleArgs<ExtArgs>
    cart?: boolean | Order$cartArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | Order$deliveryArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    address_id?: boolean
    cart_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    shipped_at?: boolean
    delivered_at?: boolean
    applied_discount_id?: boolean
    address?: boolean | Order$addressArgs<ExtArgs>
    DiscountRule?: boolean | Order$DiscountRuleArgs<ExtArgs>
    cart?: boolean | Order$cartArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    address_id?: boolean
    cart_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    shipped_at?: boolean
    delivered_at?: boolean
    applied_discount_id?: boolean
    address?: boolean | Order$addressArgs<ExtArgs>
    DiscountRule?: boolean | Order$DiscountRuleArgs<ExtArgs>
    cart?: boolean | Order$cartArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    order_id?: boolean
    user_id?: boolean
    address_id?: boolean
    cart_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    shipped_at?: boolean
    delivered_at?: boolean
    applied_discount_id?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "user_id" | "address_id" | "cart_id" | "total_amount" | "status" | "created_at" | "shipped_at" | "delivered_at" | "applied_discount_id", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Order$addressArgs<ExtArgs>
    DiscountRule?: boolean | Order$DiscountRuleArgs<ExtArgs>
    cart?: boolean | Order$cartArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | Order$deliveryArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Order$addressArgs<ExtArgs>
    DiscountRule?: boolean | Order$DiscountRuleArgs<ExtArgs>
    cart?: boolean | Order$cartArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Order$addressArgs<ExtArgs>
    DiscountRule?: boolean | Order$DiscountRuleArgs<ExtArgs>
    cart?: boolean | Order$cartArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      address: Prisma.$addressPayload<ExtArgs> | null
      DiscountRule: Prisma.$DiscountRulePayload<ExtArgs> | null
      cart: Prisma.$cartPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>
      delivery: Prisma.$deliveryPayload<ExtArgs> | null
      payment: Prisma.$paymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      user_id: number
      address_id: number | null
      cart_id: number | null
      total_amount: Prisma.Decimal
      status: $Enums.order_statuses | null
      created_at: Date | null
      shipped_at: Date | null
      delivered_at: Date | null
      applied_discount_id: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.updateManyAndReturn({
     *   select: { order_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Order$addressArgs<ExtArgs> = {}>(args?: Subset<T, Order$addressArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DiscountRule<T extends Order$DiscountRuleArgs<ExtArgs> = {}>(args?: Subset<T, Order$DiscountRuleArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cart<T extends Order$cartArgs<ExtArgs> = {}>(args?: Subset<T, Order$cartArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    delivery<T extends Order$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, Order$deliveryArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly order_id: FieldRef<"Order", 'Int'>
    readonly user_id: FieldRef<"Order", 'Int'>
    readonly address_id: FieldRef<"Order", 'Int'>
    readonly cart_id: FieldRef<"Order", 'Int'>
    readonly total_amount: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'order_statuses'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly shipped_at: FieldRef<"Order", 'DateTime'>
    readonly delivered_at: FieldRef<"Order", 'DateTime'>
    readonly applied_discount_id: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.address
   */
  export type Order$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
  }

  /**
   * Order.DiscountRule
   */
  export type Order$DiscountRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    where?: DiscountRuleWhereInput
  }

  /**
   * Order.cart
   */
  export type Order$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
  }

  /**
   * Order.delivery
   */
  export type Order$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    where?: deliveryWhereInput
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model PostalRegion
   */

  export type AggregatePostalRegion = {
    _count: PostalRegionCountAggregateOutputType | null
    _min: PostalRegionMinAggregateOutputType | null
    _max: PostalRegionMaxAggregateOutputType | null
  }

  export type PostalRegionMinAggregateOutputType = {
    postal_code: string | null
    city: string | null
    country: string | null
  }

  export type PostalRegionMaxAggregateOutputType = {
    postal_code: string | null
    city: string | null
    country: string | null
  }

  export type PostalRegionCountAggregateOutputType = {
    postal_code: number
    city: number
    country: number
    _all: number
  }


  export type PostalRegionMinAggregateInputType = {
    postal_code?: true
    city?: true
    country?: true
  }

  export type PostalRegionMaxAggregateInputType = {
    postal_code?: true
    city?: true
    country?: true
  }

  export type PostalRegionCountAggregateInputType = {
    postal_code?: true
    city?: true
    country?: true
    _all?: true
  }

  export type PostalRegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostalRegion to aggregate.
     */
    where?: PostalRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostalRegions to fetch.
     */
    orderBy?: PostalRegionOrderByWithRelationInput | PostalRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostalRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostalRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostalRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostalRegions
    **/
    _count?: true | PostalRegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostalRegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostalRegionMaxAggregateInputType
  }

  export type GetPostalRegionAggregateType<T extends PostalRegionAggregateArgs> = {
        [P in keyof T & keyof AggregatePostalRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostalRegion[P]>
      : GetScalarType<T[P], AggregatePostalRegion[P]>
  }




  export type PostalRegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostalRegionWhereInput
    orderBy?: PostalRegionOrderByWithAggregationInput | PostalRegionOrderByWithAggregationInput[]
    by: PostalRegionScalarFieldEnum[] | PostalRegionScalarFieldEnum
    having?: PostalRegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostalRegionCountAggregateInputType | true
    _min?: PostalRegionMinAggregateInputType
    _max?: PostalRegionMaxAggregateInputType
  }

  export type PostalRegionGroupByOutputType = {
    postal_code: string
    city: string
    country: string
    _count: PostalRegionCountAggregateOutputType | null
    _min: PostalRegionMinAggregateOutputType | null
    _max: PostalRegionMaxAggregateOutputType | null
  }

  type GetPostalRegionGroupByPayload<T extends PostalRegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostalRegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostalRegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostalRegionGroupByOutputType[P]>
            : GetScalarType<T[P], PostalRegionGroupByOutputType[P]>
        }
      >
    >


  export type PostalRegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postal_code?: boolean
    city?: boolean
    country?: boolean
    address?: boolean | PostalRegion$addressArgs<ExtArgs>
    _count?: boolean | PostalRegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postalRegion"]>

  export type PostalRegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postal_code?: boolean
    city?: boolean
    country?: boolean
  }, ExtArgs["result"]["postalRegion"]>

  export type PostalRegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postal_code?: boolean
    city?: boolean
    country?: boolean
  }, ExtArgs["result"]["postalRegion"]>

  export type PostalRegionSelectScalar = {
    postal_code?: boolean
    city?: boolean
    country?: boolean
  }

  export type PostalRegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postal_code" | "city" | "country", ExtArgs["result"]["postalRegion"]>
  export type PostalRegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | PostalRegion$addressArgs<ExtArgs>
    _count?: boolean | PostalRegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostalRegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostalRegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostalRegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostalRegion"
    objects: {
      address: Prisma.$addressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      postal_code: string
      city: string
      country: string
    }, ExtArgs["result"]["postalRegion"]>
    composites: {}
  }

  type PostalRegionGetPayload<S extends boolean | null | undefined | PostalRegionDefaultArgs> = $Result.GetResult<Prisma.$PostalRegionPayload, S>

  type PostalRegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostalRegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostalRegionCountAggregateInputType | true
    }

  export interface PostalRegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostalRegion'], meta: { name: 'PostalRegion' } }
    /**
     * Find zero or one PostalRegion that matches the filter.
     * @param {PostalRegionFindUniqueArgs} args - Arguments to find a PostalRegion
     * @example
     * // Get one PostalRegion
     * const postalRegion = await prisma.postalRegion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostalRegionFindUniqueArgs>(args: SelectSubset<T, PostalRegionFindUniqueArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostalRegion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostalRegionFindUniqueOrThrowArgs} args - Arguments to find a PostalRegion
     * @example
     * // Get one PostalRegion
     * const postalRegion = await prisma.postalRegion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostalRegionFindUniqueOrThrowArgs>(args: SelectSubset<T, PostalRegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostalRegion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionFindFirstArgs} args - Arguments to find a PostalRegion
     * @example
     * // Get one PostalRegion
     * const postalRegion = await prisma.postalRegion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostalRegionFindFirstArgs>(args?: SelectSubset<T, PostalRegionFindFirstArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostalRegion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionFindFirstOrThrowArgs} args - Arguments to find a PostalRegion
     * @example
     * // Get one PostalRegion
     * const postalRegion = await prisma.postalRegion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostalRegionFindFirstOrThrowArgs>(args?: SelectSubset<T, PostalRegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostalRegions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostalRegions
     * const postalRegions = await prisma.postalRegion.findMany()
     * 
     * // Get first 10 PostalRegions
     * const postalRegions = await prisma.postalRegion.findMany({ take: 10 })
     * 
     * // Only select the `postal_code`
     * const postalRegionWithPostal_codeOnly = await prisma.postalRegion.findMany({ select: { postal_code: true } })
     * 
     */
    findMany<T extends PostalRegionFindManyArgs>(args?: SelectSubset<T, PostalRegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostalRegion.
     * @param {PostalRegionCreateArgs} args - Arguments to create a PostalRegion.
     * @example
     * // Create one PostalRegion
     * const PostalRegion = await prisma.postalRegion.create({
     *   data: {
     *     // ... data to create a PostalRegion
     *   }
     * })
     * 
     */
    create<T extends PostalRegionCreateArgs>(args: SelectSubset<T, PostalRegionCreateArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostalRegions.
     * @param {PostalRegionCreateManyArgs} args - Arguments to create many PostalRegions.
     * @example
     * // Create many PostalRegions
     * const postalRegion = await prisma.postalRegion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostalRegionCreateManyArgs>(args?: SelectSubset<T, PostalRegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostalRegions and returns the data saved in the database.
     * @param {PostalRegionCreateManyAndReturnArgs} args - Arguments to create many PostalRegions.
     * @example
     * // Create many PostalRegions
     * const postalRegion = await prisma.postalRegion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostalRegions and only return the `postal_code`
     * const postalRegionWithPostal_codeOnly = await prisma.postalRegion.createManyAndReturn({
     *   select: { postal_code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostalRegionCreateManyAndReturnArgs>(args?: SelectSubset<T, PostalRegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostalRegion.
     * @param {PostalRegionDeleteArgs} args - Arguments to delete one PostalRegion.
     * @example
     * // Delete one PostalRegion
     * const PostalRegion = await prisma.postalRegion.delete({
     *   where: {
     *     // ... filter to delete one PostalRegion
     *   }
     * })
     * 
     */
    delete<T extends PostalRegionDeleteArgs>(args: SelectSubset<T, PostalRegionDeleteArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostalRegion.
     * @param {PostalRegionUpdateArgs} args - Arguments to update one PostalRegion.
     * @example
     * // Update one PostalRegion
     * const postalRegion = await prisma.postalRegion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostalRegionUpdateArgs>(args: SelectSubset<T, PostalRegionUpdateArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostalRegions.
     * @param {PostalRegionDeleteManyArgs} args - Arguments to filter PostalRegions to delete.
     * @example
     * // Delete a few PostalRegions
     * const { count } = await prisma.postalRegion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostalRegionDeleteManyArgs>(args?: SelectSubset<T, PostalRegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostalRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostalRegions
     * const postalRegion = await prisma.postalRegion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostalRegionUpdateManyArgs>(args: SelectSubset<T, PostalRegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostalRegions and returns the data updated in the database.
     * @param {PostalRegionUpdateManyAndReturnArgs} args - Arguments to update many PostalRegions.
     * @example
     * // Update many PostalRegions
     * const postalRegion = await prisma.postalRegion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostalRegions and only return the `postal_code`
     * const postalRegionWithPostal_codeOnly = await prisma.postalRegion.updateManyAndReturn({
     *   select: { postal_code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostalRegionUpdateManyAndReturnArgs>(args: SelectSubset<T, PostalRegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostalRegion.
     * @param {PostalRegionUpsertArgs} args - Arguments to update or create a PostalRegion.
     * @example
     * // Update or create a PostalRegion
     * const postalRegion = await prisma.postalRegion.upsert({
     *   create: {
     *     // ... data to create a PostalRegion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostalRegion we want to update
     *   }
     * })
     */
    upsert<T extends PostalRegionUpsertArgs>(args: SelectSubset<T, PostalRegionUpsertArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostalRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionCountArgs} args - Arguments to filter PostalRegions to count.
     * @example
     * // Count the number of PostalRegions
     * const count = await prisma.postalRegion.count({
     *   where: {
     *     // ... the filter for the PostalRegions we want to count
     *   }
     * })
    **/
    count<T extends PostalRegionCountArgs>(
      args?: Subset<T, PostalRegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostalRegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostalRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostalRegionAggregateArgs>(args: Subset<T, PostalRegionAggregateArgs>): Prisma.PrismaPromise<GetPostalRegionAggregateType<T>>

    /**
     * Group by PostalRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostalRegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostalRegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostalRegionGroupByArgs['orderBy'] }
        : { orderBy?: PostalRegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostalRegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostalRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostalRegion model
   */
  readonly fields: PostalRegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostalRegion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostalRegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends PostalRegion$addressArgs<ExtArgs> = {}>(args?: Subset<T, PostalRegion$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostalRegion model
   */
  interface PostalRegionFieldRefs {
    readonly postal_code: FieldRef<"PostalRegion", 'String'>
    readonly city: FieldRef<"PostalRegion", 'String'>
    readonly country: FieldRef<"PostalRegion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostalRegion findUnique
   */
  export type PostalRegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * Filter, which PostalRegion to fetch.
     */
    where: PostalRegionWhereUniqueInput
  }

  /**
   * PostalRegion findUniqueOrThrow
   */
  export type PostalRegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * Filter, which PostalRegion to fetch.
     */
    where: PostalRegionWhereUniqueInput
  }

  /**
   * PostalRegion findFirst
   */
  export type PostalRegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * Filter, which PostalRegion to fetch.
     */
    where?: PostalRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostalRegions to fetch.
     */
    orderBy?: PostalRegionOrderByWithRelationInput | PostalRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostalRegions.
     */
    cursor?: PostalRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostalRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostalRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostalRegions.
     */
    distinct?: PostalRegionScalarFieldEnum | PostalRegionScalarFieldEnum[]
  }

  /**
   * PostalRegion findFirstOrThrow
   */
  export type PostalRegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * Filter, which PostalRegion to fetch.
     */
    where?: PostalRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostalRegions to fetch.
     */
    orderBy?: PostalRegionOrderByWithRelationInput | PostalRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostalRegions.
     */
    cursor?: PostalRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostalRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostalRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostalRegions.
     */
    distinct?: PostalRegionScalarFieldEnum | PostalRegionScalarFieldEnum[]
  }

  /**
   * PostalRegion findMany
   */
  export type PostalRegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * Filter, which PostalRegions to fetch.
     */
    where?: PostalRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostalRegions to fetch.
     */
    orderBy?: PostalRegionOrderByWithRelationInput | PostalRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostalRegions.
     */
    cursor?: PostalRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostalRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostalRegions.
     */
    skip?: number
    distinct?: PostalRegionScalarFieldEnum | PostalRegionScalarFieldEnum[]
  }

  /**
   * PostalRegion create
   */
  export type PostalRegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * The data needed to create a PostalRegion.
     */
    data: XOR<PostalRegionCreateInput, PostalRegionUncheckedCreateInput>
  }

  /**
   * PostalRegion createMany
   */
  export type PostalRegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostalRegions.
     */
    data: PostalRegionCreateManyInput | PostalRegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostalRegion createManyAndReturn
   */
  export type PostalRegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * The data used to create many PostalRegions.
     */
    data: PostalRegionCreateManyInput | PostalRegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostalRegion update
   */
  export type PostalRegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * The data needed to update a PostalRegion.
     */
    data: XOR<PostalRegionUpdateInput, PostalRegionUncheckedUpdateInput>
    /**
     * Choose, which PostalRegion to update.
     */
    where: PostalRegionWhereUniqueInput
  }

  /**
   * PostalRegion updateMany
   */
  export type PostalRegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostalRegions.
     */
    data: XOR<PostalRegionUpdateManyMutationInput, PostalRegionUncheckedUpdateManyInput>
    /**
     * Filter which PostalRegions to update
     */
    where?: PostalRegionWhereInput
    /**
     * Limit how many PostalRegions to update.
     */
    limit?: number
  }

  /**
   * PostalRegion updateManyAndReturn
   */
  export type PostalRegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * The data used to update PostalRegions.
     */
    data: XOR<PostalRegionUpdateManyMutationInput, PostalRegionUncheckedUpdateManyInput>
    /**
     * Filter which PostalRegions to update
     */
    where?: PostalRegionWhereInput
    /**
     * Limit how many PostalRegions to update.
     */
    limit?: number
  }

  /**
   * PostalRegion upsert
   */
  export type PostalRegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * The filter to search for the PostalRegion to update in case it exists.
     */
    where: PostalRegionWhereUniqueInput
    /**
     * In case the PostalRegion found by the `where` argument doesn't exist, create a new PostalRegion with this data.
     */
    create: XOR<PostalRegionCreateInput, PostalRegionUncheckedCreateInput>
    /**
     * In case the PostalRegion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostalRegionUpdateInput, PostalRegionUncheckedUpdateInput>
  }

  /**
   * PostalRegion delete
   */
  export type PostalRegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
    /**
     * Filter which PostalRegion to delete.
     */
    where: PostalRegionWhereUniqueInput
  }

  /**
   * PostalRegion deleteMany
   */
  export type PostalRegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostalRegions to delete
     */
    where?: PostalRegionWhereInput
    /**
     * Limit how many PostalRegions to delete.
     */
    limit?: number
  }

  /**
   * PostalRegion.address
   */
  export type PostalRegion$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * PostalRegion without action
   */
  export type PostalRegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostalRegion
     */
    select?: PostalRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostalRegion
     */
    omit?: PostalRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostalRegionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    phone: string | null
    role: $Enums.rols | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    phone: string | null
    role: $Enums.rols | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    email: number
    password_hash: number
    phone: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    phone?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    phone?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    phone?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone: string | null
    role: $Enums.rols | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    Order?: boolean | User$OrderArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    review?: boolean | User$reviewArgs<ExtArgs>
    wishlist?: boolean | User$wishlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "first_name" | "last_name" | "email" | "password_hash" | "phone" | "role" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | User$OrderArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    review?: boolean | User$reviewArgs<ExtArgs>
    wishlist?: boolean | User$wishlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      address: Prisma.$addressPayload<ExtArgs>[]
      cart: Prisma.$cartPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
      wishlist: Prisma.$wishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string
      last_name: string
      email: string
      password_hash: string
      phone: string | null
      role: $Enums.rols | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends User$reviewArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends User$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, User$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'rols'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * User.review
   */
  export type User$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.wishlist
   */
  export type User$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    where?: wishlistWhereInput
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    cursor?: wishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    address_id: number | null
    user_id: number | null
  }

  export type AddressSumAggregateOutputType = {
    address_id: number | null
    user_id: number | null
  }

  export type AddressMinAggregateOutputType = {
    address_id: number | null
    user_id: number | null
    street: string | null
    postal_code: string | null
    is_default: boolean | null
  }

  export type AddressMaxAggregateOutputType = {
    address_id: number | null
    user_id: number | null
    street: string | null
    postal_code: string | null
    is_default: boolean | null
  }

  export type AddressCountAggregateOutputType = {
    address_id: number
    user_id: number
    street: number
    postal_code: number
    is_default: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    address_id?: true
    user_id?: true
  }

  export type AddressSumAggregateInputType = {
    address_id?: true
    user_id?: true
  }

  export type AddressMinAggregateInputType = {
    address_id?: true
    user_id?: true
    street?: true
    postal_code?: true
    is_default?: true
  }

  export type AddressMaxAggregateInputType = {
    address_id?: true
    user_id?: true
    street?: true
    postal_code?: true
    is_default?: true
  }

  export type AddressCountAggregateInputType = {
    address_id?: true
    user_id?: true
    street?: true
    postal_code?: true
    is_default?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
    orderBy?: addressOrderByWithAggregationInput | addressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    address_id: number
    user_id: number
    street: string
    postal_code: string
    is_default: boolean | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    user_id?: boolean
    street?: boolean
    postal_code?: boolean
    is_default?: boolean
    Order?: boolean | address$OrderArgs<ExtArgs>
    PostalRegion?: boolean | PostalRegionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    user_id?: boolean
    street?: boolean
    postal_code?: boolean
    is_default?: boolean
    PostalRegion?: boolean | PostalRegionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    user_id?: boolean
    street?: boolean
    postal_code?: boolean
    is_default?: boolean
    PostalRegion?: boolean | PostalRegionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectScalar = {
    address_id?: boolean
    user_id?: boolean
    street?: boolean
    postal_code?: boolean
    is_default?: boolean
  }

  export type addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address_id" | "user_id" | "street" | "postal_code" | "is_default", ExtArgs["result"]["address"]>
  export type addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | address$OrderArgs<ExtArgs>
    PostalRegion?: boolean | PostalRegionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type addressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostalRegion?: boolean | PostalRegionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type addressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostalRegion?: boolean | PostalRegionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      PostalRegion: Prisma.$PostalRegionPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      address_id: number
      user_id: number
      street: string
      postal_code: string
      is_default: boolean | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = $Result.GetResult<Prisma.$addressPayload, S>

  type addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address'], meta: { name: 'address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressFindUniqueArgs>(args: SelectSubset<T, addressFindUniqueArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(args: SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressFindFirstArgs>(args?: SelectSubset<T, addressFindFirstArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(args?: SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.findMany({ select: { address_id: true } })
     * 
     */
    findMany<T extends addressFindManyArgs>(args?: SelectSubset<T, addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends addressCreateArgs>(args: SelectSubset<T, addressCreateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressCreateManyArgs>(args?: SelectSubset<T, addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.createManyAndReturn({
     *   select: { address_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressCreateManyAndReturnArgs>(args?: SelectSubset<T, addressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends addressDeleteArgs>(args: SelectSubset<T, addressDeleteArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressUpdateArgs>(args: SelectSubset<T, addressUpdateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressDeleteManyArgs>(args?: SelectSubset<T, addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressUpdateManyArgs>(args: SelectSubset<T, addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.updateManyAndReturn({
     *   select: { address_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressUpdateManyAndReturnArgs>(args: SelectSubset<T, addressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends addressUpsertArgs>(args: SelectSubset<T, addressUpsertArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressGroupByArgs['orderBy'] }
        : { orderBy?: addressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address model
   */
  readonly fields: addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends address$OrderArgs<ExtArgs> = {}>(args?: Subset<T, address$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostalRegion<T extends PostalRegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostalRegionDefaultArgs<ExtArgs>>): Prisma__PostalRegionClient<$Result.GetResult<Prisma.$PostalRegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the address model
   */
  interface addressFieldRefs {
    readonly address_id: FieldRef<"address", 'Int'>
    readonly user_id: FieldRef<"address", 'Int'>
    readonly street: FieldRef<"address", 'String'>
    readonly postal_code: FieldRef<"address", 'String'>
    readonly is_default: FieldRef<"address", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * address findUnique
   */
  export type addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findFirst
   */
  export type addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findMany
   */
  export type addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address create
   */
  export type addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to create a address.
     */
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }

  /**
   * address createMany
   */
  export type addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * address createManyAndReturn
   */
  export type addressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * address update
   */
  export type addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address updateMany
   */
  export type addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * address updateManyAndReturn
   */
  export type addressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * address upsert
   */
  export type addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The filter to search for the address to update in case it exists.
     */
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     */
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }

  /**
   * address delete
   */
  export type addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * address.Order
   */
  export type address$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * address without action
   */
  export type addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartSumAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartMinAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    created_at: Date | null
    is_active: boolean | null
  }

  export type CartMaxAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    created_at: Date | null
    is_active: boolean | null
  }

  export type CartCountAggregateOutputType = {
    cart_id: number
    user_id: number
    created_at: number
    is_active: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartSumAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartMinAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    is_active?: true
  }

  export type CartMaxAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    is_active?: true
  }

  export type CartCountAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    is_active?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    cart_id: number
    user_id: number
    created_at: Date | null
    is_active: boolean | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    is_active?: boolean
    Order?: boolean | cart$OrderArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    cartitem?: boolean | cart$cartitemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    is_active?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    is_active?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    is_active?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_id" | "user_id" | "created_at" | "is_active", ExtArgs["result"]["cart"]>
  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | cart$OrderArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    cartitem?: boolean | cart$cartitemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type cartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
      cartitem: Prisma.$cartitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: number
      user_id: number
      created_at: Date | null
      is_active: boolean | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.findMany({ select: { cart_id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.createManyAndReturn({
     *   select: { cart_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.updateManyAndReturn({
     *   select: { cart_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartUpdateManyAndReturnArgs>(args: SelectSubset<T, cartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends cart$OrderArgs<ExtArgs> = {}>(args?: Subset<T, cart$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartitem<T extends cart$cartitemArgs<ExtArgs> = {}>(args?: Subset<T, cart$cartitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly cart_id: FieldRef<"cart", 'Int'>
    readonly user_id: FieldRef<"cart", 'Int'>
    readonly created_at: FieldRef<"cart", 'DateTime'>
    readonly is_active: FieldRef<"cart", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart updateManyAndReturn
   */
  export type cartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart.Order
   */
  export type cart$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * cart.cartitem
   */
  export type cart$cartitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    where?: cartitemWhereInput
    orderBy?: cartitemOrderByWithRelationInput | cartitemOrderByWithRelationInput[]
    cursor?: cartitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartitemScalarFieldEnum | CartitemScalarFieldEnum[]
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model cartitem
   */

  export type AggregateCartitem = {
    _count: CartitemCountAggregateOutputType | null
    _avg: CartitemAvgAggregateOutputType | null
    _sum: CartitemSumAggregateOutputType | null
    _min: CartitemMinAggregateOutputType | null
    _max: CartitemMaxAggregateOutputType | null
  }

  export type CartitemAvgAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type CartitemSumAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type CartitemMinAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    added_at: Date | null
  }

  export type CartitemMaxAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    added_at: Date | null
  }

  export type CartitemCountAggregateOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    added_at: number
    _all: number
  }


  export type CartitemAvgAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type CartitemSumAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type CartitemMinAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    added_at?: true
  }

  export type CartitemMaxAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    added_at?: true
  }

  export type CartitemCountAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    added_at?: true
    _all?: true
  }

  export type CartitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartitem to aggregate.
     */
    where?: cartitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemOrderByWithRelationInput | cartitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cartitems
    **/
    _count?: true | CartitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartitemMaxAggregateInputType
  }

  export type GetCartitemAggregateType<T extends CartitemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartitem[P]>
      : GetScalarType<T[P], AggregateCartitem[P]>
  }




  export type cartitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartitemWhereInput
    orderBy?: cartitemOrderByWithAggregationInput | cartitemOrderByWithAggregationInput[]
    by: CartitemScalarFieldEnum[] | CartitemScalarFieldEnum
    having?: cartitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartitemCountAggregateInputType | true
    _avg?: CartitemAvgAggregateInputType
    _sum?: CartitemSumAggregateInputType
    _min?: CartitemMinAggregateInputType
    _max?: CartitemMaxAggregateInputType
  }

  export type CartitemGroupByOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    added_at: Date | null
    _count: CartitemCountAggregateOutputType | null
    _avg: CartitemAvgAggregateOutputType | null
    _sum: CartitemSumAggregateOutputType | null
    _min: CartitemMinAggregateOutputType | null
    _max: CartitemMaxAggregateOutputType | null
  }

  type GetCartitemGroupByPayload<T extends cartitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartitemGroupByOutputType[P]>
            : GetScalarType<T[P], CartitemGroupByOutputType[P]>
        }
      >
    >


  export type cartitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    added_at?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartitem"]>

  export type cartitemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    added_at?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartitem"]>

  export type cartitemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    added_at?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartitem"]>

  export type cartitemSelectScalar = {
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    added_at?: boolean
  }

  export type cartitemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_item_id" | "cart_id" | "product_id" | "quantity" | "added_at", ExtArgs["result"]["cartitem"]>
  export type cartitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type cartitemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type cartitemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $cartitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cartitem"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_item_id: number
      cart_id: number
      product_id: number
      quantity: number
      added_at: Date | null
    }, ExtArgs["result"]["cartitem"]>
    composites: {}
  }

  type cartitemGetPayload<S extends boolean | null | undefined | cartitemDefaultArgs> = $Result.GetResult<Prisma.$cartitemPayload, S>

  type cartitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartitemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartitemCountAggregateInputType | true
    }

  export interface cartitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cartitem'], meta: { name: 'cartitem' } }
    /**
     * Find zero or one Cartitem that matches the filter.
     * @param {cartitemFindUniqueArgs} args - Arguments to find a Cartitem
     * @example
     * // Get one Cartitem
     * const cartitem = await prisma.cartitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartitemFindUniqueArgs>(args: SelectSubset<T, cartitemFindUniqueArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cartitem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartitemFindUniqueOrThrowArgs} args - Arguments to find a Cartitem
     * @example
     * // Get one Cartitem
     * const cartitem = await prisma.cartitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartitemFindUniqueOrThrowArgs>(args: SelectSubset<T, cartitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemFindFirstArgs} args - Arguments to find a Cartitem
     * @example
     * // Get one Cartitem
     * const cartitem = await prisma.cartitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartitemFindFirstArgs>(args?: SelectSubset<T, cartitemFindFirstArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemFindFirstOrThrowArgs} args - Arguments to find a Cartitem
     * @example
     * // Get one Cartitem
     * const cartitem = await prisma.cartitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartitemFindFirstOrThrowArgs>(args?: SelectSubset<T, cartitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartitems
     * const cartitems = await prisma.cartitem.findMany()
     * 
     * // Get first 10 Cartitems
     * const cartitems = await prisma.cartitem.findMany({ take: 10 })
     * 
     * // Only select the `cart_item_id`
     * const cartitemWithCart_item_idOnly = await prisma.cartitem.findMany({ select: { cart_item_id: true } })
     * 
     */
    findMany<T extends cartitemFindManyArgs>(args?: SelectSubset<T, cartitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cartitem.
     * @param {cartitemCreateArgs} args - Arguments to create a Cartitem.
     * @example
     * // Create one Cartitem
     * const Cartitem = await prisma.cartitem.create({
     *   data: {
     *     // ... data to create a Cartitem
     *   }
     * })
     * 
     */
    create<T extends cartitemCreateArgs>(args: SelectSubset<T, cartitemCreateArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartitems.
     * @param {cartitemCreateManyArgs} args - Arguments to create many Cartitems.
     * @example
     * // Create many Cartitems
     * const cartitem = await prisma.cartitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartitemCreateManyArgs>(args?: SelectSubset<T, cartitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cartitems and returns the data saved in the database.
     * @param {cartitemCreateManyAndReturnArgs} args - Arguments to create many Cartitems.
     * @example
     * // Create many Cartitems
     * const cartitem = await prisma.cartitem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cartitems and only return the `cart_item_id`
     * const cartitemWithCart_item_idOnly = await prisma.cartitem.createManyAndReturn({
     *   select: { cart_item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartitemCreateManyAndReturnArgs>(args?: SelectSubset<T, cartitemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cartitem.
     * @param {cartitemDeleteArgs} args - Arguments to delete one Cartitem.
     * @example
     * // Delete one Cartitem
     * const Cartitem = await prisma.cartitem.delete({
     *   where: {
     *     // ... filter to delete one Cartitem
     *   }
     * })
     * 
     */
    delete<T extends cartitemDeleteArgs>(args: SelectSubset<T, cartitemDeleteArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cartitem.
     * @param {cartitemUpdateArgs} args - Arguments to update one Cartitem.
     * @example
     * // Update one Cartitem
     * const cartitem = await prisma.cartitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartitemUpdateArgs>(args: SelectSubset<T, cartitemUpdateArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartitems.
     * @param {cartitemDeleteManyArgs} args - Arguments to filter Cartitems to delete.
     * @example
     * // Delete a few Cartitems
     * const { count } = await prisma.cartitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartitemDeleteManyArgs>(args?: SelectSubset<T, cartitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartitems
     * const cartitem = await prisma.cartitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartitemUpdateManyArgs>(args: SelectSubset<T, cartitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartitems and returns the data updated in the database.
     * @param {cartitemUpdateManyAndReturnArgs} args - Arguments to update many Cartitems.
     * @example
     * // Update many Cartitems
     * const cartitem = await prisma.cartitem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cartitems and only return the `cart_item_id`
     * const cartitemWithCart_item_idOnly = await prisma.cartitem.updateManyAndReturn({
     *   select: { cart_item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartitemUpdateManyAndReturnArgs>(args: SelectSubset<T, cartitemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cartitem.
     * @param {cartitemUpsertArgs} args - Arguments to update or create a Cartitem.
     * @example
     * // Update or create a Cartitem
     * const cartitem = await prisma.cartitem.upsert({
     *   create: {
     *     // ... data to create a Cartitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cartitem we want to update
     *   }
     * })
     */
    upsert<T extends cartitemUpsertArgs>(args: SelectSubset<T, cartitemUpsertArgs<ExtArgs>>): Prisma__cartitemClient<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemCountArgs} args - Arguments to filter Cartitems to count.
     * @example
     * // Count the number of Cartitems
     * const count = await prisma.cartitem.count({
     *   where: {
     *     // ... the filter for the Cartitems we want to count
     *   }
     * })
    **/
    count<T extends cartitemCountArgs>(
      args?: Subset<T, cartitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cartitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartitemAggregateArgs>(args: Subset<T, CartitemAggregateArgs>): Prisma.PrismaPromise<GetCartitemAggregateType<T>>

    /**
     * Group by Cartitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartitemGroupByArgs['orderBy'] }
        : { orderBy?: cartitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cartitem model
   */
  readonly fields: cartitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cartitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cartitem model
   */
  interface cartitemFieldRefs {
    readonly cart_item_id: FieldRef<"cartitem", 'Int'>
    readonly cart_id: FieldRef<"cartitem", 'Int'>
    readonly product_id: FieldRef<"cartitem", 'Int'>
    readonly quantity: FieldRef<"cartitem", 'Int'>
    readonly added_at: FieldRef<"cartitem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cartitem findUnique
   */
  export type cartitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * Filter, which cartitem to fetch.
     */
    where: cartitemWhereUniqueInput
  }

  /**
   * cartitem findUniqueOrThrow
   */
  export type cartitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * Filter, which cartitem to fetch.
     */
    where: cartitemWhereUniqueInput
  }

  /**
   * cartitem findFirst
   */
  export type cartitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * Filter, which cartitem to fetch.
     */
    where?: cartitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemOrderByWithRelationInput | cartitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartitems.
     */
    cursor?: cartitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartitems.
     */
    distinct?: CartitemScalarFieldEnum | CartitemScalarFieldEnum[]
  }

  /**
   * cartitem findFirstOrThrow
   */
  export type cartitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * Filter, which cartitem to fetch.
     */
    where?: cartitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemOrderByWithRelationInput | cartitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartitems.
     */
    cursor?: cartitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartitems.
     */
    distinct?: CartitemScalarFieldEnum | CartitemScalarFieldEnum[]
  }

  /**
   * cartitem findMany
   */
  export type cartitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * Filter, which cartitems to fetch.
     */
    where?: cartitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemOrderByWithRelationInput | cartitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cartitems.
     */
    cursor?: cartitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    distinct?: CartitemScalarFieldEnum | CartitemScalarFieldEnum[]
  }

  /**
   * cartitem create
   */
  export type cartitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * The data needed to create a cartitem.
     */
    data: XOR<cartitemCreateInput, cartitemUncheckedCreateInput>
  }

  /**
   * cartitem createMany
   */
  export type cartitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartitems.
     */
    data: cartitemCreateManyInput | cartitemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cartitem createManyAndReturn
   */
  export type cartitemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * The data used to create many cartitems.
     */
    data: cartitemCreateManyInput | cartitemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cartitem update
   */
  export type cartitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * The data needed to update a cartitem.
     */
    data: XOR<cartitemUpdateInput, cartitemUncheckedUpdateInput>
    /**
     * Choose, which cartitem to update.
     */
    where: cartitemWhereUniqueInput
  }

  /**
   * cartitem updateMany
   */
  export type cartitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cartitems.
     */
    data: XOR<cartitemUpdateManyMutationInput, cartitemUncheckedUpdateManyInput>
    /**
     * Filter which cartitems to update
     */
    where?: cartitemWhereInput
    /**
     * Limit how many cartitems to update.
     */
    limit?: number
  }

  /**
   * cartitem updateManyAndReturn
   */
  export type cartitemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * The data used to update cartitems.
     */
    data: XOR<cartitemUpdateManyMutationInput, cartitemUncheckedUpdateManyInput>
    /**
     * Filter which cartitems to update
     */
    where?: cartitemWhereInput
    /**
     * Limit how many cartitems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cartitem upsert
   */
  export type cartitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * The filter to search for the cartitem to update in case it exists.
     */
    where: cartitemWhereUniqueInput
    /**
     * In case the cartitem found by the `where` argument doesn't exist, create a new cartitem with this data.
     */
    create: XOR<cartitemCreateInput, cartitemUncheckedCreateInput>
    /**
     * In case the cartitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartitemUpdateInput, cartitemUncheckedUpdateInput>
  }

  /**
   * cartitem delete
   */
  export type cartitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    /**
     * Filter which cartitem to delete.
     */
    where: cartitemWhereUniqueInput
  }

  /**
   * cartitem deleteMany
   */
  export type cartitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartitems to delete
     */
    where?: cartitemWhereInput
    /**
     * Limit how many cartitems to delete.
     */
    limit?: number
  }

  /**
   * cartitem without action
   */
  export type cartitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
    parent_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
    parent_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    description: string | null
    parent_id: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    description: string | null
    parent_id: number | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    name: number
    description: number
    parent_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
    parent_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
    parent_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_id?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    name: string
    description: string | null
    parent_id: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
    category?: boolean | category$categoryArgs<ExtArgs>
    other_category?: boolean | category$other_categoryArgs<ExtArgs>
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
    category?: boolean | category$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
    category?: boolean | category$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "description" | "parent_id", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | category$categoryArgs<ExtArgs>
    other_category?: boolean | category$other_categoryArgs<ExtArgs>
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | category$categoryArgs<ExtArgs>
  }
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | category$categoryArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs> | null
      other_category: Prisma.$categoryPayload<ExtArgs>[]
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
      description: string | null
      parent_id: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends category$categoryArgs<ExtArgs> = {}>(args?: Subset<T, category$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_category<T extends category$other_categoryArgs<ExtArgs> = {}>(args?: Subset<T, category$other_categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends category$productArgs<ExtArgs> = {}>(args?: Subset<T, category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly category_id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly parent_id: FieldRef<"category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.category
   */
  export type category$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * category.other_category
   */
  export type category$other_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category.product
   */
  export type category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    delivery_id: number | null
    order_id: number | null
  }

  export type DeliverySumAggregateOutputType = {
    delivery_id: number | null
    order_id: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    delivery_id: number | null
    order_id: number | null
    courier: string | null
    tracking_number: string | null
    status: $Enums.delivery_statuses | null
    updated_at: Date | null
  }

  export type DeliveryMaxAggregateOutputType = {
    delivery_id: number | null
    order_id: number | null
    courier: string | null
    tracking_number: string | null
    status: $Enums.delivery_statuses | null
    updated_at: Date | null
  }

  export type DeliveryCountAggregateOutputType = {
    delivery_id: number
    order_id: number
    courier: number
    tracking_number: number
    status: number
    updated_at: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    delivery_id?: true
    order_id?: true
  }

  export type DeliverySumAggregateInputType = {
    delivery_id?: true
    order_id?: true
  }

  export type DeliveryMinAggregateInputType = {
    delivery_id?: true
    order_id?: true
    courier?: true
    tracking_number?: true
    status?: true
    updated_at?: true
  }

  export type DeliveryMaxAggregateInputType = {
    delivery_id?: true
    order_id?: true
    courier?: true
    tracking_number?: true
    status?: true
    updated_at?: true
  }

  export type DeliveryCountAggregateInputType = {
    delivery_id?: true
    order_id?: true
    courier?: true
    tracking_number?: true
    status?: true
    updated_at?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which delivery to aggregate.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type deliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deliveryWhereInput
    orderBy?: deliveryOrderByWithAggregationInput | deliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: deliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    delivery_id: number
    order_id: number
    courier: string | null
    tracking_number: string | null
    status: $Enums.delivery_statuses | null
    updated_at: Date | null
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends deliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type deliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    delivery_id?: boolean
    order_id?: boolean
    courier?: boolean
    tracking_number?: boolean
    status?: boolean
    updated_at?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type deliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    delivery_id?: boolean
    order_id?: boolean
    courier?: boolean
    tracking_number?: boolean
    status?: boolean
    updated_at?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type deliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    delivery_id?: boolean
    order_id?: boolean
    courier?: boolean
    tracking_number?: boolean
    status?: boolean
    updated_at?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type deliverySelectScalar = {
    delivery_id?: boolean
    order_id?: boolean
    courier?: boolean
    tracking_number?: boolean
    status?: boolean
    updated_at?: boolean
  }

  export type deliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"delivery_id" | "order_id" | "courier" | "tracking_number" | "status" | "updated_at", ExtArgs["result"]["delivery"]>
  export type deliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type deliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type deliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $deliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "delivery"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      delivery_id: number
      order_id: number
      courier: string | null
      tracking_number: string | null
      status: $Enums.delivery_statuses | null
      updated_at: Date | null
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type deliveryGetPayload<S extends boolean | null | undefined | deliveryDefaultArgs> = $Result.GetResult<Prisma.$deliveryPayload, S>

  type deliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface deliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['delivery'], meta: { name: 'delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {deliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deliveryFindUniqueArgs>(args: SelectSubset<T, deliveryFindUniqueArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, deliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deliveryFindFirstArgs>(args?: SelectSubset<T, deliveryFindFirstArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, deliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `delivery_id`
     * const deliveryWithDelivery_idOnly = await prisma.delivery.findMany({ select: { delivery_id: true } })
     * 
     */
    findMany<T extends deliveryFindManyArgs>(args?: SelectSubset<T, deliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {deliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends deliveryCreateArgs>(args: SelectSubset<T, deliveryCreateArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {deliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deliveryCreateManyArgs>(args?: SelectSubset<T, deliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {deliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `delivery_id`
     * const deliveryWithDelivery_idOnly = await prisma.delivery.createManyAndReturn({
     *   select: { delivery_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends deliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, deliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {deliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends deliveryDeleteArgs>(args: SelectSubset<T, deliveryDeleteArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {deliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deliveryUpdateArgs>(args: SelectSubset<T, deliveryUpdateArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {deliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deliveryDeleteManyArgs>(args?: SelectSubset<T, deliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deliveryUpdateManyArgs>(args: SelectSubset<T, deliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {deliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `delivery_id`
     * const deliveryWithDelivery_idOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { delivery_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends deliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, deliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {deliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends deliveryUpsertArgs>(args: SelectSubset<T, deliveryUpsertArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends deliveryCountArgs>(
      args?: Subset<T, deliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends deliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deliveryGroupByArgs['orderBy'] }
        : { orderBy?: deliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, deliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the delivery model
   */
  readonly fields: deliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the delivery model
   */
  interface deliveryFieldRefs {
    readonly delivery_id: FieldRef<"delivery", 'Int'>
    readonly order_id: FieldRef<"delivery", 'Int'>
    readonly courier: FieldRef<"delivery", 'String'>
    readonly tracking_number: FieldRef<"delivery", 'String'>
    readonly status: FieldRef<"delivery", 'delivery_statuses'>
    readonly updated_at: FieldRef<"delivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * delivery findUnique
   */
  export type deliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery findUniqueOrThrow
   */
  export type deliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery findFirst
   */
  export type deliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveries.
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * delivery findFirstOrThrow
   */
  export type deliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveries.
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * delivery findMany
   */
  export type deliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deliveries.
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * delivery create
   */
  export type deliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a delivery.
     */
    data: XOR<deliveryCreateInput, deliveryUncheckedCreateInput>
  }

  /**
   * delivery createMany
   */
  export type deliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deliveries.
     */
    data: deliveryCreateManyInput | deliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * delivery createManyAndReturn
   */
  export type deliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * The data used to create many deliveries.
     */
    data: deliveryCreateManyInput | deliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * delivery update
   */
  export type deliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a delivery.
     */
    data: XOR<deliveryUpdateInput, deliveryUncheckedUpdateInput>
    /**
     * Choose, which delivery to update.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery updateMany
   */
  export type deliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deliveries.
     */
    data: XOR<deliveryUpdateManyMutationInput, deliveryUncheckedUpdateManyInput>
    /**
     * Filter which deliveries to update
     */
    where?: deliveryWhereInput
    /**
     * Limit how many deliveries to update.
     */
    limit?: number
  }

  /**
   * delivery updateManyAndReturn
   */
  export type deliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * The data used to update deliveries.
     */
    data: XOR<deliveryUpdateManyMutationInput, deliveryUncheckedUpdateManyInput>
    /**
     * Filter which deliveries to update
     */
    where?: deliveryWhereInput
    /**
     * Limit how many deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * delivery upsert
   */
  export type deliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the delivery to update in case it exists.
     */
    where: deliveryWhereUniqueInput
    /**
     * In case the delivery found by the `where` argument doesn't exist, create a new delivery with this data.
     */
    create: XOR<deliveryCreateInput, deliveryUncheckedCreateInput>
    /**
     * In case the delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deliveryUpdateInput, deliveryUncheckedUpdateInput>
  }

  /**
   * delivery delete
   */
  export type deliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
    /**
     * Filter which delivery to delete.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery deleteMany
   */
  export type deliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deliveries to delete
     */
    where?: deliveryWhereInput
    /**
     * Limit how many deliveries to delete.
     */
    limit?: number
  }

  /**
   * delivery without action
   */
  export type deliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveryInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    method: $Enums.methods | null
    amount: Decimal | null
    status: $Enums.payment_statuses | null
    transaction_id: string | null
    created_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    method: $Enums.methods | null
    amount: Decimal | null
    status: $Enums.payment_statuses | null
    transaction_id: string | null
    created_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    order_id: number
    method: number
    amount: number
    status: number
    transaction_id: number
    created_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    order_id?: true
    method?: true
    amount?: true
    status?: true
    transaction_id?: true
    created_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    order_id?: true
    method?: true
    amount?: true
    status?: true
    transaction_id?: true
    created_at?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    order_id?: true
    method?: true
    amount?: true
    status?: true
    transaction_id?: true
    created_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    order_id: number
    method: $Enums.methods
    amount: Decimal
    status: $Enums.payment_statuses | null
    transaction_id: string | null
    created_at: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    transaction_id?: boolean
    created_at?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    transaction_id?: boolean
    created_at?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    transaction_id?: boolean
    created_at?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectScalar = {
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    transaction_id?: boolean
    created_at?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "order_id" | "method" | "amount" | "status" | "transaction_id" | "created_at", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type paymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type paymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      order_id: number
      method: $Enums.methods
      amount: Prisma.Decimal
      status: $Enums.payment_statuses | null
      transaction_id: string | null
      created_at: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly payment_id: FieldRef<"payment", 'Int'>
    readonly order_id: FieldRef<"payment", 'Int'>
    readonly method: FieldRef<"payment", 'methods'>
    readonly amount: FieldRef<"payment", 'Decimal'>
    readonly status: FieldRef<"payment", 'payment_statuses'>
    readonly transaction_id: FieldRef<"payment", 'String'>
    readonly created_at: FieldRef<"payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment createManyAndReturn
   */
  export type paymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment updateManyAndReturn
   */
  export type paymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    price: Decimal | null
    stock: number | null
    discount_rule_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    price: Decimal | null
    stock: number | null
    discount_rule_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    status: $Enums.product_statuses | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    discount_rule_id: number | null
  }

  export type ProductMaxAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    status: $Enums.product_statuses | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    discount_rule_id: number | null
  }

  export type ProductCountAggregateOutputType = {
    product_id: number
    category_id: number
    name: number
    description: number
    price: number
    stock: number
    status: number
    image_url: number
    created_at: number
    updated_at: number
    discount_rule_id: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    product_id?: true
    category_id?: true
    price?: true
    stock?: true
    discount_rule_id?: true
  }

  export type ProductSumAggregateInputType = {
    product_id?: true
    category_id?: true
    price?: true
    stock?: true
    discount_rule_id?: true
  }

  export type ProductMinAggregateInputType = {
    product_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    discount_rule_id?: true
  }

  export type ProductMaxAggregateInputType = {
    product_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    discount_rule_id?: true
  }

  export type ProductCountAggregateInputType = {
    product_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    discount_rule_id?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    product_id: number
    category_id: number | null
    name: string
    description: string | null
    price: Decimal
    stock: number | null
    status: $Enums.product_statuses | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    discount_rule_id: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    discount_rule_id?: boolean
    cartitem?: boolean | product$cartitemArgs<ExtArgs>
    category?: boolean | product$categoryArgs<ExtArgs>
    DiscountRule?: boolean | product$DiscountRuleArgs<ExtArgs>
    review?: boolean | product$reviewArgs<ExtArgs>
    wishlist?: boolean | product$wishlistArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    discount_rule_id?: boolean
    category?: boolean | product$categoryArgs<ExtArgs>
    DiscountRule?: boolean | product$DiscountRuleArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    discount_rule_id?: boolean
    category?: boolean | product$categoryArgs<ExtArgs>
    DiscountRule?: boolean | product$DiscountRuleArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    product_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    discount_rule_id?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "category_id" | "name" | "description" | "price" | "stock" | "status" | "image_url" | "created_at" | "updated_at" | "discount_rule_id", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartitem?: boolean | product$cartitemArgs<ExtArgs>
    category?: boolean | product$categoryArgs<ExtArgs>
    DiscountRule?: boolean | product$DiscountRuleArgs<ExtArgs>
    review?: boolean | product$reviewArgs<ExtArgs>
    wishlist?: boolean | product$wishlistArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | product$categoryArgs<ExtArgs>
    DiscountRule?: boolean | product$DiscountRuleArgs<ExtArgs>
  }
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | product$categoryArgs<ExtArgs>
    DiscountRule?: boolean | product$DiscountRuleArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      cartitem: Prisma.$cartitemPayload<ExtArgs>[]
      category: Prisma.$categoryPayload<ExtArgs> | null
      DiscountRule: Prisma.$DiscountRulePayload<ExtArgs> | null
      review: Prisma.$reviewPayload<ExtArgs>[]
      wishlist: Prisma.$wishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      category_id: number | null
      name: string
      description: string | null
      price: Prisma.Decimal
      stock: number | null
      status: $Enums.product_statuses | null
      image_url: string | null
      created_at: Date | null
      updated_at: Date | null
      discount_rule_id: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cartitem<T extends product$cartitemArgs<ExtArgs> = {}>(args?: Subset<T, product$cartitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, product$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DiscountRule<T extends product$DiscountRuleArgs<ExtArgs> = {}>(args?: Subset<T, product$DiscountRuleArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends product$reviewArgs<ExtArgs> = {}>(args?: Subset<T, product$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends product$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, product$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly product_id: FieldRef<"product", 'Int'>
    readonly category_id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Decimal'>
    readonly stock: FieldRef<"product", 'Int'>
    readonly status: FieldRef<"product", 'product_statuses'>
    readonly image_url: FieldRef<"product", 'String'>
    readonly created_at: FieldRef<"product", 'DateTime'>
    readonly updated_at: FieldRef<"product", 'DateTime'>
    readonly discount_rule_id: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.cartitem
   */
  export type product$cartitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitem
     */
    select?: cartitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitem
     */
    omit?: cartitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartitemInclude<ExtArgs> | null
    where?: cartitemWhereInput
    orderBy?: cartitemOrderByWithRelationInput | cartitemOrderByWithRelationInput[]
    cursor?: cartitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartitemScalarFieldEnum | CartitemScalarFieldEnum[]
  }

  /**
   * product.category
   */
  export type product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * product.DiscountRule
   */
  export type product$DiscountRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountRuleInclude<ExtArgs> | null
    where?: DiscountRuleWhereInput
  }

  /**
   * product.review
   */
  export type product$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * product.wishlist
   */
  export type product$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    where?: wishlistWhereInput
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    cursor?: wishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    is_approved: boolean | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    is_approved: boolean | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    user_id: number
    product_id: number
    rating: number
    comment: number
    created_at: number
    is_approved: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
    comment?: true
    created_at?: true
    is_approved?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
    comment?: true
    created_at?: true
    is_approved?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
    comment?: true
    created_at?: true
    is_approved?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    user_id: number
    product_id: number
    rating: number | null
    comment: string | null
    created_at: Date | null
    is_approved: boolean | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    is_approved?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    is_approved?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    is_approved?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    is_approved?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "user_id" | "product_id" | "rating" | "comment" | "created_at" | "is_approved", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      user_id: number
      product_id: number
      rating: number | null
      comment: string | null
      created_at: Date | null
      is_approved: boolean | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly review_id: FieldRef<"review", 'Int'>
    readonly user_id: FieldRef<"review", 'Int'>
    readonly product_id: FieldRef<"review", 'Int'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
    readonly is_approved: FieldRef<"review", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model wishlist
   */

  export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  export type WishlistAvgAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type WishlistSumAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type WishlistMinAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
    added_at: Date | null
  }

  export type WishlistMaxAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
    added_at: Date | null
  }

  export type WishlistCountAggregateOutputType = {
    wishlist_id: number
    user_id: number
    product_id: number
    added_at: number
    _all: number
  }


  export type WishlistAvgAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
  }

  export type WishlistSumAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
  }

  export type WishlistMinAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
    added_at?: true
  }

  export type WishlistMaxAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
    added_at?: true
  }

  export type WishlistCountAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
    added_at?: true
    _all?: true
  }

  export type WishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist to aggregate.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wishlists
    **/
    _count?: true | WishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType
  }

  export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlist[P]>
      : GetScalarType<T[P], AggregateWishlist[P]>
  }




  export type wishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wishlistWhereInput
    orderBy?: wishlistOrderByWithAggregationInput | wishlistOrderByWithAggregationInput[]
    by: WishlistScalarFieldEnum[] | WishlistScalarFieldEnum
    having?: wishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistCountAggregateInputType | true
    _avg?: WishlistAvgAggregateInputType
    _sum?: WishlistSumAggregateInputType
    _min?: WishlistMinAggregateInputType
    _max?: WishlistMaxAggregateInputType
  }

  export type WishlistGroupByOutputType = {
    wishlist_id: number
    user_id: number
    product_id: number
    added_at: Date | null
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  type GetWishlistGroupByPayload<T extends wishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistGroupByOutputType[P]>
        }
      >
    >


  export type wishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    added_at?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type wishlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    added_at?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type wishlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    added_at?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type wishlistSelectScalar = {
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    added_at?: boolean
  }

  export type wishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wishlist_id" | "user_id" | "product_id" | "added_at", ExtArgs["result"]["wishlist"]>
  export type wishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type wishlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type wishlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $wishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wishlist"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      wishlist_id: number
      user_id: number
      product_id: number
      added_at: Date | null
    }, ExtArgs["result"]["wishlist"]>
    composites: {}
  }

  type wishlistGetPayload<S extends boolean | null | undefined | wishlistDefaultArgs> = $Result.GetResult<Prisma.$wishlistPayload, S>

  type wishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistCountAggregateInputType | true
    }

  export interface wishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wishlist'], meta: { name: 'wishlist' } }
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {wishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlistFindUniqueArgs>(args: SelectSubset<T, wishlistFindUniqueArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, wishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlistFindFirstArgs>(args?: SelectSubset<T, wishlistFindFirstArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, wishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     * 
     * // Only select the `wishlist_id`
     * const wishlistWithWishlist_idOnly = await prisma.wishlist.findMany({ select: { wishlist_id: true } })
     * 
     */
    findMany<T extends wishlistFindManyArgs>(args?: SelectSubset<T, wishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wishlist.
     * @param {wishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     * 
     */
    create<T extends wishlistCreateArgs>(args: SelectSubset<T, wishlistCreateArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishlists.
     * @param {wishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wishlistCreateManyArgs>(args?: SelectSubset<T, wishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {wishlistCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishlists and only return the `wishlist_id`
     * const wishlistWithWishlist_idOnly = await prisma.wishlist.createManyAndReturn({
     *   select: { wishlist_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wishlistCreateManyAndReturnArgs>(args?: SelectSubset<T, wishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wishlist.
     * @param {wishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     * 
     */
    delete<T extends wishlistDeleteArgs>(args: SelectSubset<T, wishlistDeleteArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wishlist.
     * @param {wishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wishlistUpdateArgs>(args: SelectSubset<T, wishlistUpdateArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishlists.
     * @param {wishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wishlistDeleteManyArgs>(args?: SelectSubset<T, wishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wishlistUpdateManyArgs>(args: SelectSubset<T, wishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {wishlistUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishlists and only return the `wishlist_id`
     * const wishlistWithWishlist_idOnly = await prisma.wishlist.updateManyAndReturn({
     *   select: { wishlist_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends wishlistUpdateManyAndReturnArgs>(args: SelectSubset<T, wishlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wishlist.
     * @param {wishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends wishlistUpsertArgs>(args: SelectSubset<T, wishlistUpsertArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends wishlistCountArgs>(
      args?: Subset<T, wishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistAggregateArgs>(args: Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>

    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends wishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wishlistGroupByArgs['orderBy'] }
        : { orderBy?: wishlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, wishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wishlist model
   */
  readonly fields: wishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wishlist model
   */
  interface wishlistFieldRefs {
    readonly wishlist_id: FieldRef<"wishlist", 'Int'>
    readonly user_id: FieldRef<"wishlist", 'Int'>
    readonly product_id: FieldRef<"wishlist", 'Int'>
    readonly added_at: FieldRef<"wishlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wishlist findUnique
   */
  export type wishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist findUniqueOrThrow
   */
  export type wishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist findFirst
   */
  export type wishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wishlists.
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * wishlist findFirstOrThrow
   */
  export type wishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wishlists.
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * wishlist findMany
   */
  export type wishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlists to fetch.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wishlists.
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * wishlist create
   */
  export type wishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a wishlist.
     */
    data: XOR<wishlistCreateInput, wishlistUncheckedCreateInput>
  }

  /**
   * wishlist createMany
   */
  export type wishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlists.
     */
    data: wishlistCreateManyInput | wishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wishlist createManyAndReturn
   */
  export type wishlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * The data used to create many wishlists.
     */
    data: wishlistCreateManyInput | wishlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wishlist update
   */
  export type wishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a wishlist.
     */
    data: XOR<wishlistUpdateInput, wishlistUncheckedUpdateInput>
    /**
     * Choose, which wishlist to update.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist updateMany
   */
  export type wishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlists.
     */
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyInput>
    /**
     * Filter which wishlists to update
     */
    where?: wishlistWhereInput
    /**
     * Limit how many wishlists to update.
     */
    limit?: number
  }

  /**
   * wishlist updateManyAndReturn
   */
  export type wishlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * The data used to update wishlists.
     */
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyInput>
    /**
     * Filter which wishlists to update
     */
    where?: wishlistWhereInput
    /**
     * Limit how many wishlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wishlist upsert
   */
  export type wishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the wishlist to update in case it exists.
     */
    where: wishlistWhereUniqueInput
    /**
     * In case the wishlist found by the `where` argument doesn't exist, create a new wishlist with this data.
     */
    create: XOR<wishlistCreateInput, wishlistUncheckedCreateInput>
    /**
     * In case the wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wishlistUpdateInput, wishlistUncheckedUpdateInput>
  }

  /**
   * wishlist delete
   */
  export type wishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter which wishlist to delete.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist deleteMany
   */
  export type wishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wishlists to delete
     */
    where?: wishlistWhereInput
    /**
     * Limit how many wishlists to delete.
     */
    limit?: number
  }

  /**
   * wishlist without action
   */
  export type wishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DiscountRuleScalarFieldEnum: {
    discount_rule_id: 'discount_rule_id',
    code: 'code',
    type: 'type',
    value: 'value',
    valid_from: 'valid_from',
    valid_to: 'valid_to',
    is_active: 'is_active'
  };

  export type DiscountRuleScalarFieldEnum = (typeof DiscountRuleScalarFieldEnum)[keyof typeof DiscountRuleScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id',
    address_id: 'address_id',
    cart_id: 'cart_id',
    total_amount: 'total_amount',
    status: 'status',
    created_at: 'created_at',
    shipped_at: 'shipped_at',
    delivered_at: 'delivered_at',
    applied_discount_id: 'applied_discount_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PostalRegionScalarFieldEnum: {
    postal_code: 'postal_code',
    city: 'city',
    country: 'country'
  };

  export type PostalRegionScalarFieldEnum = (typeof PostalRegionScalarFieldEnum)[keyof typeof PostalRegionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password_hash: 'password_hash',
    phone: 'phone',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    address_id: 'address_id',
    user_id: 'user_id',
    street: 'street',
    postal_code: 'postal_code',
    is_default: 'is_default'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CartScalarFieldEnum: {
    cart_id: 'cart_id',
    user_id: 'user_id',
    created_at: 'created_at',
    is_active: 'is_active'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartitemScalarFieldEnum: {
    cart_item_id: 'cart_item_id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity',
    added_at: 'added_at'
  };

  export type CartitemScalarFieldEnum = (typeof CartitemScalarFieldEnum)[keyof typeof CartitemScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    parent_id: 'parent_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    delivery_id: 'delivery_id',
    order_id: 'order_id',
    courier: 'courier',
    tracking_number: 'tracking_number',
    status: 'status',
    updated_at: 'updated_at'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    order_id: 'order_id',
    method: 'method',
    amount: 'amount',
    status: 'status',
    transaction_id: 'transaction_id',
    created_at: 'created_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    product_id: 'product_id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    status: 'status',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    discount_rule_id: 'discount_rule_id'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    user_id: 'user_id',
    product_id: 'product_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    is_approved: 'is_approved'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const WishlistScalarFieldEnum: {
    wishlist_id: 'wishlist_id',
    user_id: 'user_id',
    product_id: 'product_id',
    added_at: 'added_at'
  };

  export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'discount_types'
   */
  export type Enumdiscount_typesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'discount_types'>
    


  /**
   * Reference to a field of type 'discount_types[]'
   */
  export type ListEnumdiscount_typesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'discount_types[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'order_statuses'
   */
  export type Enumorder_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_statuses'>
    


  /**
   * Reference to a field of type 'order_statuses[]'
   */
  export type ListEnumorder_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_statuses[]'>
    


  /**
   * Reference to a field of type 'rols'
   */
  export type EnumrolsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rols'>
    


  /**
   * Reference to a field of type 'rols[]'
   */
  export type ListEnumrolsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rols[]'>
    


  /**
   * Reference to a field of type 'delivery_statuses'
   */
  export type Enumdelivery_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'delivery_statuses'>
    


  /**
   * Reference to a field of type 'delivery_statuses[]'
   */
  export type ListEnumdelivery_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'delivery_statuses[]'>
    


  /**
   * Reference to a field of type 'methods'
   */
  export type EnummethodsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'methods'>
    


  /**
   * Reference to a field of type 'methods[]'
   */
  export type ListEnummethodsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'methods[]'>
    


  /**
   * Reference to a field of type 'payment_statuses'
   */
  export type Enumpayment_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_statuses'>
    


  /**
   * Reference to a field of type 'payment_statuses[]'
   */
  export type ListEnumpayment_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_statuses[]'>
    


  /**
   * Reference to a field of type 'product_statuses'
   */
  export type Enumproduct_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_statuses'>
    


  /**
   * Reference to a field of type 'product_statuses[]'
   */
  export type ListEnumproduct_statusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_statuses[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DiscountRuleWhereInput = {
    AND?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    OR?: DiscountRuleWhereInput[]
    NOT?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    discount_rule_id?: IntFilter<"DiscountRule"> | number
    code?: StringFilter<"DiscountRule"> | string
    type?: Enumdiscount_typesFilter<"DiscountRule"> | $Enums.discount_types
    value?: DecimalFilter<"DiscountRule"> | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFilter<"DiscountRule"> | Date | string
    valid_to?: DateTimeFilter<"DiscountRule"> | Date | string
    is_active?: BoolNullableFilter<"DiscountRule"> | boolean | null
    Order?: OrderListRelationFilter
    product?: ProductListRelationFilter
  }

  export type DiscountRuleOrderByWithRelationInput = {
    discount_rule_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    is_active?: SortOrderInput | SortOrder
    Order?: OrderOrderByRelationAggregateInput
    product?: productOrderByRelationAggregateInput
  }

  export type DiscountRuleWhereUniqueInput = Prisma.AtLeast<{
    discount_rule_id?: number
    code?: string
    AND?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    OR?: DiscountRuleWhereInput[]
    NOT?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    type?: Enumdiscount_typesFilter<"DiscountRule"> | $Enums.discount_types
    value?: DecimalFilter<"DiscountRule"> | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFilter<"DiscountRule"> | Date | string
    valid_to?: DateTimeFilter<"DiscountRule"> | Date | string
    is_active?: BoolNullableFilter<"DiscountRule"> | boolean | null
    Order?: OrderListRelationFilter
    product?: ProductListRelationFilter
  }, "discount_rule_id" | "code">

  export type DiscountRuleOrderByWithAggregationInput = {
    discount_rule_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: DiscountRuleCountOrderByAggregateInput
    _avg?: DiscountRuleAvgOrderByAggregateInput
    _max?: DiscountRuleMaxOrderByAggregateInput
    _min?: DiscountRuleMinOrderByAggregateInput
    _sum?: DiscountRuleSumOrderByAggregateInput
  }

  export type DiscountRuleScalarWhereWithAggregatesInput = {
    AND?: DiscountRuleScalarWhereWithAggregatesInput | DiscountRuleScalarWhereWithAggregatesInput[]
    OR?: DiscountRuleScalarWhereWithAggregatesInput[]
    NOT?: DiscountRuleScalarWhereWithAggregatesInput | DiscountRuleScalarWhereWithAggregatesInput[]
    discount_rule_id?: IntWithAggregatesFilter<"DiscountRule"> | number
    code?: StringWithAggregatesFilter<"DiscountRule"> | string
    type?: Enumdiscount_typesWithAggregatesFilter<"DiscountRule"> | $Enums.discount_types
    value?: DecimalWithAggregatesFilter<"DiscountRule"> | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeWithAggregatesFilter<"DiscountRule"> | Date | string
    valid_to?: DateTimeWithAggregatesFilter<"DiscountRule"> | Date | string
    is_active?: BoolNullableWithAggregatesFilter<"DiscountRule"> | boolean | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    order_id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    address_id?: IntNullableFilter<"Order"> | number | null
    cart_id?: IntNullableFilter<"Order"> | number | null
    total_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusesNullableFilter<"Order"> | $Enums.order_statuses | null
    created_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    shipped_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    applied_discount_id?: IntNullableFilter<"Order"> | number | null
    address?: XOR<AddressNullableScalarRelationFilter, addressWhereInput> | null
    DiscountRule?: XOR<DiscountRuleNullableScalarRelationFilter, DiscountRuleWhereInput> | null
    cart?: XOR<CartNullableScalarRelationFilter, cartWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    delivery?: XOR<DeliveryNullableScalarRelationFilter, deliveryWhereInput> | null
    payment?: PaymentListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrderInput | SortOrder
    cart_id?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    shipped_at?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    applied_discount_id?: SortOrderInput | SortOrder
    address?: addressOrderByWithRelationInput
    DiscountRule?: DiscountRuleOrderByWithRelationInput
    cart?: cartOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    delivery?: deliveryOrderByWithRelationInput
    payment?: paymentOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    user_id?: IntFilter<"Order"> | number
    address_id?: IntNullableFilter<"Order"> | number | null
    cart_id?: IntNullableFilter<"Order"> | number | null
    total_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusesNullableFilter<"Order"> | $Enums.order_statuses | null
    created_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    shipped_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    applied_discount_id?: IntNullableFilter<"Order"> | number | null
    address?: XOR<AddressNullableScalarRelationFilter, addressWhereInput> | null
    DiscountRule?: XOR<DiscountRuleNullableScalarRelationFilter, DiscountRuleWhereInput> | null
    cart?: XOR<CartNullableScalarRelationFilter, cartWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    delivery?: XOR<DeliveryNullableScalarRelationFilter, deliveryWhereInput> | null
    payment?: PaymentListRelationFilter
  }, "order_id">

  export type OrderOrderByWithAggregationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrderInput | SortOrder
    cart_id?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    shipped_at?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    applied_discount_id?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Order"> | number
    user_id?: IntWithAggregatesFilter<"Order"> | number
    address_id?: IntNullableWithAggregatesFilter<"Order"> | number | null
    cart_id?: IntNullableWithAggregatesFilter<"Order"> | number | null
    total_amount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusesNullableWithAggregatesFilter<"Order"> | $Enums.order_statuses | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    shipped_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    delivered_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    applied_discount_id?: IntNullableWithAggregatesFilter<"Order"> | number | null
  }

  export type PostalRegionWhereInput = {
    AND?: PostalRegionWhereInput | PostalRegionWhereInput[]
    OR?: PostalRegionWhereInput[]
    NOT?: PostalRegionWhereInput | PostalRegionWhereInput[]
    postal_code?: StringFilter<"PostalRegion"> | string
    city?: StringFilter<"PostalRegion"> | string
    country?: StringFilter<"PostalRegion"> | string
    address?: AddressListRelationFilter
  }

  export type PostalRegionOrderByWithRelationInput = {
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    address?: addressOrderByRelationAggregateInput
  }

  export type PostalRegionWhereUniqueInput = Prisma.AtLeast<{
    postal_code?: string
    AND?: PostalRegionWhereInput | PostalRegionWhereInput[]
    OR?: PostalRegionWhereInput[]
    NOT?: PostalRegionWhereInput | PostalRegionWhereInput[]
    city?: StringFilter<"PostalRegion"> | string
    country?: StringFilter<"PostalRegion"> | string
    address?: AddressListRelationFilter
  }, "postal_code">

  export type PostalRegionOrderByWithAggregationInput = {
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    _count?: PostalRegionCountOrderByAggregateInput
    _max?: PostalRegionMaxOrderByAggregateInput
    _min?: PostalRegionMinOrderByAggregateInput
  }

  export type PostalRegionScalarWhereWithAggregatesInput = {
    AND?: PostalRegionScalarWhereWithAggregatesInput | PostalRegionScalarWhereWithAggregatesInput[]
    OR?: PostalRegionScalarWhereWithAggregatesInput[]
    NOT?: PostalRegionScalarWhereWithAggregatesInput | PostalRegionScalarWhereWithAggregatesInput[]
    postal_code?: StringWithAggregatesFilter<"PostalRegion"> | string
    city?: StringWithAggregatesFilter<"PostalRegion"> | string
    country?: StringWithAggregatesFilter<"PostalRegion"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumrolsNullableFilter<"User"> | $Enums.rols | null
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    Order?: OrderListRelationFilter
    address?: AddressListRelationFilter
    cart?: CartListRelationFilter
    review?: ReviewListRelationFilter
    wishlist?: WishlistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Order?: OrderOrderByRelationAggregateInput
    address?: addressOrderByRelationAggregateInput
    cart?: cartOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    wishlist?: wishlistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumrolsNullableFilter<"User"> | $Enums.rols | null
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    Order?: OrderListRelationFilter
    address?: AddressListRelationFilter
    cart?: CartListRelationFilter
    review?: ReviewListRelationFilter
    wishlist?: WishlistListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumrolsNullableWithAggregatesFilter<"User"> | $Enums.rols | null
    is_active?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type addressWhereInput = {
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    address_id?: IntFilter<"address"> | number
    user_id?: IntFilter<"address"> | number
    street?: StringFilter<"address"> | string
    postal_code?: StringFilter<"address"> | string
    is_default?: BoolNullableFilter<"address"> | boolean | null
    Order?: OrderListRelationFilter
    PostalRegion?: XOR<PostalRegionScalarRelationFilter, PostalRegionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type addressOrderByWithRelationInput = {
    address_id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrderInput | SortOrder
    Order?: OrderOrderByRelationAggregateInput
    PostalRegion?: PostalRegionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type addressWhereUniqueInput = Prisma.AtLeast<{
    address_id?: number
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    user_id?: IntFilter<"address"> | number
    street?: StringFilter<"address"> | string
    postal_code?: StringFilter<"address"> | string
    is_default?: BoolNullableFilter<"address"> | boolean | null
    Order?: OrderListRelationFilter
    PostalRegion?: XOR<PostalRegionScalarRelationFilter, PostalRegionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "address_id">

  export type addressOrderByWithAggregationInput = {
    address_id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrderInput | SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    OR?: addressScalarWhereWithAggregatesInput[]
    NOT?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    address_id?: IntWithAggregatesFilter<"address"> | number
    user_id?: IntWithAggregatesFilter<"address"> | number
    street?: StringWithAggregatesFilter<"address"> | string
    postal_code?: StringWithAggregatesFilter<"address"> | string
    is_default?: BoolNullableWithAggregatesFilter<"address"> | boolean | null
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    cart_id?: IntFilter<"cart"> | number
    user_id?: IntFilter<"cart"> | number
    created_at?: DateTimeNullableFilter<"cart"> | Date | string | null
    is_active?: BoolNullableFilter<"cart"> | boolean | null
    Order?: OrderListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    cartitem?: CartitemListRelationFilter
  }

  export type cartOrderByWithRelationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    Order?: OrderOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    cartitem?: cartitemOrderByRelationAggregateInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    user_id?: IntFilter<"cart"> | number
    created_at?: DateTimeNullableFilter<"cart"> | Date | string | null
    is_active?: BoolNullableFilter<"cart"> | boolean | null
    Order?: OrderListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    cartitem?: CartitemListRelationFilter
  }, "cart_id">

  export type cartOrderByWithAggregationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    cart_id?: IntWithAggregatesFilter<"cart"> | number
    user_id?: IntWithAggregatesFilter<"cart"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"cart"> | Date | string | null
    is_active?: BoolNullableWithAggregatesFilter<"cart"> | boolean | null
  }

  export type cartitemWhereInput = {
    AND?: cartitemWhereInput | cartitemWhereInput[]
    OR?: cartitemWhereInput[]
    NOT?: cartitemWhereInput | cartitemWhereInput[]
    cart_item_id?: IntFilter<"cartitem"> | number
    cart_id?: IntFilter<"cartitem"> | number
    product_id?: IntFilter<"cartitem"> | number
    quantity?: IntFilter<"cartitem"> | number
    added_at?: DateTimeNullableFilter<"cartitem"> | Date | string | null
    cart?: XOR<CartScalarRelationFilter, cartWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type cartitemOrderByWithRelationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    added_at?: SortOrderInput | SortOrder
    cart?: cartOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type cartitemWhereUniqueInput = Prisma.AtLeast<{
    cart_item_id?: number
    AND?: cartitemWhereInput | cartitemWhereInput[]
    OR?: cartitemWhereInput[]
    NOT?: cartitemWhereInput | cartitemWhereInput[]
    cart_id?: IntFilter<"cartitem"> | number
    product_id?: IntFilter<"cartitem"> | number
    quantity?: IntFilter<"cartitem"> | number
    added_at?: DateTimeNullableFilter<"cartitem"> | Date | string | null
    cart?: XOR<CartScalarRelationFilter, cartWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "cart_item_id">

  export type cartitemOrderByWithAggregationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    added_at?: SortOrderInput | SortOrder
    _count?: cartitemCountOrderByAggregateInput
    _avg?: cartitemAvgOrderByAggregateInput
    _max?: cartitemMaxOrderByAggregateInput
    _min?: cartitemMinOrderByAggregateInput
    _sum?: cartitemSumOrderByAggregateInput
  }

  export type cartitemScalarWhereWithAggregatesInput = {
    AND?: cartitemScalarWhereWithAggregatesInput | cartitemScalarWhereWithAggregatesInput[]
    OR?: cartitemScalarWhereWithAggregatesInput[]
    NOT?: cartitemScalarWhereWithAggregatesInput | cartitemScalarWhereWithAggregatesInput[]
    cart_item_id?: IntWithAggregatesFilter<"cartitem"> | number
    cart_id?: IntWithAggregatesFilter<"cartitem"> | number
    product_id?: IntWithAggregatesFilter<"cartitem"> | number
    quantity?: IntWithAggregatesFilter<"cartitem"> | number
    added_at?: DateTimeNullableWithAggregatesFilter<"cartitem"> | Date | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    category_id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    parent_id?: IntNullableFilter<"category"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    other_category?: CategoryListRelationFilter
    product?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    category?: categoryOrderByWithRelationInput
    other_category?: categoryOrderByRelationAggregateInput
    product?: productOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    parent_id?: IntNullableFilter<"category"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    other_category?: CategoryListRelationFilter
    product?: ProductListRelationFilter
  }, "category_id">

  export type categoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    description?: StringNullableWithAggregatesFilter<"category"> | string | null
    parent_id?: IntNullableWithAggregatesFilter<"category"> | number | null
  }

  export type deliveryWhereInput = {
    AND?: deliveryWhereInput | deliveryWhereInput[]
    OR?: deliveryWhereInput[]
    NOT?: deliveryWhereInput | deliveryWhereInput[]
    delivery_id?: IntFilter<"delivery"> | number
    order_id?: IntFilter<"delivery"> | number
    courier?: StringNullableFilter<"delivery"> | string | null
    tracking_number?: StringNullableFilter<"delivery"> | string | null
    status?: Enumdelivery_statusesNullableFilter<"delivery"> | $Enums.delivery_statuses | null
    updated_at?: DateTimeNullableFilter<"delivery"> | Date | string | null
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type deliveryOrderByWithRelationInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
    courier?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type deliveryWhereUniqueInput = Prisma.AtLeast<{
    delivery_id?: number
    order_id?: number
    AND?: deliveryWhereInput | deliveryWhereInput[]
    OR?: deliveryWhereInput[]
    NOT?: deliveryWhereInput | deliveryWhereInput[]
    courier?: StringNullableFilter<"delivery"> | string | null
    tracking_number?: StringNullableFilter<"delivery"> | string | null
    status?: Enumdelivery_statusesNullableFilter<"delivery"> | $Enums.delivery_statuses | null
    updated_at?: DateTimeNullableFilter<"delivery"> | Date | string | null
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "delivery_id" | "order_id">

  export type deliveryOrderByWithAggregationInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
    courier?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: deliveryCountOrderByAggregateInput
    _avg?: deliveryAvgOrderByAggregateInput
    _max?: deliveryMaxOrderByAggregateInput
    _min?: deliveryMinOrderByAggregateInput
    _sum?: deliverySumOrderByAggregateInput
  }

  export type deliveryScalarWhereWithAggregatesInput = {
    AND?: deliveryScalarWhereWithAggregatesInput | deliveryScalarWhereWithAggregatesInput[]
    OR?: deliveryScalarWhereWithAggregatesInput[]
    NOT?: deliveryScalarWhereWithAggregatesInput | deliveryScalarWhereWithAggregatesInput[]
    delivery_id?: IntWithAggregatesFilter<"delivery"> | number
    order_id?: IntWithAggregatesFilter<"delivery"> | number
    courier?: StringNullableWithAggregatesFilter<"delivery"> | string | null
    tracking_number?: StringNullableWithAggregatesFilter<"delivery"> | string | null
    status?: Enumdelivery_statusesNullableWithAggregatesFilter<"delivery"> | $Enums.delivery_statuses | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"delivery"> | Date | string | null
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    order_id?: IntFilter<"payment"> | number
    method?: EnummethodsFilter<"payment"> | $Enums.methods
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    status?: Enumpayment_statusesNullableFilter<"payment"> | $Enums.payment_statuses | null
    transaction_id?: StringNullableFilter<"payment"> | string | null
    created_at?: DateTimeNullableFilter<"payment"> | Date | string | null
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    order_id?: IntFilter<"payment"> | number
    method?: EnummethodsFilter<"payment"> | $Enums.methods
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    status?: Enumpayment_statusesNullableFilter<"payment"> | $Enums.payment_statuses | null
    transaction_id?: StringNullableFilter<"payment"> | string | null
    created_at?: DateTimeNullableFilter<"payment"> | Date | string | null
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "payment_id">

  export type paymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"payment"> | number
    order_id?: IntWithAggregatesFilter<"payment"> | number
    method?: EnummethodsWithAggregatesFilter<"payment"> | $Enums.methods
    amount?: DecimalWithAggregatesFilter<"payment"> | Decimal | DecimalJsLike | number | string
    status?: Enumpayment_statusesNullableWithAggregatesFilter<"payment"> | $Enums.payment_statuses | null
    transaction_id?: StringNullableWithAggregatesFilter<"payment"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"payment"> | Date | string | null
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    product_id?: IntFilter<"product"> | number
    category_id?: IntNullableFilter<"product"> | number | null
    name?: StringFilter<"product"> | string
    description?: StringNullableFilter<"product"> | string | null
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"product"> | number | null
    status?: Enumproduct_statusesNullableFilter<"product"> | $Enums.product_statuses | null
    image_url?: StringNullableFilter<"product"> | string | null
    created_at?: DateTimeNullableFilter<"product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"product"> | Date | string | null
    discount_rule_id?: IntNullableFilter<"product"> | number | null
    cartitem?: CartitemListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    DiscountRule?: XOR<DiscountRuleNullableScalarRelationFilter, DiscountRuleWhereInput> | null
    review?: ReviewListRelationFilter
    wishlist?: WishlistListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    product_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    discount_rule_id?: SortOrderInput | SortOrder
    cartitem?: cartitemOrderByRelationAggregateInput
    category?: categoryOrderByWithRelationInput
    DiscountRule?: DiscountRuleOrderByWithRelationInput
    review?: reviewOrderByRelationAggregateInput
    wishlist?: wishlistOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    category_id?: IntNullableFilter<"product"> | number | null
    name?: StringFilter<"product"> | string
    description?: StringNullableFilter<"product"> | string | null
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"product"> | number | null
    status?: Enumproduct_statusesNullableFilter<"product"> | $Enums.product_statuses | null
    image_url?: StringNullableFilter<"product"> | string | null
    created_at?: DateTimeNullableFilter<"product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"product"> | Date | string | null
    discount_rule_id?: IntNullableFilter<"product"> | number | null
    cartitem?: CartitemListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    DiscountRule?: XOR<DiscountRuleNullableScalarRelationFilter, DiscountRuleWhereInput> | null
    review?: ReviewListRelationFilter
    wishlist?: WishlistListRelationFilter
  }, "product_id">

  export type productOrderByWithAggregationInput = {
    product_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    discount_rule_id?: SortOrderInput | SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"product"> | number
    category_id?: IntNullableWithAggregatesFilter<"product"> | number | null
    name?: StringWithAggregatesFilter<"product"> | string
    description?: StringNullableWithAggregatesFilter<"product"> | string | null
    price?: DecimalWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableWithAggregatesFilter<"product"> | number | null
    status?: Enumproduct_statusesNullableWithAggregatesFilter<"product"> | $Enums.product_statuses | null
    image_url?: StringNullableWithAggregatesFilter<"product"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"product"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"product"> | Date | string | null
    discount_rule_id?: IntNullableWithAggregatesFilter<"product"> | number | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    review_id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    product_id?: IntFilter<"review"> | number
    rating?: IntNullableFilter<"review"> | number | null
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    is_approved?: BoolNullableFilter<"review"> | boolean | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    product?: productOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    user_id?: IntFilter<"review"> | number
    product_id?: IntFilter<"review"> | number
    rating?: IntNullableFilter<"review"> | number | null
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    is_approved?: BoolNullableFilter<"review"> | boolean | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "review_id">

  export type reviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"review"> | number
    user_id?: IntWithAggregatesFilter<"review"> | number
    product_id?: IntWithAggregatesFilter<"review"> | number
    rating?: IntNullableWithAggregatesFilter<"review"> | number | null
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"review"> | Date | string | null
    is_approved?: BoolNullableWithAggregatesFilter<"review"> | boolean | null
  }

  export type wishlistWhereInput = {
    AND?: wishlistWhereInput | wishlistWhereInput[]
    OR?: wishlistWhereInput[]
    NOT?: wishlistWhereInput | wishlistWhereInput[]
    wishlist_id?: IntFilter<"wishlist"> | number
    user_id?: IntFilter<"wishlist"> | number
    product_id?: IntFilter<"wishlist"> | number
    added_at?: DateTimeNullableFilter<"wishlist"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type wishlistOrderByWithRelationInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    added_at?: SortOrderInput | SortOrder
    product?: productOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type wishlistWhereUniqueInput = Prisma.AtLeast<{
    wishlist_id?: number
    user_id_product_id?: wishlistUser_idProduct_idCompoundUniqueInput
    AND?: wishlistWhereInput | wishlistWhereInput[]
    OR?: wishlistWhereInput[]
    NOT?: wishlistWhereInput | wishlistWhereInput[]
    user_id?: IntFilter<"wishlist"> | number
    product_id?: IntFilter<"wishlist"> | number
    added_at?: DateTimeNullableFilter<"wishlist"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "wishlist_id" | "user_id_product_id">

  export type wishlistOrderByWithAggregationInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    added_at?: SortOrderInput | SortOrder
    _count?: wishlistCountOrderByAggregateInput
    _avg?: wishlistAvgOrderByAggregateInput
    _max?: wishlistMaxOrderByAggregateInput
    _min?: wishlistMinOrderByAggregateInput
    _sum?: wishlistSumOrderByAggregateInput
  }

  export type wishlistScalarWhereWithAggregatesInput = {
    AND?: wishlistScalarWhereWithAggregatesInput | wishlistScalarWhereWithAggregatesInput[]
    OR?: wishlistScalarWhereWithAggregatesInput[]
    NOT?: wishlistScalarWhereWithAggregatesInput | wishlistScalarWhereWithAggregatesInput[]
    wishlist_id?: IntWithAggregatesFilter<"wishlist"> | number
    user_id?: IntWithAggregatesFilter<"wishlist"> | number
    product_id?: IntWithAggregatesFilter<"wishlist"> | number
    added_at?: DateTimeNullableWithAggregatesFilter<"wishlist"> | Date | string | null
  }

  export type DiscountRuleCreateInput = {
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
    Order?: OrderCreateNestedManyWithoutDiscountRuleInput
    product?: productCreateNestedManyWithoutDiscountRuleInput
  }

  export type DiscountRuleUncheckedCreateInput = {
    discount_rule_id?: number
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutDiscountRuleInput
    product?: productUncheckedCreateNestedManyWithoutDiscountRuleInput
  }

  export type DiscountRuleUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutDiscountRuleNestedInput
    product?: productUpdateManyWithoutDiscountRuleNestedInput
  }

  export type DiscountRuleUncheckedUpdateInput = {
    discount_rule_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutDiscountRuleNestedInput
    product?: productUncheckedUpdateManyWithoutDiscountRuleNestedInput
  }

  export type DiscountRuleCreateManyInput = {
    discount_rule_id?: number
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
  }

  export type DiscountRuleUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DiscountRuleUncheckedUpdateManyInput = {
    discount_rule_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrderCreateInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    address?: addressCreateNestedOneWithoutOrderInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutOrderInput
    cart?: cartCreateNestedOneWithoutOrderInput
    User: UserCreateNestedOneWithoutOrderInput
    delivery?: deliveryCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
    delivery?: deliveryUncheckedCreateNestedOneWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneWithoutOrderNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutOrderNestedInput
    cart?: cartUpdateOneWithoutOrderNestedInput
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: deliveryUpdateOneWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery?: deliveryUncheckedUpdateOneWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
  }

  export type OrderUpdateManyMutationInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostalRegionCreateInput = {
    postal_code: string
    city: string
    country: string
    address?: addressCreateNestedManyWithoutPostalRegionInput
  }

  export type PostalRegionUncheckedCreateInput = {
    postal_code: string
    city: string
    country: string
    address?: addressUncheckedCreateNestedManyWithoutPostalRegionInput
  }

  export type PostalRegionUpdateInput = {
    postal_code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: addressUpdateManyWithoutPostalRegionNestedInput
  }

  export type PostalRegionUncheckedUpdateInput = {
    postal_code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: addressUncheckedUpdateManyWithoutPostalRegionNestedInput
  }

  export type PostalRegionCreateManyInput = {
    postal_code: string
    city: string
    country: string
  }

  export type PostalRegionUpdateManyMutationInput = {
    postal_code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type PostalRegionUncheckedUpdateManyInput = {
    postal_code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    wishlist?: wishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressCreateInput = {
    street: string
    is_default?: boolean | null
    Order?: OrderCreateNestedManyWithoutAddressInput
    PostalRegion: PostalRegionCreateNestedOneWithoutAddressInput
    User: UserCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    address_id?: number
    user_id: number
    street: string
    postal_code: string
    is_default?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutAddressNestedInput
    PostalRegion?: PostalRegionUpdateOneRequiredWithoutAddressNestedInput
    User?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type addressCreateManyInput = {
    address_id?: number
    user_id: number
    street: string
    postal_code: string
    is_default?: boolean | null
  }

  export type addressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type addressUncheckedUpdateManyInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type cartCreateInput = {
    created_at?: Date | string | null
    is_active?: boolean | null
    Order?: OrderCreateNestedManyWithoutCartInput
    User: UserCreateNestedOneWithoutCartInput
    cartitem?: cartitemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string | null
    is_active?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutCartInput
    cartitem?: cartitemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutCartNestedInput
    User?: UserUpdateOneRequiredWithoutCartNestedInput
    cartitem?: cartitemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutCartNestedInput
    cartitem?: cartitemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartCreateManyInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string | null
    is_active?: boolean | null
  }

  export type cartUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type cartUncheckedUpdateManyInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type cartitemCreateInput = {
    quantity: number
    added_at?: Date | string | null
    cart: cartCreateNestedOneWithoutCartitemInput
    product: productCreateNestedOneWithoutCartitemInput
  }

  export type cartitemUncheckedCreateInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
    added_at?: Date | string | null
  }

  export type cartitemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: cartUpdateOneRequiredWithoutCartitemNestedInput
    product?: productUpdateOneRequiredWithoutCartitemNestedInput
  }

  export type cartitemUncheckedUpdateInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartitemCreateManyInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
    added_at?: Date | string | null
  }

  export type cartitemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartitemUncheckedUpdateManyInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoryCreateInput = {
    name: string
    description?: string | null
    category?: categoryCreateNestedOneWithoutOther_categoryInput
    other_category?: categoryCreateNestedManyWithoutCategoryInput
    product?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    category_id?: number
    name: string
    description?: string | null
    parent_id?: number | null
    other_category?: categoryUncheckedCreateNestedManyWithoutCategoryInput
    product?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneWithoutOther_categoryNestedInput
    other_category?: categoryUpdateManyWithoutCategoryNestedInput
    product?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_category?: categoryUncheckedUpdateManyWithoutCategoryNestedInput
    product?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    category_id?: number
    name: string
    description?: string | null
    parent_id?: number | null
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type deliveryCreateInput = {
    courier?: string | null
    tracking_number?: string | null
    status?: $Enums.delivery_statuses | null
    updated_at?: Date | string | null
    Order: OrderCreateNestedOneWithoutDeliveryInput
  }

  export type deliveryUncheckedCreateInput = {
    delivery_id?: number
    order_id: number
    courier?: string | null
    tracking_number?: string | null
    status?: $Enums.delivery_statuses | null
    updated_at?: Date | string | null
  }

  export type deliveryUpdateInput = {
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdelivery_statusesFieldUpdateOperationsInput | $Enums.delivery_statuses | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateOneRequiredWithoutDeliveryNestedInput
  }

  export type deliveryUncheckedUpdateInput = {
    delivery_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdelivery_statusesFieldUpdateOperationsInput | $Enums.delivery_statuses | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveryCreateManyInput = {
    delivery_id?: number
    order_id: number
    courier?: string | null
    tracking_number?: string | null
    status?: $Enums.delivery_statuses | null
    updated_at?: Date | string | null
  }

  export type deliveryUpdateManyMutationInput = {
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdelivery_statusesFieldUpdateOperationsInput | $Enums.delivery_statuses | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveryUncheckedUpdateManyInput = {
    delivery_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdelivery_statusesFieldUpdateOperationsInput | $Enums.delivery_statuses | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateInput = {
    method: $Enums.methods
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.payment_statuses | null
    transaction_id?: string | null
    created_at?: Date | string | null
    Order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    payment_id?: number
    order_id: number
    method: $Enums.methods
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.payment_statuses | null
    transaction_id?: string | null
    created_at?: Date | string | null
  }

  export type paymentUpdateInput = {
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyInput = {
    payment_id?: number
    order_id: number
    method: $Enums.methods
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.payment_statuses | null
    transaction_id?: string | null
    created_at?: Date | string | null
  }

  export type paymentUpdateManyMutationInput = {
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cartitem?: cartitemCreateNestedManyWithoutProductInput
    category?: categoryCreateNestedOneWithoutProductInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
    wishlist?: wishlistCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
    cartitem?: cartitemUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartitem?: cartitemUpdateManyWithoutProductNestedInput
    category?: categoryUpdateOneWithoutProductNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
    cartitem?: cartitemUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reviewCreateInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
    product: productCreateNestedOneWithoutReviewInput
    User: UserCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    review_id?: number
    user_id: number
    product_id: number
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
  }

  export type reviewUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: productUpdateOneRequiredWithoutReviewNestedInput
    User?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reviewCreateManyInput = {
    review_id?: number
    user_id: number
    product_id: number
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
  }

  export type reviewUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type wishlistCreateInput = {
    added_at?: Date | string | null
    product: productCreateNestedOneWithoutWishlistInput
    User: UserCreateNestedOneWithoutWishlistInput
  }

  export type wishlistUncheckedCreateInput = {
    wishlist_id?: number
    user_id: number
    product_id: number
    added_at?: Date | string | null
  }

  export type wishlistUpdateInput = {
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: productUpdateOneRequiredWithoutWishlistNestedInput
    User?: UserUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type wishlistUncheckedUpdateInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistCreateManyInput = {
    wishlist_id?: number
    user_id: number
    product_id: number
    added_at?: Date | string | null
  }

  export type wishlistUpdateManyMutationInput = {
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUncheckedUpdateManyInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumdiscount_typesFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_types | Enumdiscount_typesFieldRefInput<$PrismaModel>
    in?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    notIn?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    not?: NestedEnumdiscount_typesFilter<$PrismaModel> | $Enums.discount_types
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscountRuleCountOrderByAggregateInput = {
    discount_rule_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    is_active?: SortOrder
  }

  export type DiscountRuleAvgOrderByAggregateInput = {
    discount_rule_id?: SortOrder
    value?: SortOrder
  }

  export type DiscountRuleMaxOrderByAggregateInput = {
    discount_rule_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    is_active?: SortOrder
  }

  export type DiscountRuleMinOrderByAggregateInput = {
    discount_rule_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    is_active?: SortOrder
  }

  export type DiscountRuleSumOrderByAggregateInput = {
    discount_rule_id?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumdiscount_typesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_types | Enumdiscount_typesFieldRefInput<$PrismaModel>
    in?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    notIn?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    not?: NestedEnumdiscount_typesWithAggregatesFilter<$PrismaModel> | $Enums.discount_types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdiscount_typesFilter<$PrismaModel>
    _max?: NestedEnumdiscount_typesFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumorder_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.order_statuses | Enumorder_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusesNullableFilter<$PrismaModel> | $Enums.order_statuses | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: addressWhereInput | null
    isNot?: addressWhereInput | null
  }

  export type DiscountRuleNullableScalarRelationFilter = {
    is?: DiscountRuleWhereInput | null
    isNot?: DiscountRuleWhereInput | null
  }

  export type CartNullableScalarRelationFilter = {
    is?: cartWhereInput | null
    isNot?: cartWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeliveryNullableScalarRelationFilter = {
    is?: deliveryWhereInput | null
    isNot?: deliveryWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    cart_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    shipped_at?: SortOrder
    delivered_at?: SortOrder
    applied_discount_id?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    cart_id?: SortOrder
    total_amount?: SortOrder
    applied_discount_id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    cart_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    shipped_at?: SortOrder
    delivered_at?: SortOrder
    applied_discount_id?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    cart_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    shipped_at?: SortOrder
    delivered_at?: SortOrder
    applied_discount_id?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    cart_id?: SortOrder
    total_amount?: SortOrder
    applied_discount_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumorder_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_statuses | Enumorder_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.order_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorder_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumorder_statusesNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AddressListRelationFilter = {
    every?: addressWhereInput
    some?: addressWhereInput
    none?: addressWhereInput
  }

  export type addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostalRegionCountOrderByAggregateInput = {
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type PostalRegionMaxOrderByAggregateInput = {
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type PostalRegionMinOrderByAggregateInput = {
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumrolsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.rols | EnumrolsFieldRefInput<$PrismaModel> | null
    in?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolsNullableFilter<$PrismaModel> | $Enums.rols | null
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type WishlistListRelationFilter = {
    every?: wishlistWhereInput
    some?: wishlistWhereInput
    none?: wishlistWhereInput
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type wishlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumrolsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rols | EnumrolsFieldRefInput<$PrismaModel> | null
    in?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolsNullableWithAggregatesFilter<$PrismaModel> | $Enums.rols | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrolsNullableFilter<$PrismaModel>
    _max?: NestedEnumrolsNullableFilter<$PrismaModel>
  }

  export type PostalRegionScalarRelationFilter = {
    is?: PostalRegionWhereInput
    isNot?: PostalRegionWhereInput
  }

  export type addressCountOrderByAggregateInput = {
    address_id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    address_id?: SortOrder
    user_id?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    address_id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    address_id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    address_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartitemListRelationFilter = {
    every?: cartitemWhereInput
    some?: cartitemWhereInput
    none?: cartitemWhereInput
  }

  export type cartitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartCountOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: cartWhereInput
    isNot?: cartWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type cartitemCountOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    added_at?: SortOrder
  }

  export type cartitemAvgOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cartitemMaxOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    added_at?: SortOrder
  }

  export type cartitemMinOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    added_at?: SortOrder
  }

  export type cartitemSumOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: categoryWhereInput
    some?: categoryWhereInput
    none?: categoryWhereInput
  }

  export type categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type Enumdelivery_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_statuses | Enumdelivery_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdelivery_statusesNullableFilter<$PrismaModel> | $Enums.delivery_statuses | null
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type deliveryCountOrderByAggregateInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
    courier?: SortOrder
    tracking_number?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type deliveryAvgOrderByAggregateInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
  }

  export type deliveryMaxOrderByAggregateInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
    courier?: SortOrder
    tracking_number?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type deliveryMinOrderByAggregateInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
    courier?: SortOrder
    tracking_number?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type deliverySumOrderByAggregateInput = {
    delivery_id?: SortOrder
    order_id?: SortOrder
  }

  export type Enumdelivery_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_statuses | Enumdelivery_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdelivery_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.delivery_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdelivery_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumdelivery_statusesNullableFilter<$PrismaModel>
  }

  export type EnummethodsFilter<$PrismaModel = never> = {
    equals?: $Enums.methods | EnummethodsFieldRefInput<$PrismaModel>
    in?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    not?: NestedEnummethodsFilter<$PrismaModel> | $Enums.methods
  }

  export type Enumpayment_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_statuses | Enumpayment_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusesNullableFilter<$PrismaModel> | $Enums.payment_statuses | null
  }

  export type paymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    created_at?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    created_at?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    created_at?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type EnummethodsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.methods | EnummethodsFieldRefInput<$PrismaModel>
    in?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    not?: NestedEnummethodsWithAggregatesFilter<$PrismaModel> | $Enums.methods
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummethodsFilter<$PrismaModel>
    _max?: NestedEnummethodsFilter<$PrismaModel>
  }

  export type Enumpayment_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_statuses | Enumpayment_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusesNullableFilter<$PrismaModel>
  }

  export type Enumproduct_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.product_statuses | Enumproduct_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproduct_statusesNullableFilter<$PrismaModel> | $Enums.product_statuses | null
  }

  export type productCountOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_rule_id?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    discount_rule_id?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_rule_id?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_rule_id?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    discount_rule_id?: SortOrder
  }

  export type Enumproduct_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_statuses | Enumproduct_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproduct_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.product_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusesNullableFilter<$PrismaModel>
  }

  export type reviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    is_approved?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    is_approved?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    is_approved?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
  }

  export type wishlistUser_idProduct_idCompoundUniqueInput = {
    user_id: number
    product_id: number
  }

  export type wishlistCountOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    added_at?: SortOrder
  }

  export type wishlistAvgOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type wishlistMaxOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    added_at?: SortOrder
  }

  export type wishlistMinOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    added_at?: SortOrder
  }

  export type wishlistSumOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type OrderCreateNestedManyWithoutDiscountRuleInput = {
    create?: XOR<OrderCreateWithoutDiscountRuleInput, OrderUncheckedCreateWithoutDiscountRuleInput> | OrderCreateWithoutDiscountRuleInput[] | OrderUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDiscountRuleInput | OrderCreateOrConnectWithoutDiscountRuleInput[]
    createMany?: OrderCreateManyDiscountRuleInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type productCreateNestedManyWithoutDiscountRuleInput = {
    create?: XOR<productCreateWithoutDiscountRuleInput, productUncheckedCreateWithoutDiscountRuleInput> | productCreateWithoutDiscountRuleInput[] | productUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: productCreateOrConnectWithoutDiscountRuleInput | productCreateOrConnectWithoutDiscountRuleInput[]
    createMany?: productCreateManyDiscountRuleInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDiscountRuleInput = {
    create?: XOR<OrderCreateWithoutDiscountRuleInput, OrderUncheckedCreateWithoutDiscountRuleInput> | OrderCreateWithoutDiscountRuleInput[] | OrderUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDiscountRuleInput | OrderCreateOrConnectWithoutDiscountRuleInput[]
    createMany?: OrderCreateManyDiscountRuleInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutDiscountRuleInput = {
    create?: XOR<productCreateWithoutDiscountRuleInput, productUncheckedCreateWithoutDiscountRuleInput> | productCreateWithoutDiscountRuleInput[] | productUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: productCreateOrConnectWithoutDiscountRuleInput | productCreateOrConnectWithoutDiscountRuleInput[]
    createMany?: productCreateManyDiscountRuleInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumdiscount_typesFieldUpdateOperationsInput = {
    set?: $Enums.discount_types
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type OrderUpdateManyWithoutDiscountRuleNestedInput = {
    create?: XOR<OrderCreateWithoutDiscountRuleInput, OrderUncheckedCreateWithoutDiscountRuleInput> | OrderCreateWithoutDiscountRuleInput[] | OrderUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDiscountRuleInput | OrderCreateOrConnectWithoutDiscountRuleInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDiscountRuleInput | OrderUpsertWithWhereUniqueWithoutDiscountRuleInput[]
    createMany?: OrderCreateManyDiscountRuleInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDiscountRuleInput | OrderUpdateWithWhereUniqueWithoutDiscountRuleInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDiscountRuleInput | OrderUpdateManyWithWhereWithoutDiscountRuleInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type productUpdateManyWithoutDiscountRuleNestedInput = {
    create?: XOR<productCreateWithoutDiscountRuleInput, productUncheckedCreateWithoutDiscountRuleInput> | productCreateWithoutDiscountRuleInput[] | productUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: productCreateOrConnectWithoutDiscountRuleInput | productCreateOrConnectWithoutDiscountRuleInput[]
    upsert?: productUpsertWithWhereUniqueWithoutDiscountRuleInput | productUpsertWithWhereUniqueWithoutDiscountRuleInput[]
    createMany?: productCreateManyDiscountRuleInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutDiscountRuleInput | productUpdateWithWhereUniqueWithoutDiscountRuleInput[]
    updateMany?: productUpdateManyWithWhereWithoutDiscountRuleInput | productUpdateManyWithWhereWithoutDiscountRuleInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutDiscountRuleNestedInput = {
    create?: XOR<OrderCreateWithoutDiscountRuleInput, OrderUncheckedCreateWithoutDiscountRuleInput> | OrderCreateWithoutDiscountRuleInput[] | OrderUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDiscountRuleInput | OrderCreateOrConnectWithoutDiscountRuleInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDiscountRuleInput | OrderUpsertWithWhereUniqueWithoutDiscountRuleInput[]
    createMany?: OrderCreateManyDiscountRuleInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDiscountRuleInput | OrderUpdateWithWhereUniqueWithoutDiscountRuleInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDiscountRuleInput | OrderUpdateManyWithWhereWithoutDiscountRuleInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutDiscountRuleNestedInput = {
    create?: XOR<productCreateWithoutDiscountRuleInput, productUncheckedCreateWithoutDiscountRuleInput> | productCreateWithoutDiscountRuleInput[] | productUncheckedCreateWithoutDiscountRuleInput[]
    connectOrCreate?: productCreateOrConnectWithoutDiscountRuleInput | productCreateOrConnectWithoutDiscountRuleInput[]
    upsert?: productUpsertWithWhereUniqueWithoutDiscountRuleInput | productUpsertWithWhereUniqueWithoutDiscountRuleInput[]
    createMany?: productCreateManyDiscountRuleInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutDiscountRuleInput | productUpdateWithWhereUniqueWithoutDiscountRuleInput[]
    updateMany?: productUpdateManyWithWhereWithoutDiscountRuleInput | productUpdateManyWithWhereWithoutDiscountRuleInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type addressCreateNestedOneWithoutOrderInput = {
    create?: XOR<addressCreateWithoutOrderInput, addressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: addressCreateOrConnectWithoutOrderInput
    connect?: addressWhereUniqueInput
  }

  export type DiscountRuleCreateNestedOneWithoutOrderInput = {
    create?: XOR<DiscountRuleCreateWithoutOrderInput, DiscountRuleUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DiscountRuleCreateOrConnectWithoutOrderInput
    connect?: DiscountRuleWhereUniqueInput
  }

  export type cartCreateNestedOneWithoutOrderInput = {
    create?: XOR<cartCreateWithoutOrderInput, cartUncheckedCreateWithoutOrderInput>
    connectOrCreate?: cartCreateOrConnectWithoutOrderInput
    connect?: cartWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type deliveryCreateNestedOneWithoutOrderInput = {
    create?: XOR<deliveryCreateWithoutOrderInput, deliveryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: deliveryCreateOrConnectWithoutOrderInput
    connect?: deliveryWhereUniqueInput
  }

  export type paymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type deliveryUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<deliveryCreateWithoutOrderInput, deliveryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: deliveryCreateOrConnectWithoutOrderInput
    connect?: deliveryWhereUniqueInput
  }

  export type paymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type NullableEnumorder_statusesFieldUpdateOperationsInput = {
    set?: $Enums.order_statuses | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type addressUpdateOneWithoutOrderNestedInput = {
    create?: XOR<addressCreateWithoutOrderInput, addressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: addressCreateOrConnectWithoutOrderInput
    upsert?: addressUpsertWithoutOrderInput
    disconnect?: addressWhereInput | boolean
    delete?: addressWhereInput | boolean
    connect?: addressWhereUniqueInput
    update?: XOR<XOR<addressUpdateToOneWithWhereWithoutOrderInput, addressUpdateWithoutOrderInput>, addressUncheckedUpdateWithoutOrderInput>
  }

  export type DiscountRuleUpdateOneWithoutOrderNestedInput = {
    create?: XOR<DiscountRuleCreateWithoutOrderInput, DiscountRuleUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DiscountRuleCreateOrConnectWithoutOrderInput
    upsert?: DiscountRuleUpsertWithoutOrderInput
    disconnect?: DiscountRuleWhereInput | boolean
    delete?: DiscountRuleWhereInput | boolean
    connect?: DiscountRuleWhereUniqueInput
    update?: XOR<XOR<DiscountRuleUpdateToOneWithWhereWithoutOrderInput, DiscountRuleUpdateWithoutOrderInput>, DiscountRuleUncheckedUpdateWithoutOrderInput>
  }

  export type cartUpdateOneWithoutOrderNestedInput = {
    create?: XOR<cartCreateWithoutOrderInput, cartUncheckedCreateWithoutOrderInput>
    connectOrCreate?: cartCreateOrConnectWithoutOrderInput
    upsert?: cartUpsertWithoutOrderInput
    disconnect?: cartWhereInput | boolean
    delete?: cartWhereInput | boolean
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutOrderInput, cartUpdateWithoutOrderInput>, cartUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type deliveryUpdateOneWithoutOrderNestedInput = {
    create?: XOR<deliveryCreateWithoutOrderInput, deliveryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: deliveryCreateOrConnectWithoutOrderInput
    upsert?: deliveryUpsertWithoutOrderInput
    disconnect?: deliveryWhereInput | boolean
    delete?: deliveryWhereInput | boolean
    connect?: deliveryWhereUniqueInput
    update?: XOR<XOR<deliveryUpdateToOneWithWhereWithoutOrderInput, deliveryUpdateWithoutOrderInput>, deliveryUncheckedUpdateWithoutOrderInput>
  }

  export type paymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutOrderInput | paymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutOrderInput | paymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutOrderInput | paymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type deliveryUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<deliveryCreateWithoutOrderInput, deliveryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: deliveryCreateOrConnectWithoutOrderInput
    upsert?: deliveryUpsertWithoutOrderInput
    disconnect?: deliveryWhereInput | boolean
    delete?: deliveryWhereInput | boolean
    connect?: deliveryWhereUniqueInput
    update?: XOR<XOR<deliveryUpdateToOneWithWhereWithoutOrderInput, deliveryUpdateWithoutOrderInput>, deliveryUncheckedUpdateWithoutOrderInput>
  }

  export type paymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutOrderInput | paymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutOrderInput | paymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutOrderInput | paymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type addressCreateNestedManyWithoutPostalRegionInput = {
    create?: XOR<addressCreateWithoutPostalRegionInput, addressUncheckedCreateWithoutPostalRegionInput> | addressCreateWithoutPostalRegionInput[] | addressUncheckedCreateWithoutPostalRegionInput[]
    connectOrCreate?: addressCreateOrConnectWithoutPostalRegionInput | addressCreateOrConnectWithoutPostalRegionInput[]
    createMany?: addressCreateManyPostalRegionInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type addressUncheckedCreateNestedManyWithoutPostalRegionInput = {
    create?: XOR<addressCreateWithoutPostalRegionInput, addressUncheckedCreateWithoutPostalRegionInput> | addressCreateWithoutPostalRegionInput[] | addressUncheckedCreateWithoutPostalRegionInput[]
    connectOrCreate?: addressCreateOrConnectWithoutPostalRegionInput | addressCreateOrConnectWithoutPostalRegionInput[]
    createMany?: addressCreateManyPostalRegionInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type addressUpdateManyWithoutPostalRegionNestedInput = {
    create?: XOR<addressCreateWithoutPostalRegionInput, addressUncheckedCreateWithoutPostalRegionInput> | addressCreateWithoutPostalRegionInput[] | addressUncheckedCreateWithoutPostalRegionInput[]
    connectOrCreate?: addressCreateOrConnectWithoutPostalRegionInput | addressCreateOrConnectWithoutPostalRegionInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutPostalRegionInput | addressUpsertWithWhereUniqueWithoutPostalRegionInput[]
    createMany?: addressCreateManyPostalRegionInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutPostalRegionInput | addressUpdateWithWhereUniqueWithoutPostalRegionInput[]
    updateMany?: addressUpdateManyWithWhereWithoutPostalRegionInput | addressUpdateManyWithWhereWithoutPostalRegionInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type addressUncheckedUpdateManyWithoutPostalRegionNestedInput = {
    create?: XOR<addressCreateWithoutPostalRegionInput, addressUncheckedCreateWithoutPostalRegionInput> | addressCreateWithoutPostalRegionInput[] | addressUncheckedCreateWithoutPostalRegionInput[]
    connectOrCreate?: addressCreateOrConnectWithoutPostalRegionInput | addressCreateOrConnectWithoutPostalRegionInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutPostalRegionInput | addressUpsertWithWhereUniqueWithoutPostalRegionInput[]
    createMany?: addressCreateManyPostalRegionInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutPostalRegionInput | addressUpdateWithWhereUniqueWithoutPostalRegionInput[]
    updateMany?: addressUpdateManyWithWhereWithoutPostalRegionInput | addressUpdateManyWithWhereWithoutPostalRegionInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type addressCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type cartCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type wishlistCreateNestedManyWithoutUserInput = {
    create?: XOR<wishlistCreateWithoutUserInput, wishlistUncheckedCreateWithoutUserInput> | wishlistCreateWithoutUserInput[] | wishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUserInput | wishlistCreateOrConnectWithoutUserInput[]
    createMany?: wishlistCreateManyUserInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type addressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type wishlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<wishlistCreateWithoutUserInput, wishlistUncheckedCreateWithoutUserInput> | wishlistCreateWithoutUserInput[] | wishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUserInput | wishlistCreateOrConnectWithoutUserInput[]
    createMany?: wishlistCreateManyUserInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumrolsFieldUpdateOperationsInput = {
    set?: $Enums.rols | null
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type addressUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type cartUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type wishlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<wishlistCreateWithoutUserInput, wishlistUncheckedCreateWithoutUserInput> | wishlistCreateWithoutUserInput[] | wishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUserInput | wishlistCreateOrConnectWithoutUserInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutUserInput | wishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: wishlistCreateManyUserInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutUserInput | wishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutUserInput | wishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type addressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type wishlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<wishlistCreateWithoutUserInput, wishlistUncheckedCreateWithoutUserInput> | wishlistCreateWithoutUserInput[] | wishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUserInput | wishlistCreateOrConnectWithoutUserInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutUserInput | wishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: wishlistCreateManyUserInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutUserInput | wishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutUserInput | wishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PostalRegionCreateNestedOneWithoutAddressInput = {
    create?: XOR<PostalRegionCreateWithoutAddressInput, PostalRegionUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PostalRegionCreateOrConnectWithoutAddressInput
    connect?: PostalRegionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAddressInput | OrderUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAddressInput | OrderUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PostalRegionUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<PostalRegionCreateWithoutAddressInput, PostalRegionUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PostalRegionCreateOrConnectWithoutAddressInput
    upsert?: PostalRegionUpsertWithoutAddressInput
    connect?: PostalRegionWhereUniqueInput
    update?: XOR<XOR<PostalRegionUpdateToOneWithWhereWithoutAddressInput, PostalRegionUpdateWithoutAddressInput>, PostalRegionUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAddressInput | OrderUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAddressInput | OrderUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutCartInput = {
    create?: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput> | OrderCreateWithoutCartInput[] | OrderUncheckedCreateWithoutCartInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCartInput | OrderCreateOrConnectWithoutCartInput[]
    createMany?: OrderCreateManyCartInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type cartitemCreateNestedManyWithoutCartInput = {
    create?: XOR<cartitemCreateWithoutCartInput, cartitemUncheckedCreateWithoutCartInput> | cartitemCreateWithoutCartInput[] | cartitemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutCartInput | cartitemCreateOrConnectWithoutCartInput[]
    createMany?: cartitemCreateManyCartInputEnvelope
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput> | OrderCreateWithoutCartInput[] | OrderUncheckedCreateWithoutCartInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCartInput | OrderCreateOrConnectWithoutCartInput[]
    createMany?: OrderCreateManyCartInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type cartitemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<cartitemCreateWithoutCartInput, cartitemUncheckedCreateWithoutCartInput> | cartitemCreateWithoutCartInput[] | cartitemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutCartInput | cartitemCreateOrConnectWithoutCartInput[]
    createMany?: cartitemCreateManyCartInputEnvelope
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutCartNestedInput = {
    create?: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput> | OrderCreateWithoutCartInput[] | OrderUncheckedCreateWithoutCartInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCartInput | OrderCreateOrConnectWithoutCartInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCartInput | OrderUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: OrderCreateManyCartInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCartInput | OrderUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCartInput | OrderUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type cartitemUpdateManyWithoutCartNestedInput = {
    create?: XOR<cartitemCreateWithoutCartInput, cartitemUncheckedCreateWithoutCartInput> | cartitemCreateWithoutCartInput[] | cartitemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutCartInput | cartitemCreateOrConnectWithoutCartInput[]
    upsert?: cartitemUpsertWithWhereUniqueWithoutCartInput | cartitemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cartitemCreateManyCartInputEnvelope
    set?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    disconnect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    delete?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    update?: cartitemUpdateWithWhereUniqueWithoutCartInput | cartitemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cartitemUpdateManyWithWhereWithoutCartInput | cartitemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cartitemScalarWhereInput | cartitemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput> | OrderCreateWithoutCartInput[] | OrderUncheckedCreateWithoutCartInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCartInput | OrderCreateOrConnectWithoutCartInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCartInput | OrderUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: OrderCreateManyCartInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCartInput | OrderUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCartInput | OrderUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type cartitemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<cartitemCreateWithoutCartInput, cartitemUncheckedCreateWithoutCartInput> | cartitemCreateWithoutCartInput[] | cartitemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutCartInput | cartitemCreateOrConnectWithoutCartInput[]
    upsert?: cartitemUpsertWithWhereUniqueWithoutCartInput | cartitemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cartitemCreateManyCartInputEnvelope
    set?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    disconnect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    delete?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    update?: cartitemUpdateWithWhereUniqueWithoutCartInput | cartitemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cartitemUpdateManyWithWhereWithoutCartInput | cartitemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cartitemScalarWhereInput | cartitemScalarWhereInput[]
  }

  export type cartCreateNestedOneWithoutCartitemInput = {
    create?: XOR<cartCreateWithoutCartitemInput, cartUncheckedCreateWithoutCartitemInput>
    connectOrCreate?: cartCreateOrConnectWithoutCartitemInput
    connect?: cartWhereUniqueInput
  }

  export type productCreateNestedOneWithoutCartitemInput = {
    create?: XOR<productCreateWithoutCartitemInput, productUncheckedCreateWithoutCartitemInput>
    connectOrCreate?: productCreateOrConnectWithoutCartitemInput
    connect?: productWhereUniqueInput
  }

  export type cartUpdateOneRequiredWithoutCartitemNestedInput = {
    create?: XOR<cartCreateWithoutCartitemInput, cartUncheckedCreateWithoutCartitemInput>
    connectOrCreate?: cartCreateOrConnectWithoutCartitemInput
    upsert?: cartUpsertWithoutCartitemInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutCartitemInput, cartUpdateWithoutCartitemInput>, cartUncheckedUpdateWithoutCartitemInput>
  }

  export type productUpdateOneRequiredWithoutCartitemNestedInput = {
    create?: XOR<productCreateWithoutCartitemInput, productUncheckedCreateWithoutCartitemInput>
    connectOrCreate?: productCreateOrConnectWithoutCartitemInput
    upsert?: productUpsertWithoutCartitemInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCartitemInput, productUpdateWithoutCartitemInput>, productUncheckedUpdateWithoutCartitemInput>
  }

  export type categoryCreateNestedOneWithoutOther_categoryInput = {
    create?: XOR<categoryCreateWithoutOther_categoryInput, categoryUncheckedCreateWithoutOther_categoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutOther_categoryInput
    connect?: categoryWhereUniqueInput
  }

  export type categoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<categoryCreateWithoutCategoryInput, categoryUncheckedCreateWithoutCategoryInput> | categoryCreateWithoutCategoryInput[] | categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutCategoryInput | categoryCreateOrConnectWithoutCategoryInput[]
    createMany?: categoryCreateManyCategoryInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<categoryCreateWithoutCategoryInput, categoryUncheckedCreateWithoutCategoryInput> | categoryCreateWithoutCategoryInput[] | categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutCategoryInput | categoryCreateOrConnectWithoutCategoryInput[]
    createMany?: categoryCreateManyCategoryInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type categoryUpdateOneWithoutOther_categoryNestedInput = {
    create?: XOR<categoryCreateWithoutOther_categoryInput, categoryUncheckedCreateWithoutOther_categoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutOther_categoryInput
    upsert?: categoryUpsertWithoutOther_categoryInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutOther_categoryInput, categoryUpdateWithoutOther_categoryInput>, categoryUncheckedUpdateWithoutOther_categoryInput>
  }

  export type categoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<categoryCreateWithoutCategoryInput, categoryUncheckedCreateWithoutCategoryInput> | categoryCreateWithoutCategoryInput[] | categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutCategoryInput | categoryCreateOrConnectWithoutCategoryInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutCategoryInput | categoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: categoryCreateManyCategoryInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutCategoryInput | categoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutCategoryInput | categoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type categoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<categoryCreateWithoutCategoryInput, categoryUncheckedCreateWithoutCategoryInput> | categoryCreateWithoutCategoryInput[] | categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutCategoryInput | categoryCreateOrConnectWithoutCategoryInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutCategoryInput | categoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: categoryCreateManyCategoryInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutCategoryInput | categoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutCategoryInput | categoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryInput
    connect?: OrderWhereUniqueInput
  }

  export type NullableEnumdelivery_statusesFieldUpdateOperationsInput = {
    set?: $Enums.delivery_statuses | null
  }

  export type OrderUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryInput
    upsert?: OrderUpsertWithoutDeliveryInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDeliveryInput, OrderUpdateWithoutDeliveryInput>, OrderUncheckedUpdateWithoutDeliveryInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnummethodsFieldUpdateOperationsInput = {
    set?: $Enums.methods
  }

  export type NullableEnumpayment_statusesFieldUpdateOperationsInput = {
    set?: $Enums.payment_statuses | null
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type cartitemCreateNestedManyWithoutProductInput = {
    create?: XOR<cartitemCreateWithoutProductInput, cartitemUncheckedCreateWithoutProductInput> | cartitemCreateWithoutProductInput[] | cartitemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutProductInput | cartitemCreateOrConnectWithoutProductInput[]
    createMany?: cartitemCreateManyProductInputEnvelope
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
  }

  export type categoryCreateNestedOneWithoutProductInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    connect?: categoryWhereUniqueInput
  }

  export type DiscountRuleCreateNestedOneWithoutProductInput = {
    create?: XOR<DiscountRuleCreateWithoutProductInput, DiscountRuleUncheckedCreateWithoutProductInput>
    connectOrCreate?: DiscountRuleCreateOrConnectWithoutProductInput
    connect?: DiscountRuleWhereUniqueInput
  }

  export type reviewCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type wishlistCreateNestedManyWithoutProductInput = {
    create?: XOR<wishlistCreateWithoutProductInput, wishlistUncheckedCreateWithoutProductInput> | wishlistCreateWithoutProductInput[] | wishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutProductInput | wishlistCreateOrConnectWithoutProductInput[]
    createMany?: wishlistCreateManyProductInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type cartitemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartitemCreateWithoutProductInput, cartitemUncheckedCreateWithoutProductInput> | cartitemCreateWithoutProductInput[] | cartitemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutProductInput | cartitemCreateOrConnectWithoutProductInput[]
    createMany?: cartitemCreateManyProductInputEnvelope
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type wishlistUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<wishlistCreateWithoutProductInput, wishlistUncheckedCreateWithoutProductInput> | wishlistCreateWithoutProductInput[] | wishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutProductInput | wishlistCreateOrConnectWithoutProductInput[]
    createMany?: wishlistCreateManyProductInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type NullableEnumproduct_statusesFieldUpdateOperationsInput = {
    set?: $Enums.product_statuses | null
  }

  export type cartitemUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartitemCreateWithoutProductInput, cartitemUncheckedCreateWithoutProductInput> | cartitemCreateWithoutProductInput[] | cartitemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutProductInput | cartitemCreateOrConnectWithoutProductInput[]
    upsert?: cartitemUpsertWithWhereUniqueWithoutProductInput | cartitemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartitemCreateManyProductInputEnvelope
    set?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    disconnect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    delete?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    update?: cartitemUpdateWithWhereUniqueWithoutProductInput | cartitemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartitemUpdateManyWithWhereWithoutProductInput | cartitemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartitemScalarWhereInput | cartitemScalarWhereInput[]
  }

  export type categoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    upsert?: categoryUpsertWithoutProductInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductInput, categoryUpdateWithoutProductInput>, categoryUncheckedUpdateWithoutProductInput>
  }

  export type DiscountRuleUpdateOneWithoutProductNestedInput = {
    create?: XOR<DiscountRuleCreateWithoutProductInput, DiscountRuleUncheckedCreateWithoutProductInput>
    connectOrCreate?: DiscountRuleCreateOrConnectWithoutProductInput
    upsert?: DiscountRuleUpsertWithoutProductInput
    disconnect?: DiscountRuleWhereInput | boolean
    delete?: DiscountRuleWhereInput | boolean
    connect?: DiscountRuleWhereUniqueInput
    update?: XOR<XOR<DiscountRuleUpdateToOneWithWhereWithoutProductInput, DiscountRuleUpdateWithoutProductInput>, DiscountRuleUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type wishlistUpdateManyWithoutProductNestedInput = {
    create?: XOR<wishlistCreateWithoutProductInput, wishlistUncheckedCreateWithoutProductInput> | wishlistCreateWithoutProductInput[] | wishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutProductInput | wishlistCreateOrConnectWithoutProductInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutProductInput | wishlistUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: wishlistCreateManyProductInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutProductInput | wishlistUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutProductInput | wishlistUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type cartitemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartitemCreateWithoutProductInput, cartitemUncheckedCreateWithoutProductInput> | cartitemCreateWithoutProductInput[] | cartitemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartitemCreateOrConnectWithoutProductInput | cartitemCreateOrConnectWithoutProductInput[]
    upsert?: cartitemUpsertWithWhereUniqueWithoutProductInput | cartitemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartitemCreateManyProductInputEnvelope
    set?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    disconnect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    delete?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    connect?: cartitemWhereUniqueInput | cartitemWhereUniqueInput[]
    update?: cartitemUpdateWithWhereUniqueWithoutProductInput | cartitemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartitemUpdateManyWithWhereWithoutProductInput | cartitemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartitemScalarWhereInput | cartitemScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type wishlistUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<wishlistCreateWithoutProductInput, wishlistUncheckedCreateWithoutProductInput> | wishlistCreateWithoutProductInput[] | wishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutProductInput | wishlistCreateOrConnectWithoutProductInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutProductInput | wishlistUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: wishlistCreateManyProductInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutProductInput | wishlistUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutProductInput | wishlistUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutReviewInput = {
    create?: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewInput
    connect?: productWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewInput
    upsert?: productUpsertWithoutReviewInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutReviewInput, productUpdateWithoutReviewInput>, productUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type productCreateNestedOneWithoutWishlistInput = {
    create?: XOR<productCreateWithoutWishlistInput, productUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: productCreateOrConnectWithoutWishlistInput
    connect?: productWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWishlistInput = {
    create?: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistInput
    connect?: UserWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<productCreateWithoutWishlistInput, productUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: productCreateOrConnectWithoutWishlistInput
    upsert?: productUpsertWithoutWishlistInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutWishlistInput, productUpdateWithoutWishlistInput>, productUncheckedUpdateWithoutWishlistInput>
  }

  export type UserUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistInput
    upsert?: UserUpsertWithoutWishlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishlistInput, UserUpdateWithoutWishlistInput>, UserUncheckedUpdateWithoutWishlistInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumdiscount_typesFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_types | Enumdiscount_typesFieldRefInput<$PrismaModel>
    in?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    notIn?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    not?: NestedEnumdiscount_typesFilter<$PrismaModel> | $Enums.discount_types
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumdiscount_typesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_types | Enumdiscount_typesFieldRefInput<$PrismaModel>
    in?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    notIn?: $Enums.discount_types[] | ListEnumdiscount_typesFieldRefInput<$PrismaModel>
    not?: NestedEnumdiscount_typesWithAggregatesFilter<$PrismaModel> | $Enums.discount_types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdiscount_typesFilter<$PrismaModel>
    _max?: NestedEnumdiscount_typesFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorder_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.order_statuses | Enumorder_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusesNullableFilter<$PrismaModel> | $Enums.order_statuses | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorder_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_statuses | Enumorder_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_statuses[] | ListEnumorder_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.order_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorder_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumorder_statusesNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumrolsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.rols | EnumrolsFieldRefInput<$PrismaModel> | null
    in?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolsNullableFilter<$PrismaModel> | $Enums.rols | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumrolsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rols | EnumrolsFieldRefInput<$PrismaModel> | null
    in?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.rols[] | ListEnumrolsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolsNullableWithAggregatesFilter<$PrismaModel> | $Enums.rols | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrolsNullableFilter<$PrismaModel>
    _max?: NestedEnumrolsNullableFilter<$PrismaModel>
  }

  export type NestedEnumdelivery_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_statuses | Enumdelivery_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdelivery_statusesNullableFilter<$PrismaModel> | $Enums.delivery_statuses | null
  }

  export type NestedEnumdelivery_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_statuses | Enumdelivery_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.delivery_statuses[] | ListEnumdelivery_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdelivery_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.delivery_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdelivery_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumdelivery_statusesNullableFilter<$PrismaModel>
  }

  export type NestedEnummethodsFilter<$PrismaModel = never> = {
    equals?: $Enums.methods | EnummethodsFieldRefInput<$PrismaModel>
    in?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    not?: NestedEnummethodsFilter<$PrismaModel> | $Enums.methods
  }

  export type NestedEnumpayment_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_statuses | Enumpayment_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusesNullableFilter<$PrismaModel> | $Enums.payment_statuses | null
  }

  export type NestedEnummethodsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.methods | EnummethodsFieldRefInput<$PrismaModel>
    in?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.methods[] | ListEnummethodsFieldRefInput<$PrismaModel>
    not?: NestedEnummethodsWithAggregatesFilter<$PrismaModel> | $Enums.methods
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummethodsFilter<$PrismaModel>
    _max?: NestedEnummethodsFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_statuses | Enumpayment_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_statuses[] | ListEnumpayment_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusesNullableFilter<$PrismaModel>
  }

  export type NestedEnumproduct_statusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.product_statuses | Enumproduct_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproduct_statusesNullableFilter<$PrismaModel> | $Enums.product_statuses | null
  }

  export type NestedEnumproduct_statusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_statuses | Enumproduct_statusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.product_statuses[] | ListEnumproduct_statusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproduct_statusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.product_statuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusesNullableFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusesNullableFilter<$PrismaModel>
  }

  export type OrderCreateWithoutDiscountRuleInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    address?: addressCreateNestedOneWithoutOrderInput
    cart?: cartCreateNestedOneWithoutOrderInput
    User: UserCreateNestedOneWithoutOrderInput
    delivery?: deliveryCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDiscountRuleInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    delivery?: deliveryUncheckedCreateNestedOneWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDiscountRuleInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDiscountRuleInput, OrderUncheckedCreateWithoutDiscountRuleInput>
  }

  export type OrderCreateManyDiscountRuleInputEnvelope = {
    data: OrderCreateManyDiscountRuleInput | OrderCreateManyDiscountRuleInput[]
    skipDuplicates?: boolean
  }

  export type productCreateWithoutDiscountRuleInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cartitem?: cartitemCreateNestedManyWithoutProductInput
    category?: categoryCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
    wishlist?: wishlistCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutDiscountRuleInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cartitem?: cartitemUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutDiscountRuleInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutDiscountRuleInput, productUncheckedCreateWithoutDiscountRuleInput>
  }

  export type productCreateManyDiscountRuleInputEnvelope = {
    data: productCreateManyDiscountRuleInput | productCreateManyDiscountRuleInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutDiscountRuleInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDiscountRuleInput, OrderUncheckedUpdateWithoutDiscountRuleInput>
    create: XOR<OrderCreateWithoutDiscountRuleInput, OrderUncheckedCreateWithoutDiscountRuleInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDiscountRuleInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDiscountRuleInput, OrderUncheckedUpdateWithoutDiscountRuleInput>
  }

  export type OrderUpdateManyWithWhereWithoutDiscountRuleInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDiscountRuleInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    order_id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    address_id?: IntNullableFilter<"Order"> | number | null
    cart_id?: IntNullableFilter<"Order"> | number | null
    total_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusesNullableFilter<"Order"> | $Enums.order_statuses | null
    created_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    shipped_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    applied_discount_id?: IntNullableFilter<"Order"> | number | null
  }

  export type productUpsertWithWhereUniqueWithoutDiscountRuleInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutDiscountRuleInput, productUncheckedUpdateWithoutDiscountRuleInput>
    create: XOR<productCreateWithoutDiscountRuleInput, productUncheckedCreateWithoutDiscountRuleInput>
  }

  export type productUpdateWithWhereUniqueWithoutDiscountRuleInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutDiscountRuleInput, productUncheckedUpdateWithoutDiscountRuleInput>
  }

  export type productUpdateManyWithWhereWithoutDiscountRuleInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutDiscountRuleInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    product_id?: IntFilter<"product"> | number
    category_id?: IntNullableFilter<"product"> | number | null
    name?: StringFilter<"product"> | string
    description?: StringNullableFilter<"product"> | string | null
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"product"> | number | null
    status?: Enumproduct_statusesNullableFilter<"product"> | $Enums.product_statuses | null
    image_url?: StringNullableFilter<"product"> | string | null
    created_at?: DateTimeNullableFilter<"product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"product"> | Date | string | null
    discount_rule_id?: IntNullableFilter<"product"> | number | null
  }

  export type addressCreateWithoutOrderInput = {
    street: string
    is_default?: boolean | null
    PostalRegion: PostalRegionCreateNestedOneWithoutAddressInput
    User: UserCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateWithoutOrderInput = {
    address_id?: number
    user_id: number
    street: string
    postal_code: string
    is_default?: boolean | null
  }

  export type addressCreateOrConnectWithoutOrderInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutOrderInput, addressUncheckedCreateWithoutOrderInput>
  }

  export type DiscountRuleCreateWithoutOrderInput = {
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
    product?: productCreateNestedManyWithoutDiscountRuleInput
  }

  export type DiscountRuleUncheckedCreateWithoutOrderInput = {
    discount_rule_id?: number
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
    product?: productUncheckedCreateNestedManyWithoutDiscountRuleInput
  }

  export type DiscountRuleCreateOrConnectWithoutOrderInput = {
    where: DiscountRuleWhereUniqueInput
    create: XOR<DiscountRuleCreateWithoutOrderInput, DiscountRuleUncheckedCreateWithoutOrderInput>
  }

  export type cartCreateWithoutOrderInput = {
    created_at?: Date | string | null
    is_active?: boolean | null
    User: UserCreateNestedOneWithoutCartInput
    cartitem?: cartitemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateWithoutOrderInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string | null
    is_active?: boolean | null
    cartitem?: cartitemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartCreateOrConnectWithoutOrderInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutOrderInput, cartUncheckedCreateWithoutOrderInput>
  }

  export type UserCreateWithoutOrderInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    address?: addressCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    wishlist?: wishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type deliveryCreateWithoutOrderInput = {
    courier?: string | null
    tracking_number?: string | null
    status?: $Enums.delivery_statuses | null
    updated_at?: Date | string | null
  }

  export type deliveryUncheckedCreateWithoutOrderInput = {
    delivery_id?: number
    courier?: string | null
    tracking_number?: string | null
    status?: $Enums.delivery_statuses | null
    updated_at?: Date | string | null
  }

  export type deliveryCreateOrConnectWithoutOrderInput = {
    where: deliveryWhereUniqueInput
    create: XOR<deliveryCreateWithoutOrderInput, deliveryUncheckedCreateWithoutOrderInput>
  }

  export type paymentCreateWithoutOrderInput = {
    method: $Enums.methods
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.payment_statuses | null
    transaction_id?: string | null
    created_at?: Date | string | null
  }

  export type paymentUncheckedCreateWithoutOrderInput = {
    payment_id?: number
    method: $Enums.methods
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.payment_statuses | null
    transaction_id?: string | null
    created_at?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutOrderInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput>
  }

  export type paymentCreateManyOrderInputEnvelope = {
    data: paymentCreateManyOrderInput | paymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type addressUpsertWithoutOrderInput = {
    update: XOR<addressUpdateWithoutOrderInput, addressUncheckedUpdateWithoutOrderInput>
    create: XOR<addressCreateWithoutOrderInput, addressUncheckedCreateWithoutOrderInput>
    where?: addressWhereInput
  }

  export type addressUpdateToOneWithWhereWithoutOrderInput = {
    where?: addressWhereInput
    data: XOR<addressUpdateWithoutOrderInput, addressUncheckedUpdateWithoutOrderInput>
  }

  export type addressUpdateWithoutOrderInput = {
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PostalRegion?: PostalRegionUpdateOneRequiredWithoutAddressNestedInput
    User?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutOrderInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DiscountRuleUpsertWithoutOrderInput = {
    update: XOR<DiscountRuleUpdateWithoutOrderInput, DiscountRuleUncheckedUpdateWithoutOrderInput>
    create: XOR<DiscountRuleCreateWithoutOrderInput, DiscountRuleUncheckedCreateWithoutOrderInput>
    where?: DiscountRuleWhereInput
  }

  export type DiscountRuleUpdateToOneWithWhereWithoutOrderInput = {
    where?: DiscountRuleWhereInput
    data: XOR<DiscountRuleUpdateWithoutOrderInput, DiscountRuleUncheckedUpdateWithoutOrderInput>
  }

  export type DiscountRuleUpdateWithoutOrderInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: productUpdateManyWithoutDiscountRuleNestedInput
  }

  export type DiscountRuleUncheckedUpdateWithoutOrderInput = {
    discount_rule_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: productUncheckedUpdateManyWithoutDiscountRuleNestedInput
  }

  export type cartUpsertWithoutOrderInput = {
    update: XOR<cartUpdateWithoutOrderInput, cartUncheckedUpdateWithoutOrderInput>
    create: XOR<cartCreateWithoutOrderInput, cartUncheckedCreateWithoutOrderInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutOrderInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutOrderInput, cartUncheckedUpdateWithoutOrderInput>
  }

  export type cartUpdateWithoutOrderInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    User?: UserUpdateOneRequiredWithoutCartNestedInput
    cartitem?: cartitemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutOrderInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cartitem?: cartitemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type deliveryUpsertWithoutOrderInput = {
    update: XOR<deliveryUpdateWithoutOrderInput, deliveryUncheckedUpdateWithoutOrderInput>
    create: XOR<deliveryCreateWithoutOrderInput, deliveryUncheckedCreateWithoutOrderInput>
    where?: deliveryWhereInput
  }

  export type deliveryUpdateToOneWithWhereWithoutOrderInput = {
    where?: deliveryWhereInput
    data: XOR<deliveryUpdateWithoutOrderInput, deliveryUncheckedUpdateWithoutOrderInput>
  }

  export type deliveryUpdateWithoutOrderInput = {
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdelivery_statusesFieldUpdateOperationsInput | $Enums.delivery_statuses | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveryUncheckedUpdateWithoutOrderInput = {
    delivery_id?: IntFieldUpdateOperationsInput | number
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdelivery_statusesFieldUpdateOperationsInput | $Enums.delivery_statuses | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutOrderInput, paymentUncheckedUpdateWithoutOrderInput>
    create: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutOrderInput, paymentUncheckedUpdateWithoutOrderInput>
  }

  export type paymentUpdateManyWithWhereWithoutOrderInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    order_id?: IntFilter<"payment"> | number
    method?: EnummethodsFilter<"payment"> | $Enums.methods
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    status?: Enumpayment_statusesNullableFilter<"payment"> | $Enums.payment_statuses | null
    transaction_id?: StringNullableFilter<"payment"> | string | null
    created_at?: DateTimeNullableFilter<"payment"> | Date | string | null
  }

  export type addressCreateWithoutPostalRegionInput = {
    street: string
    is_default?: boolean | null
    Order?: OrderCreateNestedManyWithoutAddressInput
    User: UserCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateWithoutPostalRegionInput = {
    address_id?: number
    user_id: number
    street: string
    is_default?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressCreateOrConnectWithoutPostalRegionInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutPostalRegionInput, addressUncheckedCreateWithoutPostalRegionInput>
  }

  export type addressCreateManyPostalRegionInputEnvelope = {
    data: addressCreateManyPostalRegionInput | addressCreateManyPostalRegionInput[]
    skipDuplicates?: boolean
  }

  export type addressUpsertWithWhereUniqueWithoutPostalRegionInput = {
    where: addressWhereUniqueInput
    update: XOR<addressUpdateWithoutPostalRegionInput, addressUncheckedUpdateWithoutPostalRegionInput>
    create: XOR<addressCreateWithoutPostalRegionInput, addressUncheckedCreateWithoutPostalRegionInput>
  }

  export type addressUpdateWithWhereUniqueWithoutPostalRegionInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutPostalRegionInput, addressUncheckedUpdateWithoutPostalRegionInput>
  }

  export type addressUpdateManyWithWhereWithoutPostalRegionInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutPostalRegionInput>
  }

  export type addressScalarWhereInput = {
    AND?: addressScalarWhereInput | addressScalarWhereInput[]
    OR?: addressScalarWhereInput[]
    NOT?: addressScalarWhereInput | addressScalarWhereInput[]
    address_id?: IntFilter<"address"> | number
    user_id?: IntFilter<"address"> | number
    street?: StringFilter<"address"> | string
    postal_code?: StringFilter<"address"> | string
    is_default?: BoolNullableFilter<"address"> | boolean | null
  }

  export type OrderCreateWithoutUserInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    address?: addressCreateNestedOneWithoutOrderInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutOrderInput
    cart?: cartCreateNestedOneWithoutOrderInput
    delivery?: deliveryCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    order_id?: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
    delivery?: deliveryUncheckedCreateNestedOneWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type addressCreateWithoutUserInput = {
    street: string
    is_default?: boolean | null
    Order?: OrderCreateNestedManyWithoutAddressInput
    PostalRegion: PostalRegionCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateWithoutUserInput = {
    address_id?: number
    street: string
    postal_code: string
    is_default?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressCreateOrConnectWithoutUserInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressCreateManyUserInputEnvelope = {
    data: addressCreateManyUserInput | addressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cartCreateWithoutUserInput = {
    created_at?: Date | string | null
    is_active?: boolean | null
    Order?: OrderCreateNestedManyWithoutCartInput
    cartitem?: cartitemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateWithoutUserInput = {
    cart_id?: number
    created_at?: Date | string | null
    is_active?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutCartInput
    cartitem?: cartitemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartCreateOrConnectWithoutUserInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartCreateManyUserInputEnvelope = {
    data: cartCreateManyUserInput | cartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUserInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
    product: productCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    review_id?: number
    product_id: number
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type wishlistCreateWithoutUserInput = {
    added_at?: Date | string | null
    product: productCreateNestedOneWithoutWishlistInput
  }

  export type wishlistUncheckedCreateWithoutUserInput = {
    wishlist_id?: number
    product_id: number
    added_at?: Date | string | null
  }

  export type wishlistCreateOrConnectWithoutUserInput = {
    where: wishlistWhereUniqueInput
    create: XOR<wishlistCreateWithoutUserInput, wishlistUncheckedCreateWithoutUserInput>
  }

  export type wishlistCreateManyUserInputEnvelope = {
    data: wishlistCreateManyUserInput | wishlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type addressUpsertWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    update: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressUpdateWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
  }

  export type addressUpdateManyWithWhereWithoutUserInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutUserInput>
  }

  export type cartUpsertWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartUpdateWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
  }

  export type cartUpdateManyWithWhereWithoutUserInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutUserInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    cart_id?: IntFilter<"cart"> | number
    user_id?: IntFilter<"cart"> | number
    created_at?: DateTimeNullableFilter<"cart"> | Date | string | null
    is_active?: BoolNullableFilter<"cart"> | boolean | null
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    review_id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    product_id?: IntFilter<"review"> | number
    rating?: IntNullableFilter<"review"> | number | null
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    is_approved?: BoolNullableFilter<"review"> | boolean | null
  }

  export type wishlistUpsertWithWhereUniqueWithoutUserInput = {
    where: wishlistWhereUniqueInput
    update: XOR<wishlistUpdateWithoutUserInput, wishlistUncheckedUpdateWithoutUserInput>
    create: XOR<wishlistCreateWithoutUserInput, wishlistUncheckedCreateWithoutUserInput>
  }

  export type wishlistUpdateWithWhereUniqueWithoutUserInput = {
    where: wishlistWhereUniqueInput
    data: XOR<wishlistUpdateWithoutUserInput, wishlistUncheckedUpdateWithoutUserInput>
  }

  export type wishlistUpdateManyWithWhereWithoutUserInput = {
    where: wishlistScalarWhereInput
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyWithoutUserInput>
  }

  export type wishlistScalarWhereInput = {
    AND?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
    OR?: wishlistScalarWhereInput[]
    NOT?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
    wishlist_id?: IntFilter<"wishlist"> | number
    user_id?: IntFilter<"wishlist"> | number
    product_id?: IntFilter<"wishlist"> | number
    added_at?: DateTimeNullableFilter<"wishlist"> | Date | string | null
  }

  export type OrderCreateWithoutAddressInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    DiscountRule?: DiscountRuleCreateNestedOneWithoutOrderInput
    cart?: cartCreateNestedOneWithoutOrderInput
    User: UserCreateNestedOneWithoutOrderInput
    delivery?: deliveryCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAddressInput = {
    order_id?: number
    user_id: number
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
    delivery?: deliveryUncheckedCreateNestedOneWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type OrderCreateManyAddressInputEnvelope = {
    data: OrderCreateManyAddressInput | OrderCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type PostalRegionCreateWithoutAddressInput = {
    postal_code: string
    city: string
    country: string
  }

  export type PostalRegionUncheckedCreateWithoutAddressInput = {
    postal_code: string
    city: string
    country: string
  }

  export type PostalRegionCreateOrConnectWithoutAddressInput = {
    where: PostalRegionWhereUniqueInput
    create: XOR<PostalRegionCreateWithoutAddressInput, PostalRegionUncheckedCreateWithoutAddressInput>
  }

  export type UserCreateWithoutAddressInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    wishlist?: wishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAddressInput>
  }

  export type PostalRegionUpsertWithoutAddressInput = {
    update: XOR<PostalRegionUpdateWithoutAddressInput, PostalRegionUncheckedUpdateWithoutAddressInput>
    create: XOR<PostalRegionCreateWithoutAddressInput, PostalRegionUncheckedCreateWithoutAddressInput>
    where?: PostalRegionWhereInput
  }

  export type PostalRegionUpdateToOneWithWhereWithoutAddressInput = {
    where?: PostalRegionWhereInput
    data: XOR<PostalRegionUpdateWithoutAddressInput, PostalRegionUncheckedUpdateWithoutAddressInput>
  }

  export type PostalRegionUpdateWithoutAddressInput = {
    postal_code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type PostalRegionUncheckedUpdateWithoutAddressInput = {
    postal_code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutCartInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    address?: addressCreateNestedOneWithoutOrderInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutOrderInput
    User: UserCreateNestedOneWithoutOrderInput
    delivery?: deliveryCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCartInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
    delivery?: deliveryUncheckedCreateNestedOneWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCartInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput>
  }

  export type OrderCreateManyCartInputEnvelope = {
    data: OrderCreateManyCartInput | OrderCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCartInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    wishlist?: wishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type cartitemCreateWithoutCartInput = {
    quantity: number
    added_at?: Date | string | null
    product: productCreateNestedOneWithoutCartitemInput
  }

  export type cartitemUncheckedCreateWithoutCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
    added_at?: Date | string | null
  }

  export type cartitemCreateOrConnectWithoutCartInput = {
    where: cartitemWhereUniqueInput
    create: XOR<cartitemCreateWithoutCartInput, cartitemUncheckedCreateWithoutCartInput>
  }

  export type cartitemCreateManyCartInputEnvelope = {
    data: cartitemCreateManyCartInput | cartitemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCartInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCartInput, OrderUncheckedUpdateWithoutCartInput>
    create: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCartInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCartInput, OrderUncheckedUpdateWithoutCartInput>
  }

  export type OrderUpdateManyWithWhereWithoutCartInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCartInput>
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cartitemUpsertWithWhereUniqueWithoutCartInput = {
    where: cartitemWhereUniqueInput
    update: XOR<cartitemUpdateWithoutCartInput, cartitemUncheckedUpdateWithoutCartInput>
    create: XOR<cartitemCreateWithoutCartInput, cartitemUncheckedCreateWithoutCartInput>
  }

  export type cartitemUpdateWithWhereUniqueWithoutCartInput = {
    where: cartitemWhereUniqueInput
    data: XOR<cartitemUpdateWithoutCartInput, cartitemUncheckedUpdateWithoutCartInput>
  }

  export type cartitemUpdateManyWithWhereWithoutCartInput = {
    where: cartitemScalarWhereInput
    data: XOR<cartitemUpdateManyMutationInput, cartitemUncheckedUpdateManyWithoutCartInput>
  }

  export type cartitemScalarWhereInput = {
    AND?: cartitemScalarWhereInput | cartitemScalarWhereInput[]
    OR?: cartitemScalarWhereInput[]
    NOT?: cartitemScalarWhereInput | cartitemScalarWhereInput[]
    cart_item_id?: IntFilter<"cartitem"> | number
    cart_id?: IntFilter<"cartitem"> | number
    product_id?: IntFilter<"cartitem"> | number
    quantity?: IntFilter<"cartitem"> | number
    added_at?: DateTimeNullableFilter<"cartitem"> | Date | string | null
  }

  export type cartCreateWithoutCartitemInput = {
    created_at?: Date | string | null
    is_active?: boolean | null
    Order?: OrderCreateNestedManyWithoutCartInput
    User: UserCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutCartitemInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string | null
    is_active?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartCreateOrConnectWithoutCartitemInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutCartitemInput, cartUncheckedCreateWithoutCartitemInput>
  }

  export type productCreateWithoutCartitemInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category?: categoryCreateNestedOneWithoutProductInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
    wishlist?: wishlistCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCartitemInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCartitemInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCartitemInput, productUncheckedCreateWithoutCartitemInput>
  }

  export type cartUpsertWithoutCartitemInput = {
    update: XOR<cartUpdateWithoutCartitemInput, cartUncheckedUpdateWithoutCartitemInput>
    create: XOR<cartCreateWithoutCartitemInput, cartUncheckedCreateWithoutCartitemInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutCartitemInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutCartitemInput, cartUncheckedUpdateWithoutCartitemInput>
  }

  export type cartUpdateWithoutCartitemInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutCartNestedInput
    User?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutCartitemInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutCartNestedInput
  }

  export type productUpsertWithoutCartitemInput = {
    update: XOR<productUpdateWithoutCartitemInput, productUncheckedUpdateWithoutCartitemInput>
    create: XOR<productCreateWithoutCartitemInput, productUncheckedCreateWithoutCartitemInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCartitemInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCartitemInput, productUncheckedUpdateWithoutCartitemInput>
  }

  export type productUpdateWithoutCartitemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUpdateOneWithoutProductNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCartitemInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type categoryCreateWithoutOther_categoryInput = {
    name: string
    description?: string | null
    category?: categoryCreateNestedOneWithoutOther_categoryInput
    product?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutOther_categoryInput = {
    category_id?: number
    name: string
    description?: string | null
    parent_id?: number | null
    product?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutOther_categoryInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutOther_categoryInput, categoryUncheckedCreateWithoutOther_categoryInput>
  }

  export type categoryCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    other_category?: categoryCreateNestedManyWithoutCategoryInput
    product?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutCategoryInput = {
    category_id?: number
    name: string
    description?: string | null
    other_category?: categoryUncheckedCreateNestedManyWithoutCategoryInput
    product?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutCategoryInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutCategoryInput, categoryUncheckedCreateWithoutCategoryInput>
  }

  export type categoryCreateManyCategoryInputEnvelope = {
    data: categoryCreateManyCategoryInput | categoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type productCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cartitem?: cartitemCreateNestedManyWithoutProductInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
    wishlist?: wishlistCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategoryInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
    cartitem?: cartitemUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productCreateManyCategoryInputEnvelope = {
    data: productCreateManyCategoryInput | productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutOther_categoryInput = {
    update: XOR<categoryUpdateWithoutOther_categoryInput, categoryUncheckedUpdateWithoutOther_categoryInput>
    create: XOR<categoryCreateWithoutOther_categoryInput, categoryUncheckedCreateWithoutOther_categoryInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutOther_categoryInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutOther_categoryInput, categoryUncheckedUpdateWithoutOther_categoryInput>
  }

  export type categoryUpdateWithoutOther_categoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneWithoutOther_categoryNestedInput
    product?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutOther_categoryInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    product?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutCategoryInput, categoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<categoryCreateWithoutCategoryInput, categoryUncheckedCreateWithoutCategoryInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutCategoryInput, categoryUncheckedUpdateWithoutCategoryInput>
  }

  export type categoryUpdateManyWithWhereWithoutCategoryInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type categoryScalarWhereInput = {
    AND?: categoryScalarWhereInput | categoryScalarWhereInput[]
    OR?: categoryScalarWhereInput[]
    NOT?: categoryScalarWhereInput | categoryScalarWhereInput[]
    category_id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    parent_id?: IntNullableFilter<"category"> | number | null
  }

  export type productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
  }

  export type productUpdateManyWithWhereWithoutCategoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type OrderCreateWithoutDeliveryInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    address?: addressCreateNestedOneWithoutOrderInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutOrderInput
    cart?: cartCreateNestedOneWithoutOrderInput
    User: UserCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDeliveryInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDeliveryInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput>
  }

  export type OrderUpsertWithoutDeliveryInput = {
    update: XOR<OrderUpdateWithoutDeliveryInput, OrderUncheckedUpdateWithoutDeliveryInput>
    create: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDeliveryInput, OrderUncheckedUpdateWithoutDeliveryInput>
  }

  export type OrderUpdateWithoutDeliveryInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneWithoutOrderNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutOrderNestedInput
    cart?: cartUpdateOneWithoutOrderNestedInput
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDeliveryInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutPaymentInput = {
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    address?: addressCreateNestedOneWithoutOrderInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutOrderInput
    cart?: cartCreateNestedOneWithoutOrderInput
    User: UserCreateNestedOneWithoutOrderInput
    delivery?: deliveryCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
    delivery?: deliveryUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneWithoutOrderNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutOrderNestedInput
    cart?: cartUpdateOneWithoutOrderNestedInput
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: deliveryUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery?: deliveryUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type cartitemCreateWithoutProductInput = {
    quantity: number
    added_at?: Date | string | null
    cart: cartCreateNestedOneWithoutCartitemInput
  }

  export type cartitemUncheckedCreateWithoutProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
    added_at?: Date | string | null
  }

  export type cartitemCreateOrConnectWithoutProductInput = {
    where: cartitemWhereUniqueInput
    create: XOR<cartitemCreateWithoutProductInput, cartitemUncheckedCreateWithoutProductInput>
  }

  export type cartitemCreateManyProductInputEnvelope = {
    data: cartitemCreateManyProductInput | cartitemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutProductInput = {
    name: string
    description?: string | null
    category?: categoryCreateNestedOneWithoutOther_categoryInput
    other_category?: categoryCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutProductInput = {
    category_id?: number
    name: string
    description?: string | null
    parent_id?: number | null
    other_category?: categoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutProductInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
  }

  export type DiscountRuleCreateWithoutProductInput = {
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
    Order?: OrderCreateNestedManyWithoutDiscountRuleInput
  }

  export type DiscountRuleUncheckedCreateWithoutProductInput = {
    discount_rule_id?: number
    code: string
    type: $Enums.discount_types
    value: Decimal | DecimalJsLike | number | string
    valid_from: Date | string
    valid_to: Date | string
    is_active?: boolean | null
    Order?: OrderUncheckedCreateNestedManyWithoutDiscountRuleInput
  }

  export type DiscountRuleCreateOrConnectWithoutProductInput = {
    where: DiscountRuleWhereUniqueInput
    create: XOR<DiscountRuleCreateWithoutProductInput, DiscountRuleUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateWithoutProductInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
    User: UserCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutProductInput = {
    review_id?: number
    user_id: number
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
  }

  export type reviewCreateOrConnectWithoutProductInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateManyProductInputEnvelope = {
    data: reviewCreateManyProductInput | reviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type wishlistCreateWithoutProductInput = {
    added_at?: Date | string | null
    User: UserCreateNestedOneWithoutWishlistInput
  }

  export type wishlistUncheckedCreateWithoutProductInput = {
    wishlist_id?: number
    user_id: number
    added_at?: Date | string | null
  }

  export type wishlistCreateOrConnectWithoutProductInput = {
    where: wishlistWhereUniqueInput
    create: XOR<wishlistCreateWithoutProductInput, wishlistUncheckedCreateWithoutProductInput>
  }

  export type wishlistCreateManyProductInputEnvelope = {
    data: wishlistCreateManyProductInput | wishlistCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type cartitemUpsertWithWhereUniqueWithoutProductInput = {
    where: cartitemWhereUniqueInput
    update: XOR<cartitemUpdateWithoutProductInput, cartitemUncheckedUpdateWithoutProductInput>
    create: XOR<cartitemCreateWithoutProductInput, cartitemUncheckedCreateWithoutProductInput>
  }

  export type cartitemUpdateWithWhereUniqueWithoutProductInput = {
    where: cartitemWhereUniqueInput
    data: XOR<cartitemUpdateWithoutProductInput, cartitemUncheckedUpdateWithoutProductInput>
  }

  export type cartitemUpdateManyWithWhereWithoutProductInput = {
    where: cartitemScalarWhereInput
    data: XOR<cartitemUpdateManyMutationInput, cartitemUncheckedUpdateManyWithoutProductInput>
  }

  export type categoryUpsertWithoutProductInput = {
    update: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
  }

  export type categoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneWithoutOther_categoryNestedInput
    other_category?: categoryUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutProductInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_category?: categoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type DiscountRuleUpsertWithoutProductInput = {
    update: XOR<DiscountRuleUpdateWithoutProductInput, DiscountRuleUncheckedUpdateWithoutProductInput>
    create: XOR<DiscountRuleCreateWithoutProductInput, DiscountRuleUncheckedCreateWithoutProductInput>
    where?: DiscountRuleWhereInput
  }

  export type DiscountRuleUpdateToOneWithWhereWithoutProductInput = {
    where?: DiscountRuleWhereInput
    data: XOR<DiscountRuleUpdateWithoutProductInput, DiscountRuleUncheckedUpdateWithoutProductInput>
  }

  export type DiscountRuleUpdateWithoutProductInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutDiscountRuleNestedInput
  }

  export type DiscountRuleUncheckedUpdateWithoutProductInput = {
    discount_rule_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: Enumdiscount_typesFieldUpdateOperationsInput | $Enums.discount_types
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutDiscountRuleNestedInput
  }

  export type reviewUpsertWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithWhereWithoutProductInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutProductInput>
  }

  export type wishlistUpsertWithWhereUniqueWithoutProductInput = {
    where: wishlistWhereUniqueInput
    update: XOR<wishlistUpdateWithoutProductInput, wishlistUncheckedUpdateWithoutProductInput>
    create: XOR<wishlistCreateWithoutProductInput, wishlistUncheckedCreateWithoutProductInput>
  }

  export type wishlistUpdateWithWhereUniqueWithoutProductInput = {
    where: wishlistWhereUniqueInput
    data: XOR<wishlistUpdateWithoutProductInput, wishlistUncheckedUpdateWithoutProductInput>
  }

  export type wishlistUpdateManyWithWhereWithoutProductInput = {
    where: wishlistScalarWhereInput
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyWithoutProductInput>
  }

  export type productCreateWithoutReviewInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cartitem?: cartitemCreateNestedManyWithoutProductInput
    category?: categoryCreateNestedOneWithoutProductInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutProductInput
    wishlist?: wishlistCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutReviewInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
    cartitem?: cartitemUncheckedCreateNestedManyWithoutProductInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutReviewInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    wishlist?: wishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type productUpsertWithoutReviewInput = {
    update: XOR<productUpdateWithoutReviewInput, productUncheckedUpdateWithoutReviewInput>
    create: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutReviewInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutReviewInput, productUncheckedUpdateWithoutReviewInput>
  }

  export type productUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartitem?: cartitemUpdateManyWithoutProductNestedInput
    category?: categoryUpdateOneWithoutProductNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutProductNestedInput
    wishlist?: wishlistUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutReviewInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
    cartitem?: cartitemUncheckedUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type productCreateWithoutWishlistInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cartitem?: cartitemCreateNestedManyWithoutProductInput
    category?: categoryCreateNestedOneWithoutProductInput
    DiscountRule?: DiscountRuleCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutWishlistInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
    cartitem?: cartitemUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutWishlistInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutWishlistInput, productUncheckedCreateWithoutWishlistInput>
  }

  export type UserCreateWithoutWishlistInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWishlistInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone?: string | null
    role?: $Enums.rols | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
  }

  export type productUpsertWithoutWishlistInput = {
    update: XOR<productUpdateWithoutWishlistInput, productUncheckedUpdateWithoutWishlistInput>
    create: XOR<productCreateWithoutWishlistInput, productUncheckedCreateWithoutWishlistInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutWishlistInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutWishlistInput, productUncheckedUpdateWithoutWishlistInput>
  }

  export type productUpdateWithoutWishlistInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartitem?: cartitemUpdateManyWithoutProductNestedInput
    category?: categoryUpdateOneWithoutProductNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutWishlistInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
    cartitem?: cartitemUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutWishlistInput = {
    update: XOR<UserUpdateWithoutWishlistInput, UserUncheckedUpdateWithoutWishlistInput>
    create: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishlistInput, UserUncheckedUpdateWithoutWishlistInput>
  }

  export type UserUpdateWithoutWishlistInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWishlistInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolsFieldUpdateOperationsInput | $Enums.rols | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateManyDiscountRuleInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
  }

  export type productCreateManyDiscountRuleInput = {
    product_id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrderUpdateWithoutDiscountRuleInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneWithoutOrderNestedInput
    cart?: cartUpdateOneWithoutOrderNestedInput
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: deliveryUpdateOneWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDiscountRuleInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: deliveryUncheckedUpdateOneWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDiscountRuleInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productUpdateWithoutDiscountRuleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartitem?: cartitemUpdateManyWithoutProductNestedInput
    category?: categoryUpdateOneWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutDiscountRuleInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartitem?: cartitemUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutDiscountRuleInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyOrderInput = {
    payment_id?: number
    method: $Enums.methods
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.payment_statuses | null
    transaction_id?: string | null
    created_at?: Date | string | null
  }

  export type paymentUpdateWithoutOrderInput = {
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateWithoutOrderInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyWithoutOrderInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    method?: EnummethodsFieldUpdateOperationsInput | $Enums.methods
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumpayment_statusesFieldUpdateOperationsInput | $Enums.payment_statuses | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressCreateManyPostalRegionInput = {
    address_id?: number
    user_id: number
    street: string
    is_default?: boolean | null
  }

  export type addressUpdateWithoutPostalRegionInput = {
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutAddressNestedInput
    User?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutPostalRegionInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateManyWithoutPostalRegionInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrderCreateManyUserInput = {
    order_id?: number
    address_id?: number | null
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
  }

  export type addressCreateManyUserInput = {
    address_id?: number
    street: string
    postal_code: string
    is_default?: boolean | null
  }

  export type cartCreateManyUserInput = {
    cart_id?: number
    created_at?: Date | string | null
    is_active?: boolean | null
  }

  export type reviewCreateManyUserInput = {
    review_id?: number
    product_id: number
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
  }

  export type wishlistCreateManyUserInput = {
    wishlist_id?: number
    product_id: number
    added_at?: Date | string | null
  }

  export type OrderUpdateWithoutUserInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneWithoutOrderNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutOrderNestedInput
    cart?: cartUpdateOneWithoutOrderNestedInput
    delivery?: deliveryUpdateOneWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery?: deliveryUncheckedUpdateOneWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type addressUpdateWithoutUserInput = {
    street?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutAddressNestedInput
    PostalRegion?: PostalRegionUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutUserInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateManyWithoutUserInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type cartUpdateWithoutUserInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUpdateManyWithoutCartNestedInput
    cartitem?: cartitemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Order?: OrderUncheckedUpdateManyWithoutCartNestedInput
    cartitem?: cartitemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateManyWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reviewUpdateWithoutUserInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: productUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type wishlistUpdateWithoutUserInput = {
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: productUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type wishlistUncheckedUpdateWithoutUserInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUncheckedUpdateManyWithoutUserInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyAddressInput = {
    order_id?: number
    user_id: number
    cart_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
  }

  export type OrderUpdateWithoutAddressInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiscountRule?: DiscountRuleUpdateOneWithoutOrderNestedInput
    cart?: cartUpdateOneWithoutOrderNestedInput
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: deliveryUpdateOneWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAddressInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery?: deliveryUncheckedUpdateOneWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutAddressInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyCartInput = {
    order_id?: number
    user_id: number
    address_id?: number | null
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_statuses | null
    created_at?: Date | string | null
    shipped_at?: Date | string | null
    delivered_at?: Date | string | null
    applied_discount_id?: number | null
  }

  export type cartitemCreateManyCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
    added_at?: Date | string | null
  }

  export type OrderUpdateWithoutCartInput = {
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: addressUpdateOneWithoutOrderNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutOrderNestedInput
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: deliveryUpdateOneWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCartInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery?: deliveryUncheckedUpdateOneWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCartInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableEnumorder_statusesFieldUpdateOperationsInput | $Enums.order_statuses | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applied_discount_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cartitemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: productUpdateOneRequiredWithoutCartitemNestedInput
  }

  export type cartitemUncheckedUpdateWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartitemUncheckedUpdateManyWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoryCreateManyCategoryInput = {
    category_id?: number
    name: string
    description?: string | null
  }

  export type productCreateManyCategoryInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    status?: $Enums.product_statuses | null
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discount_rule_id?: number | null
  }

  export type categoryUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    other_category?: categoryUpdateManyWithoutCategoryNestedInput
    product?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutCategoryInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    other_category?: categoryUncheckedUpdateManyWithoutCategoryNestedInput
    product?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutCategoryInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartitem?: cartitemUpdateManyWithoutProductNestedInput
    DiscountRule?: DiscountRuleUpdateOneWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
    cartitem?: cartitemUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumproduct_statusesFieldUpdateOperationsInput | $Enums.product_statuses | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount_rule_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cartitemCreateManyProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
    added_at?: Date | string | null
  }

  export type reviewCreateManyProductInput = {
    review_id?: number
    user_id: number
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    is_approved?: boolean | null
  }

  export type wishlistCreateManyProductInput = {
    wishlist_id?: number
    user_id: number
    added_at?: Date | string | null
  }

  export type cartitemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: cartUpdateOneRequiredWithoutCartitemNestedInput
  }

  export type cartitemUncheckedUpdateWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartitemUncheckedUpdateManyWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUpdateWithoutProductInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    User?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reviewUncheckedUpdateManyWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type wishlistUpdateWithoutProductInput = {
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type wishlistUncheckedUpdateWithoutProductInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUncheckedUpdateManyWithoutProductInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}