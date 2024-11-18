<?php
/**
 * Footer Template For Front Page
 * @package Charming Portfolio
 */
if (!defined('ABSPATH')) {
    exit;
}
?>
<section class="home-footer w-full bg-gray-400 text-white py-3 text-center shadow-2xl my-2">
<footer role="contentinfo" class="charming-portfolio-footer footer-inner flex flex-col justify-center gap-3">
			<div class="badge badge-neutral p-2 self-center"><?php esc_html_e("Get in Touch", "charming-portfolio");?></div>
			<div class="footer-text">
				<p>
					<?php
						printf(
						    wp_kses(
						        __("What’s next? Feel free to reach out to me if you're looking for <br> a developer, have a query, or simply want to connect.", 'charming-portfolio'), 
						        [
						        	'br' => []
						        ]
						    )
						);
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
				<p><?php esc_html_e("You may also find me on these platforms!", "charming-portfolio");?></p>
				<div class="social-link flex gap-3 my-2 justify-center">
				    <?php CHARMING_PORTFOLIO_link_social_frontend($args['social_links'], 10);?>
				</div>
			</div>
		</footer>
	</section>
</div>
		<div class="simplecharm-portfolio-bottom-alert" id="simplecharm-portfolio-bottom-alert"></div>

	</main>
	<?php wp_footer();?>
</body>
</html>