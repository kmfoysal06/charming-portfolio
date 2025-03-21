<?php
/**
 * Main Index Template
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
$portfolio             = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
$portfolio_saved_value = $portfolio->display_saved_value();
$CHARMING_PORTFOLIO_css_url = plugins_url('assets/build/css/main.css', __FILE__);
$CHARMING_PORTFOLIO_dashicons_css_url = includes_url('css/dashicons.min.css');
?>

<!-- Header -->
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/header");
?>
<div class="charming_portfolio-plugin-inner">
	<!-- hero section -->
<section class="min-h-screen min-h-lvh grid items-center mb-2">
  <?php
CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/basic-info", "", $portfolio_saved_value);
?>
</section>

<!-- about me section -->
<section class="about-me min-h-screen min-h-max my-2 flex justify-center">
 <?php
CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/aboutme", "", $portfolio_saved_value);
?>
</section>

<!-- skills section -->
<section class="skills min-h-max p-6 my-2 flex flex-col">
	<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/skills", "", $portfolio_saved_value); ?>
</section>

<!-- Experience Section -->
<section class="experience min-h-max p-6 my-2 flex flex-col">
	<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/experience", "", $portfolio_saved_value); ?>
</section>

<!-- Project Section -->
<section class="projects min-h-max p-6 my-2 flex flex-col">
	<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/projects", "", $portfolio_saved_value); ?>
</section>

<!-- Contact and Footer -->
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/footer", "", $portfolio_saved_value);?>
