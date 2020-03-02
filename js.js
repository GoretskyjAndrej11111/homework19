var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

ctx.beginPath();
ctx.arc(150, 100, 20, 0, pi*2, false);
ctx.moveTo(147,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(145, 100, 2, 0, pi*2, false);
ctx.moveTo(157,100);
ctx.arc(155, 100, 2, 0, pi*2, false);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(147, 110);
ctx.lineTo(153, 110);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 30, 0, pi*2, false);
ctx.moveTo(190,220);
ctx.arc(150, 220, 40, 0, pi*2, false);
ctx.stroke();