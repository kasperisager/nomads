const Nothing = {
  bind() {
    return Nothing;
  },

  map() {
    return Nothing;
  },

  fold(empty) {
    return empty();
  },

  filter() {
    return Nothing;
  },

  toString() {
    return 'Nothing';
  }
};

const Just = value => ({
  bind(transform) {
    return transform(value);
  },

  map(transform) {
    return Just(transform(value));
  },

  fold(empty, transform) {
    return transform(value);
  },

  filter(predicate) {
    return predicate(value) ? Just(value) : Nothing;
  },

  toString() {
    return `Just { ${value} }`;
  }
});

function unit(value) {
  return Just(value);
}

export {Nothing, Just, unit};
