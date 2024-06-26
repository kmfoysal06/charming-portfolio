<?php
/**
 * Basic Settings Template For Portfolio Customization Option
 * @package SimpleCharm Portfolio Plugin
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php _e("Basic Informations:",'charming-portfolio'); ?></h3>
<div class="portfolio-section portfolio-intro portfolio-section-content">
	<label for="name"><?php _e("Name:",'charming-portfolio'); ?></label>
	<input type="text" id="name" class="user-name" name="CHARMING_PORTFOLIO[name]" value="<?php echo esc_html($args["name"])  ?>" autocomplete="false">
	<span></span>
	<input id="image" class="CHARMING_PORTFOLIO_user_image" type="hidden" name="CHARMING_PORTFOLIO[image]" value="<?php echo esc_url($args["user_image"]);  ?>">
	<img class="simplecharm-portfolio-user-image" id="simplecharm-portfolio-user-image" src="<?php echo esc_url($args["user_image"]);  ?>" width="100%" tabindex="0">

	<label for="short-description"><?php _e("Short Description:",'charming-portfolio'); ?></label>
	<textarea id="short-description" class="short-description" name="CHARMING_PORTFOLIO[short_description]"><?php echo esc_textarea($args["short_description"])  ?></textarea>
	<label for="address"><?php _e("Address:",'charming-portfolio'); ?></label>
	<input type="text" id="address" class="user-address" name="CHARMING_PORTFOLIO[address]" value="<?php echo esc_html($args["address"])  ?>" autocomplete="false">
	<label for="available"><?php _e("Available:",'charming-portfolio'); ?></label>
	<input type="checkbox" id="available" class="user-available" name="CHARMING_PORTFOLIO[available]" <?php echo esc_html(checked($args["available"], 'True'));  ?>>
</div>
</div>