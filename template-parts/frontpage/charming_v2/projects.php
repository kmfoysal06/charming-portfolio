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
if(is_array($projects)):
?>

<div class="charming-portfolio-container charming-portfolio-projects-section">
    <div class="section-header">
        <h2 class="badge">Projects</h2>
        <p>Some of the noteworthy projects I have built:</p>
    </div>
    <div class="section-content">
        <?php foreach($projects as $project): ?>
            <div class="single-project">
                <img src="https://ps.w.org/charming-portfolio/assets/screenshot-9.png?rev=3138395" width="300px"
                    height="auto" alt="Project 1" />
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