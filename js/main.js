// Globals
// Make sure this is as the same value as in scss/style.scss
var $navHeight = 60;

$(document).ready(function(){
	main();
});

function main(){
	resizeRelativeToWindow('#splash-wrapper', $navHeight);
}

function resizeRelativeToWindow(element, bottomMargin){
	$(element).height($('html').height() - $navHeight);
}