"use strict";

export class UndefinedFactError extends Error {
  constructor(fastId, ...props) {
    super(...props);
    this.code = "UNDEFINED_FACT";
    this.factId = factId;
  }
}
