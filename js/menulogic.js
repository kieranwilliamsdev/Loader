function openMenu() {

var createMenu = document.createElement('div');
var firstdiv = document.getElementById('select_items');

createMenu.className = 'nav';
createMenu.id = 'memuid';

document.body.insertBefore(createMenu, firstdiv);
console.log('Div should be created here');
}

const menu_button = document.getElementById('burger_menu');

menu_button.addEventListener('click', () => {
    openMenu();
    console.log('button Pressed');
})