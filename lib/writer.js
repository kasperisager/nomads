const Writer = (value, log = []) => ({
  bind(transform) {
    const result = transform(value);

    return Writer(result.value(), [...log, ...result.log()]);
  },

  map(transform) {
    return Writer(transform(value), log);
  },

  value() {
    return value;
  },

  log(entry) {
    if (entry === undefined) {
      return log;
    }

    return Writer(value, [...log, entry]);
  },

  toString() {
    return `Writer { ${value}, [ ${log.join(', ')} ] }`;
  }
});

function unit(value) {
  return Writer(value, []);
}

export default Writer;
export {unit};
