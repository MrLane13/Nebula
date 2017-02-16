/*
* Created by Lane Mills
* on 02/15/17
*
**/

function drawScene() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var refreshCanvasInterval = 10;

    var x = canvas.width/2;
    var y = canvas.height/2;
    var radius = 50;

    function draw() {

        drawNebula();

    }

    function drawNebula() {
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
        //flux();
    }

    setInterval(draw, refreshCanvasInterval);
}
