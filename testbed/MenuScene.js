goog.provide('testbed.MenuScene');

goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('lime.GlossyButton');
goog.require('lime.Label');
goog.require('lime.RoundedRect');
goog.require('lime.Scene');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.Sequence');



/**
 * @constructor
 * @param {Array.<{scene: lime.Scene, title: string}>} list of menu items
 * @extends lime.Scene
 */
testbed.MenuScene = function(menulist) {
  goog.base(this);

  this.menulist_ = menulist;
  this.buttons_ = [];

  goog.array.forEach(this.menulist_, function(item, idx) {
    var button = this.makeButton_(item['title'], idx);
    this.getHandler().listen(buttons,
                       [goog.events.EventType.MOUSEDOWN, goog.events.EventType.TOUCHSTART],
                       goog.partial(this.evtHandler, button, item['scene']),
                       false,
                       this);
    this.appendChild(button);

    this.buttons_[idx] = button;
  }, this);
};
goog.inherits(testbed.MenuScene, lime.Scene);


/**
 * @private
 *
 * @param {string} title
 * @param {number} idx
 */
testbed.MenuScene.prototype.makeButton_ = function(title, idx) {
  return new lime.GlossyButton(title).
    setSize(testbed.WIDTH, testbed.HEIGHT / this.menulist_.length * 0.9).
    setPosition(testbed.WIDTH / 2, testbed.HEIGHT / this.menulist_.length * (idx + 0.5));
};



/**
 * @private
 *
 * @param {lime.GlossyButton} button
 * @param {lime.Scene} followupScene
 * @param {goog.events.Event} evt
 */
testbed.MenuScene.prototype.evtHandler_ = function(button, followupScene, evt) {
  var sequence = new lime.animation.Sequence(new lime.animation.ScaleTo(1.1).setDuration(0.35),
                                             new lime.animation.ScaleTo(1.0).setDuration(0.35))
  button.runAction(sequence);
  this.getDirector().replaceScene(followupScene, lime.transitions.Dissolve);
};
