goog.provide('testbed.WorldView');

goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Label');

goog.require('testbed');

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
		setPosition(0, 0);

	for (var i = 0; i < world.length; i++) {
		for (var j = 0; j < world[i].length; j++) {
			//console.debug('i, j: ' + i + ', ' + j);
			/*
			 * Ausgangsidee: 
			 * var y = testbed.HEIGHT / world.length * j - testbed.HEIHGT / 2;
			 * bildschirmgroesse durch anzahl der tiles - 50% der groesse ->
			 * da sonst zentriert plaziert?
			 * ergibt jedenfalls position abhaengig von der anzhahl der tiles
			 */
			//var x = testbed.WIDTH * ( i / world.length - 0.5);
			//var y = testbed.HEIGHT * ( j / world[i].length - 0.5);
			var x = testbed.HEIGHT / 15 * i;
			var y = testbed.HEIGHT / 15 * j;
			console.debug('x, y: ' + x + ', ' + y);

			world[i][j]['sprite'].setPosition(x, y);
			this.groundlayer_.appendChild(world[i][j]['sprite']);
		}
	}
	this.appendChild(this.groundlayer_);
}

goog.inherits(testbed.WorldView, lime.Scene);
