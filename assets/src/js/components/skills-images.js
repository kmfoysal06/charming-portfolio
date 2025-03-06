/**
 * Special Media Uploader For Skills
 */
(function($) {
    class SimpleCharm_portfolio_Media_Skill {
        constructor() {
            this.init();
        }
        init() {
//picked_image.on('keyup', function(e) {
//if ($(e.keyCode)[0] !== 13) return;
//e.target.click();
//})
	$(document).on("click", ".charming-portfolio-skills.admin img", function(e) {
				let custom_text = "Upload Image for Logo of The Skill";
				const skillImage = $(this);
				const hiddenField = $(this).siblings("input[type=hidden]");
				const queue = hiddenField.data("queue")
				console.log(queue)

      let image = null;
            
            skillImage.off('click').on('click', function(e) {
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
                        skillImage.attr("src", image_url);
                        hiddenField.val(image_url);
                    });
                image.open();
                }
            });
	})
        }
           }
    new SimpleCharm_portfolio_Media_Skill();
})(jQuery);
