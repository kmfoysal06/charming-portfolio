<?php
/**
 * footer template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
?>
<footer role="contentinfo" class="charming-portfolio-footer">
  <p class="footer-copy"><?php echo esc_html(gmdate("Y")); ?> <span><?php echo esc_html($args['name']) ?></span> — All rights reserved</p>
  <a href="#" class="footer-back">
    Back to top
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  </a>
</footer>
