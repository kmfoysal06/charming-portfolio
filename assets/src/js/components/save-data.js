(function($) {
    class Save_Data {
        constructor() {
            this.init();
        }
        init() {
           const saveButton = $(".charming-portfolio-save-data"); 
            saveButton.on('click', function(e) {
                e.preventDefault();
                const enabled = $(".portfolio-enabled");
                const blogEnabled = $(".portfolio-enabled-blog");
                const name = $(".user-name");
                const imagePrimary = $(".CHARMING_PORTFOLIO_user_image");
                const shortDescription = $(".short-description");
                const userAddress = $(".user-address");
                const userAvailable = $(".user-available");
                const description = $(".description");
                const imageSecondary = $(".CHARMING_PORTFOLIO_user_image_2");
                const mail = $(".email");
                const phone = $(".phone");

                const data = new FormData();
                data.append('action', 'charming_portfolio_save_data')
                data.append('nonce', charming_portfolio_admin.nonce);
                data.append('enabled', enabled.is(':checked') ? '1' : '0');
                data.append('blog_enabled', blogEnabled.is(':checked') ? '1' : '0');
                data.append('name', name.val());
                data.append('image', imagePrimary.val());
                data.append('short_description', shortDescription.val());
                data.append('address', userAddress.val());
                data.append('available', userAvailable.is(':checked') ? '1' : '0');
                data.append('description', description.val());
                data.append('image2', imageSecondary.val());
                data.append('email', mail.val());
                data.append('phone', phone.val());

                // get social links 
                const socialLinks = [];
                $(".social_links").each(function() {
                    const name = $(this).find(".name").val();
                    const url = $(this).find(".url").val();
                    if (name && url) {
                        socialLinks.push({
                            name: name,
                            url: url
                        });
                    }
                });
                data.append('social_links', JSON.stringify(socialLinks));

                const updateBtnWrapper = $(".btn-wrapper");
                updateBtnWrapper.addClass("loading");
                updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", true);
                updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.saving);
                
                const response = $.ajax({
                    url: charming_portfolio_admin.ajax_url,
                    type: 'POST',
                    data: data,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        if (response.success) {
                            const data = response.data;
                            updateBtnWrapper.removeClass("loading");
                            updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", false);
                            updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save);
                            CharmAlert.showAlert("Updated", 'success');
                        } else {
                            updateBtnWrapper.removeClass("loading");
                            updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", false);
                            updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save);
                            
                            CharmAlert.showAlert("Error updating", 'error');
                        }
                    },
                    error: function() {
                        updateBtnWrapper.removeClass("loading");
                        updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", false);
                        updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save);
                        
                        CharmAlert.showAlert("Error updating", 'error');
                    }
                });
            })
        }
    }
   	new Save_Data();
})(jQuery);
