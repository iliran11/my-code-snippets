function* generator(i) {
  console.log(i);
  const j = 5 * (yield i * 20);
  console.log(j);
  const k = yield (2 * j) / 4;
  console.log(k);
  console.log(`i: ${i}, j:${j},k:${k}`);
  return i + j + k;
}
