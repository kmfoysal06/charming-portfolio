<?php
/**
 * Enqueue All Assets
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;

use CHARMING_PORTFOLIO\Inc\Traits\Singleton;

class Assets
{
    use Singleton;

    public function __construct()
    {
        $this->setup_hook();
    }
    public function setup_hook()
    {
        // enqueue scripts
        add_action("wp_enqueue_scripts", [$this, 'enqueue_scripts']);
        // enqueue styles
        add_action("wp_enqueue_scripts", [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_scripts']);
    }
    public function enqueue_scripts()
    {
        // register scripts
        wp_register_script("CHARMING_PORTFOLIO_main", CHARMING_PORTFOLIO_DIR_URI . '/assets/build/js/main.js', ['jquery'], filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/js/main.js'), true);

        // enqueue scripts
        if(is_front_page()){
            wp_enqueue_script('CHARMING_PORTFOLIO_main');
        }
    }
    public function enqueue_styles()
    {
        wp_register_style('CHARMING_PORTFOLIO_tailwindcss', CHARMING_PORTFOLIO_DIR_URI . '/assets/build/css/main.css', filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/css/main.css'), 'all');

        // enqueue styles if its frontpage
        if(is_front_page()){
            wp_enqueue_style('CHARMING_PORTFOLIO_tailwindcss');
            wp_enqueue_style('dashicons');
        }
    }
    public function admin_enqueue_styles()
    {
        wp_register_style('CHARMING_PORTFOLIO_admin', CHARMING_PORTFOLIO_DIR_URI . '/assets/build/css/admin.css',[], filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/css/admin.css'), 'all');
        if (is_admin()) {
            wp_enqueue_style("CHARMING_PORTFOLIO_admin");
        }
    }
    public function admin_enqueue_scripts()
    {
        wp_register_script("CHARMING_PORTFOLIO_admin", CHARMING_PORTFOLIO_DIR_URI . '/assets/build/js/admin.js', [], filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/js/admin.js'), true);
        //admin only scripts
        if (is_admin()) {
            wp_enqueue_script("CHARMING_PORTFOLIO_admin");
        }
    }

}
