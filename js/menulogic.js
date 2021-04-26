function openMenu() {

var createMenu = document.createElement('div');
var firstdiv = document.getElementById('select_items');

createMenu.className = 'nav';
createMenu.id = 'menuid';
document.body.insertBefore(createMenu, firstdiv);

//Create Menu Exit Button
var createExit = document.createElement('div');
var menuPosition = document.getElementById('menuid');

createExit.className = 'mobile-exit';
createExit.id = 'mobilex';
createExit.innerHTML = ('<img id=\"mobile-exit-img\" class=\"mobile-menu-exit\" src=\"images/exit.svg\" alt=\"exit navigation\">');

menuPosition.appendChild(createExit);

//Create Menu Section
var createMenuItems = document.createElement('div');

createMenuItems.className = 'menu';
createMenuItems.id = 'menu';
createMenuItems.innerHTML = ('<ul class=\"primary-nav\"><li><a href=\"#\">About</a></li><li><a href=\"#\">Specs</a></li><li><a href=\"#\">Contact</a></li></ul>');

menuPosition.appendChild(createMenuItems);


}

//menu close function
function closemenu() {
    var close_menu = document.getElementById('mobilex');
    var navGone = document.getElementsByClassName('nav');

    console.log('fruitless check')
    body.removeChild(navGone);
}

//burger menu open button

const menu_button = document.getElementById('burger_menu');

menu_button.addEventListener('click', () => {
    console.log('button pressed');
    openMenu();
})

//burger cross close button
close_menu.addEventListener('click', () => {
    closemenu();
})