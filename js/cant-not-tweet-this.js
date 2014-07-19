/*!
 * cant-not-tweet-this
 *
 * MIT licensed
 * Copyright (C) 2013 Tim Holman, http://tholman.com
 */

/*********************************************
 *
 *********************************************/

function App() {

	var theButton;
	var spans;
	var timeout;
	var mouse = {x: 0, y: 0};
	var currentSpan = 0;

    this.init = function() {

    	theButton = document.querySelector( '.the-button' );
    	spans     = document.querySelectorAll( '.background span' );
    	mouse.x   = document.innerWidth / 2;
    	mouse.y   = document.innerHeight / 2;

    	bindElements();
    }

    var bindElements = function() {
    	setInterval( animateSubliminalSpans, 1000 );
    	document.addEventListener( 'mousemove', mouseMove );
    }

    var animateSubliminalSpans = function() {

    	spans[currentSpan].className = "";
    	currentSpan++;
    	currentSpan %= spans.length;
    	spans[currentSpan].className = "fade";
    }

    var allowClick = function() {
    	theButton.style.pointerEvents = "all";
    }

    var mouseMove = function( e ) {

    	mouse.x = e.pageX;
    	mouse.y = e.pageY;
    	theButton.style.pointerEvents = "none";
    	theButton.style.WebkitTransform = "translate3d(" + mouse.x + "px, " + mouse.y + 'px, 0px)';
    	clearTimeout( timeout );
    	timeout = setTimeout( allowClick, 100 );
    }

}

var app = new App();
app.init();
