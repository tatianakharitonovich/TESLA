let burger = document.querySelector('.header__link_img_ip');

let burgerClose = document.querySelector('.header__link_imgclose');

let navLink = document.querySelectorAll('.header__link');

let blockNav = document.querySelector('.header__blocknav');

let preloader = document.querySelector('.windows8');

let header = document.querySelector('.header');

let main = document.querySelector('.main');

let load = new Promise ((resolve, reject)=> {
	setTimeout(()=> document.readyState || document.body.readyState=='complete' ? resolve() : reject (), 2000);
});

load.then(()=> {
	preloader.classList.toggle('windows8_load');
	header.style.display = 'flex';
	main.style.display = 'block';
});

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





