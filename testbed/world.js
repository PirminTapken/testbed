goog.provide('testbed.world');

goog.require('lime.Sprite');
goog.require('lime.fill.Image');

/** @type {Array} */
testbed.world = new Array();

/**
 * generates default world
 * @param {Array.<object>} a new array
 * @param {number} Size of the world
 * @return {Array.<world>} The filled world
 */
testbed.world.generate = function(world, size)
{
	var grassimg = new lime.fill.Image("./grass.jpg"),
	    grasssprite = new lime.Sprite().
		setFill(grassimg).
		setStroke(1, 0, 0, 0);

	for (var i = 0; i < size; i++) {
		var sub = new Array();

		for (var j = 0; j < size; j++) {
			sub[j] = grasssprite;
		}
		world[i] = sub;
	}
	return world;
}
