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


                console.log("saved")
            })
        }
    }
   	new Save_Data();
})(jQuery);
