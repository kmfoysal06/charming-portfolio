import "./charm-alert-DTz1j08D.js";
import "./contact_form-BTeqXJ0Y.js";
// src/assets/js/components/v3/nav.js
document.addEventListener("click", (e) => {
	if (e.target.closest(".kmf_toggle_menu_icon")) {
		let e = document.querySelector(".nav-links-mobile-wrapper");
		e.classList.toggle("active");
		let t = e.classList.contains("active"), n = document.querySelector(".kmf_toggle_menu_icon");
		t ? n.classList.add("active") : n.classList.remove("active");
	}
	if (e.target.closest(".nav-links-mobile")) {
		let e = document.querySelector(".nav-links-mobile-wrapper");
		e.classList.contains("active") && e.classList.remove("active");
		let t = document.querySelector(".kmf_toggle_menu_icon");
		t.classList.contains("active") && t.classList.remove("active");
	}
});
