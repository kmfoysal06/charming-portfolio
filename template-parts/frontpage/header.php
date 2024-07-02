<?php
/**
 * Header Template
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class("mx-2"); ?>>
	<?php
		if(function_exists("wp_body_open")){
			wp_body_open();
		}
	?>
	<a class="skip-link screen-reader-text" href="#CHARMING_PORTFOLIO-content">
        <?php esc_html_e( 'Skip to content', 'charming-portfolio' ); ?></a>
	<main id="CHARMING_PORTFOLIO-content" tabindex="-1">