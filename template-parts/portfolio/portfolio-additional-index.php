<?php
/**
 * Additional Data Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
$portfolio             = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
$portfolio_saved_data = $portfolio->display_saved_value();


CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio-additional','tab-list', $portfolio_saved_data);
?>
<div class="charming-portfolio-tabs">
    <div class="tab-content active" id="skills" data-tab="skills">
        <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio-additional", 'skills', $portfolio_saved_data);?>
    </div>


    <div class="tab-content" id="experience" data-tab="experience">
        <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio-additional", 'experience', $portfolio_saved_data);?>

    </div>

    <div class="tab-content" id="projects" data-tab="projects">
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio-additional", 'projects', $portfolio_saved_data);?>

    </div>

<input type="hidden" name="charming-portfolio__nonce" value="<?php echo esc_attr(wp_create_nonce("CHARMING_PORTFOLIO_modify_additionals__nonce")) ?>">
<div class="btn-wrapper">
    <input type="button" name="update_portfolio_data" value="Update" class="btn btn-fullwidth charming-portfolio-save-additional-data">
    <span></span>
</div>

