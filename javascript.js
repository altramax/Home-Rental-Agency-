"use strict"

const openMenuBTN = document.getElementById('open');
const closeMenuBTN = document.getElementById('close');
const menu = document.getElementById('dropdown');
const overlay = document.getElementById('overlay');

openMenuBTN.addEventListener('click', function(){
    menu.classList.remove('hidden');
    openMenuBTN.classList.toggle('hidden');
    closeMenuBTN.classList.toggle('hidden');
    overlay.classList.remove('hidden');
})

const closeMenu = function(){
    menu.classList.add('hidden');
    openMenuBTN.classList.toggle('hidden');
    closeMenuBTN.classList.toggle('hidden');
    overlay.classList.add('hidden');
}

closeMenuBTN.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
