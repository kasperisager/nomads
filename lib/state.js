const State = (step = state => [state, state]) => ({
  bind: transform => State(state => {
    const [value, next] = step(state);
    return transform(value).run(next);
  }),

  map: transform => State(state => {
    const [value, next] = step(state);
    return [transform(value), next];
  }),

  run: state => step(state),

  toString: () => 'State'
});

const unit = value => State(state => [value, state]);

const get = () => State(state => [state, state]);

const put = state => State(() => [undefined, state]);

const modify = transform => State(state => [undefined, transform(state)]);

export default State;
export {unit, get, put, modify};
