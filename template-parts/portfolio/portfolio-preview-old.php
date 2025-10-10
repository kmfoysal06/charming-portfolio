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
    <div class="portfolio-section-toggle-wrapper">
	<h2 class="portfolio-section-toggle"><?php esc_html_e("Your Informations are Here:-","charming-portfolio"); ?></h2>
    <input type="text" value="[charming_portfolio_render_portfolio]" disabled />
    </div>
	<div class="page-contents portfolio-section-content">
		<div class="portfolio-intro">
			<p><?php
				printf(
					// translators: Full Name
				    esc_html__( 'Name: %s.', 'charming-portfolio' ),
				    esc_html($args['name'])
				);
				?>
			</p>
			<p class="portfolio-fields-has-image">
				<?php
				printf(
					wp_kses(
					// translators: Image URL
						__('Image:- <img src="%s" width="100px">','charming-portfolio'),['img'=>['src'=>[],'width'=>array()]]),esc_url($args['user_image']
					)
				);
				?>
			</p>
			<p class="portfolio-fields-has-image">
				<?php
				printf(
					wp_kses(
						// translators: Image URL
						__('2nd Image:- <img src="%s" width="100px">','charming-portfolio'),['img'=>['src'=>[],'width'=>array()]]),esc_url($args['user_image2']
					)
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: Email Address
				    esc_html__( 'Mail: %s.', 'charming-portfolio' ),
				    esc_html($args['email'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: Phone Number
				    esc_html__( 'Phone: %s.', 'charming-portfolio' ),
				    esc_html($args['phone'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: Short Description
				    esc_html__( 'Short Description: %s.', 'charming-portfolio' ),
				    esc_html($args['short_description'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: Description
				    esc_html__( 'Description: %s.', 'charming-portfolio' ),
				    esc_html($args['description'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: Address
				    esc_html__( 'Address: %s.', 'charming-portfolio' ),
				    esc_html($args['address'])
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: is available for new projects. true or false
				    esc_html__( 'Available: %s.', 'charming-portfolio' ),
				    esc_html(intval($args['available']) === 1 ? 'Yes' : 'No')
				);
				?>
			</p>
			<p>
			<?php
				ob_start(); // Start output buffering
				CHARMING_PORTFOLIO_link_social($args['social_links']); // Call the function that echoes social links
				$social_links_output = ob_get_clean(); // Capture the echoed output
				esc_html_e("Social Links:- ", "charming-portfolio");
				echo wp_kses($social_links_output,[
					'a' => [
						'href' => [],
						'target' => []
					]
				]);
			?>

			</p>
            <p>
				<?php
                    $header_links = $args['header_links'];
                    $header_links_output = '';
                    foreach ($header_links as $header_link) {
                            $header_links_output .= '<a href="' . esc_attr(is_array($header_link['url']) ? implode('', $header_link['url']) : $header_link['url']) . '" target="_blank">' . esc_attr(is_array($header_link['name']) ? implode('', $header_link['name']) : $header_link['name']) . '</a> ';
                        }
				esc_html_e("Header Links:- ", "charming-portfolio");
				echo wp_kses($header_links_output,[
					'a' => [
						'href' => [],
						'target' => []
					]
				]);

				?>
			</p>
            <p>
				<?php
                    $footer_links = $args['footer_links'];
                    $footer_links_output = '';
                    foreach ($footer_links as $footer_link) {
                            $footer_links_output .= '<a href="' . esc_attr(is_array($footer_link['url']) ? implode('', $footer_link['url']) : $footer_link['url']) . '" target="_blank">' . esc_attr(is_array($footer_link['name']) ? implode('', $footer_link['name']) : $footer_link['name']) . '</a> ';
                        }
				esc_html_e("Header Links:- ", "charming-portfolio");
				echo wp_kses($footer_links_output,[
					'a' => [
						'href' => [],
						'target' => []
					]
				]);

				?>
			</p>
			<p>
				<?php
				printf(
					// translators: List of Skills
				    esc_html__( 'Skills: %s.', 'charming-portfolio' ),
		            esc_html(
		              implode(", ", array_map(function($skill){
		                return $skill['name'];
		              }, $args['skills']))
		            )
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: List of Experiences.(Comphany Name)
				    esc_html__( 'Experiences: %s.', 'charming-portfolio' ),
				    esc_html(implode(', ',CHARMING_PORTFOLIO_experience_admin($args['experiences'])))
				);
				?>
			</p>
			<p>
				<?php
				printf(
					// translators: List of Projects.(Project Name)
				    esc_html__( 'Works: %s.', 'charming-portfolio' ),
				    esc_html(implode(', ',CHARMING_PORTFOLIO_works_admin($args['works'])))
				);
				?>
			</p>
		</div>
	</div>
</div>
