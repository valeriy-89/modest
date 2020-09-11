var menu = document.querySelector('.btn-menu');
function toggleMenu () {
  menu.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu); 