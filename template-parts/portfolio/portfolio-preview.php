<?php
/**
 * Preview All Update About Portfolio in a Basic Template
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper">
	<h2 class="portfolio-section-toggle"><?php _e("Your Informations are Here:-","charming-portfolio"); ?></h2>
	<div class="page-contents portfolio-section-content">
		<div class="portfolio-intro">
			<p><?php
			// translators: Full Name
				printf(
				    __( 'Name: %s.', 'charming-portfolio' ),
				    esc_html($args['name'])
				);
				?>
			</p>
			<p>
				<?php
				// translators: Image URL
				printf(wp_kses(__('Image:- <img src="%s" width="100px">','charming-portfolio'),['img'=>['src'=>[],'width'=>array()]]),esc_url($args['user_image']));
				?>
			</p>
			<p>
				<?php
				// translators: Image URL
				printf(wp_kses(__('2nd Image:- <img src="%s" width="100px">','charming-portfolio'),['img'=>['src'=>[],'width'=>array()]]),esc_url($args['user_image2']));
				?>
			</p>
			<p>
				<?php
				// translators: Email Address
				printf(
				    __( 'Mail: %s.', 'charming-portfolio' ),
				    esc_html($args['email'])
				);
				?>
			</p>
			<p>
				<?php
				// translators: Phone Number
				printf(
				    __( 'Phone: %s.', 'charming-portfolio' ),
				    esc_html($args['phone'])
				);
				?>
			</p>
			<p>
				<?php
				// translators: Short Description
				printf(
				    __( 'Short Description: %s.', 'charming-portfolio' ),
				    esc_html($args['short_description'])
				);
				?>
			</p>
			<p>
				<?php
				// translators: Description
				printf(
				    __( 'Description: %s.', 'charming-portfolio' ),
				    esc_html($args['description'])
				);
				?>
			</p>
			<p>
				<?php
				// translators: Address
				printf(
				    __( 'Address: %s.', 'charming-portfolio' ),
				    esc_html($args['address'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: is available for new projects. true or false
				    __( 'Available: %s.', 'charming-portfolio' ),
				    esc_html($args['available'])
				);
				?>
			</p>
			<p>
			<?php
				ob_start(); // Start output buffering
				CHARMING_PORTFOLIO_link_social($args['social_links']); // Call the function that echoes social links
				$social_links_output = ob_get_clean(); // Capture the echoed output
				_e("Social Links:- ", "charming-portfolio");
				echo wp_kses($social_links_output,[
					'a' => [
						'href' => []
					]
				]);
			?>

			</p>
			<p>
				<?php
				// translators: List of Skills
				printf(
				    __( 'Skills: %s.', 'charming-portfolio' ),
				    esc_html(implode(', ',$args['skills']))
				);
				?>
			</p>
			<p>
				<?php
				// translators: List of Experiences.(Comphany Name)
				printf(
				    __( 'Experiences: %s.', 'charming-portfolio' ),
				    esc_html(implode(', ',CHARMING_PORTFOLIO_experience_admin($args['experiences'])))
				);
				?>
			</p>
			<p>
				<?php
				// translators: List of Projects.(Project Name)
				printf(
				    __( 'Works: %s.', 'charming-portfolio' ),
				    esc_html(implode(', ',CHARMING_PORTFOLIO_works_admin($args['works'])))
				);
				?>
			</p>
		</div>
	</div>
</div>