<?php
/**
 * hero section template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$charming_portfolio_statbox_label = isset($args['primary_statbox_label']) ? $args['primary_statbox_label'] : '';
$charming_portfolio_statbox_content = isset($args['primary_statbox_content']) ? $args['primary_statbox_content'] : '';
?>
<!-- HERO -->
<section class="hero" id="about">
  <div class="hero-left">
    <p class="hero-eyebrow"><?php echo esc_html($args['designation']) ?></p>
    <h1 class="hero-name"><?php echo esc_html($args['name']) ?></h1>
    <p class="hero-bio"><?php echo esc_html($args['description']) ?></p>
    <div class="hero-actions">
      <a href="#contact" class="btn-primary">
        Hire Me
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#projects" class="btn-ghost">See Work</a>
    </div>
  </div>

  <div class="hero-right">
    <div class="hero-image-wrap">
      <div class="hero-image-placeholder">
        <img src="<?php echo esc_url($args['user_image']); ?>" alt="<?php echo esc_attr($args['name']); ?>" class="hero-image">
      </div>
      <div class="hero-badge">
        <?php if($charming_portfolio_statbox_content && $charming_portfolio_statbox_label) : ?>
          <strong><?php echo esc_html($charming_portfolio_statbox_content); ?></strong>
          <span><?php echo esc_html($charming_portfolio_statbox_label); ?></span>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>
