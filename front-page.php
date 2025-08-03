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
    <?php 
    /**
    * Slot for React loaded only if user allows client side rendering 
    **/
    if(CHARMING_PORTFOLIO_CLIENT_RENDER === true && $portfolio_saved_value['layout'] === 'classic'):?>
        <!-- Slot To Load Portfolio Components -->
        <div id="charming-portfolio-react-root">
        </div>
    <?php endif; ?>
    <?php if($portfolio_saved_value['layout'] === 'charming_v2'):?>
        <!-- Charming V2 Layout -->
        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/index", "", $portfolio_saved_value);?>
    <?php endif; ?>

<!-- Contact and Footer -->
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/footer", "", $portfolio_saved_value);?>

