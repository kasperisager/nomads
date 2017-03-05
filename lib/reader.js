/**
 * @constructor
 * @param {Function} [read]
 */
const Reader = (read = environment => environment) => ({
  /**
   * @memberof Reader
   * @param {Function} transform
   * @return {Reader}
   */
  bind: transform => Reader(environment =>
    transform(read(environment)).run(environment)
  ),

  /**
   * @memberof Reader
   * @param {Function} transform
   * @return {Reader}
   */
  map: transform => Reader(environment =>
    transform(read(environment))
  ),

  /**
   * @memberof Reader
   * @param {*} environment
   * @return {*}
   */
  run: environment => read(environment),

  /**
   * @memberof Reader
   * @return {String}
   */
  toString: () => 'Reader'
});

/**
 * @memberof Reader
 * @static
 * @param {*} environment
 * @return {Reader}
 */
const unit = environment => Reader(() => environment);

export default Reader;
export {unit};
