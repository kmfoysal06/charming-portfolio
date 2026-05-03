<?php
/**
 * skills template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$skills = $args['skills'] ?? false;
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<?php if(is_array($skills) && !empty($skills)): ?>
<div class="charming-portfolio-container charming-portfolio-skills-section">
    <div class="section-header">
        <h2 class="badge">Skills</h2>
        <p class="section-header-note">The skills, tools and technologies I am really good at:</p>
    </div>
    <div class="section-content">
        <?php foreach($skills as $skill): ?>
            <div class="single-skill">
                <img src="<?php echo esc_url($skill['image']); ?>" width="100px"
                    height="100px" alt="<?php echo esc_attr($skill['name']); ?>" />
                <h3><?php echo esc_html($skill['name']); ?></h3>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php endif; ?>
