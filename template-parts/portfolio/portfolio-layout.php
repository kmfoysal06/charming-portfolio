<?php
/**
 * Customize  Experience For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
$layout = $args['layout'] ?? 'charming_v2';
if(!is_array($layout) || !in_array($layout, ['classic', 'charming_v2'])) {
    $layout = 'charming_v2';
}

?>
<!-- experience setting -->
<div class="portfolio-section-wrapper">
    <h3 class="portfolio-section-toggle"><?php esc_html_e("Choose Layout","charming-portfolio"); ?></h3>
    <div class="portfolio-section-content charming-portfolio-layout">
        <label>
            <input type="radio" name="portfolio_layout" value="classic" <?php checked($layout, 'classic'); ?>>
            <?php esc_html_e("Classic Layout","charming-portfolio"); ?>
        </label>
        <label>
            <input type="radio" name="portfolio_layout" value="charming_v2" <?php checked($layout, 'charming_v2'); ?>>
            <?php esc_html_e("Charming V2 Layout","charming-portfolio"); ?>
        </label>
    </div>
</div>