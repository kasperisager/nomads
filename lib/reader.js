const Reader = (read = e => e) => ({
  bind(transform) {
    return Reader(e => transform(read(e)).run(e));
  },

  map(transform) {
    return Reader(e => transform(read(e)));
  },

  run(environment) {
    return read(environment);
  },

  toString() {
    return 'Reader';
  }
});

export default Reader;
