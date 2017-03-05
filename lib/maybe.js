const Nothing = {
  bind: () => Nothing,

  map: () => Nothing,

  fold: empty => empty(),

  filter: () => Nothing,

  toString: () => 'Nothing'
};

const Just = value => ({
  bind: transform => transform(value),

  map: transform => Just(transform(value)),

  fold: (empty, transform) => transform(value),

  filter: predicate => predicate(value) ? Just(value) : Nothing,

  toString: () => `Just { ${value} }`
});

const unit = value => Just(value);

export {Nothing, Just, unit};
