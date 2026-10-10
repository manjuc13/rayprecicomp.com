document.addEventListener('DOMContentLoaded', function () {
 const menuButton = document.querySelector('.menu-button');
 const nav = document.querySelector('.nav-links');
 const productButton = document.querySelector('.nav-dropdown-toggle');
 const productMenu = document.querySelector('.nav-dropdown');
 if (menuButton && nav) menuButton.addEventListener('click', () => {const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
 if (productButton && productMenu) productButton.addEventListener('click', () => {const open=productMenu.classList.toggle('is-open');productButton.setAttribute('aria-expanded',String(open));});
 document.addEventListener('click', (event) => {if(productMenu && !productMenu.contains(event.target)){productMenu.classList.remove('is-open');productButton.setAttribute('aria-expanded','false');}});
 document.addEventListener('keydown', (event) => {if(event.key==='Escape'){if(productMenu)productMenu.classList.remove('is-open');if(productButton)productButton.setAttribute('aria-expanded','false');if(nav)nav.classList.remove('open');if(menuButton)menuButton.setAttribute('aria-expanded','false');}});
 const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
});
