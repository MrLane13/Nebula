/**
 * Created by lanemills on 1/1/17.
 *
 * Not really meant to be used. More for reference.
 * These were old shapes I used to experiment with
 */

function oddShapes() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

// How to draw a rectangle
    function drawRectangle() {
        // Always start with beginPath() and end with closePath()
        // This is an example of how to draw a rectangle on the canvas
        ctx.beginPath();                        // Start the drawing
        ctx.rect(xRectFilld, yRectFilld, stdWidth, stdHeight);  // Prams are (x-start, y-start, width, height)
        ctx.fillStyle = "#FF0000";              // Fills shape with hex-represented color
        ctx.fill();                             // Set this shape to the canvas with fill()
        ctx.closePath();                        // End the drawing
    }

// How to draw a triangle
    function drawTriangle() {
        ctx.beginPath();
        ctx.moveTo(xTriangle + 15, yTriangle - 10);        // x-start, y-start of the tip
        ctx.lineTo(xTriangle, yTriangle);                    // x-pos, y-pos to draw line to from tip
        ctx.lineTo(xTriangle + stdWidth, yTriangle);                    // x-pos, y-pos to draw line to from tip
        ctx.fillStyle = "#3c80ff";              // Fill shape with hex-represented color
        ctx.fill();
        ctx.closePath();
    }

// how to draw a circle
    function drawCircle(ctext,x,y,radius,startAngle,endAngle,ccw,color) {
        bounce();
        // How to draw a circle
        ctx.beginPath();
        ctx.arc(
            x, y, radius,             // x, y, radius
            startAngle,               // startAngle usually 0
            endAngle,                 // endAngle usually Math.PI * 2
            ccw                       // counter-clockwise usually false
        );
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

// draw a rectangle
    function drawUnfilledRectangle() {
        ctx.beginPath();
        ctx.rect(xRectUnfilled, yRectUnfilled, widthRectUnfilled, heightRectUnfilled);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.stroke();
        ctx.closePath();
    }
}
