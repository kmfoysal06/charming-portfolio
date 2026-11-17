document.addEventListener("input", e => charming_portfolio_input_update(true, e));
document.addEventListener("change", e => charming_portfolio_input_update(true, e));

window.is_cp_input_updated = false;



window.addEventListener("beforeunload", (e) => {
    console.log("beforeunload", window.is_cp_input_updated);
    if(window.is_cp_input_updated) {
        e.preventDefault();
        e.returnValue = '';
    }
});


(function() {
    window.charming_portfolio_input_update = function (state = true, e = null) {
        console.log("input updated", state);
        if(e) {
            if(!e.target.closest(".portfolio-section-wrapper")) return;
        }

        if(window.is_cp_input_updated === state) return;
        window.is_cp_input_updated = state;
    }
})()
