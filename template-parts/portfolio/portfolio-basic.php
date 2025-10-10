<?php
/**
 * Basic Settings Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
        <h3 class="portfolio-section-toggle"><?php esc_html_e("Basic Informations:",'charming-portfolio'); ?></h3>
		<div class="portfolio-section portfolio-intro portfolio-section-content">
        <label for="enable"><?php esc_html_e("Enable Portfolio :",'charming-portfolio'); ?>
            <span class="dashicons dashicons-editor-help charming-portfolio-help-icon" data-title="<?php esc_attr_e("The Home Page of The Site Will Be Transformed Into The Portfolio", "charming-portfolio"); ?>"></span>
        </label>
	<div class="switch-btn-wrapper">
		<input type="checkbox" id="enable" class="portfolio-enabled" name="CHARMING_PORTFOLIO[enabled]" <?php echo esc_html(checked($args["enabled"] ?? '0', '1'));  ?>>
		<div class="switch-btn">
            <span></span>
		</div>
	</div>

	<label for="enable-blog"><?php esc_html_e("Show Blogs Section (Beta)",'charming-portfolio'); ?></label>
	<div class="switch-btn-wrapper">
		<input type="checkbox" id="enable-blog" class="portfolio-enabled-blog" name="CHARMING_PORTFOLIO[enabled_blog]" <?php echo esc_html(checked($args["enabled_blog"] ?? '0', '1'));  ?>>
		<div class="switch-btn">
			<span></span>
		</div>
	</div>

        <label for="enable-contact-mailing"><?php esc_html_e("Send Mail on Contact Enquiry Submission.",'charming-portfolio'); ?>

            <span class="dashicons dashicons-editor-help charming-portfolio-help-icon" data-title="<?php esc_attr_e("The email will sent to you in the email address you provide bellow.", "charming-portfolio"); ?>"></span>
        </label>
	<div class="switch-btn-wrapper">
		<input type="checkbox" id="enable-contact-mailing" class="portfolio-enabled-contact-mailing" name="CHARMING_PORTFOLIO[enable_contact_mailing]" <?php echo esc_html(checked($args["contact_mailing_enabled"] ?? '0', '1'));  ?>>
		<div class="switch-btn">
			<span></span>
		</div>
	</div>

        <label for="shortcode"><?php esc_html_e("Shortcode to render the portfolio:",'charming-portfolio'); ?>
            <span class="dashicons dashicons-editor-help charming-portfolio-help-icon" data-title="<?php esc_attr_e("Use this shortcode in any page, post or anywhere possible. the portfolio will rendered instead.", "charming-portfolio"); ?>"></span>
        </label>
	<input type="text" id="shortcode" class="shortcode" name="CHARMING_PORTFOLIO[name]" value="[charming_portfolio_render_portfolio]" disabled>

	<label for="name"><?php esc_html_e("Name:",'charming-portfolio'); ?></label>
	<input type="text" id="name" class="user-name" name="CHARMING_PORTFOLIO[name]" value="<?php echo esc_html($args["name"])  ?>" autocomplete="false" minlength="2" maxlength="30">
    <label for="designation"><?php esc_html_e("Designation:",'charming-portfolio'); ?></label>
	<input type="text" id="designation" class="user-designation" name="CHARMING_PORTFOLIO[designation]" value="<?php echo esc_html($args['designation'] ?? 'Ununemployed') ?? 'Ununemployed'  ?>" autocomplete="false" minlength="2" maxlength="30">

	<span></span>
	<input id="image" class="CHARMING_PORTFOLIO_user_image" type="hidden" name="CHARMING_PORTFOLIO[image]" value="<?php echo esc_url($args["user_image"]);  ?>">
	<img class="simplecharm-portfolio-user-image" id="simplecharm-portfolio-user-image" src="<?php echo esc_url($args["user_image"]);  ?>" width="100%" tabindex="0">

	<label for="short-description"><?php esc_html_e("Short Description:",'charming-portfolio'); ?></label>
	<textarea id="short-description" class="short-description" name="CHARMING_PORTFOLIO[short_description]" maxlength="200"><?php echo esc_textarea($args["short_description"])  ?></textarea>
	<label for="address"><?php esc_html_e("Address:",'charming-portfolio'); ?></label>
	<input type="text" id="address" class="user-address" name="CHARMING_PORTFOLIO[address]" value="<?php echo esc_html($args["address"])  ?>" autocomplete="false">
	<label for="available"><?php esc_html_e("Available:",'charming-portfolio'); ?></label>
	<div class="switch-btn-wrapper">
		<input type="checkbox" id="available" class="user-available" name="CHARMING_PORTFOLIO[available]" <?php echo esc_html(checked($args["available"], '1'));  ?>>
		<div class="switch-btn">
            <span></span>
		</div>
	</div>
</div>
</div>
