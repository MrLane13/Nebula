/*
* Created by Lane Mills
* on 02/15/17
*
**/

function drawScene() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var refreshCanvasInterval = 10;

    var xNeb = canvas.width/2;
    var yNeb = canvas.height/2;
    var startRadius = canvas.width*(1/10);
    var maxRadius = canvas.width*(1/8);
    var minRadius = canvas.width*(1/12);

    var dr = .2;
    var dx = 2;
    var dy = -2;
    var shouldGrow = true;

    function draw() {
        moveNebula();
        if(startRadius < maxRadius && shouldGrow) {
            reDraw();
            grow();
            drawNebula("green");
        } else {
            shouldGrow = false;
            if(startRadius > minRadius) {
                reDraw();
                shrink();
                drawNebula("green");
            } else {
                shouldGrow = true;
            }
        }

    }

    function drawNebula(color) {
        ctx.beginPath();
        ctx.arc(xNeb,yNeb,startRadius,0,Math.PI*2,false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
    function reDraw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    function grow() {
        startRadius += dr;
    }
    function shrink() {
        startRadius += -dr;
    }
    function moveNebula() {
        if(rightPressed) {
            xNeb += dx;
        } else if (leftPressed) {
            xNeb += -dx;
        }

        if(upPressed) {
            yNeb += dy;
        } else if (downPressed) {
            yNeb += -dy;
        }
    }


    setInterval(draw, refreshCanvasInterval);
}
