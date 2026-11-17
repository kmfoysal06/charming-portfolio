const allP = document.querySelectorAll(".charming-portfolio-has-see-more .see-more-text");
allP.forEach(p => {
if(p) {
  const pVal = p.innerText;
  if(pVal.length > 120) {
    let hidden = true;
    const shownValue = pVal.slice(0, 120);
    p.innerText = shownValue;
    const a = document.createElement("span");
    a.classList.add("see-more");
   a.innerText = "See More";
    a.addEventListener("click", e => {
      if(hidden) {
        hidden = false;
        p.innerText = pVal;
        a.innerText = "See Less"
      }else{
        hidden = true;
        p.innerText = shownValue;
        a.innerText = "See More"
      }
    })
     p.insertAdjacentElement("afterend",a)
  }
}  
})

