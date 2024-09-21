<?php
/**
 * Customize  Project Showcase For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!-- project list setting -->
<div class="portfolio-section-wrapper">
  <h3 class="portfolio-section-toggle"><?php esc_html_e("Project Customization",'charming-portfolio'); ?></h3>
<div class="portfolio-section-content simplecharm-portfolio-projects">
    <p><?php
    esc_html_e("You Can Not Use Quotation (\"\" and '') so You Can Use [quote], [squote] and [bold][/bold] for Adding Double and Single Quotation and Make Any Text Bold.","charming-portfolio") ?>
    </p>
    <table id="repeatable-fieldset-three" width="100%">
      <tbody>
        <?php if(is_array($args) && array_key_exists('works', $args)): 
        $flattern_works = CHARMING_PORTFOLIO_load_works($args['works']); ?>
        <?php foreach( $flattern_works as $key => $work ):
            $key = $key + 1;
        if(empty($work['title'])) continue; ?>
    <tr class="flex simplecharm-basic-border simplecharm-basic-padding flex flex-col">
        <td>
            <label for="<?php echo esc_attr("project-title-" . $key); ?>"><?php esc_html_e("Title","charming-portfolio"); ?></label>
            <input type="text" class="title" placeholder="<?php esc_attr_e("Project Title","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][<?php echo esc_attr($key); ?>][title]" value="<?php echo esc_attr($work['title']); ?>" id="<?php echo esc_attr("project-title-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" maxlength="30">
        </td>
        <td>
            <label for="<?php echo esc_attr("project-description-" . $key); ?>"><?php esc_html_e("Description","charming-portfolio"); ?></label>
            <textarea class="description" placeholder="<?php esc_attr_e("Project Description","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][<?php echo esc_attr($key); ?>][description]" id="<?php echo esc_attr("project-description-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" cols="50" rows="5" maxlength='800'><?php echo esc_textarea($work['description']); ?></textarea>
        </td>
        <td>
            <label for="<?php echo esc_attr("project-tags-" . $key); ?>"><?php esc_html_e("Tags","charming-portfolio"); ?></label>
            <textarea class="tags" placeholder="<?php esc_attr_e("Project Tags","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][<?php echo esc_attr($key); ?>][tags]" id="<?php echo esc_attr("project-tags-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" cols="50" rows="5" maxlength="200"><?php echo esc_textarea($work['tags']); ?></textarea>
        </td>
         <td>
            <label for="<?php echo esc_attr("project-link-" . $key); ?>"><?php esc_html_e("Live Link","charming-portfolio"); ?></label>
            <input type="text" class="link" placeholder="<?php esc_attr_e("Project Live Link","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][<?php echo esc_attr($key); ?>][link]" value="<?php echo esc_url($work['link']); ?>" id="<?php echo esc_attr("project-link-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>">
        </td>
        <td>
            <a class="button charming_portfolio_project_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a>
        </td>
        </tr>
        <?php endforeach; ?>
        <?php endif?>
    <!-- empty hidden one for jQuery -->
    <tr class="charming_portfolio_empty-row__works screen-reader-text flex simplecharm-basic-border simplecharm-basic-padding flex flex-col">
    <td>
        <label for="project-title"><?php esc_html_e("Title","charming-portfolio"); ?></label>
        <input type="text" class="title" placeholder="<?php esc_attr_e("Project Title","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][0][title]" value="" id="project-title" data-queue="0">
    </td>
    <td>
        <label for="project-description"><?php esc_html_e("Description","charming-portfolio"); ?></label>
        <textarea class="description" placeholder="<?php esc_attr_e("Project Description","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][0][description]" value="" id="project-description" data-queue="0" cols="50" rows="5"></textarea>
    </td>
    <td>
        <label for="project-tags"><?php esc_html_e("Tags","charming-portfolio"); ?></label>
        <textarea class="tags" placeholder="<?php esc_attr_e("Project Tags","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][0][tags]" value="" id="project-tags" data-queue="0" cols="50" rows="5"></textarea>
    </td>
     <td>
        <label for="project-link"><?php esc_html_e("Live Link","charming-portfolio"); ?></label>
        <input type="text" class="link" placeholder="<?php esc_attr_e("Project Live Link","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[works][0][link]" value="" id="project-link" data-queue="0">
    </td>
    <td>
        <a class="button charming_portfolio_project_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a>
    </td>
    </tr>
  </tbody>
</table>
<p><a id="charming_portfolio_work_add" class="button" href="#"><?php esc_html_e("Add Another","charming-portfolio"); ?></a></p>
</div>
</div>