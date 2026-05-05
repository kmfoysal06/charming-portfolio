<?php
/**
 * experiences template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$experiences = $args['experiences'] ?? false;
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<?php if(is_array($experiences) && !empty($experiences)): ?>
<!-- EXPERIENCE -->
<section class="experience-section">
  <div class="section-header">
    <span class="section-number"><?php _e("03", "charming-portfolio") ?></span>
    <h2 class="section-title"><?php _e("Experience", "charming-portfolio") ?></h2>
    <div class="section-line"></div>
  </div>

  <div class="timeline">

    <?php foreach($experiences as $exp): ?>
      <div class="timeline-item">
        <div class="timeline-year">
            <?php
                $end_date = $exp['working'] ? __("Present") : $exp['end_date'];
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
          <?php echo wp_kses(CHARMING_PORTFOLIO_special_tag($exp['responsibility']), array(
            'b' => [],
            'br' => [],
          )); ?>
        </div>
      </div>
    <?php endforeach; ?>

  </div>
</section>
<?php endif; ?>
