function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

sum(1)(2)(3);
