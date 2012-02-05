goog.provide('testbed.world');
goog.provide('testbed.world.groundType');

goog.require('goog.array');

goog.require('lime.Sprite');
goog.require('lime.fill.Image');
goog.require('lime.Label');

/** @type {Array} */
testbed.world = new Array();

testbed.world.groundType = {};
testbed.world.groundType.GRASS = 'grass';

/**
 * @private
 * @param {number} size of the world or numbers of sprite fitting on screen or shit
 * @param {string} name of the image file / path
 * @return {lime.Sprite}
 */
testbed.world.generateSprite_ = function(size, imagefile)
{
	var img = new lime.fill.Image(imagefile),
	    imagesize = (testbed.WIDTH < testbed.HEIGHT ? testbed.WIDTH : testbed.HEIGHT) / 15,
	    sprite = new lime.Sprite().
		setFill(img).
		//setStroke(0, 0,0,0).
		//setSize(16, 16).
		setSize(imagesize, imagesize).
		setAnchorPoint(0,0);
	return sprite;
}

/**
 * generates default world
 * @param {Array.<object>} a new array
 * @param {number} Size of the world
 * @return {Array.<world>} The filled world
 */
testbed.world.generate = function(world, size)
{
	for (var i = 0; i < size; i++) {
		var sub = new Array();

		for (var j = 0; j < size; j++) {
			if (
					(i == 1 && j == 1) ||
					(i == size -2 && j == size -2) ||
					(i == 1 && j == size -2) ||
					(i == size -2 && j == 1)) {

				sub[j] = {sprite: testbed.world.generateSprite_(size, "house.png")};

			} else {
				sub[j] = {sprite: testbed.world.generateSprite_(size, "grass.png")};
			}
		}
		world[i] = sub;
	}
	return world;
}
// Somehow this myworld stuff does not work as of now :(
testbed.myworld = [
	goog.array.map(
			new Array(32),
			function(i)
			{
				return {
					sprite: new testbed.world.generateSprite_(
							16,
						       	"grass.png"),
				       	type: testbed.world.groundType.GRASS
				};
			}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};}),
	goog.array.map(new Array(32), function(i) {return {sprite: new testbed.world.generateSprite_(16, "grass.png"), type: testbed.world.groundType.GRASS};})
];
console.debug('myworld: ' + testbed.myworld);
