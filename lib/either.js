/**
 * @constructor
 * @param {*} value
 */
const Left = value => ({
  /**
   * @memberof Left
   * @return {Left}
   */
  bind: () => Left(value),

  /**
   * @memberof Left
   * @return {Left}
   */
  map: () => Left(value),

  /**
   * @memberof Left
   * @return {Left}
   */
  fold: left => left(value),

  /**
   * @memberof Left
   * @return {String}
   */
  toString: () => `Left { ${value} }`
});

/**
 * @constructor
 * @param {*} value
 */
const Right = value => ({
  /**
   * @memberof Right
   * @param {Function} transform
   * @return {Left|Right}
   */
  bind: transform => transform(value),

  /**
   * @memberof Right
   * @param {Function} transform
   * @return {Right}
   */
  map: transform => Right(transform(value)),

  /**
   * @memberof Right
   * @param {Function} left
   * @param {Function} right
   * @return {*}
   */
  fold: (left, right) => right(value),

  /**
   * @memberof Right
   * @return {String}
   */
  toString: () => `Right { ${value} }`
});

export {Left, Right};
