//TODO: make sure the popover fit in the screen
document.addEventListener("mouseover", e => {
    if(e.target.classList.contains("charming-portfolio-help-icon")) {
        const tooltip = e.target.getAttribute("data-title");
        
        if(tooltip) {
            showPopover(tooltip, e.target);
        }
    }
});
function showPopover(content, target) {
    let popover = document.createElement("div");
    popover.style.position = "absolute";
    popover.style.background = "#333";
    popover.style.color = "#fff";
    popover.style.padding = "5px 10px";
    popover.style.borderRadius = "5px";
    popover.style.fontSize = "12px";
    popover.style.zIndex = "1000";
    popover.style.width = "200px";

    popover.innerText = content;
    document.body.appendChild(popover);
    const rect = target.getBoundingClientRect();
    popover.style.top = (rect.top + window.scrollY - popover.offsetHeight - 5) + "px";
    popover.style.left = (rect.left + 50 + window.scrollX + (rect.width - popover.offsetWidth) / 2) + "px";
    target.addEventListener("mouseout", () => {
        popover.remove();
    }, { once: true });
}
