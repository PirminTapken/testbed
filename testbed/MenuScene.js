goog.provide('testbed.MenuScene');

goog.require('goog.events');
goog.require('lime.Label');
goog.require('lime.RoundedRect');
goog.require('lime.Scene');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.Sequence');


/**
 * @constructor
 * @param {lime.Scene} GameScene
 * @extends lime.Scene
 */
testbed.MenuScene = function(gameScene)
{
	goog.base(this);

	this.gameScene_ = gameScene;

	var label = new lime.Label().
		setText("Start!").
		setFontSize(24).
		setFontFamily('fantasy');
	this.button_ = new lime.RoundedRect().
		    setSize(300, 50).
		    setRadius(10).
		    appendChild(label).
		    setPosition(1024 / 2, 768 / 2).
		    setStroke(5, 0, 223, 0).
		    setFill(223, 223, 223);

	this.appendChild(this.button_);
	goog.events.listen(
			this.button_,
			['mousedown', 'touchstart'],
			this.evtHandler, false, this);
}

goog.inherits(testbed.MenuScene, lime.Scene);

testbed.MenuScene.prototype.evtHandler = function(e)
{
       this.button_.runAction(
	       new lime.animation.Sequence(
		       new lime.animation.ScaleTo(1.1).setDuration(0.35),
		       new lime.animation.ScaleTo(1.0).setDuration(0.35)));
       this.getDirector().replaceScene(this.gameScene_, lime.transitions.Dissolve);
}

