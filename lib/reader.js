const Reader = (read = environment => environment) => ({
  bind(transform) {
    return Reader(environment =>
      transform(read(environment)).run(environment)
    );
  },

  map(transform) {
    return Reader(environment =>
      transform(read(environment))
    );
  },

  run(environment) {
    return read(environment);
  },

  toString() {
    return 'Reader';
  }
});

function unit(environment) {
  return Reader(() => environment);
}

export default Reader;
export {unit};
