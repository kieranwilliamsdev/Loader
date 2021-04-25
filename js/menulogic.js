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
createExit.innerH TML = ('<img id=\"mobile-exit-img\" class=\"mobile-menu-exit\" src=\"images/exit.svg\" alt=\"exit navigation\">');

menuPosition.appendChild(createExit);

//Create Menu Section
var createMenuItems = document.createElement('div');

createMenuItems.className = 'menu';
createMenuItems.id = 'menu';
createMenuItems.innerHTML = ('<li><a href=\"#\">About</a></li><li><a href=\"#\">Specs</a></li><li><a href=\"#\">Contact</a></li></ul>');

menuPosition.appendChild(createMenuItems);


}

const menu_button = document.getElementById('burger_menu');

menu_button.addEventListener('click', () => {
    openMenu();
    
})