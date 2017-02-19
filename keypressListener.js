/**
 * Created by Lane Mills on 1/1/17.
 */

// button control
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;
var sKeyPressed = false;

var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

var SPACE_BAR = 32;
var S_KEY = 83;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == RIGHT_ARROW) {
        rightPressed = true;
    }
    else if(e.keyCode == LEFT_ARROW) {
        leftPressed = true;
    }
    else if(e.keyCode == UP_ARROW) {
        upPressed = true;
    }
    else if(e.keyCode == DOWN_ARROW) {
        downPressed = true;
    }
    else if(e.keyCode == SPACE_BAR) {
        spacePressed = true;
    }
    else if(e.keyCode == S_KEY) {
        sKeyPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == RIGHT_ARROW) {
        rightPressed = false;
    }
    else if (e.keyCode == LEFT_ARROW) {
        leftPressed = false;
    }
    else if (e.keyCode == UP_ARROW) {
        upPressed = false;
    }
    else if (e.keyCode == DOWN_ARROW) {
        downPressed = false;
    }
    else if(e.keyCode == SPACE_BAR) {
        spacePressed = false;
    }
    else if(e.keyCode == S_KEY) {
        sKeyPressed = false;
    }
}