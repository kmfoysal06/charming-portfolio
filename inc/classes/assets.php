<?php
/**
 * Enqueue All Assets
 * @package Simplecharm_Portfolio
 */
namespace SIMPLECHARM_PORTFOLIO_PLUGIN\Inc\Classes;

use SIMPLECHARM_PORTFOLIO_PLUGIN\Inc\Traits\Singleton;

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
        wp_register_script("SIMPLECHARM_PORTFOLIO_main", SIMPLECHARM_PORTFOLIO_DIR_URI . '/assets/build/js/main.js', ['jquery'], filemtime(SIMPLECHARM_PORTFOLIO_DIR_PATH . '/assets/build/js/main.js'), true);

        // enqueue scripts
        wp_enqueue_script('SIMPLECHARM_PORTFOLIO_main');
    }
    public function enqueue_styles()
    {
        // register styles
        wp_register_style('SIMPLECHARM_PORTFOLIO_main', get_stylesheet_uri(), ['SIMPLECHARM_PORTFOLIO_tailwindcss'], filemtime(SIMPLECHARM_PORTFOLIO_DIR_PATH . '/style.css'), 'all');
        wp_register_style('SIMPLECHARM_PORTFOLIO_tailwindcss', SIMPLECHARM_PORTFOLIO_DIR_URI . '/assets/build/css/main.css', [], filemtime(SIMPLECHARM_PORTFOLIO_DIR_PATH . '/assets/build/css/main.css'), 'all');

        // enqueue styles
        wp_enqueue_style('SIMPLECHARM_PORTFOLIO_main');
        wp_enqueue_style('SIMPLECHARM_PORTFOLIO_tailwindcss');
        wp_enqueue_style('dashicons');
    }
    public function admin_enqueue_styles()
    {
        wp_register_style('SIMPLECHARM_PORTFOLIO_admin', SIMPLECHARM_PORTFOLIO_DIR_URI . '/assets/build/css/admin.css',[], filemtime(SIMPLECHARM_PORTFOLIO_DIR_PATH . '/assets/build/css/admin.css'), 'all');
        if (is_admin()) {
            wp_enqueue_style("SIMPLECHARM_PORTFOLIO_admin");
        }
    }
    public function admin_enqueue_scripts()
    {
        wp_register_script("SIMPLECHARM_PORTFOLIO_admin", SIMPLECHARM_PORTFOLIO_DIR_URI . '/assets/build/js/admin.js', [], filemtime(SIMPLECHARM_PORTFOLIO_DIR_PATH . '/assets/build/js/admin.js'), true);
        //admin only scripts
        if (is_admin()) {
            wp_enqueue_script("SIMPLECHARM_PORTFOLIO_admin");
        }
    }

}
