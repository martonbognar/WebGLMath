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

test('Testing Vec1.random(), clamp()', () => {
	var a = new Vec1(9);
	var b = new Vec1(0);
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