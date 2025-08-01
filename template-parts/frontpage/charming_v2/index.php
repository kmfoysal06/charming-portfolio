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
<link rel="stylesheet" href="https://kmfoysal06.github.io/css-practice/baler-portfolio/header.css" type="text/css" media="all" />
<link rel="stylesheet" href="https://kmfoysal06.github.io/css-practice/baler-portfolio/style.css" type="text/css" media="all" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
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
<script src="http://kmfoysal06.github.io/css-practice/baler-portfolio/nav.js"></script>