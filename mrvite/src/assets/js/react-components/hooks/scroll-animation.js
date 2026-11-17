const ScrollAnimate = (elements) => {

    let scrollingBottom = true;
    let prevY = 0;
    window.addEventListener('scroll', () => {
        let currentY = window.scrollY;
        scrollingBottom = prevY < currentY;
        prevY = currentY;
    });
    const simrevObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('simrev-visible');
        }else{
            if (!scrollingBottom) {
            entry.target.classList.remove('simrev-visible');
            }
        }
        })
    });

    window.addEventListener("load", e => {
        elements?.current?.forEach((el) => {
            if (el) {
                simrevObserver.observe(el);
            }
        });
    })



    /**
     * slide from bottom to up
     */
    const slideUpElements = document.querySelectorAll('.simrev-up');
    /**
     * slide from up to bottm
     */
    const slideDownElements = document.querySelectorAll('.simrev-down');
    /**
     * slide from right
     */
    const slideRightElements = document.querySelectorAll('.simrev-right');
    /**
     * slide from left
     */
    const slideLeftElements = document.querySelectorAll('.simrev-left');
    /**
     * slide from right with delays
     */
    const slideRightDelaysElements = document.querySelectorAll('.simrev-right-delay');
    /**
     * slide from bottom to up with delays
     */
//    const slideUpDelaysElements = document.querySelectorAll('.simrev-up-delay');

//    slideUpElements.forEach((el) => {
//        simrevObserver.observe(el);
//    });
//    slideDownElements.forEach((el) => {
//        simrevObserver.observe(el);
//    });
//    slideRightElements.forEach((el) => {
//        simrevObserver.observe(el);
//    });
//    slideLeftElements.forEach((el) => {
//        simrevObserver.observe(el);
//    });
//    slideRightDelaysElements.forEach((el) => {
//        simrevObserver.observe(el);
//    });
//    slideUpDelaysElements.forEach((el) => {
//        simrevObserver.observe(el);
//    });
}

export default ScrollAnimate;
