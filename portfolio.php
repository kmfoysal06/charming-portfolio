<?php
/**
 * @package Charming Portfolio
 * @since 1.0
 * Plugin Name: Charming Portfolio
 * Description: A simple portfolio plugin for WordPress.
 * Version: 1.0
 * Author: Kazi Mohammad Foysal
 * Author URI: https://profile.wordpress.org/kmfoysal06
 * Tags: charming-portfolio, portfolio-plugin, simple-portfolio
 * Requires at least: 5.0
 * Tested up to: 6.5
 * Stable tag: 1.0
 * Requires PHP: 7.0
 * Text Domain: charming-portfolio
 * License: GPLv2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
if (!defined("CHARMING_PORTFOLIO_DIR_PATH")) {
    define("CHARMING_PORTFOLIO_DIR_PATH", untrailingslashit(plugin_dir_path(__FILE__)));
}
if (!defined("CHARMING_PORTFOLIO_DIR_URI")) {
    define("CHARMING_PORTFOLIO_DIR_URI", untrailingslashit(plugin_dir_url(__FILE__)));
}

require_once CHARMING_PORTFOLIO_DIR_PATH.'/inc/helpers/autoload.php';
require_once CHARMING_PORTFOLIO_DIR_PATH.'/inc/helpers/template-tags.php';

function CHARMING_PORTFOLIO_get_instance(){
    return \CHARMING_PORTFOLIO\Inc\Classes\CHARMING_PORTFOLIO::get_instance();
}
CHARMING_PORTFOLIO_get_instance();

require plugin_dir_path(__FILE__) . 'inc/helpers/template-tags.php';
add_filter('template_include', 'template_override');
function template_override($template) {
  if (is_front_page()) {
    $new_template = plugin_dir_path(__FILE__) . 'front-page.php';
	if ('' != $new_template) {
	  return $new_template;
	}
  }
  // default wordpress behavior
  return $template;
}