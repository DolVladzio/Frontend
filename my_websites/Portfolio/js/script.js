"use strict";

function newBurger() {
	const getElement = document.querySelector('.header__burger')
	getElement.onclick = function() {
	const getMenuBurger = document.querySelector('.header__burger')
	getMenuBurger.classList.toggle('active')

	const getHeaderMenu = document.querySelector('.header__menu')
	getHeaderMenu.classList.toggle('active')

	const getBody = document.querySelector('body')
	getBody.classList.toggle('lock')
}
}
newBurger()


function openSpoiler() {
	$(document).ready(function() {
		$('.example__title').click(function(event) {
			if ($('.example__item').hasClass('one')) {
				$('.example__title').not($(this)).removeClass('down');
				$('.example__text').not($(this).next()).slideUp(300)
			}
			$(this).toggleClass('down').next().slideToggle(300);
		})
	});
}
openSpoiler()














































