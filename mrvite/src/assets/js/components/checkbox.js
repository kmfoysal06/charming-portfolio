(function(){
    document.addEventListener("click", (e) => {
        if(e.target.closest(".switch-btn-wrapper")) {
            const btn = e.target.closest(".switch-btn-wrapper")
            const checkBox = btn.querySelector("input")
            const switchBtn = btn.querySelector(".switch-btn")
            checkBox.checked = !checkBox.checked
            checkBox.checked ? btn.classList.add('on') : btn.classList.remove('on')
            //trigger change to the checkbox
            const changeEvent = new Event("change", {
                bubbles: true
            });
            checkBox.dispatchEvent(changeEvent);
        }
    })
})()
