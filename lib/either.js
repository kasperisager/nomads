const Left = value => ({
  bind: () => Left(value),

  map: () => Left(value),

  fold: left => left(value),

  toString: () => `Left { ${value} }`
});

const Right = value => ({
  bind: transform => transform(value),

  map: transform => Right(transform(value)),

  fold: (left, right) => right(value),

  toString: () => `Right { ${value} }`
});

export {Left, Right};
