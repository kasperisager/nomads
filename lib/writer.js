/**
 * @constructor
 * @param {*} value
 * @param {Array} [log=[]]
 */
const Writer = (value, log = []) => ({
  /**
   * @memberof Writer
   * @param {Function} transform
   * @return {Writer}
   */
  bind: transform => {
    const result = transform(value);

    return Writer(result.value(), [...log, ...result.log()]);
  },

  /**
   * @memberof Writer
   * @param {Function} transform
   * @return {Writer}
   */
  map: transform => Writer(transform(value), log),

  /**
   * @memberof Writer
   * @param {Function} transform
   * @return {*}
   */
  value: () => value,

  /**
   * @memberof Writer
   * @param {*} [entry]
   * @return {Array}
   */
  log: entry => entry === undefined ? log : Writer(value, [...log, entry]),

  /**
   * @memberof Writer
   * @return {String}
   */
  toString: () => `Writer { ${value}, [ ${log.join(', ')} ] }`
});

/**
 * @memberof Writer
 * @static
 * @param {*} value
 * @return {Writer}
 */
const unit = value => Writer(value, []);

export default Writer;
export {unit};
