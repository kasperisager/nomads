/**
 * @constructor
 */
const Nothing = {
  /**
   * @memberof Nothing
   * @return {Nothing}
   */
  bind: () => Nothing,

  /**
   * @memberof Nothing
   * @return {Nothing}
   */
  map: () => Nothing,

  /**
   * @memberof Nothing
   * @param {Function} empty
   * @return {*}
   */
  fold: empty => empty(),

  /**
   * @memberof Nothing
   * @return {Nothing}
   */
  filter: () => Nothing,

  /**
   * @memberof Just
   * @return {String}
   */
  toString: () => 'Nothing'
};

/**
 * @constructor
 * @param {*} value
 */
const Just = value => ({
  /**
   * @memberof Just
   * @param {Function} transform
   * @return {Nothing|Just}
   */
  bind: transform => transform(value),

  /**
   * @memberof Just
   * @param {Function} transform
   * @return {Just}
   */
  map: transform => Just(transform(value)),

  /**
   * @memberof Just
   * @param {Function} empty
   * @param {Function} transform
   * @return {*}
   */
  fold: (empty, transform) => transform(value),

  /**
   * @memberof Just
   * @param {Function} predicate
   * @return {Nothing|Just}
   */
  filter: predicate => predicate(value) ? Just(value) : Nothing,

  /**
   * @memberof Just
   * @return {String}
   */
  toString: () => `Just { ${value} }`
});

const unit = value => Just(value);

export {Nothing, Just, unit};
