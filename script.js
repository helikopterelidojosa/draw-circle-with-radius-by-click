var molberts = document.getElementById("mansKanvas");
var konteksts = molberts.getContext("2d");

/*
//x=0 y=0 
konteksts.moveTo(0,0);
//x=100 y=50
konteksts.lineTo(100,50);
//taisit liniju
konteksts.stroke();


//Mara linija
//x=0 y=100
konteksts.moveTo(0,100);
//x=100 y=0
konteksts.lineTo(100,0);
konteksts.stroke();

*/

//Mara aplitis
//zimet apli kuram centrs atrodas kanvasa centra x=50 y=50
//radiuss 50px
//------------------------------------------------
var xHoriz = 50;
var yVert = 50;
var radiusApl = 40;

konteksts.arc(xHoriz,yVert,radiusApl,0,2*Math.PI);
konteksts.stroke();


//Kaspara linija = mara apla radiuss
//saakuma koordinates x,y=50 ,beigu koordianates x=100,y=50
var xRadSakums = 50 + radiusApl;
//beigu koordinates horizontalai linijai ir atkarigas no sakuma x un radiusa sakuma x vienads + radiusa gar
var xRadBeig = xHoriz + radiusApl;

konteksts.moveTo(xHoriz,yVert);
konteksts.lineTo(xRadBeig,yVert);
konteksts.stroke();