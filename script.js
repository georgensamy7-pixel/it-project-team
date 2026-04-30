
function toggleMenu() {
    const menu = document.getElementById('profileMenu');
    menu.classList.toggle('active')
    displayMenuData();
}


function displayMenuData() {
    
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
        document.getElementById('menuName').innerText = name;
        document.getElementById('menuEmail').innerText = email;
    } else {
        document.getElementById('menuName').innerText = "ضيف";
        document.getElementById('menuEmail').innerText = "لم يتم التسجيل";
    }
}
window.onclick = function(event) {
window.onclick = function(event) {
    if (!event.target.matches('#profileIcon')) {
        const menu = document.getElementById('profileMenu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
}