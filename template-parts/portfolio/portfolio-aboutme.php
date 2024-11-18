<?php
/**
 * About Me Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php esc_html_e("About Me:",'charming-portfolio'); ?></h3>
<div class="portfolio-section portfolio-aboutme portfolio-section-content">
	<label for="description"><?php esc_html_e("Description:",'charming-portfolio'); ?></label>
	<textarea id="description" class="description" name="CHARMING_PORTFOLIO[description]" maxlength="800"><?php echo esc_textarea($args["description"]) ?></textarea>
	<span></span>
	<input id="image2" class="CHARMING_PORTFOLIO_user_image2" type="hidden" name="CHARMING_PORTFOLIO[image_2]" value="<?php echo esc_url($args["user_image2"]); ?>">
	<img class="simplecharm-portfolio-user-image2" id="simplecharm-portfolio-user-image2" src="<?php echo esc_url($args["user_image2"]); ?>" width="100%" tabindex="0">
</div>
</div>