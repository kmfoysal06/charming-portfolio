<?php
/**
 * projects template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$projects = $args['works'] ?? false;
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
if(is_array($projects) && !empty($projects)):
?>
<!-- EXPERIENCE -->
<section class="experience-section">
  <div class="section-header">
    <span class="section-number">03</span>
    <h2 class="section-title">Experience</h2>
    <div class="section-line"></div>
  </div>

  <div class="timeline">

    <?php foreach($experiences as $exp): ?>
      <div class="timeline-item">
        <div class="timeline-year">
          <?php echo esc_html($exp['year']); ?>
        </div>

        <div class="timeline-role">
          <?php echo esc_html($exp['role']); ?>
        </div>

        <div class="timeline-org">
          <?php echo esc_html($exp['org']); ?>
        </div>

        <div class="timeline-desc">
          <?php echo wp_kses(CHARMING_PORTFOLIO_special_tag($exp['description']), array(
            'b' => [],
            'br' => [],
          )); ?>
        </div>
      </div>
    <?php endforeach; ?>

  </div>
</section>
<?php endif; ?>
