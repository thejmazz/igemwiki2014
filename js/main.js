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
	main();
});

function main(){
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas, false);
}

function resizeCanvas() {
	cw = canvas.width = $('html').width();
	ch = canvas.height = $('html').height();
	cx = cw / 2;
	cy = ch / 2;
	resizeRelativeToWindow('#splash-wrapper', $navHeight);
}

function resizeRelativeToWindow(element, bottomMargin) {
	$(element).height($('html').height() - $navHeight);
	$('#splash').height($(element).height());
	
	// This prevents FF from showing scrollbar when not necessary
	if($('#splash .container').height() > $(element).height() ){
		$('#splash').css({
			'overflow-y': 'scroll'
		});
	} else {
		$('#splash').css({
			'overflow-y': 'hidden'
		});
	}
}