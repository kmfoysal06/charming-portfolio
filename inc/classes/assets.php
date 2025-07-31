<?php
/**
 * Enqueue All Assets
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;

//using singleton for all of the classes so they only instantiate once
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
      $portfolio_saved_value = Portfolio::get_instance()->display_saved_value();
      $latest_blogs = Blogs::get_instance()->load_latest_blogs(5);

      // register scripts
        wp_register_script("CHARMING_PORTFOLIO_main", CHARMING_PORTFOLIO_DIR_URI . '/assets/build/js/main.js', ['jquery'], filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/js/main.js'), true);
        wp_register_script("CHARMING_PORTFOLIO_scrollReveal", "https://unpkg.com/scrollreveal", [], null, false);
        wp_register_script("CHARMING_PORTFOLIO_portofolio_react", CHARMING_PORTFOLIO_DIR_URI . '/assets/build/js/portfolio_react.js', [], filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/js/portfolio_react.js'), true);
        wp_localize_script("CHARMING_PORTFOLIO_portofolio_react", "portfolio_data", $portfolio_saved_value);

        wp_localize_script("CHARMING_PORTFOLIO_portofolio_react", "charming_portfolio_latest_blogs", $latest_blogs);

        // enqueue scripts
		if(is_front_page()){
			if(CHARMING_PORTFOLIO_enabled()){
				wp_enqueue_script('CHARMING_PORTFOLIO_main');
                /**
                 * Load React only if user allows client side rendering
                 * */
                if(CHARMING_PORTFOLIO_CLIENT_RENDER === true){
                    wp_enqueue_script('CHARMING_PORTFOLIO_portofolio_react');
                }
			}
        }
    }
    public function enqueue_styles()
    {
        wp_register_style('CHARMING_PORTFOLIO_tailwindcss', CHARMING_PORTFOLIO_DIR_URI . '/assets/build/css/main.css', filemtime(CHARMING_PORTFOLIO_DIR_PATH . '/assets/build/css/main.css'), 'all');

        // enqueue styles if its frontpage
		if(is_front_page()){
			if(CHARMING_PORTFOLIO_enabled()){
                wp_enqueue_style('CHARMING_PORTFOLIO_tailwindcss');
	    		wp_enqueue_style('dashicons');
			}
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
        wp_localize_script("CHARMING_PORTFOLIO_admin", "charming_portfolio_admin", [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('charming_portfolio_save_data'),
        ]);
        //admin only scripts
        if (is_admin()) {
            wp_enqueue_script("CHARMING_PORTFOLIO_admin");
        }
    }

}
