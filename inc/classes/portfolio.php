<?php
/**
 * Customizing Front Page Functionality
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;

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
        add_action("admin_menu", [$this, "add_menu"]);
        add_action('admin_bar_menu', [$this,'add_admin_bar_menu'], 100);
        add_action("admin_menu", [$this, "add_submenu"]);
        add_action("admin_menu", [$this, "add_additional_submenu"]);
        add_action("admin_init", [$this, "save_data"]);
        add_action("admin_init", [$this, "save_additional_data"]);
        add_action('admin_enqueue_scripts', [$this, "load_media"]);
    }
    public function add_menu()
    {
        add_menu_page(
            'Portfolio Page',
            "Portfolio",
            "manage_options",
            "CHARMING_PORTFOLIO_page",
            [$this, "portfolio_html"],
            "dashicons-portfolio"
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
        add_submenu_page(
            "CHARMING_PORTFOLIO_page",
            "Customize Portfolio",
            "Customize Portfolio",
            "manage_options",
            "CHARMING_PORTFOLIO_menu",
            [$this, "portfolio_submenu_html"]
        );
    }

    public function add_additional_submenu()
    {
        add_submenu_page(
            "CHARMING_PORTFOLIO_page",
            "Additional Info",
            "Additional Info",
            "manage_options",
            "charming_portfolio_additional_menu",
            [$this, "portfolio_additional_submenu_html"]
        );
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
                    <h2><?php esc_html_e("Modify Your Informations Here:-","charming-portfolio"); ?></h2>
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

                        <input type="hidden" name="charming-portfolio__nonce" value="<?php echo esc_attr(wp_create_nonce("CHARMING_PORTFOLIO_modify_page__nonce")) ?>">
                        <input type="submit" name="update_portfolio_data" value="UPDATE" class="btn">

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
                <h2><?php esc_html_e("Customize Your Additional Informations Here:","charming-portfolio"); ?></h2>
            </div>
            <form class="page-contents" method="POST">
                <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", 'skills', $this->display_saved_value());?>
                <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", 'experience', $this->display_saved_value());?>
                <?php CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", 'works', $this->display_saved_value());?>
                <input type="hidden" name="charming-portfolio__nonce" value="<?php echo esc_attr(wp_create_nonce("CHARMING_PORTFOLIO_modify_additionals__nonce")) ?>">
                <input type="submit" name="update_portfolio_data" value="UPDATE" class="btn">

            </form>
        </div>
    </div>
        <?php
    }

    /**
     * Updating Informations About Portfolio
     */
    public function save_data()
    {
        // validations
        if (isset($_POST['update_portfolio_data'])) {
            if (!isset($_POST['charming-portfolio__nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['charming-portfolio__nonce'])), 'CHARMING_PORTFOLIO_modify_page__nonce')) {
                return;
            }
            if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
                return;
            }

            if (!current_user_can('manage_options')) {
                return;
            }

            $modified_data = $this->sanitize_array($_POST['CHARMING_PORTFOLIO']);

            // check for name is valid and it should between 2 to 20 words
            if (!preg_match("/^[a-zA-Z\s]{2,30}$/", $modified_data['name'])) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Name is not valid! It should be between 2 to 20 words","charming-portfolio").'</p></div>';
                });
                return;
            }
            // validation for email and phone
            if (!filter_var($modified_data['email'], FILTER_VALIDATE_EMAIL)) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Email is not valid!","charming-portfolio").'</p></div>';
                });
                return;
            }
            // phone should be in 11 to 18 digits
            if (!preg_match("/^\+?[0-9]{11,18}$/", $modified_data['phone'])) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Phone is not valid! It should be between 11 to 18 digits","charming-portfolio").'</p></div>';
                });
                return;
            }
            //validation of social link
            if (is_array($modified_data['social_link']) && !empty($modified_data['social_link'])) {
                foreach ($modified_data['social_link'] as $social_link) {
                    // $social_link is array of arrays of name url name url name url
                    foreach ($social_link as $single_social_link) {
                        if (empty($single_social_link['url'])) {
                            continue;
                        }

                        if (empty($single_social_link['name'])) {
                            continue;
                        }

                        if (isset($single_social_link['url']) && !filter_var($single_social_link['url'], FILTER_VALIDATE_URL)) {
                            add_action('admin_notices', function () {
                                echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Invalid Social Link!","charming-portfolio").'</p></div>';
                            });
                            return;
                        }
                    }
                }
            }
            if (isset($modified_data['short_description']) && strlen($modified_data['short_description']) > 200) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Short Description is too long! It should be less than 200 words','charming-portfolio').'</p></div>';
                });
                return;
            }
            if (isset($modified_data['description']) && strlen($modified_data['description']) > 800) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e('Description is too long! It should be less than 800 words','charming-portfolio').'</p></div>';
                });
                return;
            }
            // validate both image
            if (isset($modified_data['image']) && !filter_var($modified_data['image'], FILTER_VALIDATE_URL)) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Invalid Image URL!','charming-portfolio').'</p></div>';
                });
                return;
            }
            if (isset($modified_data['image_2']) && !filter_var($modified_data['image_2'], FILTER_VALIDATE_URL)) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Invalid Image URL!','charming-portfolio').'</p></div>';
                });
                return;
            }
            if (isset($modified_data['address']) && strlen($modified_data['address']) > 100) {
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Address is too long! It should be less than 100 words','charming-portfolio').'</p></div>';
                });
                return;
            }

            if (update_option('CHARMING_PORTFOLIO_data', $modified_data)) {
                // Display success message
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-success is-dismissible"><p>'.esc_html__('Data saved successfully!','charming-portfolio').'</p></div>';
                });
            }
        }

    }
    /**
     * Updating Additional Informations About Portfolio.
     */
    public function save_additional_data()
    {
        if (isset($_POST['update_portfolio_data'])) {
            //validations
            if (!isset($_POST['charming-portfolio__nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['charming-portfolio__nonce'])), 'CHARMING_PORTFOLIO_modify_additionals__nonce')) {
                return;
            }
            if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
                return;
            }

            if (!current_user_can('manage_options')) {
                return;
            }

            $modified_data = $this->sanitize_array($_POST['CHARMING_PORTFOLIO']);
            
            //validations
            if (isset($modified_data['skills']) && is_array($modified_data['skills'])) {
                foreach ($modified_data['skills'] as $skill) {
                    foreach ($skill as $single_skill) {
                        if (empty($single_skill['name'])) {
                            continue;
                        }

                        if (strlen($single_skill['name']) > 25) {
                            add_action('admin_notices', function () {
                                echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Skill Name is too long! It should be less than 25 words','charming-portfolio').'</p></div>';
                            });
                            return;
                        }
                    }
                }
            }
            if (isset($modified_data['experiences']) &&is_array($modified_data['experiences'])) {
                foreach ($modified_data['experiences'] as $experience) {
                    foreach ($experience as $single_experience) {
                        if (isset($single_experience['institution'])) {
                            if (empty($single_experience['institution'])) {
                                continue;
                            }

                            if (strlen($single_experience['institution']) > 30) {
                                add_action('admin_notices', function () {
                                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Institution Name is too long! It should be less than 30 words','charming-portfolio').'</p></div>';
                                });
                                return;
                            }
                        }elseif(isset($single_experience['post-title'])){
                            if(empty($single_experience['post-title'])) continue;
                            if(strlen($single_experience['post-title']) > 30){
                                add_action('admin_notices', function () {
                                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Post Title is too long! It should be less than 30 words','charming-portfolio').'</p></div>';
                                });
                                return;
                            }
                        }elseif(isset($single_experience['responsibility'])){
                            if(empty($single_experience['responsibility'])) continue;
                            if(strlen($single_experience['responsibility']) > 800){
                                add_action('admin_notices', function () {
                                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Responsibility is too long! It should be less than 200 words","charming-portfolio").'</p></div>';
                                });
                                return;
                            }
                        }elseif(isset($single_experience['start_date'])){
                            if(empty($single_experience['start_date'])) continue;
                            // only date must be contain
                            if(!preg_match("/[0-9]{4}-[0-9]{2}-[0-9]{2}/",$single_experience['start_date'])){
                                add_action('admin_notices', function () {
                                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Start Date is Invalid',"charming-portfolio").'!</p></div>';
                                });
                                return;
                            }
                        }elseif(isset($single_experience['end_date'])){
                            if(empty($single_experience['end_date'])) continue;
                            // only date must be contain
                            if(!preg_match("/[0-9]{4}-[0-9]{2}-[0-9]{2}/",$single_experience['end_date'])){
                                add_action('admin_notices', function () {
                                    echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('End Date is Invalid',"charming-portfolio").'</p></div>';
                                });
                                return;
                            }
                        }
                    }
                }
            }
            if (isset($modified_data['works']) && is_array($modified_data['works'])) {
                foreach ($modified_data['works'] as $work) {
                        if (empty($work['title'])) {
                            continue;
                        }

                        if (strlen($work['title']) > 30) {
                            add_action('admin_notices', function () {
                                echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Project Title is too long! It should be less than 30 words','charming-portfolio').'</p></div>';
                            });
                            return;
                        }
                        if (strlen($work['description']) > 800) {
                            add_action('admin_notices', function () {
                                echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Project Description is too long! It should be less than 800 words","charming-portfolio").'</p></div>';
                            });
                            return;
                        }
                        if (strlen($work['tags']) > 200) {
                            add_action('admin_notices', function () {
                                echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Project Tags is too long! It should be less than 200 words","charming-portfolio").'</p></div>';
                            });
                            return;
                        }
                        if (!filter_var($work['link'], FILTER_VALIDATE_URL)) {
                            add_action('admin_notices', function () {
                                echo '<div class="notice notice-error is-dismissible"><p>'.esc_html_e("Invalid URL!Try to add http:// or https://","charming-portfolio").'</p></div>';
                            });
                            return;
                        }

                }
            }

            if (update_option('CHARMING_PORTFOLIO_additional_data', $modified_data)) {
                // Display success message
                add_action('admin_notices', function () {
                    echo '<div class="notice notice-success is-dismissible"><p>'.esc_html_e("Data saved successfully!","charming-portfolio").'</p></div>';
                });
            }
        }
    }

    /**
     * Return The Saved Value as Array.
     * @param string $type default text
     * @param string $data_key default empty string
     */
    public function saved_value($type = 'text', $data_key = '')
    {
        $option_value = get_option("CHARMING_PORTFOLIO_data");

        if (is_array($option_value) && array_key_exists($data_key, $option_value)) {
            return $option_value[$data_key];
        } else {
            return "";
        }
    }

    /**
     * This Function Will Return The Saved Value
     */
    public function display_saved_value()
    {
        $option_value            = get_option("CHARMING_PORTFOLIO_data");
        $additional_option_value = get_option("CHARMING_PORTFOLIO_additional_data");
        $saved_values            = [
            'name'              => 'Charm',
            'user_image'        => CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg",
            'user_image2'       => CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/charming_portfolio-default-avater.jpg",
            'email'             => 'abc@gmail.com',
            'phone'             => '1234567890',
            'short_description' => "Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            'address'           => "Earth",
            'description'       => "Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!Hi, This Is Default Lorem Ipsum Description For You Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            'available'         => "",
            'social_links'      => [],
            'skills'            => [],
        ];
        if (is_array($option_value)) {
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
}
