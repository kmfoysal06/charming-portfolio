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
            unset($_POST['action']);
            unset($_POST['nonce']);

            $modified_data = PORTFOLIO::get_instance()->sanitize_array(wp_unslash($_POST));
            $skills = $modified_data['skills'] ?? "[]";
            $skills = json_decode(wp_unslash($skills), true);
            $projects = $modified_data['works'] ?? "[]";
            $projects = json_decode(wp_unslash($projects), true);
            $experiences = $modified_data['experiences'] ?? "[]";
            $experiences = json_decode(wp_unslash($experiences), true);



            $skills = array_map(function($skill){
                // sanitize skill name
                $skill['name'] = sanitize_text_field(wp_unslash($skill['name']));
                return $skill;
            }, $skills);

            $experiences = array_map(function($experience){
                // sanitize institution name
                $experience['institution'] = sanitize_text_field(wp_unslash($experience['institution']));
                // sanitize post title
                $experience['post-title'] = sanitize_text_field(wp_unslash($experience['post_title']));
                unset($experience['post_title']);
                // sanitize responsibility
                $experience['responsibility'] = sanitize_textarea_field(wp_unslash($experience['responsibility']));
                // validate start date
                if (isset($experience['start_date']) && !preg_match("/[0-9]{4}-[0-9]{2}-[0-9]{2}/", $experience['start_date'])) {
                    wp_send_json([
                        'success' => false,
                        'message' => 'Invalid Start Date!'
                    ]);
                }
                // validate end date
                if (isset($experience['end_date']) && !preg_match("/[0-9]{4}-[0-9]{2}-[0-9]{2}/", $experience['end_date'])) {
                    wp_send_json([
                        'success' => false,
                        'message' => 'Invalid End Date!'
                    ]);
                }
                return $experience;
            }, $experiences);

            $projects = array_map(function($project){
                // sanitize project title
                $project['title'] = sanitize_text_field(wp_unslash($project['title']));
                // sanitize project description
                $project['description'] = sanitize_textarea_field(wp_unslash($project['description']));
                // sanitize project tags
                $project['tags'] = sanitize_text_field(wp_unslash($project['tags']));
                $project['link'] = esc_url_raw(wp_unslash($project['link']));
                return $project;
            }, $projects);
            
            $modified_data['skills'] = $skills;
            $modified_data['works'] = $projects;
            $modified_data['experiences'] = $experiences;
            
            update_option('CHARMING_PORTFOLIO_additional_v2', $modified_data);
            wp_send_json([
                'success' => true,
                'message' => 'Skills data saved successfully',
                'data' => [$modified_data]
            ]);

        }
}
