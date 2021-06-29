var canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
  var color; var line_width;
   var mouseEvent="empty";
    var last_pos_of_x, last_pos_of_y;
     canvas.addEventListener("mousedown", mymousedown);
 function mymousedown(e) { color=document.getElementById("color").value;
 line_width=document.getElementById("linewidth").value; mouseEvent="mousedown";
 } canvas.addEventListener("mouseleave", mymouseleave);
  function mymouseleave(e) { mouseEvent="mouseleave"; }
   canvas.addEventListener("mouseup", mymouseup); function mymouseup(e)
    { mouseEvent="mouseup"; }
    canvas.addEventListener("mousemove", mymousemove);
     function mymousemove(e) { current_pos_of_x= e.clientX -canvas.offsetLeft;
         current_pos_of_y=e.clientY-canvas.offsetTop;
          if(mouseEvent=="mousedown") { ctx.beginPath();
             ctx.strokeStyle=color; ctx.lineWidth=line_width;
ctx.arc(current_pos_of_x,current_pos_of_y,40,0,2*Math.PI);
              ctx.moveTo(last_pos_of_x, last_pos_of_y);
               ctx.lineTo(current_pos_of_x,current_pos_of_y);
                ctx.stroke(); } last_pos_of_x=current_pos_of_x;
                 last_pos_of_y=current_pos_of_y;
                 } function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }