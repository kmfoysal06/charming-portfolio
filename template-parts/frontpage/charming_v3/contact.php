<?php
/**
 * contact form template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$charming_portfolio_portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<!-- CONTACT -->
<section class="charming-portfolio-contact-section" id="contact">
  <div class="contact-left">
    <div class="section-header" style="margin-bottom:32px;">
      <span class="section-number">04</span>
      <h2 class="section-title">Contact</h2>
    </div>
    <p class="contact-tagline">Have a project in mind or want to collaborate? I am open to new opportunities and freelance work.</p>

    <?php $social_links = $args['social_links'] ?? false; ?>

    <div class="contact-social-links">
    <?php if(is_array($social_links) && !empty($social_links)): ?>
      <?php foreach($social_links as $social_link): ?>

        <a href="<?php  echo esc_url($social_link['url']); ?>" class="contact-link" target="_blank" rel="noopener">
          <i class="<?php  echo esc_attr($charming_portfolio_portfolio->get_social_icon_classes(strtolower($social_link['name']))); ?>"></i>
            <?php echo esc_html($social_link['name']); ?>
        </a>
      <?php endforeach; ?>
    <?php endif; ?>
</div>
  </div>

  <div class="contact-right">
    <form class="contact-form">
      <div class="form-group">
        <label class="form-label" for="charming-portfolio-contact-name">Your Name</label>
        <input type="text" id="charming-portfolio-contact-name" class="form-input" placeholder="John Doe" name="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="charming-portfolio-contact-email">Email Address</label>
        <input type="email" id="charming-portfolio-contact-email" class="form-input" placeholder="john@example.com" name="email">
      </div>
      <div class="form-group">
        <label for="charming-portfolio-contact-message" class="form-label">Message</label>
        <textarea class="form-input" id="charming-portfolio-contact-message" placeholder="Tell me about your project..." name="message"></textarea>
      </div>
      <button class="form-submit submit_charming_portfolio_enquiry" type="submit" name="submit">
        Send Message
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </form>
  </div>
</section>
