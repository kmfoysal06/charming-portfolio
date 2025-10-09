jQuery(document).ready(function ($) {
    // event deligation on .submit_charming_portfolio_enquiry
    $(document).on('click', '.submit_charming_portfolio_enquiry', async function (e) {
        e.preventDefault();

        const form = $(this).closest('.contact-form');
        const submitButton = $(this);
        var formData = new FormData();

        // Disable the submit button to prevent multiple submissions
        submitButton.prop('disabled', true).text('Sending...');

        const name = form.find("input[name='name']").val();
        const email = form.find("input[name='email']").val();
        const message = form.find("textarea[name='message']").val();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('action', 'charming_portfolio_add_enquiry');
        formData.append('nonce', charming_portfolio_v2.nonce);

    try {
        const response = await fetch(charming_portfolio_v2.ajax_url, {
            method: "POST",
            body: formData
        });
        if(!response.ok) {
            CharmAlert.showAlert("Error! Please try again later.", 'error');
        }
        const result = await response.json();

        if(!result.success) {
            CharmAlert.showAlert("Error! Please try again later.", 'error');
        }else{
            CharmAlert.showAlert("Enquiry Added! We'll get back to you as soon as possible.", 'success');
            form[0].reset();
        }

    }catch(e){
            CharmAlert.showAlert("Error adding enquiry! Please try again", 'success');

    }finally {
        submitButton.prop('disabled', false).text('Submit');
    }
    
});
});
