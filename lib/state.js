/**
 * @constructor
 * @param {Function} [step]
 */
const State = (step = state => [state, state]) => ({
  /**
   * @memberof State
   * @param {Function} transform
   * @return {State}
   */
  bind: transform => State(state => {
    const [value, next] = step(state);
    return transform(value).run(next);
  }),

  /**
   * @memberof State
   * @param {Function} transform
   * @return {State}
   */
  map: transform => State(state => {
    const [value, next] = step(state);
    return [transform(value), next];
  }),

  /**
   * @memberof State
   * @param {*} state
   * @return {Array}
   */
  run: state => step(state),

  /**
   * @memberof State
   * @return {String}
   */
  toString: () => 'State'
});

/**
 * @memberof State
 * @static
 * @param {*} value
 * @return {State}
 */
const unit = value => State(state => [value, state]);

/**
 * @memberof State
 * @static
 * @return {State}
 */
const get = () => State(state => [state, state]);

/**
 * @memberof State
 * @static
 * @param {*} state
 * @return {State}
 */
const put = state => State(() => [undefined, state]);

/**
 * @memberof State
 * @static
 * @param {Function} transform
 * @return {State}
 */
const modify = transform => State(state => [undefined, transform(state)]);

export default State;
export {unit, get, put, modify};
