const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

let sidebarVisible = false;

function openSidebar() {
    sidebar.style.left = '0';
    sidebarVisible = true;
}

function closeSidebar() {
    sidebar.style.left = '-250px';
    sidebarVisible = false;
}

function toggleSidebar() {
    if (sidebarVisible) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

menuToggle.addEventListener('click', toggleSidebar);

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});