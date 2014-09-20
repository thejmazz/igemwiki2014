// Using time-based animation from http://viget.com/extend/time-based-animation

window.APP = window.APP || {};

APP.pause = function() {
	window.cancelAnimationFrame(APP.core.animationFrame);
};

APP.play = function() {
	APP.core.then = Date.now();
	APP.core.frame();
};

APP.core = {

	frame : function() {
		APP.core.setDelta();
		APP.core.update();
		APP.core.render();
		APP.core.animationFrame = window.requestAnimationFrame(APP.core.frame);
	},

	setDelta : function() {
		APP.core.now = Date.now();
		APP.core.delta = (APP.core.now - APP.core.then) / 1000;
		// seconds since last frame
		APP.core.then = APP.core.now;
	},

	update : function() {
		// Draw to canvas
		clearCanvas('#000');
		drawCircle(x,y,30,'#006600','#003300',false);
	},

	render : function() {
		// Update values
		
		if (x > cw - d) {
			x = cw - d;
			directionX *= -1;
		} else if (x < d) {
			x = d;
			directionX *= -1;
		}
	
		if (y < d) {
			y = d;
			directionY *= -1;
		} else if (y > ch - d) {
			y = ch - d;
			directionY *= -1;
		}
		
		x = parseInt(x + directionX * APP.core.delta * 200);
		y = y + directionY * APP.core.delta * 200;
	}
};

function clearCanvas(col) {
	ctx.beginPath();
	ctx.rect(0, 0, cw, ch);
	ctx.fillStyle = col;
	ctx.fill();
}

function drawCircle(x, y, radius, fillCol, strCol, fill) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = fillCol;
	if (fill) {
		ctx.fill();
	}

	ctx.lineWidth = 5;
	ctx.strokeStyle = strCol;
	ctx.stroke();
}

APP.play(); 