<?php
/**
 * skills template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$charming_portfolio_skills = $args['skills'] ?? false;
?>
<?php if(is_array($charming_portfolio_skills) && !empty($skills)): ?>
<section class="skills-section" id="skills">
  <div class="section-header">
    <span class="section-number">01</span>
    <h2 class="section-title">Skills</h2>
    <div class="section-line"></div>
  </div>

  <div class="skills-grid">

        <?php foreach($charming_portfolio_skills as $skill): ?>
    <div class="skill-card">
      <div class="skill-icon">
      <img src="<?php echo esc_url($skill['image']); ?>" width="44" height=44" alt="<?php echo esc_html($skill['name']); ?>" />
      </div>
      <div class="skill-name"><?php echo esc_html($skill['name']); ?></div>
      <div class="skill-desc"><?php echo esc_html($skill['description']); ?></div>
        <?php if(isset($skill['tags']) && !empty($skill['tags'])): ?>
            <?php
                $tags = explode("," ,$skill['tags']);
                $tags = array_map(function($tag) {
                    return trim($tag);
                }, $tags);
            ?>
            <div class="skill-tags">
                <?php foreach($tags as $tag): ?>
                    <span class="skill-tag"><?php echo esc_html($tag); ?></span>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
<?php endforeach; ?>
  </div>
</section>
<?php endif; ?>
