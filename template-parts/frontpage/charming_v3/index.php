<?php
/**
 * Charming V3 Theme Index File
 * @package Charming Portfolio
 */
if(!defined("ABSPATH")) {
    exit;
}
// var_dump($args);
// die;

?>
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/header", "", $args);?>
<main role="main">
    <!-- hero section -->
     <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/hero_section", "", $args);?>

    <!-- stat boxes section -->
     <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/stat-boxes-section.php", "", $args);?>

     
    <!-- skills section -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/skills", "", $args);?>

    <!-- projects -->
    <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/projects", "", $args);?>


    <!-- experiences -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/experiences", "", $args);?>



    <!-- contact form -->
    <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/contact", "", $args);?>

</main>
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v3/footer", "", $args);?>
