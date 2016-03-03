(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.w_des = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// square_front_rechts
	this.instance = new lib.sq("synched",0);
	this.instance.setTransform(434.5,223,0.051,0.051,0,0,0,82.5,82.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).wait(1).to({regX:79.6,regY:79.6,scaleX:0.58,scaleY:0.58,x:432.8,y:221.3,startPosition:1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:432.3,y:220.8,startPosition:2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:432.1,y:220.6,startPosition:3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:431.9,y:220.4,startPosition:4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:431.8,y:220.3,startPosition:5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:431.7,y:220.2,startPosition:6},0).wait(1).to({scaleX:0.99,scaleY:0.99,startPosition:7},0).wait(1).to({scaleX:1,scaleY:1,x:431.6,y:220.1,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,startPosition:9},0).wait(1).to({regX:82.2,regY:82.2,scaleX:1,scaleY:1,x:434.5,y:223,startPosition:15,loop:false},0).wait(1).to({regX:79.6,regY:79.6,x:431.9,y:220.6,startPosition:16},0).wait(1).to({y:221.5,startPosition:17},0).wait(1).to({y:223.2,startPosition:18},0).wait(1).to({y:225.9,startPosition:19},0).wait(1).to({y:230,startPosition:20},0).wait(1).to({y:236.2,startPosition:21},0).wait(1).to({y:245.7,startPosition:22},0).wait(1).to({y:260.8,startPosition:23},0).wait(1).to({y:283.8,startPosition:24},0).wait(1).to({y:308.4,startPosition:25},0).wait(1).to({y:326.2,startPosition:26},0).wait(1).to({y:338.2,startPosition:27},0).wait(1).to({y:346.7,startPosition:28},0).wait(1).to({y:352.9,startPosition:29},0).wait(1).to({y:357.5,startPosition:30},0).wait(1).to({y:361,startPosition:31},0).wait(1).to({y:363.6,startPosition:32},0).wait(1).to({y:365.5,startPosition:33},0).wait(1).to({y:366.9,startPosition:34},0).wait(1).to({y:367.8,startPosition:35},0).wait(1).to({y:368.2,startPosition:36},0).wait(1).to({regX:82.2,regY:82.2,x:434.5,y:371,startPosition:45},0).wait(1).to({regX:79.6,regY:79.6,x:431.7,y:368.4,startPosition:46},0).wait(1).to({x:431.1,startPosition:47},0).wait(1).to({x:429.9,startPosition:48},0).wait(1).to({x:428,startPosition:49},0).wait(1).to({x:425.1,startPosition:50},0).wait(1).to({x:420.5,startPosition:51},0).wait(1).to({x:412.9,startPosition:52},0).wait(1).to({x:396,startPosition:53},0).wait(1).to({x:328.2,startPosition:54},0).wait(1).to({x:314.9,startPosition:55},0).wait(1).to({x:308.5,startPosition:56},0).wait(1).to({x:304.7,startPosition:57},0).wait(1).to({x:302.4,startPosition:58},0).wait(1).to({x:301,startPosition:59},0).wait(1).to({x:300.3,startPosition:60},0).wait(1).to({regX:82.2,regY:82.2,x:302.7,y:371,startPosition:64},0).wait(1).to({regX:79.6,regY:79.6,x:300.1,y:368.4,startPosition:65},0).wait(1).to({y:368.1},0).wait(1).to({scaleY:1,y:367.8},0).wait(1).to({scaleY:1,y:367.3},0).wait(1).to({scaleY:1,y:366.6},0).wait(1).to({scaleY:1,y:365.6},0).wait(1).to({scaleY:0.99,y:364.4},0).wait(1).to({scaleY:0.99,y:362.7},0).wait(1).to({scaleY:0.99,y:360.4},0).wait(1).to({scaleY:0.98,y:357.3},0).wait(1).to({scaleY:0.97,y:352.8},0).wait(1).to({scaleY:0.96,y:345.8},0).wait(1).to({scaleY:0.93,y:332.5},0).wait(1).to({scaleY:0.9,y:313.9},0).wait(1).to({scaleY:0.88,y:304.2},0).wait(1).to({scaleY:0.87,y:298.8},0).wait(1).to({scaleY:0.86,y:295.3},0).wait(1).to({scaleY:0.86,y:292.8},0).wait(1).to({scaleY:0.85,y:291.1},0).wait(1).to({scaleY:0.85,y:289.8},0).wait(1).to({scaleY:0.85,y:288.8},0).wait(1).to({scaleY:0.85,y:288.2},0).wait(1).to({scaleY:0.85,y:287.8},0).wait(1).to({scaleY:0.85,y:287.6},0).wait(1).to({regX:82.2,regY:82.2,x:302.7,y:289.7},0).wait(19).to({startPosition:65},0).to({regX:82,scaleX:0.06,scaleY:0.05},16,cjs.Ease.get(1)).wait(1));

	// square_front_links
	this.instance_1 = new lib.sq("single",0);
	this.instance_1.setTransform(162.9,358.8,0.088,0.088,90,0,0,82.4,82.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).wait(1).to({regX:79.6,regY:79.6,scaleX:0.58,scaleY:0.58,x:164.5,y:357.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:164.9,y:356.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:165.2,y:356.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:165.3,y:356.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:165.5,y:356.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:356.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:165.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:356},0).wait(1).to({scaleX:1,scaleY:1,x:165.7},0).wait(1).to({regX:82.2,regY:82.2,scaleX:1,scaleY:1,x:162.9,y:358.8,mode:"synched",loop:false},0).wait(1).to({regX:79.6,regY:79.6,x:165.5,y:355.9,startPosition:1},0).wait(1).to({y:355,startPosition:2},0).wait(1).to({y:353.2,startPosition:3},0).wait(1).to({y:350.5,startPosition:4},0).wait(1).to({y:346.2,startPosition:5},0).wait(1).to({y:339.8,startPosition:6},0).wait(1).to({x:165.4,y:330.1,startPosition:7},0).wait(1).to({y:314.6,startPosition:8},0).wait(1).to({x:165.3,y:291,startPosition:9},0).wait(1).to({x:165.2,y:265.6,startPosition:10},0).wait(1).to({y:247.4,startPosition:11},0).wait(1).to({x:165.1,y:235,startPosition:12},0).wait(1).to({y:226.3,startPosition:13},0).wait(1).to({y:220,startPosition:14},0).wait(1).to({y:215.2,startPosition:15},0).wait(1).to({y:211.6,startPosition:16},0).wait(1).to({y:208.9,startPosition:17},0).wait(1).to({y:207,startPosition:18},0).wait(1).to({y:205.6,startPosition:19},0).wait(1).to({y:204.7,startPosition:20},0).wait(1).to({y:204.2,startPosition:21},0).wait(1).to({regX:82.2,regY:82.2,x:162.5,y:206.6,startPosition:30},0).wait(1).to({regX:79.6,regY:79.6,x:165.2,y:204,startPosition:31},0).wait(1).to({x:165.9,startPosition:32},0).wait(1).to({x:167.1,startPosition:33},0).wait(1).to({x:169.1,startPosition:34},0).wait(1).to({x:172.2,startPosition:35},0).wait(1).to({x:177,startPosition:36},0).wait(1).to({x:185,startPosition:37},0).wait(1).to({x:202.8,startPosition:38},0).wait(1).to({x:274.3,startPosition:39},0).wait(1).to({x:288.3,startPosition:40},0).wait(1).to({x:295.1,startPosition:41},0).wait(1).to({x:299.1,startPosition:42},0).wait(1).to({x:301.6,startPosition:43},0).wait(1).to({x:303,startPosition:44},0).wait(1).to({x:303.8,startPosition:45},0).wait(1).to({regX:82.2,regY:82.2,x:301.4,y:206.6,startPosition:49},0).wait(1).to({regX:79.6,regY:79.6,x:304,y:204.1,startPosition:50},0).wait(1).to({y:204.2,startPosition:51},0).wait(1).to({scaleX:1,y:204.6,startPosition:52},0).wait(1).to({scaleX:1,y:205.1,startPosition:53},0).wait(1).to({scaleX:1,y:205.9,startPosition:54},0).wait(1).to({scaleX:1,y:206.9,startPosition:55},0).wait(1).to({scaleX:0.99,x:304.1,y:208.2,startPosition:56},0).wait(1).to({scaleX:0.99,y:209.9,startPosition:57},0).wait(1).to({scaleX:0.99,y:212.2,startPosition:58},0).wait(1).to({scaleX:0.98,x:304.2,y:215.4,startPosition:59},0).wait(1).to({scaleX:0.97,y:219.9,startPosition:60},0).wait(1).to({scaleX:0.96,x:304.3,y:227.1,startPosition:61},0).wait(1).to({scaleX:0.93,x:304.6,y:240.8,startPosition:62},0).wait(1).to({scaleX:0.9,x:304.8,y:259.7,startPosition:63},0).wait(1).to({scaleX:0.88,x:305,y:269.7,startPosition:64},0).wait(1).to({scaleX:0.87,x:305.1,y:275.3,startPosition:65},0).wait(1).to({scaleX:0.86,y:278.9},0).wait(1).to({scaleX:0.86,x:305.2,y:281.4},0).wait(1).to({scaleX:0.85,y:283.2},0).wait(1).to({scaleX:0.85,y:284.5},0).wait(1).to({scaleX:0.85,y:285.5},0).wait(1).to({scaleX:0.85,y:286.1},0).wait(1).to({scaleX:0.85,y:286.6},0).wait(1).to({scaleX:0.85,y:286.8},0).wait(1).to({regX:82.2,regY:82.2,x:302.7,y:289.1},0).to({_off:true},1).wait(35));

	// dotreal
	this.instance_2 = new lib.dot("synched",0);
	this.instance_2.setTransform(162.8,84,0.062,0.062,0,0,0,15.2,15.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).wait(1).to({regX:15.5,regY:15.5,scaleX:0.06,scaleY:0.06,y:84.4},0).wait(1).to({scaleX:0.07,scaleY:0.07,y:85.8},0).wait(1).to({scaleX:0.08,scaleY:0.08,y:88.1},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:91.4},0).wait(1).to({scaleX:0.12,scaleY:0.12,y:95.7},0).wait(1).to({scaleX:0.14,scaleY:0.14,y:101.1},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:107.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,y:115},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:123.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:162.9,y:133.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,y:144.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:156.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:170.3},0).wait(1).to({scaleX:0.51,scaleY:0.51,y:185.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:163,y:201.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:219.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:163.1,y:238.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:259.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:163.2,y:281.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:305.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:331.5},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:162.9,y:358.8},0).wait(1).to({x:163.5,y:358.7},0).wait(1).to({x:165.7},0).wait(1).to({x:169.8},0).wait(1).to({x:176.8},0).wait(1).to({x:188.3},0).wait(1).to({x:207.7},0).wait(1).to({x:246,y:358.6},0).wait(1).to({x:324.8,y:358.4},0).wait(1).to({x:376.7,y:358.3},0).wait(1).to({x:401.6},0).wait(1).to({x:416.2,y:358.2},0).wait(1).to({x:425.4},0).wait(1).to({x:431.2},0).wait(1).to({x:434.7},0).wait(1).to({x:436.6},0).wait(1).to({x:437.2},0).to({y:494.9,alpha:0},25,cjs.Ease.get(1)).wait(36));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EgWZAhGIAA25MAszAAAIAAW5gA2ZqNIAA24MAszAAAIAAW4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:302.2,y:293.6}).wait(15).to({graphics:null,x:0,y:0}).wait(164));

	// boven
	this.instance_3 = new lib.sqboven("synched",0);
	this.instance_3.setTransform(300.1,295.8,1,1,0,0,0,-0.1,72.8);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regY:68.8,y:360.2},0).wait(1).to({y:381.9},0).wait(1).to({y:395.8},0).wait(1).to({y:405.8},0).wait(1).to({y:413.3},0).wait(1).to({y:418.9},0).wait(1).to({y:423.2},0).wait(1).to({y:426.4},0).wait(1).to({y:428.8},0).wait(1).to({y:430.4},0).wait(1).to({y:431.5},0).wait(1).to({y:432.1},0).wait(1).to({y:432.4},0).wait(1).to({regY:72.8,y:436.4},0).to({_off:true},1).wait(164));

	// onder
	this.instance_4 = new lib.sqboven("synched",0);
	this.instance_4.setTransform(300.1,295.8,1,1,0,0,0,-0.1,72.8);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({regY:68.8,y:226.6},0).wait(1).to({y:205.9},0).wait(1).to({y:192.5},0).wait(1).to({y:183},0).wait(1).to({y:175.9},0).wait(1).to({y:170.5},0).wait(1).to({y:166.4},0).wait(1).to({y:163.4},0).wait(1).to({y:161.1},0).wait(1).to({y:159.5},0).wait(1).to({y:158.5},0).wait(1).to({y:157.9},0).wait(1).to({y:157.7},0).wait(1).to({regY:72.8,y:161.7},0).to({_off:true},1).wait(164));

	// midden
	this.instance_5 = new lib.sqboven("synched",0);
	this.instance_5.setTransform(300,295.8,0.049,0.049,0,0,0,0,72.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.1,regY:68.8,scaleX:0.6,scaleY:0.6,y:293.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:299.9,y:292.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:292.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:292},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:291.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:291.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:291.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regY:72.8,scaleX:1,scaleY:1,x:300.1,y:295.8},0).to({_off:true},15).wait(164));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_159 = new cjs.Graphics().p("AvnK1IAA1pIfPAAIAAVpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_1_graphics_159,x:307.5,y:143.6}).wait(29));

	// rectmain
	this.instance_6 = new lib.sqgroot("synched",0);
	this.instance_6.setTransform(299.8,359.9,1,1,0,0,0,137,137);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({regX:137.1,x:299.9,y:380.5},0).wait(1).to({y:389.3},0).wait(1).to({y:394.7},0).wait(1).to({y:398.5},0).wait(1).to({y:401.1},0).wait(1).to({y:402.9},0).wait(1).to({y:404.1},0).wait(1).to({y:404.9},0).wait(1).to({y:405.3},0).wait(1).to({y:405.5},0).wait(1).to({regX:137,x:299.8,y:405.6},0).to({scaleX:0.72,scaleY:0.72,x:299.9,y:374.8},9,cjs.Ease.get(-1)).to({x:412},6,cjs.Ease.get(1)).to({y:215.8},7).to({x:299.9},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:184.3},11,cjs.Ease.get(-1)).wait(1).to({regX:137.1,y:197.4},0).wait(1).to({y:204.3},0).wait(1).to({y:208.9},0).wait(1).to({y:212.2},0).wait(1).to({y:214.7},0).wait(1).to({y:216.6},0).wait(1).to({y:218},0).wait(1).to({y:219.1},0).wait(1).to({y:219.8},0).wait(1).to({y:220.3},0).wait(1).to({y:220.7},0).wait(1).to({y:220.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:137,x:299.8,y:221},0).wait(61).to({startPosition:0},0).to({regX:136.9,scaleX:0.6,x:300.8},9,cjs.Ease.get(1)).to({x:300.9,y:362.2},11).to({_off:true},1).wait(17));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_159 = new cjs.Graphics().p("AxELqIAA3UMAiJAAAIAAXUg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_2_graphics_159,x:307.8,y:440.2}).wait(29));

	// rect_boven
	this.instance_7 = new lib.sqboven("synched",0);
	this.instance_7.setTransform(402.2,88.5,1,1,0,0,0,102,4);
	this.instance_7._off = true;

	this.instance_7.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(1).to({regX:-0.1,regY:68.8,x:300.1,y:136.8},0).wait(1).to({y:129.8},0).wait(1).to({y:125.4},0).wait(1).to({y:122.4},0).wait(1).to({y:120.3},0).wait(1).to({y:118.9},0).wait(1).to({y:117.9},0).wait(1).to({y:117.3},0).wait(1).to({y:116.9},0).wait(1).to({y:116.8},0).wait(1).to({regX:102,regY:4,x:402.2,y:52},0).to({scaleX:0.72,scaleY:0.72,x:373.6,y:120},9,cjs.Ease.get(-1)).to({x:238.5},6,cjs.Ease.get(1)).to({y:362.8},7).to({x:373.6},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:402.2,y:384.2},11,cjs.Ease.get(-1)).wait(1).to({regX:-0.1,regY:68.8,x:300.1,y:441.1},0).wait(1).to({y:437.1},0).wait(1).to({y:434.3},0).wait(1).to({y:432.3},0).wait(1).to({y:430.8},0).wait(1).to({y:429.7},0).wait(1).to({y:428.9},0).wait(1).to({y:428.2},0).wait(1).to({y:427.8},0).wait(1).to({y:427.5},0).wait(1).to({y:427.3},0).wait(1).to({y:427.2},0).wait(1).to({y:427.1},0).wait(1).to({regX:102,regY:4,x:402.2,y:362.3},0).wait(61).to({startPosition:0},0).wait(1).to({regX:-0.1,regY:68.8,scaleX:0.77,x:300.6,y:427.1},0).wait(1).to({scaleX:0.7,x:300.8},0).wait(1).to({scaleX:0.66,x:300.9},0).wait(1).to({scaleX:0.64,x:301},0).wait(1).to({scaleX:0.62},0).wait(1).to({scaleX:0.61},0).wait(1).to({scaleX:0.61},0).wait(1).to({scaleX:0.6},0).wait(1).to({regX:102,regY:4,scaleX:0.6,x:362.6,y:362.3},0).to({x:362.8,y:220.6},11).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.9,299.1,775.5,601);


// symbols:
(lib.vierk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16).p("A1Y0EIAAhVMAqxAAAIAABVMAAAApeMgqxAAAg");
	this.shape.setTransform(137,137);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-8,290,290);


(lib.sqboven = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(3).p("AVYKwMgqyAAAIAD1fMAqyAAAg");
	this.shape.setTransform(-0.1,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16).p("AVYqvIADAAIAABUAVYKwIAABQAVYqvIAAVfMgqyAAAIAA1fIADAAA1aMAIAAhQA1XpbIAAhUMAqvAAA");
	this.shape_1.setTransform(-0.1,68.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.2,-8.1,494.6,161.8);


(lib.dot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsBtQgtguAAg/QAAg/AtgtQAugtA+AAQA/AAAuAtQAtAtAAA/QAAA/gtAuQguAtg/AAQg+AAgugtgAg0g0QgWAXABAdQgBAeAWAWQAXAXAdgBQAeABAXgXQAVgWAAgeQAAgdgVgXQgXgWgeABQgdgBgXAWg");
	this.shape.setTransform(15.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD22F").s().p("Ag0A0QgWgWABgeQgBgdAWgXQAXgWAdABQAegBAXAWQAVAXAAAdQAAAegVAWQgXAXgegBQgdABgXgXg");
	this.shape_1.setTransform(15.5,15.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.sqgroot = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(3).p("A1aK3IAD1fMAqyAAAIgDVf");
	this.shape.setTransform(137.4,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(3).p("AVbqvIgDVfMgqyAAAIAD1fA0LqvMAoWAAA");
	this.shape_1.setTransform(137.1,205.4);

	// Layer 1
	this.instance = new lib.vierk("synched",0);
	this.instance.setTransform(137,137,1,1,0,0,0,137,137);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(16).p("A1YBSIAAhTMAqxAAAIAABT");
	this.shape_2.setTransform(137.3,136.8);

	this.addChild(this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212,-14.9,494.3,297);


(lib.sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.dot("synched",0);
	this.instance.setTransform(0,164.4,1,1,0,0,0,15.5,15.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.34,scaleY:1.34,y:0,alpha:1},22,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:164.4,alpha:0},22,cjs.Ease.get(-1)).wait(22));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(3).p("AM2M1I5rAAIAA5pIZrAAg");
	this.shape.setTransform(82.2,82.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(66));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuFOFIAA8JIcLAAIAAcJgArlLlIXKAAIAA3JI3KAAg");
	this.shape_1.setTransform(82,82.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.4,192.9,200.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;