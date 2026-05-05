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
                <img src="" width="100px"
                    height="100px" alt="<?php echo esc_attr($skill['name']); ?>" />
                <h3></h3>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<section class="skills-section" id="skills">
  <div class="section-header">
    <span class="section-number">01</span>
    <h2 class="section-title">Skills</h2>
    <div class="section-line"></div>
  </div>

  <div class="skills-grid">

        <?php foreach($skills as $skill): ?>
    <div class="skill-card">
      <div class="skill-icon">
        <img src="<?php echo esc_url($skill['image']); ?>" width="44" height=44" />
      </div>
      <div class="skill-name"><?php echo esc_html($skill['name']); ?></div>
      <div class="skill-desc"><?php echo esc_html($skill['description']); ?></div>
      <div class="skill-tags">
        <span class="skill-tag">PHP</span>
        <span class="skill-tag">WP Hooks</span>
        <span class="skill-tag">REST API</span>
        <span class="skill-tag">Gutenberg</span>
      </div>
    </div>
<?php endforeach; ?>
  </div>
</section>
<?php endif; ?>
