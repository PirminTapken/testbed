//set main namespace
goog.provide('testbed');


//get requirements
goog.require('testbed.MenuScene');
goog.require('testbed.world');
goog.require('testbed.WorldView');
goog.require('testbed.TestBedScene');

goog.require('lime.Director');
goog.require('lime.Label');
goog.require('lime.Layer');
goog.require('lime.RoundedRect');
goog.require('lime.Scene');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.Resize');
goog.require('lime.animation.ScaleTo');
goog.require('lime.transitions.Dissolve');
goog.require('lime.transitions.MoveInUp');

testbed.WIDTH = 320;
testbed.HEIGHT = 240;

testbed.start = function()
{
	var director = new lime.Director(document.body, testbed.WIDTH, testbed.HEIGHT),
	    gamescene =	new testbed.WorldView(testbed.world.generate(testbed.world, 10)),
	    testbedscene = new testbed.TestBedScene();

	var menulist = [
		{scene: gamescene, title: "Start Game"},
		{scene: testbedscene, title: "Start Testbed"}];

	menuscene = new testbed.MenuScene(menulist);
	director.replaceScene(menuscene, lime.transitions.MoveInUp);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('testbed.start', testbed.start);
