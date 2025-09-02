<?php
/**
 * Integration file for kmfoysal06-php Portfolio Implementation
 * This file provides easy integration with the existing Charming Portfolio plugin
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Check if kmfoysal06-php layout is enabled
 * @return bool
 */
function kmfoysal06_php_enabled() {
    $portfolio = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
    $portfolio_data = $portfolio->display_saved_value();
    
    // Check if layout is set to kmfoysal06-php
    return isset($portfolio_data['layout']) && $portfolio_data['layout'] === 'kmfoysal06-php';
}

/**
 * Render kmfoysal06-php portfolio
 * @return void
 */
function kmfoysal06_php_render() {
    // Ensure we have the required data
    $portfolio = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
    $portfolio_data = $portfolio->display_saved_value();
    
    if (!$portfolio_data) {
        return;
    }
    
    // Load the main template
    include_once(__DIR__ . '/index.php');
}

/**
 * Add kmfoysal06-php layout option to admin settings
 * This would be called from the plugin's admin hooks
 */
function kmfoysal06_php_add_layout_option($layouts) {
    $layouts['kmfoysal06-php'] = 'kmfoysal06 PHP Implementation';
    return $layouts;
}

/**
 * Shortcode to render kmfoysal06-php portfolio anywhere
 * Usage: [kmfoysal06_portfolio]
 */
function kmfoysal06_php_shortcode($atts = []) {
    // Check if portfolio is enabled
    if (!CHARMING_PORTFOLIO_enabled()) {
        return '<p>Portfolio is not enabled.</p>';
    }
    
    ob_start();
    kmfoysal06_php_render();
    return ob_get_clean();
}

// Register shortcode
add_shortcode('kmfoysal06_portfolio', 'kmfoysal06_php_shortcode');

/**
 * Enqueue styles and scripts for kmfoysal06-php
 */
function kmfoysal06_php_enqueue_assets() {
    // Only enqueue if this layout is active
    if (!kmfoysal06_php_enabled() && !is_admin()) {
        return;
    }
    
    // Enqueue Tailwind CSS
    wp_enqueue_script('tailwindcss', 'https://cdn.tailwindcss.com', [], '3.4.0', false);
    
    // Enqueue Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', [], '6.0.0');
    
    // Enqueue existing plugin styles (for compatibility)
    $css_url = plugins_url('assets/build/css/main.css', CHARMING_PORTFOLIO_DIR_PATH . '/portfolio.php');
    wp_enqueue_style('charming-portfolio-main', $css_url, [], '1.5');
    
    // Add custom inline styles
    $custom_css = "
        /* kmfoysal06-php specific styles */
        .kmfoysal06-php-active {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
    ";
    wp_add_inline_style('charming-portfolio-main', $custom_css);
}

// Hook to enqueue assets
add_action('wp_enqueue_scripts', 'kmfoysal06_php_enqueue_assets');

/**
 * Modify the main front-page template to use kmfoysal06-php if enabled
 */
function kmfoysal06_php_template_override() {
    if (is_front_page() && CHARMING_PORTFOLIO_enabled() && kmfoysal06_php_enabled()) {
        // Get portfolio data
        $portfolio = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
        $portfolio_data = $portfolio->display_saved_value();
        
        // Include our template
        include_once(__DIR__ . '/index.php');
        exit; // Prevent the default template from loading
    }
}

// Hook template override (lower priority to run after plugin's override)
add_action('template_redirect', 'kmfoysal06_php_template_override', 15);

/**
 * Add body class for kmfoysal06-php layout
 */
function kmfoysal06_php_body_class($classes) {
    if (is_front_page() && CHARMING_PORTFOLIO_enabled() && kmfoysal06_php_enabled()) {
        $classes[] = 'kmfoysal06-php-active';
        $classes[] = 'charming-portfolio-active';
    }
    return $classes;
}
add_filter('body_class', 'kmfoysal06_php_body_class');

/**
 * Helper function to get processed portfolio data
 * This ensures data is in the format expected by kmfoysal06-php components
 */
function kmfoysal06_php_get_portfolio_data() {
    $portfolio = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
    $raw_data = $portfolio->display_saved_value();
    
    if (!$raw_data) {
        return [];
    }
    
    // Process the data for better usability
    $processed_data = $raw_data;
    
    // Process skills if they exist
    if (!empty($raw_data['skills'])) {
        $processed_data['skills'] = CHARMING_PORTFOLIO_load_skills($raw_data['skills']);
    }
    
    // Process experiences if they exist
    if (!empty($raw_data['experiences'])) {
        $processed_data['experiences'] = CHARMING_PORTFOLIO_load_experience($raw_data['experiences']);
    }
    
    // Process works/projects if they exist
    if (!empty($raw_data['works'])) {
        $processed_data['works'] = CHARMING_PORTFOLIO_load_works($raw_data['works']);
    }
    
    // Process social links if they exist
    if (!empty($raw_data['social_links'])) {
        $processed_data['social_links'] = CHARMING_PORTFOLIO_load_social($raw_data['social_links']);
    }
    
    return $processed_data;
}

/**
 * Get latest blog posts for the portfolio
 */
function kmfoysal06_php_get_latest_posts($count = 3) {
    return CHARMING_PORTFOLIO_get_latest_posts($count);
}

/**
 * Admin notice to inform about the new layout option
 */
function kmfoysal06_php_admin_notice() {
    $screen = get_current_screen();
    
    // Only show on relevant admin pages
    if (!$screen || strpos($screen->id, 'charming-portfolio') === false) {
        return;
    }
    
    // Check if user has dismissed this notice
    if (get_option('kmfoysal06_php_notice_dismissed')) {
        return;
    }
    
    ?>
    <div class="notice notice-info is-dismissible" id="kmfoysal06-php-notice">
        <p>
            <strong>New Layout Available!</strong> 
            The kmfoysal06-php layout is now available. This provides a modern, 
            PHP-based portfolio implementation with enhanced performance and features.
            <a href="<?php echo admin_url('admin.php?page=charming-portfolio'); ?>">Configure Portfolio</a>
        </p>
    </div>
    <script>
    jQuery(document).ready(function($) {
        $(document).on('click', '#kmfoysal06-php-notice .notice-dismiss', function() {
            $.post(ajaxurl, {
                action: 'kmfoysal06_php_dismiss_notice',
                nonce: '<?php echo wp_create_nonce('kmfoysal06_php_dismiss'); ?>'
            });
        });
    });
    </script>
    <?php
}
add_action('admin_notices', 'kmfoysal06_php_admin_notice');

/**
 * Handle notice dismissal
 */
function kmfoysal06_php_dismiss_notice() {
    if (!wp_verify_nonce($_POST['nonce'], 'kmfoysal06_php_dismiss')) {
        wp_die('Security check failed');
    }
    
    update_option('kmfoysal06_php_notice_dismissed', true);
    wp_die('OK');
}
add_action('wp_ajax_kmfoysal06_php_dismiss_notice', 'kmfoysal06_php_dismiss_notice');

/**
 * Add settings link to plugins page
 */
function kmfoysal06_php_settings_link($links) {
    $settings_link = '<a href="' . admin_url('admin.php?page=charming-portfolio') . '">Configure kmfoysal06-php</a>';
    array_unshift($links, $settings_link);
    return $links;
}

// This would be added to the main plugin file:
// add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'kmfoysal06_php_settings_link');