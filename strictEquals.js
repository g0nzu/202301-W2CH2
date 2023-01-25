const strictEquals = (a, b) => {
  if (Object.is(a, b)) {
    return true;
  }

  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }

  if (
    (Object.is(-0, b) && Object.is(b, -0)) ||
    (Object.is(b, -0) && Object.is(a, -0))
  ) {
    return true;
  }

  return false;
};

export default strictEquals;
