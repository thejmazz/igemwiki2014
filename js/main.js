// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

// Make sure this is as the same value as in scss/style.scss
var $navHeight = 60;
// Canvas
var canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d'), cx, cy;
var cw = canvas.width = $('html').width();
var ch = canvas.height = $('html').height();
// Some variables
var d = 35;
var x = Math.random() * (cw - d), y = Math.random() * (ch - d);
var speedX = 5, speedY = 5;
var directionX = 1, directionY = 1;

$(document).ready(function() {
	resizeRelativeToWindow('#splash-wrapper', $navHeight);
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
});

function main() {
	clearCanvas('#000');
	if (x > cw - d) {
		x = cw - d;
		randSpeed();
		directionX *= -1;
	} else if (x < d) {
		x = d;
		randSpeed();
		directionX *= -1;
	}

	if (y < d) {
		y = d;
		randSpeed();
		directionY *= -1;
	} else if (y > ch - d) {
		y = ch - d;
		randSpeed();
		directionY *= -1;
	}

	x = x + directionX * speedX;
	y = y + directionY * speedY;
	drawCircle(x,y,30,'#006600','#003300',false);

	requestAnimFrame(function() {
		main();
	});
}

function resizeCanvas() {
	cw = canvas.width = $('html').width();
	ch = canvas.height = $('html').height();
	cx = cw / 2;
	cy = ch / 2;
	
	resizeRelativeToWindow('#splash-wrapper', $navHeight);
	
	main();
}

function resizeRelativeToWindow(element, bottomMargin) {
	$(element).height($('html').height() - $navHeight);
	
	$('#splash').height($(element).height());
	console.log($(element).height() + 'px');
}

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

function randSpeed() {
	speedX = Math.random() * 5 + 5;
	speedY = Math.random() * 5 + 5;
}