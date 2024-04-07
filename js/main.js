document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.sidenav-toggle-btn');
    
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelector('.sidenav-menu').classList.toggle('sidenav-menu-hide');
            document.querySelector('.main-content').classList.toggle('flush-main-content');
        });
    });
});