goog.provide('testbed.world');

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

	for (i = 0; i < size; i++) {
		sub = new Array();

		for (j = 0; j < size; i++) {
			sub[j] = grasssprite;
		}
		world[i] = sub;
	}
	return world;
}
