"use strict"

function burgerStart() {
	const searchBurger = document.querySelector('.header__burger')
	searchBurger.onclick = function() {
		const getBurger = document.querySelector('.header__burger')
		getBurger.classList.toggle('active')
	
		const getMenu = document.querySelector('.header__content')
		getMenu.classList.toggle('active')

		const getBody = document.querySelector('body')
		getBody.classList.toggle('lock')
	}
}
burgerStart()

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 2,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	})
})











