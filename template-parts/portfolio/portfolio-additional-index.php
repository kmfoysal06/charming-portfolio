<?php
/**
 * Additional Data Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
$charming_portfolio             = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
$charming_portfolio_saved_data = $charming_portfolio->display_saved_value();


CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio-additional','tab-list', $charming_portfolio_saved_data);
?>
<div class="charming-portfolio-tabs">
    <div class="tab-content active" id="skills" data-tab="skills">
        <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio-additional", 'skills', $charming_portfolio_saved_data);?>
    </div>


    <div class="tab-content" id="experience" data-tab="experience">
        <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio-additional", 'experience', $charming_portfolio_saved_data);?>

    </div>

    <div class="tab-content" id="projects" data-tab="projects">
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio-additional", 'projects', $charming_portfolio_saved_data);?>

    </div>

<input type="hidden" name="charming-portfolio__nonce" value="<?php echo esc_attr(wp_create_nonce("CHARMING_PORTFOLIO_modify_additionals__nonce")) ?>">
<div class="btn-wrapper">
    <input type="button" name="update_portfolio_data" value="Update" class="btn btn-fullwidth charming-portfolio-save-additional-data">
    <span></span>
</div>

