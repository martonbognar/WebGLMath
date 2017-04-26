var a = new Vec1(9);
var b = a.clone();
var c = new Vec1();

b.set(4);
c.set(3);
console.assert(approx(b.dot(c), 12));

console.assert(approx(
	a.setDotProductOfVec3s(new Vec3(1, 2, 3), new Vec3(1, -1, 0)).x,
	-1));

console.assert(approx(
	a.setLengthOfVec3(new Vec3(3, 4, 0)).x,
	5));

//////////////////////////////////////////////////////////////////////////////////
var a = new Vec2(9, 3);
var b = a.clone();
var c = new Vec2();

b.set(4, -1);
c.set(3, -1);
console.assert(approx(b.dot(c), 13));

b.set(3, 4);
console.assert(approx(b.length(), 5));
a = b.direction();
b.normalize();
console.assert(approx(a.x, b.x));
console.assert(approx(a.y, b.y));

/////////////////////////////////////////////////////////////////

for (var i = 0; i < 50; i++) {
  a = Vec3.random({x: -2, y: -3}, {x: 100, y: 300});
  console.assert(a.x >= -2);
  console.assert(a.x < 100);
  console.assert(a.y >= -3);
  console.assert(a.y < 300);
  console.assert(a.z >= 0);
  console.assert(a.z < 1);
  b.setRandom(34, 35);
  console.assert(b.x >= 34);
  console.assert(b.x < 35);
  console.assert(b.y >= 34);
  console.assert(b.y < 35);
  console.assert(b.z >= 34);
  console.assert(b.z < 35);
  a.clamp(0, 1);
  console.assert(a.x >= 0);
  console.assert(a.x <= 1);
  a.setClamped(b, 34.4, 34.5);
  console.assert(a.y >= 34.4);
  console.assert(a.y <= 34.5);
}
b.set(1, 4, 1);
c.set(-3, 3, 3);
a.set(b).add(c);
console.assert(a.x === -2);
console.assert(a.y === 7);
console.assert(a.z === 4);
a = b.plus(c);
console.assert(a.x === -2);
console.assert(a.y === 7);
console.assert(a.z === 4);
a.setSum(b, c);
console.assert(a.x === -2);
console.assert(a.y === 7);
console.assert(a.z === 4);

a.set(b).sub(c);
console.assert(a.x === 4);
console.assert(a.y === 1);
console.assert(a.z === -2);
a = b.minus(c);
console.assert(a.x === 4);
console.assert(a.y === 1);
console.assert(a.z === -2);
a.setDifference(b, c);
console.assert(a.x === 4);
console.assert(a.y === 1);
console.assert(a.z === -2);

a.set(b).mul(c);
console.assert(a.x === -3);
console.assert(a.y === 12);
console.assert(a.z === 3);
a = b.times(c);
console.assert(a.x === -3);
console.assert(a.y === 12);
console.assert(a.z === 3);
a.setProduct(b, c);
console.assert(a.x === -3);
console.assert(a.y === 12);
console.assert(a.z === 3);

a.set(b).div(c);
console.assert(approx(a.x , -1 / 3));
console.assert(approx(a.y , 4 / 3));
console.assert(approx(a.z , 1 / 3));
a = b.over(c);
console.assert(approx(a.x , -1 / 3));
console.assert(approx(a.y , 4 / 3));
console.assert(approx(a.z , 1 / 3));
a.setQuotient(b, c);
console.assert(approx(a.x , -1 / 3));
console.assert(approx(a.y , 4 / 3));
console.assert(approx(a.z , 1 / 3));

b.set(2, 1, -5);
a = b.times(7);
console.assert(approx(a.x, 14));
console.assert(approx(a.y, 7));
console.assert(approx(a.z, -35));
a.set(b).mul(7);
console.assert(approx(a.x, 14));
console.assert(approx(a.y, 7));
console.assert(approx(a.z, -35));
a.setScaled(b, 7);
console.assert(approx(a.x, 14));
console.assert(approx(a.y, 7));
console.assert(approx(a.z, -35));

b.set(4, -1, 5);
c.set(3, -1, 5);
console.assert(approx(b.dot(c), 13 + 25));

b.set(3, 4, 0);
console.assert(approx(b.length(), 5));
a = b.direction();
b.normalize();
console.assert(approx(a.x, b.x));
console.assert(approx(a.y, b.y));
console.assert(approx(a.z, b.z));