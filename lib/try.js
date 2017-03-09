/**
 * @constructor
 * @param {*} error
 */
const Failure = error => ({
  /**
   * @memberof Failure
   * @return {Failure}
   */
  bind: () => Failure(error),

  /**
   * @memberof Failure
   * @return {Failure}
   */
  map: () => Failure(error),

  /**
   * @memberof Failure
   * @return {Failure}
   */
  fold: failure => failure(error),

  /**
   * @memberof Failure
   * @return {String}
   */
  toString: () => `Failure { ${error} }`
});

/**
 * @constructor
 * @param {*} value
 */
const Success = value => ({
  /**
   * @memberof Success
   * @param {Function} transform
   * @return {Failure|Success}
   */
  bind: transform => transform(value),

  /**
   * @memberof Success
   * @param {Function} transform
   * @return {Success}
   */
  map: transform => Success(transform(value)),

  /**
   * @memberof Success
   * @param {Function} failure
   * @param {Function} success
   * @return {*}
   */
  fold: (failure, success) => success(value),

  /**
   * @memberof Success
   * @return {String}
   */
  toString: () => `Success { ${value} }`
});

/**
 * @memberof Try
 * @static
 * @param {*} fn
 * @return {Failure|Success}
 */
const unit = fn => {
  try {
    return Success(fn());
  } catch (err) {
    return Failure(err);
  }
};

export {Success, Failure, unit};
