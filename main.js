mouseEvent="";
var lastX,lastY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
line_width=1;

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){
    color=document.getElementById("color").value ;
    radius=document.getElementById("Radius").value ;
    mouseEvent="mousedown";

}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";
    
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseleave";
    
}

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
    curX= e.clientX-canvas.offsetLeft;
    curY= e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mousedown"){

        
        
        console.log("Last Position of X and Y Co-ordinate is");
        console.log("X= "+lastX+"  ,Y="+lastY);
        ctx.moveTo(lastX,lastY);

        console.log("Current Position of X and Y Co-ordinate is");
        console.log("X= "+curX+"  ,Y="+curY);
        ctx.lineTo(curX,curY);


        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=line_width;
        ctx.arc(curX,curY,radius,0,2*Math.PI);
        ctx.stroke();
        

    }

    lastX=curX;
    lastY=curY;

}

canvas.addEventListener("mousedown",MouseDown);
function MouseDown(e){
    color=document.getElementById("color").value ;
    console.log(color);

    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;

    console.log("X="+mouseX+"  ,Y="+mouseY);
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouseX,mouseY,50,0,2*Math.PI) ;
ctx.stroke();
}

function Clear(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}