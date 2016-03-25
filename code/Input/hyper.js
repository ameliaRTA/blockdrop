var hyper = {
  speedCurve : [
    [1,5632,30,30,30,12], // [level,gravity,ARE,line delay,lock delay,DAS]
    [100,5632,24,20,26,12],
    [200,5632,20,15,23,10],
    [300,5632,16,12,21,10],
    [400,5632,14,9,19,9],
    [500,5632,12,6,18,9],
    [600,5632,10,4,17,8],
    [700,5632,8,4,16,8],
    [800,5632,6,4,15,6],
    [900,5632,4,4,15,6]
  ],
  scoreGain: [
    [1,2.25,1.55,0], //[level, line clear multipler, score/lvl, score/frame]
    [100,2.5,1.6,0],
    [200,2.75,1.65,0],
    [300,3,1.7,0],
    [400,3.25,1.75,0],
    [500,3.5,1.8,0],
    [600,3.75,1.85,0],
    [700,4,1.9,0],
    [800,5,1.95,0],
    [900,6,2,0],
  ],
  endlevel: 1000,
  ghostEnd: 0,
  ranked: false
};
