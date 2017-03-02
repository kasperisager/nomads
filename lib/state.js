const State = (step = state => [state, state]) => ({
  bind(transform) {
    return State(state => {
      const [value, next] = step(state);
      return transform(value).run(next);
    });
  },

  map(transform) {
    return State(state => {
      const [value, next] = step(state);
      return [transform(value), next];
    });
  },

  run(state) {
    return step(state);
  },

  toString() {
    return 'State';
  }
});

function unit(value) {
  return State(state => [value, state]);
}

function get() {
  return State(state => [state, state]);
}

function put(state) {
  return State(() => [undefined, state]);
}

function modify(transform) {
  return State(state => [undefined, transform(state)]);
}

export default State;
export {unit, get, put, modify};
