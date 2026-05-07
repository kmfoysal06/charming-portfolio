<?php
/**
 * State Boxes Template For Portfolio Customization Option
 *
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php esc_html_e("Stat Boxes",'charming-portfolio'); ?></h3>
    <div class="portfolio-section portfolio-statboxes portfolio-section-content flex flex-row justify-between">
    	<div class="portfolio-section portfolio-statboxes portfolio-section-content column-half p-0">
    	    <label for="primary-statbox-content"><?php esc_html_e("Primary State Box Content:",'charming-portfolio'); ?></label>
            <input id="primary-statbox-content" class="primary-statbox-content" name="CHARMING_PORTFOLIO[primary-statbox-content]" maxlength="6" placeholder="<?php _e("eg: 2+, 200+ etc", "charming-portfolio"); ?>" value="<?php echo esc_attr(isset($args["primary_statbox_content"]) ? $args["primary_statbox_content"] : '') ?>">
        </div>
    	<div class="portfolio-section portfolio-statboxes portfolio-section-content column-half p-0">
    	    <label for="primary-statbox-label"><?php esc_html_e("Primary State Box Label:",'charming-portfolio'); ?></label>
            <input id="primary-statbox-label" class="primary-statbox-label" name="CHARMING_PORTFOLIO[primary-statbox-label]" maxlength="20" placeholder="<?php _e("eg: Years Exp, Project Completed etc.", "charming-portfolio"); ?>" value="<?php echo esc_attr(isset($args["primary_statbox_label"]) ? $args["primary_statbox_label"] : '') ?>">
        </div>


    </div>
</div>
