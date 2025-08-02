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
<?php if(is_array($experiences)): ?>
    <div class="charming-portfolio-container charming-portfolio-experience-section">
        <div class="section-header">
            <h2 class="badge">Experience</h2>
            <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div class="section-content">
            <?php foreach($experiences as $experience): ?>
            <div class="single-experience" tabindex="0">
                <img src="https://webermelon.com/wp-content/uploads/2022/09/Group-171.png" width="300px"
                    height="auto" alt="Project 1" />
                <div class="experience-details">
                    <div class="primary-details">
                        <h3><?php echo esc_html($experience['institution'] ?? ''); ?></h3>
                        <p class="timerange"><?php echo esc_html($portfolio->get_experience_timerange($experience)); ?></p>
                    </div>
                    <p class="designation"><?php echo esc_html($experience['post-title']); ?></p>
                    <p><?php echo 
                        wp_kses(CHARMING_PORTFOLIO_special_tag($experience['responsibility']), array(
                            'b' => [],
                            'br' => [],
                        ));
                    ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>