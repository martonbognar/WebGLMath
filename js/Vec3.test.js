const Vec3 = require('./Vec3');

var a = new Vec3(9, 3, 2);
var b = a.clone();
var c = new Vec3();

test('Vec3: clone + set', () => {	
	a.set(9,3,2);
	expect(a.x).toBe(9);
	expect(a.y).toBe(3);
	expect(a.z).toBe(2);
	a.set();
	expect(a.x).toBe(0);
	expect(a.y).toBe(0);
	expect(a.z).toBe(0);
	a.set({x: 2, y: 3, z: 4});
	expect(a.x).toBe(2);
	expect(a.y).toBe(3);
	expect(a.z).toBe(4);
});

function setInitValues (){
	b.set(1, 4, 1);
	c.set(-3, 3, 3);
}

test('Vec3: random(), clamp()', () => {
	for (var i = 0; i < 50; i++) {
		a = Vec3.random({x: -2, y: -3}, {x: 100, y: 300});
		expect(a.x).toBeGreaterThanOrEqual(-2);
		expect(a.x).toBeLessThan(100);
		expect(a.y).toBeGreaterThanOrEqual(-3);
		expect(a.y).toBeLessThan (300);
		expect(a.z).toBeGreaterThanOrEqual(0);
		expect(a.z).toBeLessThan(1);
		b.setRandom(34, 35);
		expect(b.x).toBeGreaterThanOrEqual(34);
		expect(b.x).toBeLessThan(35);
		expect(b.y).toBeGreaterThanOrEqual(34);
		expect(b.y).toBeLessThan(35);
		expect(b.z).toBeGreaterThanOrEqual(34);
		expect(b.z).toBeLessThan(35);
		a.clamp(0, 1);
		expect(a.x).toBeGreaterThanOrEqual(0);
		expect(a.x).toBeLessThanOrEqual(1);
		a.setClamped(b, 34.4, 34.5);
		expect(a.y).toBeGreaterThanOrEqual(34.4);
		expect(a.y).toBeLessThanOrEqual(34.5);
	}
});

test('Vec3: + operation', () => {
	setInitValues();
	
	a.set(b).add(c);
	expect(a.x).toBe(-2);
	expect(a.y).toBe(7);
	expect(a.z).toBe(4);
	a = b.plus(c);
	expect(a.x).toBe(-2);
	expect(a.y).toBe(7);
	expect(a.z).toBe(4);
	a.setSum(b, c);
	expect(a.x).toBe(-2);
	expect(a.y).toBe(7);
	expect(a.z).toBe(4);
});	

test('Vec3: - operation', () => {
	setInitValues();
	
	a.set(b).sub(c);
	expect(a.x).toBe(4);
	expect(a.y).toBe(1);
	expect(a.z).toBe(-2);
	a = b.minus(c);
	expect(a.x).toBe(4);
	expect(a.y).toBe(1);
	expect(a.z).toBe(-2);
	a.setDifference(b, c);
	expect(a.x).toBe(4);
	expect(a.y).toBe(1);
	expect(a.z).toBe(-2);
});	

test('Vec3: * operation', () => {
	setInitValues();
	
	a.set(b).mul(c);
	expect(a.x).toBe(-3);
	expect(a.y).toBe(12);
	expect(a.z).toBe(3);
	a = b.times(c);
	expect(a.x).toBe(-3);
	expect(a.y).toBe(12);
	expect(a.z).toBe(3);
	a.setProduct(b, c);
	expect(a.x).toBe(-3);
	expect(a.y).toBe(12);
	expect(a.z).toBe(3);
	
	b.set(2, 1, -5);
	a = b.times(7);
	expect(a.x).toBeCloseTo(14);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(-35);
	a.set(b).mul(7);
	expect(a.x).toBeCloseTo(14);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(-35);
	a.setScaled(b, 7);
	expect(a.x).toBeCloseTo(14);
	expect(a.y).toBeCloseTo(7);
	expect(a.z).toBeCloseTo(-35);
});	

test('Vec2: / operation', () => {
	setInitValues();
	
	a.set(b).div(c);
	expect(a.x).toBeCloseTo(-1 / 3);
	expect(a.y).toBeCloseTo(4 / 3);
	expect(a.z).toBeCloseTo(1 / 3);
	a = b.over(c);
	expect(a.x).toBeCloseTo(-1 / 3);
	expect(a.y).toBeCloseTo(4 / 3);
	expect(a.z).toBeCloseTo(1 / 3);
	a.setQuotient(b, c);
	expect(a.x).toBeCloseTo(-1 / 3);
	expect(a.y).toBeCloseTo(4 / 3);
	expect(a.z).toBeCloseTo(1 / 3);
});	

