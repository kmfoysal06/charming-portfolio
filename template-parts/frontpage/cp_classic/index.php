<?php
$portfolio_saved_value = $args;
?>
<!-- Header -->
<div class="charming_portfolio-plugin-inner">
    <!-- hero section -->
    <section class="min-h-screen min-h-lvh grid items-center mb-2">
        <?php
        CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/cp_classic/basic-info", "", $portfolio_saved_value);
        ?>
    </section>

    <!-- about me section -->
    <section class="about-me min-h-screen min-h-max my-2 flex justify-center">
        <?php
        CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/cp_classic/about", "", $portfolio_saved_value);
        ?>
    </section>

    <!-- skills section -->
    <section class="skills min-h-max p-6 my-2 flex flex-col">
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/cp_classic/skills", "", $portfolio_saved_value); ?>
    </section>

    <!-- Experience Section -->
    <section class="experience min-h-max p-6 my-2 flex flex-col">
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/cp_classic/experience", "", $portfolio_saved_value); ?>
    </section>

    <!-- Project Section -->
    <section class="projects min-h-max p-6 my-2 flex flex-col">
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/cp_classic/projects", "", $portfolio_saved_value); ?>
    </section>

    <!-- Contact and Footer -->
    <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/cp_classic/footer", "", $portfolio_saved_value); ?>
