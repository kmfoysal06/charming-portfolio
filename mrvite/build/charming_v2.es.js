import "./charm-alert-DTz1j08D.js";
import "./contact_form-BTeqXJ0Y.js";
// src/assets/js/components/see-more-btn.js
document.addEventListener("DOMContentLoaded", function() {
	let e = document.querySelector(".menu-toggle");
	e.addEventListener("click", function(t) {
		let n = t.target.closest(".charming-portfolio-header");
		console.log(n.classList), n.classList.contains("mobile-menu-open") ? (n.classList.remove("mobile-menu-open"), e.classList.remove("fa-xmark"), e.classList.add("fa-bars")) : (n.classList.add("mobile-menu-open"), e.classList.remove("fa-bars"), e.classList.add("fa-xmark"));
	});
}), document.querySelectorAll(".charming-portfolio-has-see-more .see-more-text").forEach((e) => {
	if (e) {
		let t = e.innerText;
		if (t.length > 120) {
			let n = !0, r = t.slice(0, 120);
			e.innerText = r;
			let i = document.createElement("span");
			i.classList.add("see-more"), i.innerText = "See More", i.addEventListener("click", (a) => {
				n ? (n = !1, e.innerText = t, i.innerText = "See Less") : (n = !0, e.innerText = r, i.innerText = "See More");
			}), e.insertAdjacentElement("afterend", i);
		}
	}
});
