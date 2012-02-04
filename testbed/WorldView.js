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


	/** @private */
	this.groundlayer_ = new lime.Layer().
		setPosition(testbed.WIDTH/2, testbed.HEIGHT/2);

	for (var i = 0; i < world.length; i++) {
		for (var j = 0; j < world.length; j++) {
			/*
			 * Ausgangsidee: 
			 * var y = testbed.HEIGHT / world.length * j - testbed.HEIHGT / 2;
			 * bildschirmgroesse durch anzahl der tiles - 50% der groesse ->
			 * da sonst zentriert plaziert?
			 * ergibt jedenfalls position abhaengig von der anzhahl der tiles
			 */
			var x = testbed.WIDTH * ( i / world.length - 0.5);
			var y = testbed.HEIGHT * ( j / world.length - 0.5);

			world[j][i]['sprite'].setPosition(x, y);
			this.groundlayer_.appendChild(world[j][i]['sprite']);
		}
	}
	this.appendChild(this.groundlayer_);
}

goog.inherits(testbed.WorldView, lime.Scene);
