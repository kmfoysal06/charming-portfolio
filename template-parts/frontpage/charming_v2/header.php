<?php
/**
 * header template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$site_icon = get_site_icon_url();
$site_title = get_bloginfo('name');
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
// var_dump($args['header_links']);
// die;
?>
<header class="charming-portfolio-header charming-portfolio-container" role="banner">
    <?php if($site_icon): ?>
    <img src="<?php echo esc_url( $site_icon ); ?>" class="site-icon" alt="site logo" width="auto" height="50px" />
    <?php else: ?>
        <h3><?php echo esc_html( $site_title ); ?></h3>
    <?php endif; ?>
    <?php if(array_key_exists('header_links', $args) && is_array($args['header_links'])): ?>
        <ul class="header-nav">
            <?php foreach($args['header_links'] as $single_link): ?>
                <li><a href="<?php echo esc_url($single_link['url']); ?>"><?php echo esc_html($single_link['name']); ?></a></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
    <a href="github.com" class="header-icon">
        <i class="fa-brands fa-github"></i>
    </a>
    <div class="menu-icons">
        <i class="fa-solid fa-bars menu-toggle"></i>
    </div>

</header>