const Writer = (value, log = []) => ({
  bind(transform) {
    return transform(value, log);
  },

  map(transform) {
    return Writer(transform(value), log);
  },

  tell(entry) {
    return Writer(value, [...log, entry]);
  },

  toString() {
    return `Writer { ${value}, [ ${log.join(', ')} ] }`;
  }
});

export default Writer;
