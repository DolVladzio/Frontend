"use strict";

// footer__up

function getUp() {
	const footerUp = document.querySelector('.footer__up')
	footerUp.onclick = function() {
		window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	})

	// function setScrollTo() {
	// 	window.scrollTo(0, 0);
	// }
	// setScrollTo()
}}
getUp()