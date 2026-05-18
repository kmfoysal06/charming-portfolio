<?php
/**
 * Customize  Experience For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
$layout = $args['layout'] ?? 'charming_v3';
if(!in_array($layout, ['classic', 'charming_v2', 'charming_v3'])) {
    $layout = 'charming_v3';
}

?>
<!-- experience setting -->
<div class="portfolio-section-wrapper">
    <h3 class="portfolio-section-toggle"><?php esc_html_e("Themes","charming-portfolio"); ?></h3>
    <div class="portfolio-section-content charming-portfolio-layout">
        <label>
            <img src="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/cp-classic.png") ?>" width="200px" />

            <div class="flex gap-1 items-center checkbox-wrapper">
            <input type="radio" name="portfolio_layout" value="classic" <?php checked($layout, 'classic'); ?>>
            <?php esc_html_e("Classic Theme","charming-portfolio"); ?>
            </div>
        </label>

        <label>
            <img src="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/cp-v2.png") ?>" width="200px" />
            <div class="flex gap-1 items-center checkbox-wrapper">
<input type="radio" name="portfolio_layout" value="charming_v2" <?php checked($layout, 'charming_v2'); ?>>
            <?php esc_html_e("Charming V2 Theme","charming-portfolio"); ?>
            </div>

        </label>
        <label>
            <img src="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/cp-v3.webp") ?>" width="200px" />
            <div class="flex gap-1 items-center checkbox-wrapper">
<input type="radio" name="portfolio_layout" value="charming_v3" <?php checked($layout, 'charming_v3'); ?>>
            <?php esc_html_e("Charming V3 Theme","charming-portfolio"); ?>
            </div>

        </label>
    </div>
</div>
