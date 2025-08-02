<?php
/**
 * hero section template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<div class="charming-portfolio-container charming-portfolio-hero-section">
    <div class="hero-text hero__inner">
        <h2>Hello, I am <span class="highlight"><?php echo esc_html($args['name']) ?></span></h2>
        <p class="short-description"><?php echo 
            wp_kses(CHARMING_PORTFOLIO_special_tag($args['description']), array(
                'b' => [],
                'br' => [],
            ));
        ?></p>
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/partials/social_links", "", $args);?>
    </div>
    <div class="hero-image hero__inner">
        <img src="<?php echo esc_url($args['user_image']); ?>" alt="<?php echo esc_attr($args['name']) ?>" width="400px" height="auto" />
    </div>
</div>