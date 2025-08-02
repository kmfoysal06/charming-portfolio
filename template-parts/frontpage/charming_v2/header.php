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
?>
<header class="charming-portfolio-header charming-portfolio-container" role="banner">
    <?php if($site_icon): ?>
    <img src="<?php echo esc_url( $site_icon ); ?>" class="site-icon" alt="site logo" width="auto" height="50px" />
    <?php else: ?>
        <h3><?php echo esc_html( $site_title ); ?></h3>
    <?php endif; ?>
    <ul class="header-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="github.com" class="header-icon">
        <i class="fa-brands fa-github"></i>
    </a>
    <div class="menu-icons">
        <i class="fa-solid fa-bars menu-toggle"></i>
    </div>

</header>