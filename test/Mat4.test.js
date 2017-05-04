const Mat4 = require('../js/Mat4');

var a = new Mat4([1, 2, 3, 4,
                 5, 4, 3, 2,
                 2, 2, 1, 0,
                 3, 2, 1, 0]);
var b = new Mat4();

test('Mat4: set', () => {
	expect(a.storage[0]).toBeCloseTo(1);
  expect(a.storage[4]).toBeCloseTo(2);
  expect(a.storage[6]).toBeCloseTo(2);
  expect(a.storage[15]).toBeCloseTo(0);
  b.set(a.storage);
  expect(b.storage[0]).toBeCloseTo(1);
  expect(b.storage[4]).toBeCloseTo(5);
  expect(b.storage[6]).toBeCloseTo(3);
  expect(b.storage[7]).toBeCloseTo(2);
  a.set();
  expect(a.storage[0]).toBeCloseTo(1);
  expect(a.storage[4]).toBeCloseTo(0);
  expect(a.storage[6]).toBeCloseTo(0);
  expect(a.storage[7]).toBeCloseTo(0);
  expect(a.storage[15]).toBeCloseTo(1);
});

function setInitValues (){
	a.set([1, 2, 3, 4,
         5, 4, 3, 2,
         2, 2, 1, 0,
         3, 2, 1, 0]);
	b.set([1, 2, 6, 4,
         3, 4, 3, 2,
         4, 3, 0, 12,
         6, 2, 1, 8]);
}

test('Mat4: invert', () => {
  setInitValues();
  a.set(3, 4,  7, 9,
        5, 4, -1, 4,
        8, 7,  8, 5,
        4, 3,  0, 9);
  a.invert();
  expect(a).toEqual(new Mat4([-60/103,	-66/103,	177/412,	 259/412,
                               71/103,	109/103,	-97/206,	-185/206,
                               -4/103,	-25/103,	 53/412,   	31/412,
                                3/103,   -7/103, 	 -7/206,	  27/206]));
});

test('Mat4: mul', () => {
  setInitValues();
  a.mul(b);
  expect(a).toEqual(new Mat4([43, 27, 16, 76,
                              41, 39, 44, 80,
                              12, 15, 18, 24,
                              13, 17, 24, 28]));
});

test('Mat4: premul', () => {
  setInitValues();
  b.premul(a);
  expect(b).toEqual(new Mat4([43, 27, 16, 76,
                              41, 39, 44, 80,
                              12, 15, 18, 24,
                              13, 17, 24, 28]));
});

test('Mat4: rotate', () => {
  setInitValues();
  a.rotate(0.5);
  expect(a).toEqual(a.mul( new Mat4([Math.cos(0.5),-Math.sin(0.5), 0, 0,
                                     Math.sin(0.5), Math.cos(0.5), 0, 0,
                                     0, 0, 1, 0,
                                     0, 0, 0, 1])));
});

test('Mat4: scale', () => {
  setInitValues();
  a.scale(0.7);
  expect(a).toEqual(a.mul( new Mat4([0.7, 0, 0, 0,
                                     0, 0.7, 0, 0,
                                     0, 0, 0.7, 0,
                                     0, 0, 0, 1])));
});

test('Mat4: transpose', () => {
  setInitValues();
  a.transpose();
  expect(a).toEqual(new Mat4([1, 5, 2, 3,
                              2, 4, 2, 2,
                              3, 3, 1, 1,
                              4, 2, 0, 0]));
});
