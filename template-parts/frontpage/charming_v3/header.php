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
<nav>
<a href="#" class="nav-logo">
<?php if($site_icon): ?>
    <img src="<?php echo esc_url( $site_icon ); ?>" class="site-icon" alt="site logo" width="auto" height="50px" />
    <?php else: ?>
        <h3><?php echo esc_html( $site_title ); ?></h3>
    <?php endif; ?>
</a>

<?php if(array_key_exists('header_links', $args) && is_array($args['header_links'])): ?>
        <ul class="nav-links">
            <?php foreach($args['header_links'] as $single_link): ?>
                <li><a href="<?php echo esc_url($single_link['url']); ?>"><?php echo esc_html($single_link['name']); ?></a></li>
            <?php endforeach; ?>
        </ul>

  <div class="nav-links-mobile-wrapper">
    <ul class="nav-links-mobile">
        <?php foreach($args['header_links'] as $single_link): ?>
            <li><a href="<?php echo esc_url($single_link['url']); ?>"><?php echo esc_html($single_link['name']); ?></a></li>
        <?php endforeach; ?>
    </ul>
    <div class="header-social-icons">
        <a href="https://github.com/kmfoysal06" target="_blank" class="contact-link" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>/ kmfoysal06
        </a>
    </div>
  </div>
<?php endif; ?>

  <span class="kmf_toggle_menu_icon">
    <span></span>
    <span></span>
    <span></span>
  </span>
  
  <a href="https://github.com/kmfoysal06" target="_blank" class="nav-icon" aria-label="GitHub">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  </a>
  
</nav>
</header>
