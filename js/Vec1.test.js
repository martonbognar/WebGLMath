const Vec1 = require('./Vec1');

test('Testing Vec1 clone + set', () => {
	var a = new Vec1(9);
	var b = a.clone();
	expect(b.x).toBe(9);
	
	a.set(); //If no argument is given sets the vector to 0
	expect(a.x).toBe(0);
	a.set({x: 2, y: 3});
	expect(a.x).toBe(2);
});

var a = new Vec1(9);
var b = new Vec1(0);
var c = new Vec1(0);

test('Testing Vec1.random(), clamp()', () => {
	for (var i = 0; i < 50; i++) {
		a = Vec1.random(-2, 100);
		expect(a.x).toBeGreaterThanOrEqual(-2);
		expect(a.x).toBeLessThan(100);
		b.setRandom(34, 35);
		expect(b.x).toBeGreaterThanOrEqual(34);
		expect(b.x).toBeLessThan(35);
		a.clamp(0, 1);
		expect(a.x).toBeGreaterThanOrEqual(0);
		expect(a.x).toBeLessThanOrEqual(1);
		a.setClamped(b, 34.4, 34.5);
		expect(a.x).toBeGreaterThanOrEqual(34.4);
		expect(a.x).toBeLessThanOrEqual(34.5)
	}
});

test('Testing Vec1 + operation', () => {
	b.set(1);
	c.set(-3);
	a.set(b).add(c);
	expect(a.x).toBe(-2);
	a = b.plus(c);
	expect(a.x).toBe(-2);
	a.setSum(b, c);
	expect(a.x).toBe(-2);
});



