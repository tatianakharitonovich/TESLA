let burger = document.querySelector('.header__link_img_ip');
console.log(burger);
let nav = document.querySelectorAll('.header__link');
console.log(nav);
let blockNav = document.querySelector('.header__nav_general');
console.log(blockNav);

burger.addEventListener('click', ()=> {
	burger.classList.toggle ('header__link_img_click'); 
	nav.forEach (item => item.classList.toggle ('header__link_click'));
	blockNav.classList.toggle ('header__blocknav_click');
});

nav.forEach (item => {
	item.addEventListener('click', ()=> {
		nav.forEach (item => item.classList.remove ('header__link_click'));
		burger.classList.remove ('header__link_img_click');
		blockNav.classList.remove ('header__blocknav_click');
		})
});


