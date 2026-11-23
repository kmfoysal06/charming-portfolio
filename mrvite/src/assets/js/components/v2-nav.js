document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-toggle');
    menuIcon.addEventListener('click', function(e) {
        const header = e.target.closest('.charming-portfolio-header');
        console.log(header.classList)
        if (header.classList.contains('mobile-menu-open')) {
            header.classList.remove('mobile-menu-open');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }else{
            header.classList.add('mobile-menu-open');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    });
});
