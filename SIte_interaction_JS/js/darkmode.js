document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkModeButton = document.querySelector('.toggle-dark-mode');
    const body = document.body;

    toggleDarkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark');
    });
});