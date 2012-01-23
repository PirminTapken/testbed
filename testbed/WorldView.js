goog.provide('testbed.WorldView');

goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Label');

/**
 * @constructor
 * @param {Array.<world>} The world array
 * @extends {lime.Scene}
 */
testbed.WorldView = function(world)
{
	goog.base(this);

	var size = new Array(1024,768);

	this.appendChild(
		new lime.Label().
			setText("Hello World!").
			setFontSize(30).
			setFontFamily('fantasy').
			setPosition(size[0] / 2, size[1] / 2));

	/** @private */
	this.groundlayer_ = new lime.Layer().
		setSize(size[0], size[1]);
	for (i = 0; i < world.length; i++) {
		this.groundlayer_.appendChild(new lime.Label().setText("grass!").setPosition(size[0] / world.length * i, 0));
		world[0][i].setPosition(size[0] / world.length * i, 0);
		this.groundlayer_.appendChild(world[0][i]);
	}
	this.appendChild(this.groundlayer_);
}

goog.inherits(testbed.WorldView, lime.Scene);
