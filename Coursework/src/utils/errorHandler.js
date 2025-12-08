function getStatusCode(error) {
  if (error.message.includes("not found")) {
    return 404;
  }

  if (error.code && error.code.startsWith("P")) {
    return 500;
  }

  return 400;
}

module.exports = { getStatusCode };

