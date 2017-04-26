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
	b.set(1);
	c.set(-3);
}

test('Vec2: random(), clamp()', () => {
	
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

