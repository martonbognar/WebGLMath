const Vec2 = require('./Vec2');

var a = new Vec2(9, 3);
var b = a.clone();
var c = new Vec2();

test('Vec2: clone + set', () => {	
	a.set(9,3);
	expect(a.x).toBe(9);
	expect(a.y).toBe(3);
	a.set();
	expect(a.x).toBe(0);
	expect(a.y).toBe(0);
	a.set({x: 2, y: 3});
	expect(a.x).toBe(2);
	expect(a.y).toBe(3);
});

function setInitValues (){
	b.set(1, 4);
	c.set(-3, 3);
}

test('Vec2: random(), clamp()', () => {
	for (var i = 0; i < 50; i++) {
		a = Vec2.random({x: -2, y: -3}, {x: 100, y: 300});
		expect(a.x).toBeGreaterThanOrEqual(-2);
		expect(a.x).toBeLessThan(100);
		expect(a.y).toBeGreaterThanOrEqual(-3);
		expect(a.y).toBeLessThan(300);
		b.setRandom(34, 35);
		expect(b.x).toBeGreaterThanOrEqual(34);
		expect(b.x).toBeLessThan(35);
		expect(b.y).toBeGreaterThanOrEqual(34);
		expect(b.y).toBeLessThan(35);
		a.clamp(0, 1);
		expect(a.x).toBeGreaterThanOrEqual(0);
		expect(a.x).toBeLessThanOrEqual(1);
		a.setClamped(b, 34.4, 34.5);
		expect(a.y).toBeGreaterThanOrEqual(34.4);
		expect(a.y).toBeLessThanOrEqual(34.5);
	}
});

test('Vec2: + operation', () => {
	
});	

test('Vec2: - operation', () => {
	
});	

test('Vec2: * operation', () => {
	setInitValues();
	
	
});	

test('Vec2: / operation', () => {
	setInitValues();
	
});	
