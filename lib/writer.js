const Writer = (value, log = []) => ({
  bind: transform => {
    const result = transform(value);

    return Writer(result.value(), [...log, ...result.log()]);
  },

  map: transform => Writer(transform(value), log),

  value: () => value,

  log: entry => entry === undefined ? log : Writer(value, [...log, entry]),

  toString: () => `Writer { ${value}, [ ${log.join(', ')} ] }`
});

const unit = value => Writer(value, []);

export default Writer;
export {unit};
