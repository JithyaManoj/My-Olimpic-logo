 canvas=document.getElementById("myCanvas");

 pen=canvas.getContext("2d");
 color="violet";
 last_mouse_x=""; 
 last_mouse_y="";
 mouseEvent="";
 line_width=9;

 
 canvas.addEventListener("mousedown",J_mousedown);

 function J_mousedown(e){
      mouseEvent="mousedown";
 }

 canvas.addEventListener("mouseup",J_mouseup);

 function J_mouseup(e){
       mouseEvent="mouseup";
 }

canvas.addEventListener("mouseleave",J_mouseleave);

function J_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",N_mousemove);

function N_mousemove(e){
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=color;                                  
        pen.lineWidth=line_width;
        console.log("last position of x and y coordinates are");
        console.log("x="+last_mouse_x+ "y="+last_mouse_y);
        pen.moveTo(last_mouse_x,last_mouse_y);
        pen.lineTo(current_mouse_x,current_mouse_y);
        console.log("current position of x and y coordinates are");
        console.log("x="+current_mouse_x+ "y="+current_mouse_y);
        pen.stroke();
    }
    last_mouse_x=current_mouse_x;
    last_mouse_y=current_mouse_y;










}




 function erase(){
     pen.clearRect(0,0,canvas.width,canvas.height);

 }