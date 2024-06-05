(function($){
	class CopyBtn{
		constructor(){
			this.init();
		}
		init(){
			this.handleCopyBtn(".simplecharm-portfolio-copy-mail")
			this.handleCopyBtn(".simplecharm-portfolio-copy-phone")
		}
		handleCopyBtn(copyBtn){
			let instance = this;
			$(copyBtn).on("click",(e) => this.copy(e,instance,copyBtn));
			$(copyBtn).on("focus",(e) => this.copy(e,instance,copyBtn));
		}
		bottomAlert(alertText,bgColor,timing) {
	        var bottomAlert = document.getElementById("simplecharm-portfolio-bottom-alert");
	        bottomAlert.textContent = alertText;
	        bottomAlert.style.background = bgColor;
	        bottomAlert.style.opacity = "1";
	        bottomAlert.style.transform = "translate(-50%,0)";
	        setTimeout(function() {
				 bottomAlert.style.transform = "translate(-50%,50px)";
	            bottomAlert.style.opacity = "0";
	        }, timing);
    }
    copy(e,instance,copyBtn){
		e.preventDefault();
		if(e.type !== "click" && e.keyCode !== 13) return;
		let tempTextArea = document.createElement("textarea");
    	tempTextArea.value = $(copyBtn).siblings("h2").html();
  		document.body.appendChild(tempTextArea);
    	tempTextArea.select();
    	tempTextArea.setSelectionRange(0, 99999); 
    	if(document.execCommand("copy")){
			instance.bottomAlert("Copied!","#204ecf",1000);

		}else{
			instance.bottomAlert("Can't Copy! Try Again.","#f00",3000);
		}
    document.body.removeChild(tempTextArea);
			}
	}
	new CopyBtn;
})(jQuery)