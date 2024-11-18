/**
 * Toggle Portfolio Customization Section Template
 */
(function($) {
    $('.portfolio-section-toggle').click(function(){
            $(this).siblings('.portfolio-section-content').slideToggle('slow');
        });
})(jQuery)
