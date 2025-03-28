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
    if(CHARMING_PORTFOLIO_CLIENT_RENDER === true):?>
        <!-- Slot To Load React Components -->
        <div id="charming-portfolio-react-root">
        </div>
    <?php else: ?>
        server side rendering is currently off
    <?php endif; ?>

<!-- Contact and Footer -->
<?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/footer", "", $portfolio_saved_value);?>

