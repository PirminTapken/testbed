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

	/** @private */
	this.groundlayer_ = new lime.Layer().
		setPosition(size[0]/2, size[1]/2);

	for (var i = 0; i < world.length; i++) {
		for (var j = 0; j < world.length; j++) {
			/*
			 * Ausgangsidee: 
			 * var y = size[1] / world.length * j - size[1] / 2;
			 * bildschirmgroesse durch anzahl der tiles - 50% der groesse ->
			 * da sonst zentriert plaziert?
			 * ergibt jedenfalls position abhaengig von der anzhahl der tiles
			 */
			var x = size[0] * ( i / world.length - 0.5);
			var y = size[1] * ( j / world.length - 0.5);

			world[j][i].setPosition(x, y);
			this.groundlayer_.appendChild(world[j][i]);
		}
	}
	this.appendChild(this.groundlayer_);
}

goog.inherits(testbed.WorldView, lime.Scene);
