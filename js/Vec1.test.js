const Vec1 = require('./Vec1');

test('Testing Vec1 cloning', () => {
	var a = new Vec1(9);
	expect(a.x).toBe(9);
});