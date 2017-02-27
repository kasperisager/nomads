const Left = value => ({
  bind() {
    return Left(value);
  },

  map() {
    return Left(value);
  },

  fold(left) {
    return left(value);
  },

  toString() {
    return `Left { ${value} }`;
  }
});

const Right = value => ({
  bind(transform) {
    return transform(value);
  },

  map(transform) {
    return Right(transform(value));
  },

  fold(left, right) {
    return right(value);
  },

  toString() {
    return `Right { ${value} }`;
  }
});

export {Left, Right};
