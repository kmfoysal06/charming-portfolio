<?php
/**
 * Load All Ajax Actions
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;

//using singleton for all of the classes so they only instantiate once
use CHARMING_PORTFOLIO\Inc\Traits\Singleton;

class Actions
{
    use Singleton;

  
    public function __construct()
    {
        $this->setup_hook();
            }
    public function setup_hook()
    {
        /**
         * save data to db as option
         */
        add_action('wp_ajax_charming_portfolio_save_data', [$this, 'save_data']);
        add_action('wp_ajax_charming_portfolio_save_data_additional', [$this, 'save_data_additional']);
    }
    public function save_data() {
        if ( ! check_ajax_referer( 'charming_portfolio_save_data', 'nonce', false ) ) {
            wp_send_json([
                'success' => false,
                'message' => 'bot or unsafe request detected'
            ]);
        }
        $modified_data = PORTFOLIO::get_instance()->sanitize_array(wp_unslash($_POST));
        // remove action and nonce 
        unset($modified_data['action']);
        unset($modified_data['nonce']);

        // check for name is valid and it should between 2 to 20 words
        if (!preg_match("/^[a-zA-Z\s]{2,30}$/", $modified_data['name'])) {
            wp_send_json([
                'success' => false,
                'message' => 'name invalid'
            ]);
        }
        // validation for email and phone
        if (!filter_var($modified_data['email'], FILTER_VALIDATE_EMAIL)) {
            wp_send_json([
                'success' => false,
                'message' => 'mail invalid'
            ]);
        }
        // phone should be in 11 to 18 digits
        if (!preg_match("/^\+?[0-9]{11,18}$/", $modified_data['phone'])) {
            wp_send_json([
                'success' => false,
                'message' => 'phone invalid'
            ]);
        }
        //validation of social link
        // if (is_array($modified_data['social_link']) && !empty($modified_data['social_link'])) {
        //     foreach ($modified_data['social_link'] as $key => $value) {
        //         if (!preg_match("/^[a-zA-Z\s]{2,30}$/", $key)) {
        //             wp_send_json([
        //                 'success' => false,
        //                 'message' => 'social link name invalid'
        //             ]);
        //         }
        //         if (!filter_var($value, FILTER_VALIDATE_URL)) {
        //             wp_send_json([
        //                 'success' => false,
        //                 'message' => 'social link url invalid'
        //             ]);
        //         }
        //     }
        // }
        $social_links = json_decode(wp_unslash($modified_data['social_links']), true);
        $social_links = array_map(function($single_link){
            // wp_unslash and sanitize 
            $single_link['name'] = sanitize_text_field(wp_unslash($single_link['name']));
            $single_link['url'] = esc_url_raw(wp_unslash($single_link['url']));
            return $single_link;
        }, $social_links);
        $modified_data['social_links'] = $social_links;
        if (isset($modified_data['short_description']) && strlen($modified_data['short_description']) > 200) {
            wp_send_json([
                'success' => false,
                'message' => 'Short description is too long! It should be less than 200 words'
            ]);
        }
        if (isset($modified_data['description']) && strlen($modified_data['description']) > 800) {
            wp_send_json([
                'success' => false,
                'message' => 'Description is too long! It should be less than 800 words'
            ]);
        }
        // validate both image
        if (isset($modified_data['image']) && !filter_var($modified_data['image'], FILTER_VALIDATE_URL)) {
            wp_send_json([
                'success' => false,
                'message' => 'Invalid Image URL!'
            ]);
        }
        if (isset($modified_data['image_2']) && !filter_var($modified_data['image_2'], FILTER_VALIDATE_URL)) {
            wp_send_json([
                'success' => false,
                'message' => 'Invalid Image 2 URL!'
            ]);
        }
        if (isset($modified_data['address']) && strlen($modified_data['address']) > 100) {
            wp_send_json([
                'success' => false,
                'message' => 'Address is too long! It should be less than 100 words'
            ]);
        }

        update_option('CHARMING_PORTFOLIO_v2', $modified_data);
        wp_send_json([
            'success' => true,
            'message' => 'Data saved successfully',
             'data' => $social_links
        ]);
    }
    public function save_data_additional() {
            if(! check_ajax_referer('charming_portfolio_save_data', 'nonce', false )) {
                wp_send_json([
                    'success' => false,
                    'message' => 'Bot Detected! Please try again later.',
                ]);
            }

            $modified_data = PORTFOLIO::get_instance()->sanitize_array(wp_unslash($_POST));
            $skills = $modified_data['skills'] ?? "[]";
            $skills = json_decode(wp_unslash($skills), true);



            array_map(function($skill){
                // sanitize skill name
                $skill['name'] = sanitize_text_field(wp_unslash($skill['name']));
                // validate image url
                if (isset($skill['image']) && !filter_var($skill['image'], FILTER_VALIDATE_URL)) {
                    wp_send_json([
                        'success' => false,
                        'message' => 'Invalid Skill Image URL!'
                    ]);
                }
                return $skill;
            }, $skills);
            wp_send_json([
                'success' => true,
                'message' => 'Skills data saved successfully',
                'data' => $skills
            ]);

            //validations
            // if (isset($modified_data['skills']) && is_array($modified_data['skills'])) {
            //     foreach ($modified_data['skills'] as $skill) {
            //         foreach ($skill as $single_skill) {
            //             if (empty($single_skill['name'])) {
            //                 continue;
            //             }

            //             if (strlen($single_skill['name']) > 25) {
            //                 add_action('admin_notices', function () {
            //                     echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Skill Name is too long! It should be less than 25 words','charming-portfolio').'</p></div>';
            //                 });
            //                 return;
            //             }
            //         }
            //     }
            // }
            // if (isset($modified_data['experiences']) &&is_array($modified_data['experiences'])) {
            //     foreach ($modified_data['experiences'] as $experience) {
            //         foreach ($experience as $single_experience) {
            //             if (isset($single_experience['institution'])) {
            //                 if (empty($single_experience['institution'])) {
            //                     continue;
            //                 }

            //                 if (strlen($single_experience['institution']) > 30) {
            //                     add_action('admin_notices', function () {
            //                         echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Institution Name is too long! It should be less than 30 words','charming-portfolio').'</p></div>';
            //                     });
            //                     return;
            //                 }
            //             }elseif(isset($single_experience['post-title'])){
            //                 if(empty($single_experience['post-title'])) continue;
            //                 if(strlen($single_experience['post-title']) > 30){
            //                     add_action('admin_notices', function () {
            //                         echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Post Title is too long! It should be less than 30 words','charming-portfolio').'</p></div>';
            //                     });
            //                     return;
            //                 }
            //             }elseif(isset($single_experience['responsibility'])){
            //                 if(empty($single_experience['responsibility'])) continue;
            //                 if(strlen($single_experience['responsibility']) > 800){
            //                     add_action('admin_notices', function () {
            //                         echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__("Responsibility is too long! It should be less than 200 words","charming-portfolio").'</p></div>';
            //                     });
            //                     return;
            //                 }
            //             }elseif(isset($single_experience['start_date'])){
            //                 if(empty($single_experience['start_date'])) continue;
            //                 // only date must be contain
            //                 if(!preg_match("/[0-9]{4}-[0-9]{2}-[0-9]{2}/",$single_experience['start_date'])){
            //                     add_action('admin_notices', function () {
            //                         echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Start Date is Invalid',"charming-portfolio").'!</p></div>';
            //                     });
            //                     return;
            //                 }
            //             }elseif(isset($single_experience['end_date'])){
            //                 if(empty($single_experience['end_date'])) continue;
            //                 // only date must be contain
            //                 if(!preg_match("/[0-9]{4}-[0-9]{2}-[0-9]{2}/",$single_experience['end_date'])){
            //                     add_action('admin_notices', function () {
            //                         echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('End Date is Invalid',"charming-portfolio").'</p></div>';
            //                     });
            //                     return;
            //                 }
            //             }
            //         }
            //     }
            // }
            // if (isset($modified_data['works']) && is_array($modified_data['works'])) {
            //     foreach ($modified_data['works'] as $work) {
            //             if (empty($work['title'])) {
            //                 continue;
            //             }

            //             if (strlen($work['title']) > 30) {
            //                 add_action('admin_notices', function () {
            //                     echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__('Project Title is too long! It should be less than 30 words','charming-portfolio').'</p></div>';
            //                 });
            //                 return;
            //             }
            //             if (strlen($work['description']) > 800) {
            //                 add_action('admin_notices', function () {
            //                     echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__("Project Description is too long! It should be less than 800 words","charming-portfolio").'</p></div>';
            //                 });
            //                 return;
            //             }
            //             if (strlen($work['tags']) > 200) {
            //                 add_action('admin_notices', function () {
            //                     echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__("Project Tags is too long! It should be less than 200 words","charming-portfolio").'</p></div>';
            //                 });
            //                 return;
            //             }
            //             if (!filter_var($work['link'], FILTER_VALIDATE_URL)) {
            //                 add_action('admin_notices', function () {
            //                     echo '<div class="notice notice-error is-dismissible"><p>'.esc_html__("Invalid URL!Try to add http:// or https://","charming-portfolio").'</p></div>';
            //                 });
            //                 return;
            //             }

            //     }
            // }

            // if (update_option('CHARMING_PORTFOLIO_additional_data', $modified_data)) {
            //     // Display success message
            //     add_action('admin_notices', function () {
            //         echo '<div class="notice notice-success is-dismissible"><p>'.esc_html__("Data saved successfully!","charming-portfolio").'</p></div>';
            //     });
            // }
        }
}
