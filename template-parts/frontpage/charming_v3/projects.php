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
<!-- PROJECTS -->
<section id="projects">
  <div class="section-header">
  <span class="section-number"><?php echo _e("02", "charming-portfolio"); ?></span>
    <h2 class="section-title"><?php echo _e("Projects", "charming-portfolio"); ?></h2>
    <div class="section-line"></div>
  </div>

  <div class="projects-grid">
<?php foreach($projects as $project): ?>
<?php
$project_name = isset($project['title']) ? $project['title'] : '';
$project_desc = isset($project['description']) ? $project['description'] : '';
$project_category = isset($project['category']) ? $project['category'] : '';
$project_link = isset($project['link']) ? $project['link'] : '#';
?>
    <div class="project-card">
      <div class="project-type"><?php echo esc_html($project_category); ?></div>
      <div class="project-title"><?php echo esc_html($project_name); ?></div>
      <div class="project-desc"><?php echo esc_html($project_desc); ?></div>
      <a href="<?php echo esc_attr($project_link); ?>" class="project-link">
        View Project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
<?php endforeach; ?>

  </div>
</section><?php endif; ?>
