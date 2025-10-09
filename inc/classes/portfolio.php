<?php
/**
 * Customizing Front Page Functionality
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;

//using singleton for all of the classes so they only instantiate once
use CHARMING_PORTFOLIO\Inc\Traits\Singleton;

class Portfolio
{
    use Singleton;

    public function __construct()
    {
        $this->setup_hook();
    }
    public function setup_hook()
    {
        add_action("admin_menu", [$this, "add_menus"]);
        add_action('admin_bar_menu', [$this,'add_admin_bar_menu'], 100);
        add_action('admin_enqueue_scripts', [$this, "load_media"]);
        add_action('init', [$this, 'enquiries']);
        add_action('add_meta_boxes', [$this, 'mail_meta_box']);

        add_filter( 'manage_charming_portfolio_e_posts_columns', [$this, 'charming_portfolio_e_columns'] );

        add_action( 'manage_charming_portfolio_e_posts_custom_column',[$this,  'charming_portfolio_e_column_value'], 10, 2 );
    }
    public function enquiries() {
        register_post_type(
            "charming_portfolio_e",
            [
                'labels' => [
                    'name'          => __('Enquiries', 'charming-portfolio'),
                    'singular_name' => __('Enquiry', 'charming-portfolio'),
                ],
                'public'        => false,
                'has_archive'   => false,
                'show_ui'       => true,
                'show_in_menu'  => 'CHARMING_PORTFOLIO_page',
                'menu_position' => 20,
                'menu_icon'     => 'dashicons-email',
                'supports'      => ['title', 'editor', 'author'],
                'capability_type' => 'post',
                'capabilities'    => [
                    'create_posts' => false, // Removes support for the "Add New" function
                ],
                'map_meta_cap'    => true, // Use the mapped meta capabilities
            ]
        );
    }
    public function mail_meta_box() {
        add_meta_box(
            'charming_portfolio_e_details',
            __('Enquiry Details', 'charming-portfolio'),
            [$this, 'render_mail_meta_box'],
            'charming_portfolio_e',
            'normal',
            'high'
        );
    }
    public function render_mail_meta_box() {
        global $post;
        if(!$post?->ID) {
            return;
        }
        $outline = '<label for="mail" style="width:150px; display:inline-block;">'. esc_html__('Email', 'charming-portfolio') .'</label>';

	    $mail = get_post_meta( $post->ID, 'enquiry_email', true ) ?? '';

	    $outline .= '<input type="text" name="mail" id="mail" class="mail" value="'. esc_attr($mail) .'" style="width:300px;"/>';

        echo $outline;
    }
public function charming_portfolio_e_columns( $columns ) {
    // Add your new column after the 'title' column, for example
    $new_columns = array();
    foreach ( $columns as $key => $value ) {
        $new_columns[ $key ] = $value;
        if ( 'title' === $key ) {
            $new_columns['mail'] = __( 'Email', 'charming-portfolio' );
            $new_columns['message'] = __( 'Message', 'charming-portfolio' );
        }
    }
    return $new_columns;
}
public function charming_portfolio_e_column_value( $column, $post_id ) {
    if ( 'mail' === $column ) {
        $mail = get_post_meta($post_id, 'enquiry_email', true) ?? '';
        echo esc_html( $mail );
    }
    if ( 'message' === $column ) {
//        $msg = the content 
        $msg = get_post_field( 'post_content', $post_id );
        echo esc_html( wp_trim_words( $msg, 20, '...' ) );
    }
}

    public function add_menus() {
        add_menu_page(
            'Portfolio Page',
            "Portfolio",
            "manage_options",
            "CHARMING_PORTFOLIO_page",
            [$this, "portfolio_html"],
            "dashicons-portfolio"
        );
        add_submenu_page( "CHARMING_PORTFOLIO_page",
            "Portfolio Page",
            "Portfolio",
            "manage_options",
            "CHARMING_PORTFOLIO_page",
            [$this, "portfolio_html"],
        );
        add_submenu_page( "CHARMING_PORTFOLIO_page",
            "Customize Portfolio",
            "Customize Portfolio",
            "manage_options",
            "CHARMING_PORTFOLIO_menu",
            [$this, "portfolio_submenu_html"],
        );

        add_submenu_page(
            "CHARMING_PORTFOLIO_page",
            "Additional Info",
            "Additional Info",
            "manage_options",
            "charming_portfolio_additional_menu",
            [$this, "portfolio_additional_submenu_html"],
        );
    }

    /**
     * Make The Option Available in With site-title Menu in Admin Bar
     */
    public function add_admin_bar_menu($wp_admin_bar) {
        // Check if the user has the capability to manage options
        if (!current_user_can('manage_options')) {
            return;
        }

        // Add the custom menu item under the "Site Name" node
        $wp_admin_bar->add_node(array(
            'parent' => 'site-name', // Add this under the "Site Name" node
            'id'     => 'CHARMING_PORTFOLIO', // Unique ID for the menu item
            'title'  => 'Portfolio', // Title of the menu item
            'href'   => admin_url('admin.php?page=CHARMING_PORTFOLIO_page'), // URL when the menu item is clicked
            'meta'   => array('class' => 'charming-portfolio') // Additional properties (optional)
        ));
    }
    public function add_submenu()
    {
    }

    public function add_additional_submenu()
    {
    }

    /**
     * Main Option Page For Portfolio Page
     */
    public function portfolio_html()
    {
        $saved_values = $this->display_saved_value();
        ?>
        <div class="admin-portfolio-page__container">
            <div class="admin-portfolio-page">
                <?php CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio','preview', $saved_values); ?>
            </div>
        </div>
        <?php
}
    /**
     * Submenu Option Page For Portfolio Page
     */
    public function portfolio_submenu_html()
    {
        $portfolio_saved_data = $this->display_saved_value();
        $field                = get_option('CHARMING_PORTFOLIO_data');
        ?>
        <div class="admin-portfolio-modify__container">
            <div class="admin-portfolio-modify">
                <div class="page-title">
                    <h2><?php esc_html__("Modify Your Informations Here:-","charming-portfolio"); ?></h2>
                </div>
                <form class="page-contents" method="POST">
                        <!-- basic settings -->
                        <?php CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio','basic', $portfolio_saved_data); ?>
                        <!-- About Me  -->
                        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "aboutme", $portfolio_saved_data);?>
                        <!-- Contact Options -->
                        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "contact", $portfolio_saved_data);?>
                        <!-- social links -->
                        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "social-links", $portfolio_saved_data);?>
                        <!-- links to show on header menu -->
                        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "header-links", $portfolio_saved_data);?>
                        <!-- links to show on footer -->
                        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "footer-links", $portfolio_saved_data);?>
                        <!-- choose layout -->
                        <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "layout", $portfolio_saved_data);?>

                        <input type="hidden" name="charming-portfolio__nonce" value="<?php echo esc_attr(wp_create_nonce("CHARMING_PORTFOLIO_modify_page__nonce")) ?>">
                        <div class="btn-wrapper">
                            <input type="submit" name="update_portfolio_data" value="UPDATE" class="charming-portfolio-save-data btn btn-fullwidth">
                            <span></span>
                        </div>

                </form>
            </div>
        </div>
        <?php
}
    /**
     * Additional Informations. Eg: Skills, Experience, Projects etc.
     */
    public function portfolio_additional_submenu_html()
    {
        ?>
    <div class="admin-portfolio-additionals__container">
        <div class="admin-portfolio-additionals">
            <div class="page-title">
                <h2><?php esc_html__("Customize Your Additional Informations Here:","charming-portfolio"); ?></h2>
            </div>
            <form class="page-contents" method="POST">
                <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", 'skills', $this->display_saved_value());?>
                <?php  CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", 'experience', $this->display_saved_value());?>
                <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", 'works', $this->display_saved_value());?>
                <input type="hidden" name="charming-portfolio__nonce" value="<?php echo esc_attr(wp_create_nonce("CHARMING_PORTFOLIO_modify_additionals__nonce")) ?>">
                <div class="btn-wrapper">
                    <input type="button" name="update_portfolio_data" value="Update" class="btn btn-fullwidth charming-portfolio-save-additional-data">
                    <span></span>
                </div>

            </form>
        </div>
    </div>
        <?php
    }



    /**
     * This Function Will Return The Saved Value
     */
    public function display_saved_value_dep()
    {
        $option_value            = get_option("CHARMING_PORTFOLIO_data");
        $additional_option_value = get_option("CHARMING_PORTFOLIO_additional_data");
		$saved_values            = [
            'enabled'  		=> false,
            'enabled_blog' => false,
            'client_render'     => true,
            'name'              => 'Charm',
            'user_image'        => CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg",
            'user_image2'       => CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg",
            'email'             => 'abc@gmail.com',
            'phone'             => '12345678902',
            'short_description' => "Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            'address'           => "Earth",
            'description'       => "Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            'available'         => "",
            'social_links'      => [],
            'skills'            => [],
        ];
		if (is_array($option_value)) {
	    $enabled 	       = array_key_exists("enabled", $option_value) ? $option_value["enabled"] : false;

	    $enabled_blog 	       = array_key_exists("enabled_blog", $option_value) ? $option_value["enabled_blog"] : false;
            $client_render     = true;
            $name              = array_key_exists("name", $option_value) ? $option_value["name"] : "";
            $image             = (array_key_exists("image", $option_value) && !empty($option_value['image'])) ? $option_value["image"] : CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg";
            $image2            = (array_key_exists("image_2", $option_value) && !empty($option_value['image_2'])) ? $option_value["image_2"] : CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg";
            $email             = array_key_exists("email", $option_value) ? $option_value["email"] : "abc@gmail.com";
            $phone             = array_key_exists("phone", $option_value) ? $option_value["phone"] : "1234567890";
            $short_description = array_key_exists("short_description", $option_value) ? $option_value["short_description"] : "";
            $description       = array_key_exists("description", $option_value) ? $option_value["description"] : "";
            $address           = array_key_exists("address", $option_value) ? $option_value["address"] : "";
            $available         = (array_key_exists("available", $option_value) && $option_value['available'] === 'on') ? 'True' : "False";
            $social_links      = array_key_exists("social_link", $option_value) ? CHARMING_PORTFOLIO_load_social($option_value['social_link']) : [];
	$saved_values      = [
                'enabled' => $enabled,
                'enabled_blog' => $enabled_blog,
                'client_render' => $client_render,
                'name'              => $name,
                'user_image'        => $image,
                'user_image2'       => $image2,
                'email'             => $email,
                'phone'             => $phone,
                'short_description' => $short_description,
                'description'       => $description,
                'address'           => $address,
                'available'         => $available,
                'social_links'      => $social_links,
                'skills'            => [],
                'experiences'       => [],
                'works'             => [],
            ];
        }

        if (is_array($additional_option_value)) {
            $skills      = array_key_exists("skills", $additional_option_value) ? CHARMING_PORTFOLIO_load_skills($additional_option_value["skills"]) : [];
            $experiences = array_key_exists("experiences", $additional_option_value) ? CHARMING_PORTFOLIO_load_experience($additional_option_value["experiences"]) : [];
            $works       = array_key_exists("works", $additional_option_value) ? CHARMING_PORTFOLIO_load_works($additional_option_value["works"]) : [];
        } else {
            $skills      = [];
            $experiences = [];
            $works       = [];
        }
        $saved_values['skills']      = $skills;
        $saved_values['experiences'] = $experiences;
        $saved_values['works']       = $works;

        return $saved_values;
    }


    public function display_saved_value()
    {
        $option_value            = get_option("CHARMING_PORTFOLIO_v2");
        $additional_option_value = get_option("CHARMING_PORTFOLIO_additional_v2");
        // return $additional_option_value;

		if (is_array($option_value)) {
	        $enabled 	       = array_key_exists("enabled", $option_value) ? $option_value["enabled"] : false;

	        $enabled_blog 	       = array_key_exists("enabled_blog", $option_value) ? $option_value["enabled_blog"] : false;
            $client_render     = true;
            $name              = array_key_exists("name", $option_value) ? $option_value["name"] : "";
            $desig              = array_key_exists("designation", $option_value) ? $option_value["designation"] : "";
            $image             = (array_key_exists("image", $option_value) && !empty($option_value['image'])) ? $option_value["image"] : CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg";
            $image2            = (array_key_exists("image_2", $option_value) && !empty($option_value['image_2'])) ? $option_value["image_2"] : CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg";
            $email             = array_key_exists("email", $option_value) ? $option_value["email"] : "abc@gmail.com";
            $phone             = array_key_exists("phone", $option_value) ? $option_value["phone"] : "1234567890";
            $short_description = array_key_exists("short_description", $option_value) ? $option_value["short_description"] : "";
            $description       = array_key_exists("description", $option_value) ? $option_value["description"] : "";
            $address           = array_key_exists("address", $option_value) ? $option_value["address"] : "";
            $available         = array_key_exists("available", $option_value) ? $option_value["available"] : false;
            $social_links      = array_key_exists("social_links", $option_value) ? $option_value['social_links'] : [];
            $header_links      = array_key_exists("header_links", $option_value) ? $option_value['header_links'] : [];
            $footer_links      = array_key_exists("footer_links", $option_value) ? $option_value['footer_links'] : [];
            $layout            = array_key_exists("layout", $option_value) ? $option_value['layout'] : 'charming_v2';
        	$saved_values      = [
                'enabled' => $enabled,
                'enabled_blog' => $enabled_blog,
                'client_render' => $client_render,
                'name'              => $name,
                'designation'       => $desig,
                'user_image'        => $image,
                'user_image2'       => $image2,
                'email'             => $email,
                'phone'             => $phone,
                'short_description' => $short_description,
                'description'       => $description,
                'address'           => $address,
                'available'         => $available,
                'social_links'      => $social_links,
                'header_links'      => $header_links,
                'footer_links'      => $footer_links,
                'layout'            => $layout,
                'skills'            => [],
                'experiences'       => [],
                'works'             => [],
            ];
        }
        
        if (is_array($additional_option_value)) {
            $skills      = array_key_exists("skills", $additional_option_value) ? $additional_option_value["skills"] : [];
            $experiences = array_key_exists("experiences", $additional_option_value) ? $additional_option_value["experiences"] : [];
            $works       = array_key_exists("works", $additional_option_value) ? $additional_option_value["works"] : [];
        }
        $saved_values['skills']      = $skills ?? [];
        $saved_values['experiences'] = $experiences ?? [];
        $saved_values['works']       = $works ?? [];

        return $saved_values;
    }


    /**
     * Sanitize The Array
     * @param array $input_array
     */
    public function sanitize_array($input_array)
    {
        if (is_array($input_array)) {
            return array_map([$this, 'sanitize_array'], $input_array);
        } else {
            return is_scalar($input_array) ? sanitize_text_field($input_array) : $input_array;
        }
    }
    
    /**
     * Load Media To Make Image Upload Possible
     */
    public function load_media()
    {
        wp_enqueue_media();
    }

    /**
     * Social icon name mapping with fontawesome classes
     */
    public function get_social_icon_classes($name)
    {
        $name = strtolower($name);
        $mapping = [
            'facebook'  => 'fab fa-facebook-f',
            'twitter'   => 'fab fa-twitter',
            'instagram' => 'fab fa-instagram',
            'linkedin'  => 'fab fa-linkedin-in',
            'github'    => 'fab fa-github',
            'youtube'   => 'fab fa-youtube',
            'pinterest' => 'fab fa-pinterest',
            'tiktok'    => 'fab fa-tiktok'
        ];
        return isset($mapping[$name]) ? $mapping[$name] : 'fas fa-link';
    }
    /**
     * Get Experience Timerange
     */
    public function get_experience_timerange($experience) {
        $start_date = $experience['start_date'] ?? '';
        $end_date = $experience['end_date'] ?? '';
        $is_working = $experience['working'] ?? "0";
        if(!empty($start_date)) {
            $start_date = date("M Y", strtotime($start_date));
        }
        if(!empty($end_date)) {
            $end_date = date("M Y", strtotime($end_date));
        }

        if (intval($is_working) === 1) {
            return $start_date . ' - Present';
        } elseif (!empty($start_date) && !empty($end_date)) {
            return $start_date . ' - ' . $end_date;
        } elseif (!empty($start_date)) {
            return $start_date;
        } else {
            return '';
        }
    }
}
