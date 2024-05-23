function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    const isDropdownButton = e.target.matches(".hamburger-menu");
    if (!isDropdownButton && e.target.closest('.nav-drop-wrapper') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('.nav-drop-wrapper');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll(".nav-drop-wrapper.active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });
});
