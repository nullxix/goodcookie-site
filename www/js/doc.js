const nav = document.getElementById('doc-nav')
const navItems = document.getElementById('doc-nav-items')
const navToggleButton = document.getElementById('doc-nav-toggle-button')
const navToggleWrapper = document.getElementById('doc-nav-toggle-wrapper')
let toggleOpen = true;
const toggleNav = event => {
    toggleOpen = !toggleOpen

    if(toggleOpen){
        navItems.classList.remove('toggle-hide')
        nav.classList.remove('toggle-narrow')
        navToggleButton.classList.remove('toggle-down')
        navToggleWrapper.classList.remove('toggle-closed')
    } else {
        navItems.classList.add('toggle-hide')
        nav.classList.add('toggle-narrow')
        navToggleButton.classList.add('toggle-down')
        navToggleWrapper.classList.add('toggle-closed')
    }
}

navToggleButton.addEventListener('click', toggleNav)