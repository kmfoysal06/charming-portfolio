<?php
/**
 * Load Blogs Conditionaly or Latest
 * @package Charming Portfolio
 * @since 1.5.1
 */

namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;

//using singleton for all of the classes so they only instantiate once
use CHARMING_PORTFOLIO\Inc\Traits\Singleton;

class Blogs
{
    use Singleton;
    public function __construct()
    {
        $this->setup_hook();
    }
    public function setup_hook()
    {
    }
    public function load_latest_blogs($limit = 5) {
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => $limit,
            'post_status' => 'publish',
        );

        $query = new \WP_Query($args);

        //load title, excerpt, thumbnail, author, category time in array 
        $blogs = [];
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $blogs[] = [
                    'title' => get_the_title(),
                    'excerpt' => get_the_excerpt(),
                    'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'medium'),
                    'author' => get_the_author(),
                    'categories' => get_the_category(),
                    'time' => get_the_time('F j, Y'),
                ];
            }
            wp_reset_postdata();
        }
        return $blogs;
    }

}
