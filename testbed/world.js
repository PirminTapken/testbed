goog.provide('testbed.world');

goog.require('lime.Sprite');
goog.require('lime.fill.Image');
goog.require('lime.Label');

/** @type {Array} */
testbed.world = new Array();

/**
 * @private
 * @param {number} size of the world or numbers of sprite fitting on screen or shit
 * @return {lime.Sprite}
 */
testbed.world.generateSprite_ = function(size)
{
	var grassimg = new lime.fill.Image("./grass.png"),
	    grasssprite = new lime.Sprite().
		setFill(grassimg).
		setStroke(1, 0,0,0).
		appendChild(new lime.Label().setText('grass!')).
		setSize(testbed.WIDTH/size, testbed.HEIGHT/size).
		setAnchorPoint(0,0);
	return grasssprite;
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
			sub[j] = {sprite: testbed.world.generateSprite_(size)};
		}
		world[i] = sub;
	}
	return world;
}
