<?php
/**
 * Main Class
 * @package Charming Portfolio
 */
namespace CHARMING_PORTFOLIO\Inc\Classes;

if ( ! defined( 'ABSPATH' ) ) exit;
//using singleton for all of the classes so they only instantiate once
use CHARMING_PORTFOLIO\Inc\Traits\Singleton;

class PORTFOLIO_PLUGIN{
    use Singleton;
    private $is_migrated_option = 'charming_portfolio_migrated_v2_data';
    
	public function __construct()
	{
        Assets::get_instance();
        Portfolio::get_instance();
        Actions::get_instance();
        
        $this->init_hooks();
	}
    public function init_hooks() {
        add_action('init', [$this, 'migrate']);
    }
    public function is_migrated() {
        return get_option($this->is_migrated_option, false);
    }
    public function set_migrated() {
        update_option($this->is_migrated_option, true);
        error_log('Charming Portfolio: Migration to v2 completed successfully.');
    }
    public function migrate() {
        if ($this->is_migrated()) {
            return;
        }

        $cp_data = get_option('CHARMING_PORTFOLIO_data', []);
        if (empty($cp_data)) {
            return;
        }
        $migrate_data = $this->migrate_data($cp_data);
        update_option('CHARMING_PORTFOLIO_v2', $migrate_data);

        $cp_additional_data = get_option('CHARMING_PORTFOLIO_additional_data', []);

        if (empty($cp_additional_data)) {
            return;
        }
        $migrate_additional_data = $this->migrate_additional_data($cp_additional_data);
        update_option('CHARMING_PORTFOLIO_additional_v2', $migrate_additional_data);
        
        $this->set_migrated();
    }
    public function migrate_data($input) {
        $output = [
            'enabled' => $input['enabled'] === 'on' ? 1 : 0,
            'enabled_blog' => 1,
            'name' => $input['name'] ?? '',
            'image' => $input['image'] ?? '',
            'short_description' => $input['short_description'] ?? '',
            'address' => $input['address'] ?? '',
            'available' => $input['available'] === 'on' ? 1 : 0,
            'description' => $input['description'] ?? '',
            'image2' => $input['image_2'] ?? 'undefined',
            'email' => $input['email'] ?? '',
            'phone' => $input['phone'] ?? '',
            'social_links' => []
        ];

        // Convert social_link to social_links
        if (!empty($input['social_link']) && is_array($input['social_link'])) {
            foreach ($input['social_link'] as $group) {
                $name = '';
                $url = '';

                foreach ($group as $item) {
                    if (isset($item['name']) && !empty($item['name'])) {
                        $name = $item['name'];
                    }
                    if (isset($item['url']) && !empty($item['url'])) {
                        $url = $item['url'];
                    }
                }

                if ($name && $url) {
                    $output['social_links'][] = [
                        'name' => $name,
                        'url' => $url
                    ];
                }
            }
        }
        return $output;
    }
    public function migrate_additional_data($input) {

        $output = [
            'skills' => [],
            'experiences' => [],
            'projects' => [],
        ];

        // Convert skills
        foreach ($input['skills'] as $skillGroup) {
            $skill = [
                'name' => '',
                'image' => '',
            ];

            foreach ($skillGroup as $item) {
                if (isset($item['name'])) {
                    $skill['name'] = $item['name'];
                }
                if (isset($item['image'])) {
                    $skill['image'] = $item['image'];
                }
            }

            // Only add if name or image is present
            if ($skill['name'] || $skill['image']) {
                $output['skills'][] = $skill;
            }
        }

        // Convert experiences
        foreach ($input['experiences'] as $experienceGroup) {
            $experience = [
                'institution' => '',
                'responsibility' => '',
                'start_date' => '',
                'end_date' => '',
                'still_working' => 0,
                'post-title' => '',
            ];

            foreach ($experienceGroup as $item) {
                if (isset($item['institution'])) {
                    $experience['institution'] = $item['institution'];
                }
                if (isset($item['responsibility'])) {
                    // Replace [break] with real line breaks (optional)
                    $experience['responsibility'] = str_replace('[break]', "\n", $item['responsibility']);
                }
                if (isset($item['start_date'])) {
                    $experience['start_date'] = $item['start_date'];
                }
                if (isset($item['end_date'])) {
                    $experience['end_date'] = $item['end_date'];
                }
                if (isset($item['working']) && $item['working'] === 'on') {
                    $experience['still_working'] = 1;
                }
                if (isset($item['post-title'])) {
                    $experience['post-title'] = $item['post-title'];
                }
            }

            // Only add if institution or post-title is present
            if ($experience['institution'] || $experience['post-title']) {
                $output['experiences'][] = $experience;
            }
        }

        // Convert works to projects
        if (!empty($input['works'])) {
            foreach ($input['works'] as $project) {
                // Skip if all values are empty
                if (empty($project['title']) && empty($project['description']) && empty($project['tags']) && empty($project['link'])) {
                    continue;
                }
                $output['works'][] = [
                    'title' => $project['title'] ?? '',
                    'description' => $project['description'] ?? '',
                    'tags' => $project['tags'] ?? '',
                    'link' => $project['link'] ?? '',
                ];
            }
        }
        return $output;
    }
}
