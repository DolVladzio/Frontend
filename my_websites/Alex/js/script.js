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
burgerStart()

function startMenuLink() {
	// const linkServices = document.querySelector('.to-services')
	// const getCont = linkServices.getBoundingClientRect()
	// console.log(getCont)

	const linkServices = document.querySelector('.to-services')
	linkServices.onclick = function() {
		function setScrollTo() {
		window.scrollTo(0, 768);
		}
		setScrollTo()
	}

	const linkPortfolios = document.querySelector('.to-portfolios')
	linkPortfolios.onclick = function() {
		function setScrollTo() {
		window.scrollTo(0, 1551);
		}
		setScrollTo()
	}

	const linkBlog = document.querySelector('.to-blog')
	linkBlog.onclick = function() {
		function setScrollTo() {
		window.scrollTo(0, 2378);
		}
		setScrollTo()
	}
}
startMenuLink()










