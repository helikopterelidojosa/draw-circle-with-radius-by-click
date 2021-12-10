window.addEventListener("load", () =>{

var painting = document.getElementById("myCanvas");
var c = painting.getContext("2d");

/*
//x=0 y=0 coordinates
c.moveTo(0,0);
//x=100 y=50 coordinates
c.lineTo(100,50);
//draw line
c.stroke();


// preview how to draw a cline line
//x=0 y=100
c.moveTo(0,100);
//x=100 y=0
c.lineTo(100,0);
c.stroke();

*/

//circle
//draw circle with center click any where in canvas
//radius deffined 40px
//------------------------------------------------


function drawCircle(e){

//draw backgr rectangle with white fill corresponding canvas width and height
c.beginPath();
c.fillStyle = "white";
c.fillRect(0,0,200,200);
c.fill();

//make a click in canvas, and define value of radius
let xHoriz = e.clientX;
let yVert = e.clientY;
let radiusCircle = 40;

c.beginPath();
c.arc(xHoriz,yVert,radiusCircle,0,2*Math.PI);
c.stroke();


// line is its circles radius visually painted, calculated like this
//begining coordinates x,y=50 ,end x=100,y=50
let xRadStart = xHoriz;
//end coordinates for horizontal line are dependent on clicking x coordinates plus the previously defined rdius.
let xRadEnd = xHoriz + radiusCircle;

//draw line
c.beginPath();
c.moveTo(xRadStart,yVert);
c.lineTo(xRadEnd,yVert);
c.stroke();

};

//add event listener for mouseclick or touch screen 
painting.addEventListener("mousedown", drawCircle);


});
