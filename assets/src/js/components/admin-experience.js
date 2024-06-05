(function($) {
    class Experience_Section {
        constructor() {
            this.init();
        }
        init() {
            this.handleWorking();
        }
        handleWorking() {
            const experience_section = $(".simplecharm-portfolio-experience"),
                end_date = experience_section.find('.end_date'),
 	           	still_working = experience_section.find('.working');
    	        still_working.each(function(index, element) {
                $(element).on("change", function(e) {
                    $(this).parents("tr").find('.end_date').prop('disabled', e.target.checked);
                });
            });
        }
    }
   	new Experience_Section();
})(jQuery);