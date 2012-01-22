goog.provide('testbed.WorldView');

goog.require('lime.Scene');
goog.require('lime.Layer');

/**
 * @constructor
 * @param {Array.<world>} The world array
 * @extends {lime.Scene}
 */
testbed.WorldView = function(world)
{
	goog.base(this);

	/** @private */
	this.groundlayer_ = new lime.Layer();
	for (i = 0; i < world.length; i++) {
		this.groundlayer_.appendChild(world[0][i]);
	}
}

goog.inherits(testbed.WorldView, lime.Scene);
