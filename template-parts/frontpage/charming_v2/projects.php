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

<div class="charming-portfolio-container charming-portfolio-projects-section">
    <div class="section-header">
        <h2 class="badge">Projects</h2>
        <p class="section-header-note">Some of the noteworthy projects I have built:</p>
    </div>
    <div class="section-content">
        <?php foreach($projects as $project): ?>
            <div class="single-project">
                <?php if(isset($project['thumbnail']) && !empty($project['thumbnail'])): ?>
                    <img src="<?php echo esc_url($project['thumbnail']); ?>" width="300px" height="auto" alt="<?php echo esc_attr($project['title']); ?>" />
                <?php endif; ?>
                <div class="project-details">
                    <h3><?php echo esc_html($project['title']); ?></h3>
                    <p><?php echo wp_kses(CHARMING_PORTFOLIO_special_tag($project['description']), array(
                        'b' => [],
                        'br' => [],
                    )); ?></p>
                    <small><?php echo esc_html($project['tags']); ?></small>
                </div>
            </div>
        <?php endforeach; ?>

    </div>

</div>
<?php endif; ?>
