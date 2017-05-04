const Vec4 = require('../js/Vec4');

var a = new Vec4(9, 3, 2, 2);
var b = a.clone();
var c = new Vec4();

test('Vec4: clone + set', () => {
	a.set(9, 3, 2, 4);
	expect(a.x).toBeCloseTo(9);
	expect(a.y).toBeCloseTo(3);
	expect(a.z).toBeCloseTo(2);
  expect(a.w).toBeCloseTo(4);
	a.set();
	expect(a.x).toBeCloseTo(0);
	expect(a.y).toBeCloseTo(0);
	expect(a.z).toBeCloseTo(0);
  expect(a.w).toBeCloseTo(1);
	a.set({x: 2, y: 3, z: 4, w: 5});
	expect(a.x).toBeCloseTo(2);
	expect(a.y).toBeCloseTo(3);
	expect(a.z).toBeCloseTo(4);
  expect(a.w).toBeCloseTo(5);
});

function setInitValues (){
	b.set(1, 4, 1, 5);
	c.set(-3, 3, 3, 6);
}

test('Vec4: random(), clamp()', () => {
	for (var i = 0; i < 50; i++) {
		a = Vec4.random({x: -2, y: -3, z: 5}, {x: 100, y: 300, z: 10});
		expect(a.x).toBeGreaterThanOrEqual(-2);
		expect(a.x).toBeLessThan(100);
		expect(a.y).toBeGreaterThanOrEqual(-3);
		expect(a.y).toBeLessThan (300);
		expect(a.z).toBeGreaterThanOrEqual(5);
		expect(a.z).toBeLessThan(10);
    expect(a.w).toBeGreaterThanOrEqual(0);
		expect(a.w).toBeLessThan(1);
		b.setRandom(34, 35);
		expect(b.x).toBeGreaterThanOrEqual(34);
		expect(b.x).toBeLessThan(35);
		expect(b.y).toBeGreaterThanOrEqual(34);
		expect(b.y).toBeLessThan(35);
		expect(b.z).toBeGreaterThanOrEqual(34);
		expect(b.z).toBeLessThan(35);
    expect(b.w).toBeGreaterThanOrEqual(34);
    expect(b.w).toBeLessThan(35);
		a.clamp(0, 1);
		expect(a.x).toBeGreaterThanOrEqual(0);
		expect(a.x).toBeLessThanOrEqual(1);
    expect(a.y).toBeGreaterThanOrEqual(0);
		expect(a.y).toBeLessThanOrEqual(1);
    expect(a.z).toBeGreaterThanOrEqual(0);
		expect(a.z).toBeLessThanOrEqual(1);
    expect(a.w).toBeGreaterThanOrEqual(0);
		expect(a.w).toBeLessThanOrEqual(1);
		a.setClamped(b, 34.4, 34.5);
		expect(a.y).toBeGreaterThanOrEqual(34.4);
		expect(a.y).toBeLessThanOrEqual(34.5);
	}
});

test('Vec4: + operation', () => {
	setInitValues();


	a.set(b).add(c);
	expect(a.x).toBeCloseTo(-2);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(4);
  expect(a.w).toBeCloseTo(11);
	a = b.plus(c);
	expect(a.x).toBeCloseTo(-2);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(4);
  expect(a.w).toBeCloseTo(11);
	a.setSum(b, c);
	expect(a.x).toBeCloseTo(-2);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(4);
  expect(a.w).toBeCloseTo(11);
});

test('Vec4: - operation', () => {
	setInitValues();
	a.set(b).sub(c);
	expect(a.x).toBeCloseTo(4);
	expect(a.y).toBeCloseTo(1);
	expect(a.z).toBeCloseTo(-2);
  expect(a.w).toBeCloseTo(-1);
	a = b.minus(c);
	expect(a.x).toBeCloseTo(4);
	expect(a.y).toBeCloseTo(1);
	expect(a.z).toBeCloseTo(-2);
  expect(a.w).toBeCloseTo(-1);
	a.setDifference(b, c);
	expect(a.x).toBeCloseTo(4);
	expect(a.y).toBeCloseTo(1);
	expect(a.z).toBeCloseTo(-2);
  expect(a.w).toBeCloseTo(-1);
});

test('Vec4: * operation', () => {
	setInitValues();
	a.set(b).mul(c);
	expect(a.x).toBeCloseTo(-3);
	expect(a.y).toBeCloseTo(12);
	expect(a.z).toBeCloseTo(3);
  expect(a.w).toBeCloseTo(30);
	a = b.times(c);
	expect(a.x).toBeCloseTo(-3);
	expect(a.y).toBeCloseTo(12);
	expect(a.z).toBeCloseTo(3);
  expect(a.w).toBeCloseTo(30);
	a.setProduct(b, c);
	expect(a.x).toBeCloseTo(-3);
	expect(a.y).toBeCloseTo(12);
	expect(a.z).toBeCloseTo(3);
  expect(a.w).toBeCloseTo(30);

	b.set(2, 1, -5, 4);
	a = b.times(7);
	expect(a.x).toBeCloseTo(14);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(-35);
  expect(a.w).toBeCloseTo(28);
	a.set(b).mul(7);
	expect(a.x).toBeCloseTo(14);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(-35);
  expect(a.w).toBeCloseTo(28);
	a.setScaled(b, 7);
	expect(a.x).toBeCloseTo(14);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(-35);
  expect(a.w).toBeCloseTo(28);
});

test('Vec4: / operation', () => {
	setInitValues();
	a.set(b).div(c);
	expect(a.x).toBeCloseTo(1 / -3);
	expect(a.y).toBeCloseTo(4 / 3);
	expect(a.z).toBeCloseTo(1 / 3);
  expect(a.w).toBeCloseTo(5 / 6);
	a = b.over(c);
	expect(a.x).toBeCloseTo(1 / -3);
	expect(a.y).toBeCloseTo(4 / 3);
	expect(a.z).toBeCloseTo(1 / 3);
  expect(a.w).toBeCloseTo(5 / 6);
	a.setQuotient(b, c);
	expect(a.x).toBeCloseTo(1 / -3);
	expect(a.y).toBeCloseTo(4 / 3);
	expect(a.z).toBeCloseTo(1 / 3);
  expect(a.w).toBeCloseTo(5 / 6);
});

test('Vec4: vec operations', () => {
	b.set(4, -1, 5, 7);
	c.set(3, -1, 5, 3);
	expect(b.dot(c)).toBeCloseTo(13 + 25 + 21);

	b.set(3, 4, 2, 1);
	expect(b.length()).toBeCloseTo(Math.sqrt(30));
	a = b.direction();
	b.normalize();
	expect(a.x).toBeCloseTo(b.x);
	expect(a.y).toBeCloseTo(a.y);
	expect(a.z).toBeCloseTo(a.z);
  expect(a.w).toBeCloseTo(a.w);
});
