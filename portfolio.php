<?php
/**
 * @package SimpleCharm Portfolio
 * @since 1.0
 * Plugin Name: SimpleCharm Portfolio
 * Description: A simple portfolio plugin for WordPress.
 * Version: 1.0
 * Author: Kazi Mohammad Foysal
 * Author URI: https://profile.wordpress.org/kmfoysal06
 * Tags: simplecharm-portfolio-plugin, portfolio-plugin, simple-portfolio
 * Requires at least: 5.0
 * Tested up to: 6.5
 * Stable tag: 1.0
 * Requires PHP: 7.0
 * License: GPLv2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
if (!defined("SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_PATH")) {
    define("SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_PATH", untrailingslashit(plugin_dir_path(__FILE__)));
}
if (!defined("SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_URI")) {
    define("SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_URI", untrailingslashit(plugin_dir_url(__FILE__)));
}

require_once SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_PATH.'/inc/helpers/autoload.php';
require_once SIMPLECHARM_PORTFOLIO_PLUGIN_DIR_PATH.'/inc/helpers/template-tags.php';

function simplecharm_portfolio_plugin_get_instance(){
    return \SIMPLECHARM_PORTFOLIO_PLUGIN\Inc\Classes\Simplecharm_Portfolio_Plugin::get_instance();
}
simplecharm_portfolio_plugin_get_instance();

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