<?php
/**
 * Customize  Project Showcase For Portfolio Customization Option
 * @package SimpleCharm Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!-- project list setting -->
<div class="portfolio-section-wrapper">
  <h3 class="portfolio-section-toggle"><?php _e("Project Customization",'simplecharm-portfolio'); ?></h3>
<div class="portfolio-section-content simplecharm-portfolio-projects">
    <table id="repeatable-fieldset-three" width="100%">
      <tbody>
        <pre>
        <?php if(is_array($args) && array_key_exists('works', $args)): 
        $flattern_works = simplecharm_portfolio_plugin_load_works($args['works']); ?>
        <?php foreach( $flattern_works as $key => $work ):
            $key = $key + 1;
        if(empty($work['title'])) continue; ?>
    <tr class="flex simplecharm-basic-border simplecharm-basic-padding flex flex-col">
        <td>
            <label for="<?php echo esc_attr("project-title-" . $key); ?>"><?php _e("Title","simplecharm-portfolio"); ?></label>
            <input type="text" class="title" placeholder="<?php _e("Project Title","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][<?php echo esc_attr($key); ?>][title]" value="<?php echo esc_attr($work['title']); ?>" id="<?php echo esc_attr("project-title-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>">
        </td>
        <td>
            <label for="<?php echo esc_attr("project-description-" . $key); ?>"><?php _e("Description","simplecharm-portfolio"); ?></label>
            <textarea class="description" placeholder="<?php _e("Project Description","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][<?php echo esc_attr($key); ?>][description]" id="<?php echo esc_attr("project-description-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" cols="50" rows="5"><?php echo esc_textarea($work['description']); ?></textarea>
        </td>
        <td>
            <label for="<?php echo esc_attr("project-tags-" . $key); ?>"><?php _e("Tags","simplecharm-portfolio"); ?></label>
            <textarea class="tags" placeholder="<?php _e("Project Tags","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][<?php echo esc_attr($key); ?>][tags]" id="<?php echo esc_attr("project-tags-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" cols="50" rows="5"><?php echo esc_textarea($work['tags']); ?></textarea>
        </td>
         <td>
            <label for="<?php echo esc_attr("project-link-" . $key); ?>"><?php _e("Live Link","simplecharm-portfolio"); ?></label>
            <input type="text" class="link" placeholder="<?php _e("Project Live Link","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][<?php echo esc_attr($key); ?>][link]" value="<?php echo esc_url($work['link']); ?>" id="<?php echo esc_attr("project-link-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>">
        </td>
        <td>
            <a class="button simplecharm_project_remove" href="#1"><?php _e("Remove","simplecharm-portfolio"); ?></a>
        </td>
        </tr>
        <?php endforeach; ?>
        <?php endif?>
    <!-- empty hidden one for jQuery -->
    <tr class="simplecharm_portfolio_empty-row__works screen-reader-text flex simplecharm-basic-border simplecharm-basic-padding flex flex-col">
    <td>
        <label for="project-title"><?php _e("Title","simplecharm-portfolio"); ?></label>
        <input type="text" class="title" placeholder="<?php _e("Project Title","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][0][title]" value="" id="project-title" data-queue="0">
    </td>
    <td>
        <label for="project-description"><?php _e("Description","simplecharm-portfolio"); ?></label>
        <textarea class="description" placeholder="<?php _e("Project Description","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][0][description]" value="" id="project-description" data-queue="0" cols="50" rows="5"></textarea>
    </td>
    <td>
        <label for="project-tags"><?php _e("Tags","simplecharm-portfolio"); ?></label>
        <textarea class="tags" placeholder="<?php _e("Project Tags","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][0][tags]" value="" id="project-tags" data-queue="0" cols="50" rows="5"></textarea>
    </td>
     <td>
        <label for="project-link"><?php _e("Live Link","simplecharm-portfolio"); ?></label>
        <input type="text" class="link" placeholder="<?php _e("Project Live Link","simplecharm-portfolio"); ?>" name="simplecharm_portfolio[works][0][link]" value="" id="project-link" data-queue="0">
    </td>
    <td>
        <a class="button simplecharm_project_remove" href="#1"><?php _e("Remove","simplecharm-portfolio"); ?></a>
    </td>
    </tr>
  </tbody>
</table>
<p><a id="simplecharm_work_add" class="button" href="#"><?php _e("Add Another","simplecharm-portfolio"); ?></a></p>
</div>
</div>