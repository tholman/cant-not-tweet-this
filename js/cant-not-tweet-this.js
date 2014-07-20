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
    	mouse.x   = window.innerWidth / 2;
    	mouse.y   = window.innerHeight / 2;

    	bindElements();

    	// Position button for before interactions.
    	theButton.style.WebkitTransform = "translate3d(" + mouse.x + "px, " + (mouse.y - 150) + 'px, 0px)';
    	theButton.style.MozTransform = "translate3d(" + mouse.x + "px, " + (mouse.y - 150) + 'px, 0px)';
    	theButton.style.transform = "translate3d(" + mouse.x + "px, " + (mouse.y - 150) + 'px, 0px)';
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
    	theButton.style.MozTransform = "translate3d(" + mouse.x + "px, " + mouse.y + 'px, 0px)';
    	theButton.style.transform = "translate3d(" + mouse.x + "px, " + mouse.y + 'px, 0px)';
    	
    	// Allow clicking of the button, when its not moving.
    	// We don't allow clicking when its moving, so we can accurately track the mouse position.
    	clearTimeout( timeout );
    	timeout = setTimeout( allowClick, 100 );
    }
}

var app = new App();
app.init();

// Omg meta, you're not reading a comment about comments.
console.log( "Hey there! Checkin out that console eh?" );
console.log( "You'll be happy to know that this project (as useful as it is) is open sourced - http://github.com/tholman/cant-not-tweet-this" );
console.log( "You can also check out my other random works @ http://tholman.com" );
