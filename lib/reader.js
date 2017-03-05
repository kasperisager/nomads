const Reader = (read = environment => environment) => ({
  bind: transform => Reader(environment =>
    transform(read(environment)).run(environment)
  ),

  map: transform => Reader(environment =>
    transform(read(environment))
  ),

  run: environment => read(environment),

  toString: () => 'Reader'
});

const unit = environment => Reader(() => environment);

export default Reader;
export {unit};
