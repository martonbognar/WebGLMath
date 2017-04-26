const Vec1Array = require('./Vec1Array');

var aa1 = new Vec1Array(12);
var ba1 = new Vec1Array(12);
var ca1 = new Vec1Array(12);

test('Vec1Array test1', () => {	
	ba1.addAll(ba1, new Vec1(5));
	ca1.random();
	ca1.scale(ca1, 10);
	aa1.sub(ba1, ca1);
	//console.log(Array.prototype.slice.call(aa1.storage));
	//console.log(Array.prototype.slice.call(ba1.storage));
	//console.log(Array.prototype.slice.call(ca1.storage));
	aa1.mul(aa1, ba1);
	//console.log(Array.prototype.slice.call(aa1.storage));
	aa1.clamp();
	//console.log(Array.prototype.slice.call(aa1.storage));

	var aa2 = new Vec2Array(12);
	var ba2 = new Vec2Array(12);
	var ca2 = new Vec2Array(12);

	ba2.random();
	ca2.random();
	aa1.dotVec2s(ba2, ca2);
	//console.log(Array.prototype.slice.call(aa1.storage));
	//console.log(Array.prototype.slice.call(ba2.storage));
	//console.log(Array.prototype.slice.call(ca2.storage));

	aa1[0].x = 333;
	aa2[3].set(3, 4);
	expect(aa2[3].length()).toBeCloseTo(5);
	
	aa2.mulAll(ca2, new Vec2(-1, 2));
	//console.log(Array.prototype.slice.call(ca2.storage));
	//console.log(Array.prototype.slice.call(aa2.storage));

	//console.log(new Vec2(3, 4).addScaled(0.5, Vec2(2, 4)));
});