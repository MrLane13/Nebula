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

    var widthLeftPaddle = canvas.width*(1/16);
    var heightLeftPaddle = canvas.height*(1/4);
    var xLeftPaddle = 2;
    var yLeftPaddle = canvas.height/2 - (heightLeftPaddle/2);
    var xLeftPaddleMaxJump = canvas.width*(1/12);
    var xLeftPaddleStart = 2;
    var shouldAdvance = false;
    var isJumping = false;

    var dr = .2;
    var dx = 2;
    var dy = -2;
    var shouldGrow = true;

    function draw() {
        spawnNebula();
        spawnPaddle();

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
    // Handle all the nebula stuff
    function spawnNebula() {
        // moveNebula();
        // Make the nebula's radius increase
        if(startRadius < maxRadius && shouldGrow) {
            reDraw();
            grow();
            drawNebula("green");
        } else {
            shouldGrow = false;
            // Make the nebula's radius decrease
            if(startRadius > minRadius) {
                reDraw();
                shrink();
                drawNebula("green");
            } else {
                shouldGrow = true;
            }
        }
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

    function drawLeftPaddle() {
        ctx.beginPath();
        ctx.rect(xLeftPaddle, yLeftPaddle, widthLeftPaddle, heightLeftPaddle);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.stroke();
        ctx.closePath();
    }
    function movePaddle() {
        if(upPressed) {
            yLeftPaddle += dy;
        } else if (downPressed) {
            yLeftPaddle += -dy;
        }
        if(spacePressed) {
            shouldAdvance = true;
            paddleJump();
        } else if(!spacePressed && isJumping) {
            paddleJump();
        }

        function paddleJump() {
            if(xLeftPaddle < xLeftPaddleMaxJump && shouldAdvance) {
                isJumping = true;
                xLeftPaddle += dx;
            } else {
                shouldAdvance = false;
                if(xLeftPaddle > xLeftPaddleStart) {
                    xLeftPaddle += -dx;
                } else {
                    isJumping = false;
                }
            }
        }
    }
    function spawnPaddle() {
        movePaddle();
        drawLeftPaddle();
    }


    setInterval(draw, refreshCanvasInterval);
}
