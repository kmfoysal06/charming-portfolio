const ScrollAnimate = (elements, eventType = 'scroll') => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        elements.current.forEach((div) => {
            const offsetTop = div.getBoundingClientRect().top + scrollPosition;
            if (scrollPosition >= offsetTop - (window.innerHeight / 4 * 3)) {
                div.classList.add("active");
            }
        })
    }
    window.addEventListener('scroll', handleScroll);

    /**
     * First Section Should be Loaded Initially
     */
    if(eventType === 'load'){
        window.addEventListener('load', handleScroll);
    }
}

export default ScrollAnimate;
