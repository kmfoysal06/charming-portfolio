document.addEventListener("click", (e) => {
    if(e.target.closest(".kmf_toggle_menu_icon")) {
        const menuWrapper = document.querySelector(".nav-links-mobile-wrapper");
        menuWrapper.classList.toggle("active");

        const isActive = menuWrapper.classList.contains("active");
        const toggleIcon = document.querySelector(".kmf_toggle_menu_icon");
        if(isActive) {
            toggleIcon.classList.add("active");
        }else{
            toggleIcon.classList.remove("active");
        }
    }

    if(e.target.closest(".nav-links-mobile")) {
        const menuWrapper = document.querySelector(".nav-links-mobile-wrapper");
        if(menuWrapper.classList.contains("active")) {
            menuWrapper.classList.remove("active");
        }
        const toggleIcon = document.querySelector(".kmf_toggle_menu_icon");
        if(toggleIcon.classList.contains("active")) {
            toggleIcon.classList.remove("active");
        }
    }
});
