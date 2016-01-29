//main variables
var keys = [],
  matrix = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,7,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,2,3,4,5,6,7]
  ],
  gamestate = 0

//canvas variables
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  tilesize = 24

canvas.width = tilesize*24
canvas.height = tilesize*22


//menu variables
var menu = {
  currentSelection : 0,
  statelist : [3,0,0]
}

//game variables
var game = {
  currentPiece: 0,
  currentRotation: 0,
  piecePos: [1,4]
}

//color codes
var colorCode = [
  //TODO adjust those colors to not be total shit
  "#ff0000", //red
  "#00ff00", //green
  "#0000ff", //blue
  "#ff9900", //orange
  "#00ffff", //cyan
  "#ff00ff", //purple
  "#ffff00", //yellow
  "#ffffff", //debug(white)
]