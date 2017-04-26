var a = new Vec1(9);
var b = a.clone();
var c = new Vec1();

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
///Vec3

b.set(3, 4, 0);
console.assert(approx(b.length(), 5));
a = b.direction();
b.normalize();
console.assert(approx(a.x, b.x));
console.assert(approx(a.y, b.y));
console.assert(approx(a.z, b.z));