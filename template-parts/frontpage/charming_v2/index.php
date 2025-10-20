<?php
/**
 * Charming V2 Theme Index File
 * @package Charming Portfolio
 */
if(!defined("ABSPATH")) {
    exit;
}
// var_dump($args);
// die;

?>
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/header", "", $args);?>
<main role="main">
    <!-- hero section -->
     <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/hero_section", "", $args);?>
    
    <!-- skills section -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/skills", "", $args);?>

    <!-- projects -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/projects", "", $args);?>


    <!-- experiences -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/experiences", "", $args);?>



    <!-- contact form -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/contact", "", $args);?>

</main>
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/footer", "", $args);?>
