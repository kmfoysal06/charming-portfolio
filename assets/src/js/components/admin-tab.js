(function(){
    document.addEventListener("click", (e) => {
        if(e.target.closest(".charming-portfolio-tab")) {
            e.preventDefault();
            const allTabs = document.querySelectorAll(".charming-portfolio-tab");
            const allTabContents = document.querySelectorAll(".charming-portfolio-tabs .tab-content");
            const currTab = e.target.closest("li");
            const currTarget = e.target.closest("li");
            let currTargetID = 'basic-settings';
            if(currTarget && currTarget.querySelector("a")) {

                console.log('cur target', currTarget.querySelector("a").getAttribute("data-target"));
                if(currTarget.querySelector("a").getAttribute("data-target")) {
                    currTargetID = currTarget.querySelector("a").getAttribute("data-target");
                }
            }
            console.log("currTarget ID" , currTargetID);

            allTabs.forEach(function(tab) {
                if(tab.classList.contains("active")) {
                    tab.classList.remove("active");
                }
            });
            currTab.classList.add("active")

            allTabContents.forEach(function(tab) {
                if(tab.classList.contains("active")) {
                    tab.classList.remove("active");
                }
                if(tab.id === currTargetID) {
                    tab.classList.add("active");
                }
            });
        }
    })
})()
