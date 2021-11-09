/**
 * Domain errors must meet following rules:
 *  - We known the input data or actual data state that is causing the operation to be rejected.
 *  - They are not server failures.
 *  - It's needed to tell clients what input data or actual data state caused the error.
 *
 * These classes may not be domain errors from a DDD perspective. A better name can probably be used.
 */
export class DomainError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
  }
}

export class InvalidDataDomainError extends DomainError {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
  }
}

export class AccountsNotFoundDomainError extends DomainError {
  constructor(accountIds: string[]) {
    super(`Accounts not found: ${accountIds}`);

    this.name = this.constructor.name;
  }
}

export class DataAccessNotAuthorizedDomainError extends DomainError {
  constructor() {
    super(`You have no permission to access this data.`);

    this.name = this.constructor.name;
  }
}
