import "./charm-alert-DTz1j08D.js";
// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n));
// src/assets/js/components/admin-help-icon.js
(function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			this.mediaUploader("simplecharm-portfolio-user-image", "CHARMING_PORTFOLIO_user_image", "Upload Image"), this.mediaUploader("simplecharm-portfolio-user-image2", "CHARMING_PORTFOLIO_user_image2", "Upload Another Image");
		}
		mediaUploader(t, n, r = "Upload Image") {
			let i = null;
			e(`.${t}`).on("keyup", function(t) {
				e(t.keyCode)[0] === 13 && t.target.click();
			}), e(`.${t}`).off("click").on("click", function(a) {
				a.preventDefault(), wp.media && (wp.media.view.Modal.prototype.on("close", function() {
					let t = e(".media-modal");
					t && t.remove();
				}), i = wp.media({
					title: r,
					multiple: !1,
					library: { type: "image" }
				}).open().on("select", function() {
					let r = i.state().get("selection").first().toJSON().url;
					e(`.${t}`).attr("src", r), e(`.${n}`).val(r);
				}), i.open());
			});
		}
	}
	new t();
})(jQuery), (function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			this.handleRepeater("charming_portfolio_social_link_add", ["charming_portfolio_empty-row__social_link", "screen-reader-text"], "#repeatable-fieldset-one tbody>tr", "charming_portfolio_social_link_remove", "social_link"), this.handleRepeater("charming_portfolio_skill_link_add", ["charming_portfolio_empty-row__skills_link", "screen-reader-text"], "#repeatable-fieldset-one tbody>tr", "charming_portfolio_skills_remove", "skills"), this.handleRepeater("charming_portfolio_experience_add", ["charming_portfolio_empty-row__experience", "screen-reader-text"], "#repeatable-fieldset-two tbody>tr", "charming_portfolio_experience_remove", "experiences"), this.handleRepeater("charming_portfolio_work_add", ["charming_portfolio_empty-row__works", "screen-reader-text"], "#repeatable-fieldset-three tbody>tr", "charming_portfolio_project_remove", "works"), this.handleRepeater("charming_portfolio_header_link_add", ["charming_portfolio_empty-row__header_link", "screen-reader-text"], "#repeatable-fieldset-header-links tbody>tr", "charming_portfolio_header_link_remove", "header_link"), this.handleRepeater("charming_portfolio_footer_link_add", ["charming_portfolio_empty-row__footer_link", "screen-reader-text"], "#repeatable-fieldset-footer-links tbody>tr", "charming_portfolio_footer_link_remove", "footer_link");
		}
		handleRepeater(t, n, r, i, a) {
			let o = e(`${r}:nth-last-child(2) input`).data("queue");
			e(`#${t}`).on("click", function() {
				o++, o = isNaN(o) ? 1 : o;
				let t = e(`.${n.join(".")}`).clone(!0).removeClass(n.join(" "));
				return t.hasClass("empty_blueprint") && t.removeClass("empty_blueprint"), t.find("input, textarea").each(function() {
					e(this).attr("data-queue", o);
					let t = e(this)[0].className;
					e(this).attr("name", `CHARMING_PORTFOLIO[${a}][${o}][][${t}]`);
					let n = e(this).attr("id"), r = e(this).siblings("label").attr("for");
					e(this).attr("id", `${n}-${o}`), e(this).siblings("label").attr("for", `${r}-${o}`);
				}), t.insertBefore(`${r}:last-child`), e(document).trigger("charming-portfolio-repeater-add", [
					a,
					o,
					t
				]), !1;
			}), e(`.${i}`).on("click", function() {
				return e(document).trigger("charming-portfolio-before-repeater-remove", [a, o]), e(this).parents("tr").remove(), e(document).trigger("charming-portfolio-repeater-remove", [a, o]), !1;
			});
		}
	}
	new t();
})(jQuery), (function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			this.handleWorking();
		}
		handleWorking() {
			let t = e(".charming-portfolio-experience");
			t.find(".end_date"), t.find(".working").each(function(t, n) {
				e(n).on("change", function(t) {
					e(this).parents("tr").find(".end_date").prop("disabled", t.target.checked);
				}), e(n).trigger("change");
			});
		}
	}
	new t();
})(jQuery), document.addEventListener("mouseover", (e) => {
	if (e.target.classList.contains("charming-portfolio-help-icon")) {
		let t = e.target.getAttribute("data-title");
		t && u(t, e.target);
	}
});
function u(e, t) {
	let n = document.createElement("div");
	n.style.position = "absolute", n.style.background = "#333", n.style.color = "#fff", n.style.padding = "5px 10px", n.style.borderRadius = "5px", n.style.fontSize = "12px", n.style.zIndex = "1000", n.style.width = "200px", n.innerText = e, document.body.appendChild(n);
	let r = t.getBoundingClientRect();
	n.style.top = r.top + window.scrollY - n.offsetHeight - 5 + "px", n.style.left = r.left + 50 + window.scrollX + (r.width - n.offsetWidth) / 2 + "px", t.addEventListener("mouseout", () => {
		n.remove();
	}, { once: !0 });
}
// src/assets/js/components/danger-zone.js
(function() {
	document.addEventListener("click", (e) => {
		if (e.target.closest(".switch-btn-wrapper")) {
			let t = e.target.closest(".switch-btn-wrapper"), n = t.querySelector("input");
			t.querySelector(".switch-btn"), n.checked = !n.checked, n.checked ? t.classList.add("on") : t.classList.remove("on");
			let r = new Event("change", { bubbles: !0 });
			n.dispatchEvent(r);
		}
	});
})(), (function() {
	document.addEventListener("click", (e) => {
		if (e.target.closest(".charming-portfolio-tab")) {
			e.preventDefault();
			let t = document.querySelectorAll(".charming-portfolio-tab"), n = document.querySelectorAll(".charming-portfolio-tabs .tab-content"), r = e.target.closest("li"), i = e.target.closest("li"), a = "basic-settings";
			i && i.querySelector("a") && i.querySelector("a").getAttribute("data-target") && (a = i.querySelector("a").getAttribute("data-target")), t.forEach(function(e) {
				e.classList.contains("active") && e.classList.remove("active");
			}), r.classList.add("active"), n.forEach(function(e) {
				e.classList.contains("active") && e.classList.remove("active"), e.id === a && e.classList.add("active");
			});
		}
	});
})(), document.addEventListener("input", (e) => charming_portfolio_input_update(!0, e)), document.addEventListener("change", (e) => charming_portfolio_input_update(!0, e)), window.is_cp_input_updated = !1, window.addEventListener("beforeunload", (e) => {
	console.log("beforeunload", window.is_cp_input_updated), window.is_cp_input_updated && (e.preventDefault(), e.returnValue = "");
}), (function() {
	window.charming_portfolio_input_update = function(e = !0, t = null) {
		console.log("input updated", e), (!t || t.target.closest(".portfolio-section-wrapper")) && window.is_cp_input_updated !== e && (window.is_cp_input_updated = e);
	};
})(), (function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			let t = e(".charming-portfolio-save-data"), n = e(".charming-portfolio-save-additional-data");
			t.length && t.on("click", function(t) {
				t.preventDefault();
				let n = e(".portfolio-enabled"), r = e(".portfolio-enabled-contact-mailing"), i = e(".user-name"), a = e(".user-designation"), o = e(".CHARMING_PORTFOLIO_user_image"), s = e(".short-description"), c = e(".user-address"), l = e(".user-available"), u = e(".description"), d = e(".primary-statbox-content"), f = e(".primary-statbox-label"), p = e(".CHARMING_PORTFOLIO_user_image_2"), m = e(".email"), h = e(".phone"), g = e(".charming-portfolio-layout input[type='radio']:checked").val() ?? "charming_v2", _ = new FormData();
				_.append("action", "charming_portfolio_save_data"), _.append("nonce", charming_portfolio_admin.nonce), _.append("enabled", n.is(":checked") ? "1" : "0"), _.append("enabled_contact_mailing", r.is(":checked") ? "1" : "0"), _.append("name", i.val()), _.append("designation", a.val()), _.append("image", o.val()), _.append("short_description", s.val()), _.append("address", c.val()), _.append("available", l.is(":checked") ? "1" : "0"), _.append("description", u.val()), _.append("primary_statbox_content", d.val()), _.append("primary_statbox_label", f.val()), _.append("image2", p.val()), _.append("email", m.val()), _.append("phone", h.val()), _.append("layout", g);
				let v = [];
				e(".social_links").each(function() {
					let t = e(this).find(".name").val(), n = e(this).find(".url").val();
					t && n && v.push({
						name: t,
						url: n
					});
				});
				let y = [];
				e(".stat-boxes-table tr").each(function() {
					let t = e(this).find(".content").val(), n = e(this).find(".label").val();
					(t || n) && y.push({
						content: t,
						label: n
					});
				});
				let b = [];
				e(".header_links").each(function() {
					let t = e(this).find(".name").val(), n = e(this).find(".url").val();
					t && n && b.push({
						name: t,
						url: n
					});
				});
				let x = [];
				e(".footer_links").each(function() {
					let t = e(this).find(".name").val(), n = e(this).find(".url").val();
					t && n && x.push({
						name: t,
						url: n
					});
				}), _.append("social_links", JSON.stringify(v)), _.append("header_links", JSON.stringify(b)), _.append("footer_links", JSON.stringify(x)), _.append("stat_boxes", JSON.stringify(y));
				let S = e(".btn-wrapper");
				S.addClass("loading"), S.find(".charming-portfolio-save-data").prop("disabled", !0), S.find(".charming-portfolio-save-data").text(charming_portfolio_admin.saving), e.ajax({
					url: charming_portfolio_admin.ajax_url,
					type: "POST",
					data: _,
					contentType: !1,
					processData: !1,
					success: function(e) {
						e.success ? (e.data, S.removeClass("loading"), S.find(".charming-portfolio-save-data").prop("disabled", !1), S.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save), charming_portfolio_input_update(!1), CharmAlert.showAlert("Updated New Informations!", "success")) : (S.removeClass("loading"), S.find(".charming-portfolio-save-data").prop("disabled", !1), S.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save), CharmAlert.showAlert(`Error: ${e.message}`, "error"));
					},
					error: function() {
						S.removeClass("loading"), S.find(".charming-portfolio-save-data").prop("disabled", !1), S.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save), CharmAlert.showAlert("Error updating", "error");
					}
				});
			}), n.length && n.on("click", function(t) {
				t.preventDefault();
				try {
					let t = e(".charming-portfolio-skills .skill"), n = e(".charming-portfolio-experience .single-experience"), r = e(".charming-portfolio-projects .single-project"), i = [];
					t.each(function(t) {
						if (!e(this).hasClass("empty_blueprint") && !e(this).hasClass("empty_blueprint")) {
							let n = e(this).find(".name").val(), r = e(this).find(".image-url").val(), a = e(this).find(".description").val(), o = e(this).find(".tags").val();
							if (n && r) i.push({
								name: n,
								image: r,
								description: a,
								tags: o
							});
							else throw Error(`Skill ${t + 1}: Please fill all required fields (Name, Image URL)`);
						}
					});
					let a = [];
					n.each(function() {
						let t = e(this).find(".image-url").val(), n = e(this).find(".institution").val(), r = e(this).find(".post-title").val(), i = e(this).find(".responsibility").val(), o = e(this).find(".start_date").val(), s = e(this).find(".end_date").val(), c = e(this).find(".working").is(":checked") ? "1" : "0";
						if (!e(this).hasClass("empty_blueprint")) {
							if (n && r && i && o) a.push({
								logo: t,
								institution: n,
								post_title: r,
								responsibility: i,
								start_date: o,
								end_date: s,
								working: c
							});
							else throw Error(`Experience ${n || r || o}: Please fill all required fields (Institution, Post Title, Responsibility, Start Date)`);
						}
					});
					let o = [];
					r.each(function() {
						if (e(this).hasClass("empty_blueprint")) return;
						let t = e(this).find(".title").val(), n = e(this).find(".image-url").val(), r = e(this).find(".description").val(), i = e(this).find(".tags").val(), a = e(this).find(".link").val(), s = e(this).find(".category").val();
						if (t && r && a) o.push({
							image_url: n,
							title: t,
							description: r,
							tags: i,
							link: a,
							category: s
						});
						else throw Error(`Project ${t || a}: Please fill all required fields (Name, Description, Link)`);
					});
					let s = new FormData();
					s.append("action", "charming_portfolio_save_data_additional"), s.append("nonce", charming_portfolio_admin.nonce), s.append("skills", JSON.stringify(i)), s.append("experiences", JSON.stringify(a)), s.append("works", JSON.stringify(o));
					let c = e(".btn-wrapper");
					c.addClass("loading"), c.find(".charming-portfolio-save-additional-data").prop("disabled", !0), c.find(".charming-portfolio-save-additional-data").text(charming_portfolio_admin.saving), e.ajax({
						url: charming_portfolio_admin.ajax_url,
						type: "POST",
						data: s,
						contentType: !1,
						processData: !1,
						success: function(e) {
							e.success ? (CharmAlert.showAlert("Informations updated successfully", "success"), c.removeClass("loading"), c.find(".charming-portfolio-save-additional-data").prop("disabled", !1), charming_portfolio_input_update(!1)) : (CharmAlert.showAlert(e.message, "error"), c.removeClass("loading"), c.find(".charming-portfolio-save-additional-data").prop("disabled", !1));
						},
						error: function() {
							CharmAlert.showAlert("Error Updating Information. Please Try Again", "error"), c.removeClass("loading"), c.find(".charming-portfolio-save-additional-data").prop("disabled", !1);
						}
					});
				} catch (e) {
					CharmAlert.showAlert(e, "error");
				}
			});
		}
	}
	new t();
})(jQuery), (function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			e(document).on("click", ".charming-portfolio-skills.admin img", function(t) {
				let n = e(this), r = e(this).siblings("input[type=hidden]");
				r.data("queue");
				let i = null;
				n.off("click").on("click", function(t) {
					t.preventDefault(), wp.media && (wp.media.view.Modal.prototype.on("close", function() {
						let t = e(".media-modal");
						t && t.remove();
					}), i = wp.media({
						title: "Upload Image for Logo of The Skill",
						multiple: !1,
						library: { type: "image" }
					}).open().on("select", function() {
						let e = i.state().get("selection").first().toJSON().url;
						n.attr("src", e), r.val(e);
					}), i.open());
				});
			});
		}
	}
	new t();
})(jQuery), (function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			e(document).on("click", ".charming-portfolio-projects.admin img", function(t) {
				let n = e(this), r = e(this).siblings("input[type=hidden]");
				r.data("queue");
				let i = null;
				n.off("click").on("click", function(t) {
					t.preventDefault(), wp.media && (wp.media.view.Modal.prototype.on("close", function() {
						let t = e(".media-modal");
						t && t.remove();
					}), i = wp.media({
						title: "Upload Image for Thumbnail of The Project",
						multiple: !1,
						library: { type: "image" }
					}).open().on("select", function() {
						let e = i.state().get("selection").first().toJSON().url;
						n.attr("src", e), r.val(e);
					}), i.open());
				});
			});
		}
	}
	new t();
})(jQuery), (function(e) {
	class t {
		constructor() {
			this.init();
		}
		init() {
			e(document).on("click", ".charming-portfolio-experience.admin img", function(t) {
				let n = e(this), r = e(this).siblings("input[type=hidden]");
				r.data("queue");
				let i = null;
				n.off("click").on("click", function(t) {
					t.preventDefault(), wp.media && (wp.media.view.Modal.prototype.on("close", function() {
						let t = e(".media-modal");
						t && t.remove();
					}), i = wp.media({
						title: "Upload the brand logo of you experience company",
						multiple: !1,
						library: { type: "image" }
					}).open().on("select", function() {
						let e = i.state().get("selection").first().toJSON().url;
						n.attr("src", e), r.val(e);
					}), i.open());
				});
			});
		}
	}
	new t();
})(jQuery), (function(e) {
	let t = charming_portfolio_admin.erase_nonce, n = !1;
	document.addEventListener("click", function(t) {
		if (t.target && t.target.closest(".charming-portfolio-erase-data-btn") && e(t.target.closest(".charming-portfolio-erase-data-btn").closest(".section-danger-zone").querySelector(".erase-data-challange")).slideDown(), t.target && t.target.closest(".cp-erase-data-cancel-btn")) {
			let n = t.target.closest(".cp-erase-data-cancel-btn").closest(".section-danger-zone").querySelector(".erase-data-challange"), r = n.querySelector(".erase-data-challange-input"), i = n.querySelector(".cp-erase-data-confirm-btn");
			r.value = "", i.setAttribute("disabled", "disabled"), e(n).slideUp();
		}
		t.target && t.target.closest(".cp-erase-data-confirm-btn") && r();
	}), document.addEventListener("keyup", function(e) {
		if (e.target && e.target.closest(".erase-data-challange-input") && (console.log("keyup detected"), console.log(e.target.value), e.target.value === "cp/erase")) {
			let t = e.target.closest(".section-danger-zone").querySelector(".cp-erase-data-confirm-btn");
			n = !0, t.removeAttribute("disabled");
		}
	});
	function r() {
		n ? e.ajax({
			url: charming_portfolio_admin.ajax_url,
			type: "POST",
			data: {
				action: "charming_portfolio_erase_data",
				nonce: t
			},
			success: function(e) {
				e.success ? (CharmAlert.showAlert("All data erased successfully.", "success"), location.reload()) : CharmAlert.showAlert("Error Erasing Data. Please Try Again.", "error");
			},
			error: function(e, t, n) {
				CharmAlert.showAlert("AJAX Error: " + n, "error");
			}
		}) : CharmAlert.showAlert("Please complete the confirmation challenge.", "error");
	}
})(jQuery);
// node_modules/lodash-es/_freeGlobal.js
var d = typeof global == "object" && global && global.Object === Object && global, f = typeof self == "object" && self && self.Object === Object && self, p = d || f || Function("return this")(), m = p.Symbol, h = Object.prototype, g = h.hasOwnProperty, _ = h.toString, v = m ? m.toStringTag : void 0;
function y(e) {
	var t = g.call(e, v), n = e[v];
	try {
		e[v] = void 0;
		var r = !0;
	} catch {}
	var i = _.call(e);
	return r && (t ? e[v] = n : delete e[v]), i;
}
// node_modules/lodash-es/_objectToString.js
var b = Object.prototype.toString;
function x(e) {
	return b.call(e);
}
// node_modules/lodash-es/_baseGetTag.js
var S = "[object Null]", C = "[object Undefined]", w = m ? m.toStringTag : void 0;
function T(e) {
	return e == null ? e === void 0 ? C : S : w && w in Object(e) ? y(e) : x(e);
}
// node_modules/lodash-es/isObjectLike.js
function E(e) {
	return typeof e == "object" && !!e;
}
// node_modules/lodash-es/isArray.js
var D = Array.isArray;
// node_modules/lodash-es/isObject.js
function O(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
// node_modules/lodash-es/identity.js
function ee(e) {
	return e;
}
// node_modules/lodash-es/isFunction.js
var te = "[object AsyncFunction]", ne = "[object Function]", k = "[object GeneratorFunction]", re = "[object Proxy]";
function ie(e) {
	if (!O(e)) return !1;
	var t = T(e);
	return t == ne || t == k || t == te || t == re;
}
// node_modules/lodash-es/_coreJsData.js
var A = p["__core-js_shared__"], ae = function() {
	var e = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function oe(e) {
	return !!ae && ae in e;
}
// node_modules/lodash-es/_toSource.js
var j = Function.prototype.toString;
function M(e) {
	if (e != null) {
		try {
			return j.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
// node_modules/lodash-es/_baseIsNative.js
var se = /[\\^$.*+?()[\]{}|]/g, ce = /^\[object .+?Constructor\]$/, le = Function.prototype, ue = Object.prototype, de = le.toString, fe = ue.hasOwnProperty, pe = RegExp("^" + de.call(fe).replace(se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function me(e) {
	return !O(e) || oe(e) ? !1 : (ie(e) ? pe : ce).test(M(e));
}
// node_modules/lodash-es/_getValue.js
function he(e, t) {
	return e?.[t];
}
// node_modules/lodash-es/_getNative.js
function ge(e, t) {
	var n = he(e, t);
	return me(n) ? n : void 0;
}
// node_modules/lodash-es/_WeakMap.js
var _e = ge(p, "WeakMap"), ve = Object.create, ye = function() {
	function e() {}
	return function(t) {
		if (!O(t)) return {};
		if (ve) return ve(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
// node_modules/lodash-es/_apply.js
function be(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
// node_modules/lodash-es/_copyArray.js
function xe(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
// node_modules/lodash-es/_shortOut.js
var Se = 800, Ce = 16, N = Date.now;
function we(e) {
	var t = 0, n = 0;
	return function() {
		var r = N(), i = Ce - (r - n);
		if (n = r, i > 0) {
			if (++t >= Se) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
// node_modules/lodash-es/constant.js
function Te(e) {
	return function() {
		return e;
	};
}
// node_modules/lodash-es/_defineProperty.js
var Ee = function() {
	try {
		var e = ge(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), De = we(Ee ? function(e, t) {
	return Ee(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: Te(t),
		writable: !0
	});
} : ee);
// node_modules/lodash-es/_arrayEach.js
function Oe(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
// node_modules/lodash-es/_isIndex.js
var ke = 9007199254740991, Ae = /^(?:0|[1-9]\d*)$/;
function je(e, t) {
	var n = typeof e;
	return t ??= ke, !!t && (n == "number" || n != "symbol" && Ae.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
// node_modules/lodash-es/_baseAssignValue.js
function Me(e, t, n) {
	t == "__proto__" && Ee ? Ee(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
// node_modules/lodash-es/eq.js
function Ne(e, t) {
	return e === t || e !== e && t !== t;
}
// node_modules/lodash-es/_assignValue.js
var Pe = Object.prototype.hasOwnProperty;
function Fe(e, t, n) {
	var r = e[t];
	(!(Pe.call(e, t) && Ne(r, n)) || n === void 0 && !(t in e)) && Me(e, t, n);
}
// node_modules/lodash-es/_copyObject.js
function Ie(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Me(n, s, c) : Fe(n, s, c);
	}
	return n;
}
// node_modules/lodash-es/_overRest.js
var Le = Math.max;
function Re(e, t, n) {
	return t = Le(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = Le(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), be(e, this, s);
	};
}
// node_modules/lodash-es/_baseRest.js
function ze(e, t) {
	return De(Re(e, t, ee), e + "");
}
// node_modules/lodash-es/isLength.js
var Be = 9007199254740991;
function Ve(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Be;
}
// node_modules/lodash-es/isArrayLike.js
function He(e) {
	return e != null && Ve(e.length) && !ie(e);
}
// node_modules/lodash-es/_isIterateeCall.js
function Ue(e, t, n) {
	if (!O(n)) return !1;
	var r = typeof t;
	return (r == "number" ? He(n) && je(t, n.length) : r == "string" && t in n) ? Ne(n[t], e) : !1;
}
// node_modules/lodash-es/_createAssigner.js
function We(e) {
	return ze(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && Ue(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
// node_modules/lodash-es/_isPrototype.js
var Ge = Object.prototype;
function Ke(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Ge);
}
// node_modules/lodash-es/_baseTimes.js
function qe(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
// node_modules/lodash-es/_baseIsArguments.js
var Je = "[object Arguments]";
function P(e) {
	return E(e) && T(e) == Je;
}
// node_modules/lodash-es/isArguments.js
var Ye = Object.prototype, Xe = Ye.hasOwnProperty, Ze = Ye.propertyIsEnumerable, Qe = P(function() {
	return arguments;
}()) ? P : function(e) {
	return E(e) && Xe.call(e, "callee") && !Ze.call(e, "callee");
};
// node_modules/lodash-es/stubFalse.js
function $e() {
	return !1;
}
// node_modules/lodash-es/isBuffer.js
var F = typeof exports == "object" && exports && !exports.nodeType && exports, et = F && typeof module == "object" && module && !module.nodeType && module, I = et && et.exports === F ? p.Buffer : void 0, tt = (I ? I.isBuffer : void 0) || $e, nt = "[object Arguments]", rt = "[object Array]", it = "[object Boolean]", at = "[object Date]", ot = "[object Error]", st = "[object Function]", ct = "[object Map]", lt = "[object Number]", ut = "[object Object]", dt = "[object RegExp]", ft = "[object Set]", pt = "[object String]", mt = "[object WeakMap]", ht = "[object ArrayBuffer]", gt = "[object DataView]", _t = "[object Float32Array]", vt = "[object Float64Array]", yt = "[object Int8Array]", bt = "[object Int16Array]", xt = "[object Int32Array]", St = "[object Uint8Array]", Ct = "[object Uint8ClampedArray]", wt = "[object Uint16Array]", Tt = "[object Uint32Array]", L = {};
L[_t] = L[vt] = L[yt] = L[bt] = L[xt] = L[St] = L[Ct] = L[wt] = L[Tt] = !0, L[nt] = L[rt] = L[ht] = L[it] = L[gt] = L[at] = L[ot] = L[st] = L[ct] = L[lt] = L[ut] = L[dt] = L[ft] = L[pt] = L[mt] = !1;
function Et(e) {
	return E(e) && Ve(e.length) && !!L[T(e)];
}
// node_modules/lodash-es/_baseUnary.js
function Dt(e) {
	return function(t) {
		return e(t);
	};
}
// node_modules/lodash-es/_nodeUtil.js
var Ot = typeof exports == "object" && exports && !exports.nodeType && exports, kt = Ot && typeof module == "object" && module && !module.nodeType && module, At = kt && kt.exports === Ot && d.process, jt = function() {
	try {
		return kt && kt.require && kt.require("util").types || At && At.binding && At.binding("util");
	} catch {}
}(), Mt = jt && jt.isTypedArray, Nt = Mt ? Dt(Mt) : Et, Pt = Object.prototype.hasOwnProperty;
function Ft(e, t) {
	var n = D(e), r = !n && Qe(e), i = !n && !r && tt(e), a = !n && !r && !i && Nt(e), o = n || r || i || a, s = o ? qe(e.length, String) : [], c = s.length;
	for (var l in e) (t || Pt.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || je(l, c))) && s.push(l);
	return s;
}
// node_modules/lodash-es/_overArg.js
function R(e, t) {
	return function(n) {
		return e(t(n));
	};
}
// node_modules/lodash-es/_nativeKeys.js
var It = R(Object.keys, Object), Lt = Object.prototype.hasOwnProperty;
function Rt(e) {
	if (!Ke(e)) return It(e);
	var t = [];
	for (var n in Object(e)) Lt.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
// node_modules/lodash-es/keys.js
function zt(e) {
	return He(e) ? Ft(e) : Rt(e);
}
// node_modules/lodash-es/_nativeKeysIn.js
function Bt(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
// node_modules/lodash-es/_baseKeysIn.js
var z = Object.prototype.hasOwnProperty;
function Vt(e) {
	if (!O(e)) return Bt(e);
	var t = Ke(e), n = [];
	for (var r in e) (r != "constructor" || !t && z.call(e, r)) && n.push(r);
	return n;
}
// node_modules/lodash-es/keysIn.js
function Ht(e) {
	return He(e) ? Ft(e, !0) : Vt(e);
}
// node_modules/lodash-es/_nativeCreate.js
var Ut = ge(Object, "create");
// node_modules/lodash-es/_hashClear.js
function Wt() {
	this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
// node_modules/lodash-es/_hashDelete.js
function Gt(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
// node_modules/lodash-es/_hashGet.js
var Kt = "__lodash_hash_undefined__", qt = Object.prototype.hasOwnProperty;
function Jt(e) {
	var t = this.__data__;
	if (Ut) {
		var n = t[e];
		return n === Kt ? void 0 : n;
	}
	return qt.call(t, e) ? t[e] : void 0;
}
// node_modules/lodash-es/_hashHas.js
var Yt = Object.prototype.hasOwnProperty;
function Xt(e) {
	var t = this.__data__;
	return Ut ? t[e] !== void 0 : Yt.call(t, e);
}
// node_modules/lodash-es/_hashSet.js
var Zt = "__lodash_hash_undefined__";
function Qt(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Ut && t === void 0 ? Zt : t, this;
}
// node_modules/lodash-es/_Hash.js
function $t(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
$t.prototype.clear = Wt, $t.prototype.delete = Gt, $t.prototype.get = Jt, $t.prototype.has = Xt, $t.prototype.set = Qt;
// node_modules/lodash-es/_listCacheClear.js
function en() {
	this.__data__ = [], this.size = 0;
}
// node_modules/lodash-es/_assocIndexOf.js
function tn(e, t) {
	for (var n = e.length; n--;) if (Ne(e[n][0], t)) return n;
	return -1;
}
// node_modules/lodash-es/_listCacheDelete.js
var nn = Array.prototype.splice;
function rn(e) {
	var t = this.__data__, n = tn(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : nn.call(t, n, 1), --this.size, !0);
}
// node_modules/lodash-es/_listCacheGet.js
function an(e) {
	var t = this.__data__, n = tn(t, e);
	return n < 0 ? void 0 : t[n][1];
}
// node_modules/lodash-es/_listCacheHas.js
function on(e) {
	return tn(this.__data__, e) > -1;
}
// node_modules/lodash-es/_listCacheSet.js
function sn(e, t) {
	var n = this.__data__, r = tn(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
// node_modules/lodash-es/_ListCache.js
function cn(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
cn.prototype.clear = en, cn.prototype.delete = rn, cn.prototype.get = an, cn.prototype.has = on, cn.prototype.set = sn;
// node_modules/lodash-es/_Map.js
var ln = ge(p, "Map");
// node_modules/lodash-es/_mapCacheClear.js
function un() {
	this.size = 0, this.__data__ = {
		hash: new $t(),
		map: new (ln || cn)(),
		string: new $t()
	};
}
// node_modules/lodash-es/_isKeyable.js
function dn(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
// node_modules/lodash-es/_getMapData.js
function fn(e, t) {
	var n = e.__data__;
	return dn(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
// node_modules/lodash-es/_mapCacheDelete.js
function pn(e) {
	var t = fn(this, e).delete(e);
	return this.size -= +!!t, t;
}
// node_modules/lodash-es/_mapCacheGet.js
function mn(e) {
	return fn(this, e).get(e);
}
// node_modules/lodash-es/_mapCacheHas.js
function hn(e) {
	return fn(this, e).has(e);
}
// node_modules/lodash-es/_mapCacheSet.js
function gn(e, t) {
	var n = fn(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
// node_modules/lodash-es/_MapCache.js
function _n(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
_n.prototype.clear = un, _n.prototype.delete = pn, _n.prototype.get = mn, _n.prototype.has = hn, _n.prototype.set = gn;
// node_modules/lodash-es/_arrayPush.js
function vn(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
// node_modules/lodash-es/_getPrototype.js
var yn = R(Object.getPrototypeOf, Object), bn = "[object Object]", xn = Function.prototype, Sn = Object.prototype, Cn = xn.toString, wn = Sn.hasOwnProperty, Tn = Cn.call(Object);
function En(e) {
	if (!E(e) || T(e) != bn) return !1;
	var t = yn(e);
	if (t === null) return !0;
	var n = wn.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Cn.call(n) == Tn;
}
// node_modules/lodash-es/_stackClear.js
function Dn() {
	this.__data__ = new cn(), this.size = 0;
}
// node_modules/lodash-es/_stackDelete.js
function On(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
// node_modules/lodash-es/_stackGet.js
function kn(e) {
	return this.__data__.get(e);
}
// node_modules/lodash-es/_stackHas.js
function An(e) {
	return this.__data__.has(e);
}
// node_modules/lodash-es/_stackSet.js
var jn = 200;
function Mn(e, t) {
	var n = this.__data__;
	if (n instanceof cn) {
		var r = n.__data__;
		if (!ln || r.length < jn - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new _n(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
// node_modules/lodash-es/_Stack.js
function Nn(e) {
	var t = this.__data__ = new cn(e);
	this.size = t.size;
}
Nn.prototype.clear = Dn, Nn.prototype.delete = On, Nn.prototype.get = kn, Nn.prototype.has = An, Nn.prototype.set = Mn;
// node_modules/lodash-es/_baseAssign.js
function Pn(e, t) {
	return e && Ie(t, zt(t), e);
}
// node_modules/lodash-es/_baseAssignIn.js
function Fn(e, t) {
	return e && Ie(t, Ht(t), e);
}
// node_modules/lodash-es/_cloneBuffer.js
var In = typeof exports == "object" && exports && !exports.nodeType && exports, Ln = In && typeof module == "object" && module && !module.nodeType && module, Rn = Ln && Ln.exports === In ? p.Buffer : void 0, zn = Rn ? Rn.allocUnsafe : void 0;
function Bn(e, t) {
	if (t) return e.slice();
	var n = e.length, r = zn ? zn(n) : new e.constructor(n);
	return e.copy(r), r;
}
// node_modules/lodash-es/_arrayFilter.js
function Vn(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
// node_modules/lodash-es/stubArray.js
function Hn() {
	return [];
}
// node_modules/lodash-es/_getSymbols.js
var Un = Object.prototype.propertyIsEnumerable, Wn = Object.getOwnPropertySymbols, Gn = Wn ? function(e) {
	return e == null ? [] : (e = Object(e), Vn(Wn(e), function(t) {
		return Un.call(e, t);
	}));
} : Hn;
// node_modules/lodash-es/_copySymbols.js
function Kn(e, t) {
	return Ie(e, Gn(e), t);
}
// node_modules/lodash-es/_getSymbolsIn.js
var qn = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) vn(t, Gn(e)), e = yn(e);
	return t;
} : Hn;
// node_modules/lodash-es/_copySymbolsIn.js
function Jn(e, t) {
	return Ie(e, qn(e), t);
}
// node_modules/lodash-es/_baseGetAllKeys.js
function Yn(e, t, n) {
	var r = t(e);
	return D(e) ? r : vn(r, n(e));
}
// node_modules/lodash-es/_getAllKeys.js
function Xn(e) {
	return Yn(e, zt, Gn);
}
// node_modules/lodash-es/_getAllKeysIn.js
function Zn(e) {
	return Yn(e, Ht, qn);
}
// node_modules/lodash-es/_DataView.js
var Qn = ge(p, "DataView"), $n = ge(p, "Promise"), er = ge(p, "Set"), tr = "[object Map]", nr = "[object Object]", rr = "[object Promise]", ir = "[object Set]", ar = "[object WeakMap]", or = "[object DataView]", sr = M(Qn), cr = M(ln), lr = M($n), ur = M(er), dr = M(_e), fr = T;
(Qn && fr(new Qn(/* @__PURE__ */ new ArrayBuffer(1))) != or || ln && fr(new ln()) != tr || $n && fr($n.resolve()) != rr || er && fr(new er()) != ir || _e && fr(new _e()) != ar) && (fr = function(e) {
	var t = T(e), n = t == nr ? e.constructor : void 0, r = n ? M(n) : "";
	if (r) switch (r) {
		case sr: return or;
		case cr: return tr;
		case lr: return rr;
		case ur: return ir;
		case dr: return ar;
	}
	return t;
});
var pr = fr, mr = Object.prototype.hasOwnProperty;
function hr(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && mr.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
// node_modules/lodash-es/_Uint8Array.js
var gr = p.Uint8Array;
// node_modules/lodash-es/_cloneArrayBuffer.js
function _r(e) {
	var t = new e.constructor(e.byteLength);
	return new gr(t).set(new gr(e)), t;
}
// node_modules/lodash-es/_cloneDataView.js
function vr(e, t) {
	var n = t ? _r(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
// node_modules/lodash-es/_cloneRegExp.js
var yr = /\w*$/;
function br(e) {
	var t = new e.constructor(e.source, yr.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
// node_modules/lodash-es/_cloneSymbol.js
var xr = m ? m.prototype : void 0, Sr = xr ? xr.valueOf : void 0;
function Cr(e) {
	return Sr ? Object(Sr.call(e)) : {};
}
// node_modules/lodash-es/_cloneTypedArray.js
function wr(e, t) {
	var n = t ? _r(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
// node_modules/lodash-es/_initCloneByTag.js
var Tr = "[object Boolean]", Er = "[object Date]", Dr = "[object Map]", Or = "[object Number]", kr = "[object RegExp]", Ar = "[object Set]", jr = "[object String]", Mr = "[object Symbol]", Nr = "[object ArrayBuffer]", Pr = "[object DataView]", Fr = "[object Float32Array]", Ir = "[object Float64Array]", Lr = "[object Int8Array]", Rr = "[object Int16Array]", zr = "[object Int32Array]", Br = "[object Uint8Array]", Vr = "[object Uint8ClampedArray]", Hr = "[object Uint16Array]", Ur = "[object Uint32Array]";
function Wr(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Nr: return _r(e);
		case Tr:
		case Er: return new r(+e);
		case Pr: return vr(e, n);
		case Fr:
		case Ir:
		case Lr:
		case Rr:
		case zr:
		case Br:
		case Vr:
		case Hr:
		case Ur: return wr(e, n);
		case Dr: return new r();
		case Or:
		case jr: return new r(e);
		case kr: return br(e);
		case Ar: return new r();
		case Mr: return Cr(e);
	}
}
// node_modules/lodash-es/_initCloneObject.js
function Gr(e) {
	return typeof e.constructor == "function" && !Ke(e) ? ye(yn(e)) : {};
}
// node_modules/lodash-es/_baseIsMap.js
var Kr = "[object Map]";
function qr(e) {
	return E(e) && pr(e) == Kr;
}
// node_modules/lodash-es/isMap.js
var Jr = jt && jt.isMap, Yr = Jr ? Dt(Jr) : qr, Xr = "[object Set]";
function Zr(e) {
	return E(e) && pr(e) == Xr;
}
// node_modules/lodash-es/isSet.js
var Qr = jt && jt.isSet, $r = Qr ? Dt(Qr) : Zr, ei = 1, ti = 2, ni = 4, ri = "[object Arguments]", ii = "[object Array]", ai = "[object Boolean]", oi = "[object Date]", si = "[object Error]", ci = "[object Function]", li = "[object GeneratorFunction]", ui = "[object Map]", di = "[object Number]", fi = "[object Object]", pi = "[object RegExp]", mi = "[object Set]", hi = "[object String]", gi = "[object Symbol]", _i = "[object WeakMap]", vi = "[object ArrayBuffer]", yi = "[object DataView]", bi = "[object Float32Array]", xi = "[object Float64Array]", Si = "[object Int8Array]", Ci = "[object Int16Array]", wi = "[object Int32Array]", Ti = "[object Uint8Array]", Ei = "[object Uint8ClampedArray]", Di = "[object Uint16Array]", Oi = "[object Uint32Array]", B = {};
B[ri] = B[ii] = B[vi] = B[yi] = B[ai] = B[oi] = B[bi] = B[xi] = B[Si] = B[Ci] = B[wi] = B[ui] = B[di] = B[fi] = B[pi] = B[mi] = B[hi] = B[gi] = B[Ti] = B[Ei] = B[Di] = B[Oi] = !0, B[si] = B[ci] = B[_i] = !1;
function ki(e, t, n, r, i, a) {
	var o, s = t & ei, c = t & ti, l = t & ni;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!O(e)) return e;
	var u = D(e);
	if (u) {
		if (o = hr(e), !s) return xe(e, o);
	} else {
		var d = pr(e), f = d == ci || d == li;
		if (tt(e)) return Bn(e, s);
		if (d == fi || d == ri || f && !i) {
			if (o = c || f ? {} : Gr(e), !s) return c ? Jn(e, Fn(o, e)) : Kn(e, Pn(o, e));
		} else {
			if (!B[d]) return i ? e : {};
			o = Wr(e, d, s);
		}
	}
	a ||= new Nn();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), $r(e) ? e.forEach(function(r) {
		o.add(ki(r, t, n, r, e, a));
	}) : Yr(e) && e.forEach(function(r, i) {
		o.set(i, ki(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Zn : Xn : c ? Ht : zt)(e);
	return Oe(m || e, function(r, i) {
		m && (i = r, r = e[i]), Fe(o, i, ki(r, t, n, i, e, a));
	}), o;
}
// node_modules/lodash-es/cloneDeep.js
var Ai = 1, ji = 4;
function Mi(e) {
	return ki(e, Ai | ji);
}
// node_modules/lodash-es/_setCacheAdd.js
var Ni = "__lodash_hash_undefined__";
function Pi(e) {
	return this.__data__.set(e, Ni), this;
}
// node_modules/lodash-es/_setCacheHas.js
function Fi(e) {
	return this.__data__.has(e);
}
// node_modules/lodash-es/_SetCache.js
function Ii(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new _n(); ++t < n;) this.add(e[t]);
}
Ii.prototype.add = Ii.prototype.push = Pi, Ii.prototype.has = Fi;
// node_modules/lodash-es/_arraySome.js
function Li(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
// node_modules/lodash-es/_cacheHas.js
function Ri(e, t) {
	return e.has(t);
}
// node_modules/lodash-es/_equalArrays.js
var zi = 1, Bi = 2;
function Vi(e, t, n, r, i, a) {
	var o = n & zi, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Bi ? new Ii() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Li(t, function(e, t) {
				if (!Ri(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
// node_modules/lodash-es/_mapToArray.js
function Hi(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
// node_modules/lodash-es/_setToArray.js
function Ui(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
// node_modules/lodash-es/_equalByTag.js
var Wi = 1, Gi = 2, Ki = "[object Boolean]", qi = "[object Date]", Ji = "[object Error]", Yi = "[object Map]", Xi = "[object Number]", Zi = "[object RegExp]", Qi = "[object Set]", $i = "[object String]", ea = "[object Symbol]", ta = "[object ArrayBuffer]", na = "[object DataView]", ra = m ? m.prototype : void 0, ia = ra ? ra.valueOf : void 0;
function aa(e, t, n, r, i, a, o) {
	switch (n) {
		case na:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case ta: return !(e.byteLength != t.byteLength || !a(new gr(e), new gr(t)));
		case Ki:
		case qi:
		case Xi: return Ne(+e, +t);
		case Ji: return e.name == t.name && e.message == t.message;
		case Zi:
		case $i: return e == t + "";
		case Yi: var s = Hi;
		case Qi:
			var c = r & Wi;
			if (s ||= Ui, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Gi, o.set(e, t);
			var u = Vi(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case ea: if (ia) return ia.call(e) == ia.call(t);
	}
	return !1;
}
// node_modules/lodash-es/_equalObjects.js
var oa = 1, sa = Object.prototype.hasOwnProperty;
function ca(e, t, n, r, i, a) {
	var o = n & oa, s = Xn(e), c = s.length;
	if (c != Xn(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : sa.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
// node_modules/lodash-es/_baseIsEqualDeep.js
var la = 1, ua = "[object Arguments]", da = "[object Array]", fa = "[object Object]", pa = Object.prototype.hasOwnProperty;
function ma(e, t, n, r, i, a) {
	var o = D(e), s = D(t), c = o ? da : pr(e), l = s ? da : pr(t);
	c = c == ua ? fa : c, l = l == ua ? fa : l;
	var u = c == fa, d = l == fa, f = c == l;
	if (f && tt(e)) {
		if (!tt(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new Nn(), o || Nt(e) ? Vi(e, t, n, r, i, a) : aa(e, t, c, n, r, i, a);
	if (!(n & la)) {
		var p = u && pa.call(e, "__wrapped__"), m = d && pa.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new Nn(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new Nn(), ca(e, t, n, r, i, a)) : !1;
}
// node_modules/lodash-es/_baseIsEqual.js
function ha(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !E(e) && !E(t) ? e !== e && t !== t : ma(e, t, n, r, ha, i);
}
// node_modules/lodash-es/_createBaseFor.js
function ga(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
// node_modules/lodash-es/_baseFor.js
var _a = ga();
// node_modules/lodash-es/_assignMergeValue.js
function va(e, t, n) {
	(n !== void 0 && !Ne(e[t], n) || n === void 0 && !(t in e)) && Me(e, t, n);
}
// node_modules/lodash-es/isArrayLikeObject.js
function ya(e) {
	return E(e) && He(e);
}
// node_modules/lodash-es/_safeGet.js
function ba(e, t) {
	if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") return e[t];
}
// node_modules/lodash-es/toPlainObject.js
function xa(e) {
	return Ie(e, Ht(e));
}
// node_modules/lodash-es/_baseMergeDeep.js
function Sa(e, t, n, r, i, a, o) {
	var s = ba(e, n), c = ba(t, n), l = o.get(c);
	if (l) va(e, n, l);
	else {
		var u = a ? a(s, c, n + "", e, t, o) : void 0, d = u === void 0;
		if (d) {
			var f = D(c), p = !f && tt(c), m = !f && !p && Nt(c);
			u = c, f || p || m ? D(s) ? u = s : ya(s) ? u = xe(s) : p ? (d = !1, u = Bn(c, !0)) : m ? (d = !1, u = wr(c, !0)) : u = [] : En(c) || Qe(c) ? (u = s, Qe(s) ? u = xa(s) : (!O(s) || ie(s)) && (u = Gr(c))) : d = !1;
		}
		d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), va(e, n, u);
	}
}
// node_modules/lodash-es/_baseMerge.js
function Ca(e, t, n, r, i) {
	e !== t && _a(t, function(a, o) {
		if (i ||= new Nn(), O(a)) Sa(e, t, o, n, Ca, r, i);
		else {
			var s = r ? r(ba(e, o), a, o + "", e, t, i) : void 0;
			s === void 0 && (s = a), va(e, o, s);
		}
	}, Ht);
}
// node_modules/lodash-es/isEqual.js
function wa(e, t) {
	return ha(e, t);
}
// node_modules/lodash-es/merge.js
var Ta = We(function(e, t, n) {
	Ca(e, t, n);
}), Ea = /* @__PURE__ */ s({
	Attributor: () => Da,
	AttributorStore: () => Pa,
	BlockBlot: () => Ga,
	ClassAttributor: () => H,
	ContainerBlot: () => qa,
	EmbedBlot: () => G,
	InlineBlot: () => Ua,
	LeafBlot: () => U,
	ParentBlot: () => W,
	Registry: () => Aa,
	Scope: () => V,
	ScrollBlot: () => Za,
	StyleAttributor: () => Na,
	TextBlot: () => $a
}), V = /* @__PURE__ */ ((e) => (e[e.TYPE = 3] = "TYPE", e[e.LEVEL = 12] = "LEVEL", e[e.ATTRIBUTE = 13] = "ATTRIBUTE", e[e.BLOT = 14] = "BLOT", e[e.INLINE = 7] = "INLINE", e[e.BLOCK = 11] = "BLOCK", e[e.BLOCK_BLOT = 10] = "BLOCK_BLOT", e[e.INLINE_BLOT = 6] = "INLINE_BLOT", e[e.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", e[e.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", e[e.ANY = 15] = "ANY", e))(V || {}), Da = class {
	constructor(e, t, n = {}) {
		this.attrName = e, this.keyName = t;
		let r = V.TYPE & V.ATTRIBUTE;
		this.scope = n.scope == null ? V.ATTRIBUTE : n.scope & V.LEVEL | r, n.whitelist != null && (this.whitelist = n.whitelist);
	}
	static keys(e) {
		return Array.from(e.attributes).map((e) => e.name);
	}
	add(e, t) {
		return this.canAdd(e, t) ? (e.setAttribute(this.keyName, t), !0) : !1;
	}
	canAdd(e, t) {
		return this.whitelist == null ? !0 : typeof t == "string" ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1;
	}
	remove(e) {
		e.removeAttribute(this.keyName);
	}
	value(e) {
		let t = e.getAttribute(this.keyName);
		return this.canAdd(e, t) && t ? t : "";
	}
}, Oa = class extends Error {
	constructor(e) {
		e = "[Parchment] " + e, super(e), this.message = e, this.name = this.constructor.name;
	}
}, ka = class e {
	constructor() {
		this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
	}
	static find(e, t = !1) {
		if (e == null) return null;
		if (this.blots.has(e)) return this.blots.get(e) || null;
		if (t) {
			let n = null;
			try {
				n = e.parentNode;
			} catch {
				return null;
			}
			return this.find(n, t);
		}
		return null;
	}
	create(t, n, r) {
		let i = this.query(n);
		if (i == null) throw new Oa(`Unable to create ${n} blot`);
		let a = i, o = new a(t, n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : a.create(r), r);
		return e.blots.set(o.domNode, o), o;
	}
	find(t, n = !1) {
		return e.find(t, n);
	}
	query(e, t = V.ANY) {
		let n;
		return typeof e == "string" ? n = this.types[e] || this.attributes[e] : e instanceof Text || e.nodeType === Node.TEXT_NODE ? n = this.types.text : typeof e == "number" ? e & V.LEVEL & V.BLOCK ? n = this.types.block : e & V.LEVEL & V.INLINE && (n = this.types.inline) : e instanceof Element && ((e.getAttribute("class") || "").split(/\s+/).some((e) => (n = this.classes[e], !!n)), n ||= this.tags[e.tagName]), n == null ? null : "scope" in n && t & V.LEVEL & n.scope && t & V.TYPE & n.scope ? n : null;
	}
	register(...e) {
		return e.map((e) => {
			let t = "blotName" in e, n = "attrName" in e;
			if (!t && !n) throw new Oa("Invalid definition");
			if (t && e.blotName === "abstract") throw new Oa("Cannot register abstract class");
			let r = t ? e.blotName : n ? e.attrName : void 0;
			return this.types[r] = e, n ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : t && (e.className && (this.classes[e.className] = e), e.tagName && (e.tagName = Array.isArray(e.tagName) ? e.tagName.map((e) => e.toUpperCase()) : e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((t) => {
				(this.tags[t] == null || e.className == null) && (this.tags[t] = e);
			}))), e;
		});
	}
};
ka.blots = /* @__PURE__ */ new WeakMap();
var Aa = ka;
function ja(e, t) {
	return (e.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
var H = class extends Da {
	static keys(e) {
		return (e.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
	}
	add(e, t) {
		return this.canAdd(e, t) ? (this.remove(e), e.classList.add(`${this.keyName}-${t}`), !0) : !1;
	}
	remove(e) {
		ja(e, this.keyName).forEach((t) => {
			e.classList.remove(t);
		}), e.classList.length === 0 && e.removeAttribute("class");
	}
	value(e) {
		let t = (ja(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
		return this.canAdd(e, t) ? t : "";
	}
};
function Ma(e) {
	let t = e.split("-"), n = t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
	return t[0] + n;
}
var Na = class extends Da {
	static keys(e) {
		return (e.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
	}
	add(e, t) {
		return this.canAdd(e, t) ? (e.style[Ma(this.keyName)] = t, !0) : !1;
	}
	remove(e) {
		e.style[Ma(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style");
	}
	value(e) {
		let t = e.style[Ma(this.keyName)];
		return this.canAdd(e, t) ? t : "";
	}
}, Pa = class {
	constructor(e) {
		this.attributes = {}, this.domNode = e, this.build();
	}
	attribute(e, t) {
		t ? e.add(this.domNode, t) && (e.value(this.domNode) == null ? delete this.attributes[e.attrName] : this.attributes[e.attrName] = e) : (e.remove(this.domNode), delete this.attributes[e.attrName]);
	}
	build() {
		this.attributes = {};
		let e = Aa.find(this.domNode);
		if (e == null) return;
		let t = Da.keys(this.domNode), n = H.keys(this.domNode), r = Na.keys(this.domNode);
		t.concat(n).concat(r).forEach((t) => {
			let n = e.scroll.query(t, V.ATTRIBUTE);
			n instanceof Da && (this.attributes[n.attrName] = n);
		});
	}
	copy(e) {
		Object.keys(this.attributes).forEach((t) => {
			let n = this.attributes[t].value(this.domNode);
			e.format(t, n);
		});
	}
	move(e) {
		this.copy(e), Object.keys(this.attributes).forEach((e) => {
			this.attributes[e].remove(this.domNode);
		}), this.attributes = {};
	}
	values() {
		return Object.keys(this.attributes).reduce((e, t) => (e[t] = this.attributes[t].value(this.domNode), e), {});
	}
}, Fa = class {
	constructor(e, t) {
		this.scroll = e, this.domNode = t, Aa.blots.set(t, this), this.prev = null, this.next = null;
	}
	static create(e) {
		if (this.tagName == null) throw new Oa("Blot definition missing tagName");
		let t, n;
		return Array.isArray(this.tagName) ? (typeof e == "string" ? (n = e.toUpperCase(), parseInt(n, 10).toString() === n && (n = parseInt(n, 10))) : typeof e == "number" && (n = e), t = typeof n == "number" ? document.createElement(this.tagName[n - 1]) : n && this.tagName.indexOf(n) > -1 ? document.createElement(n) : document.createElement(this.tagName[0])) : t = document.createElement(this.tagName), this.className && t.classList.add(this.className), t;
	}
	get statics() {
		return this.constructor;
	}
	attach() {}
	clone() {
		let e = this.domNode.cloneNode(!1);
		return this.scroll.create(e);
	}
	detach() {
		this.parent != null && this.parent.removeChild(this), Aa.blots.delete(this.domNode);
	}
	deleteAt(e, t) {
		this.isolate(e, t).remove();
	}
	formatAt(e, t, n, r) {
		let i = this.isolate(e, t);
		if (this.scroll.query(n, V.BLOT) != null && r) i.wrap(n, r);
		else if (this.scroll.query(n, V.ATTRIBUTE) != null) {
			let e = this.scroll.create(this.statics.scope);
			i.wrap(e), e.format(n, r);
		}
	}
	insertAt(e, t, n) {
		let r = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n), i = this.split(e);
		this.parent.insertBefore(r, i || void 0);
	}
	isolate(e, t) {
		let n = this.split(e);
		if (n == null) throw Error("Attempt to isolate at end");
		return n.split(t), n;
	}
	length() {
		return 1;
	}
	offset(e = this.parent) {
		return this.parent == null || this === e ? 0 : this.parent.children.offset(this) + this.parent.offset(e);
	}
	optimize(e) {
		this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
	}
	remove() {
		this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
	}
	replaceWith(e, t) {
		let n = typeof e == "string" ? this.scroll.create(e, t) : e;
		return this.parent != null && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n;
	}
	split(e, t) {
		return e === 0 ? this : this.next;
	}
	update(e, t) {}
	wrap(e, t) {
		let n = typeof e == "string" ? this.scroll.create(e, t) : e;
		if (this.parent != null && this.parent.insertBefore(n, this.next || void 0), typeof n.appendChild != "function") throw new Oa(`Cannot wrap ${e}`);
		return n.appendChild(this), n;
	}
};
Fa.blotName = "abstract";
var Ia = Fa, La = class extends Ia {
	static value(e) {
		return !0;
	}
	index(e, t) {
		return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
	}
	position(e, t) {
		let n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
		return e > 0 && (n += 1), [this.parent.domNode, n];
	}
	value() {
		return { [this.statics.blotName]: this.statics.value(this.domNode) || !0 };
	}
};
La.scope = V.INLINE_BLOT;
var U = La, Ra = class {
	constructor() {
		this.head = null, this.tail = null, this.length = 0;
	}
	append(...e) {
		if (this.insertBefore(e[0], null), e.length > 1) {
			let t = e.slice(1);
			this.append(...t);
		}
	}
	at(e) {
		let t = this.iterator(), n = t();
		for (; n && e > 0;) --e, n = t();
		return n;
	}
	contains(e) {
		let t = this.iterator(), n = t();
		for (; n;) {
			if (n === e) return !0;
			n = t();
		}
		return !1;
	}
	indexOf(e) {
		let t = this.iterator(), n = t(), r = 0;
		for (; n;) {
			if (n === e) return r;
			r += 1, n = t();
		}
		return -1;
	}
	insertBefore(e, t) {
		e != null && (this.remove(e), e.next = t, t == null ? this.tail == null ? (e.prev = null, this.head = this.tail = e) : (this.tail.next = e, e.prev = this.tail, this.tail = e) : (e.prev = t.prev, t.prev != null && (t.prev.next = e), t.prev = e, t === this.head && (this.head = e)), this.length += 1);
	}
	offset(e) {
		let t = 0, n = this.head;
		for (; n != null;) {
			if (n === e) return t;
			t += n.length(), n = n.next;
		}
		return -1;
	}
	remove(e) {
		this.contains(e) && (e.prev != null && (e.prev.next = e.next), e.next != null && (e.next.prev = e.prev), e === this.head && (this.head = e.next), e === this.tail && (this.tail = e.prev), --this.length);
	}
	iterator(e = this.head) {
		return () => {
			let t = e;
			return e != null && (e = e.next), t;
		};
	}
	find(e, t = !1) {
		let n = this.iterator(), r = n();
		for (; r;) {
			let i = r.length();
			if (e < i || t && e === i && (r.next == null || r.next.length() !== 0)) return [r, e];
			e -= i, r = n();
		}
		return [null, 0];
	}
	forEach(e) {
		let t = this.iterator(), n = t();
		for (; n;) e(n), n = t();
	}
	forEachAt(e, t, n) {
		if (t <= 0) return;
		let [r, i] = this.find(e), a = e - i, o = this.iterator(r), s = o();
		for (; s && a < e + t;) {
			let r = s.length();
			e > a ? n(s, e - a, Math.min(t, a + r - e)) : n(s, 0, Math.min(r, e + t - a)), a += r, s = o();
		}
	}
	map(e) {
		return this.reduce((t, n) => (t.push(e(n)), t), []);
	}
	reduce(e, t) {
		let n = this.iterator(), r = n();
		for (; r;) t = e(t, r), r = n();
		return t;
	}
};
function za(e, t) {
	let n = t.find(e);
	if (n) return n;
	try {
		return t.create(e);
	} catch {
		let n = t.create(V.INLINE);
		return Array.from(e.childNodes).forEach((e) => {
			n.domNode.appendChild(e);
		}), e.parentNode && e.parentNode.replaceChild(n.domNode, e), n.attach(), n;
	}
}
var Ba = class e extends Ia {
	constructor(e, t) {
		super(e, t), this.uiNode = null, this.build();
	}
	appendChild(e) {
		this.insertBefore(e);
	}
	attach() {
		super.attach(), this.children.forEach((e) => {
			e.attach();
		});
	}
	attachUI(t) {
		this.uiNode != null && this.uiNode.remove(), this.uiNode = t, e.uiClass && this.uiNode.classList.add(e.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
	}
	build() {
		this.children = new Ra(), Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).reverse().forEach((e) => {
			try {
				let t = za(e, this.scroll);
				this.insertBefore(t, this.children.head || void 0);
			} catch (e) {
				if (e instanceof Oa) return;
				throw e;
			}
		});
	}
	deleteAt(e, t) {
		if (e === 0 && t === this.length()) return this.remove();
		this.children.forEachAt(e, t, (e, t, n) => {
			e.deleteAt(t, n);
		});
	}
	descendant(t, n = 0) {
		let [r, i] = this.children.find(n);
		return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, i] : r instanceof e ? r.descendant(t, i) : [null, -1];
	}
	descendants(t, n = 0, r = Number.MAX_VALUE) {
		let i = [], a = r;
		return this.children.forEachAt(n, r, (n, r, o) => {
			(t.blotName == null && t(n) || t.blotName != null && n instanceof t) && i.push(n), n instanceof e && (i = i.concat(n.descendants(t, r, a))), a -= o;
		}), i;
	}
	detach() {
		this.children.forEach((e) => {
			e.detach();
		}), super.detach();
	}
	enforceAllowedChildren() {
		let t = !1;
		this.children.forEach((n) => {
			t || this.statics.allowedChildren.some((e) => n instanceof e) || (n.statics.scope === V.BLOCK_BLOT ? (n.next != null && this.splitAfter(n), n.prev != null && this.splitAfter(n.prev), n.parent.unwrap(), t = !0) : n instanceof e ? n.unwrap() : n.remove());
		});
	}
	formatAt(e, t, n, r) {
		this.children.forEachAt(e, t, (e, t, i) => {
			e.formatAt(t, i, n, r);
		});
	}
	insertAt(e, t, n) {
		let [r, i] = this.children.find(e);
		if (r) r.insertAt(i, t, n);
		else {
			let e = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n);
			this.appendChild(e);
		}
	}
	insertBefore(e, t) {
		e.parent != null && e.parent.children.remove(e);
		let n = null;
		this.children.insertBefore(e, t || null), e.parent = this, t != null && (n = t.domNode), (this.domNode.parentNode !== e.domNode || this.domNode.nextSibling !== n) && this.domNode.insertBefore(e.domNode, n), e.attach();
	}
	length() {
		return this.children.reduce((e, t) => e + t.length(), 0);
	}
	moveChildren(e, t) {
		this.children.forEach((n) => {
			e.insertBefore(n, t);
		});
	}
	optimize(e) {
		if (super.optimize(e), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0) {
			if (this.statics.defaultChild != null) {
				let e = this.scroll.create(this.statics.defaultChild.blotName);
				this.appendChild(e);
			} else this.remove();
		}
	}
	path(t, n = !1) {
		let [r, i] = this.children.find(t, n), a = [[this, t]];
		return r instanceof e ? a.concat(r.path(i, n)) : (r != null && a.push([r, i]), a);
	}
	removeChild(e) {
		this.children.remove(e);
	}
	replaceWith(t, n) {
		let r = typeof t == "string" ? this.scroll.create(t, n) : t;
		return r instanceof e && this.moveChildren(r), super.replaceWith(r);
	}
	split(e, t = !1) {
		if (!t) {
			if (e === 0) return this;
			if (e === this.length()) return this.next;
		}
		let n = this.clone();
		return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(e, this.length(), (e, r, i) => {
			let a = e.split(r, t);
			a != null && n.appendChild(a);
		}), n;
	}
	splitAfter(e) {
		let t = this.clone();
		for (; e.next != null;) t.appendChild(e.next);
		return this.parent && this.parent.insertBefore(t, this.next || void 0), t;
	}
	unwrap() {
		this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
	}
	update(e, t) {
		let n = [], r = [];
		e.forEach((e) => {
			e.target === this.domNode && e.type === "childList" && (n.push(...e.addedNodes), r.push(...e.removedNodes));
		}), r.forEach((e) => {
			if (e.parentNode != null && e.tagName !== "IFRAME" && document.body.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) return;
			let t = this.scroll.find(e);
			t != null && (t.domNode.parentNode == null || t.domNode.parentNode === this.domNode) && t.detach();
		}), n.filter((e) => e.parentNode === this.domNode && e !== this.uiNode).sort((e, t) => e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((e) => {
			let t = null;
			e.nextSibling != null && (t = this.scroll.find(e.nextSibling));
			let n = za(e, this.scroll);
			(n.next !== t || n.next == null) && (n.parent != null && n.parent.removeChild(this), this.insertBefore(n, t || void 0));
		}), this.enforceAllowedChildren();
	}
};
Ba.uiClass = "";
var W = Ba;
function Va(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
var Ha = class e extends W {
	static create(e) {
		return super.create(e);
	}
	static formats(t, n) {
		let r = n.query(e.blotName);
		if (r == null || t.tagName !== r.tagName) {
			if (typeof this.tagName == "string") return !0;
			if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
		}
	}
	constructor(e, t) {
		super(e, t), this.attributes = new Pa(this.domNode);
	}
	format(t, n) {
		if (t === this.statics.blotName && !n) this.children.forEach((t) => {
			t instanceof e || (t = t.wrap(e.blotName, !0)), this.attributes.copy(t);
		}), this.unwrap();
		else {
			let e = this.scroll.query(t, V.INLINE);
			if (e == null) return;
			e instanceof Da ? this.attributes.attribute(e, n) : n && (t !== this.statics.blotName || this.formats()[t] !== n) && this.replaceWith(t, n);
		}
	}
	formats() {
		let e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
		return t != null && (e[this.statics.blotName] = t), e;
	}
	formatAt(e, t, n, r) {
		this.formats()[n] != null || this.scroll.query(n, V.ATTRIBUTE) ? this.isolate(e, t).format(n, r) : super.formatAt(e, t, n, r);
	}
	optimize(t) {
		super.optimize(t);
		let n = this.formats();
		if (Object.keys(n).length === 0) return this.unwrap();
		let r = this.next;
		r instanceof e && r.prev === this && Va(n, r.formats()) && (r.moveChildren(this), r.remove());
	}
	replaceWith(e, t) {
		let n = super.replaceWith(e, t);
		return this.attributes.copy(n), n;
	}
	update(e, t) {
		super.update(e, t), e.some((e) => e.target === this.domNode && e.type === "attributes") && this.attributes.build();
	}
	wrap(t, n) {
		let r = super.wrap(t, n);
		return r instanceof e && this.attributes.move(r), r;
	}
};
Ha.allowedChildren = [Ha, U], Ha.blotName = "inline", Ha.scope = V.INLINE_BLOT, Ha.tagName = "SPAN";
var Ua = Ha, Wa = class e extends W {
	static create(e) {
		return super.create(e);
	}
	static formats(t, n) {
		let r = n.query(e.blotName);
		if (r == null || t.tagName !== r.tagName) {
			if (typeof this.tagName == "string") return !0;
			if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
		}
	}
	constructor(e, t) {
		super(e, t), this.attributes = new Pa(this.domNode);
	}
	format(t, n) {
		let r = this.scroll.query(t, V.BLOCK);
		r != null && (r instanceof Da ? this.attributes.attribute(r, n) : t === this.statics.blotName && !n ? this.replaceWith(e.blotName) : n && (t !== this.statics.blotName || this.formats()[t] !== n) && this.replaceWith(t, n));
	}
	formats() {
		let e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
		return t != null && (e[this.statics.blotName] = t), e;
	}
	formatAt(e, t, n, r) {
		this.scroll.query(n, V.BLOCK) == null ? super.formatAt(e, t, n, r) : this.format(n, r);
	}
	insertAt(e, t, n) {
		if (n == null || this.scroll.query(t, V.INLINE) != null) super.insertAt(e, t, n);
		else {
			let r = this.split(e);
			if (r != null) {
				let e = this.scroll.create(t, n);
				r.parent.insertBefore(e, r);
			} else throw Error("Attempt to insertAt after block boundaries");
		}
	}
	replaceWith(e, t) {
		let n = super.replaceWith(e, t);
		return this.attributes.copy(n), n;
	}
	update(e, t) {
		super.update(e, t), e.some((e) => e.target === this.domNode && e.type === "attributes") && this.attributes.build();
	}
};
Wa.blotName = "block", Wa.scope = V.BLOCK_BLOT, Wa.tagName = "P", Wa.allowedChildren = [
	Ua,
	Wa,
	U
];
var Ga = Wa, Ka = class extends W {
	checkMerge() {
		return this.next !== null && this.next.statics.blotName === this.statics.blotName;
	}
	deleteAt(e, t) {
		super.deleteAt(e, t), this.enforceAllowedChildren();
	}
	formatAt(e, t, n, r) {
		super.formatAt(e, t, n, r), this.enforceAllowedChildren();
	}
	insertAt(e, t, n) {
		super.insertAt(e, t, n), this.enforceAllowedChildren();
	}
	optimize(e) {
		super.optimize(e), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
	}
};
Ka.blotName = "container", Ka.scope = V.BLOCK_BLOT;
var qa = Ka, G = class extends U {
	static formats(e, t) {}
	format(e, t) {
		super.formatAt(0, this.length(), e, t);
	}
	formatAt(e, t, n, r) {
		e === 0 && t === this.length() ? this.format(n, r) : super.formatAt(e, t, n, r);
	}
	formats() {
		return this.statics.formats(this.domNode, this.scroll);
	}
}, Ja = {
	attributes: !0,
	characterData: !0,
	characterDataOldValue: !0,
	childList: !0,
	subtree: !0
}, Ya = 100, Xa = class extends W {
	constructor(e, t) {
		super(null, t), this.registry = e, this.scroll = this, this.build(), this.observer = new MutationObserver((e) => {
			this.update(e);
		}), this.observer.observe(this.domNode, Ja), this.attach();
	}
	create(e, t) {
		return this.registry.create(this, e, t);
	}
	find(e, t = !1) {
		let n = this.registry.find(e, t);
		return n ? n.scroll === this ? n : t ? this.find(n.scroll.domNode.parentNode, !0) : null : null;
	}
	query(e, t = V.ANY) {
		return this.registry.query(e, t);
	}
	register(...e) {
		return this.registry.register(...e);
	}
	build() {
		this.scroll != null && super.build();
	}
	detach() {
		super.detach(), this.observer.disconnect();
	}
	deleteAt(e, t) {
		this.update(), e === 0 && t === this.length() ? this.children.forEach((e) => {
			e.remove();
		}) : super.deleteAt(e, t);
	}
	formatAt(e, t, n, r) {
		this.update(), super.formatAt(e, t, n, r);
	}
	insertAt(e, t, n) {
		this.update(), super.insertAt(e, t, n);
	}
	optimize(e = [], t = {}) {
		super.optimize(t);
		let n = t.mutationsMap || /* @__PURE__ */ new WeakMap(), r = Array.from(this.observer.takeRecords());
		for (; r.length > 0;) e.push(r.pop());
		let i = (e, t = !0) => {
			e == null || e === this || e.domNode.parentNode != null && (n.has(e.domNode) || n.set(e.domNode, []), t && i(e.parent));
		}, a = (e) => {
			n.has(e.domNode) && (e instanceof W && e.children.forEach(a), n.delete(e.domNode), e.optimize(t));
		}, o = e;
		for (let t = 0; o.length > 0; t += 1) {
			if (t >= Ya) throw Error("[Parchment] Maximum optimize iterations reached");
			for (o.forEach((e) => {
				let t = this.find(e.target, !0);
				t != null && (t.domNode === e.target && (e.type === "childList" ? (i(this.find(e.previousSibling, !1)), Array.from(e.addedNodes).forEach((e) => {
					let t = this.find(e, !1);
					i(t, !1), t instanceof W && t.children.forEach((e) => {
						i(e, !1);
					});
				})) : e.type === "attributes" && i(t.prev)), i(t));
			}), this.children.forEach(a), o = Array.from(this.observer.takeRecords()), r = o.slice(); r.length > 0;) e.push(r.pop());
		}
	}
	update(e, t = {}) {
		e ||= this.observer.takeRecords();
		let n = /* @__PURE__ */ new WeakMap();
		e.map((e) => {
			let t = this.find(e.target, !0);
			return t == null ? null : n.has(t.domNode) ? (n.get(t.domNode).push(e), null) : (n.set(t.domNode, [e]), t);
		}).forEach((e) => {
			e != null && e !== this && n.has(e.domNode) && e.update(n.get(e.domNode) || [], t);
		}), t.mutationsMap = n, n.has(this.domNode) && super.update(n.get(this.domNode), t), this.optimize(e, t);
	}
};
Xa.blotName = "scroll", Xa.defaultChild = Ga, Xa.allowedChildren = [Ga, qa], Xa.scope = V.BLOCK_BLOT, Xa.tagName = "DIV";
var Za = Xa, Qa = class e extends U {
	static create(e) {
		return document.createTextNode(e);
	}
	static value(e) {
		return e.data;
	}
	constructor(e, t) {
		super(e, t), this.text = this.statics.value(this.domNode);
	}
	deleteAt(e, t) {
		this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t);
	}
	index(e, t) {
		return this.domNode === e ? t : -1;
	}
	insertAt(e, t, n) {
		n == null ? (this.text = this.text.slice(0, e) + t + this.text.slice(e), this.domNode.data = this.text) : super.insertAt(e, t, n);
	}
	length() {
		return this.text.length;
	}
	optimize(t) {
		super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
	}
	position(e, t = !1) {
		return [this.domNode, e];
	}
	split(e, t = !1) {
		if (!t) {
			if (e === 0) return this;
			if (e === this.length()) return this.next;
		}
		let n = this.scroll.create(this.domNode.splitText(e));
		return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n;
	}
	update(e, t) {
		e.some((e) => e.type === "characterData" && e.target === this.domNode) && (this.text = this.statics.value(this.domNode));
	}
	value() {
		return this.text;
	}
};
Qa.blotName = "text", Qa.scope = V.INLINE_BLOT;
var $a = Qa, eo = /* @__PURE__ */ o(((e, t) => {
	var n = -1, r = 1, i = 0;
	function a(e, t, n, r, a) {
		if (e === t) return e ? [[i, e]] : [];
		if (n != null) {
			var s = D(e, t, n);
			if (s) return s;
		}
		var c = l(e, t), u = e.substring(0, c);
		e = e.substring(c), t = t.substring(c), c = d(e, t);
		var f = e.substring(e.length - c);
		e = e.substring(0, e.length - c), t = t.substring(0, t.length - c);
		var m = o(e, t);
		return u && m.unshift([i, u]), f && m.push([i, f]), b(m, a), r && p(m), m;
	}
	function o(e, t) {
		var o;
		if (!e) return [[r, t]];
		if (!t) return [[n, e]];
		var c = e.length > t.length ? e : t, l = e.length > t.length ? t : e, u = c.indexOf(l);
		if (u !== -1) return o = [
			[r, c.substring(0, u)],
			[i, l],
			[r, c.substring(u + l.length)]
		], e.length > t.length && (o[0][0] = o[2][0] = n), o;
		if (l.length === 1) return [[n, e], [r, t]];
		var d = f(e, t);
		if (d) {
			var p = d[0], m = d[1], h = d[2], g = d[3], _ = d[4], v = a(p, h), y = a(m, g);
			return v.concat([[i, _]], y);
		}
		return s(e, t);
	}
	function s(e, t) {
		for (var i = e.length, a = t.length, o = Math.ceil((i + a) / 2), s = o, l = 2 * o, u = Array(l), d = Array(l), f = 0; f < l; f++) u[f] = -1, d[f] = -1;
		u[s + 1] = 0, d[s + 1] = 0;
		for (var p = i - a, m = p % 2 != 0, h = 0, g = 0, _ = 0, v = 0, y = 0; y < o; y++) {
			for (var b = -y + h; b <= y - g; b += 2) {
				for (var x = s + b, S = b === -y || b !== y && u[x - 1] < u[x + 1] ? u[x + 1] : u[x - 1] + 1, C = S - b; S < i && C < a && e.charAt(S) === t.charAt(C);) S++, C++;
				if (u[x] = S, S > i) g += 2;
				else if (C > a) h += 2;
				else if (m) {
					var w = s + p - b;
					if (w >= 0 && w < l && d[w] !== -1) {
						var T = i - d[w];
						if (S >= T) return c(e, t, S, C);
					}
				}
			}
			for (var E = -y + _; E <= y - v; E += 2) {
				for (var w = s + E, T = E === -y || E !== y && d[w - 1] < d[w + 1] ? d[w + 1] : d[w - 1] + 1, D = T - E; T < i && D < a && e.charAt(i - T - 1) === t.charAt(a - D - 1);) T++, D++;
				if (d[w] = T, T > i) v += 2;
				else if (D > a) _ += 2;
				else if (!m) {
					var x = s + p - E;
					if (x >= 0 && x < l && u[x] !== -1) {
						var S = u[x], C = s + S - x;
						if (T = i - T, S >= T) return c(e, t, S, C);
					}
				}
			}
		}
		return [[n, e], [r, t]];
	}
	function c(e, t, n, r) {
		var i = e.substring(0, n), o = t.substring(0, r), s = e.substring(n), c = t.substring(r), l = a(i, o), u = a(s, c);
		return l.concat(u);
	}
	function l(e, t) {
		if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(a, i) == t.substring(a, i) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return x(e.charCodeAt(i - 1)) && i--, i;
	}
	function u(e, t) {
		var n = e.length, r = t.length;
		if (n == 0 || r == 0) return 0;
		n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
		var i = Math.min(n, r);
		if (e == t) return i;
		for (var a = 0, o = 1;;) {
			var s = e.substring(i - o), c = t.indexOf(s);
			if (c == -1) return a;
			o += c, (c == 0 || e.substring(i - o) == t.substring(0, o)) && (a = o, o++);
		}
	}
	function d(e, t) {
		if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(e.length - i, e.length - a) == t.substring(t.length - i, t.length - a) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return S(e.charCodeAt(e.length - i)) && i--, i;
	}
	function f(e, t) {
		var n = e.length > t.length ? e : t, r = e.length > t.length ? t : e;
		if (n.length < 4 || r.length * 2 < n.length) return null;
		function i(e, t, n) {
			for (var r = e.substring(n, n + Math.floor(e.length / 4)), i = -1, a = "", o, s, c, u; (i = t.indexOf(r, i + 1)) !== -1;) {
				var f = l(e.substring(n), t.substring(i)), p = d(e.substring(0, n), t.substring(0, i));
				a.length < p + f && (a = t.substring(i - p, i) + t.substring(i, i + f), o = e.substring(0, n - p), s = e.substring(n + f), c = t.substring(0, i - p), u = t.substring(i + f));
			}
			return a.length * 2 >= e.length ? [
				o,
				s,
				c,
				u,
				a
			] : null;
		}
		var a = i(n, r, Math.ceil(n.length / 4)), o = i(n, r, Math.ceil(n.length / 2)), s;
		if (!a && !o) return null;
		s = o ? a && a[4].length > o[4].length ? a : o : a;
		var c, u, f, p;
		e.length > t.length ? (c = s[0], u = s[1], f = s[2], p = s[3]) : (f = s[0], p = s[1], c = s[2], u = s[3]);
		var m = s[4];
		return [
			c,
			u,
			f,
			p,
			m
		];
	}
	function p(e) {
		for (var t = !1, a = [], o = 0, s = null, c = 0, l = 0, d = 0, f = 0, p = 0; c < e.length;) e[c][0] == i ? (a[o++] = c, l = f, d = p, f = 0, p = 0, s = e[c][1]) : (e[c][0] == r ? f += e[c][1].length : p += e[c][1].length, s && s.length <= Math.max(l, d) && s.length <= Math.max(f, p) && (e.splice(a[o - 1], 0, [n, s]), e[a[o - 1] + 1][0] = r, o--, o--, c = o > 0 ? a[o - 1] : -1, l = 0, d = 0, f = 0, p = 0, s = null, t = !0)), c++;
		for (t && b(e), y(e), c = 1; c < e.length;) {
			if (e[c - 1][0] == n && e[c][0] == r) {
				var m = e[c - 1][1], h = e[c][1], g = u(m, h), _ = u(h, m);
				g >= _ ? (g >= m.length / 2 || g >= h.length / 2) && (e.splice(c, 0, [i, h.substring(0, g)]), e[c - 1][1] = m.substring(0, m.length - g), e[c + 1][1] = h.substring(g), c++) : (_ >= m.length / 2 || _ >= h.length / 2) && (e.splice(c, 0, [i, m.substring(0, _)]), e[c - 1][0] = r, e[c - 1][1] = h.substring(0, h.length - _), e[c + 1][0] = n, e[c + 1][1] = m.substring(_), c++), c++;
			}
			c++;
		}
	}
	var m = /[^a-zA-Z0-9]/, h = /\s/, g = /[\r\n]/, _ = /\n\r?\n$/, v = /^\r?\n\r?\n/;
	function y(e) {
		function t(e, t) {
			if (!e || !t) return 6;
			var n = e.charAt(e.length - 1), r = t.charAt(0), i = n.match(m), a = r.match(m), o = i && n.match(h), s = a && r.match(h), c = o && n.match(g), l = s && r.match(g), u = c && e.match(_), d = l && t.match(v);
			return u || d ? 5 : c || l ? 4 : i && !o && s ? 3 : o || s ? 2 : i || a ? 1 : 0;
		}
		for (var n = 1; n < e.length - 1;) {
			if (e[n - 1][0] == i && e[n + 1][0] == i) {
				var r = e[n - 1][1], a = e[n][1], o = e[n + 1][1], s = d(r, a);
				if (s) {
					var c = a.substring(a.length - s);
					r = r.substring(0, r.length - s), a = c + a.substring(0, a.length - s), o = c + o;
				}
				for (var l = r, u = a, f = o, p = t(r, a) + t(a, o); a.charAt(0) === o.charAt(0);) {
					r += a.charAt(0), a = a.substring(1) + o.charAt(0), o = o.substring(1);
					var y = t(r, a) + t(a, o);
					y >= p && (p = y, l = r, u = a, f = o);
				}
				e[n - 1][1] != l && (l ? e[n - 1][1] = l : (e.splice(n - 1, 1), n--), e[n][1] = u, f ? e[n + 1][1] = f : (e.splice(n + 1, 1), n--));
			}
			n++;
		}
	}
	function b(e, t) {
		e.push([i, ""]);
		for (var a = 0, o = 0, s = 0, c = "", u = "", f; a < e.length;) if (a < e.length - 1 && !e[a][1]) e.splice(a, 1);
		else switch (e[a][0]) {
			case r:
				s++, u += e[a][1], a++;
				break;
			case n:
				o++, c += e[a][1], a++;
				break;
			case i:
				var p = a - s - o - 1;
				if (t) {
					if (p >= 0 && w(e[p][1])) {
						var m = e[p][1].slice(-1);
						if (e[p][1] = e[p][1].slice(0, -1), c = m + c, u = m + u, !e[p][1]) {
							e.splice(p, 1), a--;
							var h = p - 1;
							e[h] && e[h][0] === r && (s++, u = e[h][1] + u, h--), e[h] && e[h][0] === n && (o++, c = e[h][1] + c, h--), p = h;
						}
					}
					if (C(e[a][1])) {
						var m = e[a][1].charAt(0);
						e[a][1] = e[a][1].slice(1), c += m, u += m;
					}
				}
				if (a < e.length - 1 && !e[a][1]) {
					e.splice(a, 1);
					break;
				}
				if (c.length > 0 || u.length > 0) {
					c.length > 0 && u.length > 0 && (f = l(u, c), f !== 0 && (p >= 0 ? e[p][1] += u.substring(0, f) : (e.splice(0, 0, [i, u.substring(0, f)]), a++), u = u.substring(f), c = c.substring(f)), f = d(u, c), f !== 0 && (e[a][1] = u.substring(u.length - f) + e[a][1], u = u.substring(0, u.length - f), c = c.substring(0, c.length - f)));
					var g = s + o;
					c.length === 0 && u.length === 0 ? (e.splice(a - g, g), a -= g) : c.length === 0 ? (e.splice(a - g, g, [r, u]), a = a - g + 1) : u.length === 0 ? (e.splice(a - g, g, [n, c]), a = a - g + 1) : (e.splice(a - g, g, [n, c], [r, u]), a = a - g + 2);
				}
				a !== 0 && e[a - 1][0] === i ? (e[a - 1][1] += e[a][1], e.splice(a, 1)) : a++, s = 0, o = 0, c = "", u = "";
		}
		e[e.length - 1][1] === "" && e.pop();
		var _ = !1;
		for (a = 1; a < e.length - 1;) e[a - 1][0] === i && e[a + 1][0] === i && (e[a][1].substring(e[a][1].length - e[a - 1][1].length) === e[a - 1][1] ? (e[a][1] = e[a - 1][1] + e[a][1].substring(0, e[a][1].length - e[a - 1][1].length), e[a + 1][1] = e[a - 1][1] + e[a + 1][1], e.splice(a - 1, 1), _ = !0) : e[a][1].substring(0, e[a + 1][1].length) == e[a + 1][1] && (e[a - 1][1] += e[a + 1][1], e[a][1] = e[a][1].substring(e[a + 1][1].length) + e[a + 1][1], e.splice(a + 1, 1), _ = !0)), a++;
		_ && b(e, t);
	}
	function x(e) {
		return e >= 55296 && e <= 56319;
	}
	function S(e) {
		return e >= 56320 && e <= 57343;
	}
	function C(e) {
		return S(e.charCodeAt(0));
	}
	function w(e) {
		return x(e.charCodeAt(e.length - 1));
	}
	function T(e) {
		for (var t = [], n = 0; n < e.length; n++) e[n][1].length > 0 && t.push(e[n]);
		return t;
	}
	function E(e, t, a, o) {
		return w(e) || C(o) ? null : T([
			[i, e],
			[n, t],
			[r, a],
			[i, o]
		]);
	}
	function D(e, t, n) {
		var r = typeof n == "number" ? {
			index: n,
			length: 0
		} : n.oldRange, i = typeof n == "number" ? null : n.newRange, a = e.length, o = t.length;
		if (r.length === 0 && (i === null || i.length === 0)) {
			var s = r.index, c = e.slice(0, s), l = e.slice(s), u = i ? i.index : null;
			editBefore: {
				var d = s + o - a;
				if (u !== null && u !== d || d < 0 || d > o) break editBefore;
				var f = t.slice(0, d), p = t.slice(d);
				if (p !== l) break editBefore;
				var m = Math.min(s, d), h = c.slice(0, m), g = f.slice(0, m);
				if (h !== g) break editBefore;
				var _ = c.slice(m), v = f.slice(m);
				return E(h, _, v, l);
			}
			editAfter: {
				if (u !== null && u !== s) break editAfter;
				var y = s, f = t.slice(0, y), p = t.slice(y);
				if (f !== c) break editAfter;
				var b = Math.min(a - y, o - y), x = l.slice(l.length - b), S = p.slice(p.length - b);
				if (x !== S) break editAfter;
				var _ = l.slice(0, l.length - b), v = p.slice(0, p.length - b);
				return E(c, _, v, x);
			}
		}
		if (r.length > 0 && i && i.length === 0) replaceRange: {
			var h = e.slice(0, r.index), x = e.slice(r.index + r.length), m = h.length, b = x.length;
			if (o < m + b) break replaceRange;
			var g = t.slice(0, m), S = t.slice(o - b);
			if (h !== g || x !== S) break replaceRange;
			var _ = e.slice(m, a - b), v = t.slice(m, o - b);
			return E(h, _, v, x);
		}
		return null;
	}
	function O(e, t, n, r) {
		return a(e, t, n, r, !0);
	}
	O.INSERT = r, O.DELETE = n, O.EQUAL = i, t.exports = O;
})), to = /* @__PURE__ */ o(((e, t) => {
	var n = "__lodash_hash_undefined__", r = 9007199254740991, i = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", s = "[object Date]", c = "[object Error]", l = "[object Function]", u = "[object GeneratorFunction]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object Promise]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object WeakMap]", b = "[object ArrayBuffer]", x = "[object DataView]", S = "[object Float32Array]", C = "[object Float64Array]", w = "[object Int8Array]", T = "[object Int16Array]", E = "[object Int32Array]", D = "[object Uint8Array]", O = "[object Uint8ClampedArray]", ee = "[object Uint16Array]", te = "[object Uint32Array]", ne = /[\\^$.*+?()[\]{}|]/g, k = /\w*$/, re = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, A = {};
	A[i] = A[a] = A[b] = A[x] = A[o] = A[s] = A[S] = A[C] = A[w] = A[T] = A[E] = A[d] = A[f] = A[p] = A[h] = A[g] = A[_] = A[v] = A[D] = A[O] = A[ee] = A[te] = !0, A[c] = A[l] = A[y] = !1;
	var ae = typeof global == "object" && global && global.Object === Object && global, oe = typeof self == "object" && self && self.Object === Object && self, j = ae || oe || Function("return this")(), M = typeof e == "object" && e && !e.nodeType && e, se = M && typeof t == "object" && t && !t.nodeType && t, ce = se && se.exports === M;
	function le(e, t) {
		return e.set(t[0], t[1]), e;
	}
	function ue(e, t) {
		return e.add(t), e;
	}
	function de(e, t) {
		for (var n = -1, r = e ? e.length : 0; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	function fe(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function pe(e, t, n, r) {
		var i = -1, a = e ? e.length : 0;
		for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
		return n;
	}
	function me(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function he(e, t) {
		return e?.[t];
	}
	function ge(e) {
		var t = !1;
		if (e != null && typeof e.toString != "function") try {
			t = !!(e + "");
		} catch {}
		return t;
	}
	function _e(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function ve(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function ye(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var be = Array.prototype, xe = Function.prototype, Se = Object.prototype, Ce = j["__core-js_shared__"], N = function() {
		var e = /[^.]+$/.exec(Ce && Ce.keys && Ce.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), we = xe.toString, Te = Se.hasOwnProperty, Ee = Se.toString, De = RegExp("^" + we.call(Te).replace(ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Oe = ce ? j.Buffer : void 0, ke = j.Symbol, Ae = j.Uint8Array, je = ve(Object.getPrototypeOf, Object), Me = Object.create, Ne = Se.propertyIsEnumerable, Pe = be.splice, Fe = Object.getOwnPropertySymbols, Ie = Oe ? Oe.isBuffer : void 0, Le = ve(Object.keys, Object), Re = zt(j, "DataView"), ze = zt(j, "Map"), Be = zt(j, "Promise"), Ve = zt(j, "Set"), He = zt(j, "WeakMap"), Ue = zt(Object, "create"), We = Jt(Re), Ge = Jt(ze), Ke = Jt(Be), qe = Jt(Ve), Je = Jt(He), P = ke ? ke.prototype : void 0, Ye = P ? P.valueOf : void 0;
	function Xe(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Ze() {
		this.__data__ = Ue ? Ue(null) : {};
	}
	function Qe(e) {
		return this.has(e) && delete this.__data__[e];
	}
	function $e(e) {
		var t = this.__data__;
		if (Ue) {
			var r = t[e];
			return r === n ? void 0 : r;
		}
		return Te.call(t, e) ? t[e] : void 0;
	}
	function F(e) {
		var t = this.__data__;
		return Ue ? t[e] !== void 0 : Te.call(t, e);
	}
	function et(e, t) {
		var r = this.__data__;
		return r[e] = Ue && t === void 0 ? n : t, this;
	}
	Xe.prototype.clear = Ze, Xe.prototype.delete = Qe, Xe.prototype.get = $e, Xe.prototype.has = F, Xe.prototype.set = et;
	function I(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function tt() {
		this.__data__ = [];
	}
	function nt(e) {
		var t = this.__data__, n = bt(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Pe.call(t, n, 1), !0);
	}
	function rt(e) {
		var t = this.__data__, n = bt(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function it(e) {
		return bt(this.__data__, e) > -1;
	}
	function at(e, t) {
		var n = this.__data__, r = bt(n, e);
		return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
	}
	I.prototype.clear = tt, I.prototype.delete = nt, I.prototype.get = rt, I.prototype.has = it, I.prototype.set = at;
	function ot(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function st() {
		this.__data__ = {
			hash: new Xe(),
			map: new (ze || I)(),
			string: new Xe()
		};
	}
	function ct(e) {
		return Rt(this, e).delete(e);
	}
	function lt(e) {
		return Rt(this, e).get(e);
	}
	function ut(e) {
		return Rt(this, e).has(e);
	}
	function dt(e, t) {
		return Rt(this, e).set(e, t), this;
	}
	ot.prototype.clear = st, ot.prototype.delete = ct, ot.prototype.get = lt, ot.prototype.has = ut, ot.prototype.set = dt;
	function ft(e) {
		this.__data__ = new I(e);
	}
	function pt() {
		this.__data__ = new I();
	}
	function mt(e) {
		return this.__data__.delete(e);
	}
	function ht(e) {
		return this.__data__.get(e);
	}
	function gt(e) {
		return this.__data__.has(e);
	}
	function _t(e, t) {
		var n = this.__data__;
		if (n instanceof I) {
			var r = n.__data__;
			if (!ze || r.length < 199) return r.push([e, t]), this;
			n = this.__data__ = new ot(r);
		}
		return n.set(e, t), this;
	}
	ft.prototype.clear = pt, ft.prototype.delete = mt, ft.prototype.get = ht, ft.prototype.has = gt, ft.prototype.set = _t;
	function vt(e, t) {
		var n = Qt(e) || Zt(e) ? me(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || Te.call(e, a)) && (!i || a != "length" && !Wt(a, r)) && n.push(a);
		return n;
	}
	function yt(e, t, n) {
		var r = e[t];
		(!(Te.call(e, t) && Xt(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
	}
	function bt(e, t) {
		for (var n = e.length; n--;) if (Xt(e[n][0], t)) return n;
		return -1;
	}
	function xt(e, t) {
		return e && R(t, sn(t), e);
	}
	function St(e, t, n, r, a, o, s) {
		var c;
		if (r && (c = o ? r(e, a, o, s) : r(e)), c !== void 0) return c;
		if (!an(e)) return e;
		var d = Qt(e);
		if (d) {
			if (c = Vt(e), !t) return Ft(e, c);
		} else {
			var f = z(e), m = f == l || f == u;
			if (tn(e)) return Dt(e, t);
			if (f == p || f == i || m && !o) {
				if (ge(e)) return o ? e : {};
				if (c = Ht(m ? {} : e), !t) return It(e, xt(c, e));
			} else {
				if (!A[f]) return o ? e : {};
				c = Ut(e, f, St, t);
			}
		}
		s ||= new ft();
		var h = s.get(e);
		if (h) return h;
		if (s.set(e, c), !d) var g = n ? Lt(e) : sn(e);
		return de(g || e, function(i, a) {
			g && (a = i, i = e[a]), yt(c, a, St(i, t, n, r, a, e, s));
		}), c;
	}
	function Ct(e) {
		return an(e) ? Me(e) : {};
	}
	function wt(e, t, n) {
		var r = t(e);
		return Qt(e) ? r : fe(r, n(e));
	}
	function Tt(e) {
		return Ee.call(e);
	}
	function L(e) {
		return !an(e) || Kt(e) ? !1 : (nn(e) || ge(e) ? De : re).test(Jt(e));
	}
	function Et(e) {
		if (!qt(e)) return Le(e);
		var t = [];
		for (var n in Object(e)) Te.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function Dt(e, t) {
		if (t) return e.slice();
		var n = new e.constructor(e.length);
		return e.copy(n), n;
	}
	function Ot(e) {
		var t = new e.constructor(e.byteLength);
		return new Ae(t).set(new Ae(e)), t;
	}
	function kt(e, t) {
		var n = t ? Ot(e.buffer) : e.buffer;
		return new e.constructor(n, e.byteOffset, e.byteLength);
	}
	function At(e, t, n) {
		return pe(t ? n(_e(e), !0) : _e(e), le, new e.constructor());
	}
	function jt(e) {
		var t = new e.constructor(e.source, k.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	function Mt(e, t, n) {
		return pe(t ? n(ye(e), !0) : ye(e), ue, new e.constructor());
	}
	function Nt(e) {
		return Ye ? Object(Ye.call(e)) : {};
	}
	function Pt(e, t) {
		var n = t ? Ot(e.buffer) : e.buffer;
		return new e.constructor(n, e.byteOffset, e.length);
	}
	function Ft(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	function R(e, t, n, r) {
		n ||= {};
		for (var i = -1, a = t.length; ++i < a;) {
			var o = t[i], s = r ? r(n[o], e[o], o, n, e) : void 0;
			yt(n, o, s === void 0 ? e[o] : s);
		}
		return n;
	}
	function It(e, t) {
		return R(e, Bt(e), t);
	}
	function Lt(e) {
		return wt(e, sn, Bt);
	}
	function Rt(e, t) {
		var n = e.__data__;
		return Gt(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function zt(e, t) {
		var n = he(e, t);
		return L(n) ? n : void 0;
	}
	var Bt = Fe ? ve(Fe, Object) : cn, z = Tt;
	(Re && z(new Re(/* @__PURE__ */ new ArrayBuffer(1))) != x || ze && z(new ze()) != d || Be && z(Be.resolve()) != m || Ve && z(new Ve()) != g || He && z(new He()) != y) && (z = function(e) {
		var t = Ee.call(e), n = t == p ? e.constructor : void 0, r = n ? Jt(n) : void 0;
		if (r) switch (r) {
			case We: return x;
			case Ge: return d;
			case Ke: return m;
			case qe: return g;
			case Je: return y;
		}
		return t;
	});
	function Vt(e) {
		var t = e.length, n = e.constructor(t);
		return t && typeof e[0] == "string" && Te.call(e, "index") && (n.index = e.index, n.input = e.input), n;
	}
	function Ht(e) {
		return typeof e.constructor == "function" && !qt(e) ? Ct(je(e)) : {};
	}
	function Ut(e, t, n, r) {
		var i = e.constructor;
		switch (t) {
			case b: return Ot(e);
			case o:
			case s: return new i(+e);
			case x: return kt(e, r);
			case S:
			case C:
			case w:
			case T:
			case E:
			case D:
			case O:
			case ee:
			case te: return Pt(e, r);
			case d: return At(e, r, n);
			case f:
			case _: return new i(e);
			case h: return jt(e);
			case g: return Mt(e, r, n);
			case v: return Nt(e);
		}
	}
	function Wt(e, t) {
		return t ??= r, !!t && (typeof e == "number" || ie.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function Gt(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function Kt(e) {
		return !!N && N in e;
	}
	function qt(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || Se);
	}
	function Jt(e) {
		if (e != null) {
			try {
				return we.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function Yt(e) {
		return St(e, !0, !0);
	}
	function Xt(e, t) {
		return e === t || e !== e && t !== t;
	}
	function Zt(e) {
		return en(e) && Te.call(e, "callee") && (!Ne.call(e, "callee") || Ee.call(e) == i);
	}
	var Qt = Array.isArray;
	function $t(e) {
		return e != null && rn(e.length) && !nn(e);
	}
	function en(e) {
		return on(e) && $t(e);
	}
	var tn = Ie || ln;
	function nn(e) {
		var t = an(e) ? Ee.call(e) : "";
		return t == l || t == u;
	}
	function rn(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function an(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function on(e) {
		return !!e && typeof e == "object";
	}
	function sn(e) {
		return $t(e) ? vt(e) : Et(e);
	}
	function cn() {
		return [];
	}
	function ln() {
		return !1;
	}
	t.exports = Yt;
})), no = /* @__PURE__ */ o(((e, t) => {
	var n = "__lodash_hash_undefined__", r = 9007199254740991, i = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", s = "[object Date]", c = "[object Error]", l = "[object Function]", u = "[object Map]", d = "[object Number]", f = "[object Object]", p = "[object Promise]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", ee = /[\\^$.*+?()[\]{}|]/g, te = /^\[object .+?Constructor\]$/, ne = /^(?:0|[1-9]\d*)$/, k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[i] = k[a] = k[v] = k[o] = k[y] = k[s] = k[c] = k[l] = k[u] = k[d] = k[f] = k[m] = k[h] = k[g] = k[_] = !1;
	var re = typeof global == "object" && global && global.Object === Object && global, ie = typeof self == "object" && self && self.Object === Object && self, A = re || ie || Function("return this")(), ae = typeof e == "object" && e && !e.nodeType && e, oe = ae && typeof t == "object" && t && !t.nodeType && t, j = oe && oe.exports === ae, M = j && re.process, se = function() {
		try {
			return M && M.binding && M.binding("util");
		} catch {}
	}(), ce = se && se.isTypedArray;
	function le(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	function ue(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function de(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	function fe(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function pe(e) {
		return function(t) {
			return e(t);
		};
	}
	function me(e, t) {
		return e.has(t);
	}
	function he(e, t) {
		return e?.[t];
	}
	function ge(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function _e(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function ve(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var ye = Array.prototype, be = Function.prototype, xe = Object.prototype, Se = A["__core-js_shared__"], Ce = be.toString, N = xe.hasOwnProperty, we = function() {
		var e = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), Te = xe.toString, Ee = RegExp("^" + Ce.call(N).replace(ee, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), De = j ? A.Buffer : void 0, Oe = A.Symbol, ke = A.Uint8Array, Ae = xe.propertyIsEnumerable, je = ye.splice, Me = Oe ? Oe.toStringTag : void 0, Ne = Object.getOwnPropertySymbols, Pe = De ? De.isBuffer : void 0, Fe = _e(Object.keys, Object), Ie = Nt(A, "DataView"), Le = Nt(A, "Map"), Re = Nt(A, "Promise"), ze = Nt(A, "Set"), Be = Nt(A, "WeakMap"), Ve = Nt(Object, "create"), He = z(Ie), Ue = z(Le), We = z(Re), Ge = z(ze), Ke = z(Be), qe = Oe ? Oe.prototype : void 0, Je = qe ? qe.valueOf : void 0;
	function P(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Ye() {
		this.__data__ = Ve ? Ve(null) : {}, this.size = 0;
	}
	function Xe(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	function Ze(e) {
		var t = this.__data__;
		if (Ve) {
			var r = t[e];
			return r === n ? void 0 : r;
		}
		return N.call(t, e) ? t[e] : void 0;
	}
	function Qe(e) {
		var t = this.__data__;
		return Ve ? t[e] !== void 0 : N.call(t, e);
	}
	function $e(e, t) {
		var r = this.__data__;
		return this.size += +!this.has(e), r[e] = Ve && t === void 0 ? n : t, this;
	}
	P.prototype.clear = Ye, P.prototype.delete = Xe, P.prototype.get = Ze, P.prototype.has = Qe, P.prototype.set = $e;
	function F(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function et() {
		this.__data__ = [], this.size = 0;
	}
	function I(e) {
		var t = this.__data__, n = bt(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : je.call(t, n, 1), --this.size, !0);
	}
	function tt(e) {
		var t = this.__data__, n = bt(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function nt(e) {
		return bt(this.__data__, e) > -1;
	}
	function rt(e, t) {
		var n = this.__data__, r = bt(n, e);
		return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
	}
	F.prototype.clear = et, F.prototype.delete = I, F.prototype.get = tt, F.prototype.has = nt, F.prototype.set = rt;
	function it(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function at() {
		this.size = 0, this.__data__ = {
			hash: new P(),
			map: new (Le || F)(),
			string: new P()
		};
	}
	function ot(e) {
		var t = Mt(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	function st(e) {
		return Mt(this, e).get(e);
	}
	function ct(e) {
		return Mt(this, e).has(e);
	}
	function lt(e, t) {
		var n = Mt(this, e), r = n.size;
		return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
	}
	it.prototype.clear = at, it.prototype.delete = ot, it.prototype.get = st, it.prototype.has = ct, it.prototype.set = lt;
	function ut(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.__data__ = new it(); ++t < n;) this.add(e[t]);
	}
	function dt(e) {
		return this.__data__.set(e, n), this;
	}
	function ft(e) {
		return this.__data__.has(e);
	}
	ut.prototype.add = ut.prototype.push = dt, ut.prototype.has = ft;
	function pt(e) {
		var t = this.__data__ = new F(e);
		this.size = t.size;
	}
	function mt() {
		this.__data__ = new F(), this.size = 0;
	}
	function ht(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	function gt(e) {
		return this.__data__.get(e);
	}
	function _t(e) {
		return this.__data__.has(e);
	}
	function vt(e, t) {
		var n = this.__data__;
		if (n instanceof F) {
			var r = n.__data__;
			if (!Le || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
			n = this.__data__ = new it(r);
		}
		return n.set(e, t), this.size = n.size, this;
	}
	pt.prototype.clear = mt, pt.prototype.delete = ht, pt.prototype.get = gt, pt.prototype.has = _t, pt.prototype.set = vt;
	function yt(e, t) {
		var n = Ut(e), r = !n && Ht(e), i = !n && !r && Gt(e), a = !n && !r && !i && Zt(e), o = n || r || i || a, s = o ? fe(e.length, String) : [], c = s.length;
		for (var l in e) (t || N.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || It(l, c))) && s.push(l);
		return s;
	}
	function bt(e, t) {
		for (var n = e.length; n--;) if (Vt(e[n][0], t)) return n;
		return -1;
	}
	function xt(e, t, n) {
		var r = t(e);
		return Ut(e) ? r : ue(r, n(e));
	}
	function St(e) {
		return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Me && Me in Object(e) ? Pt(e) : Bt(e);
	}
	function Ct(e) {
		return Xt(e) && St(e) == i;
	}
	function wt(e, t, n, r, i) {
		return e === t ? !0 : e == null || t == null || !Xt(e) && !Xt(t) ? e !== e && t !== t : Tt(e, t, n, r, wt, i);
	}
	function Tt(e, t, n, r, o, s) {
		var c = Ut(e), l = Ut(t), u = c ? a : R(e), d = l ? a : R(t);
		u = u == i ? f : u, d = d == i ? f : d;
		var p = u == f, m = d == f, h = u == d;
		if (h && Gt(e)) {
			if (!Gt(t)) return !1;
			c = !0, p = !1;
		}
		if (h && !p) return s ||= new pt(), c || Zt(e) ? Ot(e, t, n, r, o, s) : kt(e, t, u, n, r, o, s);
		if (!(n & 1)) {
			var g = p && N.call(e, "__wrapped__"), _ = m && N.call(t, "__wrapped__");
			if (g || _) {
				var v = g ? e.value() : e, y = _ ? t.value() : t;
				return s ||= new pt(), o(v, y, n, r, s);
			}
		}
		return h ? (s ||= new pt(), At(e, t, n, r, o, s)) : !1;
	}
	function L(e) {
		return !Yt(e) || Rt(e) ? !1 : (qt(e) ? Ee : te).test(z(e));
	}
	function Et(e) {
		return Xt(e) && Jt(e.length) && !!k[St(e)];
	}
	function Dt(e) {
		if (!zt(e)) return Fe(e);
		var t = [];
		for (var n in Object(e)) N.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function Ot(e, t, n, r, i, a) {
		var o = n & 1, s = e.length, c = t.length;
		if (s != c && !(o && c > s)) return !1;
		var l = a.get(e);
		if (l && a.get(t)) return l == t;
		var u = -1, d = !0, f = n & 2 ? new ut() : void 0;
		for (a.set(e, t), a.set(t, e); ++u < s;) {
			var p = e[u], m = t[u];
			if (r) var h = o ? r(m, p, u, t, e, a) : r(p, m, u, e, t, a);
			if (h !== void 0) {
				if (h) continue;
				d = !1;
				break;
			}
			if (f) {
				if (!de(t, function(e, t) {
					if (!me(f, t) && (p === e || i(p, e, n, r, a))) return f.push(t);
				})) {
					d = !1;
					break;
				}
			} else if (!(p === m || i(p, m, n, r, a))) {
				d = !1;
				break;
			}
		}
		return a.delete(e), a.delete(t), d;
	}
	function kt(e, t, n, r, i, a, l) {
		switch (n) {
			case y:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case v: return !(e.byteLength != t.byteLength || !a(new ke(e), new ke(t)));
			case o:
			case s:
			case d: return Vt(+e, +t);
			case c: return e.name == t.name && e.message == t.message;
			case m:
			case g: return e == t + "";
			case u: var f = ge;
			case h:
				var p = r & 1;
				if (f ||= ve, e.size != t.size && !p) return !1;
				var _ = l.get(e);
				if (_) return _ == t;
				r |= 2, l.set(e, t);
				var b = Ot(f(e), f(t), r, i, a, l);
				return l.delete(e), b;
			case "[object Symbol]": if (Je) return Je.call(e) == Je.call(t);
		}
		return !1;
	}
	function At(e, t, n, r, i, a) {
		var o = n & 1, s = jt(e), c = s.length;
		if (c != jt(t).length && !o) return !1;
		for (var l = c; l--;) {
			var u = s[l];
			if (!(o ? u in t : N.call(t, u))) return !1;
		}
		var d = a.get(e);
		if (d && a.get(t)) return d == t;
		var f = !0;
		a.set(e, t), a.set(t, e);
		for (var p = o; ++l < c;) {
			u = s[l];
			var m = e[u], h = t[u];
			if (r) var g = o ? r(h, m, u, t, e, a) : r(m, h, u, e, t, a);
			if (!(g === void 0 ? m === h || i(m, h, n, r, a) : g)) {
				f = !1;
				break;
			}
			p ||= u == "constructor";
		}
		if (f && !p) {
			var _ = e.constructor, v = t.constructor;
			_ != v && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof v == "function" && v instanceof v) && (f = !1);
		}
		return a.delete(e), a.delete(t), f;
	}
	function jt(e) {
		return xt(e, Qt, Ft);
	}
	function Mt(e, t) {
		var n = e.__data__;
		return Lt(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function Nt(e, t) {
		var n = he(e, t);
		return L(n) ? n : void 0;
	}
	function Pt(e) {
		var t = N.call(e, Me), n = e[Me];
		try {
			e[Me] = void 0;
			var r = !0;
		} catch {}
		var i = Te.call(e);
		return r && (t ? e[Me] = n : delete e[Me]), i;
	}
	var Ft = Ne ? function(e) {
		return e == null ? [] : (e = Object(e), le(Ne(e), function(t) {
			return Ae.call(e, t);
		}));
	} : $t, R = St;
	(Ie && R(new Ie(/* @__PURE__ */ new ArrayBuffer(1))) != y || Le && R(new Le()) != u || Re && R(Re.resolve()) != p || ze && R(new ze()) != h || Be && R(new Be()) != _) && (R = function(e) {
		var t = St(e), n = t == f ? e.constructor : void 0, r = n ? z(n) : "";
		if (r) switch (r) {
			case He: return y;
			case Ue: return u;
			case We: return p;
			case Ge: return h;
			case Ke: return _;
		}
		return t;
	});
	function It(e, t) {
		return t ??= r, !!t && (typeof e == "number" || ne.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function Lt(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function Rt(e) {
		return !!we && we in e;
	}
	function zt(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || xe);
	}
	function Bt(e) {
		return Te.call(e);
	}
	function z(e) {
		if (e != null) {
			try {
				return Ce.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function Vt(e, t) {
		return e === t || e !== e && t !== t;
	}
	var Ht = Ct(function() {
		return arguments;
	}()) ? Ct : function(e) {
		return Xt(e) && N.call(e, "callee") && !Ae.call(e, "callee");
	}, Ut = Array.isArray;
	function Wt(e) {
		return e != null && Jt(e.length) && !qt(e);
	}
	var Gt = Pe || en;
	function Kt(e, t) {
		return wt(e, t);
	}
	function qt(e) {
		if (!Yt(e)) return !1;
		var t = St(e);
		return t == l || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
	}
	function Jt(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function Yt(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	function Xt(e) {
		return typeof e == "object" && !!e;
	}
	var Zt = ce ? pe(ce) : Et;
	function Qt(e) {
		return Wt(e) ? yt(e) : Dt(e);
	}
	function $t() {
		return [];
	}
	function en() {
		return !1;
	}
	t.exports = Kt;
})), ro = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = to(), n = no(), r;
	(function(e) {
		function r(e = {}, n = {}, r = !1) {
			typeof e != "object" && (e = {}), typeof n != "object" && (n = {});
			let i = t(n);
			r || (i = Object.keys(i).reduce((e, t) => (i[t] != null && (e[t] = i[t]), e), {}));
			for (let t in e) e[t] !== void 0 && n[t] === void 0 && (i[t] = e[t]);
			return Object.keys(i).length > 0 ? i : void 0;
		}
		e.compose = r;
		function i(e = {}, t = {}) {
			typeof e != "object" && (e = {}), typeof t != "object" && (t = {});
			let r = Object.keys(e).concat(Object.keys(t)).reduce((r, i) => (n(e[i], t[i]) || (r[i] = t[i] === void 0 ? null : t[i]), r), {});
			return Object.keys(r).length > 0 ? r : void 0;
		}
		e.diff = i;
		function a(e = {}, t = {}) {
			e ||= {};
			let n = Object.keys(t).reduce((n, r) => (t[r] !== e[r] && e[r] !== void 0 && (n[r] = t[r]), n), {});
			return Object.keys(e).reduce((n, r) => (e[r] !== t[r] && t[r] === void 0 && (n[r] = null), n), n);
		}
		e.invert = a;
		function o(e, t, n = !1) {
			if (typeof e != "object") return t;
			if (typeof t != "object") return;
			if (!n) return t;
			let r = Object.keys(t).reduce((n, r) => (e[r] === void 0 && (n[r] = t[r]), n), {});
			return Object.keys(r).length > 0 ? r : void 0;
		}
		e.transform = o;
	})(r ||= {}), e.default = r;
})), io = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	(function(e) {
		function t(e) {
			return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
		}
		e.length = t;
	})(t ||= {}), e.default = t;
})), ao = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = io();
	e.default = class {
		constructor(e) {
			this.ops = e, this.index = 0, this.offset = 0;
		}
		hasNext() {
			return this.peekLength() < Infinity;
		}
		next(e) {
			e ||= Infinity;
			let n = this.ops[this.index];
			if (n) {
				let r = this.offset, i = t.default.length(n);
				if (e >= i - r ? (e = i - r, this.index += 1, this.offset = 0) : this.offset += e, typeof n.delete == "number") return { delete: e };
				{
					let t = {};
					return n.attributes && (t.attributes = n.attributes), typeof n.retain == "number" ? t.retain = e : typeof n.retain == "object" && n.retain !== null ? t.retain = n.retain : t.insert = typeof n.insert == "string" ? n.insert.substr(r, e) : n.insert, t;
				}
			}
			return { retain: Infinity };
		}
		peek() {
			return this.ops[this.index];
		}
		peekLength() {
			return this.ops[this.index] ? t.default.length(this.ops[this.index]) - this.offset : Infinity;
		}
		peekType() {
			let e = this.ops[this.index];
			return e ? typeof e.delete == "number" ? "delete" : typeof e.retain == "number" || typeof e.retain == "object" && e.retain !== null ? "retain" : "insert" : "retain";
		}
		rest() {
			if (!this.hasNext()) return [];
			if (this.offset === 0) return this.ops.slice(this.index);
			{
				let e = this.offset, t = this.index, n = this.next(), r = this.ops.slice(this.index);
				return this.offset = e, this.index = t, [n].concat(r);
			}
		}
	};
})), K = /* @__PURE__ */ l((/* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.AttributeMap = e.OpIterator = e.Op = void 0;
	var n = eo(), r = to(), i = no(), a = ro();
	e.AttributeMap = a.default;
	var o = io();
	e.Op = o.default;
	var s = ao();
	e.OpIterator = s.default;
	var c = "\0", l = (e, t) => {
		if (typeof e != "object" || !e) throw Error(`cannot retain a ${typeof e}`);
		if (typeof t != "object" || !t) throw Error(`cannot retain a ${typeof t}`);
		let n = Object.keys(e)[0];
		if (!n || n !== Object.keys(t)[0]) throw Error(`embed types not matched: ${n} != ${Object.keys(t)[0]}`);
		return [
			n,
			e[n],
			t[n]
		];
	}, u = class e {
		constructor(e) {
			this.ops = Array.isArray(e) ? e : e != null && Array.isArray(e.ops) ? e.ops : [];
		}
		static registerEmbed(e, t) {
			this.handlers[e] = t;
		}
		static unregisterEmbed(e) {
			delete this.handlers[e];
		}
		static getHandler(e) {
			let t = this.handlers[e];
			if (!t) throw Error(`no handlers for embed type "${e}"`);
			return t;
		}
		insert(e, t) {
			let n = {};
			return typeof e == "string" && e.length === 0 ? this : (n.insert = e, typeof t == "object" && t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n));
		}
		delete(e) {
			return e <= 0 ? this : this.push({ delete: e });
		}
		retain(e, t) {
			if (typeof e == "number" && e <= 0) return this;
			let n = { retain: e };
			return typeof t == "object" && t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n);
		}
		push(e) {
			let t = this.ops.length, n = this.ops[t - 1];
			if (e = r(e), typeof n == "object") {
				if (typeof e.delete == "number" && typeof n.delete == "number") return this.ops[t - 1] = { delete: n.delete + e.delete }, this;
				if (typeof n.delete == "number" && e.insert != null && (--t, n = this.ops[t - 1], typeof n != "object")) return this.ops.unshift(e), this;
				if (i(e.attributes, n.attributes)) {
					if (typeof e.insert == "string" && typeof n.insert == "string") return this.ops[t - 1] = { insert: n.insert + e.insert }, typeof e.attributes == "object" && (this.ops[t - 1].attributes = e.attributes), this;
					if (typeof e.retain == "number" && typeof n.retain == "number") return this.ops[t - 1] = { retain: n.retain + e.retain }, typeof e.attributes == "object" && (this.ops[t - 1].attributes = e.attributes), this;
				}
			}
			return t === this.ops.length ? this.ops.push(e) : this.ops.splice(t, 0, e), this;
		}
		chop() {
			let e = this.ops[this.ops.length - 1];
			return e && typeof e.retain == "number" && !e.attributes && this.ops.pop(), this;
		}
		filter(e) {
			return this.ops.filter(e);
		}
		forEach(e) {
			this.ops.forEach(e);
		}
		map(e) {
			return this.ops.map(e);
		}
		partition(e) {
			let t = [], n = [];
			return this.forEach((r) => {
				(e(r) ? t : n).push(r);
			}), [t, n];
		}
		reduce(e, t) {
			return this.ops.reduce(e, t);
		}
		changeLength() {
			return this.reduce((e, t) => t.insert ? e + o.default.length(t) : t.delete ? e - t.delete : e, 0);
		}
		length() {
			return this.reduce((e, t) => e + o.default.length(t), 0);
		}
		slice(t = 0, n = Infinity) {
			let r = [], i = new s.default(this.ops), a = 0;
			for (; a < n && i.hasNext();) {
				let e;
				a < t ? e = i.next(t - a) : (e = i.next(n - a), r.push(e)), a += o.default.length(e);
			}
			return new e(r);
		}
		compose(t) {
			let n = new s.default(this.ops), r = new s.default(t.ops), o = [], c = r.peek();
			if (c != null && typeof c.retain == "number" && c.attributes == null) {
				let e = c.retain;
				for (; n.peekType() === "insert" && n.peekLength() <= e;) e -= n.peekLength(), o.push(n.next());
				c.retain - e > 0 && r.next(c.retain - e);
			}
			let u = new e(o);
			for (; n.hasNext() || r.hasNext();) if (r.peekType() === "insert") u.push(r.next());
			else if (n.peekType() === "delete") u.push(n.next());
			else {
				let t = Math.min(n.peekLength(), r.peekLength()), o = n.next(t), s = r.next(t);
				if (s.retain) {
					let c = {};
					if (typeof o.retain == "number") c.retain = typeof s.retain == "number" ? t : s.retain;
					else if (typeof s.retain == "number") o.retain == null ? c.insert = o.insert : c.retain = o.retain;
					else {
						let t = o.retain == null ? "insert" : "retain", [n, r, i] = l(o[t], s.retain), a = e.getHandler(n);
						c[t] = { [n]: a.compose(r, i, t === "retain") };
					}
					let d = a.default.compose(o.attributes, s.attributes, typeof o.retain == "number");
					if (d && (c.attributes = d), u.push(c), !r.hasNext() && i(u.ops[u.ops.length - 1], c)) {
						let t = new e(n.rest());
						return u.concat(t).chop();
					}
				} else typeof s.delete == "number" && (typeof o.retain == "number" || typeof o.retain == "object" && o.retain !== null) && u.push(s);
			}
			return u.chop();
		}
		concat(t) {
			let n = new e(this.ops.slice());
			return t.ops.length > 0 && (n.push(t.ops[0]), n.ops = n.ops.concat(t.ops.slice(1))), n;
		}
		diff(t, r) {
			if (this.ops === t.ops) return new e();
			let o = [this, t].map((e) => e.map((n) => {
				if (n.insert != null) return typeof n.insert == "string" ? n.insert : c;
				throw Error("diff() called " + (e === t ? "on" : "with") + " non-document");
			}).join("")), l = new e(), u = n(o[0], o[1], r, !0), d = new s.default(this.ops), f = new s.default(t.ops);
			return u.forEach((e) => {
				let t = e[1].length;
				for (; t > 0;) {
					let r = 0;
					switch (e[0]) {
						case n.INSERT:
							r = Math.min(f.peekLength(), t), l.push(f.next(r));
							break;
						case n.DELETE:
							r = Math.min(t, d.peekLength()), d.next(r), l.delete(r);
							break;
						case n.EQUAL:
							r = Math.min(d.peekLength(), f.peekLength(), t);
							let e = d.next(r), o = f.next(r);
							i(e.insert, o.insert) ? l.retain(r, a.default.diff(e.attributes, o.attributes)) : l.push(o).delete(r);
					}
					t -= r;
				}
			}), l.chop();
		}
		eachLine(t, n = "\n") {
			let r = new s.default(this.ops), i = new e(), a = 0;
			for (; r.hasNext();) {
				if (r.peekType() !== "insert") return;
				let s = r.peek(), c = o.default.length(s) - r.peekLength(), l = typeof s.insert == "string" ? s.insert.indexOf(n, c) - c : -1;
				if (l < 0) i.push(r.next());
				else if (l > 0) i.push(r.next(l));
				else {
					if (t(i, r.next(1).attributes || {}, a) === !1) return;
					a += 1, i = new e();
				}
			}
			i.length() > 0 && t(i, {}, a);
		}
		invert(t) {
			let n = new e();
			return this.reduce((r, i) => {
				if (i.insert) n.delete(o.default.length(i));
				else if (typeof i.retain == "number" && i.attributes == null) return n.retain(i.retain), r + i.retain;
				else if (i.delete || typeof i.retain == "number") {
					let e = i.delete || i.retain;
					return t.slice(r, r + e).forEach((e) => {
						i.delete ? n.push(e) : i.retain && i.attributes && n.retain(o.default.length(e), a.default.invert(i.attributes, e.attributes));
					}), r + e;
				} else if (typeof i.retain == "object" && i.retain !== null) {
					let o = t.slice(r, r + 1), c = new s.default(o.ops).next(), [u, d, f] = l(i.retain, c.insert), p = e.getHandler(u);
					return n.retain({ [u]: p.invert(d, f) }, a.default.invert(i.attributes, c.attributes)), r + 1;
				}
				return r;
			}, 0), n.chop();
		}
		transform(t, n = !1) {
			if (n = !!n, typeof t == "number") return this.transformPosition(t, n);
			let r = t, i = new s.default(this.ops), c = new s.default(r.ops), l = new e();
			for (; i.hasNext() || c.hasNext();) if (i.peekType() === "insert" && (n || c.peekType() !== "insert")) l.retain(o.default.length(i.next()));
			else if (c.peekType() === "insert") l.push(c.next());
			else {
				let t = Math.min(i.peekLength(), c.peekLength()), r = i.next(t), o = c.next(t);
				if (r.delete) continue;
				if (o.delete) l.push(o);
				else {
					let i = r.retain, s = o.retain, c = typeof s == "object" && s ? s : t;
					if (typeof i == "object" && i && typeof s == "object" && s) {
						let t = Object.keys(i)[0];
						if (t === Object.keys(s)[0]) {
							let r = e.getHandler(t);
							r && (c = { [t]: r.transform(i[t], s[t], n) });
						}
					}
					l.retain(c, a.default.transform(r.attributes, o.attributes, n));
				}
			}
			return l.chop();
		}
		transformPosition(e, t = !1) {
			t = !!t;
			let n = new s.default(this.ops), r = 0;
			for (; n.hasNext() && r <= e;) {
				let i = n.peekLength(), a = n.peekType();
				n.next(), a === "delete" ? e -= Math.min(i, e - r) : (a === "insert" && (r < e || !t) && (e += i), r += i);
			}
			return e;
		}
	};
	u.Op = o.default, u.OpIterator = s.default, u.AttributeMap = a.default, u.handlers = {}, e.default = u, typeof t == "object" && (t.exports = u, t.exports.default = u);
})))(), 1), oo = class extends G {
	static value() {}
	optimize() {
		(this.prev || this.next) && this.remove();
	}
	length() {
		return 0;
	}
	value() {
		return "";
	}
};
oo.blotName = "break", oo.tagName = "BR";
// node_modules/quill/blots/text.js
var so = class extends $a {}, co = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function lo(e) {
	return e.replace(/[&<>"']/g, (e) => co[e]);
}
// node_modules/quill/blots/inline.js
var uo = class e extends Ua {
	static allowedChildren = [
		e,
		oo,
		G,
		so
	];
	static order = [
		"cursor",
		"inline",
		"link",
		"underline",
		"strike",
		"italic",
		"bold",
		"script",
		"code"
	];
	static compare(t, n) {
		let r = e.order.indexOf(t), i = e.order.indexOf(n);
		return r >= 0 || i >= 0 ? r - i : t === n ? 0 : t < n ? -1 : 1;
	}
	formatAt(t, n, r, i) {
		if (e.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, V.BLOT)) {
			let e = this.isolate(t, n);
			i && e.wrap(r, i);
		} else super.formatAt(t, n, r, i);
	}
	optimize(t) {
		if (super.optimize(t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
			let e = this.parent.isolate(this.offset(), this.length());
			this.moveChildren(e), e.wrap(this);
		}
	}
}, fo = 1, q = class extends Ga {
	cache = {};
	delta() {
		return this.cache.delta ?? (this.cache.delta = po(this)), this.cache.delta;
	}
	deleteAt(e, t) {
		super.deleteAt(e, t), this.cache = {};
	}
	formatAt(e, t, n, r) {
		t <= 0 || (this.scroll.query(n, V.BLOCK) ? e + t === this.length() && this.format(n, r) : super.formatAt(e, Math.min(t, this.length() - e - 1), n, r), this.cache = {});
	}
	insertAt(e, t, n) {
		if (n != null) {
			super.insertAt(e, t, n), this.cache = {};
			return;
		}
		if (t.length === 0) return;
		let r = t.split("\n"), i = r.shift();
		i.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
		let a = this;
		r.reduce((e, t) => (a = a.split(e, !0), a.insertAt(0, t), t.length), e + i.length);
	}
	insertBefore(e, t) {
		let { head: n } = this.children;
		super.insertBefore(e, t), n instanceof oo && n.remove(), this.cache = {};
	}
	length() {
		return this.cache.length ?? (this.cache.length = super.length() + fo), this.cache.length;
	}
	moveChildren(e, t) {
		super.moveChildren(e, t), this.cache = {};
	}
	optimize(e) {
		super.optimize(e), this.cache = {};
	}
	path(e) {
		return super.path(e, !0);
	}
	removeChild(e) {
		super.removeChild(e), this.cache = {};
	}
	split(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (t && (e === 0 || e >= this.length() - fo)) {
			let t = this.clone();
			return e === 0 ? (this.parent.insertBefore(t, this), this) : (this.parent.insertBefore(t, this.next), t);
		}
		let n = super.split(e, t);
		return this.cache = {}, n;
	}
};
q.blotName = "block", q.tagName = "P", q.defaultChild = oo, q.allowedChildren = [
	oo,
	uo,
	G,
	so
];
var J = class extends G {
	attach() {
		super.attach(), this.attributes = new Pa(this.domNode);
	}
	delta() {
		return new K.default().insert(this.value(), {
			...this.formats(),
			...this.attributes.values()
		});
	}
	format(e, t) {
		let n = this.scroll.query(e, V.BLOCK_ATTRIBUTE);
		n != null && this.attributes.attribute(n, t);
	}
	formatAt(e, t, n, r) {
		this.format(n, r);
	}
	insertAt(e, t, n) {
		if (n != null) {
			super.insertAt(e, t, n);
			return;
		}
		let r = t.split("\n"), i = r.pop(), a = r.map((e) => {
			let t = this.scroll.create(q.blotName);
			return t.insertAt(0, e), t;
		}), o = this.split(e);
		a.forEach((e) => {
			this.parent.insertBefore(e, o);
		}), i && this.parent.insertBefore(this.scroll.create("text", i), o);
	}
};
J.scope = V.BLOCK_BLOT;
function po(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.descendants(U).reduce((e, n) => n.length() === 0 ? e : e.insert(n.value(), Y(n, {}, t)), new K.default()).insert("\n", Y(e));
}
function Y(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
	return e == null || ("formats" in e && typeof e.formats == "function" && (t = {
		...t,
		...e.formats()
	}, n && delete t["code-token"]), e.parent == null || e.parent.statics.blotName === "scroll" || e.parent.statics.scope !== e.statics.scope) ? t : Y(e.parent, t, n);
}
// node_modules/quill/blots/cursor.js
var mo = class e extends G {
	static blotName = "cursor";
	static className = "ql-cursor";
	static tagName = "span";
	static CONTENTS = "﻿";
	static value() {}
	constructor(t, n, r) {
		super(t, n), this.selection = r, this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
	}
	detach() {
		this.parent != null && this.parent.removeChild(this);
	}
	format(t, n) {
		if (this.savedLength !== 0) {
			super.format(t, n);
			return;
		}
		let r = this, i = 0;
		for (; r != null && r.statics.scope !== V.BLOCK_BLOT;) i += r.offset(r.parent), r = r.parent;
		r != null && (this.savedLength = e.CONTENTS.length, r.optimize(), r.formatAt(i, e.CONTENTS.length, t, n), this.savedLength = 0);
	}
	index(e, t) {
		return e === this.textNode ? 0 : super.index(e, t);
	}
	length() {
		return this.savedLength;
	}
	position() {
		return [this.textNode, this.textNode.data.length];
	}
	remove() {
		super.remove(), this.parent = null;
	}
	restore() {
		if (this.selection.composing || this.parent == null) return null;
		let t = this.selection.getNativeRange();
		for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
		let n = this.prev instanceof so ? this.prev : null, r = n ? n.length() : 0, i = this.next instanceof so ? this.next : null, a = i ? i.text : "", { textNode: o } = this, s = o.data.split(e.CONTENTS).join("");
		o.data = e.CONTENTS;
		let c;
		if (n) c = n, (s || i) && (n.insertAt(n.length(), s + a), i && i.remove());
		else if (i) c = i, i.insertAt(0, s);
		else {
			let e = document.createTextNode(s);
			c = this.scroll.create(e), this.parent.insertBefore(c, this);
		}
		if (this.remove(), t) {
			let e = (e, t) => n && e === n.domNode ? t : e === o ? r + t - 1 : i && e === i.domNode ? r + s.length + t : null, a = e(t.start.node, t.start.offset), l = e(t.end.node, t.end.offset);
			if (a !== null && l !== null) return {
				startNode: c.domNode,
				startOffset: a,
				endNode: c.domNode,
				endOffset: l
			};
		}
		return null;
	}
	update(e, t) {
		if (e.some((e) => e.type === "characterData" && e.target === this.textNode)) {
			let e = this.restore();
			e && (t.range = e);
		}
	}
	optimize(t) {
		super.optimize(t);
		let { parent: n } = this;
		for (; n;) {
			if (n.domNode.tagName === "A") {
				this.savedLength = e.CONTENTS.length, n.isolate(this.offset(n), this.length()).unwrap(), this.savedLength = 0;
				break;
			}
			n = n.parent;
		}
	}
	value() {
		return "";
	}
}, ho = /* @__PURE__ */ l((/* @__PURE__ */ o(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn !== t || i && !o.once || n && o.context !== n || s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1), go = /* @__PURE__ */ new WeakMap(), _o = [
	"error",
	"warn",
	"log",
	"info"
], vo = "warn";
function yo(e) {
	if (vo && _o.indexOf(e) <= _o.indexOf(vo)) {
		var t = [...arguments].slice(1);
		console[e](...t);
	}
}
function bo(e) {
	return _o.reduce((t, n) => (t[n] = yo.bind(console, n, e), t), {});
}
bo.level = (e) => {
	vo = e;
}, yo.level = bo.level;
// node_modules/quill/core/emitter.js
var xo = bo("quill:events");
[
	"selectionchange",
	"mousedown",
	"mouseup",
	"click"
].forEach((e) => {
	document.addEventListener(e, function() {
		var e = [...arguments];
		Array.from(document.querySelectorAll(".ql-container")).forEach((t) => {
			let n = go.get(t);
			n && n.emitter && n.emitter.handleDOM(...e);
		});
	});
});
var X = class extends ho.default {
	static events = {
		EDITOR_CHANGE: "editor-change",
		SCROLL_BEFORE_UPDATE: "scroll-before-update",
		SCROLL_BLOT_MOUNT: "scroll-blot-mount",
		SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
		SCROLL_OPTIMIZE: "scroll-optimize",
		SCROLL_UPDATE: "scroll-update",
		SCROLL_EMBED_UPDATE: "scroll-embed-update",
		SELECTION_CHANGE: "selection-change",
		TEXT_CHANGE: "text-change",
		COMPOSITION_BEFORE_START: "composition-before-start",
		COMPOSITION_START: "composition-start",
		COMPOSITION_BEFORE_END: "composition-before-end",
		COMPOSITION_END: "composition-end"
	};
	static sources = {
		API: "api",
		SILENT: "silent",
		USER: "user"
	};
	constructor() {
		super(), this.domListeners = {}, this.on("error", xo.error);
	}
	emit() {
		var e = [...arguments];
		return xo.log.call(xo, ...e), super.emit(...e);
	}
	handleDOM(e) {
		var t = [...arguments].slice(1);
		(this.domListeners[e.type] || []).forEach((n) => {
			let { node: r, handler: i } = n;
			(e.target === r || r.contains(e.target)) && i(e, ...t);
		});
	}
	listenDOM(e, t, n) {
		this.domListeners[e] || (this.domListeners[e] = []), this.domListeners[e].push({
			node: t,
			handler: n
		});
	}
}, So = bo("quill:selection"), Co = class {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		this.index = e, this.length = t;
	}
}, wo = class {
	constructor(e, t) {
		this.emitter = t, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new Co(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
			!this.mouseDown && !this.composing && setTimeout(this.update.bind(this, X.sources.USER), 1);
		}), this.emitter.on(X.events.SCROLL_BEFORE_UPDATE, () => {
			if (!this.hasFocus()) return;
			let e = this.getNativeRange();
			e != null && e.start.node !== this.cursor.textNode && this.emitter.once(X.events.SCROLL_UPDATE, (t, n) => {
				try {
					this.root.contains(e.start.node) && this.root.contains(e.end.node) && this.setNativeRange(e.start.node, e.start.offset, e.end.node, e.end.offset);
					let r = n.some((e) => e.type === "characterData" || e.type === "childList" || e.type === "attributes" && e.target === this.root);
					this.update(r ? X.sources.SILENT : t);
				} catch {}
			});
		}), this.emitter.on(X.events.SCROLL_OPTIMIZE, (e, t) => {
			if (t.range) {
				let { startNode: e, startOffset: n, endNode: r, endOffset: i } = t.range;
				this.setNativeRange(e, n, r, i), this.update(X.sources.SILENT);
			}
		}), this.update(X.sources.SILENT);
	}
	handleComposition() {
		this.emitter.on(X.events.COMPOSITION_BEFORE_START, () => {
			this.composing = !0;
		}), this.emitter.on(X.events.COMPOSITION_END, () => {
			if (this.composing = !1, this.cursor.parent) {
				let e = this.cursor.restore();
				if (!e) return;
				setTimeout(() => {
					this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
				}, 1);
			}
		});
	}
	handleDragging() {
		this.emitter.listenDOM("mousedown", document.body, () => {
			this.mouseDown = !0;
		}), this.emitter.listenDOM("mouseup", document.body, () => {
			this.mouseDown = !1, this.update(X.sources.USER);
		});
	}
	focus() {
		this.hasFocus() || (this.root.focus({ preventScroll: !0 }), this.setRange(this.savedRange));
	}
	format(e, t) {
		this.scroll.update();
		let n = this.getNativeRange();
		if (n != null && n.native.collapsed && !this.scroll.query(e, V.BLOCK)) {
			if (n.start.node !== this.cursor.textNode) {
				let e = this.scroll.find(n.start.node, !1);
				if (e == null) return;
				if (e instanceof U) {
					let t = e.split(n.start.offset);
					e.parent.insertBefore(this.cursor, t);
				} else e.insertBefore(this.cursor, n.start.node);
				this.cursor.attach();
			}
			this.cursor.format(e, t), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
		}
	}
	getBounds(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = this.scroll.length();
		e = Math.min(e, n - 1), t = Math.min(e + t, n - 1) - e;
		let r, [i, a] = this.scroll.leaf(e);
		if (i == null) return null;
		if (t > 0 && a === i.length()) {
			let [t] = this.scroll.leaf(e + 1);
			if (t) {
				let [n] = this.scroll.line(e), [r] = this.scroll.line(e + 1);
				n === r && (i = t, a = 0);
			}
		}
		[r, a] = i.position(a, !0);
		let o = document.createRange();
		if (t > 0) return o.setStart(r, a), [i, a] = this.scroll.leaf(e + t), i == null ? null : ([r, a] = i.position(a, !0), o.setEnd(r, a), o.getBoundingClientRect());
		let s = "left", c;
		if (r instanceof Text) {
			if (!r.data.length) return null;
			a < r.data.length ? (o.setStart(r, a), o.setEnd(r, a + 1)) : (o.setStart(r, a - 1), o.setEnd(r, a), s = "right"), c = o.getBoundingClientRect();
		} else {
			if (!(i.domNode instanceof Element)) return null;
			c = i.domNode.getBoundingClientRect(), a > 0 && (s = "right");
		}
		return {
			bottom: c.top + c.height,
			height: c.height,
			left: c[s],
			right: c[s],
			top: c.top,
			width: 0
		};
	}
	getNativeRange() {
		let e = document.getSelection();
		if (e == null || e.rangeCount <= 0) return null;
		let t = e.getRangeAt(0);
		if (t == null) return null;
		let n = this.normalizeNative(t);
		return So.info("getNativeRange", n), n;
	}
	getRange() {
		let e = this.scroll.domNode;
		if ("isConnected" in e && !e.isConnected) return [null, null];
		let t = this.getNativeRange();
		return t == null ? [null, null] : [this.normalizedToRange(t), t];
	}
	hasFocus() {
		return document.activeElement === this.root || document.activeElement != null && To(this.root, document.activeElement);
	}
	normalizedToRange(e) {
		let t = [[e.start.node, e.start.offset]];
		e.native.collapsed || t.push([e.end.node, e.end.offset]);
		let n = t.map((e) => {
			let [t, n] = e, r = this.scroll.find(t, !0), i = r.offset(this.scroll);
			return n === 0 ? i : r instanceof U ? i + r.index(t, n) : i + r.length();
		}), r = Math.min(Math.max(...n), this.scroll.length() - 1), i = Math.min(r, ...n);
		return new Co(i, r - i);
	}
	normalizeNative(e) {
		if (!To(this.root, e.startContainer) || !e.collapsed && !To(this.root, e.endContainer)) return null;
		let t = {
			start: {
				node: e.startContainer,
				offset: e.startOffset
			},
			end: {
				node: e.endContainer,
				offset: e.endOffset
			},
			native: e
		};
		return [t.start, t.end].forEach((e) => {
			let { node: t, offset: n } = e;
			for (; !(t instanceof Text) && t.childNodes.length > 0;) if (t.childNodes.length > n) t = t.childNodes[n], n = 0;
			else if (t.childNodes.length === n) t = t.lastChild, n = t instanceof Text ? t.data.length : t.childNodes.length > 0 ? t.childNodes.length : t.childNodes.length + 1;
			else break;
			e.node = t, e.offset = n;
		}), t;
	}
	rangeToNative(e) {
		let t = this.scroll.length(), n = (e, n) => {
			e = Math.min(t - 1, e);
			let [r, i] = this.scroll.leaf(e);
			return r ? r.position(i, n) : [null, -1];
		};
		return [...n(e.index, !1), ...n(e.index + e.length, !0)];
	}
	setNativeRange(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t, i = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
		if (So.info("setNativeRange", e, t, n, r), e != null && (this.root.parentNode == null || e.parentNode == null || n.parentNode == null)) return;
		let a = document.getSelection();
		if (a != null) {
			if (e != null) {
				this.hasFocus() || this.root.focus({ preventScroll: !0 });
				let { native: o } = this.getNativeRange() || {};
				if (o == null || i || e !== o.startContainer || t !== o.startOffset || n !== o.endContainer || r !== o.endOffset) {
					e instanceof Element && e.tagName === "BR" && (t = Array.from(e.parentNode.childNodes).indexOf(e), e = e.parentNode), n instanceof Element && n.tagName === "BR" && (r = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
					let i = document.createRange();
					i.setStart(e, t), i.setEnd(n, r), a.removeAllRanges(), a.addRange(i);
				}
			} else a.removeAllRanges(), this.root.blur();
		}
	}
	setRange(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : X.sources.API;
		if (typeof t == "string" && (n = t, t = !1), So.info("setRange", e), e != null) {
			let n = this.rangeToNative(e);
			this.setNativeRange(...n, t);
		} else this.setNativeRange(null);
		this.update(n);
	}
	update() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : X.sources.USER, t = this.lastRange, [n, r] = this.getRange();
		if (this.lastRange = n, this.lastNative = r, this.lastRange != null && (this.savedRange = this.lastRange), !wa(t, this.lastRange)) {
			if (!this.composing && r != null && r.native.collapsed && r.start.node !== this.cursor.textNode) {
				let e = this.cursor.restore();
				e && this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
			}
			let n = [
				X.events.SELECTION_CHANGE,
				Mi(this.lastRange),
				Mi(t),
				e
			];
			this.emitter.emit(X.events.EDITOR_CHANGE, ...n), e !== X.sources.SILENT && this.emitter.emit(...n);
		}
	}
};
function To(e, t) {
	try {
		t.parentNode;
	} catch {
		return !1;
	}
	return e.contains(t);
}
// node_modules/quill/core/editor.js
var Eo = /^[ -~]*$/, Do = class {
	constructor(e) {
		this.scroll = e, this.delta = this.getDelta();
	}
	applyDelta(e) {
		this.scroll.update();
		let t = this.scroll.length();
		this.scroll.batchStart();
		let n = Mo(e), r = new K.default();
		return Po(n.ops.slice()).reduce((e, n) => {
			let i = K.Op.length(n), a = n.attributes || {}, o = !1, s = !1;
			if (n.insert != null) {
				if (r.retain(i), typeof n.insert == "string") {
					let r = n.insert;
					s = !r.endsWith("\n") && (t <= e || !!this.scroll.descendant(J, e)[0]), this.scroll.insertAt(e, r);
					let [i, o] = this.scroll.line(e), c = Ta({}, Y(i));
					if (i instanceof q) {
						let [e] = i.descendant(U, o);
						e && (c = Ta(c, Y(e)));
					}
					a = K.AttributeMap.diff(c, a) || {};
				} else if (typeof n.insert == "object") {
					let r = Object.keys(n.insert)[0];
					if (r == null) return e;
					let i = this.scroll.query(r, V.INLINE) != null;
					if (i) (t <= e || this.scroll.descendant(J, e)[0]) && (s = !0);
					else if (e > 0) {
						let [t, n] = this.scroll.descendant(U, e - 1);
						t instanceof so ? t.value()[n] !== "\n" && (o = !0) : t instanceof G && t.statics.scope === V.INLINE_BLOT && (o = !0);
					}
					if (this.scroll.insertAt(e, r, n.insert[r]), i) {
						let [t] = this.scroll.descendant(U, e);
						if (t) {
							let e = Ta({}, Y(t));
							a = K.AttributeMap.diff(e, a) || {};
						}
					}
				}
				t += i;
			} else if (r.push(n), n.retain !== null && typeof n.retain == "object") {
				let t = Object.keys(n.retain)[0];
				if (t == null) return e;
				this.scroll.updateEmbedAt(e, t, n.retain[t]);
			}
			Object.keys(a).forEach((t) => {
				this.scroll.formatAt(e, i, t, a[t]);
			});
			let c = +!!o, l = +!!s;
			return t += c + l, r.retain(c), r.delete(l), e + i + c + l;
		}, 0), r.reduce((e, t) => typeof t.delete == "number" ? (this.scroll.deleteAt(e, t.delete), e) : e + K.Op.length(t), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(n);
	}
	deleteText(e, t) {
		return this.scroll.deleteAt(e, t), this.update(new K.default().retain(e).delete(t));
	}
	formatLine(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.scroll.update(), Object.keys(n).forEach((r) => {
			this.scroll.lines(e, Math.max(t, 1)).forEach((e) => {
				e.format(r, n[r]);
			});
		}), this.scroll.optimize();
		let r = new K.default().retain(e).retain(t, Mi(n));
		return this.update(r);
	}
	formatText(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		Object.keys(n).forEach((r) => {
			this.scroll.formatAt(e, t, r, n[r]);
		});
		let r = new K.default().retain(e).retain(t, Mi(n));
		return this.update(r);
	}
	getContents(e, t) {
		return this.delta.slice(e, e + t);
	}
	getDelta() {
		return this.scroll.lines().reduce((e, t) => e.concat(t.delta()), new K.default());
	}
	getFormat(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = [], r = [];
		t === 0 ? this.scroll.path(e).forEach((e) => {
			let [t] = e;
			t instanceof q ? n.push(t) : t instanceof U && r.push(t);
		}) : (n = this.scroll.lines(e, t), r = this.scroll.descendants(U, e, t));
		let [i, a] = [n, r].map((e) => {
			let t = e.shift();
			if (t == null) return {};
			let n = Y(t);
			for (; Object.keys(n).length > 0;) {
				let t = e.shift();
				if (t == null) return n;
				n = Ao(Y(t), n);
			}
			return n;
		});
		return {
			...i,
			...a
		};
	}
	getHTML(e, t) {
		let [n, r] = this.scroll.line(e);
		if (n) {
			let i = n.length();
			return n.length() >= r + t && (r !== 0 || t !== i) ? ko(n, r, t, !0) : ko(this.scroll, e, t, !0);
		}
		return "";
	}
	getText(e, t) {
		return this.getContents(e, t).filter((e) => typeof e.insert == "string").map((e) => e.insert).join("");
	}
	insertContents(e, t) {
		let n = Mo(t), r = new K.default().retain(e).concat(n);
		return this.scroll.insertContents(e, n), this.update(r);
	}
	insertEmbed(e, t, n) {
		return this.scroll.insertAt(e, t, n), this.update(new K.default().retain(e).insert({ [t]: n }));
	}
	insertText(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return t = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(e, t), Object.keys(n).forEach((r) => {
			this.scroll.formatAt(e, t.length, r, n[r]);
		}), this.update(new K.default().retain(e).insert(t, Mi(n)));
	}
	isBlank() {
		if (this.scroll.children.length === 0) return !0;
		if (this.scroll.children.length > 1) return !1;
		let e = this.scroll.children.head;
		if (e?.statics.blotName !== q.blotName) return !1;
		let t = e;
		return t.children.length > 1 ? !1 : t.children.head instanceof oo;
	}
	removeFormat(e, t) {
		let n = this.getText(e, t), [r, i] = this.scroll.line(e + t), a = 0, o = new K.default();
		r != null && (a = r.length() - i, o = r.delta().slice(i, i + a - 1).insert("\n"));
		let s = this.getContents(e, t + a).diff(new K.default().insert(n).concat(o)), c = new K.default().retain(e).concat(s);
		return this.applyDelta(c);
	}
	update(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, r = this.delta;
		if (t.length === 1 && t[0].type === "characterData" && t[0].target.data.match(Eo) && this.scroll.find(t[0].target)) {
			let i = this.scroll.find(t[0].target), a = Y(i), o = i.offset(this.scroll), s = t[0].oldValue.replace(mo.CONTENTS, ""), c = new K.default().insert(s), l = new K.default().insert(i.value()), u = n && {
				oldRange: No(n.oldRange, -o),
				newRange: No(n.newRange, -o)
			};
			e = new K.default().retain(o).concat(c.diff(l, u)).reduce((e, t) => t.insert ? e.insert(t.insert, a) : e.push(t), new K.default()), this.delta = r.compose(e);
		} else this.delta = this.getDelta(), e && wa(r.compose(e), this.delta) || (e = r.diff(this.delta, n));
		return e;
	}
};
function Oo(e, t, n) {
	if (e.length === 0) {
		let [e] = jo(n.pop());
		return t <= 0 ? `</li></${e}>` : `</li></${e}>${Oo([], t - 1, n)}`;
	}
	let [{ child: r, offset: i, length: a, indent: o, type: s }, ...c] = e, [l, u] = jo(s);
	if (o > t) return n.push(s), o === t + 1 ? `<${l}><li${u}>${ko(r, i, a)}${Oo(c, o, n)}` : `<${l}><li>${Oo(e, t + 1, n)}`;
	let d = n[n.length - 1];
	if (o === t && s === d) return `</li><li${u}>${ko(r, i, a)}${Oo(c, o, n)}`;
	let [f] = jo(n.pop());
	return `</li></${f}>${Oo(e, t - 1, n)}`;
}
function ko(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
	if ("html" in e && typeof e.html == "function") return e.html(t, n);
	if (e instanceof so) return lo(e.value().slice(t, t + n)).replaceAll(" ", "&nbsp;");
	if (e instanceof W) {
		if (e.statics.blotName === "list-container") {
			let r = [];
			return e.children.forEachAt(t, n, (e, t, n) => {
				let i = "formats" in e && typeof e.formats == "function" ? e.formats() : {};
				r.push({
					child: e,
					offset: t,
					length: n,
					indent: i.indent || 0,
					type: i.list
				});
			}), Oo(r, -1, []);
		}
		let i = [];
		if (e.children.forEachAt(t, n, (e, t, n) => {
			i.push(ko(e, t, n));
		}), r || e.statics.blotName === "list") return i.join("");
		let { outerHTML: a, innerHTML: o } = e.domNode, [s, c] = a.split(`>${o}<`);
		return s === "<table" ? `<table style="border: 1px solid #000;">${i.join("")}<${c}` : `${s}>${i.join("")}<${c}`;
	}
	return e.domNode instanceof Element ? e.domNode.outerHTML : "";
}
function Ao(e, t) {
	return Object.keys(t).reduce((n, r) => {
		if (e[r] == null) return n;
		let i = t[r];
		return n[r] = i === e[r] ? i : Array.isArray(i) ? i.indexOf(e[r]) < 0 ? i.concat([e[r]]) : i : [i, e[r]], n;
	}, {});
}
function jo(e) {
	let t = e === "ordered" ? "ol" : "ul";
	switch (e) {
		case "checked": return [t, " data-list=\"checked\""];
		case "unchecked": return [t, " data-list=\"unchecked\""];
		default: return [t, ""];
	}
}
function Mo(e) {
	return e.reduce((e, t) => {
		if (typeof t.insert == "string") {
			let n = t.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
			return e.insert(n, t.attributes);
		}
		return e.push(t);
	}, new K.default());
}
function No(e, t) {
	let { index: n, length: r } = e;
	return new Co(n + t, r);
}
function Po(e) {
	let t = [];
	return e.forEach((e) => {
		typeof e.insert == "string" ? e.insert.split("\n").forEach((n, r) => {
			r && t.push({
				insert: "\n",
				attributes: e.attributes
			}), n && t.push({
				insert: n,
				attributes: e.attributes
			});
		}) : t.push(e);
	}), t;
}
// node_modules/quill/core/module.js
var Fo = class {
	static DEFAULTS = {};
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.quill = e, this.options = t;
	}
}, Io = "﻿", Lo = class extends G {
	constructor(e, t) {
		super(e, t), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((e) => {
			this.contentNode.appendChild(e);
		}), this.leftGuard = document.createTextNode(Io), this.rightGuard = document.createTextNode(Io), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
	}
	index(e, t) {
		return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : super.index(e, t);
	}
	restore(e) {
		let t = null, n, r = e.data.split(Io).join("");
		if (e === this.leftGuard) {
			if (this.prev instanceof so) {
				let e = this.prev.length();
				this.prev.insertAt(e, r), t = {
					startNode: this.prev.domNode,
					startOffset: e + r.length
				};
			} else n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this), t = {
				startNode: n,
				startOffset: r.length
			};
		} else e === this.rightGuard && (this.next instanceof so ? (this.next.insertAt(0, r), t = {
			startNode: this.next.domNode,
			startOffset: r.length
		}) : (n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this.next), t = {
			startNode: n,
			startOffset: r.length
		}));
		return e.data = Io, t;
	}
	update(e, t) {
		e.forEach((e) => {
			if (e.type === "characterData" && (e.target === this.leftGuard || e.target === this.rightGuard)) {
				let n = this.restore(e.target);
				n && (t.range = n);
			}
		});
	}
}, Ro = class {
	isComposing = !1;
	constructor(e, t) {
		this.scroll = e, this.emitter = t, this.setupListeners();
	}
	setupListeners() {
		this.scroll.domNode.addEventListener("compositionstart", (e) => {
			this.isComposing || this.handleCompositionStart(e);
		}), this.scroll.domNode.addEventListener("compositionend", (e) => {
			this.isComposing && queueMicrotask(() => {
				this.handleCompositionEnd(e);
			});
		});
	}
	handleCompositionStart(e) {
		let t = e.target instanceof Node ? this.scroll.find(e.target, !0) : null;
		t && !(t instanceof Lo) && (this.emitter.emit(X.events.COMPOSITION_BEFORE_START, e), this.scroll.batchStart(), this.emitter.emit(X.events.COMPOSITION_START, e), this.isComposing = !0);
	}
	handleCompositionEnd(e) {
		this.emitter.emit(X.events.COMPOSITION_BEFORE_END, e), this.scroll.batchEnd(), this.emitter.emit(X.events.COMPOSITION_END, e), this.isComposing = !1;
	}
}, zo = class e {
	static DEFAULTS = { modules: {} };
	static themes = { default: e };
	modules = {};
	constructor(e, t) {
		this.quill = e, this.options = t;
	}
	init() {
		Object.keys(this.options.modules).forEach((e) => {
			this.modules[e] ?? this.addModule(e);
		});
	}
	addModule(e) {
		let t = this.quill.constructor.import(`modules/${e}`);
		return this.modules[e] = new t(this.quill, this.options.modules[e] || {}), this.modules[e];
	}
}, Bo = (e) => e.parentElement || e.getRootNode().host || null, Vo = (e) => {
	let t = e.getBoundingClientRect(), n = "offsetWidth" in e && Math.abs(t.width) / e.offsetWidth || 1, r = "offsetHeight" in e && Math.abs(t.height) / e.offsetHeight || 1;
	return {
		top: t.top,
		right: t.left + e.clientWidth * n,
		bottom: t.top + e.clientHeight * r,
		left: t.left
	};
}, Ho = (e) => {
	let t = parseInt(e, 10);
	return Number.isNaN(t) ? 0 : t;
}, Uo = (e, t, n, r, i, a) => e < n && t > r ? 0 : e < n ? -(n - e + i) : t > r ? t - e > r - n ? e + i - n : t - r + a : 0, Wo = (e, t) => {
	let n = e.ownerDocument, r = t, i = e;
	for (; i;) {
		let e = i === n.body, t = e ? {
			top: 0,
			right: window.visualViewport?.width ?? n.documentElement.clientWidth,
			bottom: window.visualViewport?.height ?? n.documentElement.clientHeight,
			left: 0
		} : Vo(i), a = getComputedStyle(i), o = Uo(r.left, r.right, t.left, t.right, Ho(a.scrollPaddingLeft), Ho(a.scrollPaddingRight)), s = Uo(r.top, r.bottom, t.top, t.bottom, Ho(a.scrollPaddingTop), Ho(a.scrollPaddingBottom));
		if (o || s) {
			if (e) n.defaultView?.scrollBy(o, s);
			else {
				let { scrollLeft: e, scrollTop: t } = i;
				s && (i.scrollTop += s), o && (i.scrollLeft += o);
				let n = i.scrollLeft - e, a = i.scrollTop - t;
				r = {
					left: r.left - n,
					top: r.top - a,
					right: r.right - n,
					bottom: r.bottom - a
				};
			}
		}
		i = e || a.position === "fixed" ? null : Bo(i);
	}
}, Go = 100, Ko = [
	"block",
	"break",
	"cursor",
	"inline",
	"scroll",
	"text"
], qo = (e, t, n) => {
	let r = new Aa();
	return Ko.forEach((e) => {
		let n = t.query(e);
		n && r.register(n);
	}), e.forEach((e) => {
		let i = t.query(e);
		i || n.error(`Cannot register "${e}" specified in "formats" config. Are you sure it was registered?`);
		let a = 0;
		for (; i;) if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, a += 1, a > Go) {
			n.error(`Cycle detected in registering blot requiredContainer: "${e}"`);
			break;
		}
	}), r;
}, Jo = bo("quill"), Yo = new Aa();
W.uiClass = "ql-ui";
var Z = class e {
	static DEFAULTS = {
		bounds: null,
		modules: {
			clipboard: !0,
			keyboard: !0,
			history: !0,
			uploader: !0
		},
		placeholder: "",
		readOnly: !1,
		registry: Yo,
		theme: "default"
	};
	static events = X.events;
	static sources = X.sources;
	static version = "2.0.3";
	static imports = {
		delta: K.default,
		parchment: Ea,
		"core/module": Fo,
		"core/theme": zo
	};
	static debug(e) {
		e === !0 && (e = "log"), bo.level(e);
	}
	static find(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		return go.get(e) || Yo.find(e, t);
	}
	static import(e) {
		return this.imports[e] ?? Jo.error(`Cannot import ${e}. Are you sure it was registered?`), this.imports[e];
	}
	static register() {
		if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
			let e = arguments.length <= 0 ? void 0 : arguments[0], t = !(arguments.length <= 1 || !arguments[1]), n = "attrName" in e ? e.attrName : e.blotName;
			typeof n == "string" ? this.register(`formats/${n}`, e, t) : Object.keys(e).forEach((n) => {
				this.register(n, e[n], t);
			});
		} else {
			let e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], n = !(arguments.length <= 2 || !arguments[2]);
			this.imports[e] != null && !n && Jo.warn(`Overwriting ${e} with`, t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && t && typeof t != "boolean" && t.blotName !== "abstract" && Yo.register(t), typeof t.register == "function" && t.register(Yo);
		}
	}
	constructor(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (this.options = $o(t, n), this.container = this.options.container, this.container == null) {
			Jo.error("Invalid Quill container", t);
			return;
		}
		this.options.debug && e.debug(this.options.debug);
		let r = this.container.innerHTML.trim();
		this.container.classList.add("ql-container"), this.container.innerHTML = "", go.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new X();
		let i = Za.blotName, a = this.options.registry.query(i);
		if (!a || !("blotName" in a)) throw Error(`Cannot initialize Quill without "${i}" blot`);
		if (this.scroll = new a(this.options.registry, this.root, { emitter: this.emitter }), this.editor = new Do(this.scroll), this.selection = new wo(this.scroll, this.emitter), this.composition = new Ro(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(X.events.EDITOR_CHANGE, (e) => {
			e === X.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
		}), this.emitter.on(X.events.SCROLL_UPDATE, (e, t) => {
			let n = this.selection.lastRange, [r] = this.selection.getRange(), i = n && r ? {
				oldRange: n,
				newRange: r
			} : void 0;
			es.call(this, () => this.editor.update(null, t, i), e);
		}), this.emitter.on(X.events.SCROLL_EMBED_UPDATE, (t, n) => {
			let r = this.selection.lastRange, [i] = this.selection.getRange(), a = r && i ? {
				oldRange: r,
				newRange: i
			} : void 0;
			es.call(this, () => {
				let e = new K.default().retain(t.offset(this)).retain({ [t.statics.blotName]: n });
				return this.editor.update(e, [], a);
			}, e.sources.USER);
		}), r) {
			let e = this.clipboard.convert({
				html: `${r}<p><br></p>`,
				text: "\n"
			});
			this.setContents(e);
		}
		this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
	}
	addContainer(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (typeof e == "string") {
			let t = e;
			e = document.createElement("div"), e.classList.add(t);
		}
		return this.container.insertBefore(e, t), e;
	}
	blur() {
		this.selection.setRange(null);
	}
	deleteText(e, t, n) {
		return [e, t, , n] = ts(e, t, n), es.call(this, () => this.editor.deleteText(e, t), n, e, -1 * t);
	}
	disable() {
		this.enable(!1);
	}
	editReadOnly(e) {
		this.allowReadOnlyEdits = !0;
		let t = e();
		return this.allowReadOnlyEdits = !1, t;
	}
	enable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		this.scroll.enable(e), this.container.classList.toggle("ql-disabled", !e);
	}
	focus() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.selection.focus(), e.preventScroll || this.scrollSelectionIntoView();
	}
	format(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : X.sources.API;
		return es.call(this, () => {
			let n = this.getSelection(!0), r = new K.default();
			if (n == null) return r;
			if (this.scroll.query(e, V.BLOCK)) r = this.editor.formatLine(n.index, n.length, { [e]: t });
			else if (n.length === 0) return this.selection.format(e, t), r;
			else r = this.editor.formatText(n.index, n.length, { [e]: t });
			return this.setSelection(n, X.sources.SILENT), r;
		}, n);
	}
	formatLine(e, t, n, r, i) {
		let a;
		return [e, t, a, i] = ts(e, t, n, r, i), es.call(this, () => this.editor.formatLine(e, t, a), i, e, 0);
	}
	formatText(e, t, n, r, i) {
		let a;
		return [e, t, a, i] = ts(e, t, n, r, i), es.call(this, () => this.editor.formatText(e, t, a), i, e, 0);
	}
	getBounds(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = null;
		if (n = typeof e == "number" ? this.selection.getBounds(e, t) : this.selection.getBounds(e.index, e.length), !n) return null;
		let r = this.container.getBoundingClientRect();
		return {
			bottom: n.bottom - r.top,
			height: n.height,
			left: n.left - r.left,
			right: n.right - r.left,
			top: n.top - r.top,
			width: n.width
		};
	}
	getContents() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - e;
		return [e, t] = ts(e, t), this.editor.getContents(e, t);
	}
	getFormat() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		return typeof e == "number" ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length);
	}
	getIndex(e) {
		return e.offset(this.scroll);
	}
	getLength() {
		return this.scroll.length();
	}
	getLeaf(e) {
		return this.scroll.leaf(e);
	}
	getLine(e) {
		return this.scroll.line(e);
	}
	getLines() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
		return typeof e == "number" ? this.scroll.lines(e, t) : this.scroll.lines(e.index, e.length);
	}
	getModule(e) {
		return this.theme.modules[e];
	}
	getSelection() {
		return arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
	}
	getSemanticHTML() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
		return typeof e == "number" && (t ??= this.getLength() - e), [e, t] = ts(e, t), this.editor.getHTML(e, t);
	}
	getText() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
		return typeof e == "number" && (t ??= this.getLength() - e), [e, t] = ts(e, t), this.editor.getText(e, t);
	}
	hasFocus() {
		return this.selection.hasFocus();
	}
	insertEmbed(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e.sources.API;
		return es.call(this, () => this.editor.insertEmbed(t, n, r), i, t);
	}
	insertText(e, t, n, r, i) {
		let a;
		return [e, , a, i] = ts(e, 0, n, r, i), es.call(this, () => this.editor.insertText(e, t, a), i, e, t.length);
	}
	isEnabled() {
		return this.scroll.isEnabled();
	}
	off() {
		return this.emitter.off(...arguments);
	}
	on() {
		return this.emitter.on(...arguments);
	}
	once() {
		return this.emitter.once(...arguments);
	}
	removeFormat(e, t, n) {
		return [e, t, , n] = ts(e, t, n), es.call(this, () => this.editor.removeFormat(e, t), n, e);
	}
	scrollRectIntoView(e) {
		Wo(this.root, e);
	}
	scrollIntoView() {
		console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
	}
	scrollSelectionIntoView() {
		let e = this.selection.lastRange, t = e && this.selection.getBounds(e.index, e.length);
		t && this.scrollRectIntoView(t);
	}
	setContents(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : X.sources.API;
		return es.call(this, () => {
			e = new K.default(e);
			let t = this.getLength(), n = this.editor.deleteText(0, t), r = this.editor.insertContents(0, e), i = this.editor.deleteText(this.getLength() - 1, 1);
			return n.compose(r).compose(i);
		}, t);
	}
	setSelection(t, n, r) {
		t == null ? this.selection.setRange(null, n || e.sources.API) : ([t, n, , r] = ts(t, n, r), this.selection.setRange(new Co(Math.max(0, t), n), r), r !== X.sources.SILENT && this.scrollSelectionIntoView());
	}
	setText(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : X.sources.API, n = new K.default().insert(e);
		return this.setContents(n, t);
	}
	update() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : X.sources.USER, t = this.scroll.update(e);
		return this.selection.update(e), t;
	}
	updateContents(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : X.sources.API;
		return es.call(this, () => (e = new K.default(e), this.editor.applyDelta(e)), t, !0);
	}
};
function Xo(e) {
	return typeof e == "string" ? document.querySelector(e) : e;
}
function Zo(e) {
	return Object.entries(e ?? {}).reduce((e, t) => {
		let [n, r] = t;
		return {
			...e,
			[n]: r === !0 ? {} : r
		};
	}, {});
}
function Qo(e) {
	return Object.fromEntries(Object.entries(e).filter((e) => e[1] !== void 0));
}
function $o(e, t) {
	let n = Xo(e);
	if (!n) throw Error("Invalid Quill container");
	let r = !t.theme || t.theme === Z.DEFAULTS.theme ? zo : Z.import(`themes/${t.theme}`);
	if (!r) throw Error(`Invalid theme ${t.theme}. Did you register it?`);
	let { modules: i, ...a } = Z.DEFAULTS, { modules: o, ...s } = r.DEFAULTS, c = Zo(t.modules);
	c != null && c.toolbar && c.toolbar.constructor !== Object && (c = {
		...c,
		toolbar: { container: c.toolbar }
	});
	let l = Ta({}, Zo(i), Zo(o), c), u = {
		...a,
		...Qo(s),
		...Qo(t)
	}, d = t.registry;
	return d ? t.formats && Jo.warn("Ignoring \"formats\" option because \"registry\" is specified") : d = t.formats ? qo(t.formats, u.registry, Jo) : u.registry, {
		...u,
		registry: d,
		container: n,
		theme: r,
		modules: Object.entries(l).reduce((e, t) => {
			let [n, r] = t;
			if (!r) return e;
			let i = Z.import(`modules/${n}`);
			return i == null ? (Jo.error(`Cannot load ${n} module. Are you sure you registered it?`), e) : {
				...e,
				[n]: Ta({}, i.DEFAULTS || {}, r)
			};
		}, {}),
		bounds: Xo(u.bounds)
	};
}
function es(e, t, n, r) {
	if (!this.isEnabled() && t === X.sources.USER && !this.allowReadOnlyEdits) return new K.default();
	let i = n == null ? null : this.getSelection(), a = this.editor.delta, o = e();
	if (i != null && (n === !0 && (n = i.index), r == null ? i = ns(i, o, t) : r !== 0 && (i = ns(i, n, r, t)), this.setSelection(i, X.sources.SILENT)), o.length() > 0) {
		let e = [
			X.events.TEXT_CHANGE,
			o,
			a,
			t
		];
		this.emitter.emit(X.events.EDITOR_CHANGE, ...e), t !== X.sources.SILENT && this.emitter.emit(...e);
	}
	return o;
}
function ts(e, t, n, r, i) {
	let a = {};
	return typeof e.index == "number" && typeof e.length == "number" ? typeof t == "number" ? (t = e.length, e = e.index) : (i = r, r = n, n = t, t = e.length, e = e.index) : typeof t != "number" && (i = r, r = n, n = t, t = 0), typeof n == "object" ? (a = n, i = r) : typeof n == "string" && (r == null ? i = n : a[n] = r), i ||= X.sources.API, [
		e,
		t,
		a,
		i
	];
}
function ns(e, t, n, r) {
	let i = typeof n == "number" ? n : 0;
	if (e == null) return null;
	let a, o;
	return t && typeof t.transformPosition == "function" ? [a, o] = [e.index, e.index + e.length].map((e) => t.transformPosition(e, r !== X.sources.USER)) : [a, o] = [e.index, e.index + e.length].map((e) => e < t || e === t && r === X.sources.USER ? e : i >= 0 ? e + i : Math.max(t, e + i)), new Co(a, o - a);
}
// node_modules/quill/blots/container.js
var rs = class extends qa {};
// node_modules/quill/blots/scroll.js
function is(e) {
	return e instanceof q || e instanceof J;
}
function as(e) {
	return typeof e.updateContent == "function";
}
var os = class extends Za {
	static blotName = "scroll";
	static className = "ql-editor";
	static tagName = "DIV";
	static defaultChild = q;
	static allowedChildren = [
		q,
		J,
		rs
	];
	constructor(e, t, n) {
		let { emitter: r } = n;
		super(e, t), this.emitter = r, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (e) => this.handleDragStart(e));
	}
	batchStart() {
		Array.isArray(this.batch) || (this.batch = []);
	}
	batchEnd() {
		if (!this.batch) return;
		let e = this.batch;
		this.batch = !1, this.update(e);
	}
	emitMount(e) {
		this.emitter.emit(X.events.SCROLL_BLOT_MOUNT, e);
	}
	emitUnmount(e) {
		this.emitter.emit(X.events.SCROLL_BLOT_UNMOUNT, e);
	}
	emitEmbedUpdate(e, t) {
		this.emitter.emit(X.events.SCROLL_EMBED_UPDATE, e, t);
	}
	deleteAt(e, t) {
		let [n, r] = this.line(e), [i] = this.line(e + t);
		if (super.deleteAt(e, t), i != null && n !== i && r > 0) {
			if (n instanceof J || i instanceof J) {
				this.optimize();
				return;
			}
			let e = i.children.head instanceof oo ? null : i.children.head;
			n.moveChildren(i, e), n.remove();
		}
		this.optimize();
	}
	enable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		this.domNode.setAttribute("contenteditable", e ? "true" : "false");
	}
	formatAt(e, t, n, r) {
		super.formatAt(e, t, n, r), this.optimize();
	}
	insertAt(e, t, n) {
		if (e >= this.length()) {
			if (n == null || this.scroll.query(t, V.BLOCK) == null) {
				let e = this.scroll.create(this.statics.defaultChild.blotName);
				this.appendChild(e), n == null && t.endsWith("\n") ? e.insertAt(0, t.slice(0, -1), n) : e.insertAt(0, t, n);
			} else {
				let e = this.scroll.create(t, n);
				this.appendChild(e);
			}
		} else super.insertAt(e, t, n);
		this.optimize();
	}
	insertBefore(e, t) {
		if (e.statics.scope === V.INLINE_BLOT) {
			let n = this.scroll.create(this.statics.defaultChild.blotName);
			n.appendChild(e), super.insertBefore(n, t);
		} else super.insertBefore(e, t);
	}
	insertContents(e, t) {
		let n = this.deltaToRenderBlocks(t.concat(new K.default().insert("\n"))), r = n.pop();
		if (r == null) return;
		this.batchStart();
		let i = n.shift();
		if (i) {
			let t = i.type === "block" && (i.delta.length() === 0 || !this.descendant(J, e)[0] && e < this.length()), n = i.type === "block" ? i.delta : new K.default().insert({ [i.key]: i.value });
			ss(this, e, n);
			let r = +(i.type === "block"), a = e + n.length() + r;
			t && this.insertAt(a - 1, "\n");
			let o = Y(this.line(e)[0]), s = K.AttributeMap.diff(o, i.attributes) || {};
			Object.keys(s).forEach((e) => {
				this.formatAt(a - 1, 1, e, s[e]);
			}), e = a;
		}
		let [a, o] = this.children.find(e);
		if (n.length && (a && (a = a.split(o), o = 0), n.forEach((e) => {
			if (e.type === "block") ss(this.createBlock(e.attributes, a || void 0), 0, e.delta);
			else {
				let t = this.create(e.key, e.value);
				this.insertBefore(t, a || void 0), Object.keys(e.attributes).forEach((n) => {
					t.format(n, e.attributes[n]);
				});
			}
		})), r.type === "block" && r.delta.length()) {
			let e = a ? a.offset(a.scroll) + o : this.length();
			ss(this, e, r.delta);
		}
		this.batchEnd(), this.optimize();
	}
	isEnabled() {
		return this.domNode.getAttribute("contenteditable") === "true";
	}
	leaf(e) {
		let t = this.path(e).pop();
		if (!t) return [null, -1];
		let [n, r] = t;
		return n instanceof U ? [n, r] : [null, -1];
	}
	line(e) {
		return e === this.length() ? this.line(e - 1) : this.descendant(is, e);
	}
	lines() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, n = (e, t, r) => {
			let i = [], a = r;
			return e.children.forEachAt(t, r, (e, t, r) => {
				is(e) ? i.push(e) : e instanceof qa && (i = i.concat(n(e, t, a))), a -= r;
			}), i;
		};
		return n(this, e, t);
	}
	optimize() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.batch || (super.optimize(e, t), e.length > 0 && this.emitter.emit(X.events.SCROLL_OPTIMIZE, e, t));
	}
	path(e) {
		return super.path(e).slice(1);
	}
	remove() {}
	update(e) {
		if (this.batch) {
			Array.isArray(e) && (this.batch = this.batch.concat(e));
			return;
		}
		let t = X.sources.USER;
		typeof e == "string" && (t = e), Array.isArray(e) || (e = this.observer.takeRecords()), e = e.filter((e) => {
			let { target: t } = e, n = this.find(t, !0);
			return n && !as(n);
		}), e.length > 0 && this.emitter.emit(X.events.SCROLL_BEFORE_UPDATE, t, e), super.update(e.concat([])), e.length > 0 && this.emitter.emit(X.events.SCROLL_UPDATE, t, e);
	}
	updateEmbedAt(e, t, n) {
		let [r] = this.descendant((e) => e instanceof J, e);
		r && r.statics.blotName === t && as(r) && r.updateContent(n);
	}
	handleDragStart(e) {
		e.preventDefault();
	}
	deltaToRenderBlocks(e) {
		let t = [], n = new K.default();
		return e.forEach((e) => {
			let r = e?.insert;
			if (r) {
				if (typeof r == "string") {
					let i = r.split("\n");
					i.slice(0, -1).forEach((r) => {
						n.insert(r, e.attributes), t.push({
							type: "block",
							delta: n,
							attributes: e.attributes ?? {}
						}), n = new K.default();
					});
					let a = i[i.length - 1];
					a && n.insert(a, e.attributes);
				} else {
					let i = Object.keys(r)[0];
					if (!i) return;
					this.query(i, V.INLINE) ? n.push(e) : (n.length() && t.push({
						type: "block",
						delta: n,
						attributes: {}
					}), n = new K.default(), t.push({
						type: "blockEmbed",
						key: i,
						value: r[i],
						attributes: e.attributes ?? {}
					}));
				}
			}
		}), n.length() && t.push({
			type: "block",
			delta: n,
			attributes: {}
		}), t;
	}
	createBlock(e, t) {
		let n, r = {};
		Object.entries(e).forEach((e) => {
			let [t, i] = e;
			this.query(t, V.BLOCK & V.BLOT) == null ? r[t] = i : n = t;
		});
		let i = this.create(n || this.statics.defaultChild.blotName, n ? e[n] : void 0);
		this.insertBefore(i, t || void 0);
		let a = i.length();
		return Object.entries(r).forEach((e) => {
			let [t, n] = e;
			i.formatAt(0, a, t, n);
		}), i;
	}
};
function ss(e, t, n) {
	n.reduce((t, n) => {
		let r = K.Op.length(n), i = n.attributes || {};
		if (n.insert != null) {
			if (typeof n.insert == "string") {
				let r = n.insert;
				e.insertAt(t, r);
				let [a] = e.descendant(U, t), o = Y(a);
				i = K.AttributeMap.diff(o, i) || {};
			} else if (typeof n.insert == "object") {
				let r = Object.keys(n.insert)[0];
				if (r == null) return t;
				if (e.insertAt(t, r, n.insert[r]), e.scroll.query(r, V.INLINE) != null) {
					let [n] = e.descendant(U, t), r = Y(n);
					i = K.AttributeMap.diff(r, i) || {};
				}
			}
		}
		return Object.keys(i).forEach((n) => {
			e.formatAt(t, r, n, i[n]);
		}), t + r;
	}, t);
}
// node_modules/quill/formats/align.js
var cs = {
	scope: V.BLOCK,
	whitelist: [
		"right",
		"center",
		"justify"
	]
}, ls = new Da("align", "align", cs), us = new H("align", "ql-align", cs), ds = new Na("align", "text-align", cs), fs = class extends Na {
	value(e) {
		let t = super.value(e);
		return t.startsWith("rgb(") ? (t = t.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${t.split(",").map((e) => `00${parseInt(e, 10).toString(16)}`.slice(-2)).join("")}`) : t;
	}
}, ps = new H("color", "ql-color", { scope: V.INLINE }), ms = new fs("color", "color", { scope: V.INLINE }), hs = new H("background", "ql-bg", { scope: V.INLINE }), gs = new fs("background", "background-color", { scope: V.INLINE }), _s = class extends rs {
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("spellcheck", "false"), t;
	}
	code(e, t) {
		return this.children.map((e) => e.length() <= 1 ? "" : e.domNode.innerText).join("\n").slice(e, e + t);
	}
	html(e, t) {
		return `<pre>\n${lo(this.code(e, t))}\n</pre>`;
	}
}, Q = class extends q {
	static TAB = "  ";
	static register() {
		Z.register(_s);
	}
}, vs = class extends uo {};
vs.blotName = "code", vs.tagName = "CODE", Q.blotName = "code-block", Q.className = "ql-code-block", Q.tagName = "DIV", _s.blotName = "code-block-container", _s.className = "ql-code-block-container", _s.tagName = "DIV", _s.allowedChildren = [Q], Q.allowedChildren = [
	so,
	oo,
	mo
], Q.requiredContainer = _s;
// node_modules/quill/formats/direction.js
var ys = {
	scope: V.BLOCK,
	whitelist: ["rtl"]
}, bs = new Da("direction", "dir", ys), xs = new H("direction", "ql-direction", ys), Ss = new Na("direction", "direction", ys), Cs = {
	scope: V.INLINE,
	whitelist: ["serif", "monospace"]
}, ws = new H("font", "ql-font", Cs), Ts = new class extends Na {
	value(e) {
		return super.value(e).replace(/["']/g, "");
	}
}("font", "font-family", Cs), Es = new H("size", "ql-size", {
	scope: V.INLINE,
	whitelist: [
		"small",
		"large",
		"huge"
	]
}), Ds = new Na("size", "font-size", {
	scope: V.INLINE,
	whitelist: [
		"10px",
		"18px",
		"32px"
	]
}), Os = bo("quill:keyboard"), ks = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", As = class e extends Fo {
	static match(e, t) {
		return [
			"altKey",
			"ctrlKey",
			"metaKey",
			"shiftKey"
		].some((n) => !!t[n] !== e[n] && t[n] !== null) ? !1 : t.key === e.key || t.key === e.which;
	}
	constructor(e, t) {
		super(e, t), this.bindings = {}, Object.keys(this.options.bindings).forEach((e) => {
			this.options.bindings[e] && this.addBinding(this.options.bindings[e]);
		}), this.addBinding({
			key: "Enter",
			shiftKey: null
		}, this.handleEnter), this.addBinding({
			key: "Enter",
			metaKey: null,
			ctrlKey: null,
			altKey: null
		}, () => {}), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({ key: "Backspace" }, { collapsed: !0 }, this.handleBackspace), this.addBinding({ key: "Delete" }, { collapsed: !0 }, this.handleDelete)) : (this.addBinding({ key: "Backspace" }, {
			collapsed: !0,
			prefix: /^.?$/
		}, this.handleBackspace), this.addBinding({ key: "Delete" }, {
			collapsed: !0,
			suffix: /^.?$/
		}, this.handleDelete)), this.addBinding({ key: "Backspace" }, { collapsed: !1 }, this.handleDeleteRange), this.addBinding({ key: "Delete" }, { collapsed: !1 }, this.handleDeleteRange), this.addBinding({
			key: "Backspace",
			altKey: null,
			ctrlKey: null,
			metaKey: null,
			shiftKey: null
		}, {
			collapsed: !0,
			offset: 0
		}, this.handleBackspace), this.listen();
	}
	addBinding(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Fs(e);
		r == null ? Os.warn("Attempted to add invalid keyboard binding", r) : (typeof t == "function" && (t = { handler: t }), typeof n == "function" && (n = { handler: n }), (Array.isArray(r.key) ? r.key : [r.key]).forEach((e) => {
			let i = {
				...r,
				key: e,
				...t,
				...n
			};
			this.bindings[i.key] = this.bindings[i.key] || [], this.bindings[i.key].push(i);
		}));
	}
	listen() {
		this.quill.root.addEventListener("keydown", (t) => {
			if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace")) return;
			let n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((n) => e.match(t, n));
			if (n.length === 0) return;
			let r = Z.find(t.target, !0);
			if (r && r.scroll !== this.quill.scroll) return;
			let i = this.quill.getSelection();
			if (i == null || !this.quill.hasFocus()) return;
			let [a, o] = this.quill.getLine(i.index), [s, c] = this.quill.getLeaf(i.index), [l, u] = i.length === 0 ? [s, c] : this.quill.getLeaf(i.index + i.length), d = s instanceof $a ? s.value().slice(0, c) : "", f = l instanceof $a ? l.value().slice(u) : "", p = {
				collapsed: i.length === 0,
				empty: i.length === 0 && a.length() <= 1,
				format: this.quill.getFormat(i),
				line: a,
				offset: o,
				prefix: d,
				suffix: f,
				event: t
			};
			n.some((e) => {
				if (e.collapsed != null && e.collapsed !== p.collapsed || e.empty != null && e.empty !== p.empty || e.offset != null && e.offset !== p.offset) return !1;
				if (Array.isArray(e.format)) {
					if (e.format.every((e) => p.format[e] == null)) return !1;
				} else if (typeof e.format == "object" && !Object.keys(e.format).every((t) => e.format[t] === !0 ? p.format[t] != null : e.format[t] === !1 ? p.format[t] == null : wa(e.format[t], p.format[t]))) return !1;
				return e.prefix != null && !e.prefix.test(p.prefix) || e.suffix != null && !e.suffix.test(p.suffix) ? !1 : e.handler.call(this, i, p, e) !== !0;
			}) && t.preventDefault();
		});
	}
	handleBackspace(e, t) {
		let n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
		if (e.index === 0 || this.quill.getLength() <= 1) return;
		let r = {}, [i] = this.quill.getLine(e.index), a = new K.default().retain(e.index - n).delete(n);
		if (t.offset === 0) {
			let [t] = this.quill.getLine(e.index - 1);
			if (t && !(t.statics.blotName === "block" && t.length() <= 1)) {
				let t = i.formats(), n = this.quill.getFormat(e.index - 1, 1);
				if (r = K.AttributeMap.diff(t, n) || {}, Object.keys(r).length > 0) {
					let t = new K.default().retain(e.index + i.length() - 2).retain(1, r);
					a = a.compose(t);
				}
			}
		}
		this.quill.updateContents(a, Z.sources.USER), this.quill.focus();
	}
	handleDelete(e, t) {
		let n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
		if (e.index >= this.quill.getLength() - n) return;
		let r = {}, [i] = this.quill.getLine(e.index), a = new K.default().retain(e.index).delete(n);
		if (t.offset >= i.length() - 1) {
			let [t] = this.quill.getLine(e.index + 1);
			if (t) {
				let n = i.formats(), o = this.quill.getFormat(e.index, 1);
				r = K.AttributeMap.diff(n, o) || {}, Object.keys(r).length > 0 && (a = a.retain(t.length() - 1).retain(1, r));
			}
		}
		this.quill.updateContents(a, Z.sources.USER), this.quill.focus();
	}
	handleDeleteRange(e) {
		Is({
			range: e,
			quill: this.quill
		}), this.quill.focus();
	}
	handleEnter(e, t) {
		let n = Object.keys(t.format).reduce((e, n) => (this.quill.scroll.query(n, V.BLOCK) && !Array.isArray(t.format[n]) && (e[n] = t.format[n]), e), {}), r = new K.default().retain(e.index).delete(e.length).insert("\n", n);
		this.quill.updateContents(r, Z.sources.USER), this.quill.setSelection(e.index + 1, Z.sources.SILENT), this.quill.focus();
	}
};
As.DEFAULTS = { bindings: {
	bold: Ns("bold"),
	italic: Ns("italic"),
	underline: Ns("underline"),
	indent: {
		key: "Tab",
		format: [
			"blockquote",
			"indent",
			"list"
		],
		handler(e, t) {
			return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", Z.sources.USER), !1);
		}
	},
	outdent: {
		key: "Tab",
		shiftKey: !0,
		format: [
			"blockquote",
			"indent",
			"list"
		],
		handler(e, t) {
			return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", Z.sources.USER), !1);
		}
	},
	"outdent backspace": {
		key: "Backspace",
		collapsed: !0,
		shiftKey: null,
		metaKey: null,
		ctrlKey: null,
		altKey: null,
		format: ["indent", "list"],
		offset: 0,
		handler(e, t) {
			t.format.indent == null ? t.format.list != null && this.quill.format("list", !1, Z.sources.USER) : this.quill.format("indent", "-1", Z.sources.USER);
		}
	},
	"indent code-block": js(!0),
	"outdent code-block": js(!1),
	"remove tab": {
		key: "Tab",
		shiftKey: !0,
		collapsed: !0,
		prefix: /\t$/,
		handler(e) {
			this.quill.deleteText(e.index - 1, 1, Z.sources.USER);
		}
	},
	tab: {
		key: "Tab",
		handler(e, t) {
			if (t.format.table) return !0;
			this.quill.history.cutoff();
			let n = new K.default().retain(e.index).delete(e.length).insert("	");
			return this.quill.updateContents(n, Z.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index + 1, Z.sources.SILENT), !1;
		}
	},
	"blockquote empty enter": {
		key: "Enter",
		collapsed: !0,
		format: ["blockquote"],
		empty: !0,
		handler() {
			this.quill.format("blockquote", !1, Z.sources.USER);
		}
	},
	"list empty enter": {
		key: "Enter",
		collapsed: !0,
		format: ["list"],
		empty: !0,
		handler(e, t) {
			let n = { list: !1 };
			t.format.indent && (n.indent = !1), this.quill.formatLine(e.index, e.length, n, Z.sources.USER);
		}
	},
	"checklist enter": {
		key: "Enter",
		collapsed: !0,
		format: { list: "checked" },
		handler(e) {
			let [t, n] = this.quill.getLine(e.index), r = {
				...t.formats(),
				list: "checked"
			}, i = new K.default().retain(e.index).insert("\n", r).retain(t.length() - n - 1).retain(1, { list: "unchecked" });
			this.quill.updateContents(i, Z.sources.USER), this.quill.setSelection(e.index + 1, Z.sources.SILENT), this.quill.scrollSelectionIntoView();
		}
	},
	"header enter": {
		key: "Enter",
		collapsed: !0,
		format: ["header"],
		suffix: /^$/,
		handler(e, t) {
			let [n, r] = this.quill.getLine(e.index), i = new K.default().retain(e.index).insert("\n", t.format).retain(n.length() - r - 1).retain(1, { header: null });
			this.quill.updateContents(i, Z.sources.USER), this.quill.setSelection(e.index + 1, Z.sources.SILENT), this.quill.scrollSelectionIntoView();
		}
	},
	"table backspace": {
		key: "Backspace",
		format: ["table"],
		collapsed: !0,
		offset: 0,
		handler() {}
	},
	"table delete": {
		key: "Delete",
		format: ["table"],
		collapsed: !0,
		suffix: /^$/,
		handler() {}
	},
	"table enter": {
		key: "Enter",
		shiftKey: null,
		format: ["table"],
		handler(e) {
			let t = this.quill.getModule("table");
			if (t) {
				let [n, r, i, a] = t.getTable(e), o = Ls(n, r, i, a);
				if (o == null) return;
				let s = n.offset();
				if (o < 0) {
					let t = new K.default().retain(s).insert("\n");
					this.quill.updateContents(t, Z.sources.USER), this.quill.setSelection(e.index + 1, e.length, Z.sources.SILENT);
				} else if (o > 0) {
					s += n.length();
					let e = new K.default().retain(s).insert("\n");
					this.quill.updateContents(e, Z.sources.USER), this.quill.setSelection(s, Z.sources.USER);
				}
			}
		}
	},
	"table tab": {
		key: "Tab",
		shiftKey: null,
		format: ["table"],
		handler(e, t) {
			let { event: n, line: r } = t, i = r.offset(this.quill.scroll);
			n.shiftKey ? this.quill.setSelection(i - 1, Z.sources.USER) : this.quill.setSelection(i + r.length(), Z.sources.USER);
		}
	},
	"list autofill": {
		key: " ",
		shiftKey: null,
		collapsed: !0,
		format: {
			"code-block": !1,
			blockquote: !1,
			table: !1
		},
		prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
		handler(e, t) {
			if (this.quill.scroll.query("list") == null) return !0;
			let { length: n } = t.prefix, [r, i] = this.quill.getLine(e.index);
			if (i > n) return !0;
			let a;
			switch (t.prefix.trim()) {
				case "[]":
				case "[ ]":
					a = "unchecked";
					break;
				case "[x]":
					a = "checked";
					break;
				case "-":
				case "*":
					a = "bullet";
					break;
				default: a = "ordered";
			}
			this.quill.insertText(e.index, " ", Z.sources.USER), this.quill.history.cutoff();
			let o = new K.default().retain(e.index - i).delete(n + 1).retain(r.length() - 2 - i).retain(1, { list: a });
			return this.quill.updateContents(o, Z.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index - n, Z.sources.SILENT), !1;
		}
	},
	"code exit": {
		key: "Enter",
		collapsed: !0,
		format: ["code-block"],
		prefix: /^$/,
		suffix: /^\s*$/,
		handler(e) {
			let [t, n] = this.quill.getLine(e.index), r = 2, i = t;
			for (; i != null && i.length() <= 1 && i.formats()["code-block"];) if (i = i.prev, --r, r <= 0) {
				let r = new K.default().retain(e.index + t.length() - n - 2).retain(1, { "code-block": null }).delete(1);
				return this.quill.updateContents(r, Z.sources.USER), this.quill.setSelection(e.index - 1, Z.sources.SILENT), !1;
			}
			return !0;
		}
	},
	"embed left": Ms("ArrowLeft", !1),
	"embed left shift": Ms("ArrowLeft", !0),
	"embed right": Ms("ArrowRight", !1),
	"embed right shift": Ms("ArrowRight", !0),
	"table down": Ps(!1),
	"table up": Ps(!0)
} };
function js(e) {
	return {
		key: "Tab",
		shiftKey: !e,
		format: { "code-block": !0 },
		handler(t, n) {
			let { event: r } = n, { TAB: i } = this.quill.scroll.query("code-block");
			if (t.length === 0 && !r.shiftKey) {
				this.quill.insertText(t.index, i, Z.sources.USER), this.quill.setSelection(t.index + i.length, Z.sources.SILENT);
				return;
			}
			let a = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t), { index: o, length: s } = t;
			a.forEach((t, n) => {
				e ? (t.insertAt(0, i), n === 0 ? o += i.length : s += i.length) : t.domNode.textContent.startsWith(i) && (t.deleteAt(0, i.length), n === 0 ? o -= i.length : s -= i.length);
			}), this.quill.update(Z.sources.USER), this.quill.setSelection(o, s, Z.sources.SILENT);
		}
	};
}
function Ms(e, t) {
	return {
		key: e,
		shiftKey: t,
		altKey: null,
		[e === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
		handler(n) {
			let { index: r } = n;
			e === "ArrowRight" && (r += n.length + 1);
			let [i] = this.quill.getLeaf(r);
			return i instanceof G ? (e === "ArrowLeft" ? t ? this.quill.setSelection(n.index - 1, n.length + 1, Z.sources.USER) : this.quill.setSelection(n.index - 1, Z.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, Z.sources.USER) : this.quill.setSelection(n.index + n.length + 1, Z.sources.USER), !1) : !0;
		}
	};
}
function Ns(e) {
	return {
		key: e[0],
		shortKey: !0,
		handler(t, n) {
			this.quill.format(e, !n.format[e], Z.sources.USER);
		}
	};
}
function Ps(e) {
	return {
		key: e ? "ArrowUp" : "ArrowDown",
		collapsed: !0,
		format: ["table"],
		handler(t, n) {
			let r = e ? "prev" : "next", i = n.line, a = i.parent[r];
			if (a != null) {
				if (a.statics.blotName === "table-row") {
					let e = a.children.head, t = i;
					for (; t.prev != null;) t = t.prev, e = e.next;
					let r = e.offset(this.quill.scroll) + Math.min(n.offset, e.length() - 1);
					this.quill.setSelection(r, 0, Z.sources.USER);
				}
			} else {
				let t = i.table()[r];
				t != null && (e ? this.quill.setSelection(t.offset(this.quill.scroll) + t.length() - 1, 0, Z.sources.USER) : this.quill.setSelection(t.offset(this.quill.scroll), 0, Z.sources.USER));
			}
			return !1;
		}
	};
}
function Fs(e) {
	if (typeof e == "string" || typeof e == "number") e = { key: e };
	else if (typeof e == "object") e = Mi(e);
	else return null;
	return e.shortKey && (e[ks] = e.shortKey, delete e.shortKey), e;
}
function Is(e) {
	let { quill: t, range: n } = e, r = t.getLines(n), i = {};
	if (r.length > 1) {
		let e = r[0].formats(), t = r[r.length - 1].formats();
		i = K.AttributeMap.diff(t, e) || {};
	}
	t.deleteText(n, Z.sources.USER), Object.keys(i).length > 0 && t.formatLine(n.index, 1, i, Z.sources.USER), t.setSelection(n.index, Z.sources.SILENT);
}
function Ls(e, t, n, r) {
	return t.prev == null && t.next == null ? n.prev == null && n.next == null ? r === 0 ? -1 : 1 : n.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
// node_modules/quill/modules/normalizeExternalHTML/normalizers/googleDocs.js
var Rs = /font-weight:\s*normal/, zs = [
	"P",
	"OL",
	"UL"
], Bs = (e) => e && zs.includes(e.tagName), Vs = (e) => {
	Array.from(e.querySelectorAll("br")).filter((e) => Bs(e.previousElementSibling) && Bs(e.nextElementSibling)).forEach((e) => {
		e.parentNode?.removeChild(e);
	});
}, Hs = (e) => {
	Array.from(e.querySelectorAll("b[style*=\"font-weight\"]")).filter((e) => e.getAttribute("style")?.match(Rs)).forEach((t) => {
		let n = e.createDocumentFragment();
		n.append(...t.childNodes), t.parentNode?.replaceChild(n, t);
	});
};
function Us(e) {
	e.querySelector("[id^=\"docs-internal-guid-\"]") && (Hs(e), Vs(e));
}
// node_modules/quill/modules/normalizeExternalHTML/normalizers/msWord.js
var Ws = /\bmso-list:[^;]*ignore/i, Gs = /\bmso-list:[^;]*\bl(\d+)/i, Ks = /\bmso-list:[^;]*\blevel(\d+)/i, qs = (e, t) => {
	let n = e.getAttribute("style"), r = n?.match(Gs);
	if (!r) return null;
	let i = Number(r[1]), a = n?.match(Ks), o = a ? Number(a[1]) : 1, s = RegExp(`@list l${i}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(s);
	return {
		id: i,
		indent: o,
		type: c && c[1] === "bullet" ? "bullet" : "ordered",
		element: e
	};
}, Js = (e) => {
	let t = Array.from(e.querySelectorAll("[style*=mso-list]")), n = [], r = [];
	t.forEach((e) => {
		(e.getAttribute("style") || "").match(Ws) ? n.push(e) : r.push(e);
	}), n.forEach((e) => e.parentNode?.removeChild(e));
	let i = e.documentElement.innerHTML, a = r.map((e) => qs(e, i)).filter((e) => e);
	for (; a.length;) {
		let e = [], t = a.shift();
		for (; t;) e.push(t), t = a.length && a[0]?.element === t.element.nextElementSibling && a[0].id === t.id ? a.shift() : null;
		let n = document.createElement("ul");
		e.forEach((e) => {
			let t = document.createElement("li");
			t.setAttribute("data-list", e.type), e.indent > 1 && t.setAttribute("class", `ql-indent-${e.indent - 1}`), t.innerHTML = e.element.innerHTML, n.appendChild(t);
		});
		let r = e[0]?.element, { parentNode: i } = r ?? {};
		r && i?.replaceChild(n, r), e.slice(1).forEach((e) => {
			let { element: t } = e;
			i?.removeChild(t);
		});
	}
};
function Ys(e) {
	e.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Js(e);
}
// node_modules/quill/modules/normalizeExternalHTML/index.js
var Xs = [Ys, Us], Zs = (e) => {
	e.documentElement && Xs.forEach((t) => {
		t(e);
	});
}, Qs = bo("quill:clipboard"), $s = [
	[Node.TEXT_NODE, xc],
	[Node.TEXT_NODE, vc],
	["br", pc],
	[Node.ELEMENT_NODE, vc],
	[Node.ELEMENT_NODE, fc],
	[Node.ELEMENT_NODE, dc],
	[Node.ELEMENT_NODE, yc],
	["li", gc],
	["ol, ul", _c],
	["pre", mc],
	["tr", bc],
	["b", uc("bold")],
	["i", uc("italic")],
	["strike", uc("strike")],
	["style", hc]
], ec = [ls, bs].reduce((e, t) => (e[t.keyName] = t, e), {}), tc = [
	ds,
	gs,
	ms,
	Ss,
	Ts,
	Ds
].reduce((e, t) => (e[t.keyName] = t, e), {}), nc = class extends Fo {
	static DEFAULTS = { matchers: [] };
	constructor(e, t) {
		super(e, t), this.quill.root.addEventListener("copy", (e) => this.onCaptureCopy(e, !1)), this.quill.root.addEventListener("cut", (e) => this.onCaptureCopy(e, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], $s.concat(this.options.matchers ?? []).forEach((e) => {
			let [t, n] = e;
			this.addMatcher(t, n);
		});
	}
	addMatcher(e, t) {
		this.matchers.push([e, t]);
	}
	convert(e) {
		let { html: t, text: n } = e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (r[Q.blotName]) return new K.default().insert(n || "", { [Q.blotName]: r[Q.blotName] });
		if (!t) return new K.default().insert(n || "", r);
		let i = this.convertHTML(t);
		return ic(i, "\n") && (i.ops[i.ops.length - 1].attributes == null || r.table) ? i.compose(new K.default().retain(i.length() - 1).delete(1)) : i;
	}
	normalizeHTML(e) {
		Zs(e);
	}
	convertHTML(e) {
		let t = new DOMParser().parseFromString(e, "text/html");
		this.normalizeHTML(t);
		let n = t.body, r = /* @__PURE__ */ new WeakMap(), [i, a] = this.prepareMatching(n, r);
		return lc(this.quill.scroll, n, i, a, r);
	}
	dangerouslyPasteHTML(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Z.sources.API;
		if (typeof e == "string") {
			let n = this.convert({
				html: e,
				text: ""
			});
			this.quill.setContents(n, t), this.quill.setSelection(0, Z.sources.SILENT);
		} else {
			let r = this.convert({
				html: t,
				text: ""
			});
			this.quill.updateContents(new K.default().retain(e).concat(r), n), this.quill.setSelection(e + r.length(), Z.sources.SILENT);
		}
	}
	onCaptureCopy(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (e.defaultPrevented) return;
		e.preventDefault();
		let [n] = this.quill.selection.getRange();
		if (n == null) return;
		let { html: r, text: i } = this.onCopy(n, t);
		e.clipboardData?.setData("text/plain", i), e.clipboardData?.setData("text/html", r), t && Is({
			range: n,
			quill: this.quill
		});
	}
	normalizeURIList(e) {
		return e.split(/\r?\n/).filter((e) => e[0] !== "#").join("\n");
	}
	onCapturePaste(e) {
		if (e.defaultPrevented || !this.quill.isEnabled()) return;
		e.preventDefault();
		let t = this.quill.getSelection(!0);
		if (t == null) return;
		let n = e.clipboardData?.getData("text/html"), r = e.clipboardData?.getData("text/plain");
		if (!n && !r) {
			let t = e.clipboardData?.getData("text/uri-list");
			t && (r = this.normalizeURIList(t));
		}
		let i = Array.from(e.clipboardData?.files || []);
		if (!n && i.length > 0) this.quill.uploader.upload(t, i);
		else {
			if (n && i.length > 0) {
				let e = new DOMParser().parseFromString(n, "text/html");
				if (e.body.childElementCount === 1 && e.body.firstElementChild?.tagName === "IMG") {
					this.quill.uploader.upload(t, i);
					return;
				}
			}
			this.onPaste(t, {
				html: n,
				text: r
			});
		}
	}
	onCopy(e) {
		let t = this.quill.getText(e);
		return {
			html: this.quill.getSemanticHTML(e),
			text: t
		};
	}
	onPaste(e, t) {
		let { text: n, html: r } = t, i = this.quill.getFormat(e.index), a = this.convert({
			text: n,
			html: r
		}, i);
		Qs.log("onPaste", a, {
			text: n,
			html: r
		});
		let o = new K.default().retain(e.index).delete(e.length).concat(a);
		this.quill.updateContents(o, Z.sources.USER), this.quill.setSelection(o.length() - e.length, Z.sources.SILENT), this.quill.scrollSelectionIntoView();
	}
	prepareMatching(e, t) {
		let n = [], r = [];
		return this.matchers.forEach((i) => {
			let [a, o] = i;
			switch (a) {
				case Node.TEXT_NODE:
					r.push(o);
					break;
				case Node.ELEMENT_NODE:
					n.push(o);
					break;
				default: Array.from(e.querySelectorAll(a)).forEach((e) => {
					t.has(e) ? t.get(e)?.push(o) : t.set(e, [o]);
				});
			}
		}), [n, r];
	}
};
function rc(e, t, n, r) {
	return r.query(t) ? e.reduce((e, r) => {
		if (!r.insert) return e;
		if (r.attributes && r.attributes[t]) return e.push(r);
		let i = n ? { [t]: n } : {};
		return e.insert(r.insert, {
			...i,
			...r.attributes
		});
	}, new K.default()) : e;
}
function ic(e, t) {
	let n = "";
	for (let r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
		let t = e.ops[r];
		if (typeof t.insert != "string") break;
		n = t.insert + n;
	}
	return n.slice(-1 * t.length) === t;
}
function ac(e, t) {
	if (!(e instanceof Element)) return !1;
	let n = t.query(e);
	return n && n.prototype instanceof G ? !1 : (/* @__PURE__ */ "address.article.blockquote.canvas.dd.div.dl.dt.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.iframe.li.main.nav.ol.output.p.pre.section.table.td.tr.ul.video".split(".")).includes(e.tagName.toLowerCase());
}
function oc(e, t) {
	return e.previousElementSibling && e.nextElementSibling && !ac(e.previousElementSibling, t) && !ac(e.nextElementSibling, t);
}
var sc = /* @__PURE__ */ new WeakMap();
function cc(e) {
	return e != null && (sc.has(e) || (e.tagName === "PRE" ? sc.set(e, !0) : sc.set(e, cc(e.parentNode))), sc.get(e));
}
function lc(e, t, n, r, i) {
	return t.nodeType === t.TEXT_NODE ? r.reduce((n, r) => r(t, n, e), new K.default()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((a, o) => {
		let s = lc(e, o, n, r, i);
		return o.nodeType === t.ELEMENT_NODE && (s = n.reduce((t, n) => n(o, t, e), s), s = (i.get(o) || []).reduce((t, n) => n(o, t, e), s)), a.concat(s);
	}, new K.default()) : new K.default();
}
function uc(e) {
	return (t, n, r) => rc(n, e, !0, r);
}
function dc(e, t, n) {
	let r = Da.keys(e), i = H.keys(e), a = Na.keys(e), o = {};
	return r.concat(i).concat(a).forEach((t) => {
		let r = n.query(t, V.ATTRIBUTE);
		r != null && (o[r.attrName] = r.value(e), o[r.attrName]) || (r = ec[t], r != null && (r.attrName === t || r.keyName === t) && (o[r.attrName] = r.value(e) || void 0), r = tc[t], r != null && (r.attrName === t || r.keyName === t) && (r = tc[t], o[r.attrName] = r.value(e) || void 0));
	}), Object.entries(o).reduce((e, t) => {
		let [r, i] = t;
		return rc(e, r, i, n);
	}, t);
}
function fc(e, t, n) {
	let r = n.query(e);
	if (r == null) return t;
	if (r.prototype instanceof G) {
		let t = {}, i = r.value(e);
		if (i != null) return t[r.blotName] = i, new K.default().insert(t, r.formats(e, n));
	} else if (r.prototype instanceof Ga && !ic(t, "\n") && t.insert("\n"), "blotName" in r && "formats" in r && typeof r.formats == "function") return rc(t, r.blotName, r.formats(e, n), n);
	return t;
}
function pc(e, t) {
	return ic(t, "\n") || t.insert("\n"), t;
}
function mc(e, t, n) {
	let r = n.query("code-block");
	return rc(t, "code-block", r && "formats" in r && typeof r.formats == "function" ? r.formats(e, n) : !0, n);
}
function hc() {
	return new K.default();
}
function gc(e, t, n) {
	let r = n.query(e);
	if (r == null || r.blotName !== "list" || !ic(t, "\n")) return t;
	let i = -1, a = e.parentNode;
	for (; a != null;) ["OL", "UL"].includes(a.tagName) && (i += 1), a = a.parentNode;
	return i <= 0 ? t : t.reduce((e, t) => t.insert ? t.attributes && typeof t.attributes.indent == "number" ? e.push(t) : e.insert(t.insert, {
		indent: i,
		...t.attributes || {}
	}) : e, new K.default());
}
function _c(e, t, n) {
	let r = e, i = r.tagName === "OL" ? "ordered" : "bullet", a = r.getAttribute("data-checked");
	return a && (i = a === "true" ? "checked" : "unchecked"), rc(t, "list", i, n);
}
function vc(e, t, n) {
	if (!ic(t, "\n")) {
		if (ac(e, n) && (e.childNodes.length > 0 || e instanceof HTMLParagraphElement)) return t.insert("\n");
		if (t.length() > 0 && e.nextSibling) {
			let r = e.nextSibling;
			for (; r != null;) {
				if (ac(r, n)) return t.insert("\n");
				let e = n.query(r);
				if (e && e.prototype instanceof J) return t.insert("\n");
				r = r.firstChild;
			}
		}
	}
	return t;
}
function yc(e, t, n) {
	let r = {}, i = e.style || {};
	return i.fontStyle === "italic" && (r.italic = !0), i.textDecoration === "underline" && (r.underline = !0), i.textDecoration === "line-through" && (r.strike = !0), (i.fontWeight?.startsWith("bold") || parseInt(i.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((e, t) => {
		let [r, i] = t;
		return rc(e, r, i, n);
	}, t), parseFloat(i.textIndent || 0) > 0 ? new K.default().insert("	").concat(t) : t;
}
function bc(e, t, n) {
	let r = e.parentElement?.tagName === "TABLE" ? e.parentElement : e.parentElement?.parentElement;
	return r == null ? t : rc(t, "table", Array.from(r.querySelectorAll("tr")).indexOf(e) + 1, n);
}
function xc(e, t, n) {
	let r = e.data;
	if (e.parentElement?.tagName === "O:P") return t.insert(r.trim());
	if (!cc(e)) {
		if (r.trim().length === 0 && r.includes("\n") && !oc(e, n)) return t;
		r = r.replace(/[^\S\u00a0]/g, " "), r = r.replace(/ {2,}/g, " "), (e.previousSibling == null && e.parentElement != null && ac(e.parentElement, n) || e.previousSibling instanceof Element && ac(e.previousSibling, n)) && (r = r.replace(/^ /, "")), (e.nextSibling == null && e.parentElement != null && ac(e.parentElement, n) || e.nextSibling instanceof Element && ac(e.nextSibling, n)) && (r = r.replace(/ $/, "")), r = r.replaceAll("\xA0", " ");
	}
	return t.insert(r);
}
// node_modules/quill/modules/history.js
var Sc = class extends Fo {
	static DEFAULTS = {
		delay: 1e3,
		maxStack: 100,
		userOnly: !1
	};
	lastRecorded = 0;
	ignoreChange = !1;
	stack = {
		undo: [],
		redo: []
	};
	currentRange = null;
	constructor(e, t) {
		super(e, t), this.quill.on(Z.events.EDITOR_CHANGE, (e, t, n, r) => {
			e === Z.events.SELECTION_CHANGE ? t && r !== Z.sources.SILENT && (this.currentRange = t) : e === Z.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || r === Z.sources.USER ? this.record(t, n) : this.transform(t)), this.currentRange = Ec(this.currentRange, t));
		}), this.quill.keyboard.addBinding({
			key: "z",
			shortKey: !0
		}, this.undo.bind(this)), this.quill.keyboard.addBinding({
			key: ["z", "Z"],
			shortKey: !0,
			shiftKey: !0
		}, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
			key: "y",
			shortKey: !0
		}, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (e) => {
			e.inputType === "historyUndo" ? (this.undo(), e.preventDefault()) : e.inputType === "historyRedo" && (this.redo(), e.preventDefault());
		});
	}
	change(e, t) {
		if (this.stack[e].length === 0) return;
		let n = this.stack[e].pop();
		if (!n) return;
		let r = this.quill.getContents(), i = n.delta.invert(r);
		this.stack[t].push({
			delta: i,
			range: Ec(n.range, i)
		}), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, Z.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
	}
	clear() {
		this.stack = {
			undo: [],
			redo: []
		};
	}
	cutoff() {
		this.lastRecorded = 0;
	}
	record(e, t) {
		if (e.ops.length === 0) return;
		this.stack.redo = [];
		let n = e.invert(t), r = this.currentRange, i = Date.now();
		if (this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0) {
			let e = this.stack.undo.pop();
			e && (n = n.compose(e.delta), r = e.range);
		} else this.lastRecorded = i;
		n.length() !== 0 && (this.stack.undo.push({
			delta: n,
			range: r
		}), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
	}
	redo() {
		this.change("redo", "undo");
	}
	transform(e) {
		Cc(this.stack.undo, e), Cc(this.stack.redo, e);
	}
	undo() {
		this.change("undo", "redo");
	}
	restoreSelection(e) {
		if (e.range) this.quill.setSelection(e.range, Z.sources.USER);
		else {
			let t = Tc(this.quill.scroll, e.delta);
			this.quill.setSelection(t, Z.sources.USER);
		}
	}
};
function Cc(e, t) {
	let n = t;
	for (let t = e.length - 1; t >= 0; --t) {
		let r = e[t];
		e[t] = {
			delta: n.transform(r.delta, !0),
			range: r.range && Ec(r.range, n)
		}, n = r.delta.transform(n), e[t].delta.length() === 0 && e.splice(t, 1);
	}
}
function wc(e, t) {
	let n = t.ops[t.ops.length - 1];
	return n == null ? !1 : n.insert == null ? n.attributes != null && Object.keys(n.attributes).some((t) => e.query(t, V.BLOCK) != null) : typeof n.insert == "string" && n.insert.endsWith("\n");
}
function Tc(e, t) {
	let n = t.reduce((e, t) => e + (t.delete || 0), 0), r = t.length() - n;
	return wc(e, t) && --r, r;
}
function Ec(e, t) {
	if (!e) return e;
	let n = t.transformPosition(e.index);
	return {
		index: n,
		length: t.transformPosition(e.index + e.length) - n
	};
}
// node_modules/quill/modules/uploader.js
var Dc = class extends Fo {
	constructor(e, t) {
		super(e, t), e.root.addEventListener("drop", (t) => {
			t.preventDefault();
			let n = null;
			if (document.caretRangeFromPoint) n = document.caretRangeFromPoint(t.clientX, t.clientY);
			else if (document.caretPositionFromPoint) {
				let e = document.caretPositionFromPoint(t.clientX, t.clientY);
				n = document.createRange(), n.setStart(e.offsetNode, e.offset), n.setEnd(e.offsetNode, e.offset);
			}
			let r = n && e.selection.normalizeNative(n);
			if (r) {
				let n = e.selection.normalizedToRange(r);
				t.dataTransfer?.files && this.upload(n, t.dataTransfer.files);
			}
		});
	}
	upload(e, t) {
		let n = [];
		Array.from(t).forEach((e) => {
			e && this.options.mimetypes?.includes(e.type) && n.push(e);
		}), n.length > 0 && this.options.handler.call(this, e, n);
	}
};
Dc.DEFAULTS = {
	mimetypes: ["image/png", "image/jpeg"],
	handler(e, t) {
		if (!this.quill.scroll.query("image")) return;
		let n = t.map((e) => new Promise((t) => {
			let n = new FileReader();
			n.onload = () => {
				t(n.result);
			}, n.readAsDataURL(e);
		}));
		Promise.all(n).then((t) => {
			let n = t.reduce((e, t) => e.insert({ image: t }), new K.default().retain(e.index).delete(e.length));
			this.quill.updateContents(n, X.sources.USER), this.quill.setSelection(e.index + t.length, X.sources.SILENT);
		});
	}
};
// node_modules/quill/modules/input.js
var Oc = ["insertText", "insertReplacementText"], kc = class extends Fo {
	constructor(e, t) {
		super(e, t), e.root.addEventListener("beforeinput", (e) => {
			this.handleBeforeInput(e);
		}), /Android/i.test(navigator.userAgent) || e.on(Z.events.COMPOSITION_BEFORE_START, () => {
			this.handleCompositionStart();
		});
	}
	deleteRange(e) {
		Is({
			range: e,
			quill: this.quill
		});
	}
	replaceText(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		if (e.length === 0) return !1;
		if (t) {
			let n = this.quill.getFormat(e.index, 1);
			this.deleteRange(e), this.quill.updateContents(new K.default().retain(e.index).insert(t, n), Z.sources.USER);
		} else this.deleteRange(e);
		return this.quill.setSelection(e.index + t.length, 0, Z.sources.SILENT), !0;
	}
	handleBeforeInput(e) {
		if (this.quill.composition.isComposing || e.defaultPrevented || !Oc.includes(e.inputType)) return;
		let t = e.getTargetRanges ? e.getTargetRanges()[0] : null;
		if (!t || t.collapsed === !0) return;
		let n = Ac(e);
		if (n == null) return;
		let r = this.quill.selection.normalizeNative(t), i = r ? this.quill.selection.normalizedToRange(r) : null;
		i && this.replaceText(i, n) && e.preventDefault();
	}
	handleCompositionStart() {
		let e = this.quill.getSelection();
		e && this.replaceText(e);
	}
};
function Ac(e) {
	return typeof e.data == "string" ? e.data : e.dataTransfer?.types.includes("text/plain") ? e.dataTransfer.getData("text/plain") : null;
}
// node_modules/quill/modules/uiNode.js
var jc = /Mac/i.test(navigator.platform), Mc = (e) => !!(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Home" || jc && e.key === "a" && e.ctrlKey === !0), Nc = class extends Fo {
	isListening = !1;
	selectionChangeDeadline = 0;
	constructor(e, t) {
		super(e, t), this.handleArrowKeys(), this.handleNavigationShortcuts();
	}
	handleArrowKeys() {
		this.quill.keyboard.addBinding({
			key: ["ArrowLeft", "ArrowRight"],
			offset: 0,
			shiftKey: null,
			handler(e, t) {
				let { line: n, event: r } = t;
				if (!(n instanceof W) || !n.uiNode) return !0;
				let i = getComputedStyle(n.domNode).direction === "rtl";
				return i && r.key !== "ArrowRight" || !i && r.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + +!!r.shiftKey, Z.sources.USER), !1);
			}
		});
	}
	handleNavigationShortcuts() {
		this.quill.root.addEventListener("keydown", (e) => {
			!e.defaultPrevented && Mc(e) && this.ensureListeningToSelectionChange();
		});
	}
	ensureListeningToSelectionChange() {
		this.selectionChangeDeadline = Date.now() + 100, this.isListening || (this.isListening = !0, document.addEventListener("selectionchange", () => {
			this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
		}, { once: !0 }));
	}
	handleSelectionChange() {
		let e = document.getSelection();
		if (!e) return;
		let t = e.getRangeAt(0);
		if (t.collapsed !== !0 || t.startOffset !== 0) return;
		let n = this.quill.scroll.find(t.startContainer);
		if (!(n instanceof W) || !n.uiNode) return;
		let r = document.createRange();
		r.setStartAfter(n.uiNode), r.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(r);
	}
};
// node_modules/quill/core.js
Z.register({
	"blots/block": q,
	"blots/block/embed": J,
	"blots/break": oo,
	"blots/container": rs,
	"blots/cursor": mo,
	"blots/embed": Lo,
	"blots/inline": uo,
	"blots/scroll": os,
	"blots/text": so,
	"modules/clipboard": nc,
	"modules/history": Sc,
	"modules/keyboard": As,
	"modules/uploader": Dc,
	"modules/input": kc,
	"modules/uiNode": Nc
});
var Pc = Z, Fc = new class extends H {
	add(e, t) {
		let n = 0;
		if (t === "+1" || t === "-1") {
			let r = this.value(e) || 0;
			n = t === "+1" ? r + 1 : r - 1;
		} else typeof t == "number" && (n = t);
		return n === 0 ? (this.remove(e), !0) : super.add(e, n.toString());
	}
	canAdd(e, t) {
		return super.canAdd(e, t) || super.canAdd(e, parseInt(t, 10));
	}
	value(e) {
		return parseInt(super.value(e), 10) || void 0;
	}
}("indent", "ql-indent", {
	scope: V.BLOCK,
	whitelist: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	]
}), Ic = class extends q {
	static blotName = "blockquote";
	static tagName = "blockquote";
}, Lc = class extends q {
	static blotName = "header";
	static tagName = [
		"H1",
		"H2",
		"H3",
		"H4",
		"H5",
		"H6"
	];
	static formats(e) {
		return this.tagName.indexOf(e.tagName) + 1;
	}
}, Rc = class extends rs {};
Rc.blotName = "list-container", Rc.tagName = "OL";
var zc = class extends q {
	static create(e) {
		let t = super.create();
		return t.setAttribute("data-list", e), t;
	}
	static formats(e) {
		return e.getAttribute("data-list") || void 0;
	}
	static register() {
		Z.register(Rc);
	}
	constructor(e, t) {
		super(e, t);
		let n = t.ownerDocument.createElement("span"), r = (n) => {
			if (!e.isEnabled()) return;
			let r = this.statics.formats(t, e);
			r === "checked" ? (this.format("list", "unchecked"), n.preventDefault()) : r === "unchecked" && (this.format("list", "checked"), n.preventDefault());
		};
		n.addEventListener("mousedown", r), n.addEventListener("touchstart", r), this.attachUI(n);
	}
	format(e, t) {
		e === this.statics.blotName && t ? this.domNode.setAttribute("data-list", t) : super.format(e, t);
	}
};
zc.blotName = "list", zc.tagName = "LI", Rc.allowedChildren = [zc], zc.requiredContainer = Rc;
// node_modules/quill/formats/bold.js
var Bc = class extends uo {
	static blotName = "bold";
	static tagName = ["STRONG", "B"];
	static create() {
		return super.create();
	}
	static formats() {
		return !0;
	}
	optimize(e) {
		super.optimize(e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
	}
}, Vc = class extends Bc {
	static blotName = "italic";
	static tagName = ["EM", "I"];
}, Hc = class extends uo {
	static blotName = "link";
	static tagName = "A";
	static SANITIZED_URL = "about:blank";
	static PROTOCOL_WHITELIST = [
		"http",
		"https",
		"mailto",
		"tel",
		"sms"
	];
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("href", this.sanitize(e)), t.setAttribute("rel", "noopener noreferrer"), t.setAttribute("target", "_blank"), t;
	}
	static formats(e) {
		return e.getAttribute("href");
	}
	static sanitize(e) {
		return Uc(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL;
	}
	format(e, t) {
		e !== this.statics.blotName || !t ? super.format(e, t) : this.domNode.setAttribute("href", this.constructor.sanitize(t));
	}
};
function Uc(e, t) {
	let n = document.createElement("a");
	n.href = e;
	let r = n.href.slice(0, n.href.indexOf(":"));
	return t.indexOf(r) > -1;
}
// node_modules/quill/formats/script.js
var Wc = class extends uo {
	static blotName = "script";
	static tagName = ["SUB", "SUP"];
	static create(e) {
		return e === "super" ? document.createElement("sup") : e === "sub" ? document.createElement("sub") : super.create(e);
	}
	static formats(e) {
		if (e.tagName === "SUB") return "sub";
		if (e.tagName === "SUP") return "super";
	}
}, Gc = class extends Bc {
	static blotName = "strike";
	static tagName = ["S", "STRIKE"];
}, Kc = class extends uo {
	static blotName = "underline";
	static tagName = "U";
}, qc = class extends Lo {
	static blotName = "formula";
	static className = "ql-formula";
	static tagName = "SPAN";
	static create(e) {
		if (window.katex == null) throw Error("Formula module requires KaTeX.");
		let t = super.create(e);
		return typeof e == "string" && (window.katex.render(e, t, {
			throwOnError: !1,
			errorColor: "#f00"
		}), t.setAttribute("data-value", e)), t;
	}
	static value(e) {
		return e.getAttribute("data-value");
	}
	html() {
		let { formula: e } = this.value();
		return `<span>${e}</span>`;
	}
}, Jc = [
	"alt",
	"height",
	"width"
], Yc = class extends G {
	static blotName = "image";
	static tagName = "IMG";
	static create(e) {
		let t = super.create(e);
		return typeof e == "string" && t.setAttribute("src", this.sanitize(e)), t;
	}
	static formats(e) {
		return Jc.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
	}
	static match(e) {
		return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e);
	}
	static sanitize(e) {
		return Uc(e, [
			"http",
			"https",
			"data"
		]) ? e : "//:0";
	}
	static value(e) {
		return e.getAttribute("src");
	}
	format(e, t) {
		Jc.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
	}
}, Xc = ["height", "width"], Zc = class extends J {
	static blotName = "video";
	static className = "ql-video";
	static tagName = "IFRAME";
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "true"), t.setAttribute("src", this.sanitize(e)), t;
	}
	static formats(e) {
		return Xc.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
	}
	static sanitize(e) {
		return Hc.sanitize(e);
	}
	static value(e) {
		return e.getAttribute("src");
	}
	format(e, t) {
		Xc.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
	}
	html() {
		let { video: e } = this.value();
		return `<a href="${e}">${e}</a>`;
	}
}, Qc = new H("code-token", "hljs", { scope: V.INLINE }), $c = class e extends uo {
	static formats(e, t) {
		for (; e != null && e !== t.domNode;) {
			if (e.classList && e.classList.contains(Q.className)) return super.formats(e, t);
			e = e.parentNode;
		}
	}
	constructor(e, t, n) {
		super(e, t, n), Qc.add(this.domNode, n);
	}
	format(t, n) {
		t === e.blotName ? n ? Qc.add(this.domNode, n) : (Qc.remove(this.domNode), this.domNode.classList.remove(this.statics.className)) : super.format(t, n);
	}
	optimize() {
		super.optimize(...arguments), Qc.value(this.domNode) || this.unwrap();
	}
};
$c.blotName = "code-token", $c.className = "ql-token";
var $ = class extends Q {
	static create(e) {
		let t = super.create(e);
		return typeof e == "string" && t.setAttribute("data-language", e), t;
	}
	static formats(e) {
		return e.getAttribute("data-language") || "plain";
	}
	static register() {}
	format(e, t) {
		e === this.statics.blotName && t ? this.domNode.setAttribute("data-language", t) : super.format(e, t);
	}
	replaceWith(e, t) {
		return this.formatAt(0, this.length(), $c.blotName, !1), super.replaceWith(e, t);
	}
}, el = class extends _s {
	attach() {
		super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
	}
	format(e, t) {
		e === $.blotName && (this.forceNext = !0, this.children.forEach((n) => {
			n.format(e, t);
		}));
	}
	formatAt(e, t, n, r) {
		n === $.blotName && (this.forceNext = !0), super.formatAt(e, t, n, r);
	}
	highlight(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (this.children.head == null) return;
		let n = `${Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).map((e) => e.textContent).join("\n")}\n`, r = $.formats(this.children.head.domNode);
		if (t || this.forceNext || this.cachedText !== n) {
			if (n.trim().length > 0 || this.cachedText == null) {
				let t = this.children.reduce((e, t) => e.concat(po(t, !1)), new K.default()), i = e(n, r);
				t.diff(i).reduce((e, t) => {
					let { retain: n, attributes: r } = t;
					return n ? (r && Object.keys(r).forEach((t) => {
						[$.blotName, $c.blotName].includes(t) && this.formatAt(e, n, t, r[t]);
					}), e + n) : e;
				}, 0);
			}
			this.cachedText = n, this.forceNext = !1;
		}
	}
	html(e, t) {
		let [n] = this.children.find(e);
		return `<pre data-language="${n ? $.formats(n.domNode) : "plain"}">\n${lo(this.code(e, t))}\n</pre>`;
	}
	optimize(e) {
		if (super.optimize(e), this.parent != null && this.children.head != null && this.uiNode != null) {
			let e = $.formats(this.children.head.domNode);
			e !== this.uiNode.value && (this.uiNode.value = e);
		}
	}
};
el.allowedChildren = [$], $.requiredContainer = el, $.allowedChildren = [
	$c,
	mo,
	so,
	oo
];
var tl = (e, t, n) => {
	if (typeof e.versionString == "string") {
		let r = e.versionString.split(".")[0];
		if (parseInt(r, 10) >= 11) return e.highlight(n, { language: t }).value;
	}
	return e.highlight(t, n).value;
}, nl = class extends Fo {
	static register() {
		Z.register($c, !0), Z.register($, !0), Z.register(el, !0);
	}
	constructor(e, t) {
		if (super(e, t), this.options.hljs == null) throw Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
		this.languages = this.options.languages.reduce((e, t) => {
			let { key: n } = t;
			return e[n] = !0, e;
		}, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
	}
	initListener() {
		this.quill.on(Z.events.SCROLL_BLOT_MOUNT, (e) => {
			if (!(e instanceof el)) return;
			let t = this.quill.root.ownerDocument.createElement("select");
			this.options.languages.forEach((e) => {
				let { key: n, label: r } = e, i = t.ownerDocument.createElement("option");
				i.textContent = r, i.setAttribute("value", n), t.appendChild(i);
			}), t.addEventListener("change", () => {
				e.format($.blotName, t.value), this.quill.root.focus(), this.highlight(e, !0);
			}), e.uiNode ?? (e.attachUI(t), e.children.head && (t.value = $.formats(e.children.head.domNode)));
		});
	}
	initTimer() {
		let e = null;
		this.quill.on(Z.events.SCROLL_OPTIMIZE, () => {
			e && clearTimeout(e), e = setTimeout(() => {
				this.highlight(), e = null;
			}, this.options.interval);
		});
	}
	highlight() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (this.quill.selection.composing) return;
		this.quill.update(Z.sources.USER);
		let n = this.quill.getSelection();
		(e == null ? this.quill.scroll.descendants(el) : [e]).forEach((e) => {
			e.highlight(this.highlightBlot, t);
		}), this.quill.update(Z.sources.SILENT), n != null && this.quill.setSelection(n, Z.sources.SILENT);
	}
	highlightBlot(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
		if (t = this.languages[t] ? t : "plain", t === "plain") return lo(e).split("\n").reduce((e, n, r) => (r !== 0 && e.insert("\n", { [Q.blotName]: t }), e.insert(n)), new K.default());
		let n = this.quill.root.ownerDocument.createElement("div");
		return n.classList.add(Q.className), n.innerHTML = tl(this.options.hljs, t, e), lc(this.quill.scroll, n, [(e, t) => {
			let n = Qc.value(e);
			return n ? t.compose(new K.default().retain(t.length(), { [$c.blotName]: n })) : t;
		}], [(e, n) => e.data.split("\n").reduce((e, n, r) => (r !== 0 && e.insert("\n", { [Q.blotName]: t }), e.insert(n)), n)], /* @__PURE__ */ new WeakMap());
	}
};
nl.DEFAULTS = {
	hljs: window.hljs,
	interval: 1e3,
	languages: [
		{
			key: "plain",
			label: "Plain"
		},
		{
			key: "bash",
			label: "Bash"
		},
		{
			key: "cpp",
			label: "C++"
		},
		{
			key: "cs",
			label: "C#"
		},
		{
			key: "css",
			label: "CSS"
		},
		{
			key: "diff",
			label: "Diff"
		},
		{
			key: "xml",
			label: "HTML/XML"
		},
		{
			key: "java",
			label: "Java"
		},
		{
			key: "javascript",
			label: "JavaScript"
		},
		{
			key: "markdown",
			label: "Markdown"
		},
		{
			key: "php",
			label: "PHP"
		},
		{
			key: "python",
			label: "Python"
		},
		{
			key: "ruby",
			label: "Ruby"
		},
		{
			key: "sql",
			label: "SQL"
		}
	]
};
// node_modules/quill/formats/table.js
var rl = class e extends q {
	static blotName = "table";
	static tagName = "TD";
	static create(e) {
		let t = super.create();
		return e ? t.setAttribute("data-row", e) : t.setAttribute("data-row", sl()), t;
	}
	static formats(e) {
		if (e.hasAttribute("data-row")) return e.getAttribute("data-row");
	}
	cellOffset() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}
	format(t, n) {
		t === e.blotName && n ? this.domNode.setAttribute("data-row", n) : super.format(t, n);
	}
	row() {
		return this.parent;
	}
	rowOffset() {
		return this.row() ? this.row().rowOffset() : -1;
	}
	table() {
		return this.row() && this.row().table();
	}
}, il = class extends rs {
	static blotName = "table-row";
	static tagName = "TR";
	checkMerge() {
		if (super.checkMerge() && this.next.children.head != null) {
			let e = this.children.head.formats(), t = this.children.tail.formats(), n = this.next.children.head.formats(), r = this.next.children.tail.formats();
			return e.table === t.table && e.table === n.table && e.table === r.table;
		}
		return !1;
	}
	optimize(e) {
		super.optimize(e), this.children.forEach((e) => {
			if (e.next == null) return;
			let t = e.formats(), n = e.next.formats();
			if (t.table !== n.table) {
				let t = this.splitAfter(e);
				t && t.optimize(), this.prev && this.prev.optimize();
			}
		});
	}
	rowOffset() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}
	table() {
		return this.parent && this.parent.parent;
	}
}, al = class extends rs {
	static blotName = "table-body";
	static tagName = "TBODY";
}, ol = class extends rs {
	static blotName = "table-container";
	static tagName = "TABLE";
	balanceCells() {
		let e = this.descendants(il), t = e.reduce((e, t) => Math.max(t.children.length, e), 0);
		e.forEach((e) => {
			Array(t - e.children.length).fill(0).forEach(() => {
				let t;
				e.children.head != null && (t = rl.formats(e.children.head.domNode));
				let n = this.scroll.create(rl.blotName, t);
				e.appendChild(n), n.optimize();
			});
		});
	}
	cells(e) {
		return this.rows().map((t) => t.children.at(e));
	}
	deleteColumn(e) {
		let [t] = this.descendant(al);
		t != null && t.children.head != null && t.children.forEach((t) => {
			t.children.at(e)?.remove();
		});
	}
	insertColumn(e) {
		let [t] = this.descendant(al);
		t != null && t.children.head != null && t.children.forEach((t) => {
			let n = t.children.at(e), r = rl.formats(t.children.head.domNode), i = this.scroll.create(rl.blotName, r);
			t.insertBefore(i, n);
		});
	}
	insertRow(e) {
		let [t] = this.descendant(al);
		if (t == null || t.children.head == null) return;
		let n = sl(), r = this.scroll.create(il.blotName);
		t.children.head.children.forEach(() => {
			let e = this.scroll.create(rl.blotName, n);
			r.appendChild(e);
		});
		let i = t.children.at(e);
		t.insertBefore(r, i);
	}
	rows() {
		let e = this.children.head;
		return e == null ? [] : e.children.map((e) => e);
	}
};
ol.allowedChildren = [al], al.requiredContainer = ol, al.allowedChildren = [il], il.requiredContainer = al, il.allowedChildren = [rl], rl.requiredContainer = il;
function sl() {
	return `row-${Math.random().toString(36).slice(2, 6)}`;
}
// node_modules/quill/modules/table.js
var cl = class extends Fo {
	static register() {
		Z.register(rl), Z.register(il), Z.register(al), Z.register(ol);
	}
	constructor() {
		super(...arguments), this.listenBalanceCells();
	}
	balanceTables() {
		this.quill.scroll.descendants(ol).forEach((e) => {
			e.balanceCells();
		});
	}
	deleteColumn() {
		let [e, , t] = this.getTable();
		t != null && (e.deleteColumn(t.cellOffset()), this.quill.update(Z.sources.USER));
	}
	deleteRow() {
		let [, e] = this.getTable();
		e != null && (e.remove(), this.quill.update(Z.sources.USER));
	}
	deleteTable() {
		let [e] = this.getTable();
		if (e == null) return;
		let t = e.offset();
		e.remove(), this.quill.update(Z.sources.USER), this.quill.setSelection(t, Z.sources.SILENT);
	}
	getTable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
		if (e == null) return [
			null,
			null,
			null,
			-1
		];
		let [t, n] = this.quill.getLine(e.index);
		if (t == null || t.statics.blotName !== rl.blotName) return [
			null,
			null,
			null,
			-1
		];
		let r = t.parent;
		return [
			r.parent.parent,
			r,
			t,
			n
		];
	}
	insertColumn(e) {
		let t = this.quill.getSelection();
		if (!t) return;
		let [n, r, i] = this.getTable(t);
		if (i == null) return;
		let a = i.cellOffset();
		n.insertColumn(a + e), this.quill.update(Z.sources.USER);
		let o = r.rowOffset();
		e === 0 && (o += 1), this.quill.setSelection(t.index + o, t.length, Z.sources.SILENT);
	}
	insertColumnLeft() {
		this.insertColumn(0);
	}
	insertColumnRight() {
		this.insertColumn(1);
	}
	insertRow(e) {
		let t = this.quill.getSelection();
		if (!t) return;
		let [n, r, i] = this.getTable(t);
		if (i == null) return;
		let a = r.rowOffset();
		n.insertRow(a + e), this.quill.update(Z.sources.USER), e > 0 ? this.quill.setSelection(t, Z.sources.SILENT) : this.quill.setSelection(t.index + r.children.length, t.length, Z.sources.SILENT);
	}
	insertRowAbove() {
		this.insertRow(0);
	}
	insertRowBelow() {
		this.insertRow(1);
	}
	insertTable(e, t) {
		let n = this.quill.getSelection();
		if (n == null) return;
		let r = Array(e).fill(0).reduce((e) => {
			let n = Array(t).fill("\n").join("");
			return e.insert(n, { table: sl() });
		}, new K.default().retain(n.index));
		this.quill.updateContents(r, Z.sources.USER), this.quill.setSelection(n.index, Z.sources.SILENT), this.balanceTables();
	}
	listenBalanceCells() {
		this.quill.on(Z.events.SCROLL_OPTIMIZE, (e) => {
			e.some((e) => [
				"TD",
				"TR",
				"TBODY",
				"TABLE"
			].includes(e.target.tagName) ? (this.quill.once(Z.events.TEXT_CHANGE, (e, t, n) => {
				n === Z.sources.USER && this.balanceTables();
			}), !0) : !1);
		});
	}
}, ll = bo("quill:toolbar"), ul = class extends Fo {
	constructor(e, t) {
		if (super(e, t), Array.isArray(this.options.container)) {
			let t = document.createElement("div");
			t.setAttribute("role", "toolbar"), fl(t, this.options.container), e.container?.parentNode?.insertBefore(t, e.container), this.container = t;
		} else this.container = typeof this.options.container == "string" ? document.querySelector(this.options.container) : this.options.container;
		this.container instanceof HTMLElement ? (this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((e) => {
			let t = this.options.handlers?.[e];
			t && this.addHandler(e, t);
		}), Array.from(this.container.querySelectorAll("button, select")).forEach((e) => {
			this.attach(e);
		}), this.quill.on(Z.events.EDITOR_CHANGE, () => {
			let [e] = this.quill.selection.getRange();
			this.update(e);
		})) : ll.error("Container required for toolbar", this.options);
	}
	addHandler(e, t) {
		this.handlers[e] = t;
	}
	attach(e) {
		let t = Array.from(e.classList).find((e) => e.indexOf("ql-") === 0);
		if (!t) return;
		if (t = t.slice(3), e.tagName === "BUTTON" && e.setAttribute("type", "button"), this.handlers[t] == null && this.quill.scroll.query(t) == null) {
			ll.warn("ignoring attaching to nonexistent format", t, e);
			return;
		}
		let n = e.tagName === "SELECT" ? "change" : "click";
		e.addEventListener(n, (n) => {
			let r;
			if (e.tagName === "SELECT") {
				if (e.selectedIndex < 0) return;
				let t = e.options[e.selectedIndex];
				r = t.hasAttribute("selected") ? !1 : t.value || !1;
			} else r = e.classList.contains("ql-active") ? !1 : e.value || !e.hasAttribute("value"), n.preventDefault();
			this.quill.focus();
			let [i] = this.quill.selection.getRange();
			if (this.handlers[t] != null) this.handlers[t].call(this, r);
			else if (this.quill.scroll.query(t).prototype instanceof G) {
				if (r = prompt(`Enter ${t}`), !r) return;
				this.quill.updateContents(new K.default().retain(i.index).delete(i.length).insert({ [t]: r }), Z.sources.USER);
			} else this.quill.format(t, r, Z.sources.USER);
			this.update(i);
		}), this.controls.push([t, e]);
	}
	update(e) {
		let t = e == null ? {} : this.quill.getFormat(e);
		this.controls.forEach((n) => {
			let [r, i] = n;
			if (i.tagName === "SELECT") {
				let n = null;
				if (e == null) n = null;
				else if (t[r] == null) n = i.querySelector("option[selected]");
				else if (!Array.isArray(t[r])) {
					let e = t[r];
					typeof e == "string" && (e = e.replace(/"/g, "\\\"")), n = i.querySelector(`option[value="${e}"]`);
				}
				n == null ? (i.value = "", i.selectedIndex = -1) : n.selected = !0;
			} else if (e == null) i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
			else if (i.hasAttribute("value")) {
				let e = t[r], n = e === i.getAttribute("value") || e != null && e.toString() === i.getAttribute("value") || e == null && !i.getAttribute("value");
				i.classList.toggle("ql-active", n), i.setAttribute("aria-pressed", n.toString());
			} else {
				let e = t[r] != null;
				i.classList.toggle("ql-active", e), i.setAttribute("aria-pressed", e.toString());
			}
		});
	}
};
ul.DEFAULTS = {};
function dl(e, t, n) {
	let r = document.createElement("button");
	r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), n == null ? r.setAttribute("aria-label", t) : (r.value = n, r.setAttribute("aria-label", `${t}: ${n}`)), e.appendChild(r);
}
function fl(e, t) {
	Array.isArray(t[0]) || (t = [t]), t.forEach((t) => {
		let n = document.createElement("span");
		n.classList.add("ql-formats"), t.forEach((e) => {
			if (typeof e == "string") dl(n, e);
			else {
				let t = Object.keys(e)[0], r = e[t];
				Array.isArray(r) ? pl(n, t, r) : dl(n, t, r);
			}
		}), e.appendChild(n);
	});
}
function pl(e, t, n) {
	let r = document.createElement("select");
	r.classList.add(`ql-${t}`), n.forEach((e) => {
		let t = document.createElement("option");
		e === !1 ? t.setAttribute("selected", "selected") : t.setAttribute("value", String(e)), r.appendChild(t);
	}), e.appendChild(r);
}
ul.DEFAULTS = {
	container: null,
	handlers: {
		clean() {
			let e = this.quill.getSelection();
			if (e != null) {
				if (e.length === 0) {
					let e = this.quill.getFormat();
					Object.keys(e).forEach((e) => {
						this.quill.scroll.query(e, V.INLINE) != null && this.quill.format(e, !1, Z.sources.USER);
					});
				} else this.quill.removeFormat(e.index, e.length, Z.sources.USER);
			}
		},
		direction(e) {
			let { align: t } = this.quill.getFormat();
			e === "rtl" && t == null ? this.quill.format("align", "right", Z.sources.USER) : !e && t === "right" && this.quill.format("align", !1, Z.sources.USER), this.quill.format("direction", e, Z.sources.USER);
		},
		indent(e) {
			let t = this.quill.getSelection(), n = this.quill.getFormat(t), r = parseInt(n.indent || 0, 10);
			if (e === "+1" || e === "-1") {
				let t = e === "+1" ? 1 : -1;
				n.direction === "rtl" && (t *= -1), this.quill.format("indent", r + t, Z.sources.USER);
			}
		},
		link(e) {
			e === !0 && (e = prompt("Enter link URL:")), this.quill.format("link", e, Z.sources.USER);
		},
		list(e) {
			let t = this.quill.getSelection(), n = this.quill.getFormat(t);
			e === "check" ? n.list === "checked" || n.list === "unchecked" ? this.quill.format("list", !1, Z.sources.USER) : this.quill.format("list", "unchecked", Z.sources.USER) : this.quill.format("list", e, Z.sources.USER);
		}
	}
};
// node_modules/quill/ui/icons.js
var ml = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>", hl = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>", gl = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>", _l = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>", vl = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>", yl = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>", bl = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>", xl = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>", Sl = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>", Cl = {
	align: {
		"": ml,
		center: hl,
		right: gl,
		justify: _l
	},
	background: vl,
	blockquote: yl,
	bold: bl,
	clean: xl,
	code: Sl,
	"code-block": Sl,
	color: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>",
	direction: {
		"": "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>",
		rtl: "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>"
	},
	formula: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>",
	header: {
		1: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>",
		2: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>",
		3: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>",
		4: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>",
		5: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>",
		6: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>"
	},
	italic: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>",
	image: "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>",
	indent: {
		"+1": "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>",
		"-1": "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>"
	},
	link: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>",
	list: {
		bullet: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>",
		check: "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>",
		ordered: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>"
	},
	script: {
		sub: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>",
		super: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>"
	},
	strike: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>",
	table: "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>",
	underline: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>",
	video: "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>"
}, wl = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>", Tl = 0;
function El(e, t) {
	e.setAttribute(t, `${e.getAttribute(t) !== "true"}`);
}
var Dl = class {
	constructor(e) {
		this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
			this.togglePicker();
		}), this.label.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "Enter":
					this.togglePicker();
					break;
				case "Escape": this.escape(), e.preventDefault();
			}
		}), this.select.addEventListener("change", this.update.bind(this));
	}
	togglePicker() {
		this.container.classList.toggle("ql-expanded"), El(this.label, "aria-expanded"), El(this.options, "aria-hidden");
	}
	buildItem(e) {
		let t = document.createElement("span");
		t.tabIndex = "0", t.setAttribute("role", "button"), t.classList.add("ql-picker-item");
		let n = e.getAttribute("value");
		return n && t.setAttribute("data-value", n), e.textContent && t.setAttribute("data-label", e.textContent), t.addEventListener("click", () => {
			this.selectItem(t, !0);
		}), t.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "Enter":
					this.selectItem(t, !0), e.preventDefault();
					break;
				case "Escape": this.escape(), e.preventDefault();
			}
		}), t;
	}
	buildLabel() {
		let e = document.createElement("span");
		return e.classList.add("ql-picker-label"), e.innerHTML = wl, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e;
	}
	buildOptions() {
		let e = document.createElement("span");
		e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = `ql-picker-options-${Tl}`, Tl += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, Array.from(this.select.options).forEach((t) => {
			let n = this.buildItem(t);
			e.appendChild(n), t.selected === !0 && this.selectItem(n);
		}), this.container.appendChild(e);
	}
	buildPicker() {
		Array.from(this.select.attributes).forEach((e) => {
			this.container.setAttribute(e.name, e.value);
		}), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
	}
	escape() {
		this.close(), setTimeout(() => this.label.focus(), 1);
	}
	close() {
		this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
	}
	selectItem(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = this.container.querySelector(".ql-selected");
		e !== n && (n?.classList.remove("ql-selected"), e != null && (e.classList.add("ql-selected"), this.select.selectedIndex = Array.from(e.parentNode.children).indexOf(e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t && (this.select.dispatchEvent(new Event("change")), this.close())));
	}
	update() {
		let e;
		if (this.select.selectedIndex > -1) {
			let t = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
			e = this.select.options[this.select.selectedIndex], this.selectItem(t);
		} else this.selectItem(null);
		let t = e != null && e !== this.select.querySelector("option[selected]");
		this.label.classList.toggle("ql-active", t);
	}
}, Ol = class extends Dl {
	constructor(e, t) {
		super(e), this.label.innerHTML = t, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((e) => {
			e.classList.add("ql-primary");
		});
	}
	buildItem(e) {
		let t = super.buildItem(e);
		return t.style.backgroundColor = e.getAttribute("value") || "", t;
	}
	selectItem(e, t) {
		super.selectItem(e, t);
		let n = this.label.querySelector(".ql-color-label"), r = e && e.getAttribute("data-value") || "";
		n && (n.tagName === "line" ? n.style.stroke = r : n.style.fill = r);
	}
}, kl = class extends Dl {
	constructor(e, t) {
		super(e), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((e) => {
			e.innerHTML = t[e.getAttribute("data-value") || ""];
		}), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
	}
	selectItem(e, t) {
		super.selectItem(e, t);
		let n = e || this.defaultItem;
		if (n != null) {
			if (this.label.innerHTML === n.innerHTML) return;
			this.label.innerHTML = n.innerHTML;
		}
	}
}, Al = (e) => {
	let { overflowY: t } = getComputedStyle(e, null);
	return t !== "visible" && t !== "clip";
}, jl = class {
	constructor(e, t) {
		this.quill = e, this.boundsContainer = t || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Al(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
			this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
		}), this.hide();
	}
	hide() {
		this.root.classList.add("ql-hidden");
	}
	position(e) {
		let t = e.left + e.width / 2 - this.root.offsetWidth / 2, n = e.bottom + this.quill.root.scrollTop;
		this.root.style.left = `${t}px`, this.root.style.top = `${n}px`, this.root.classList.remove("ql-flip");
		let r = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect(), a = 0;
		if (i.right > r.right && (a = r.right - i.right, this.root.style.left = `${t + a}px`), i.left < r.left && (a = r.left - i.left, this.root.style.left = `${t + a}px`), i.bottom > r.bottom) {
			let t = i.bottom - i.top, r = e.bottom - e.top + t;
			this.root.style.top = `${n - r}px`, this.root.classList.add("ql-flip");
		}
		return a;
	}
	show() {
		this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
	}
}, Ml = [
	!1,
	"center",
	"right",
	"justify"
], Nl = /* @__PURE__ */ "#000000.#e60000.#ff9900.#ffff00.#008a00.#0066cc.#9933ff.#ffffff.#facccc.#ffebcc.#ffffcc.#cce8cc.#cce0f5.#ebd6ff.#bbbbbb.#f06666.#ffc266.#ffff66.#66b966.#66a3e0.#c285ff.#888888.#a10000.#b26b00.#b2b200.#006100.#0047b2.#6b24b2.#444444.#5c0000.#663d00.#666600.#003700.#002966.#3d1466".split("."), Pl = [
	!1,
	"serif",
	"monospace"
], Fl = [
	"1",
	"2",
	"3",
	!1
], Il = [
	"small",
	!1,
	"large",
	"huge"
], Ll = class extends zo {
	constructor(e, t) {
		super(e, t);
		let n = (t) => {
			document.body.contains(e.root) ? (this.tooltip != null && !this.tooltip.root.contains(t.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((e) => {
				e.container.contains(t.target) || e.close();
			})) : document.body.removeEventListener("click", n);
		};
		e.emitter.listenDOM("click", document.body, n);
	}
	addModule(e) {
		let t = super.addModule(e);
		return e === "toolbar" && this.extendToolbar(t), t;
	}
	buildButtons(e, t) {
		Array.from(e).forEach((e) => {
			(e.getAttribute("class") || "").split(/\s+/).forEach((n) => {
				if (n.startsWith("ql-") && (n = n.slice(3), t[n] != null)) {
					if (n === "direction") e.innerHTML = t[n][""] + t[n].rtl;
					else if (typeof t[n] == "string") e.innerHTML = t[n];
					else {
						let r = e.value || "";
						r != null && t[n][r] && (e.innerHTML = t[n][r]);
					}
				}
			});
		});
	}
	buildPickers(e, t) {
		this.pickers = Array.from(e).map((e) => {
			if (e.classList.contains("ql-align") && (e.querySelector("option") ?? Bl(e, Ml), typeof t.align == "object")) return new kl(e, t.align);
			if (e.classList.contains("ql-background") || e.classList.contains("ql-color")) {
				let n = e.classList.contains("ql-background") ? "background" : "color";
				return e.querySelector("option") ?? Bl(e, Nl, n === "background" ? "#ffffff" : "#000000"), new Ol(e, t[n]);
			}
			return e.querySelector("option") ?? (e.classList.contains("ql-font") ? Bl(e, Pl) : e.classList.contains("ql-header") ? Bl(e, Fl) : e.classList.contains("ql-size") && Bl(e, Il)), new Dl(e);
		}), this.quill.on(X.events.EDITOR_CHANGE, () => {
			this.pickers.forEach((e) => {
				e.update();
			});
		});
	}
};
Ll.DEFAULTS = Ta({}, zo.DEFAULTS, { modules: { toolbar: { handlers: {
	formula() {
		this.quill.theme.tooltip.edit("formula");
	},
	image() {
		let e = this.container.querySelector("input.ql-image[type=file]");
		e ?? (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), e.classList.add("ql-image"), e.addEventListener("change", () => {
			let t = this.quill.getSelection(!0);
			this.quill.uploader.upload(t, e.files), e.value = "";
		}), this.container.appendChild(e)), e.click();
	},
	video() {
		this.quill.theme.tooltip.edit("video");
	}
} } } });
var Rl = class extends jl {
	constructor(e, t) {
		super(e, t), this.textbox = this.root.querySelector("input[type=\"text\"]"), this.listen();
	}
	listen() {
		this.textbox.addEventListener("keydown", (e) => {
			e.key === "Enter" ? (this.save(), e.preventDefault()) : e.key === "Escape" && (this.cancel(), e.preventDefault());
		});
	}
	cancel() {
		this.hide(), this.restoreFocus();
	}
	edit() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
		t == null ? e !== this.root.getAttribute("data-mode") && (this.textbox.value = "") : this.textbox.value = t;
		let n = this.quill.getBounds(this.quill.selection.savedRange);
		n != null && this.position(n), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${e}`) || ""), this.root.setAttribute("data-mode", e);
	}
	restoreFocus() {
		this.quill.focus({ preventScroll: !0 });
	}
	save() {
		let { value: e } = this.textbox;
		switch (this.root.getAttribute("data-mode")) {
			case "link": {
				let { scrollTop: t } = this.quill.root;
				this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, X.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, X.sources.USER)), this.quill.root.scrollTop = t;
				break;
			}
			case "video": e = zl(e);
			case "formula": {
				if (!e) break;
				let t = this.quill.getSelection(!0);
				if (t != null) {
					let n = t.index + t.length;
					this.quill.insertEmbed(n, this.root.getAttribute("data-mode"), e, X.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(n + 1, " ", X.sources.USER), this.quill.setSelection(n + 2, X.sources.USER);
				}
				break;
			}
		}
		this.textbox.value = "", this.hide();
	}
};
function zl(e) {
	let t = e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : e;
}
function Bl(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
	t.forEach((t) => {
		let r = document.createElement("option");
		t === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", String(t)), e.appendChild(r);
	});
}
// node_modules/quill/themes/bubble.js
var Vl = [[
	"bold",
	"italic",
	"link"
], [
	{ header: 1 },
	{ header: 2 },
	"blockquote"
]], Hl = class extends Rl {
	static TEMPLATE = "<span class=\"ql-tooltip-arrow\"></span><div class=\"ql-tooltip-editor\"><input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\"><a class=\"ql-close\"></a></div>";
	constructor(e, t) {
		super(e, t), this.quill.on(X.events.EDITOR_CHANGE, (e, t, n, r) => {
			if (e === X.events.SELECTION_CHANGE) {
				if (t != null && t.length > 0 && r === X.sources.USER) {
					this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
					let e = this.quill.getLines(t.index, t.length);
					if (e.length === 1) {
						let e = this.quill.getBounds(t);
						e != null && this.position(e);
					} else {
						let n = e[e.length - 1], r = this.quill.getIndex(n), i = Math.min(n.length() - 1, t.index + t.length - r), a = this.quill.getBounds(new Co(r, i));
						a != null && this.position(a);
					}
				} else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
			}
		});
	}
	listen() {
		super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
			this.root.classList.remove("ql-editing");
		}), this.quill.on(X.events.SCROLL_OPTIMIZE, () => {
			setTimeout(() => {
				if (this.root.classList.contains("ql-hidden")) return;
				let e = this.quill.getSelection();
				if (e != null) {
					let t = this.quill.getBounds(e);
					t != null && this.position(t);
				}
			}, 1);
		});
	}
	cancel() {
		this.show();
	}
	position(e) {
		let t = super.position(e), n = this.root.querySelector(".ql-tooltip-arrow");
		return n.style.marginLeft = "", t !== 0 && (n.style.marginLeft = `${-1 * t - n.offsetWidth / 2}px`), t;
	}
}, Ul = class extends Ll {
	constructor(e, t) {
		t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = Vl), super(e, t), this.quill.container.classList.add("ql-bubble");
	}
	extendToolbar(e) {
		this.tooltip = new Hl(this.quill, this.options.bounds), e.container != null && (this.tooltip.root.appendChild(e.container), this.buildButtons(e.container.querySelectorAll("button"), Cl), this.buildPickers(e.container.querySelectorAll("select"), Cl));
	}
};
Ul.DEFAULTS = Ta({}, Ll.DEFAULTS, { modules: { toolbar: { handlers: { link(e) {
	e ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, Z.sources.USER);
} } } } });
// node_modules/quill/themes/snow.js
var Wl = [
	[{ header: [
		"1",
		"2",
		"3",
		!1
	] }],
	[
		"bold",
		"italic",
		"underline",
		"link"
	],
	[{ list: "ordered" }, { list: "bullet" }],
	["clean"]
], Gl = class extends Rl {
	static TEMPLATE = "<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a><input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\"><a class=\"ql-action\"></a><a class=\"ql-remove\"></a>";
	preview = this.root.querySelector("a.ql-preview");
	listen() {
		super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
			this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
		}), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
			if (this.linkRange != null) {
				let e = this.linkRange;
				this.restoreFocus(), this.quill.formatText(e, "link", !1, X.sources.USER), delete this.linkRange;
			}
			e.preventDefault(), this.hide();
		}), this.quill.on(X.events.SELECTION_CHANGE, (e, t, n) => {
			if (e != null) {
				if (e.length === 0 && n === X.sources.USER) {
					let [t, n] = this.quill.scroll.descendant(Hc, e.index);
					if (t != null) {
						this.linkRange = new Co(e.index - n, t.length());
						let r = Hc.formats(t.domNode);
						this.preview.textContent = r, this.preview.setAttribute("href", r), this.show();
						let i = this.quill.getBounds(this.linkRange);
						i != null && this.position(i);
						return;
					}
				} else delete this.linkRange;
				this.hide();
			}
		});
	}
	show() {
		super.show(), this.root.removeAttribute("data-mode");
	}
}, Kl = class extends Ll {
	constructor(e, t) {
		t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = Wl), super(e, t), this.quill.container.classList.add("ql-snow");
	}
	extendToolbar(e) {
		e.container != null && (e.container.classList.add("ql-snow"), this.buildButtons(e.container.querySelectorAll("button"), Cl), this.buildPickers(e.container.querySelectorAll("select"), Cl), this.tooltip = new Gl(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
			key: "k",
			shortKey: !0
		}, (t, n) => {
			e.handlers.link.call(e, !n.format.link);
		}));
	}
};
Kl.DEFAULTS = Ta({}, Ll.DEFAULTS, { modules: { toolbar: { handlers: { link(e) {
	if (e) {
		let e = this.quill.getSelection();
		if (e == null || e.length === 0) return;
		let t = this.quill.getText(e);
		/^\S+@\S+\.\S+$/.test(t) && t.indexOf("mailto:") !== 0 && (t = `mailto:${t}`);
		let { tooltip: n } = this.quill.theme;
		n.edit("link", t);
	} else this.quill.format("link", !1, Z.sources.USER);
} } } } }), Pc.register({
	"attributors/attribute/direction": bs,
	"attributors/class/align": us,
	"attributors/class/background": hs,
	"attributors/class/color": ps,
	"attributors/class/direction": xs,
	"attributors/class/font": ws,
	"attributors/class/size": Es,
	"attributors/style/align": ds,
	"attributors/style/background": gs,
	"attributors/style/color": ms,
	"attributors/style/direction": Ss,
	"attributors/style/font": Ts,
	"attributors/style/size": Ds
}, !0), Pc.register({
	"formats/align": us,
	"formats/direction": xs,
	"formats/indent": Fc,
	"formats/background": gs,
	"formats/color": ms,
	"formats/font": ws,
	"formats/size": Es,
	"formats/blockquote": Ic,
	"formats/code-block": Q,
	"formats/header": Lc,
	"formats/list": zc,
	"formats/bold": Bc,
	"formats/code": vs,
	"formats/italic": Vc,
	"formats/link": Hc,
	"formats/script": Wc,
	"formats/strike": Gc,
	"formats/underline": Kc,
	"formats/formula": qc,
	"formats/image": Yc,
	"formats/video": Zc,
	"modules/syntax": nl,
	"modules/table": cl,
	"modules/toolbar": ul,
	"themes/bubble": Ul,
	"themes/snow": Kl,
	"ui/icons": Cl,
	"ui/picker": Dl,
	"ui/icon-picker": kl,
	"ui/color-picker": Ol,
	"ui/tooltip": jl
}, !0);
var ql = Pc;
// src/assets/js/components/quill-setup.js
jQuery(document).ready(function(e) {
	let t = [
		[
			"bold",
			"italic",
			"underline"
		],
		[{ list: "ordered" }, { list: "bullet" }],
		["link", "clean"]
	];
	function n(n) {
		let r = n instanceof jQuery ? n : e(n);
		r = r.filter(function() {
			return !e(this).hasClass("noquill");
		}), r.length && r.each(function(n) {
			let i = e(r[n]);
			if (i.closest(".quill-editor-slot").length) return;
			let a = i.find(".quill-textarea-slot"), o = i.find(".quill-editor-slot");
			if (o.hasClass("ql-container")) return;
			o.html(a.val());
			let s = new ql(o[0], {
				theme: "snow",
				modules: { toolbar: t }
			});
			s.on("text-change", function() {
				let e = s.root.innerHTML;
				e === "<p><br></p>" && (e = ""), a.val(e);
			});
		});
	}
	window.cp_repeater_skill_removed = 0, window.cp_repeater_work_removed = 0, window.cp_repeater_exp_removed = 0, e(document).on("charming-portfolio-repeater-add", function(t, r, i, a) {
		let o;
		r === "experiences" && (i -= window.cp_repeater_exp_removed, a.find(".responsibilities").removeClass("noquill"), o = e(".charming-portfolio-experience .responsibilities")[i - 1]), r === "skills" && (i -= window.cp_repeater_skill_removed, a.find(".skill-description").removeClass("noquill"), o = e(".charming-portfolio-skills .skill-description")[i - 1]), r === "works" && (i -= window.cp_repeater_work_removed, a.find(".charming-portfolio-project-description").removeClass("noquill"), o = e(".charming-portfolio-projects .charming-portfolio-project-description")[i - 1]), o && n(o);
	}), e(document).on("charming-portfolio-before-repeater-remove", function(t, n, r) {
		let i;
		if (n === "experiences" && (window.cp_repeater_exp_removed++, i = e(".charming-portfolio-experience .responsibilities")[r - 1]), n === "skills" && (window.cp_repeater_skill_removed++, i = e(".charming-portfolio-skills .skill-description")[r - 1]), n === "works" && (window.cp_repeater_work_removed++, i = e(".charming-portfolio-projects .charming-portfolio-project-description")[r - 1]), i) {
			let e = ql.find(i);
			e && (e.off("text-change"), e.off("selection-change"), e.disable()), e && e.root && e.root.remove();
		}
	}), n(".portfolio-aboutme.portfolio-section-content"), n(".charming-portfolio-experience .responsibilities"), n(".charming-portfolio-skills .skill-description"), n(".charming-portfolio-project-description");
});
