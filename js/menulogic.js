const close_menu = document.getElementById('mobilex');
const menu_button = document.getElementById('burger_menu');
const navdiv = document.getElementById('nav');

function closing_animation() {
    navdiv.classList.remove('activate_block');
}

menu_button.addEventListener('click', () => {
    console.log('open button pressed');
    navdiv.classList.add('activate_block');
    navdiv.classList.remove('rollout');


})

//burger cross close button
close_menu.addEventListener('click', () => {
    console.log('close button pressed');
    navdiv.classList.add('rollout');
    setTimeout(closing_animation, 505);
    
})