<?php
/**
 * experiences template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$charming_portfolio_experiences = $args['experiences'] ?? false;
$charming_portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<?php if(is_array($charming_portfolio_experiences)): ?>
    <div class="charming-portfolio-container charming-portfolio-experience-section">
        <div class="section-header">
            <h2 class="badge">Experience</h2>
            <p class="section-header-note">Here is a quick summary of my most recent experiences:</p>
        </div>
        <div class="section-content">
            <?php foreach($charming_portfolio_experiences as $experience): ?>
            <div class="single-experience" tabindex="0">
                <?php if(isset($experience['logo']) && !empty($experience['logo'])): ?>
                <img src="<?php echo esc_url($experience['logo']); ?>" width="300px" height="50px" style="object-fit: contain;" alt="<?php echo esc_html($experience['institution']); ?>" />
                <?php else: ?>
                    <?php echo esc_html($experience['institution']); ?>
                <?php endif; ?>

                <div class="experience-details">
                    <div class="primary-details">
                        <h3><?php echo esc_html($experience['institution'] ?? ''); ?></h3>
                        <p class="timerange"><?php echo esc_html($charming_portfolio->get_experience_timerange($experience)); ?></p>
                    </div>
                    <p class="designation"><?php echo esc_html($experience['post-title']); ?></p>

                    <div class="charming-portfolio-has-see-more">
                    <p class="see-more-text"><?php echo 
                        wp_kses(CHARMING_PORTFOLIO_special_tag($experience['responsibility']), array(
                            'b' => [],
                            'br' => [],
                        ));
                    ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>
