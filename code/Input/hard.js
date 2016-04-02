var hard = {
  speedCurve : [
    [1,32,30,30,30,14], // [level,gravity,ARE,line delay,lock delay,DAS]
    [25,48,30,30,30,14],
    [50,64,30,30,30,14],
    [75,96,30,30,30,14],
    [100,128,30,30,30,12],
    [125,192,30,30,30,12],
    [150,256,30,30,30,12],
    [175,384,30,30,30,12],
    [200,512,30,30,30,12],
    [225,768,30,30,30,12],
    [250,1024,30,30,30,12],
    [275,1280,30,30,30,12],
    [300,5632,30,30,30,10],
    [500,5632,24,20,26,9],
    [700,5632,20,15,23,8],
    [900,5632,16,12,21,7]
  ],
  scoreGain: [
    [1,1.8,1.3,-0.0165], //[level, line clear multipler, score/lvl, score/frame]
    [100,1.9,1.35,-0.017],
    [200,2,1.4,-0.0175],
    [300,2.5,1.5,-0.02],
    [500,3,1.8,-0.0275],
    [700,3.5,2.1,-0.0333],
    [900,4,2.4,-0.04]
  ],
  endlevel: 1000,
  ghostEnd: 0,
	invisible: false
};
