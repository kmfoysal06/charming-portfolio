(function($){
    const nonce = charming_portfolio_admin.erase_nonce;
    /**
     * confirm challenge flag to check if user already done the challenge
     */
    let confirmDone = false;
    document.addEventListener("click", function(e) {
        if (e.target && e.target.closest('.charming-portfolio-erase-data-btn')) {
            const eraseBtn = e.target.closest('.charming-portfolio-erase-data-btn');
            const pageWrapper = eraseBtn.closest('.section-danger-zone');
            const confirmModal = pageWrapper.querySelector('.erase-data-challange');
            $(confirmModal).slideDown();
        }

        if (e.target && e.target.closest('.cp-erase-data-cancel-btn')) {
            const cancelBtn = e.target.closest('.cp-erase-data-cancel-btn');
            const pageWrapper = cancelBtn.closest('.section-danger-zone');
            const confirmModal = pageWrapper.querySelector('.erase-data-challange');
            const inputField = confirmModal.querySelector('.erase-data-challange-input');
            const confirmBtn = confirmModal.querySelector('.cp-erase-data-confirm-btn');
            inputField.value = '';
            confirmBtn.setAttribute('disabled', 'disabled');
            $(confirmModal).slideUp();
        }
        if (e.target && e.target.closest('.cp-erase-data-confirm-btn')) {
            eraseData();
        }
    });

    document.addEventListener("keyup", function(e) {
        if(e.target && e.target.closest('.erase-data-challange-input')) {
            console.log('keyup detected');
            console.log(e.target.value);
            const confirmText = "cp/erase";
            if(e.target.value === confirmText) {
                const pageWrapper = e.target.closest('.section-danger-zone');
                const confirmBtn = pageWrapper.querySelector('.cp-erase-data-confirm-btn');
                confirmDone = true;
                confirmBtn.removeAttribute('disabled');
            }
        }
    });

    function eraseData() {
        if(!confirmDone) {
            CharmAlert.showAlert('Please complete the confirmation challenge.', 'error');
            return;
        }
        $.ajax({
            url: charming_portfolio_admin.ajax_url,
            type: 'POST',
            data: {
                action: 'charming_portfolio_erase_data',
                nonce: nonce
            },
            success: function(response) {
                if(response.success) {
                    // alert('All data erased successfully.');
                    CharmAlert.showAlert('All data erased successfully.', 'success');
                    location.reload();
                } else {
                    CharmAlert.showAlert('Error Erasing Data. Please Try Again.', 'error');
                }
            },
            error: function(xhr, status, error) {
                CharmAlert.showAlert('AJAX Error: ' + error, 'error');
            }
        });
    }
})(jQuery);