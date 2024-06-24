/**
 * Media Uploader
 */
(function($) {
    class SimpleCharm_portfolio_Media {
        constructor() {
            this.init();
        }
        init() {
            this.mediaUploader('simplecharm-portfolio-user-image', "CHARMING_PORTFOLIO_user_image","Upload Image");
            this.mediaUploader('simplecharm-portfolio-user-image2', "CHARMING_PORTFOLIO_user_image2", "Upload Another Image");
        }
        mediaUploader(picked_image, hidden_field,custom_text = 'Upload Image') {
            let image = null;
            $(`.${picked_image}`).on('keyup', function(e) {
                if ($(e.keyCode)[0] !== 13) return;
                e.target.click();
            })
            $(`.${picked_image}`).off('click').on('click', function(e) {
                e.preventDefault();
                 if(wp.media){
                    wp.media.view.Modal.prototype.on('close',function(){
                        const existingModal = $(".media-modal");
                        if(existingModal){
                            existingModal.remove();
                        }
                    })
                    image = wp.media({
                        title: custom_text,
                        multiple: false, // Set to true if you want to upload multiple files at once
                        library: {
                            type: 'image' // Only load image files
                        }
                    }).open().on('select', function() {
                        // This will return the selected image from the Media Uploader, the result is an object
                        let uploaded_image = image.state().get('selection').first();
                        // Convert uploaded_image to a JSON object to make accessing it easier
                        let image_url = uploaded_image.toJSON().url;
                        // Assign the url value to the image and hidden input field
                        $(`.${picked_image}`).attr("src", image_url);
                        $(`.${hidden_field}`).val(image_url);
                    });
                image.open();
                //  if (wp.media) {
                //     wp.media.view.Modal.prototype.on('open', function(data) {
                //         if(wp.media.frame.modal.clickedOpenerEl){
                //          jQuery( '.media-modal' ).remove();
                //         }
                //     });
                // }
                }
            });
        }
    }
    new SimpleCharm_portfolio_Media();
})(jQuery);