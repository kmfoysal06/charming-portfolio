(function(){
    const switchBtns = document.querySelectorAll(".switch-btn-wrapper")
    switchBtns.forEach((btn) => {
        const checkBox = btn.querySelector("input")
        const switchBtn = btn.querySelector(".switch-btn")
        checkBox.checked ? btn.classList.add('on') : btn.classList.remove('on')
        
        switchBtn.addEventListener("click", () => {
            checkBox.checked = !checkBox.checked
            checkBox.checked ? btn.classList.add('on') : btn.classList.remove('on')
            //trigger change to the checkbox
            const changeEvent = new Event("change", {
                bubbles: true
            });
            checkBox.dispatchEvent(changeEvent);
        })
    })
})()
