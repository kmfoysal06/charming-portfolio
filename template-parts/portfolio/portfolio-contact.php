<?php
/**
 * Contact Informations For Portfolio Customization Option
 * @package SimpleCharm Portfolio Plugin
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php _e("Contact Informations",'simplecharm-portfolio'); ?></h3>
<div class="portfolio-section portfolio-contact portfolio-section-content">
	<label for="email"><?php _e("Email",'simplecharm-portfolio'); ?></label>
	<input type="email" id="email" class="email" name="simplecharm_portfolio_plugin[email]" value="<?php echo esc_attr($args["email"]);  ?>" autocomplete="false">

	<label for="phone"><?php _e("Mobile","simplecharm-portfolio"); ?></label>
	<input type="tel" id="phone" class="phone" name="simplecharm_portfolio_plugin[phone]" value="<?php echo esc_attr($args["phone"]);  ?>" autocomplete="false">
</div>
</div>