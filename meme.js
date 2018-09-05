alert("connect");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image();
// ctx.strokeRect(50, 50, 100, 100);
// ctx.beginPath();
// ctx.moveTo(75,75);
// ctx.lineTo(125,125);
// ctx.lineTo(125,75);
// ctx.fill();
 ctx.font = "bold 36px Impact";
 ctx.lineWidth = 3;
 ctx.strokeStyle = "black";
ctx.strokeText("CANVAS MEMES!", 100, 100);
ctx.fillStyle = "white";
ctx.fillText("CANVAS MEMES!", 100, 100);



 

image.onload = function(){
  // console.log("loadedimage");
  // ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  // var savedImage = canvas.toDataURL();
  // window.open(savedImage);
};
image.src = "ferrelmeme.jpg";
