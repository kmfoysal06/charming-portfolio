<?php
/**
 * experiences template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$charming_portfolio_experiences = $args['experiences'] ?? false;
?>
<?php if(is_array($charming_portfolio_experiences) && !empty($charming_portfolio_experiences)): ?>
<!-- EXPERIENCE -->
<section class="experience-section">
  <div class="section-header">
    <span class="section-number"><?php echo esc_html_e("03", "charming-portfolio") ?></span>
    <h2 class="section-title"><?php echo esc_html_e("Experience", "charming-portfolio") ?></h2>
    <div class="section-line"></div>
  </div>

  <div class="timeline">

    <?php foreach($charming_portfolio_experiences as $exp): ?>
      <div class="timeline-item">
        <div class="timeline-year">
            <?php
                $end_date = $exp['working'] ? __("Present", "charming-portfolio") : $exp['end_date'];
            ?>
          <?php echo esc_html($exp['start_date']); ?>-<?php echo esc_html($end_date); ?>
        </div>

        <div class="timeline-role">
          <?php echo esc_html($exp['post-title']); ?>
        </div>

        <div class="timeline-org">
          <?php echo esc_html($exp['institution']); ?>
        </div>

        <div class="timeline-desc">
            <?php echo wp_kses_post($exp['responsibility']); ?>
        </div>
      </div>
    <?php endforeach; ?>

  </div>
</section>
<?php endif; ?>
