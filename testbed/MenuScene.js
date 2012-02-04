goog.provide('testbed.MenuScene');

goog.require('goog.events');

goog.require('lime.GlossyButton');
goog.require('lime.Label');
goog.require('lime.RoundedRect');
goog.require('lime.Scene');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.Sequence');


/**
 * @constructor
 * @param {Array.Array} list of menu items in the pattern of [scene object, button caption as string]
 * @extends lime.Scene
 */
testbed.MenuScene = function(menulist)
{
	goog.base(this);

	this.menulist_ = menulist;
	this.buttons_ = [];
	
	for (var i = 0; i < menulist.length; i++) {
		console.debug("i: " + i);
		this.buttons_[i] = new lime.GlossyButton(menulist[i]['title']).
			setSize(testbed.WIDTH, testbed.HEIGHT / menulist.length * 0.9).
			setPosition(testbed.WIDTH / 2, testbed.HEIGHT / menulist.length * (i + 0.5));
		goog.events.listen(
				this.buttons_[i],
				['mousedown', 'touchstart'],
				this.evtHandlerWrapper(i),
				false, this);
		this.appendChild(this.buttons_[i])
	}
	
	//goog.events.listen(
	//		this.button_,
	//		['mousedown', 'touchstart'],
	//		this.evtHandler, false, this);
}

goog.inherits(testbed.MenuScene, lime.Scene);

testbed.MenuScene.prototype.evtHandler = function(e, button, followupScene)
{
       button.runAction(
	       new lime.animation.Sequence(
		       new lime.animation.ScaleTo(1.1).setDuration(0.35),
		       new lime.animation.ScaleTo(1.0).setDuration(0.35)));
       this.getDirector().replaceScene(followupScene, lime.transitions.Dissolve);
}

testbed.MenuScene.prototype.evtHandlerWrapper = function(i)
{
				return function(e) {
				       	this.evtHandler(e, this.buttons_[i], this.menulist_[i]['scene']);
				};
}
