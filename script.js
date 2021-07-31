const hiddenMenuButton =  document.querySelector('#hidden-menu-button')
const menu =  document.querySelector('#menu')

document.querySelector('#menu-button').addEventListener('click', () => {
    menu.classList.add('menu-hidden')
    hiddenMenuButton.style.display = 'inline';
})

hiddenMenuButton.addEventListener('click', () => {
    menu.classList.remove('menu-hidden')
    hiddenMenuButton.style.display = 'none';
})


