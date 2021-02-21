const menu = document.querySelector('#mobile-Menu')
const menuLinks = document.querySelector('.navbar___menu')

menu.addEventListener('click',function(){
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');

});