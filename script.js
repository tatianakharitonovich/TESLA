let burger = document.querySelector('.header__link_img_ip');
console.log(burger);

let burgerClose = document.querySelector('.header__link_imgclose');

let navLink = document.querySelectorAll('.header__link');
console.log(navLink);

let blockNav = document.querySelector('.header__blocknav');
console.log(blockNav);

burger.addEventListener('click', ()=> {
	burger.classList.toggle ('header__link_img_click'); 
	navLink.forEach (item => item.classList.toggle ('header__link_click'));
	blockNav.classList.toggle ('header__blocknav_click');
	burgerClose.classList.toggle ('header__link_imgclose_click');
});

function close() {
		navLink.forEach (item => item.classList.remove ('header__link_click'));
		burger.classList.remove ('header__link_img_click');
		blockNav.classList.remove ('header__blocknav_click');
		burgerClose.classList.remove ('header__link_imgclose_click');
};

burgerClose.addEventListener('click',close);

navLink.forEach (item => {item.addEventListener('click', close)});





