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
	<label for="name"><?php esc_html_e("Name:",'charming-portfolio'); ?></label>
	<input type="text" id="name" class="user-name" name="CHARMING_PORTFOLIO[name]" value="<?php echo esc_html($args["name"])  ?>" autocomplete="false" minlength="2" maxlength="30">
	<span></span>
	<input id="image" class="CHARMING_PORTFOLIO_user_image" type="hidden" name="CHARMING_PORTFOLIO[image]" value="<?php echo esc_url($args["user_image"]);  ?>">
	<img class="simplecharm-portfolio-user-image" id="simplecharm-portfolio-user-image" src="<?php echo esc_url($args["user_image"]);  ?>" width="100%" tabindex="0">

	<label for="short-description"><?php esc_html_e("Short Description:",'charming-portfolio'); ?></label>
	<textarea id="short-description" class="short-description" name="CHARMING_PORTFOLIO[short_description]" maxlength="200"><?php echo esc_textarea($args["short_description"])  ?></textarea>
	<label for="address"><?php esc_html_e("Address:",'charming-portfolio'); ?></label>
	<input type="text" id="address" class="user-address" name="CHARMING_PORTFOLIO[address]" value="<?php echo esc_html($args["address"])  ?>" autocomplete="false">
	<label for="available"><?php esc_html_e("Available:",'charming-portfolio'); ?></label>
	<input type="checkbox" id="available" class="user-available" name="CHARMING_PORTFOLIO[available]" <?php echo esc_html(checked($args["available"], 'True'));  ?>>
</div>
</div>