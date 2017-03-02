const State = (step = s => [s, s]) => ({
  bind(transform) {
    return State(s => {
      const [value, next] = step(s);
      return transform(value).run(next);
    });
  },

  map(transform) {
    return State(s => {
      const [value, next] = step(s);
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

export default State;
