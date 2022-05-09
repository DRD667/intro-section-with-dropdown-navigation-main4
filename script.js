// Declaring Elements
const toggleMenu = document.querySelector('#ham-menu>img');
const navbar = document.querySelector('.uncollapsed');
const uncollapsableLinks = document.querySelectorAll('.uncollapsable');
const nestedlist = document.querySelectorAll('.uncollapsable ~ section');

// Declaring Functions
function toggleMenuIcon(){
    if(toggleMenu.getAttribute('src') === './images/icon-menu.svg'){
        toggleMenu.setAttribute('src','./images/icon-close-menu.svg')
    }
    else{
        toggleMenu.setAttribute('src','./images/icon-menu.svg')

    }
}

function showMenu(){
    navbar.classList.toggle('show')
}

function showNestedLinks(){
// for (let i = 0; i < nestedlist.length; i++) {
//     const element = nestedlist[i];
//     element.classList.toggle('show');
    
// }

    nestedlist.forEach(element => {
        element.classList.toggle('show');
});

}

// Running Functions
function disnone(){
 toggleMenuIcon();
 showMenu();
}