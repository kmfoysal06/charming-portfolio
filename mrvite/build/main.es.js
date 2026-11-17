// src/assets/js/components/copybtn.js
(function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			this.handleCopyBtn(".simplecharm-portfolio-copy-mail"), this.handleCopyBtn(".simplecharm-portfolio-copy-phone");
		}
		handleCopyBtn(t) {
			let n = this;
			e(t).on("click", (e) => this.copy(e, n, t)), e(t).on("focus", (e) => this.copy(e, n, t));
		}
		bottomAlert(e, t, n) {
			var r = document.getElementById("simplecharm-portfolio-bottom-alert");
			r.textContent = e, r.style.background = t, r.style.opacity = "1", r.style.transform = "translate(-50%,0)", setTimeout(function() {
				r.style.transform = "translate(-50%,50px)", r.style.opacity = "0";
			}, n);
		}
		copy(t, n, r) {
			if (t.preventDefault(), t.type !== "click" && t.keyCode !== 13) return;
			let i = document.createElement("textarea");
			i.value = e(r).siblings("h2").html(), document.body.appendChild(i), i.select(), i.setSelectionRange(0, 99999), document.execCommand("copy") ? n.bottomAlert("Copied!", "#204ecf", 1e3) : n.bottomAlert("Can't Copy! Try Again.", "#f00", 3e3), document.body.removeChild(i);
		}
	}
	new t();
})(jQuery);
