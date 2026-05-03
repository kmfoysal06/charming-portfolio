<?php
/**
 * social links template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$social_links = $args['social_links'] ?? false;
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<?php if(is_array($social_links)): ?>
    <ul class="charming-portfolio-social-links">
        <?php foreach($social_links as $social_link): ?>
        <li><a href="<?php  echo esc_url($social_link['url']); ?>"><i class="<?php  echo esc_attr($portfolio->get_social_icon_classes($social_link['name'])); ?>"></i></a></li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>