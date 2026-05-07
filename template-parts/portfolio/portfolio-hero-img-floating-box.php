<?php
/**
 * Hero Image Floating Box Template For Portfolio Customization Option
 *
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php esc_html_e("Hero Image Floating Box (for v3+)",'charming-portfolio'); ?></h3>
    <div class="portfolio-section portfolio-section-content">
    	<div class="flex justify-between">
            <label for="primary-statbox-content"><?php esc_html_e("Primary State Box Content:",'charming-portfolio'); ?>

                <span class="dashicons dashicons-editor-help charming-portfolio-help-icon" data-title="<?php esc_attr_e("This field is recommended if you are using layout v3 as its used to highlight any of your achivement, experience, etc in hero section. Please check by adding dummy value and visitng the portfolio to understand the work of this field", "charming-portfolio"); ?>"></span>
            </label>
            <input id="primary-statbox-content" class="primary-statbox-content" type="text" name="CHARMING_PORTFOLIO[primary-statbox-content]" maxlength="6" placeholder="<?php _e("eg: 2+, 200+ etc", "charming-portfolio"); ?>" value="<?php echo esc_attr(isset($args["primary_statbox_content"]) ? $args["primary_statbox_content"] : '') ?>">
        </div>
    	<div class="flex justify-between">
            <label for="primary-statbox-label"><?php esc_html_e("Primary State Box Label:",'charming-portfolio'); ?>

                <span class="dashicons dashicons-editor-help charming-portfolio-help-icon" data-title="<?php esc_attr_e("This field is recommended if you are using layout v3 as its used to highlight any of your achivement, experience, etc in hero section. Please check by adding dummy value and visitng the portfolio to understand the work of this field", "charming-portfolio"); ?>"></span>
            </label>
            <input id="primary-statbox-label" class="primary-statbox-label" type="text" name="CHARMING_PORTFOLIO[primary-statbox-label]" maxlength="20" placeholder="<?php _e("eg: Years Exp, Project Completed etc.", "charming-portfolio"); ?>" value="<?php echo esc_attr(isset($args["primary_statbox_label"]) ? $args["primary_statbox_label"] : '') ?>">
        </div>


    </div>
</div>
