"use strict"

function burgerStart() {
	const searchBurger = document.querySelector('.header__burger')
	searchBurger.onclick = function() {
		const getBurger = document.querySelector('.header__burger')
		getBurger.classList.toggle('active')
	
		const getMenu = document.querySelector('.header__menu')
		getMenu.classList.toggle('active')

		const getBody = document.querySelector('body')
		getBody.classList.toggle('lock')

		const getLink = document.querySelector('.header__link')
		getLink.classList.toggle('active')
	}
}
burgerStart();


$(document).ready(function() {
	$.each($('.checkbox'), function() {
		if($(this).find('input').prop('checked')==true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function() {
		if($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		}else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');
		return false;
	});
})








