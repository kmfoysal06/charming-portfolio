<?php
/**
 * Footer Template For Front Page
 * @package Simplecharm Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="footer-inner flex flex-col justify-center gap-3">
			<div class="badge badge-neutral p-2 self-center"><?php _e("Get in Touch","simplecharm-portfolio"); ?></div>
			<div class="footer-text">
				<p>
					<?php
					_e("What’s next? Feel free to reach out to me if you're looking for <br> a developer, have a query, or simply want to connect.","simplecharm-portfolio");
					?>
				</p>
			</div>
			<div class="footer-mail flex justify-center items-center gap-x-3">
				<span class="dashicons dashicons-email"></span>
				<h2 class="text-lg md:text-xl lg:text-xl line-break-anywhere"><?php echo esc_html($args["email"]); ?></h2>
				<button class="simplecharm-portfolio-copy-mail simplecharm-portfolio-button-hover"><span class="dashicons dashicons-clipboard cursor-pointer"></span></button>
			</div>
			<div class="footer-phone flex justify-center items-center gap-x-3">
				<span class="dashicons dashicons-smartphone"></span>
				<h2 class="text-lg md:text-xl lg:text-xl line-break-anywhere"> <?php echo esc_html($args["phone"]); ?> </h2>
				<button class="simplecharm-portfolio-copy-phone simplecharm-portfolio-button-hover"><span class="dashicons dashicons-clipboard cursor-pointer"></span></button>
			</div>
			<div class="footer-social-links">
				<p><?php _e("You may also find me on these platforms!","simplecharm-portfolio"); ?></p>
				<div class="social-link flex gap-3 my-2 justify-center">
				    <?php simplecharm_portfolio_plugin_link_social_frontend($args['social_links'],10); ?>
				</div>
			</div>
		</div>
		<div class="simplecharm-portfolio-bottom-alert" id="simplecharm-portfolio-bottom-alert"></div>