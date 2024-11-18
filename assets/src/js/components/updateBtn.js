// Add Loader When Update Button Clicked
const updateBtnWrapper = document.querySelector(".btn-wrapper")
if(updateBtnWrapper){
	const updateBtn = updateBtnWrapper.querySelector("input");
	console.log(updateBtn)
	updateBtn.addEventListener("click", (e) => {
		updateBtnWrapper.classList.add("loading")
	})		
} 
