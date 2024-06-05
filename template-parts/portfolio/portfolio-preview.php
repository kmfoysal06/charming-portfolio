<?php
/**
 * Preview All Update About Portfolio in a Basic Template
 * @package Simplecharm Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h2 class="portfolio-section-toggle"><?php _e("Your Informations are Here:-","simplecharm-portfolio"); ?></h2>
	<div class="page-contents portfolio-section-content">
		<div class="portfolio-intro">
			<p><?php
				printf(
				    __( 'Name: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['name'])
				);
				?>
			</p>
			<p>
				<?php
				printf(wp_kses(__('Image:- <img src="%s" width="100px">','simplecharm-portfolio'),['img'=>['src'=>[],'width'=>array()]]),esc_url($args['user_image']));
				?>
			</p>
			<p>
				<?php
				printf(wp_kses(__('2nd Image:- <img src="%s" width="100px">','simplecharm-portfolio'),['img'=>['src'=>[],'width'=>array()]]),esc_url($args['user_image2']));
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Mail: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['email'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Phone: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['phone'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Short Description: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['short_description'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Description: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['description'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Address: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['address'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Available: %s.', 'simplecharm-portfolio' ),
				    esc_html($args['available'])
				);
				?>
			</p>
			<p>
			<?php
				ob_start(); // Start output buffering
				simplecharm_portfolio_plugin_link_social($args['social_links']); // Call the function that echoes social links
				$social_links_output = ob_get_clean(); // Capture the echoed output
				_e("Social Links:- ", "simplecharm-portfolio");
				echo wp_kses($social_links_output,[
					'a' => [
						'href' => []
					]
				]);
			?>

			</p>
			<p>
				<?php
				printf(
				    __( 'Skills: %s.', 'simplecharm-portfolio' ),
				    esc_html(implode(', ',$args['skills']))
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Experiences: %s.', 'simplecharm-portfolio' ),
				    esc_html(implode(', ',simplecharm_portfolio_plugin_experience_admin($args['experiences'])))
				);
				?>
			</p>
			<p>
				<?php
				printf(
				    __( 'Works: %s.', 'simplecharm-portfolio' ),
				    esc_html(implode(', ',simplecharm_portfolio_plugin_works_admin($args['works'])))
				);
				?>
			</p>
		</div>
	</div>
</div>