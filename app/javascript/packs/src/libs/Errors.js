class BaseError extends Error {
  constructor(code, ...params) {
    super(...params);
    this.name = "BaseError";
    this.code = code;
    this.date = new Date();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}

class ClientError extends BaseError {
  constructor(code, message) {
    super(code, message);
    this.name = "ClientError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ClientError);
    }
  }
}

class ServerError extends BaseError {
  constructor(code, message) {
    super(code, message);
    this.name = "ServerError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerError);
    }
  }
}

class SessionExpiredError extends BaseError {
  constructor(message) {
    super(401, message);
    this.name = "SessionExpiredError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SessionExpiredError);
    }
  }
}

const makeError = (code, message) => {
  return code >= 500
    ? new ServerError(code, message)
    : new ClientError(code, message);
};

export { ClientError, ServerError, SessionExpiredError, makeError };
