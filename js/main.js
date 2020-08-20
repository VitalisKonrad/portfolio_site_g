new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
	// speed: 400,
	// spaceBetween: 100
	pagination: {
		el: '.project-pagination',
		bulletClass: 'projects-bullets',
		bulletActiveClass: 'projects-bullets-active',
		clickable: true,
	},
});

