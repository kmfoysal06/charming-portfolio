<?php
/**
 * Contact Informations For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php esc_html_e("Contact Informations",'charming-portfolio'); ?></h3>
<div class="portfolio-section portfolio-contact portfolio-section-content">
	<label for="email"><?php esc_html_e("Email",'charming-portfolio'); ?></label>
	<input type="email" id="email" class="email" name="CHARMING_PORTFOLIO[email]" value="<?php echo esc_attr($args["email"]);  ?>" autocomplete="false">

	<label for="phone"><?php esc_html_e("Mobile","charming-portfolio"); ?></label>
	<input type="tel" id="phone" class="phone" name="CHARMING_PORTFOLIO[phone]" value="<?php echo esc_attr($args["phone"]);  ?>" autocomplete="false" minlength="11" maxlength="18">
</div>
</div>