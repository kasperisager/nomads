const Reader = (fn = e => e) => ({
  bind(transform) {
    return Reader(e => transform(fn(e)).run(e));
  },

  map(transform) {
    return Reader(e => transform(fn(e)));
  },

  run(environment) {
    return fn(environment);
  },

  toString() {
    return 'Reader';
  }
});

export default Reader;
