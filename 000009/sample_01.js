(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bitmap17 = function() {
	this.initialize(img.bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,162);


(lib.bitmap19 = function() {
	this.initialize(img.bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,201);


(lib.bitmap2 = function() {
	this.initialize(img.bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,772,540);


(lib.bitmap9 = function() {
	this.initialize(img.bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,67);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,255,0,0.518)").ss(1,1,1).p("AAVgsIgWAwIgTAp");
	this.shape.setTransform(341.225,143.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,102,255,0.518)").ss(1,1,1).p("EAhSgCyQiihFj/g8QmthloYgmAidKMIEdhPQFKheEqhiIAbgJQAbBzAIBvIACAYQAICLgZBjQgpCeh8A4QjTBflGj4QiPhuiCiUIgNgEIgagIIAdAAQiei3iHjwQh1jOhEi/QgbhLgThJQgShBgLg/IBYgGAMHFUIAIAgQFzh7FAiBQDqDDAiCmQALA2gKAzQg0D9oiAbQijAIizgOQmkggn5iWIgygPIgFgGIgIACQt/DtqyBKQsoBXg1i7QgxiwJ6k9QAugXAygYQEEh9Ezh4IBBAwQG9E1KWDRQtMgSpqiRQjeg0iXg7QlIh/AAigQAAjgKJihIA0gMQGhhiIJgoQgPhNgFhLQgFhCACg6QCaAOClAdAM0JuQHugoGPheIAdgHQKgijAAjkQAAiTkch5AXCB4QD/hnDfhqQBgguBSgrQIkkfguijQg0i8soBYQnsA0pVCIAM6kXQESCBDcCZQBWA8BEA5Ar2rRQAKkSCuhOQDShfFGD3IBiBSArziKIgGABQlLBtkjBxQkVjNhBivQgehRAPhKQA0j8IigcQC2gJDKASAidKMIgPADIgFACIgFgGIAZABICwABQGsAAF1gf");
	this.shape_1.setTransform(263.5454,110.0212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,529.1,222.1), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap17, null, new cjs.Matrix2D(0.957,0.289,-0.289,0.957,-287.2,-171.3)).s().p("Eg0MgChIHU4PMBhFAdSInUYPg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,-171.3,668.1,342.70000000000005);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap9, null, new cjs.Matrix2D(1,0,0,1,-33,-33.5)).s().p("AlJFPIAAqdIKTAAIAAKdg");
	this.shape.setTransform(89.3,59.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.3,26.3,66,67);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap2, null, new cjs.Matrix2D(1,0,0,1,-386,-270)).s().p("Eg8TAqMMAAAhUXMB4nAAAMAAABUXg");
	this.shape.setTransform(386,809);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.bitmap2, null, new cjs.Matrix2D(1,0,0,1,-386,-270)).s().p("Eg8TAqMMAAAhUXMB4nAAAMAAABUXg");
	this.shape_1.setTransform(386,270);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,1079);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BHQgDgDgBgFIgBgIIAAh+IAbAAIAABkIAAAEIAAACIAAAAIAAAAIABgBIACgFIADgDIAzhNIAGgLIAIgIQAEgEAHAAQAHAAADAEQAEAEABAEIABAGIAACAIgbAAIAAhkIAAgDIAAgCIAAAAIgBAAIAAAAIgCAFIgDAEIgzBMIgHALIgIAJQgDADgHAAQgHAAgEgEg");
	this.shape.setTransform(99.5,25.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBIIAAh2IgtAAIAAgZIB0AAIAAAZIgtAAIAAB2g");
	this.shape_1.setTransform(88.4,25.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdBIQgTAAgOgGQgPgGgJgLQgKgKgFgMQgEgNAAgNQAAgJACgLQADgLAHgKQAHgKALgIQANgIALgCQANgDALAAIARAAIAAAZIgSAAQgHAAgJACQgJACgIAGQgIAHgFAJQgEAKgBAKQAAAHADAHQACAHAEAGQAGAJAHAEQAHAEAIACIAPABIARAAIAAAZg");
	this.shape_2.setTransform(79.225,25.0464);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBBQgRgKgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQAQgKAVAAQAVAAARAKQAQAKALARQAJARABAUQgBAVgJARQgLARgQAKQgRAKgVAAQgVAAgQgKgAgigjQgNAOgBAVQABAWANAOQANANAVABQAOgBALgFQALgHAFgLQAHgMAAgOQAAgOgHgLQgFgLgLgHQgLgFgOgBQgVAAgNAOg");
	this.shape_3.setTransform(67.5,25.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBJIAAgYIAhAAIANgCQAHAAAFgEQAEgDAAgJQABgJgGgEQgFgFgJAAIgQgBIgbAAIAAgXIAYAAIALAAQAHgBAGgEQAFgDAAgJQAAgDgCgFQgCgFgGgDQgGgDgLAAIgJABQgFAAgGADQgHAEgEAIQgFAHAAANIAABUIgbAAIAAhaQABgSAIgMQAJgNAOgGQAOgGAQgBQARAAANAHQAMAFAHAKQAGAKAAALQAAAKgFAIQgGAHgJAEQAOADAHAJQAIAKAAANQAAAFgBAFIgDAIQgGAKgIAFQgJAEgJABIgTABg");
	this.shape_4.setTransform(54.25,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBBQgRgKgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQARgKAUAAQAVAAARAKQAQAKALARQAKARAAAUQAAAVgKARQgLARgQAKQgRAKgVAAQgUAAgRgKgAgigjQgNAOgBAVQABAWANAOQANANAVABQAOgBALgFQALgHAFgLQAHgMAAgOQAAgOgHgLQgFgLgLgHQgLgFgOgBQgVAAgNAOg");
	this.shape_5.setTransform(40.6,25.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBpIAAhgIhbAAIAABgIgcAAIAAjRIAcAAIAABYIBbAAIAAhYIAcAAIAADRg");
	this.shape_6.setTransform(25.325,21.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B1E27").s().p("AinhTIFOAAIinCng");
	this.shape_7.setTransform(89.3,51.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#242937").s().p("AG4DXIlPAAIqOAAQhGAAAAhGIAAkhQAAhGBGAAIRLAAQBGAAAABGIAAEhQAABGhGAAg");
	this.shape_8.setTransform(62,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,124,93.3), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(-21.55,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBIIAAh2IgtAAIAAgZIB0AAIAAAZIgtAAIAAB2g");
	this.shape.setTransform(73.9,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBqIAAh/QAAgZAHgQQAHgRALgJQAMgKANgEQANgDAMAAQATAAASAJQARAKALARQAKARABAYQgBAXgKAPQgLARgQAIQgSAJgTAAQgKAAgKgEQgKgDgJgHIAAgcQAKAJAJAEQAJAEAJAAQAWgBAOgNQAOgMAAgWQgBgPgGgMQgHgLgKgHQgMgGgNAAQgLAAgLAFQgLAFgIANQgHANgBAaIAAB8g");
	this.shape_1.setTransform(61.5,27.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBBQgRgKgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQARgKAUAAQAVAAARAKQAQAKAKARQALARAAAUQAAAVgLARQgKARgQAKQgRAKgVAAQgUAAgRgKgAgigjQgNANgBAWQABAXANANQANAOAVAAQAOAAALgHQALgGAFgLQAHgMAAgOQAAgOgHgLQgFgLgLgGQgLgHgOAAQgVABgNANg");
	this.shape_2.setTransform(46.2,24.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBIIAAhQIAAgJQAAgGgCgGQgCgGgFgEQgEgDgGgCIgLgBIgIgBIgbAAIAAB2IgbAAIAAiPIA0AAQALAAANACQAMABALAHQAJAHAEAIQAFAIABAKIABAUIAABQg");
	this.shape_3.setTransform(32.525,24.845);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBmQgRgDgRgLQgSgKgOgWQgHgNgEgOQgDgOAAgPQAAgVAHgRQAIgRAKgMQAMgMAMgHQAOgJARgFQARgEARAAIARAAIAAAaIgUAAQgTAAgPAGQgOAHgJAJQgKAKgGAKQgEAIgDAKQgBAJAAAJQAAAMACAMQADAMAHAKQAKAOAMAHQAKAHAMACQALADALgBIAXAAIAAAbIgUAAIgEAAQgNAAgOgDg");
	this.shape_4.setTransform(19.75,21.5536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1E27").s().p("AimhTIFOAAIioCng");
	this.shape_5.setTransform(67.75,51.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#242937").s().p("AF8DXIlPAAIm3AAQhGAAAAhGIAAkhQAAhGBGAAIMVAAQBGAAAABGIAAEhQAABGhGAAg");
	this.shape_6.setTransform(46.5,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,100.8,93.3), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap19, null, new cjs.Matrix2D(1,0,0,1,-105.5,-100.5)).s().p("AwePtIAA/ZMAg9AAAIAAfZg");
	this.shape.setTransform(65.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1000));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao4I5QjsjsAAlNQAAlMDsjsQDsjsFMAAQFNAADsDsQDsDsAAFMQAAFNjsDsQjsDslNAAQlMAAjsjsg");
	mask.setTransform(60.45,46.475);

	// Layer_3
	this.instance = new lib.Symbol18("synched",0);
	this.instance.setTransform(-45.9,14.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:264,y:108.35},998).to({_off:true},1).wait(1));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_999 = new cjs.Graphics().p("Ao4I5QjsjsAAlNQAAlMDsjsQDsjsFMAAQFNAADsDsQDsDsAAFMQAAFNjsDsQjsDslNAAQlMAAjsjsg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(999).to({graphics:mask_1_graphics_999,x:60.45,y:46.475}).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.setTransform(264.3,108.45);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(999).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-54,211,201);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(13.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBCQgRgJgJgQQgKgRAAgWQAAgXALgRQAKgRASgKQARgJAUAAQATAAARAIQARAIALATQAKASABAdIAABAIgbAAIAAhBQAAgWgIgNQgIgNgLgEQgMgEgKAAQgMAAgMAGQgLAGgGAMQgHAKAAAQQAAARAIAMQAIAKALAFQAMAFAKAAQALAAAJgEQAKgFAIgIIAAAcQgJAHgKADQgLAEgLAAQgVAAgQgJg");
	this.shape.setTransform(111.925,23.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBqIAAh/QAAgZAHgQQAHgRALgJQAMgKAMgEQAOgDAMAAQATAAASAJQARAKALARQAKARABAYQgBAXgKAPQgLARgRAIQgQAJgUAAQgKAAgKgEQgLgDgIgHIAAgcQAKAJAJAEQAJAEAJAAQAWgBAOgNQANgMABgWQAAgPgHgMQgHgLgKgHQgMgGgNAAQgLAAgLAFQgLAFgIANQgHANgBAaIAAB8g");
	this.shape_1.setTransform(96.7,26.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBnQgOgDgLgEIADgaQALAFALADQAMADAMAAIALAAQAHgBAHgDQAGgCAFgEQAFgFACgGIADgLIAAgMIAAgQQgDAFgGAFQgGAFgMADIgIABIgIAAIgKAAIgLgDQgPgGgHgLQgHgLgCgMQgCgNAAgNIAAhNIAbAAIAABIIAAARQAAAIAEAIQADAGAIAGQAEACAFABIAKABQAEAAAGgCQAFgBAFgEQAIgGADgHQADgHABgIIABgOIAAhIIAaAAIAACOQAAAKgBAKQgCAKgEAJQgEAJgKAHQgKAIgNAEQgNAEgLAAQgPgBgNgDg");
	this.shape_2.setTransform(81.995,27.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBIIAAh2IgtAAIAAgZIB0AAIAAAZIguAAIAAB2g");
	this.shape_3.setTransform(70.35,23.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBIIgMgCQgRgIgIgLQgHgMgCgNQgCgMABgIIAAhPIAaAAIAABUQAAAKACAIQADAJAKAGQAFACAFABIAJACIAIgBIAIgDIAIgEQAEgDADgFQACgGABgHIgBgIIgDgHQgEgGgHgEQgHgEgKAAQgGAAgHACQgHACgFAFIAAgbQAGgDAIgDQAHgCAHAAQAMABALAEQAKAEAGAGQAIAIAEAKQAEAIAAAKQAAAJgDAKQgEAKgGAIQgHAIgJAGQgIAEgIABIgQABIgMgBg");
	this.shape_4.setTransform(60.995,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBIIAAh2IgEAAIgTACQgKACgJAHQgIAHgFAJQgDAIgBAJIAAAQIAAA6IgsAAIAAgZIASAAIAAghIABgWQACgNAGgMQAHgNAOgKQAOgJARgDQARgDARAAIARAAIAACPg");
	this.shape_5.setTransform(47.5,23.8464);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBnQgOgDgLgEIADgaQALAFALADQAMADAMAAIALAAQAHgBAHgDQAGgCAFgEQAFgFACgGIADgLIAAgMIAAgQQgDAFgGAFQgGAFgMADIgIABIgIAAIgKAAIgLgDQgPgGgHgLQgHgLgCgMQgCgNAAgNIAAhNIAbAAIAABIIAAARQAAAIAEAIQADAGAIAGQAEACAFABIAKABQAEAAAGgCQAFgBAFgEQAIgGADgHQADgHABgIIABgOIAAhIIAaAAIAACOQAAAKgBAKQgCAKgEAJQgEAJgKAHQgKAIgNAEQgNAEgLAAQgPgBgNgDg");
	this.shape_6.setTransform(35.345,27.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBpIAAg2IgBgMQgBgHgDgGQgDgIgIgEQgIgEgMAAIgpAAIAABfIgcAAIAAjRIAcAAIAABYIATAAQAIAAAGgCQAHgCAFgGQAHgGAFgMIAbg8IAfAAIgXA0IgKATQgEAIgEAFQgFAFgGAFQAJABAKAGQAJAFAHANQAHANAAAYIAAA1g");
	this.shape_7.setTransform(21.175,20.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B1E27").s().p("AikhRIgDgCIFPAAIgDACIilClg");
	this.shape_8.setTransform(103,51.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#242937").s().p("AISDXIADgCIlQAAIADACIsaAAQhGAAAAhGIAAkhQAAhGBGAAISlAAQBGAAAABGIAAEhQAABGhGAAg");
	this.shape_9.setTransform(66.5,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,136,93.1), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(548.85,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBCQgRgJgJgQQgKgQAAgXQAAgXALgRQAKgRASgKQARgJAUAAQATAAARAIQARAJALASQAKATABAcIAABAIgbAAIAAhBQAAgXgIgMQgIgMgLgFQgMgEgKAAQgMAAgMAGQgLAGgGALQgHALAAAPQAAATAIALQAIAKALAFQAMAFAKAAQALAAAJgFQAKgDAIgJIAAAcQgJAHgKADQgLAEgLAAQgVAAgQgJg");
	this.shape.setTransform(645.425,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBIIAAgWQAAgIgCgJQgBgJgHgHQgHgGgOgBIgcAAIAAA+IgaAAIAAiPIAaAAIAAA6IARAAQAHAAAFgEQAEgDAEgHIAKgQIAOgcIAcAAIgPAeIgHAMIgIANQgEAGgHAFQAKABAHAEQAIAEAEAGQAGAJABALQACAKgBALIAAAVg");
	this.shape_1.setTransform(631.875,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BHQgDgEgBgEIAAgIIAAh+IAaAAIAABlIAAADIAAABIAAABIABAAIAAgBIACgEIADgEIAzhNIAHgLIAHgJQAFgDAGAAQAIAAACAEQAEAEABAEIABAGIAACAIgbAAIAAhkIAAgDIAAgBIAAgBIAAAAIgBABIgDAEIgCAEIg0BMIgGALIgHAIQgFAEgGAAQgIAAgDgEg");
	this.shape_2.setTransform(618.95,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBGQgEgGgEgOIgZhPIgCgFIgBgFIAAgBIgBABIAAABIgSBuIgcAAIAYh8IADgKQACgEAEgFQAEgDAHAAQAKAAAEAGQAEAGADAHIAVBGIACAIIACAHIACAEIACAHIAAACIAAABIABgBIAAgCIAEgPIADgLIAXhGQACgHAEgGQAEgGAKAAQAHAAAEADQAEAFADAEIACAKIAYB8IgcAAIgShuIAAgBIAAgBIgBAAIAAABIgBAEIgCAGIgZBPQgFAOgEAGQgEAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(603.425,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBBQgRgKgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQARgKAUAAQAVAAAQAKQARAKAKARQALARAAAUQAAAVgLARQgKARgRAKQgQAKgVAAQgUAAgRgKgAgigjQgNANgBAWQABAWANAOQANANAVABQAOAAALgHQALgGAFgLQAHgLAAgPQAAgNgHgMQgFgLgLgHQgLgGgOAAQgVAAgNAOg");
	this.shape_4.setTransform(587.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBIIAAhCIhDAAIAABCIgaAAIAAiPIAaAAIAAA1IBDAAIAAg1IAaAAIAACPg");
	this.shape_5.setTransform(573.1,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBBQgRgKgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQAQgKAVAAQAVAAAQAKQASAKAJARQAKARABAUQgBAVgKARQgJARgSAKQgQAKgVAAQgVAAgQgKgAgigjQgNANAAAWQAAAWANAOQANANAVABQAOAAALgHQAKgGAHgLQAFgLABgPQgBgNgFgMQgHgLgKgHQgLgGgOAAQgVAAgNAOg");
	this.shape_6.setTransform(559.15,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBIIAAgWQAAgIgCgJQgBgJgHgHQgHgGgOgBIgcAAIAAA+IgaAAIAAiPIAaAAIAAA6IARAAQAHAAAFgEQAEgDAEgHIAKgQIAOgcIAcAAIgPAeIgHAMIgIANQgEAGgHAFQAKABAHAEQAIAEAEAGQAGAJABALQACAKgBALIAAAVg");
	this.shape_7.setTransform(545.675,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABpIAAgbIAXAAQAWAAARgJQAPgIALgPQAKgQACgUIhkAAIAAgZIBkAAQgDgRgLgOQgLgOgPgJQgRgIgUAAIgXAAIAAgbIATAAQAcAAAUAJQAVAKAOAPQAOAPAHASQAGATAAASQAAATgGATQgHASgOAPQgOAQgVAIQgUAKgcAAg");
	this.shape_8.setTransform(532.575,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B1E27").s().p("AinhTIFPAAIioCng");
	this.shape_9.setTransform(638.15,37.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#242937").s().p("AK1GgIAAgBIAAABgAKFAYIlQAAIwdAAQhGABAAhGIAAksQAAhGBGAAIXRAAQBGAAAABGIAAEsQAABGhGgBg");
	this.shape_10.setTransform(590.45,26.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(509,-15,163,94.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,772,1079), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol26();
	this.instance.setTransform(713.35,-27.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(713.4,-27,100.70000000000005,93.2), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(472.9,87.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(472.9,87.7,136,92.99999999999999), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg8xAVGMAAAgqLMB5jAAAMAAAAqLg");
	mask.setTransform(382.9754,135);

	// Layer_2
	this.instance = new lib.Symbol4();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-539.45},999).to({_off:true},1).wait(1));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1000 = new cjs.Graphics().p("Eg8YAVGMAAAgqLMB4xAAAMAAAAqLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1000).to({graphics:mask_1_graphics_1000,x:386.475,y:135}).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(0,-540);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1000).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-540,772,1079);


// stage content:
(lib.sample_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyBbIAAgmIg8AAQgQAAgJgCQgKgCgGgEQgKgGgEgJQgFgIgBgJIgBgRIAAhWIAbAAIAABVIAAAKQAAAGADAFQADAFAGADQADACAGABIAPABIBSAAIAAA/gAAVARIAAhrIAaAAIAABrg");
	this.shape.setTransform(619.825,140.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBJQgIgCgIgEQgSgJgMgRQgLgRAAgYQAAgUAKgRQAKgSAQgJQARgKAVAAQAOAAANAFQANAFALAKQALAKAHAQIhgA1IgLgWIBGgmQgIgIgIgDQgJgDgHAAQgOABgLAFQgKAHgGALQgGALAAAOQAAAQAGALQAGALAKAFQAFADAHACQAGACAHAAIANgCQAHgBAGgDQAKgGAFgKQAGgKABgNIAbADQgCASgGALQgHALgIAHQgIAIgGACQgIAGgKACQgKACgKAAQgIAAgJgCg");
	this.shape_1.setTransform(604.625,138.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBIIAAgZIAvAAQAJAAAHgCQAHgBAEgGIABgEIABgFIAAgEIgCgFQgEgHgJgCQgKgBgJAAIgfAAIAAgYIAfAAQAIAAAHgBQAHgBAEgHIACgDIABgFIgBgDIgBgCQgDgHgHgBQgIgCgHAAIgsAAIAAgZIAqAAIARAAQAKABAIADQAJAEAFAJQADAEACAFIACAKIgBAHIgDAIQgBAEgEAEQgEAFgHAEQAEABAGACQAGAFAFAIIADAJIABAJQAAAHgCAFQgBAGgDAFQgHAJgIADQgIAFgKABIgSAAg");
	this.shape_2.setTransform(591.75,138.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBCQgRgJgJgQQgKgRAAgWQAAgXALgQQAKgSASgJQARgKAUAAQATAAARAIQARAJALASQAKASABAeIAAA/IgbAAIAAhAQAAgYgIgMQgIgMgLgFQgMgEgKAAQgMAAgMAGQgLAGgGALQgHAMAAAOQAAASAIALQAIALALAFQAMAFAKAAQALAAAJgFQAKgEAIgHIAAAcQgJAGgKAEQgLADgLAAQgVAAgQgJg");
	this.shape_3.setTransform(578.375,138.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBqIAAh/QAAgZAHgQQAHgRALgJQALgKAOgEQANgDAMAAQATAAASAJQARAKALARQALARAAAYQAAAXgLAPQgLARgQAIQgSAJgSAAQgKAAgLgEQgLgDgIgHIAAgcQAKAJAJAEQAJAEAJAAQAWgBAOgNQAOgMAAgWQgBgPgGgMQgHgLgLgHQgLgGgNAAQgKAAgMAFQgLAFgIANQgHANgBAaIAAB8g");
	this.shape_4.setTransform(563.15,141.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBnQgKgDgGgDQgHgFgEgDQgMgMgGgOQgFgMgBgOQgCgNABgMIAAgTQAAgeAIgSQAHgUAMgKQAMgLAOgDQANgFAMgBIAVgBIAlAAIAAAaIgkAAIgZABQgMACgMAFQgLAGgHANQgHANAAAYIAAAbQAAANABANQACANAHALQAGALAOAGIAJADIAJABQAGAAAHgCQAHgCAGgEIAIgGQAFgFAFgJQAEgJAAgOQAAgMgDgJQgEgJgFgFQgGgFgGgDQgGgDgGgBQgGgCgGABQgJAAgKADQgKAFgIAIIAAgcQAJgHAKgDQALgDAJgBIASACQAIACAIAEQASAKALARQAKAQAAAWQAAAVgJASQgKAQgOAJQgJAHgLACQgLAEgLAAQgMAAgKgEg");
	this.shape_5.setTransform(547.1688,135.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBjQgTgHgQgPQgOgPgKgUQgIgUAAgWQAAgVAIgUQAKgUAOgOQAQgPATgJQAUgIAVAAQAWAAATAIQAVAJAOAPQAPAOAKAUQAIAUAAAVQAAAWgIAUQgKAUgPAPQgOAPgVAHQgTAJgWAAQgVAAgUgJgAgohGQgSAMgKASQgKATAAAVQAAAWAKATQAKATASAKQASALAWAAQAXAAASgLQASgKAKgTQALgTAAgWQAAgVgLgTQgKgSgSgMQgSgKgXgBQgWABgSAKg");
	this.shape_6.setTransform(527.95,135.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBbIAAgmIg8AAQgQAAgJgCQgKgCgGgEQgKgGgEgJQgFgIgBgJIgBgRIAAhWIAbAAIAABVIAAAKQAAAGADAFQADAFAGADQADACAGABIAPABIBSAAIAAA/gAAVARIAAhrIAaAAIAABrg");
	this.shape_7.setTransform(286.425,220.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBJQgIgCgIgDQgSgKgMgRQgLgSAAgXQAAgVAKgQQAKgRAQgKQARgKAVAAQAOAAANAFQANAFALAKQALAKAHAQIhgA1IgLgVIBGgnQgIgJgIgCQgJgDgHAAQgOABgLAFQgKAHgGALQgGAMAAANQAAAPAGALQAGAMAKAFQAFAEAHABQAGACAHAAIANgBQAHgCAGgEQAKgFAFgKQAGgKABgNIAbADQgCASgGALQgHAMgIAGQgIAIgGACQgIAGgKABQgKADgKAAQgIAAgJgCg");
	this.shape_8.setTransform(271.225,218.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBIIAAgZIAvAAQAJAAAHgCQAHgBAEgGIACgEIAAgFIAAgEIgBgFQgFgHgJgCQgJgBgKAAIgfAAIAAgYIAfAAQAJABAGgCQAIgBAEgGIABgFIAAgEIAAgDIgBgDQgDgGgHgCQgHgBgJAAIgrAAIAAgZIAqAAIARAAQAKAAAIAFQAJADAGAJQACAEACAEIABAKIgBAIIgCAIQgBAEgFAEQgDAFgHAEQAEAAAGADQAGAFAFAJIADAIIABAKQAAAFgBAGQgCAGgEAEQgGAJgIAFQgIAEgJAAIgTABg");
	this.shape_9.setTransform(258.35,218.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBCQgRgJgJgQQgKgQAAgXQAAgXALgQQAKgSASgJQARgKAUAAQATAAARAIQARAJALASQAKATABAcIAABAIgbAAIAAhBQAAgXgIgMQgIgMgLgFQgMgEgKAAQgMAAgMAGQgLAGgGALQgHAMAAAOQAAATAIAKQAIALALAFQAMAFAKAAQALAAAJgFQAKgEAIgHIAAAcQgJAGgKADQgLAEgLAAQgVAAgQgJg");
	this.shape_10.setTransform(244.975,218.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhLBqIAAh/QAAgZAHgQQAHgRALgJQALgKANgEQANgDANAAQAUAAARAJQARAKALARQALARAAAYQAAAXgLAPQgLARgRAIQgQAJgUAAQgJAAgLgEQgKgDgJgHIAAgcQAKAJAJAEQAJAEAJAAQAWgBAOgNQAOgMAAgWQAAgPgHgMQgGgLgMgHQgLgGgNAAQgLAAgKAFQgMAFgHANQgJANABAaIAAB8g");
	this.shape_11.setTransform(229.75,221.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWBoQgKgEgGgDQgHgEgEgEQgMgMgGgOQgFgNgBgNQgCgNABgLIAAgUQAAgeAIgSQAHgUAMgKQAMgLAOgEQANgEAMgBIAVgBIAlAAIAAAZIgkAAIgZACQgMABgMAGQgLAGgHANQgHAOAAAXIAAAbQAAAMABANQACAOAHALQAGALAOAGIAJACIAJABQAGAAAHgCQAHgCAGgDIAIgGQAFgFAFgJQAEgJAAgOQAAgMgDgJQgEgIgFgFQgGgGgGgDQgGgDgGgBIgMgCQgJAAgKAFQgKADgIAJIAAgcQAJgHAKgDQALgEAJAAIASACQAIACAIAEQASAJALARQAKARAAAWQAAAWgJARQgKAQgOAKQgJAFgLAEQgLACgLAAQgMAAgKgCg");
	this.shape_12.setTransform(213.7688,215.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBkQgVgJgOgPQgPgOgKgUQgIgUAAgWQAAgWAIgTQAKgUAPgPQAOgOAVgJQATgIAVAAQAWAAAUAIQATAJAQAOQAPAPAIAUQAJATAAAWQAAAWgJAUQgIAUgPAOQgQAPgTAJQgUAIgWAAQgVAAgTgIgAgohFQgSAKgKATQgLASAAAWQAAAWALATQAKATASAKQASAMAWAAQAXAAASgMQASgKALgTQAKgTAAgWQAAgWgKgSQgLgTgSgKQgSgLgXgBQgWABgSALg");
	this.shape_13.setTransform(194.55,215.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(400));

	// Layer_1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(577.3,43.65,0.7066,0.7066);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.7096,scaleY:0.7096,x:575.5,y:46.35},0).wait(1).to({scaleX:0.7125,scaleY:0.7125,x:573.3,y:48.9},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,x:570.75,y:51.3},0).wait(1).to({scaleX:0.7184,scaleY:0.7184,x:568.15,y:53.5},0).wait(1).to({scaleX:0.7214,scaleY:0.7214,x:565.4,y:55.5},0).wait(1).to({scaleX:0.7244,scaleY:0.7244,x:562.65,y:57.45},0).wait(1).to({scaleX:0.7274,scaleY:0.7274,x:559.8,y:59.25},0).wait(1).to({scaleX:0.7303,scaleY:0.7303,x:556.9,y:60.95},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:554.1,y:62.65},0).wait(1).to({scaleX:0.7362,scaleY:0.7362,x:551.15,y:64.25},0).wait(1).to({scaleX:0.7392,scaleY:0.7392,x:548.25,y:65.75},0).wait(1).to({scaleX:0.7422,scaleY:0.7422,x:545.3,y:67.3},0).wait(1).to({scaleX:0.7451,scaleY:0.7451,x:542.35,y:68.75},0).wait(1).to({scaleX:0.7481,scaleY:0.7481,x:539.35,y:70.15},0).wait(1).to({scaleX:0.751,scaleY:0.751,x:536.4,y:71.55},0).wait(1).to({scaleX:0.754,scaleY:0.754,x:533.45,y:72.95},0).wait(1).to({scaleX:0.757,scaleY:0.757,x:530.4,y:74.2},0).wait(1).to({scaleX:0.7599,scaleY:0.7599,x:527.45,y:75.55},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,x:524.45,y:76.85},0).wait(1).to({scaleX:0.7659,scaleY:0.7659,x:521.45,y:78.05},0).wait(1).to({scaleX:0.7688,scaleY:0.7688,x:518.4,y:79.3},0).wait(1).to({scaleX:0.7718,scaleY:0.7718,x:515.4,y:80.55},0).wait(1).to({scaleX:0.7748,scaleY:0.7748,x:512.4,y:81.75},0).wait(1).to({scaleX:0.7777,scaleY:0.7777,x:509.4,y:82.9},0).wait(1).to({scaleX:0.7807,scaleY:0.7807,x:506.4,y:84.1},0).wait(1).to({scaleX:0.7837,scaleY:0.7837,x:503.3,y:85.25},0).wait(1).to({scaleX:0.7866,scaleY:0.7866,x:500.3,y:86.35},0).wait(1).to({scaleX:0.7896,scaleY:0.7896,x:497.2,y:87.55},0).wait(1).to({scaleX:0.7925,scaleY:0.7925,x:494.05,y:88.7},0).wait(1).to({scaleX:0.7955,scaleY:0.7955,x:490.95,y:89.8},0).wait(1).to({scaleX:0.7985,scaleY:0.7985,x:487.85,y:90.95},0).wait(1).to({scaleX:0.8014,scaleY:0.8014,x:484.75,y:92.05},0).wait(1).to({scaleX:0.8044,scaleY:0.8044,x:481.6,y:93.15},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,x:478.5,y:94.2},0).wait(1).to({scaleX:0.8103,scaleY:0.8103,x:475.35,y:95.3},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,x:472.2,y:96.35},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,x:469.1,y:97.35},0).wait(1).to({scaleX:0.8192,scaleY:0.8192,x:465.95,y:98.4},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:462.8,y:99.5},0).wait(1).to({scaleX:0.8251,scaleY:0.8251,x:459.65,y:100.45},0).wait(1).to({scaleX:0.8281,scaleY:0.8281,x:456.55,y:101.45},0).wait(1).to({scaleX:0.8311,scaleY:0.8311,x:453.35,y:102.5},0).wait(1).to({scaleX:0.834,scaleY:0.834,x:450.2,y:103.45},0).wait(1).to({scaleX:0.837,scaleY:0.837,x:447.1,y:104.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:443.9,y:105.4},0).wait(1).to({scaleX:0.8429,scaleY:0.8429,x:440.75,y:106.35},0).wait(1).to({scaleX:0.8459,scaleY:0.8459,x:437.6,y:107.3},0).wait(1).to({scaleX:0.8489,scaleY:0.8489,x:434.4,y:108.25},0).wait(1).to({scaleX:0.8518,scaleY:0.8518,x:431.25,y:109.15},0).wait(1).to({scaleX:0.8548,scaleY:0.8548,x:428.1,y:110.1},0).wait(1).to({scaleX:0.8577,scaleY:0.8577,x:424.95,y:111},0).wait(1).to({scaleX:0.8607,scaleY:0.8607,x:421.75,y:111.9},0).wait(1).to({scaleX:0.8637,scaleY:0.8637,x:418.55,y:112.8},0).wait(1).to({scaleX:0.8666,scaleY:0.8666,x:415.4,y:113.7},0).wait(1).to({scaleX:0.8696,scaleY:0.8696,x:412.2,y:114.55},0).wait(1).to({scaleX:0.8726,scaleY:0.8726,x:409.1,y:115.45},0).wait(1).to({scaleX:0.8755,scaleY:0.8755,x:405.85,y:116.3},0).wait(1).to({scaleX:0.8785,scaleY:0.8785,x:402.7,y:117.15},0).wait(1).to({scaleX:0.8815,scaleY:0.8815,x:399.5,y:118},0).wait(1).to({scaleX:0.8844,scaleY:0.8844,x:396.35,y:118.85},0).wait(1).to({scaleX:0.8874,scaleY:0.8874,x:393.15,y:119.65},0).wait(1).to({scaleX:0.8904,scaleY:0.8904,x:389.9,y:120.5},0).wait(1).to({scaleX:0.8933,scaleY:0.8933,x:386.8,y:121.35},0).wait(1).to({scaleX:0.8963,scaleY:0.8963,x:383.55,y:122.1},0).wait(1).to({scaleX:0.8992,scaleY:0.8992,x:380.4,y:122.9},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,x:377.2,y:123.75},0).wait(1).to({scaleX:0.9052,scaleY:0.9052,x:373.95,y:124.45},0).wait(1).to({scaleX:0.9081,scaleY:0.9081,x:370.8,y:125.3},0).wait(1).to({scaleX:0.9111,scaleY:0.9111,x:367.6,y:126.1},0).wait(1).to({scaleX:0.9141,scaleY:0.9141,x:364.4,y:126.85},0).wait(1).to({scaleX:0.917,scaleY:0.917,x:361.2,y:127.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:358.05,y:128.35},0).wait(1).to({scaleX:0.9229,scaleY:0.9229,x:354.8,y:129.1},0).wait(1).to({scaleX:0.9259,scaleY:0.9259,x:351.65,y:129.8},0).wait(1).to({scaleX:0.9289,scaleY:0.9289,x:348.4,y:130.6},0).wait(1).to({scaleX:0.9318,scaleY:0.9318,x:345.2,y:131.3},0).wait(1).to({scaleX:0.9348,scaleY:0.9348,x:342,y:132.05},0).wait(1).to({scaleX:0.9377,scaleY:0.9377,x:338.75,y:132.75},0).wait(1).to({scaleX:0.9407,scaleY:0.9407,x:335.65,y:133.45},0).wait(1).to({scaleX:0.9437,scaleY:0.9437,x:332.4,y:134.2},0).wait(1).to({scaleX:0.9467,scaleY:0.9467,x:329.15,y:134.9},0).wait(1).to({scaleX:0.9496,scaleY:0.9496,x:326,y:135.55},0).wait(1).to({scaleX:0.9526,scaleY:0.9526,x:322.75,y:136.3},0).wait(1).to({scaleX:0.9556,scaleY:0.9556,x:319.55,y:136.95},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,x:316.35,y:137.6},0).wait(1).to({scaleX:0.9615,scaleY:0.9615,x:313.15,y:138.3},0).wait(1).to({scaleX:0.9644,scaleY:0.9644,x:309.9,y:139},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,x:306.7,y:139.6},0).wait(1).to({scaleX:0.9704,scaleY:0.9704,x:303.5,y:140.3},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:300.3,y:141},0).wait(1).to({scaleX:0.9763,scaleY:0.9763,x:297.15,y:141.55},0).wait(1).to({scaleX:0.9792,scaleY:0.9792,x:293.9,y:142.25},0).wait(1).to({scaleX:0.9822,scaleY:0.9822,x:290.7,y:142.9},0).wait(1).to({scaleX:0.9852,scaleY:0.9852,x:287.45,y:143.45},0).wait(1).to({scaleX:0.9881,scaleY:0.9881,x:284.25,y:144.1},0).wait(1).to({scaleX:0.9911,scaleY:0.9911,x:281.05,y:144.7},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:277.75,y:145.35},0).wait(1).to({scaleX:0.997,scaleY:0.997,x:274.6,y:145.95},0).wait(1).to({scaleX:1,scaleY:1,x:271.35,y:146.55},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:269.15,y:147.4},0).wait(1).to({scaleX:0.9931,scaleY:0.9931,x:267,y:148.3},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:264.85,y:149.15},0).wait(1).to({scaleX:0.9862,scaleY:0.9862,x:262.7,y:149.95},0).wait(1).to({scaleX:0.9827,scaleY:0.9827,x:260.55,y:150.85},0).wait(1).to({scaleX:0.9792,scaleY:0.9792,x:258.3,y:151.65},0).wait(1).to({scaleX:0.9758,scaleY:0.9758,x:256.2,y:152.55},0).wait(1).to({scaleX:0.9723,scaleY:0.9723,x:254,y:153.35},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,x:251.85,y:154.2},0).wait(1).to({scaleX:0.9654,scaleY:0.9654,x:249.65,y:155.05},0).wait(1).to({scaleX:0.962,scaleY:0.962,x:247.55,y:155.85},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,x:245.35,y:156.7},0).wait(1).to({scaleX:0.955,scaleY:0.955,x:243.2,y:157.5},0).wait(1).to({scaleX:0.9516,scaleY:0.9516,x:241,y:158.3},0).wait(1).to({scaleX:0.9481,scaleY:0.9481,x:238.85,y:159.15},0).wait(1).to({scaleX:0.9447,scaleY:0.9447,x:236.6,y:159.9},0).wait(1).to({scaleX:0.9412,scaleY:0.9412,x:234.45,y:160.7},0).wait(1).to({scaleX:0.9377,scaleY:0.9377,x:232.25,y:161.55},0).wait(1).to({scaleX:0.9343,scaleY:0.9343,x:230.1,y:162.25},0).wait(1).to({scaleX:0.9308,scaleY:0.9308,x:227.9,y:163.1},0).wait(1).to({scaleX:0.9274,scaleY:0.9274,x:225.7,y:163.85},0).wait(1).to({scaleX:0.9239,scaleY:0.9239,x:223.5,y:164.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:221.3,y:165.4},0).wait(1).to({scaleX:0.917,scaleY:0.917,x:219.2,y:166.15},0).wait(1).to({scaleX:0.9136,scaleY:0.9136,x:217,y:166.9},0).wait(1).to({scaleX:0.9101,scaleY:0.9101,x:214.7,y:167.7},0).wait(1).to({scaleX:0.9066,scaleY:0.9066,x:212.5,y:168.4},0).wait(1).to({scaleX:0.9032,scaleY:0.9032,x:210.35,y:169.2},0).wait(1).to({scaleX:0.8997,scaleY:0.8997,x:208.15,y:169.9},0).wait(1).to({scaleX:0.8963,scaleY:0.8963,x:205.95,y:170.65},0).wait(1).to({scaleX:0.8928,scaleY:0.8928,x:203.75,y:171.4},0).wait(1).to({scaleX:0.8893,scaleY:0.8893,x:201.55,y:172.1},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,x:199.35,y:172.8},0).wait(1).to({scaleX:0.8824,scaleY:0.8824,x:197.15,y:173.5},0).wait(1).to({scaleX:0.879,scaleY:0.879,x:194.95,y:174.2},0).wait(1).to({scaleX:0.8755,scaleY:0.8755,x:192.7,y:174.95},0).wait(1).to({scaleX:0.8721,scaleY:0.8721,x:190.5,y:175.6},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:188.25,y:176.3},0).wait(1).to({scaleX:0.8652,scaleY:0.8652,x:186.05,y:177},0).wait(1).to({scaleX:0.8617,scaleY:0.8617,x:183.8,y:177.7},0).wait(1).to({scaleX:0.8582,scaleY:0.8582,x:181.65,y:178.35},0).wait(1).to({scaleX:0.8548,scaleY:0.8548,x:179.4,y:179},0).wait(1).to({scaleX:0.8513,scaleY:0.8513,x:177.15,y:179.6},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,x:174.95,y:180.3},0).wait(1).to({scaleX:0.8444,scaleY:0.8444,x:172.75,y:180.95},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,x:170.45,y:181.55},0).wait(1).to({scaleX:0.8375,scaleY:0.8375,x:168.2,y:182.25},0).wait(1).to({scaleX:0.834,scaleY:0.834,x:165.95,y:182.85},0).wait(1).to({scaleX:0.8306,scaleY:0.8306,x:163.8,y:183.4},0).wait(1).to({scaleX:0.8271,scaleY:0.8271,x:161.55,y:184.05},0).wait(1).to({scaleX:0.8237,scaleY:0.8237,x:159.3,y:184.6},0).wait(1).to({scaleX:0.8202,scaleY:0.8202,x:157.05,y:185.25},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:154.8,y:185.8},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,x:152.55,y:186.4},0).wait(1).to({scaleX:0.8098,scaleY:0.8098,x:150.3,y:187},0).wait(1).to({scaleX:0.8064,scaleY:0.8064,x:148,y:187.55},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,x:145.75,y:188},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,x:143.55,y:188.6},0).wait(1).to({scaleX:0.796,scaleY:0.796,x:141.25,y:189.15},0).wait(1).to({scaleX:0.7925,scaleY:0.7925,x:139,y:189.7},0).wait(1).to({scaleX:0.7891,scaleY:0.7891,x:136.75,y:190.2},0).wait(1).to({scaleX:0.7856,scaleY:0.7856,x:134.5,y:190.7},0).wait(1).to({scaleX:0.7822,scaleY:0.7822,x:132.25,y:191.2},0).wait(1).to({scaleX:0.7787,scaleY:0.7787,x:130,y:191.65},0).wait(1).to({scaleX:0.7753,scaleY:0.7753,x:127.8,y:192.1},0).wait(1).to({scaleX:0.7718,scaleY:0.7718,x:125.65,y:192.6},0).wait(1).to({scaleX:0.7683,scaleY:0.7683,x:123.5,y:193.05},0).wait(1).to({scaleX:0.7649,scaleY:0.7649,x:121.35,y:193.5},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,x:119.2,y:193.9},0).wait(1).to({scaleX:0.758,scaleY:0.758,x:117.05,y:194.3},0).wait(1).to({scaleX:0.7545,scaleY:0.7545,x:114.95,y:194.7},0).wait(1).to({scaleX:0.751,scaleY:0.751,x:112.8,y:195.1},0).wait(1).to({scaleX:0.7476,scaleY:0.7476,x:110.6,y:195.5},0).wait(1).to({scaleX:0.7441,scaleY:0.7441,x:108.45,y:195.85},0).wait(1).to({scaleX:0.7407,scaleY:0.7407,x:106.35,y:196.2},0).wait(1).to({scaleX:0.7372,scaleY:0.7372,x:104.15,y:196.55},0).wait(1).to({scaleX:0.7338,scaleY:0.7338,x:101.95,y:196.85},0).wait(1).to({scaleX:0.7303,scaleY:0.7303,x:99.8,y:197.15},0).wait(1).to({scaleX:0.7269,scaleY:0.7269,x:97.7,y:197.4},0).wait(1).to({scaleX:0.7234,scaleY:0.7234,x:95.55,y:197.65},0).wait(1).to({scaleX:0.7199,scaleY:0.7199,x:93.35,y:197.85},0).wait(1).to({scaleX:0.7165,scaleY:0.7165,x:91.2,y:198.1},0).wait(1).to({scaleX:0.713,scaleY:0.713,x:89.05,y:198.25},0).wait(1).to({scaleX:0.7096,scaleY:0.7096,x:86.9,y:198.45},0).wait(1).to({scaleX:0.7061,scaleY:0.7061,x:84.7,y:198.55},0).wait(1).to({scaleX:0.7026,scaleY:0.7026,x:82.55},0).wait(1).to({scaleX:0.6992,scaleY:0.6992,x:80.35,y:198.65},0).wait(1).to({scaleX:0.6957,scaleY:0.6957,x:78.2,y:198.6},0).wait(1).to({scaleX:0.6923,scaleY:0.6923,x:76.05,y:198.55},0).wait(1).to({scaleX:0.6888,scaleY:0.6888,x:73.9,y:198.45},0).wait(1).to({scaleX:0.6854,scaleY:0.6854,x:71.7,y:198.2},0).wait(1).to({scaleX:0.6819,scaleY:0.6819,x:69.6,y:197.95},0).wait(1).to({scaleX:0.6785,scaleY:0.6785,x:67.5,y:197.55},0).wait(1).to({scaleX:0.675,scaleY:0.675,x:65.4,y:196.95},0).wait(1).to({scaleX:0.6715,scaleY:0.6715,x:63.35,y:196.3},0).wait(1).to({scaleX:0.6681,scaleY:0.6681,x:61.45,y:195.4},0).wait(1).to({scaleX:0.6646,scaleY:0.6646,x:59.55,y:194.25},0).wait(1).to({scaleX:0.6612,scaleY:0.6612,x:57.95,y:192.75},0).wait(1).to({scaleX:0.6577,scaleY:0.6577,x:56.8,y:190.85},0).to({_off:true},1).wait(201));

	// Layer_2
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(-259.7,117.2,0.6286,0.6286);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).wait(1).to({scaleX:0.6323,scaleY:0.6323,x:-262.5,y:119.35},0).wait(1).to({scaleX:0.636,scaleY:0.636,x:-265,y:121.55},0).wait(1).to({scaleX:0.6397,scaleY:0.6397,x:-267.15,y:123.7},0).wait(1).to({scaleX:0.6434,scaleY:0.6434,x:-268.85,y:125.9},0).wait(1).to({scaleX:0.6471,scaleY:0.6471,x:-270.2,y:128.05},0).wait(1).to({scaleX:0.6508,scaleY:0.6508,x:-271.25,y:130.1},0).wait(1).to({scaleX:0.6546,scaleY:0.6546,x:-272.05,y:132},0).wait(1).to({scaleX:0.6583,scaleY:0.6583,x:-272.7,y:133.65},0).wait(1).to({scaleX:0.662,scaleY:0.662,x:-273.15,y:135.2},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,x:-273.55,y:136.55},0).wait(1).to({scaleX:0.6694,scaleY:0.6694,x:-273.95,y:137.9},0).wait(1).to({scaleX:0.6731,scaleY:0.6731,x:-274.15,y:139.1},0).wait(1).to({scaleX:0.6769,scaleY:0.6769,x:-274.45,y:140.2},0).wait(1).to({scaleX:0.6806,scaleY:0.6806,x:-274.7,y:141.25},0).wait(1).to({scaleX:0.6843,scaleY:0.6843,x:-274.85,y:142.25},0).wait(1).to({scaleX:0.688,scaleY:0.688,x:-275.05,y:143.15},0).wait(1).to({scaleX:0.6917,scaleY:0.6917,x:-275.2,y:144},0).wait(1).to({scaleX:0.6954,scaleY:0.6954,x:-275.3,y:144.75},0).wait(1).to({scaleX:0.6991,scaleY:0.6991,x:-275.5,y:145.55},0).wait(1).to({scaleX:0.7029,scaleY:0.7029,x:-275.6,y:146.3},0).wait(1).to({scaleX:0.7066,scaleY:0.7066,x:-275.75,y:146.95},0).wait(1).to({scaleX:0.7103,scaleY:0.7103,x:-275.85,y:147.65},0).wait(1).to({scaleX:0.714,scaleY:0.714,x:-275.95,y:148.25},0).wait(1).to({scaleX:0.7177,scaleY:0.7177,x:-276.1,y:148.85},0).wait(1).to({scaleX:0.7214,scaleY:0.7214,x:-276.15,y:149.45},0).wait(1).to({scaleX:0.7251,scaleY:0.7251,x:-276.25,y:149.95},0).wait(1).to({scaleX:0.7289,scaleY:0.7289,x:-276.4,y:150.5},0).wait(1).to({scaleX:0.7326,scaleY:0.7326,x:-276.45,y:151.05},0).wait(1).to({scaleX:0.7363,scaleY:0.7363,x:-276.55,y:151.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-276.65,y:152},0).wait(1).to({scaleX:0.7437,scaleY:0.7437,x:-276.7,y:152.35},0).wait(1).to({scaleX:0.7474,scaleY:0.7474,x:-276.8,y:152.85},0).wait(1).to({scaleX:0.7511,scaleY:0.7511,x:-276.9,y:153.3},0).wait(1).to({scaleX:0.7549,scaleY:0.7549,x:-276.95,y:153.65},0).wait(1).to({scaleX:0.7586,scaleY:0.7586,x:-277.05,y:154.05},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:-277.15,y:154.5},0).wait(1).to({scaleX:0.766,scaleY:0.766,x:-277.25,y:154.75},0).wait(1).to({scaleX:0.7697,scaleY:0.7697,y:155.15},0).wait(1).to({scaleX:0.7734,scaleY:0.7734,x:-277.35,y:155.45},0).wait(1).to({scaleX:0.7771,scaleY:0.7771,x:-277.4,y:155.85},0).wait(1).to({scaleX:0.7809,scaleY:0.7809,x:-277.35,y:156.2},0).wait(1).to({scaleX:0.7846,scaleY:0.7846,x:-277.4,y:156.5},0).wait(1).to({scaleX:0.7883,scaleY:0.7883,x:-277.5,y:156.8},0).wait(1).to({scaleX:0.792,scaleY:0.792,x:-277.45,y:157.05},0).wait(1).to({scaleX:0.7957,scaleY:0.7957,x:-277.5,y:157.35},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,y:157.65},0).wait(1).to({scaleX:0.8031,scaleY:0.8031,x:-277.55,y:157.9},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,x:-277.6,y:158.15},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,y:158.35},0).wait(1).to({scaleX:0.8143,scaleY:0.8143,x:-277.65,y:158.6},0).wait(1).to({scaleX:0.818,scaleY:0.818,y:158.8},0).wait(1).to({scaleX:0.8217,scaleY:0.8217,y:159},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:-277.7,y:159.25},0).wait(1).to({scaleX:0.8291,scaleY:0.8291,x:-277.65,y:159.45},0).wait(1).to({scaleX:0.8329,scaleY:0.8329,x:-277.7,y:159.6},0).wait(1).to({scaleX:0.8365,scaleY:0.8365,x:-277.75,y:159.8},0).wait(1).to({scaleX:0.8403,scaleY:0.8403,x:-277.7,y:159.95},0).wait(1).to({scaleX:0.844,scaleY:0.844,x:-277.75,y:160.05},0).wait(1).to({scaleX:0.8477,scaleY:0.8477,x:-277.8,y:160.25},0).wait(1).to({scaleX:0.8514,scaleY:0.8514,x:-277.75,y:160.35},0).wait(1).to({scaleX:0.8551,scaleY:0.8551,x:-277.8,y:160.5},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,y:160.65},0).wait(1).to({scaleX:0.8626,scaleY:0.8626,x:-277.85,y:160.75},0).wait(1).to({scaleX:0.8663,scaleY:0.8663,y:160.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:160.9},0).wait(1).to({scaleX:0.8737,scaleY:0.8737,x:-277.9,y:161},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,x:-277.85,y:161.1},0).wait(1).to({scaleX:0.8811,scaleY:0.8811,x:-277.9,y:161.15},0).wait(1).to({scaleX:0.8849,scaleY:0.8849,x:-277.95,y:161.25},0).wait(1).to({scaleX:0.8885,scaleY:0.8885,x:-277.9,y:161.3},0).wait(1).to({scaleX:0.8923,scaleY:0.8923},0).wait(1).to({scaleX:0.896,scaleY:0.896,x:-277.95,y:161.35},0).wait(1).to({scaleX:0.8997,scaleY:0.8997},0).wait(1).to({scaleX:0.9034,scaleY:0.9034,y:161.4},0).wait(1).to({scaleX:0.9072,scaleY:0.9072,y:161.45},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:-278},0).wait(1).to({scaleX:0.9146,scaleY:0.9146},0).wait(1).to({scaleX:0.9183,scaleY:0.9183,y:161.4},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:-278.05,y:161.45},0).wait(1).to({scaleX:0.9257,scaleY:0.9257},0).wait(1).to({scaleX:0.9294,scaleY:0.9294,y:161.4},0).wait(1).to({scaleX:0.9332,scaleY:0.9332,x:-278.1},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:-278.05,y:161.35},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:-278.1,y:161.25},0).wait(1).to({scaleX:0.9443,scaleY:0.9443,x:-278.15},0).wait(1).to({scaleX:0.948,scaleY:0.948,x:-278.1,y:161.2},0).wait(1).to({scaleX:0.9517,scaleY:0.9517,x:-278.15,y:161.15},0).wait(1).to({scaleX:0.9554,scaleY:0.9554,x:-278.2,y:161.1},0).wait(1).to({scaleX:0.9591,scaleY:0.9591,y:161},0).wait(1).to({scaleX:0.9629,scaleY:0.9629,y:160.95},0).wait(1).to({scaleX:0.9666,scaleY:0.9666,y:160.8},0).wait(1).to({scaleX:0.9703,scaleY:0.9703,x:-278.25,y:160.75},0).wait(1).to({scaleX:0.974,scaleY:0.974,y:160.7},0).wait(1).to({scaleX:0.9777,scaleY:0.9777,y:160.55},0).wait(1).to({scaleX:0.9814,scaleY:0.9814,x:-278.35,y:160.5},0).wait(1).to({scaleX:0.9851,scaleY:0.9851,x:-278.3,y:160.4},0).wait(1).to({scaleX:0.9889,scaleY:0.9889,x:-278.35,y:160.25},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,x:-278.4,y:160.1},0).wait(1).to({scaleX:0.9963,scaleY:0.9963,y:159.95},0).wait(1).to({scaleX:1,scaleY:1,x:-278.45,y:158.85},0).wait(1).to({scaleX:0.9963,scaleY:0.9963,x:-273.3,y:160},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,x:-268.2,y:160.25},0).wait(1).to({scaleX:0.9889,scaleY:0.9889,x:-263.05,y:160.5},0).wait(1).to({scaleX:0.9851,scaleY:0.9851,x:-257.9,y:160.65},0).wait(1).to({scaleX:0.9814,scaleY:0.9814,x:-252.8,y:160.9},0).wait(1).to({scaleX:0.9777,scaleY:0.9777,x:-247.65,y:161.05},0).wait(1).to({scaleX:0.974,scaleY:0.974,x:-242.55,y:161.2},0).wait(1).to({scaleX:0.9703,scaleY:0.9703,x:-237.4,y:161.45},0).wait(1).to({scaleX:0.9666,scaleY:0.9666,x:-232.3,y:161.6},0).wait(1).to({scaleX:0.9629,scaleY:0.9629,x:-227.2,y:161.75},0).wait(1).to({scaleX:0.9591,scaleY:0.9591,x:-222.1,y:161.9},0).wait(1).to({scaleX:0.9554,scaleY:0.9554,x:-217.05,y:162.05},0).wait(1).to({scaleX:0.9517,scaleY:0.9517,x:-211.95,y:162.2},0).wait(1).to({scaleX:0.948,scaleY:0.948,x:-206.85,y:162.35},0).wait(1).to({scaleX:0.9443,scaleY:0.9443,x:-201.85,y:162.45},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:-196.7,y:162.55},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:-191.6,y:162.7},0).wait(1).to({scaleX:0.9332,scaleY:0.9332,x:-186.55,y:162.85},0).wait(1).to({scaleX:0.9294,scaleY:0.9294,x:-181.45,y:162.95},0).wait(1).to({scaleX:0.9257,scaleY:0.9257,x:-176.35,y:163.05},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:-171.3,y:163.1},0).wait(1).to({scaleX:0.9183,scaleY:0.9183,x:-166.2,y:163.15},0).wait(1).to({scaleX:0.9146,scaleY:0.9146,x:-161.05,y:163.3},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:-156.05,y:163.35},0).wait(1).to({scaleX:0.9072,scaleY:0.9072,x:-150.9,y:163.4},0).wait(1).to({scaleX:0.9034,scaleY:0.9034,x:-145.85,y:163.45},0).wait(1).to({scaleX:0.8997,scaleY:0.8997,x:-140.75,y:163.5},0).wait(1).to({scaleX:0.896,scaleY:0.896,x:-135.65,y:163.55},0).wait(1).to({scaleX:0.8923,scaleY:0.8923,x:-130.6,y:163.6},0).wait(1).to({scaleX:0.8885,scaleY:0.8885,x:-125.45},0).wait(1).to({scaleX:0.8849,scaleY:0.8849,x:-120.4,y:163.55},0).wait(1).to({scaleX:0.8811,scaleY:0.8811,x:-115.3,y:163.6},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,x:-110.2},0).wait(1).to({scaleX:0.8737,scaleY:0.8737,x:-105.15,y:163.55},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-100.05},0).wait(1).to({scaleX:0.8663,scaleY:0.8663,x:-94.9,y:163.5},0).wait(1).to({scaleX:0.8626,scaleY:0.8626,x:-89.9,y:163.45},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,x:-84.75},0).wait(1).to({scaleX:0.8551,scaleY:0.8551,x:-79.65,y:163.4},0).wait(1).to({scaleX:0.8514,scaleY:0.8514,x:-74.6,y:163.3},0).wait(1).to({scaleX:0.8477,scaleY:0.8477,x:-69.5,y:163.2},0).wait(1).to({scaleX:0.844,scaleY:0.844,x:-64.35,y:163.1},0).wait(1).to({scaleX:0.8403,scaleY:0.8403,x:-59.35,y:163.05},0).wait(1).to({scaleX:0.8365,scaleY:0.8365,x:-54.2,y:162.95},0).wait(1).to({scaleX:0.8329,scaleY:0.8329,x:-49.15,y:162.8},0).wait(1).to({scaleX:0.8291,scaleY:0.8291,x:-44.05,y:162.65},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:-38.95,y:162.5},0).wait(1).to({scaleX:0.8217,scaleY:0.8217,x:-33.9,y:162.4},0).wait(1).to({scaleX:0.818,scaleY:0.818,x:-28.75,y:162.25},0).wait(1).to({scaleX:0.8143,scaleY:0.8143,x:-23.7,y:162.05},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,x:-18.6,y:161.85},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,x:-13.5,y:161.6},0).wait(1).to({scaleX:0.8031,scaleY:0.8031,x:-8.5,y:161.45},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,x:-3.35,y:161.2},0).wait(1).to({scaleX:0.7957,scaleY:0.7957,x:1.75,y:160.95},0).wait(1).to({scaleX:0.792,scaleY:0.792,x:6.75,y:160.75},0).wait(1).to({scaleX:0.7883,scaleY:0.7883,x:11.9,y:160.45},0).wait(1).to({scaleX:0.7846,scaleY:0.7846,x:17,y:160.2},0).wait(1).to({scaleX:0.7809,scaleY:0.7809,x:22,y:159.95},0).wait(1).to({scaleX:0.7771,scaleY:0.7771,x:27.1,y:159.6},0).wait(1).to({scaleX:0.7734,scaleY:0.7734,x:32.25,y:159.3},0).wait(1).to({scaleX:0.7697,scaleY:0.7697,x:37.25,y:158.95},0).wait(1).to({scaleX:0.766,scaleY:0.766,x:42.35,y:158.65},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:47.4,y:158.3},0).wait(1).to({scaleX:0.7586,scaleY:0.7586,x:52.45,y:157.9},0).wait(1).to({scaleX:0.7549,scaleY:0.7549,x:57.55,y:157.5},0).wait(1).to({scaleX:0.7511,scaleY:0.7511,x:62.6,y:157.1},0).wait(1).to({scaleX:0.7474,scaleY:0.7474,x:67.7,y:156.7},0).wait(1).to({scaleX:0.7437,scaleY:0.7437,x:72.75,y:156.25},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:77.8,y:155.85},0).wait(1).to({scaleX:0.7363,scaleY:0.7363,x:82.85,y:155.35},0).wait(1).to({scaleX:0.7326,scaleY:0.7326,x:87.7,y:154.9},0).wait(1).to({scaleX:0.7289,scaleY:0.7289,x:92.65,y:154.5},0).wait(1).to({scaleX:0.7251,scaleY:0.7251,x:97.6,y:153.95},0).wait(1).to({scaleX:0.7214,scaleY:0.7214,x:102.45,y:153.45},0).wait(1).to({scaleX:0.7177,scaleY:0.7177,x:107.4,y:152.95},0).wait(1).to({scaleX:0.714,scaleY:0.714,x:112.35,y:152.35},0).wait(1).to({scaleX:0.7103,scaleY:0.7103,x:117.2,y:151.8},0).wait(1).to({scaleX:0.7066,scaleY:0.7066,x:122.1,y:151.25},0).wait(1).to({scaleX:0.7029,scaleY:0.7029,x:127.05,y:150.6},0).wait(1).to({scaleX:0.6991,scaleY:0.6991,x:131.85,y:149.95},0).wait(1).to({scaleX:0.6954,scaleY:0.6954,x:136.75,y:149.3},0).wait(1).to({scaleX:0.6917,scaleY:0.6917,x:141.6,y:148.6},0).wait(1).to({scaleX:0.688,scaleY:0.688,x:146.5,y:147.85},0).wait(1).to({scaleX:0.6843,scaleY:0.6843,x:151.35,y:147.1},0).wait(1).to({scaleX:0.6806,scaleY:0.6806,x:156.15,y:146.25},0).wait(1).to({scaleX:0.6769,scaleY:0.6769,x:161,y:145.35},0).wait(1).to({scaleX:0.6731,scaleY:0.6731,x:165.75,y:144.5},0).wait(1).to({scaleX:0.6694,scaleY:0.6694,x:170.5,y:143.5},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,x:175.3,y:142.45},0).wait(1).to({scaleX:0.662,scaleY:0.662,x:179.95,y:141.35},0).wait(1).to({scaleX:0.6583,scaleY:0.6583,x:184.65,y:140.1},0).wait(1).to({scaleX:0.6546,scaleY:0.6546,x:189.3,y:138.85},0).wait(1).to({scaleX:0.6508,scaleY:0.6508,x:193.8,y:137.5},0).wait(1).to({scaleX:0.6471,scaleY:0.6471,x:198.3,y:135.95},0).wait(1).to({scaleX:0.6434,scaleY:0.6434,x:202.7,y:134.25},0).wait(1).to({scaleX:0.6397,scaleY:0.6397,x:206.85,y:132.45},0).wait(1).to({scaleX:0.636,scaleY:0.636,x:210.85,y:130.5},0).wait(1).to({scaleX:0.6323,scaleY:0.6323,x:214.65,y:128.25},0).wait(1).to({scaleX:0.6286,scaleY:0.6286,x:218,y:125.9},0).to({_off:true},1).wait(99).to({_off:false,scaleX:0.1853,scaleY:0.1853,x:296.8,y:86.8},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol27();
	this.instance_2.setTransform(29.75,20.15,0.378,0.378);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(299).to({_off:false},0).wait(1).to({scaleX:0.3842,scaleY:0.3842,x:23,y:20.45},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:16.3,y:20.9},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:9.6,y:21.5},0).wait(1).to({scaleX:0.4029,scaleY:0.4029,x:3,y:22.2},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,x:-3.55,y:23},0).wait(1).to({scaleX:0.4153,scaleY:0.4153,x:-10,y:23.95},0).wait(1).to({scaleX:0.4216,scaleY:0.4216,x:-16.4,y:25},0).wait(1).to({scaleX:0.4278,scaleY:0.4278,x:-22.75,y:26.25},0).wait(1).to({scaleX:0.434,scaleY:0.434,x:-28.9,y:27.55},0).wait(1).to({scaleX:0.4402,scaleY:0.4402,x:-35,y:28.95},0).wait(1).to({scaleX:0.4464,scaleY:0.4464,x:-40.9,y:30.45},0).wait(1).to({scaleX:0.4526,scaleY:0.4526,x:-46.75,y:32.05},0).wait(1).to({scaleX:0.4589,scaleY:0.4589,x:-52.5,y:33.6},0).wait(1).to({scaleX:0.4651,scaleY:0.4651,x:-58.15,y:35.35},0).wait(1).to({scaleX:0.4713,scaleY:0.4713,x:-63.65,y:37},0).wait(1).to({scaleX:0.4775,scaleY:0.4775,x:-69.1,y:38.75},0).wait(1).to({scaleX:0.4837,scaleY:0.4837,x:-74.5,y:40.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-79.8,y:42.2},0).wait(1).to({scaleX:0.4962,scaleY:0.4962,x:-85,y:44},0).wait(1).to({scaleX:0.5024,scaleY:0.5024,x:-90.1,y:45.75},0).wait(1).to({scaleX:0.5086,scaleY:0.5086,x:-95.2,y:47.5},0).wait(1).to({scaleX:0.5148,scaleY:0.5148,x:-100.25,y:49.3},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:-105.25,y:51.1},0).wait(1).to({scaleX:0.5273,scaleY:0.5273,x:-110.15,y:52.85},0).wait(1).to({scaleX:0.5335,scaleY:0.5335,x:-115.05,y:54.65},0).wait(1).to({scaleX:0.5397,scaleY:0.5397,x:-119.85,y:56.35},0).wait(1).to({scaleX:0.5459,scaleY:0.5459,x:-124.7,y:58.15},0).wait(1).to({scaleX:0.5522,scaleY:0.5522,x:-129.45,y:59.9},0).wait(1).to({scaleX:0.5584,scaleY:0.5584,x:-134.2,y:61.65},0).wait(1).to({scaleX:0.5646,scaleY:0.5646,x:-138.9,y:63.4},0).wait(1).to({scaleX:0.5708,scaleY:0.5708,x:-143.65,y:65.2},0).wait(1).to({scaleX:0.577,scaleY:0.577,x:-148.3,y:66.95},0).wait(1).to({scaleX:0.5833,scaleY:0.5833,x:-152.9,y:68.75},0).wait(1).to({scaleX:0.5895,scaleY:0.5895,x:-157.5,y:70.45},0).wait(1).to({scaleX:0.5957,scaleY:0.5957,x:-162.05,y:72.25},0).wait(1).to({scaleX:0.6019,scaleY:0.6019,x:-166.65,y:74.05},0).wait(1).to({scaleX:0.6081,scaleY:0.6081,x:-171.15,y:75.75},0).wait(1).to({scaleX:0.6144,scaleY:0.6144,x:-175.65,y:77.5},0).wait(1).to({scaleX:0.6206,scaleY:0.6206,x:-180.1,y:79.35},0).wait(1).to({scaleX:0.6268,scaleY:0.6268,x:-184.55,y:81.05},0).wait(1).to({scaleX:0.633,scaleY:0.633,x:-189,y:82.8},0).wait(1).to({scaleX:0.6392,scaleY:0.6392,x:-193.3,y:84.55},0).wait(1).to({scaleX:0.6454,scaleY:0.6454,x:-197.7,y:86.25},0).wait(1).to({scaleX:0.6517,scaleY:0.6517,x:-202.05,y:87.95},0).wait(1).to({scaleX:0.6579,scaleY:0.6579,x:-206.35,y:89.65},0).wait(1).to({scaleX:0.6641,scaleY:0.6641,x:-210.7,y:91.35},0).wait(1).to({scaleX:0.6703,scaleY:0.6703,x:-215,y:93.05},0).wait(1).to({scaleX:0.6766,scaleY:0.6766,x:-219.25,y:94.7},0).wait(1).to({scaleX:0.6828,scaleY:0.6828,x:-223.5,y:96.4},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:-227.7,y:98.1},0).wait(1).to({scaleX:0.6952,scaleY:0.6952,x:-231.95,y:99.75},0).wait(1).to({scaleX:0.7014,scaleY:0.7014,x:-236.15,y:101.45},0).wait(1).to({scaleX:0.7076,scaleY:0.7076,x:-240.3,y:103.05},0).wait(1).to({scaleX:0.7139,scaleY:0.7139,x:-244.45,y:104.7},0).wait(1).to({scaleX:0.7201,scaleY:0.7201,x:-248.65,y:106.35},0).wait(1).to({scaleX:0.7263,scaleY:0.7263,x:-252.75,y:107.95},0).wait(1).to({scaleX:0.7325,scaleY:0.7325,x:-256.85,y:109.6},0).wait(1).to({scaleX:0.7388,scaleY:0.7388,x:-260.95,y:111.25},0).wait(1).to({scaleX:0.745,scaleY:0.745,x:-265,y:112.8},0).wait(1).to({scaleX:0.7512,scaleY:0.7512,x:-269.1,y:114.45},0).wait(1).to({scaleX:0.7574,scaleY:0.7574,x:-273.1,y:116},0).wait(1).to({scaleX:0.7636,scaleY:0.7636,x:-277.15,y:117.6},0).wait(1).to({scaleX:0.7699,scaleY:0.7699,x:-281.15,y:119.2},0).wait(1).to({scaleX:0.7761,scaleY:0.7761,x:-285.15,y:120.8},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:-289.2,y:122.35},0).wait(1).to({scaleX:0.7885,scaleY:0.7885,x:-293.2,y:123.95},0).wait(1).to({scaleX:0.7947,scaleY:0.7947,x:-297.15,y:125.45},0).wait(1).to({scaleX:0.801,scaleY:0.801,x:-301.1,y:127},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,x:-305.05,y:128.55},0).wait(1).to({scaleX:0.8134,scaleY:0.8134,x:-309,y:130.05},0).wait(1).to({scaleX:0.8196,scaleY:0.8196,x:-312.95,y:131.6},0).wait(1).to({scaleX:0.8258,scaleY:0.8258,x:-316.85,y:133.1},0).wait(1).to({scaleX:0.8321,scaleY:0.8321,x:-320.75,y:134.6},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:-324.6,y:136.15},0).wait(1).to({scaleX:0.8445,scaleY:0.8445,x:-328.5,y:137.6},0).wait(1).to({scaleX:0.8507,scaleY:0.8507,x:-332.35,y:139.1},0).wait(1).to({scaleX:0.8569,scaleY:0.8569,x:-336.3,y:140.6},0).wait(1).to({scaleX:0.8632,scaleY:0.8632,x:-340.1,y:142},0).wait(1).to({scaleX:0.8694,scaleY:0.8694,x:-343.95,y:143.5},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,x:-347.8,y:144.95},0).wait(1).to({scaleX:0.8818,scaleY:0.8818,x:-351.6,y:146.35},0).wait(1).to({scaleX:0.888,scaleY:0.888,x:-355.4,y:147.85},0).wait(1).to({scaleX:0.8943,scaleY:0.8943,x:-359.2,y:149.25},0).wait(1).to({scaleX:0.9005,scaleY:0.9005,x:-363.05,y:150.65},0).wait(1).to({scaleX:0.9067,scaleY:0.9067,x:-366.8,y:152.1},0).wait(1).to({scaleX:0.9129,scaleY:0.9129,x:-370.55,y:153.5},0).wait(1).to({scaleX:0.9191,scaleY:0.9191,x:-374.3,y:154.9},0).wait(1).to({scaleX:0.9254,scaleY:0.9254,x:-378.05,y:156.3},0).wait(1).to({scaleX:0.9316,scaleY:0.9316,x:-381.8,y:157.75},0).wait(1).to({scaleX:0.9378,scaleY:0.9378,x:-385.45,y:159.1},0).wait(1).to({scaleX:0.944,scaleY:0.944,x:-389.15,y:160.45},0).wait(1).to({scaleX:0.9502,scaleY:0.9502,x:-392.85,y:161.85},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:-396.5,y:163.2},0).wait(1).to({scaleX:0.9627,scaleY:0.9627,x:-400.2,y:164.55},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,x:-403.85,y:165.9},0).wait(1).to({scaleX:0.9751,scaleY:0.9751,x:-407.45,y:167.2},0).wait(1).to({scaleX:0.9813,scaleY:0.9813,x:-411.1,y:168.5},0).wait(1).to({scaleX:0.9875,scaleY:0.9875,x:-414.75,y:169.85},0).wait(1).to({scaleX:0.9938,scaleY:0.9938,x:-418.3,y:171.1},0).wait(1).to({scaleX:1,scaleY:1,x:-421.9,y:172.4},0).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol27();
	this.instance_3.setTransform(-421.9,172.4);

	this.instance_4 = new lib.Symbol15();
	this.instance_4.setTransform(177.5,112.5,0.6465,0.6465);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.9951,scaleY:0.9951,x:-417.45,y:173.3},0).wait(1).to({scaleX:0.9902,scaleY:0.9902,x:-412.95,y:174.2},0).wait(1).to({scaleX:0.9853,scaleY:0.9853,x:-408.45,y:175.1},0).wait(1).to({scaleX:0.9804,scaleY:0.9804,x:-404,y:176},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:-399.5,y:176.95},0).wait(1).to({scaleX:0.9706,scaleY:0.9706,x:-395.05,y:177.85},0).wait(1).to({scaleX:0.9657,scaleY:0.9657,x:-390.6,y:178.7},0).wait(1).to({scaleX:0.9608,scaleY:0.9608,x:-386.05,y:179.6},0).wait(1).to({scaleX:0.9559,scaleY:0.9559,x:-381.55,y:180.5},0).wait(1).to({scaleX:0.951,scaleY:0.951,x:-377.1,y:181.35},0).wait(1).to({scaleX:0.9461,scaleY:0.9461,x:-372.55,y:182.25},0).wait(1).to({scaleX:0.9412,scaleY:0.9412,x:-368.1,y:183.15},0).wait(1).to({scaleX:0.9363,scaleY:0.9363,x:-363.6,y:184},0).wait(1).to({scaleX:0.9314,scaleY:0.9314,x:-359,y:184.9},0).wait(1).to({scaleX:0.9265,scaleY:0.9265,x:-354.5,y:185.8},0).wait(1).to({scaleX:0.9216,scaleY:0.9216,x:-350,y:186.65},0).wait(1).to({scaleX:0.9167,scaleY:0.9167,x:-345.5,y:187.45},0).wait(1).to({scaleX:0.9118,scaleY:0.9118,x:-341,y:188.3},0).wait(1).to({scaleX:0.9069,scaleY:0.9069,x:-336.4,y:189.2},0).wait(1).to({scaleX:0.902,scaleY:0.902,x:-331.85,y:190.05},0).wait(1).to({scaleX:0.8971,scaleY:0.8971,x:-327.35,y:190.85},0).wait(1).to({scaleX:0.8922,scaleY:0.8922,x:-322.8,y:191.75},0).wait(1).to({scaleX:0.8873,scaleY:0.8873,x:-318.3,y:192.55},0).wait(1).to({scaleX:0.8824,scaleY:0.8824,x:-313.75,y:193.4},0).wait(1).to({scaleX:0.8775,scaleY:0.8775,x:-309.15,y:194.25},0).wait(1).to({scaleX:0.8726,scaleY:0.8726,x:-304.6,y:195.1},0).wait(1).to({scaleX:0.8677,scaleY:0.8677,x:-300.05,y:195.9},0).wait(1).to({scaleX:0.8628,scaleY:0.8628,x:-295.55,y:196.7},0).wait(1).to({scaleX:0.8579,scaleY:0.8579,x:-290.95,y:197.55},0).wait(1).to({scaleX:0.853,scaleY:0.853,x:-286.35,y:198.3},0).wait(1).to({scaleX:0.8481,scaleY:0.8481,x:-281.75,y:199.1},0).wait(1).to({scaleX:0.8432,scaleY:0.8432,x:-277.2,y:199.95},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:-272.65,y:200.75},0).wait(1).to({scaleX:0.8334,scaleY:0.8334,x:-268.05,y:201.55},0).wait(1).to({scaleX:0.8285,scaleY:0.8285,x:-263.45,y:202.35},0).wait(1).to({scaleX:0.8236,scaleY:0.8236,x:-258.85,y:203.15},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,x:-254.25,y:203.9},0).wait(1).to({scaleX:0.8138,scaleY:0.8138,x:-249.65,y:204.65},0).wait(1).to({scaleX:0.8089,scaleY:0.8089,x:-245.1,y:205.45},0).wait(1).to({scaleX:0.804,scaleY:0.804,x:-240.45,y:206.2},0).wait(1).to({scaleX:0.7991,scaleY:0.7991,x:-235.8,y:206.95},0).wait(1).to({scaleX:0.7942,scaleY:0.7942,x:-231.25,y:207.75},0).wait(1).to({scaleX:0.7893,scaleY:0.7893,x:-226.65,y:208.5},0).wait(1).to({scaleX:0.7844,scaleY:0.7844,x:-222.05,y:209.2},0).wait(1).to({scaleX:0.7795,scaleY:0.7795,x:-217.5,y:209.95},0).wait(1).to({scaleX:0.7746,scaleY:0.7746,x:-212.9,y:210.65},0).wait(1).to({scaleX:0.7697,scaleY:0.7697,x:-208.25,y:211.35},0).wait(1).to({scaleX:0.7648,scaleY:0.7648,x:-203.65,y:212.1},0).wait(1).to({scaleX:0.7599,scaleY:0.7599,x:-199.05,y:212.8},0).wait(1).to({scaleX:0.755,scaleY:0.755,x:-194.45,y:213.45},0).wait(1).to({scaleX:0.7501,scaleY:0.7501,x:-189.85,y:214.15},0).wait(1).to({scaleX:0.7452,scaleY:0.7452,x:-185.15,y:214.9},0).wait(1).to({scaleX:0.7403,scaleY:0.7403,x:-180.55,y:215.55},0).wait(1).to({scaleX:0.7354,scaleY:0.7354,x:-175.95,y:216.2},0).wait(1).to({scaleX:0.7305,scaleY:0.7305,x:-171.25,y:216.9},0).wait(1).to({scaleX:0.7256,scaleY:0.7256,x:-166.65,y:217.55},0).wait(1).to({scaleX:0.7207,scaleY:0.7207,x:-162,y:218.2},0).wait(1).to({scaleX:0.7158,scaleY:0.7158,x:-157.3,y:218.9},0).wait(1).to({scaleX:0.7109,scaleY:0.7109,x:-152.65,y:219.5},0).wait(1).to({scaleX:0.706,scaleY:0.706,x:-147.95,y:220.1},0).wait(1).to({scaleX:0.7011,scaleY:0.7011,x:-143.35,y:220.75},0).wait(1).to({scaleX:0.6962,scaleY:0.6962,x:-138.7,y:221.4},0).wait(1).to({scaleX:0.6913,scaleY:0.6913,x:-133.95,y:222},0).wait(1).to({scaleX:0.6864,scaleY:0.6864,x:-129.25,y:222.55},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:-124.6,y:223.2},0).wait(1).to({scaleX:0.6766,scaleY:0.6766,x:-119.9,y:223.75},0).wait(1).to({scaleX:0.6717,scaleY:0.6717,x:-115.2,y:224.3},0).wait(1).to({scaleX:0.6668,scaleY:0.6668,x:-110.55,y:224.85},0).wait(1).to({scaleX:0.6619,scaleY:0.6619,x:-105.75,y:225.4},0).wait(1).to({scaleX:0.657,scaleY:0.657,x:-101.05,y:225.9},0).wait(1).to({scaleX:0.6521,scaleY:0.6521,x:-96.35,y:226.5},0).wait(1).to({scaleX:0.6472,scaleY:0.6472,x:-91.6,y:227},0).wait(1).to({scaleX:0.6423,scaleY:0.6423,x:-86.9,y:227.45},0).wait(1).to({scaleX:0.6374,scaleY:0.6374,x:-82.1,y:227.9},0).wait(1).to({scaleX:0.6325,scaleY:0.6325,x:-77.35,y:228.4},0).wait(1).to({scaleX:0.6276,scaleY:0.6276,x:-72.6,y:228.8},0).wait(1).to({scaleX:0.6227,scaleY:0.6227,x:-67.9,y:229.2},0).wait(1).to({scaleX:0.6178,scaleY:0.6178,x:-63.1,y:229.65},0).wait(1).to({scaleX:0.6129,scaleY:0.6129,x:-58.35,y:230},0).wait(1).to({scaleX:0.608,scaleY:0.608,x:-53.55,y:230.4},0).wait(1).to({scaleX:0.6031,scaleY:0.6031,x:-48.75,y:230.8},0).wait(1).to({scaleX:0.5983,scaleY:0.5983,x:-44,y:231.1},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:-39.2,y:231.4},0).wait(1).to({scaleX:0.5884,scaleY:0.5884,x:-34.4,y:231.65},0).wait(1).to({scaleX:0.5835,scaleY:0.5835,x:-29.55,y:231.95},0).wait(1).to({scaleX:0.5786,scaleY:0.5786,x:-24.8,y:232.15},0).wait(1).to({scaleX:0.5737,scaleY:0.5737,x:-19.95,y:232.3},0).wait(1).to({scaleX:0.5688,scaleY:0.5688,x:-15.2,y:232.55},0).wait(1).to({scaleX:0.5639,scaleY:0.5639,x:-10.4,y:232.65},0).wait(1).to({scaleX:0.5591,scaleY:0.5591,x:-5.6,y:232.8},0).wait(1).to({scaleX:0.5541,scaleY:0.5541,x:-0.75,y:232.95},0).wait(1).to({scaleX:0.5493,scaleY:0.5493,x:4},0).wait(1).to({scaleX:0.5444,scaleY:0.5444,x:8.85,y:233},0).wait(1).to({scaleX:0.5395,scaleY:0.5395,x:13.6,y:232.95},0).wait(1).to({scaleX:0.5345,scaleY:0.5345,x:18.4},0).wait(1).to({scaleX:0.5296,scaleY:0.5296,x:23.2,y:232.85},0).wait(1).to({scaleX:0.5247,scaleY:0.5247,x:27.95,y:232.75},0).wait(1).to({scaleX:0.5198,scaleY:0.5198,x:32.7,y:232.65},0).wait(1).to({scaleX:0.515,scaleY:0.515,x:37.5,y:232.55},0).to({_off:true},1).wait(300));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(199).to({_off:false},0).wait(1).to({scaleX:0.6501,scaleY:0.6501,x:174.35,y:113.6},0).wait(1).to({scaleX:0.6536,scaleY:0.6536,x:171.1,y:114.8},0).wait(1).to({scaleX:0.6571,scaleY:0.6571,x:167.65,y:115.75},0).wait(1).to({scaleX:0.6606,scaleY:0.6606,x:164.2,y:116.65},0).wait(1).to({scaleX:0.6642,scaleY:0.6642,x:160.55,y:117.4},0).wait(1).to({scaleX:0.6677,scaleY:0.6677,x:156.75,y:118.1},0).wait(1).to({scaleX:0.6713,scaleY:0.6713,x:153.05,y:118.75},0).wait(1).to({scaleX:0.6748,scaleY:0.6748,x:149.2,y:119.2},0).wait(1).to({scaleX:0.6783,scaleY:0.6783,x:145.4,y:119.65},0).wait(1).to({scaleX:0.6819,scaleY:0.6819,x:141.5,y:120},0).wait(1).to({scaleX:0.6854,scaleY:0.6854,x:137.55,y:120.25},0).wait(1).to({scaleX:0.6889,scaleY:0.6889,x:133.65,y:120.5},0).wait(1).to({scaleX:0.6925,scaleY:0.6925,x:129.7,y:120.65},0).wait(1).to({scaleX:0.696,scaleY:0.696,x:125.75,y:120.7},0).wait(1).to({scaleX:0.6996,scaleY:0.6996,x:121.8,y:120.75},0).wait(1).to({scaleX:0.7031,scaleY:0.7031,x:117.8,y:120.8},0).wait(1).to({scaleX:0.7066,scaleY:0.7066,x:113.85,y:120.7},0).wait(1).to({scaleX:0.7101,scaleY:0.7101,x:109.85,y:120.6},0).wait(1).to({scaleX:0.7137,scaleY:0.7137,x:105.85,y:120.5},0).wait(1).to({scaleX:0.7172,scaleY:0.7172,x:101.85,y:120.35},0).wait(1).to({scaleX:0.7208,scaleY:0.7208,x:97.9,y:120.15},0).wait(1).to({scaleX:0.7243,scaleY:0.7243,x:93.85,y:119.95},0).wait(1).to({scaleX:0.7278,scaleY:0.7278,x:89.85,y:119.65},0).wait(1).to({scaleX:0.7314,scaleY:0.7314,x:85.9,y:119.45},0).wait(1).to({scaleX:0.7349,scaleY:0.7349,x:81.85,y:119.15},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:77.9,y:118.8},0).wait(1).to({scaleX:0.742,scaleY:0.742,x:73.85,y:118.45},0).wait(1).to({scaleX:0.7455,scaleY:0.7455,x:69.85,y:118.05},0).wait(1).to({scaleX:0.749,scaleY:0.749,x:65.9,y:117.75},0).wait(1).to({scaleX:0.7526,scaleY:0.7526,x:61.8,y:117.3},0).wait(1).to({scaleX:0.7561,scaleY:0.7561,x:57.9,y:116.9},0).wait(1).to({scaleX:0.7596,scaleY:0.7596,x:53.85,y:116.45},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,x:49.85,y:116.05},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:45.8,y:115.55},0).wait(1).to({scaleX:0.7702,scaleY:0.7702,x:41.75,y:115.1},0).wait(1).to({scaleX:0.7738,scaleY:0.7738,x:37.75,y:114.6},0).wait(1).to({scaleX:0.7773,scaleY:0.7773,x:33.65,y:114.1},0).wait(1).to({scaleX:0.7809,scaleY:0.7809,x:29.65,y:113.55},0).wait(1).to({scaleX:0.7844,scaleY:0.7844,x:25.6,y:113.05},0).wait(1).to({scaleX:0.7879,scaleY:0.7879,x:21.55,y:112.45},0).wait(1).to({scaleX:0.7914,scaleY:0.7914,x:17.55,y:111.85},0).wait(1).to({scaleX:0.795,scaleY:0.795,x:13.5,y:111.35},0).wait(1).to({scaleX:0.7985,scaleY:0.7985,x:9.5,y:110.7},0).wait(1).to({scaleX:0.8021,scaleY:0.8021,x:5.45,y:110.1},0).wait(1).to({scaleX:0.8056,scaleY:0.8056,x:1.4,y:109.5},0).wait(1).to({scaleX:0.8091,scaleY:0.8091,x:-2.6,y:108.85},0).wait(1).to({scaleX:0.8127,scaleY:0.8127,x:-6.6,y:108.2},0).wait(1).to({scaleX:0.8162,scaleY:0.8162,x:-10.6,y:107.5},0).wait(1).to({scaleX:0.8197,scaleY:0.8197,x:-14.65,y:106.85},0).wait(1).to({scaleX:0.8233,scaleY:0.8233,x:-18.7,y:106.15},0).wait(1).to({scaleX:0.8268,scaleY:0.8268,x:-22.65,y:105.45},0).wait(1).to({scaleX:0.8303,scaleY:0.8303,x:-26.7,y:104.75},0).wait(1).to({scaleX:0.8339,scaleY:0.8339,x:-30.7,y:104},0).wait(1).to({scaleX:0.8374,scaleY:0.8374,x:-34.7,y:103.25},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,x:-38.7,y:102.55},0).wait(1).to({scaleX:0.8445,scaleY:0.8445,x:-42.75,y:101.8},0).wait(1).to({scaleX:0.848,scaleY:0.848,x:-46.75,y:101},0).wait(1).to({scaleX:0.8515,scaleY:0.8515,x:-50.8,y:100.2},0).wait(1).to({scaleX:0.8551,scaleY:0.8551,x:-54.75,y:99.45},0).wait(1).to({scaleX:0.8586,scaleY:0.8586,x:-58.75,y:98.65},0).wait(1).to({scaleX:0.8622,scaleY:0.8622,x:-62.8,y:97.8},0).wait(1).to({scaleX:0.8657,scaleY:0.8657,x:-66.8,y:97},0).wait(1).to({scaleX:0.8692,scaleY:0.8692,x:-70.75,y:96.2},0).wait(1).to({scaleX:0.8727,scaleY:0.8727,x:-74.75,y:95.3},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:-78.7,y:94.5},0).wait(1).to({scaleX:0.8798,scaleY:0.8798,x:-82.75,y:93.6},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:-86.75,y:92.7},0).wait(1).to({scaleX:0.8869,scaleY:0.8869,x:-90.7,y:91.85},0).wait(1).to({scaleX:0.8904,scaleY:0.8904,x:-94.7,y:91},0).wait(1).to({scaleX:0.894,scaleY:0.894,x:-98.65,y:90.05},0).wait(1).to({scaleX:0.8975,scaleY:0.8975,x:-102.6,y:89.15},0).wait(1).to({scaleX:0.901,scaleY:0.901,x:-106.6,y:88.3},0).wait(1).to({scaleX:0.9045,scaleY:0.9045,x:-110.55,y:87.35},0).wait(1).to({scaleX:0.9081,scaleY:0.9081,x:-114.55,y:86.4},0).wait(1).to({scaleX:0.9116,scaleY:0.9116,x:-118.45,y:85.5},0).wait(1).to({scaleX:0.9152,scaleY:0.9152,x:-122.45,y:84.55},0).wait(1).to({scaleX:0.9187,scaleY:0.9187,x:-126.45,y:83.6},0).wait(1).to({scaleX:0.9222,scaleY:0.9222,x:-130.35,y:82.65},0).wait(1).to({scaleX:0.9258,scaleY:0.9258,x:-134.35,y:81.65},0).wait(1).to({scaleX:0.9293,scaleY:0.9293,x:-138.25,y:80.65},0).wait(1).to({scaleX:0.9328,scaleY:0.9328,x:-142.2,y:79.7},0).wait(1).to({scaleX:0.9364,scaleY:0.9364,x:-146.2,y:78.7},0).wait(1).to({scaleX:0.9399,scaleY:0.9399,x:-150.1,y:77.7},0).wait(1).to({scaleX:0.9435,scaleY:0.9435,x:-154.1,y:76.65},0).wait(1).to({scaleX:0.947,scaleY:0.947,x:-158,y:75.7},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:-162,y:74.65},0).wait(1).to({scaleX:0.954,scaleY:0.954,x:-165.9,y:73.6},0).wait(1).to({scaleX:0.9576,scaleY:0.9576,x:-169.85,y:72.55},0).wait(1).to({scaleX:0.9611,scaleY:0.9611,x:-173.8,y:71.55},0).wait(1).to({scaleX:0.9646,scaleY:0.9646,x:-177.7,y:70.55},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,x:-181.65,y:69.45},0).wait(1).to({scaleX:0.9717,scaleY:0.9717,x:-185.55,y:68.4},0).wait(1).to({scaleX:0.9753,scaleY:0.9753,x:-189.5,y:67.3},0).wait(1).to({scaleX:0.9788,scaleY:0.9788,x:-193.4,y:66.3},0).wait(1).to({scaleX:0.9823,scaleY:0.9823,x:-197.3,y:65.25},0).wait(1).to({scaleX:0.9859,scaleY:0.9859,x:-201.25,y:64.1},0).wait(1).to({scaleX:0.9894,scaleY:0.9894,x:-205.1,y:63},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,x:-209.05,y:62},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:-213,y:60.85},0).wait(1).to({scaleX:1,scaleY:1,x:-216.8,y:59.65},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,x:-217.3,y:59.45},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:-217.7,y:59.25},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:-218.15,y:59},0).wait(1).to({scaleX:0.9894,scaleY:0.9894,x:-218.5,y:58.75},0).wait(1).to({scaleX:0.9868,scaleY:0.9868,x:-218.95,y:58.5},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,x:-219.35,y:58.25},0).wait(1).to({scaleX:0.9815,scaleY:0.9815,x:-219.85,y:58},0).wait(1).to({scaleX:0.9788,scaleY:0.9788,x:-220.25,y:57.75},0).wait(1).to({scaleX:0.9762,scaleY:0.9762,x:-220.65,y:57.45},0).wait(1).to({scaleX:0.9736,scaleY:0.9736,x:-221.05,y:57.15},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:-221.5,y:56.85},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,x:-221.85,y:56.55},0).wait(1).to({scaleX:0.9656,scaleY:0.9656,x:-222.3,y:56.25},0).wait(1).to({scaleX:0.963,scaleY:0.963,x:-222.65,y:55.95},0).wait(1).to({scaleX:0.9603,scaleY:0.9603,x:-223.1,y:55.65},0).wait(1).to({scaleX:0.9577,scaleY:0.9577,x:-223.5,y:55.3},0).wait(1).to({scaleX:0.955,scaleY:0.955,x:-223.85,y:54.95},0).wait(1).to({scaleX:0.9524,scaleY:0.9524,x:-224.3,y:54.6},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,x:-224.65,y:54.25},0).wait(1).to({scaleX:0.9471,scaleY:0.9471,x:-225.05,y:53.9},0).wait(1).to({scaleX:0.9445,scaleY:0.9445,x:-225.4,y:53.55},0).wait(1).to({scaleX:0.9418,scaleY:0.9418,x:-225.85,y:53.15},0).wait(1).to({scaleX:0.9392,scaleY:0.9392,x:-226.2,y:52.7},0).wait(1).to({scaleX:0.9365,scaleY:0.9365,x:-226.6,y:52.35},0).wait(1).to({scaleX:0.9339,scaleY:0.9339,x:-226.95,y:51.95},0).wait(1).to({scaleX:0.9312,scaleY:0.9312,x:-227.35,y:51.55},0).wait(1).to({scaleX:0.9286,scaleY:0.9286,x:-227.7,y:51.1},0).wait(1).to({scaleX:0.9259,scaleY:0.9259,x:-228.05,y:50.7},0).wait(1).to({scaleX:0.9233,scaleY:0.9233,x:-228.4,y:50.25},0).wait(1).to({scaleX:0.9207,scaleY:0.9207,x:-228.75,y:49.75},0).wait(1).to({scaleX:0.918,scaleY:0.918,x:-229.15,y:49.3},0).wait(1).to({scaleX:0.9154,scaleY:0.9154,x:-229.45,y:48.85},0).wait(1).to({scaleX:0.9127,scaleY:0.9127,x:-229.85,y:48.35},0).wait(1).to({scaleX:0.9101,scaleY:0.9101,x:-230.15,y:47.9},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,x:-230.55,y:47.4},0).wait(1).to({scaleX:0.9048,scaleY:0.9048,x:-230.85,y:46.85},0).wait(1).to({scaleX:0.9021,scaleY:0.9021,x:-231.2,y:46.35},0).wait(1).to({scaleX:0.8995,scaleY:0.8995,x:-231.5,y:45.8},0).wait(1).to({scaleX:0.8969,scaleY:0.8969,x:-231.85,y:45.3},0).wait(1).to({scaleX:0.8942,scaleY:0.8942,x:-232.1,y:44.75},0).wait(1).to({scaleX:0.8916,scaleY:0.8916,x:-232.45,y:44.2},0).wait(1).to({scaleX:0.8889,scaleY:0.8889,x:-232.7,y:43.55},0).wait(1).to({scaleX:0.8863,scaleY:0.8863,x:-233.05,y:43},0).wait(1).to({scaleX:0.8836,scaleY:0.8836,x:-233.3,y:42.4},0).wait(1).to({scaleX:0.881,scaleY:0.881,x:-233.6,y:41.8},0).wait(1).to({scaleX:0.8783,scaleY:0.8783,x:-233.85,y:41.2},0).wait(1).to({scaleX:0.8757,scaleY:0.8757,x:-234.15,y:40.6},0).wait(1).to({scaleX:0.873,scaleY:0.873,x:-234.5,y:39.95},0).wait(1).to({scaleX:0.8704,scaleY:0.8704,x:-234.75,y:39.25},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,x:-235.05,y:38.6},0).wait(1).to({scaleX:0.8651,scaleY:0.8651,x:-235.25,y:37.95},0).wait(1).to({scaleX:0.8625,scaleY:0.8625,x:-235.5,y:37.25},0).wait(1).to({scaleX:0.8598,scaleY:0.8598,x:-235.75,y:36.6},0).wait(1).to({scaleX:0.8572,scaleY:0.8572,x:-236,y:35.9},0).wait(1).to({scaleX:0.8545,scaleY:0.8545,x:-236.2,y:35.1},0).wait(1).to({scaleX:0.8519,scaleY:0.8519,x:-236.45,y:34.4},0).wait(1).to({scaleX:0.8492,scaleY:0.8492,x:-236.6,y:33.6},0).wait(1).to({scaleX:0.8466,scaleY:0.8466,x:-236.85,y:32.9},0).wait(1).to({scaleX:0.844,scaleY:0.844,x:-237,y:32.1},0).wait(1).to({scaleX:0.8413,scaleY:0.8413,x:-237.2,y:31.3},0).wait(1).to({scaleX:0.8387,scaleY:0.8387,x:-237.35,y:30.55},0).wait(1).to({scaleX:0.836,scaleY:0.836,x:-237.5,y:29.7},0).wait(1).to({scaleX:0.8334,scaleY:0.8334,x:-237.65,y:28.95},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:-237.7,y:28.2},0).wait(1).to({scaleX:0.8281,scaleY:0.8281,x:-237.8,y:27.4},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:-237.85,y:26.6},0).wait(1).to({scaleX:0.8228,scaleY:0.8228,x:-237.9,y:25.75},0).wait(1).to({scaleX:0.8202,scaleY:0.8202,y:24.85},0).wait(1).to({scaleX:0.8175,scaleY:0.8175,x:-237.95,y:24},0).wait(1).to({scaleX:0.8149,scaleY:0.8149,y:23.15},0).wait(1).to({scaleX:0.8122,scaleY:0.8122,x:-238,y:22.25},0).wait(1).to({scaleX:0.8096,scaleY:0.8096,x:-237.95,y:21.35},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,y:20.4},0).wait(1).to({scaleX:0.8043,scaleY:0.8043,x:-237.85,y:19.45},0).wait(1).to({scaleX:0.8016,scaleY:0.8016,x:-237.8,y:18.45},0).wait(1).to({scaleX:0.799,scaleY:0.799,y:17.45},0).wait(1).to({scaleX:0.7964,scaleY:0.7964,x:-237.65,y:16.4},0).wait(1).to({scaleX:0.7937,scaleY:0.7937,x:-237.55,y:15.4},0).wait(1).to({scaleX:0.7911,scaleY:0.7911,x:-237.35,y:14.3},0).wait(1).to({scaleX:0.7884,scaleY:0.7884,x:-237.2,y:13.2},0).wait(1).to({scaleX:0.7858,scaleY:0.7858,x:-236.95,y:12},0).wait(1).to({scaleX:0.7831,scaleY:0.7831,x:-236.75,y:10.85},0).wait(1).to({scaleX:0.7805,scaleY:0.7805,x:-236.4,y:9.65},0).wait(1).to({scaleX:0.7778,scaleY:0.7778,x:-236.1,y:8.4},0).wait(1).to({scaleX:0.7752,scaleY:0.7752,x:-235.65,y:7.15},0).wait(1).to({scaleX:0.7726,scaleY:0.7726,x:-235.25,y:5.8},0).wait(1).to({scaleX:0.7699,scaleY:0.7699,x:-234.7,y:4.45},0).wait(1).to({scaleX:0.7673,scaleY:0.7673,x:-234.15,y:3},0).wait(1).to({scaleX:0.7646,scaleY:0.7646,x:-233.5,y:1.55},0).wait(1).to({scaleX:0.762,scaleY:0.762,x:-232.75,y:0.05},0).wait(1).to({scaleX:0.7593,scaleY:0.7593,x:-231.95,y:-1.45},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,x:-231,y:-3.05},0).wait(1).to({scaleX:0.754,scaleY:0.754,x:-229.9,y:-4.65},0).wait(1).to({scaleX:0.7514,scaleY:0.7514,x:-228.65,y:-6.35},0).wait(1).to({scaleX:0.7488,scaleY:0.7488,x:-227.3,y:-8},0).wait(1).to({scaleX:0.7461,scaleY:0.7461,x:-225.7,y:-9.7},0).wait(1).to({scaleX:0.7435,scaleY:0.7435,x:-224,y:-11.35},0).wait(1).to({scaleX:0.7408,scaleY:0.7408,x:-222.1,y:-13},0).wait(1).to({scaleX:0.7382,scaleY:0.7382,x:-220.05,y:-14.6},0).wait(1).to({scaleX:0.7355,scaleY:0.7355,x:-217.8,y:-16.15},0).wait(1));

	// Layer_5
	this.instance_5 = new lib.Symbol23();
	this.instance_5.setTransform(112.9,31.45);
	this.instance_5.alpha = 0.6211;
	this.instance_5.shadow = new cjs.Shadow("#00FFFF",1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(400));

	// Layer_6
	this.instance_6 = new lib.Symbol21();
	this.instance_6.setTransform(321.95,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(400));

	// Layer_7
	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(37.5,232.55,0.515,0.515);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).wait(1).to({scaleX:0.5125,scaleY:0.5125,x:40.7,y:232},0).wait(1).to({scaleX:0.5101,scaleY:0.5101,x:43.9,y:231.5},0).wait(1).to({scaleX:0.5077,scaleY:0.5077,x:47.1,y:230.9},0).wait(1).to({scaleX:0.5053,scaleY:0.5053,x:50.25,y:230.25},0).wait(1).to({scaleX:0.5029,scaleY:0.5029,x:53.35,y:229.5},0).wait(1).to({scaleX:0.5005,scaleY:0.5005,x:56.4,y:228.7},0).wait(1).to({scaleX:0.498,scaleY:0.498,x:59.45,y:227.8},0).wait(1).to({scaleX:0.4957,scaleY:0.4957,x:62.45,y:226.9},0).wait(1).to({scaleX:0.4932,scaleY:0.4932,x:65.3,y:225.85},0).wait(1).to({scaleX:0.4908,scaleY:0.4908,x:68.15,y:224.8},0).wait(1).to({scaleX:0.4884,scaleY:0.4884,x:70.95,y:223.65},0).wait(1).to({scaleX:0.486,scaleY:0.486,x:73.65,y:222.55},0).wait(1).to({scaleX:0.4836,scaleY:0.4836,x:76.35,y:221.35},0).wait(1).to({scaleX:0.4812,scaleY:0.4812,x:78.95,y:220.1},0).wait(1).to({scaleX:0.4788,scaleY:0.4788,x:81.45,y:218.8},0).wait(1).to({scaleX:0.4763,scaleY:0.4763,x:83.95,y:217.55},0).wait(1).to({scaleX:0.4739,scaleY:0.4739,x:86.4,y:216.25},0).wait(1).to({scaleX:0.4715,scaleY:0.4715,x:88.8,y:214.85},0).wait(1).to({scaleX:0.4691,scaleY:0.4691,x:91.1,y:213.55},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:93.4,y:212.2},0).wait(1).to({scaleX:0.4643,scaleY:0.4643,x:95.6,y:210.8},0).wait(1).to({scaleX:0.4619,scaleY:0.4619,x:97.85,y:209.45},0).wait(1).to({scaleX:0.4595,scaleY:0.4595,x:99.95,y:208.05},0).wait(1).to({scaleX:0.457,scaleY:0.457,x:102.1,y:206.65},0).wait(1).to({scaleX:0.4546,scaleY:0.4546,x:104.15,y:205.3},0).wait(1).to({scaleX:0.4522,scaleY:0.4522,x:106.2,y:203.85},0).wait(1).to({scaleX:0.4498,scaleY:0.4498,x:108.25,y:202.55},0).wait(1).to({scaleX:0.4474,scaleY:0.4474,x:110.25,y:201.1},0).wait(1).to({scaleX:0.445,scaleY:0.445,x:112.15,y:199.75},0).wait(1).to({scaleX:0.4426,scaleY:0.4426,x:114.15,y:198.3},0).wait(1).to({scaleX:0.4402,scaleY:0.4402,x:116,y:196.95},0).wait(1).to({scaleX:0.4377,scaleY:0.4377,x:117.95,y:195.6},0).wait(1).to({scaleX:0.4353,scaleY:0.4353,x:119.8,y:194.2},0).wait(1).to({scaleX:0.4329,scaleY:0.4329,x:121.65,y:192.8},0).wait(1).to({scaleX:0.4305,scaleY:0.4305,x:123.45,y:191.45},0).wait(1).to({scaleX:0.4281,scaleY:0.4281,x:125.25,y:190},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,x:127.1,y:188.65},0).wait(1).to({scaleX:0.4233,scaleY:0.4233,x:128.85,y:187.3},0).wait(1).to({scaleX:0.4208,scaleY:0.4208,x:130.6,y:185.9},0).wait(1).to({scaleX:0.4184,scaleY:0.4184,x:132.35,y:184.55},0).wait(1).to({scaleX:0.416,scaleY:0.416,x:134.1,y:183.15},0).wait(1).to({scaleX:0.4136,scaleY:0.4136,x:135.75,y:181.8},0).wait(1).to({scaleX:0.4112,scaleY:0.4112,x:137.5,y:180.35},0).wait(1).to({scaleX:0.4088,scaleY:0.4088,x:139.15,y:179},0).wait(1).to({scaleX:0.4064,scaleY:0.4064,x:140.85,y:177.6},0).wait(1).to({scaleX:0.404,scaleY:0.404,x:142.5,y:176.25},0).wait(1).to({scaleX:0.4016,scaleY:0.4016,x:144.2,y:174.85},0).wait(1).to({scaleX:0.3991,scaleY:0.3991,x:145.8,y:173.5},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:147.4,y:172.1},0).wait(1).to({scaleX:0.3943,scaleY:0.3943,x:148.95,y:170.7},0).wait(1).to({scaleX:0.3919,scaleY:0.3919,x:150.55,y:169.35},0).wait(1).to({scaleX:0.3895,scaleY:0.3895,x:152.15,y:168.05},0).wait(1).to({scaleX:0.3871,scaleY:0.3871,x:153.75,y:166.65},0).wait(1).to({scaleX:0.3846,scaleY:0.3846,x:155.25,y:165.25},0).wait(1).to({scaleX:0.3822,scaleY:0.3822,x:156.8,y:163.9},0).wait(1).to({scaleX:0.3798,scaleY:0.3798,x:158.3,y:162.6},0).wait(1).to({scaleX:0.3774,scaleY:0.3774,x:159.85,y:161.25},0).wait(1).to({scaleX:0.375,scaleY:0.375,x:161.35,y:159.9},0).wait(1).to({scaleX:0.3726,scaleY:0.3726,x:162.85,y:158.55},0).wait(1).to({scaleX:0.3702,scaleY:0.3702,x:164.25,y:157.2},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:165.75,y:155.95},0).wait(1).to({scaleX:0.3654,scaleY:0.3654,x:167.2,y:154.55},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,x:168.7,y:153.25},0).wait(1).to({scaleX:0.3605,scaleY:0.3605,x:170.05,y:151.9},0).wait(1).to({scaleX:0.3581,scaleY:0.3581,x:171.5,y:150.65},0).wait(1).to({scaleX:0.3557,scaleY:0.3557,x:172.9,y:149.3},0).wait(1).to({scaleX:0.3533,scaleY:0.3533,x:174.35,y:148},0).wait(1).to({scaleX:0.3509,scaleY:0.3509,x:175.7,y:146.7},0).wait(1).to({scaleX:0.3484,scaleY:0.3484,x:177.1,y:145.35},0).wait(1).to({scaleX:0.3461,scaleY:0.3461,x:178.45,y:144.1},0).wait(1).to({scaleX:0.3436,scaleY:0.3436,x:179.8,y:142.8},0).wait(1).to({scaleX:0.3412,scaleY:0.3412,x:181.15,y:141.55},0).wait(1).to({scaleX:0.3388,scaleY:0.3388,x:182.5,y:140.2},0).wait(1).to({scaleX:0.3364,scaleY:0.3364,x:183.85,y:138.95},0).wait(1).to({scaleX:0.334,scaleY:0.334,x:185.15,y:137.7},0).wait(1).to({scaleX:0.3316,scaleY:0.3316,x:186.5,y:136.45},0).wait(1).to({scaleX:0.3292,scaleY:0.3292,x:187.8,y:135.15},0).wait(1).to({scaleX:0.3268,scaleY:0.3268,x:189.15,y:133.9},0).wait(1).to({scaleX:0.3243,scaleY:0.3243,x:190.4,y:132.6},0).wait(1).to({scaleX:0.3219,scaleY:0.3219,x:191.7,y:131.4},0).wait(1).to({scaleX:0.3195,scaleY:0.3195,x:192.95,y:130.1},0).wait(1).to({scaleX:0.3171,scaleY:0.3171,x:194.3,y:128.9},0).wait(1).to({scaleX:0.3147,scaleY:0.3147,x:195.5,y:127.6},0).wait(1).to({scaleX:0.3123,scaleY:0.3123,x:196.8,y:126.4},0).wait(1).to({scaleX:0.3099,scaleY:0.3099,x:198,y:125.15},0).wait(1).to({scaleX:0.3074,scaleY:0.3074,x:199.25,y:123.9},0).wait(1).to({scaleX:0.305,scaleY:0.305,x:200.45,y:122.7},0).wait(1).to({scaleX:0.3026,scaleY:0.3026,x:201.75,y:121.4},0).wait(1).to({scaleX:0.3002,scaleY:0.3002,x:202.95,y:120.2},0).wait(1).to({scaleX:0.2978,scaleY:0.2978,x:204.2,y:119},0).wait(1).to({scaleX:0.2954,scaleY:0.2954,x:205.35,y:117.8},0).wait(1).to({scaleX:0.293,scaleY:0.293,x:206.65,y:116.55},0).wait(1).to({scaleX:0.2906,scaleY:0.2906,x:207.8,y:115.4},0).wait(1).to({scaleX:0.2881,scaleY:0.2881,x:209,y:114.15},0).wait(1).to({scaleX:0.2857,scaleY:0.2857,x:210.15,y:113},0).wait(1).to({scaleX:0.2833,scaleY:0.2833,x:211.35,y:111.8},0).wait(1).to({scaleX:0.2809,scaleY:0.2809,x:212.55,y:110.6},0).wait(1).to({scaleX:0.2785,scaleY:0.2785,x:213.75,y:109.4},0).wait(1).to({scaleX:0.2761,scaleY:0.2761,x:214.85,y:108.25},0).wait(1).to({scaleX:0.2737,scaleY:0.2737,x:216.05,y:107.05},0).wait(1).to({scaleX:0.2747,scaleY:0.2747,x:214.45,y:105.8},0).wait(1).to({scaleX:0.2758,scaleY:0.2758,x:212.95,y:104.5},0).wait(1).to({scaleX:0.2768,scaleY:0.2768,x:211.45,y:103.25},0).wait(1).to({scaleX:0.2778,scaleY:0.2778,x:209.9,y:102.05},0).wait(1).to({scaleX:0.2789,scaleY:0.2789,x:208.35,y:100.8},0).wait(1).to({scaleX:0.2799,scaleY:0.2799,x:206.8,y:99.6},0).wait(1).to({scaleX:0.281,scaleY:0.281,x:205.2,y:98.35},0).wait(1).to({scaleX:0.282,scaleY:0.282,x:203.7,y:97.15},0).wait(1).to({scaleX:0.2831,scaleY:0.2831,x:202.1,y:95.9},0).wait(1).to({scaleX:0.2841,scaleY:0.2841,x:200.55,y:94.7},0).wait(1).to({scaleX:0.2851,scaleY:0.2851,x:199,y:93.45},0).wait(1).to({scaleX:0.2862,scaleY:0.2862,x:197.4,y:92.25},0).wait(1).to({scaleX:0.2872,scaleY:0.2872,x:195.8,y:91},0).wait(1).to({scaleX:0.2883,scaleY:0.2883,x:194.2,y:89.85},0).wait(1).to({scaleX:0.2893,scaleY:0.2893,x:192.55,y:88.65},0).wait(1).to({scaleX:0.2903,scaleY:0.2903,x:191.05,y:87.45},0).wait(1).to({scaleX:0.2914,scaleY:0.2914,x:189.4,y:86.25},0).wait(1).to({scaleX:0.2924,scaleY:0.2924,x:187.75,y:85.05},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:186.1,y:83.85},0).wait(1).to({scaleX:0.2945,scaleY:0.2945,x:184.5,y:82.65},0).wait(1).to({scaleX:0.2956,scaleY:0.2956,x:182.85,y:81.45},0).wait(1).to({scaleX:0.2966,scaleY:0.2966,x:181.15,y:80.35},0).wait(1).to({scaleX:0.2977,scaleY:0.2977,x:179.55,y:79.15},0).wait(1).to({scaleX:0.2987,scaleY:0.2987,x:177.9,y:78},0).wait(1).to({scaleX:0.2997,scaleY:0.2997,x:176.2,y:76.85},0).wait(1).to({scaleX:0.3008,scaleY:0.3008,x:174.5,y:75.7},0).wait(1).to({scaleX:0.3018,scaleY:0.3018,x:172.85,y:74.5},0).wait(1).to({scaleX:0.3029,scaleY:0.3029,x:171.1,y:73.4},0).wait(1).to({scaleX:0.3039,scaleY:0.3039,x:169.5,y:72.25},0).wait(1).to({scaleX:0.305,scaleY:0.305,x:167.75,y:71.1},0).wait(1).to({scaleX:0.306,scaleY:0.306,x:166.05,y:69.95},0).wait(1).to({scaleX:0.3071,scaleY:0.3071,x:164.3,y:68.9},0).wait(1).to({scaleX:0.3081,scaleY:0.3081,x:162.6,y:67.75},0).wait(1).to({scaleX:0.3091,scaleY:0.3091,x:160.85,y:66.65},0).wait(1).to({scaleX:0.3102,scaleY:0.3102,x:159.15,y:65.55},0).wait(1).to({scaleX:0.3112,scaleY:0.3112,x:157.35,y:64.45},0).wait(1).to({scaleX:0.3123,scaleY:0.3123,x:155.65,y:63.35},0).wait(1).to({scaleX:0.3133,scaleY:0.3133,x:153.85,y:62.25},0).wait(1).to({scaleX:0.3144,scaleY:0.3144,x:152.1,y:61.15},0).wait(1).to({scaleX:0.3154,scaleY:0.3154,x:150.3,y:60.05},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,x:148.55,y:59},0).wait(1).to({scaleX:0.3175,scaleY:0.3175,x:146.75,y:58},0).wait(1).to({scaleX:0.3185,scaleY:0.3185,x:144.95,y:56.9},0).wait(1).to({scaleX:0.3196,scaleY:0.3196,x:143.15,y:55.85},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,x:141.3,y:54.8},0).wait(1).to({scaleX:0.3217,scaleY:0.3217,x:139.45,y:53.8},0).wait(1).to({scaleX:0.3227,scaleY:0.3227,x:137.65,y:52.75},0).wait(1).to({scaleX:0.3237,scaleY:0.3237,x:135.85,y:51.7},0).wait(1).to({scaleX:0.3248,scaleY:0.3248,x:133.95,y:50.7},0).wait(1).to({scaleX:0.3258,scaleY:0.3258,x:132.1,y:49.7},0).wait(1).to({scaleX:0.3269,scaleY:0.3269,x:130.3,y:48.7},0).wait(1).to({scaleX:0.3279,scaleY:0.3279,x:128.4,y:47.75},0).wait(1).to({scaleX:0.329,scaleY:0.329,x:126.5,y:46.75},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:124.7,y:45.8},0).wait(1).to({scaleX:0.3311,scaleY:0.3311,x:122.75,y:44.8},0).wait(1).to({scaleX:0.3321,scaleY:0.3321,x:120.85,y:43.85},0).wait(1).to({scaleX:0.3331,scaleY:0.3331,x:118.95,y:42.85},0).wait(1).to({scaleX:0.3342,scaleY:0.3342,x:117.05,y:41.9},0).wait(1).to({scaleX:0.3352,scaleY:0.3352,x:115.15,y:41.05},0).wait(1).to({scaleX:0.3363,scaleY:0.3363,x:113.2,y:40.15},0).wait(1).to({scaleX:0.3373,scaleY:0.3373,x:111.25,y:39.2},0).wait(1).to({scaleX:0.3384,scaleY:0.3384,x:109.3,y:38.3},0).wait(1).to({scaleX:0.3394,scaleY:0.3394,x:107.35,y:37.4},0).wait(1).to({scaleX:0.3404,scaleY:0.3404,x:105.45,y:36.55},0).wait(1).to({scaleX:0.3415,scaleY:0.3415,x:103.5,y:35.75},0).wait(1).to({scaleX:0.3425,scaleY:0.3425,x:101.55,y:34.9},0).wait(1).to({scaleX:0.3436,scaleY:0.3436,x:99.65,y:34.05},0).wait(1).to({scaleX:0.3446,scaleY:0.3446,x:97.65,y:33.3},0).wait(1).to({scaleX:0.3456,scaleY:0.3456,x:95.7,y:32.45},0).wait(1).to({scaleX:0.3467,scaleY:0.3467,x:93.7,y:31.65},0).wait(1).to({scaleX:0.3477,scaleY:0.3477,x:91.75,y:30.95},0).wait(1).to({scaleX:0.3488,scaleY:0.3488,x:89.75,y:30.15},0).wait(1).to({scaleX:0.3498,scaleY:0.3498,x:87.75,y:29.4},0).wait(1).to({scaleX:0.3509,scaleY:0.3509,x:85.7,y:28.65},0).wait(1).to({scaleX:0.3519,scaleY:0.3519,x:83.7,y:27.95},0).wait(1).to({scaleX:0.353,scaleY:0.353,x:81.65,y:27.2},0).wait(1).to({scaleX:0.354,scaleY:0.354,x:79.6,y:26.6},0).wait(1).to({scaleX:0.355,scaleY:0.355,x:77.55,y:25.95},0).wait(1).to({scaleX:0.3561,scaleY:0.3561,x:75.45,y:25.3},0).wait(1).to({scaleX:0.3571,scaleY:0.3571,x:73.45,y:24.65},0).wait(1).to({scaleX:0.3582,scaleY:0.3582,x:71.3,y:24.05},0).wait(1).to({scaleX:0.3592,scaleY:0.3592,x:69.25,y:23.5},0).wait(1).to({scaleX:0.3603,scaleY:0.3603,x:67.15,y:23},0).wait(1).to({scaleX:0.3613,scaleY:0.3613,x:65,y:22.45},0).wait(1).to({scaleX:0.3624,scaleY:0.3624,x:62.85,y:21.95},0).wait(1).to({scaleX:0.3634,scaleY:0.3634,x:60.7,y:21.55},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,x:58.5,y:21.1},0).wait(1).to({scaleX:0.3655,scaleY:0.3655,x:56.35,y:20.75},0).wait(1).to({scaleX:0.3665,scaleY:0.3665,x:54.15,y:20.45},0).wait(1).to({scaleX:0.3676,scaleY:0.3676,x:52,y:20.1},0).wait(1).to({scaleX:0.3686,scaleY:0.3686,x:49.75,y:19.85},0).wait(1).to({scaleX:0.3697,scaleY:0.3697,x:47.55,y:19.65},0).wait(1).to({scaleX:0.3707,scaleY:0.3707,x:45.35,y:19.5},0).wait(1).to({scaleX:0.3717,scaleY:0.3717,x:43.1,y:19.35},0).wait(1).to({scaleX:0.3728,scaleY:0.3728,x:40.85},0).wait(1).to({scaleX:0.3738,scaleY:0.3738,x:38.65,y:19.45},0).wait(1).to({scaleX:0.3749,scaleY:0.3749,x:36.4,y:19.5},0).wait(1).to({scaleX:0.3759,scaleY:0.3759,x:34.15,y:19.65},0).wait(1).to({scaleX:0.377,scaleY:0.377,x:31.95,y:19.85},0).wait(1).to({scaleX:0.378,scaleY:0.378,x:29.75,y:20.15},0).to({_off:true},1).wait(100));

	// Layer_8
	this.instance_8 = new lib.Symbol15();
	this.instance_8.setTransform(-217.8,-16.15,0.7355,0.7355);

	this.instance_9 = new lib.Symbol11();
	this.instance_9.setTransform(218,125.9,0.6286,0.6286);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.7317,scaleY:0.7317,x:-214.55,y:-17.6},0).wait(1).to({scaleX:0.7278,scaleY:0.7278,x:-211.15,y:-19.05},0).wait(1).to({scaleX:0.7239,scaleY:0.7239,x:-207.5,y:-20.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-203.7,y:-21.55},0).wait(1).to({scaleX:0.7161,scaleY:0.7161,x:-199.75,y:-22.55},0).wait(1).to({scaleX:0.7123,scaleY:0.7123,x:-195.65,y:-23.5},0).wait(1).to({scaleX:0.7084,scaleY:0.7084,x:-191.5,y:-24.25},0).wait(1).to({scaleX:0.7045,scaleY:0.7045,x:-187.25,y:-24.85},0).wait(1).to({scaleX:0.7006,scaleY:0.7006,x:-183,y:-25.5},0).wait(1).to({scaleX:0.6968,scaleY:0.6968,x:-178.65,y:-25.9},0).wait(1).to({scaleX:0.6929,scaleY:0.6929,x:-174.25,y:-26.2},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:-169.85,y:-26.5},0).wait(1).to({scaleX:0.6851,scaleY:0.6851,x:-165.4,y:-26.7},0).wait(1).to({scaleX:0.6812,scaleY:0.6812,x:-161,y:-26.8},0).wait(1).to({scaleX:0.6774,scaleY:0.6774,x:-156.55},0).wait(1).to({scaleX:0.6735,scaleY:0.6735,x:-152.1},0).wait(1).to({scaleX:0.6696,scaleY:0.6696,x:-147.65,y:-26.75},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,x:-143.15,y:-26.65},0).wait(1).to({scaleX:0.6618,scaleY:0.6618,x:-138.7,y:-26.5},0).wait(1).to({scaleX:0.658,scaleY:0.658,x:-134.2,y:-26.3},0).wait(1).to({scaleX:0.6541,scaleY:0.6541,x:-129.7,y:-26},0).wait(1).to({scaleX:0.6502,scaleY:0.6502,x:-125.25,y:-25.8},0).wait(1).to({scaleX:0.6463,scaleY:0.6463,x:-120.75,y:-25.5},0).wait(1).to({scaleX:0.6425,scaleY:0.6425,x:-116.2,y:-25.15},0).wait(1).to({scaleX:0.6386,scaleY:0.6386,x:-111.75,y:-24.75},0).wait(1).to({scaleX:0.6347,scaleY:0.6347,x:-107.25,y:-24.4},0).wait(1).to({scaleX:0.6308,scaleY:0.6308,x:-102.8,y:-24},0).wait(1).to({scaleX:0.627,scaleY:0.627,x:-98.3,y:-23.55},0).wait(1).to({scaleX:0.6231,scaleY:0.6231,x:-93.85,y:-23.1},0).wait(1).to({scaleX:0.6192,scaleY:0.6192,x:-89.35,y:-22.6},0).wait(1).to({scaleX:0.6153,scaleY:0.6153,x:-84.8,y:-22.05},0).wait(1).to({scaleX:0.6115,scaleY:0.6115,x:-80.3,y:-21.6},0).wait(1).to({scaleX:0.6075,scaleY:0.6075,x:-75.75,y:-21.05},0).wait(1).to({scaleX:0.6037,scaleY:0.6037,x:-71.25,y:-20.45},0).wait(1).to({scaleX:0.5998,scaleY:0.5998,x:-66.7,y:-19.85},0).wait(1).to({scaleX:0.5959,scaleY:0.5959,x:-62.15,y:-19.3},0).wait(1).to({scaleX:0.592,scaleY:0.592,x:-57.65,y:-18.65},0).wait(1).to({scaleX:0.5882,scaleY:0.5882,x:-53.15,y:-18},0).wait(1).to({scaleX:0.5843,scaleY:0.5843,x:-48.65,y:-17.35},0).wait(1).to({scaleX:0.5804,scaleY:0.5804,x:-44.1,y:-16.65},0).wait(1).to({scaleX:0.5765,scaleY:0.5765,x:-39.55,y:-16},0).wait(1).to({scaleX:0.5727,scaleY:0.5727,x:-35.1,y:-15.25},0).wait(1).to({scaleX:0.5688,scaleY:0.5688,x:-30.55,y:-14.55},0).wait(1).to({scaleX:0.5649,scaleY:0.5649,x:-26.1,y:-13.8},0).wait(1).to({scaleX:0.561,scaleY:0.561,x:-21.6,y:-13},0).wait(1).to({scaleX:0.5572,scaleY:0.5572,x:-17.05,y:-12.3},0).wait(1).to({scaleX:0.5533,scaleY:0.5533,x:-12.6,y:-11.45},0).wait(1).to({scaleX:0.5494,scaleY:0.5494,x:-8.05,y:-10.65},0).wait(1).to({scaleX:0.5455,scaleY:0.5455,x:-3.6,y:-9.85},0).wait(1).to({scaleX:0.5416,scaleY:0.5416,x:0.9,y:-9},0).wait(1).to({scaleX:0.5378,scaleY:0.5378,x:5.45,y:-8.15},0).wait(1).to({scaleX:0.5339,scaleY:0.5339,x:9.9,y:-7.25},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:14.4,y:-6.4},0).wait(1).to({scaleX:0.5261,scaleY:0.5261,x:18.85,y:-5.5},0).wait(1).to({scaleX:0.5222,scaleY:0.5222,x:23.35,y:-4.6},0).wait(1).to({scaleX:0.5184,scaleY:0.5184,x:27.85,y:-3.7},0).wait(1).to({scaleX:0.5145,scaleY:0.5145,x:32.3,y:-2.75},0).wait(1).to({scaleX:0.5106,scaleY:0.5106,x:36.8,y:-1.75},0).wait(1).to({scaleX:0.5067,scaleY:0.5067,x:41.25,y:-0.9},0).wait(1).to({scaleX:0.5029,scaleY:0.5029,x:45.7,y:0.1},0).wait(1).to({scaleX:0.499,scaleY:0.499,x:50.2,y:1.1},0).wait(1).to({scaleX:0.4951,scaleY:0.4951,x:54.65,y:2.15},0).wait(1).to({scaleX:0.4912,scaleY:0.4912,x:59.1,y:3.1},0).wait(1).to({scaleX:0.4874,scaleY:0.4874,x:63.55,y:4.1},0).wait(1).to({scaleX:0.4835,scaleY:0.4835,x:68,y:5.15},0).wait(1).to({scaleX:0.4796,scaleY:0.4796,x:72.45,y:6.2},0).wait(1).to({scaleX:0.4757,scaleY:0.4757,x:76.9,y:7.25},0).wait(1).to({scaleX:0.4718,scaleY:0.4718,x:81.35,y:8.35},0).wait(1).to({scaleX:0.468,scaleY:0.468,x:85.75,y:9.4},0).wait(1).to({scaleX:0.4641,scaleY:0.4641,x:90.2,y:10.45},0).wait(1).to({scaleX:0.4602,scaleY:0.4602,x:94.65,y:11.55},0).wait(1).to({scaleX:0.4563,scaleY:0.4563,x:99.05,y:12.65},0).wait(1).to({scaleX:0.4524,scaleY:0.4524,x:103.5,y:13.7},0).wait(1).to({scaleX:0.4485,scaleY:0.4485,x:107.95,y:14.85},0).wait(1).to({scaleX:0.4447,scaleY:0.4447,x:112.3,y:16},0).wait(1).to({scaleX:0.4408,scaleY:0.4408,x:116.75,y:17.1},0).wait(1).to({scaleX:0.4369,scaleY:0.4369,x:121.1,y:18.3},0).wait(1).to({scaleX:0.433,scaleY:0.433,x:125.55,y:19.4},0).wait(1).to({scaleX:0.4292,scaleY:0.4292,x:129.95,y:20.6},0).wait(1).to({scaleX:0.4253,scaleY:0.4253,x:134.35,y:21.75},0).wait(1).to({scaleX:0.4214,scaleY:0.4214,x:138.8,y:22.95},0).wait(1).to({scaleX:0.4175,scaleY:0.4175,x:143.15,y:24.15},0).wait(1).to({scaleX:0.4137,scaleY:0.4137,x:147.55,y:25.3},0).wait(1).to({scaleX:0.4098,scaleY:0.4098,x:151.95,y:26.5},0).wait(1).to({scaleX:0.4059,scaleY:0.4059,x:156.35,y:27.75},0).wait(1).to({scaleX:0.402,scaleY:0.402,x:160.75,y:28.95},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,x:165.1,y:30.15},0).wait(1).to({scaleX:0.3943,scaleY:0.3943,x:169.5,y:31.4},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:173.85,y:32.65},0).wait(1).to({scaleX:0.3865,scaleY:0.3865,x:178.2,y:33.9},0).wait(1).to({scaleX:0.3826,scaleY:0.3826,x:182.6,y:35.2},0).wait(1).to({scaleX:0.3788,scaleY:0.3788,x:186.95,y:36.4},0).wait(1).to({scaleX:0.3749,scaleY:0.3749,x:191.35,y:37.65},0).wait(1).to({scaleX:0.371,scaleY:0.371,x:195.65,y:39},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,x:200.05,y:40.3},0).wait(1).to({scaleX:0.3633,scaleY:0.3633,x:204.45,y:41.55},0).wait(1).to({scaleX:0.3594,scaleY:0.3594,x:208.75,y:42.85},0).wait(1).to({scaleX:0.3555,scaleY:0.3555,x:213.15,y:44.2},0).wait(1).to({scaleX:0.3516,scaleY:0.3516,x:217.4,y:45.5},0).wait(1).to({scaleX:0.3546,scaleY:0.3546,x:217.45,y:45.75},0).wait(1).to({scaleX:0.3576,scaleY:0.3576,x:217.55,y:45.9},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,x:217.6,y:46.15},0).wait(1).to({scaleX:0.3635,scaleY:0.3635,y:46.35},0).wait(1).to({scaleX:0.3665,scaleY:0.3665,x:217.65,y:46.55},0).wait(1).to({scaleX:0.3695,scaleY:0.3695,x:217.7,y:46.75},0).wait(1).to({scaleX:0.3725,scaleY:0.3725,x:217.65,y:47},0).wait(1).to({scaleX:0.3755,scaleY:0.3755,x:217.7,y:47.25},0).wait(1).to({scaleX:0.3784,scaleY:0.3784,x:217.75,y:47.45},0).wait(1).to({scaleX:0.3814,scaleY:0.3814,y:47.75},0).wait(1).to({scaleX:0.3844,scaleY:0.3844,x:217.8,y:48},0).wait(1).to({scaleX:0.3874,scaleY:0.3874,y:48.3},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:217.85,y:48.5},0).wait(1).to({scaleX:0.3933,scaleY:0.3933,y:48.85},0).wait(1).to({scaleX:0.3963,scaleY:0.3963,y:49.1},0).wait(1).to({scaleX:0.3993,scaleY:0.3993,x:217.8,y:49.4},0).wait(1).to({scaleX:0.4023,scaleY:0.4023,x:217.85,y:49.7},0).wait(1).to({scaleX:0.4052,scaleY:0.4052,y:50},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:217.9,y:50.3},0).wait(1).to({scaleX:0.4112,scaleY:0.4112,y:50.65},0).wait(1).to({scaleX:0.4142,scaleY:0.4142,y:51},0).wait(1).to({scaleX:0.4172,scaleY:0.4172,x:217.85,y:51.35},0).wait(1).to({scaleX:0.4201,scaleY:0.4201,y:51.7},0).wait(1).to({scaleX:0.4231,scaleY:0.4231,y:52.05},0).wait(1).to({scaleX:0.4261,scaleY:0.4261,y:52.45},0).wait(1).to({scaleX:0.4291,scaleY:0.4291,y:52.75},0).wait(1).to({scaleX:0.4321,scaleY:0.4321,x:217.8,y:53.2},0).wait(1).to({scaleX:0.435,scaleY:0.435,x:217.75,y:53.55},0).wait(1).to({scaleX:0.438,scaleY:0.438,y:54},0).wait(1).to({scaleX:0.441,scaleY:0.441,x:217.65,y:54.35},0).wait(1).to({scaleX:0.444,scaleY:0.444,y:54.8},0).wait(1).to({scaleX:0.4469,scaleY:0.4469,x:217.6,y:55.25},0).wait(1).to({scaleX:0.4499,scaleY:0.4499,x:217.55,y:55.6},0).wait(1).to({scaleX:0.4529,scaleY:0.4529,x:217.5,y:56.1},0).wait(1).to({scaleX:0.4559,scaleY:0.4559,x:217.45,y:56.55},0).wait(1).to({scaleX:0.4589,scaleY:0.4589,x:217.4,y:57.05},0).wait(1).to({scaleX:0.4618,scaleY:0.4618,x:217.35,y:57.45},0).wait(1).to({scaleX:0.4648,scaleY:0.4648,x:217.3,y:57.95},0).wait(1).to({scaleX:0.4678,scaleY:0.4678,x:217.2,y:58.45},0).wait(1).to({scaleX:0.4708,scaleY:0.4708,x:217.1,y:58.95},0).wait(1).to({scaleX:0.4738,scaleY:0.4738,x:217.05,y:59.45},0).wait(1).to({scaleX:0.4767,scaleY:0.4767,x:216.95,y:60},0).wait(1).to({scaleX:0.4797,scaleY:0.4797,x:216.8,y:60.5},0).wait(1).to({scaleX:0.4827,scaleY:0.4827,x:216.75,y:61.05},0).wait(1).to({scaleX:0.4857,scaleY:0.4857,x:216.65,y:61.6},0).wait(1).to({scaleX:0.4886,scaleY:0.4886,x:216.5,y:62.2},0).wait(1).to({scaleX:0.4916,scaleY:0.4916,x:216.4,y:62.7},0).wait(1).to({scaleX:0.4946,scaleY:0.4946,x:216.25,y:63.25},0).wait(1).to({scaleX:0.4976,scaleY:0.4976,x:216.15,y:63.9},0).wait(1).to({scaleX:0.5005,scaleY:0.5005,x:216.05,y:64.45},0).wait(1).to({scaleX:0.5035,scaleY:0.5035,x:215.85,y:65.1},0).wait(1).to({scaleX:0.5065,scaleY:0.5065,x:215.75,y:65.7},0).wait(1).to({scaleX:0.5095,scaleY:0.5095,x:215.6,y:66.35},0).wait(1).to({scaleX:0.5125,scaleY:0.5125,x:215.45,y:66.95},0).wait(1).to({scaleX:0.5154,scaleY:0.5154,x:215.25,y:67.6},0).wait(1).to({scaleX:0.5184,scaleY:0.5184,x:215,y:68.2},0).wait(1).to({scaleX:0.5214,scaleY:0.5214,x:214.75,y:68.85},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:214.45,y:69.45},0).wait(1).to({scaleX:0.5274,scaleY:0.5274,x:214.2,y:70.15},0).wait(1).to({scaleX:0.5303,scaleY:0.5303,x:213.95,y:70.8},0).wait(1).to({scaleX:0.5333,scaleY:0.5333,x:213.7,y:71.4},0).wait(1).to({scaleX:0.5363,scaleY:0.5363,x:213.4,y:72.15},0).wait(1).to({scaleX:0.5393,scaleY:0.5393,x:213.15,y:72.8},0).wait(1).to({scaleX:0.5423,scaleY:0.5423,x:212.8,y:73.55},0).wait(1).to({scaleX:0.5453,scaleY:0.5453,x:212.5,y:74.25},0).wait(1).to({scaleX:0.5482,scaleY:0.5482,x:212.15,y:75.05},0).wait(1).to({scaleX:0.5512,scaleY:0.5512,x:211.85,y:75.8},0).wait(1).to({scaleX:0.5542,scaleY:0.5542,x:211.5,y:76.55},0).wait(1).to({scaleX:0.5572,scaleY:0.5572,x:211.15,y:77.3},0).wait(1).to({scaleX:0.5602,scaleY:0.5602,x:210.7,y:78.2},0).wait(1).to({scaleX:0.5631,scaleY:0.5631,x:210.25,y:78.95},0).wait(1).to({scaleX:0.5661,scaleY:0.5661,x:209.85,y:79.85},0).wait(1).to({scaleX:0.5691,scaleY:0.5691,x:209.45,y:80.7},0).wait(1).to({scaleX:0.5721,scaleY:0.5721,x:209,y:81.55},0).wait(1).to({scaleX:0.575,scaleY:0.575,x:208.5,y:82.5},0).wait(1).to({scaleX:0.578,scaleY:0.578,x:208,y:83.45},0).wait(1).to({scaleX:0.581,scaleY:0.581,x:207.45,y:84.45},0).wait(1).to({scaleX:0.584,scaleY:0.584,x:206.9,y:85.4},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,x:206.3,y:86.45},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,x:205.65,y:87.5},0).wait(1).to({scaleX:0.5929,scaleY:0.5929,x:205,y:88.6},0).wait(1).to({scaleX:0.5959,scaleY:0.5959,x:204.2,y:89.7},0).wait(1).to({scaleX:0.5989,scaleY:0.5989,x:203.45,y:90.9},0).wait(1).to({scaleX:0.6019,scaleY:0.6019,x:202.55,y:92.1},0).wait(1).to({scaleX:0.6048,scaleY:0.6048,x:201.65,y:93.35},0).wait(1).to({scaleX:0.6078,scaleY:0.6078,x:200.7,y:94.6},0).wait(1).to({scaleX:0.6108,scaleY:0.6108,x:199.65,y:95.95},0).wait(1).to({scaleX:0.6138,scaleY:0.6138,x:198.45,y:97.25},0).wait(1).to({scaleX:0.6167,scaleY:0.6167,x:197.2,y:98.6},0).wait(1).to({scaleX:0.6197,scaleY:0.6197,x:195.85,y:100.05},0).wait(1).to({scaleX:0.6227,scaleY:0.6227,x:194.35,y:101.45},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:192.75,y:102.9},0).wait(1).to({scaleX:0.6287,scaleY:0.6287,x:190.95,y:104.35},0).wait(1).to({scaleX:0.6316,scaleY:0.6316,x:189,y:105.8},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:187,y:107.2},0).wait(1).to({scaleX:0.6376,scaleY:0.6376,x:184.85,y:108.6},0).wait(1).to({scaleX:0.6406,scaleY:0.6406,x:182.5,y:109.95},0).wait(1).to({scaleX:0.6436,scaleY:0.6436,x:180.05,y:111.3},0).wait(1).to({scaleX:0.6465,scaleY:0.6465,x:177.5,y:112.5},0).to({_off:true},1).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(299).to({_off:false},0).wait(1).to({scaleX:0.6241,scaleY:0.6241,x:221.3,y:123.95},0).wait(1).to({scaleX:0.6197,scaleY:0.6197,x:224.3,y:121.95},0).wait(1).to({scaleX:0.6153,scaleY:0.6153,x:226.95,y:120.05},0).wait(1).to({scaleX:0.6108,scaleY:0.6108,x:229.3,y:117.95},0).wait(1).to({scaleX:0.6064,scaleY:0.6064,x:231.3,y:115.9},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:233,y:114},0).wait(1).to({scaleX:0.5975,scaleY:0.5975,x:234.5,y:112.25},0).wait(1).to({scaleX:0.5931,scaleY:0.5931,x:235.75,y:110.6},0).wait(1).to({scaleX:0.5887,scaleY:0.5887,x:236.9,y:109.1},0).wait(1).to({scaleX:0.5842,scaleY:0.5842,x:237.95,y:107.75},0).wait(1).to({scaleX:0.5798,scaleY:0.5798,x:238.9,y:106.55},0).wait(1).to({scaleX:0.5754,scaleY:0.5754,x:239.8,y:105.35},0).wait(1).to({scaleX:0.5709,scaleY:0.5709,x:240.7,y:104.3},0).wait(1).to({scaleX:0.5665,scaleY:0.5665,x:241.55,y:103.3},0).wait(1).to({scaleX:0.5621,scaleY:0.5621,x:242.35,y:102.4},0).wait(1).to({scaleX:0.5576,scaleY:0.5576,x:243.1,y:101.5},0).wait(1).to({scaleX:0.5532,scaleY:0.5532,x:243.85,y:100.7},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,x:244.7,y:99.9},0).wait(1).to({scaleX:0.5443,scaleY:0.5443,x:245.4,y:99.2},0).wait(1).to({scaleX:0.5399,scaleY:0.5399,x:246.15,y:98.5},0).wait(1).to({scaleX:0.5355,scaleY:0.5355,x:246.85,y:97.85},0).wait(1).to({scaleX:0.5311,scaleY:0.5311,x:247.65,y:97.25},0).wait(1).to({scaleX:0.5266,scaleY:0.5266,x:248.35,y:96.7},0).wait(1).to({scaleX:0.5222,scaleY:0.5222,x:249,y:96.1},0).wait(1).to({scaleX:0.5178,scaleY:0.5178,x:249.7,y:95.5},0).wait(1).to({scaleX:0.5133,scaleY:0.5133,x:250.45,y:95},0).wait(1).to({scaleX:0.5089,scaleY:0.5089,x:251.15,y:94.55},0).wait(1).to({scaleX:0.5045,scaleY:0.5045,x:251.85,y:94.05},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:252.5,y:93.6},0).wait(1).to({scaleX:0.4956,scaleY:0.4956,x:253.25,y:93.15},0).wait(1).to({scaleX:0.4911,scaleY:0.4911,x:253.9,y:92.8},0).wait(1).to({scaleX:0.4867,scaleY:0.4867,x:254.6,y:92.4},0).wait(1).to({scaleX:0.4823,scaleY:0.4823,x:255.3,y:92},0).wait(1).to({scaleX:0.4778,scaleY:0.4778,x:256,y:91.65},0).wait(1).to({scaleX:0.4734,scaleY:0.4734,x:256.65,y:91.25},0).wait(1).to({scaleX:0.469,scaleY:0.469,x:257.4,y:90.95},0).wait(1).to({scaleX:0.4646,scaleY:0.4646,x:258.05,y:90.65},0).wait(1).to({scaleX:0.4601,scaleY:0.4601,x:258.75,y:90.3},0).wait(1).to({scaleX:0.4557,scaleY:0.4557,x:259.4,y:90.05},0).wait(1).to({scaleX:0.4513,scaleY:0.4513,x:260.05,y:89.75},0).wait(1).to({scaleX:0.4468,scaleY:0.4468,x:260.75,y:89.45},0).wait(1).to({scaleX:0.4424,scaleY:0.4424,x:261.4,y:89.15},0).wait(1).to({scaleX:0.438,scaleY:0.438,x:262.05,y:88.85},0).wait(1).to({scaleX:0.4335,scaleY:0.4335,x:262.65,y:88.65},0).wait(1).to({scaleX:0.4291,scaleY:0.4291,x:263.25,y:88.4},0).wait(1).to({scaleX:0.4247,scaleY:0.4247,x:263.95,y:88.15},0).wait(1).to({scaleX:0.4202,scaleY:0.4202,x:264.6,y:87.9},0).wait(1).to({scaleX:0.4158,scaleY:0.4158,x:265.2,y:87.75},0).wait(1).to({scaleX:0.4114,scaleY:0.4114,x:265.8,y:87.5},0).wait(1).to({scaleX:0.4069,scaleY:0.4069,x:266.5,y:87.3},0).wait(1).to({scaleX:0.4025,scaleY:0.4025,x:267.1,y:87.1},0).wait(1).to({scaleX:0.3981,scaleY:0.3981,x:267.7,y:86.95},0).wait(1).to({scaleX:0.3936,scaleY:0.3936,x:268.3,y:86.8},0).wait(1).to({scaleX:0.3892,scaleY:0.3892,x:268.95,y:86.6},0).wait(1).to({scaleX:0.3848,scaleY:0.3848,x:269.65,y:86.45},0).wait(1).to({scaleX:0.3803,scaleY:0.3803,x:270.25,y:86.35},0).wait(1).to({scaleX:0.3759,scaleY:0.3759,x:270.85,y:86.2},0).wait(1).to({scaleX:0.3715,scaleY:0.3715,x:271.5,y:86.05},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,x:272.1,y:85.9},0).wait(1).to({scaleX:0.3626,scaleY:0.3626,x:272.75,y:85.85},0).wait(1).to({scaleX:0.3582,scaleY:0.3582,x:273.35,y:85.75},0).wait(1).to({scaleX:0.3537,scaleY:0.3537,x:274,y:85.55},0).wait(1).to({scaleX:0.3493,scaleY:0.3493,x:274.6,y:85.45},0).wait(1).to({scaleX:0.3449,scaleY:0.3449,x:275.25},0).wait(1).to({scaleX:0.3405,scaleY:0.3405,x:275.85,y:85.35},0).wait(1).to({scaleX:0.336,scaleY:0.336,x:276.5,y:85.25},0).wait(1).to({scaleX:0.3316,scaleY:0.3316,x:277.1,y:85.2},0).wait(1).to({scaleX:0.3271,scaleY:0.3271,x:277.7},0).wait(1).to({scaleX:0.3227,scaleY:0.3227,x:278.35,y:85.15},0).wait(1).to({scaleX:0.3183,scaleY:0.3183,x:279,y:85.1},0).wait(1).to({scaleX:0.3138,scaleY:0.3138,x:279.6,y:85.05},0).wait(1).to({scaleX:0.3094,scaleY:0.3094,x:280.2},0).wait(1).to({scaleX:0.305,scaleY:0.305,x:280.85,y:85},0).wait(1).to({scaleX:0.3005,scaleY:0.3005,x:281.45},0).wait(1).to({scaleX:0.2961,scaleY:0.2961,x:282.05},0).wait(1).to({scaleX:0.2917,scaleY:0.2917,x:282.65},0).wait(1).to({scaleX:0.2872,scaleY:0.2872,x:283.25,y:85.05},0).wait(1).to({scaleX:0.2828,scaleY:0.2828,x:283.9},0).wait(1).to({scaleX:0.2784,scaleY:0.2784,x:284.55},0).wait(1).to({scaleX:0.274,scaleY:0.274,x:285.15},0).wait(1).to({scaleX:0.2695,scaleY:0.2695,x:285.8,y:85.15},0).wait(1).to({scaleX:0.2651,scaleY:0.2651,x:286.4},0).wait(1).to({scaleX:0.2607,scaleY:0.2607,x:287.05,y:85.2},0).wait(1).to({scaleX:0.2562,scaleY:0.2562,x:287.65,y:85.25},0).wait(1).to({scaleX:0.2518,scaleY:0.2518,x:288.3,y:85.35},0).wait(1).to({scaleX:0.2474,scaleY:0.2474,x:288.9,y:85.4},0).wait(1).to({scaleX:0.2429,scaleY:0.2429,x:289.5,y:85.45},0).wait(1).to({scaleX:0.2385,scaleY:0.2385,x:290.15,y:85.5},0).wait(1).to({scaleX:0.2341,scaleY:0.2341,x:290.8,y:85.6},0).wait(1).to({scaleX:0.2296,scaleY:0.2296,x:291.4,y:85.7},0).wait(1).to({scaleX:0.2252,scaleY:0.2252,x:292,y:85.8},0).wait(1).to({scaleX:0.2208,scaleY:0.2208,x:292.6,y:85.85},0).wait(1).to({scaleX:0.2163,scaleY:0.2163,x:293.3,y:86},0).wait(1).to({scaleX:0.2119,scaleY:0.2119,x:293.9,y:86.1},0).wait(1).to({scaleX:0.2075,scaleY:0.2075,x:294.5,y:86.2},0).wait(1).to({scaleX:0.203,scaleY:0.203,x:295.1,y:86.3},0).wait(1).to({scaleX:0.1986,scaleY:0.1986,x:295.8,y:86.45},0).wait(1).to({scaleX:0.1942,scaleY:0.1942,x:296.4,y:86.6},0).wait(1).to({scaleX:0.1897,scaleY:0.1897,x:297,y:86.7},0).wait(1).to({scaleX:0.1853,scaleY:0.1853,x:297.6,y:87.45},0).wait(1));

	// Layer_9
	this.instance_10 = new lib.Symbol11();
	this.instance_10.setTransform(297.6,87.45,0.1853,0.1853);

	this.instance_11 = new lib.Symbol30();
	this.instance_11.setTransform(56.8,190.85,0.6577,0.6577);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleX:0.1898,scaleY:0.1898,x:291.8,y:86.55},0).wait(1).to({scaleX:0.1943,scaleY:0.1943,x:286,y:86.25},0).wait(1).to({scaleX:0.1987,scaleY:0.1987,x:280.2,y:85.95},0).wait(1).to({scaleX:0.2032,scaleY:0.2032,x:274.35,y:85.65},0).wait(1).to({scaleX:0.2077,scaleY:0.2077,x:268.6,y:85.4},0).wait(1).to({scaleX:0.2122,scaleY:0.2122,x:262.75,y:85.15},0).wait(1).to({scaleX:0.2166,scaleY:0.2166,x:257,y:84.85},0).wait(1).to({scaleX:0.2211,scaleY:0.2211,x:251.2,y:84.6},0).wait(1).to({scaleX:0.2256,scaleY:0.2256,x:245.35,y:84.35},0).wait(1).to({scaleX:0.2301,scaleY:0.2301,x:239.6,y:84.15},0).wait(1).to({scaleX:0.2346,scaleY:0.2346,x:233.75,y:83.9},0).wait(1).to({scaleX:0.239,scaleY:0.239,x:228,y:83.7},0).wait(1).to({scaleX:0.2435,scaleY:0.2435,x:222.15,y:83.45},0).wait(1).to({scaleX:0.248,scaleY:0.248,x:216.4,y:83.3},0).wait(1).to({scaleX:0.2525,scaleY:0.2525,x:210.7,y:83.1},0).wait(1).to({scaleX:0.2569,scaleY:0.2569,x:204.9,y:82.9},0).wait(1).to({scaleX:0.2614,scaleY:0.2614,x:199.15,y:82.75},0).wait(1).to({scaleX:0.2659,scaleY:0.2659,x:193.4,y:82.55},0).wait(1).to({scaleX:0.2704,scaleY:0.2704,x:187.65,y:82.35},0).wait(1).to({scaleX:0.2748,scaleY:0.2748,x:181.9,y:82.2},0).wait(1).to({scaleX:0.2793,scaleY:0.2793,x:176.15,y:82.05},0).wait(1).to({scaleX:0.2838,scaleY:0.2838,x:170.4,y:81.95},0).wait(1).to({scaleX:0.2883,scaleY:0.2883,x:164.65,y:81.8},0).wait(1).to({scaleX:0.2928,scaleY:0.2928,x:158.9,y:81.65},0).wait(1).to({scaleX:0.2972,scaleY:0.2972,x:153.1,y:81.55},0).wait(1).to({scaleX:0.3017,scaleY:0.3017,x:147.4,y:81.45},0).wait(1).to({scaleX:0.3062,scaleY:0.3062,x:141.6,y:81.3},0).wait(1).to({scaleX:0.3107,scaleY:0.3107,x:135.9,y:81.25},0).wait(1).to({scaleX:0.3151,scaleY:0.3151,x:130.1,y:81.1},0).wait(1).to({scaleX:0.3196,scaleY:0.3196,x:124.4},0).wait(1).to({scaleX:0.3241,scaleY:0.3241,x:118.6,y:81},0).wait(1).to({scaleX:0.3286,scaleY:0.3286,x:112.85,y:80.95},0).wait(1).to({scaleX:0.3331,scaleY:0.3331,x:107.15,y:80.9},0).wait(1).to({scaleX:0.3375,scaleY:0.3375,x:101.35},0).wait(1).to({scaleX:0.342,scaleY:0.342,x:95.65,y:80.8},0).wait(1).to({scaleX:0.3465,scaleY:0.3465,x:89.85},0).wait(1).to({scaleX:0.351,scaleY:0.351,x:84.05},0).wait(1).to({scaleX:0.3554,scaleY:0.3554,x:78.3,y:80.85},0).wait(1).to({scaleX:0.3599,scaleY:0.3599,x:72.55,y:80.8},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,x:66.85,y:80.85},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:61.05,y:80.9},0).wait(1).to({scaleX:0.3734,scaleY:0.3734,x:55.3,y:80.95},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:49.5},0).wait(1).to({scaleX:0.3823,scaleY:0.3823,x:43.8,y:81.05},0).wait(1).to({scaleX:0.3868,scaleY:0.3868,x:38.05,y:81.1},0).wait(1).to({scaleX:0.3913,scaleY:0.3913,x:32.3,y:81.2},0).wait(1).to({scaleX:0.3957,scaleY:0.3957,x:26.5,y:81.3},0).wait(1).to({scaleX:0.4002,scaleY:0.4002,x:20.75,y:81.4},0).wait(1).to({scaleX:0.4047,scaleY:0.4047,x:15.05,y:81.55},0).wait(1).to({scaleX:0.4092,scaleY:0.4092,x:9.25,y:81.65},0).wait(1).to({scaleX:0.4136,scaleY:0.4136,x:3.5,y:81.8},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,x:-2.25,y:82},0).wait(1).to({scaleX:0.4226,scaleY:0.4226,x:-8.05,y:82.15},0).wait(1).to({scaleX:0.4271,scaleY:0.4271,x:-13.8,y:82.35},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:-19.5,y:82.55},0).wait(1).to({scaleX:0.436,scaleY:0.436,x:-25.2,y:82.75},0).wait(1).to({scaleX:0.4405,scaleY:0.4405,x:-31,y:83},0).wait(1).to({scaleX:0.445,scaleY:0.445,x:-36.75,y:83.2},0).wait(1).to({scaleX:0.4495,scaleY:0.4495,x:-42.5,y:83.45},0).wait(1).to({scaleX:0.4539,scaleY:0.4539,x:-48.25,y:83.75},0).wait(1).to({scaleX:0.4584,scaleY:0.4584,x:-54,y:84.05},0).wait(1).to({scaleX:0.4629,scaleY:0.4629,x:-59.75,y:84.3},0).wait(1).to({scaleX:0.4674,scaleY:0.4674,x:-65.45,y:84.65},0).wait(1).to({scaleX:0.4719,scaleY:0.4719,x:-71.25,y:85},0).wait(1).to({scaleX:0.4763,scaleY:0.4763,x:-76.95,y:85.35},0).wait(1).to({scaleX:0.4808,scaleY:0.4808,x:-82.75,y:85.7},0).wait(1).to({scaleX:0.4853,scaleY:0.4853,x:-88.4,y:86.1},0).wait(1).to({scaleX:0.4898,scaleY:0.4898,x:-94.15,y:86.5},0).wait(1).to({scaleX:0.4942,scaleY:0.4942,x:-99.9,y:86.95},0).wait(1).to({scaleX:0.4987,scaleY:0.4987,x:-105.6,y:87.35},0).wait(1).to({scaleX:0.5032,scaleY:0.5032,x:-111.35,y:87.85},0).wait(1).to({scaleX:0.5077,scaleY:0.5077,x:-116.95,y:88.3},0).wait(1).to({scaleX:0.5121,scaleY:0.5121,x:-122.55,y:88.75},0).wait(1).to({scaleX:0.5166,scaleY:0.5166,x:-128.15,y:89.2},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:-133.7,y:89.75},0).wait(1).to({scaleX:0.5256,scaleY:0.5256,x:-139.3,y:90.25},0).wait(1).to({scaleX:0.5301,scaleY:0.5301,x:-144.85,y:90.85},0).wait(1).to({scaleX:0.5345,scaleY:0.5345,x:-150.4,y:91.35},0).wait(1).to({scaleX:0.539,scaleY:0.539,x:-155.95,y:92.05},0).wait(1).to({scaleX:0.5435,scaleY:0.5435,x:-161.5,y:92.6},0).wait(1).to({scaleX:0.548,scaleY:0.548,x:-167,y:93.3},0).wait(1).to({scaleX:0.5524,scaleY:0.5524,x:-172.55,y:93.95},0).wait(1).to({scaleX:0.5569,scaleY:0.5569,x:-178.05,y:94.75},0).wait(1).to({scaleX:0.5614,scaleY:0.5614,x:-183.6,y:95.5},0).wait(1).to({scaleX:0.5659,scaleY:0.5659,x:-189.05,y:96.3},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,x:-194.5,y:97.15},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,x:-200,y:98.1},0).wait(1).to({scaleX:0.5793,scaleY:0.5793,x:-205.4,y:99.05},0).wait(1).to({scaleX:0.5838,scaleY:0.5838,x:-210.8,y:100.05},0).wait(1).to({scaleX:0.5883,scaleY:0.5883,x:-216.15,y:101.2},0).wait(1).to({scaleX:0.5927,scaleY:0.5927,x:-221.55,y:102.45},0).wait(1).to({scaleX:0.5972,scaleY:0.5972,x:-226.8,y:103.75},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:-231.95,y:105.15},0).wait(1).to({scaleX:0.6062,scaleY:0.6062,x:-237.15,y:106.75},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:-242.1,y:108.4},0).wait(1).to({scaleX:0.6151,scaleY:0.6151,x:-247,y:110.3},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,x:-251.6,y:112.4},0).wait(1).to({scaleX:0.6241,scaleY:0.6241,x:-255.9,y:114.75},0).wait(1).to({scaleX:0.6286,scaleY:0.6286,x:-259.7,y:117.2},0).to({_off:true},1).wait(300));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(198).to({_off:false},0).wait(1).to({scaleX:0.6534,scaleY:0.6534,x:56.2,y:187.95},0).wait(1).to({scaleX:0.6491,scaleY:0.6491,x:56.65,y:184.75},0).wait(1).to({scaleX:0.6449,scaleY:0.6449,x:58.3,y:181.45},0).wait(1).to({scaleX:0.6406,scaleY:0.6406,x:60.55,y:178.45},0).wait(1).to({scaleX:0.6363,scaleY:0.6363,x:63.25,y:175.75},0).wait(1).to({scaleX:0.632,scaleY:0.632,x:66.15,y:173.35},0).wait(1).to({scaleX:0.6277,scaleY:0.6277,x:69.15,y:171.15},0).wait(1).to({scaleX:0.6235,scaleY:0.6235,x:72.25,y:169.1},0).wait(1).to({scaleX:0.6192,scaleY:0.6192,x:75.35,y:167.2},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,x:78.55,y:165.45},0).wait(1).to({scaleX:0.6106,scaleY:0.6106,x:81.8,y:163.7},0).wait(1).to({scaleX:0.6064,scaleY:0.6064,x:85,y:162},0).wait(1).to({scaleX:0.6021,scaleY:0.6021,x:88.3,y:160.4},0).wait(1).to({scaleX:0.5978,scaleY:0.5978,x:91.6,y:158.85},0).wait(1).to({scaleX:0.5935,scaleY:0.5935,x:94.8,y:157.4},0).wait(1).to({scaleX:0.5892,scaleY:0.5892,x:98.15,y:155.9},0).wait(1).to({scaleX:0.585,scaleY:0.585,x:101.4,y:154.5},0).wait(1).to({scaleX:0.5807,scaleY:0.5807,x:104.75,y:153.1},0).wait(1).to({scaleX:0.5764,scaleY:0.5764,x:108.1,y:151.7},0).wait(1).to({scaleX:0.5721,scaleY:0.5721,x:111.4,y:150.4},0).wait(1).to({scaleX:0.5678,scaleY:0.5678,x:114.75,y:149.1},0).wait(1).to({scaleX:0.5636,scaleY:0.5636,x:118.1,y:147.9},0).wait(1).to({scaleX:0.5593,scaleY:0.5593,x:121.45,y:146.65},0).wait(1).to({scaleX:0.555,scaleY:0.555,x:124.85,y:145.4},0).wait(1).to({scaleX:0.5507,scaleY:0.5507,x:128.15,y:144.15},0).wait(1).to({scaleX:0.5464,scaleY:0.5464,x:131.55,y:142.95},0).wait(1).to({scaleX:0.5422,scaleY:0.5422,x:134.9,y:141.8},0).wait(1).to({scaleX:0.5379,scaleY:0.5379,x:138.3,y:140.65},0).wait(1).to({scaleX:0.5336,scaleY:0.5336,x:141.8,y:139.45},0).wait(1).to({scaleX:0.5293,scaleY:0.5293,x:145.2,y:138.25},0).wait(1).to({scaleX:0.5251,scaleY:0.5251,x:148.7,y:137.1},0).wait(1).to({scaleX:0.5208,scaleY:0.5208,x:152.2,y:135.95},0).wait(1).to({scaleX:0.5165,scaleY:0.5165,x:155.6,y:134.9},0).wait(1).to({scaleX:0.5122,scaleY:0.5122,x:159.1,y:133.8},0).wait(1).to({scaleX:0.5079,scaleY:0.5079,x:162.55,y:132.7},0).wait(1).to({scaleX:0.5037,scaleY:0.5037,x:166.05,y:131.6},0).wait(1).to({scaleX:0.4994,scaleY:0.4994,x:169.55,y:130.5},0).wait(1).to({scaleX:0.4951,scaleY:0.4951,x:173,y:129.45},0).wait(1).to({scaleX:0.4908,scaleY:0.4908,x:176.55,y:128.45},0).wait(1).to({scaleX:0.4866,scaleY:0.4866,x:180,y:127.4},0).wait(1).to({scaleX:0.4823,scaleY:0.4823,x:183.5,y:126.35},0).wait(1).to({scaleX:0.478,scaleY:0.478,x:187.05,y:125.35},0).wait(1).to({scaleX:0.4737,scaleY:0.4737,x:190.5,y:124.35},0).wait(1).to({scaleX:0.4694,scaleY:0.4694,x:194.05,y:123.35},0).wait(1).to({scaleX:0.4651,scaleY:0.4651,x:197.5,y:122.4},0).wait(1).to({scaleX:0.4609,scaleY:0.4609,x:201.05,y:121.5},0).wait(1).to({scaleX:0.4566,scaleY:0.4566,x:204.6,y:120.55},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:208.05,y:119.6},0).wait(1).to({scaleX:0.448,scaleY:0.448,x:211.6,y:118.65},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,x:215.1,y:117.7},0).wait(1).to({scaleX:0.4395,scaleY:0.4395,x:218.65,y:116.85},0).wait(1).to({scaleX:0.4352,scaleY:0.4352,x:222.2,y:115.95},0).wait(1).to({scaleX:0.4309,scaleY:0.4309,x:225.7,y:115.05},0).wait(1).to({scaleX:0.4266,scaleY:0.4266,x:229.25,y:114.15},0).wait(1).to({scaleX:0.4224,scaleY:0.4224,x:232.8,y:113.25},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,x:236.3,y:112.4},0).wait(1).to({scaleX:0.4138,scaleY:0.4138,x:239.85,y:111.65},0).wait(1).to({scaleX:0.4095,scaleY:0.4095,x:243.35,y:110.8},0).wait(1).to({scaleX:0.4053,scaleY:0.4053,x:246.9,y:109.95},0).wait(1).to({scaleX:0.401,scaleY:0.401,x:250.5,y:109.1},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:254,y:108.3},0).wait(1).to({scaleX:0.3924,scaleY:0.3924,x:257.55,y:107.45},0).wait(1).to({scaleX:0.3881,scaleY:0.3881,x:261.05,y:106.7},0).wait(1).to({scaleX:0.3839,scaleY:0.3839,x:264.65,y:105.9},0).wait(1).to({scaleX:0.3796,scaleY:0.3796,x:268.2,y:105.1},0).wait(1).to({scaleX:0.3753,scaleY:0.3753,x:271.7,y:104.3},0).wait(1).to({scaleX:0.371,scaleY:0.371,x:275.3,y:103.55},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:278.8,y:102.75},0).wait(1).to({scaleX:0.3625,scaleY:0.3625,x:282.4,y:102.05},0).wait(1).to({scaleX:0.3582,scaleY:0.3582,x:285.95,y:101.35},0).wait(1).to({scaleX:0.3539,scaleY:0.3539,x:289.5,y:100.6},0).wait(1).to({scaleX:0.3496,scaleY:0.3496,x:293.05,y:99.85},0).wait(1).to({scaleX:0.3453,scaleY:0.3453,x:296.6,y:99.1},0).wait(1).to({scaleX:0.3411,scaleY:0.3411,x:300.15,y:98.4},0).wait(1).to({scaleX:0.3368,scaleY:0.3368,x:303.75,y:97.7},0).wait(1).to({scaleX:0.3325,scaleY:0.3325,x:307.25,y:97},0).wait(1).to({scaleX:0.3282,scaleY:0.3282,x:310.85,y:96.3},0).wait(1).to({scaleX:0.324,scaleY:0.324,x:314.4,y:95.6},0).wait(1).to({scaleX:0.3197,scaleY:0.3197,x:317.9,y:94.9},0).wait(1).to({scaleX:0.3154,scaleY:0.3154,x:321.5,y:94.2},0).wait(1).to({scaleX:0.3111,scaleY:0.3111,x:325.05,y:93.6},0).wait(1).to({scaleX:0.3068,scaleY:0.3068,x:328.65,y:92.95},0).wait(1).to({scaleX:0.3026,scaleY:0.3026,x:332.2,y:92.3},0).wait(1).to({scaleX:0.2983,scaleY:0.2983,x:335.75,y:91.6},0).wait(1).to({scaleX:0.294,scaleY:0.294,x:339.35,y:90.95},0).wait(1).to({scaleX:0.2897,scaleY:0.2897,x:342.85,y:90.3},0).wait(1).to({scaleX:0.2854,scaleY:0.2854,x:346.45,y:89.65},0).wait(1).to({scaleX:0.2812,scaleY:0.2812,x:350,y:89},0).wait(1).to({scaleX:0.2769,scaleY:0.2769,x:353.55,y:88.35},0).wait(1).to({scaleX:0.2726,scaleY:0.2726,x:357.15,y:87.7},0).wait(1).to({scaleX:0.2683,scaleY:0.2683,x:360.7,y:87.1},0).wait(1).to({scaleX:0.264,scaleY:0.264,x:364.3,y:86.45},0).wait(1).to({scaleX:0.2598,scaleY:0.2598,x:367.85,y:85.9},0).wait(1).to({scaleX:0.2555,scaleY:0.2555,x:371.45,y:85.35},0).wait(1).to({scaleX:0.2512,scaleY:0.2512,x:375.05,y:84.75},0).wait(1).to({scaleX:0.2469,scaleY:0.2469,x:378.65,y:84.15},0).wait(1).to({scaleX:0.2427,scaleY:0.2427,x:382.2,y:83.6},0).wait(1).to({scaleX:0.2384,scaleY:0.2384,x:385.8,y:83},0).wait(1).to({scaleX:0.2341,scaleY:0.2341,x:389.35,y:82.5},0).wait(1).to({scaleX:0.2298,scaleY:0.2298,x:392.95,y:81.9},0).wait(1).to({scaleX:0.2345,scaleY:0.2345,x:394.85,y:81.05},0).wait(1).to({scaleX:0.2393,scaleY:0.2393,x:396.8,y:80.15},0).wait(1).to({scaleX:0.244,scaleY:0.244,x:398.75,y:79.3},0).wait(1).to({scaleX:0.2487,scaleY:0.2487,x:400.65,y:78.4},0).wait(1).to({scaleX:0.2534,scaleY:0.2534,x:402.6,y:77.55},0).wait(1).to({scaleX:0.2581,scaleY:0.2581,x:404.5,y:76.65},0).wait(1).to({scaleX:0.2629,scaleY:0.2629,x:406.45,y:75.85},0).wait(1).to({scaleX:0.2676,scaleY:0.2676,x:408.4,y:75},0).wait(1).to({scaleX:0.2723,scaleY:0.2723,x:410.35,y:74.15},0).wait(1).to({scaleX:0.277,scaleY:0.277,x:412.25,y:73.3},0).wait(1).to({scaleX:0.2817,scaleY:0.2817,x:414.2,y:72.4},0).wait(1).to({scaleX:0.2865,scaleY:0.2865,x:416.15,y:71.65},0).wait(1).to({scaleX:0.2912,scaleY:0.2912,x:418.1,y:70.75},0).wait(1).to({scaleX:0.2959,scaleY:0.2959,x:420,y:69.95},0).wait(1).to({scaleX:0.3006,scaleY:0.3006,x:421.9,y:69.15},0).wait(1).to({scaleX:0.3054,scaleY:0.3054,x:423.85,y:68.3},0).wait(1).to({scaleX:0.3101,scaleY:0.3101,x:425.85,y:67.5},0).wait(1).to({scaleX:0.3148,scaleY:0.3148,x:427.75,y:66.7},0).wait(1).to({scaleX:0.3195,scaleY:0.3195,x:429.7,y:65.85},0).wait(1).to({scaleX:0.3242,scaleY:0.3242,x:431.65,y:65.05},0).wait(1).to({scaleX:0.329,scaleY:0.329,x:433.6,y:64.3},0).wait(1).to({scaleX:0.3337,scaleY:0.3337,x:435.55,y:63.45},0).wait(1).to({scaleX:0.3384,scaleY:0.3384,x:437.5,y:62.7},0).wait(1).to({scaleX:0.3431,scaleY:0.3431,x:439.45,y:61.9},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:441.4,y:61.15},0).wait(1).to({scaleX:0.3526,scaleY:0.3526,x:443.35,y:60.4},0).wait(1).to({scaleX:0.3573,scaleY:0.3573,x:445.3,y:59.55},0).wait(1).to({scaleX:0.362,scaleY:0.362,x:447.3,y:58.85},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:449.25,y:58.1},0).wait(1).to({scaleX:0.3714,scaleY:0.3714,x:451.25,y:57.3},0).wait(1).to({scaleX:0.3762,scaleY:0.3762,x:453.2,y:56.6},0).wait(1).to({scaleX:0.3809,scaleY:0.3809,x:455.15,y:55.85},0).wait(1).to({scaleX:0.3856,scaleY:0.3856,x:457.15,y:55.1},0).wait(1).to({scaleX:0.3903,scaleY:0.3903,x:459.1,y:54.4},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,x:461.05,y:53.7},0).wait(1).to({scaleX:0.3998,scaleY:0.3998,x:463,y:52.9},0).wait(1).to({scaleX:0.4045,scaleY:0.4045,x:465,y:52.25},0).wait(1).to({scaleX:0.4092,scaleY:0.4092,x:467,y:51.5},0).wait(1).to({scaleX:0.4139,scaleY:0.4139,x:468.95,y:50.85},0).wait(1).to({scaleX:0.4186,scaleY:0.4186,x:470.95,y:50.15},0).wait(1).to({scaleX:0.4234,scaleY:0.4234,x:472.9,y:49.45},0).wait(1).to({scaleX:0.4281,scaleY:0.4281,x:474.9,y:48.8},0).wait(1).to({scaleX:0.4328,scaleY:0.4328,x:476.9,y:48.1},0).wait(1).to({scaleX:0.4375,scaleY:0.4375,x:478.85,y:47.4},0).wait(1).to({scaleX:0.4422,scaleY:0.4422,x:480.85,y:46.75},0).wait(1).to({scaleX:0.447,scaleY:0.447,x:482.8,y:46.15},0).wait(1).to({scaleX:0.4517,scaleY:0.4517,x:484.9,y:45.5},0).wait(1).to({scaleX:0.4564,scaleY:0.4564,x:486.85,y:44.85},0).wait(1).to({scaleX:0.4611,scaleY:0.4611,x:488.85,y:44.25},0).wait(1).to({scaleX:0.4659,scaleY:0.4659,x:490.8,y:43.55},0).wait(1).to({scaleX:0.4706,scaleY:0.4706,x:492.85,y:43},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:494.85,y:42.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:496.85,y:41.75},0).wait(1).to({scaleX:0.4847,scaleY:0.4847,x:498.85,y:41.15},0).wait(1).to({scaleX:0.4894,scaleY:0.4894,x:500.85,y:40.55},0).wait(1).to({scaleX:0.4942,scaleY:0.4942,x:502.85,y:40},0).wait(1).to({scaleX:0.4989,scaleY:0.4989,x:504.9,y:39.4},0).wait(1).to({scaleX:0.5036,scaleY:0.5036,x:506.85,y:38.85},0).wait(1).to({scaleX:0.5083,scaleY:0.5083,x:508.85,y:38.3},0).wait(1).to({scaleX:0.5131,scaleY:0.5131,x:510.85,y:37.75},0).wait(1).to({scaleX:0.5178,scaleY:0.5178,x:512.85,y:37.2},0).wait(1).to({scaleX:0.5225,scaleY:0.5225,x:514.65,y:36.7},0).wait(1).to({scaleX:0.5272,scaleY:0.5272,x:516.6,y:36.2},0).wait(1).to({scaleX:0.532,scaleY:0.532,x:518.5,y:35.65},0).wait(1).to({scaleX:0.5367,scaleY:0.5367,x:520.35,y:35.2},0).wait(1).to({scaleX:0.5414,scaleY:0.5414,x:522.25,y:34.65},0).wait(1).to({scaleX:0.5461,scaleY:0.5461,x:524.2,y:34.25},0).wait(1).to({scaleX:0.5508,scaleY:0.5508,x:526.1,y:33.75},0).wait(1).to({scaleX:0.5555,scaleY:0.5555,x:527.95,y:33.3},0).wait(1).to({scaleX:0.5603,scaleY:0.5603,x:529.9,y:32.85},0).wait(1).to({scaleX:0.565,scaleY:0.565,x:531.75,y:32.45},0).wait(1).to({scaleX:0.5697,scaleY:0.5697,x:533.7,y:32.05},0).wait(1).to({scaleX:0.5744,scaleY:0.5744,x:535.6,y:31.65},0).wait(1).to({scaleX:0.5791,scaleY:0.5791,x:537.5,y:31.3},0).wait(1).to({scaleX:0.5839,scaleY:0.5839,x:539.35,y:30.85},0).wait(1).to({scaleX:0.5886,scaleY:0.5886,x:541.3,y:30.55},0).wait(1).to({scaleX:0.5933,scaleY:0.5933,x:543.2,y:30.3},0).wait(1).to({scaleX:0.598,scaleY:0.598,x:545.15,y:29.9},0).wait(1).to({scaleX:0.6028,scaleY:0.6028,x:547,y:29.7},0).wait(1).to({scaleX:0.6075,scaleY:0.6075,x:548.9,y:29.35},0).wait(1).to({scaleX:0.6122,scaleY:0.6122,x:550.85,y:29.15},0).wait(1).to({scaleX:0.6169,scaleY:0.6169,x:552.8,y:28.95},0).wait(1).to({scaleX:0.6216,scaleY:0.6216,x:554.7,y:28.8},0).wait(1).to({scaleX:0.6263,scaleY:0.6263,x:556.6,y:28.65},0).wait(1).to({scaleX:0.6311,scaleY:0.6311,x:558.5,y:28.6},0).wait(1).to({scaleX:0.6358,scaleY:0.6358,x:560.4,y:28.5},0).wait(1).to({scaleX:0.6405,scaleY:0.6405,x:562.35,y:28.55},0).wait(1).to({scaleX:0.6452,scaleY:0.6452,x:564.2,y:28.65},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:566.15,y:28.75},0).wait(1).to({scaleX:0.6547,scaleY:0.6547,x:568,y:29},0).wait(1).to({scaleX:0.6594,scaleY:0.6594,x:569.85,y:29.35},0).wait(1).to({scaleX:0.6641,scaleY:0.6641,x:571.65,y:29.8},0).wait(1).to({scaleX:0.6688,scaleY:0.6688,x:573.45,y:30.45},0).wait(1).to({scaleX:0.6736,scaleY:0.6736,x:575.1,y:31.2},0).wait(1).to({scaleX:0.6783,scaleY:0.6783,x:576.7,y:32.25},0).wait(1).to({scaleX:0.683,scaleY:0.683,x:578.05,y:33.6},0).wait(1).to({scaleX:0.6877,scaleY:0.6877,x:579,y:35.35},0).wait(1).to({scaleX:0.6924,scaleY:0.6924,x:579.45,y:37.3},0).wait(1).to({scaleX:0.6971,scaleY:0.6971,x:579.3,y:39.5},0).wait(1).to({scaleX:0.7019,scaleY:0.7019,x:578.5,y:41.6},0).wait(1).to({scaleX:0.7066,scaleY:0.7066,x:577.3,y:43.65},0).wait(1));

	// Layer_10
	this.instance_12 = new lib.Symbol5();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(400));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(328,70.5,444,1008.5);
// library properties:
lib.properties = {
	id: 'D4B9D59B51E9B641A22609C5FAA65A0A',
	width: 772,
	height: 270,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bitmap17.jpg", id:"bitmap17"},
		{src:"bitmap19.png", id:"bitmap19"},
		{src:"bitmap2.jpg", id:"bitmap2"},
		{src:"bitmap9.png", id:"bitmap9"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D4B9D59B51E9B641A22609C5FAA65A0A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;