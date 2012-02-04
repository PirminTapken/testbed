goog.provide('testbed.world');

goog.require('lime.Sprite');
goog.require('lime.fill.Image');
goog.require('lime.Label');

/** @type {Array} */
testbed.world = new Array();

/**
 * @private
 * @param {number} size of the world or numbers of sprite fitting on screen or shit
 * @param {string} name of the image file / path
 * @return {lime.Sprite}
 */
testbed.world.generateSprite_ = function(size, imagefile)
{
	var img = new lime.fill.Image(imagefile),
	    sprite = new lime.Sprite().
		setFill(img).
		setStroke(1, 0,0,0).
		setSize(testbed.WIDTH/size, testbed.HEIGHT/size).
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
					(i == size -1 && j == size -1) ||
					(i == 1 && j == size -1) ||
					(i == size -1 && j == 1)) {
				sub[j] = {sprite: testbed.world.generateSprite_(size, "house.png")};
			} else {
				sub[j] = {sprite: testbed.world.generateSprite_(size, "grass.png")};
			}
		}
		world[i] = sub;
	}
	return world;
}
