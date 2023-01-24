const strictEquals = (a, b) => {
  if (Object.is(a, b)) {
    return true;
  } else if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (
    (Object.is(-0, b) && Object.is(b, -0)) ||
    (Object.is(b, -0) && Object.is(a, -0))
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(strictEquals('water', 'oil'));
