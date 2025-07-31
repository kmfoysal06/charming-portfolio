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
        if (is_array($modified_data['social_link']) && !empty($modified_data['social_link'])) {
            foreach ($modified_data['social_link'] as $key => $value) {
                if (!preg_match("/^[a-zA-Z\s]{2,30}$/", $key)) {
                    wp_send_json([
                        'success' => false,
                        'message' => 'social link name invalid'
                    ]);
                }
                if (!filter_var($value, FILTER_VALIDATE_URL)) {
                    wp_send_json([
                        'success' => false,
                        'message' => 'social link url invalid'
                    ]);
                }
            }
        }
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
            //  'data' => $modified_data
        ]);
    }
    public function save_data_additional() {
    
    }
}
