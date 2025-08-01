<?php
/**
 * All functions for plugin functionality
 * @package Charming Portfolio
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Get Template Part For Plugin
 */
if (!function_exists('CHARMING_PORTFOLIO_get_template_part')) {
    function CHARMING_PORTFOLIO_get_template_part($slug, $name = null, $args = []) {
        // Define the template path
        $template_path = plugin_dir_path(__FILE__);
        $plugin_root_path = dirname(dirname($template_path)) . '/';

        // Construct the template file name
        $template = $plugin_root_path . $slug;
        if ($name) {
            $template .= '-' . $name;
        }
        $template .= '.php';

        // Load the template file if it exists
        if (file_exists($template)) {
            load_template($template, false, $args);
        }
    }
}

/**
 * Return Template Part For Plugin
 */
if (!function_exists('CHARMING_PORTFOLIO_return_template_part')) {
    function CHARMING_PORTFOLIO_return_template_part($slug, $name = null, $args = []) {
        ob_start();
        charming_portfolio_get_template_part($slug, $name, $args);
        $output = ob_get_clean();
        return $output;
    }
}

/**
 * Returns An Array Of Social Links In Easy To Iterate Format.
 * For Returning The Complex Social Links Array That Stored In Database In A Complex Array Format.
 * @param array $social_links
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_load_social")) {
    function CHARMING_PORTFOLIO_load_social($social_links) {
        if (isset($social_links) && is_array($social_links) && !empty($social_links)) {
            $social_links_array = [];
            foreach ($social_links as $link) {
                if (isset($link['name']) && isset($link['url'])) {
                    $name = $link['name'];
                    $url  = $link['url'];
                    array_push($social_links_array, ['name' => $name, 'url' => $url]);
                } else {
                    $currentPair = [];
                    foreach ($link as $item) {
                        if (!empty($item["name"])) {
                            $currentPair["name"] = $item["name"];
                        } elseif (!empty($item["url"])) {
                            $currentPair["url"] = $item["url"];
                        }
                        if (count($currentPair) === 2) {
                            $social_links_array[] = $currentPair;
                            $currentPair = [];
                        }
                    }
                }
            }
            return $social_links_array;
        }
    }
}

/**
 * Display social links as normal HTML link in portfolio menu page.
 * @param array $social_links
 * @return void
 */
if (!function_exists("CHARMING_PORTFOLIO_link_social")) {
    function CHARMING_PORTFOLIO_link_social($social_links) {
        foreach ($social_links as $social_link) {
            echo '<a href="' . esc_attr(is_array($social_link['url']) ? implode('', $social_link['url']) : $social_link['url']) . '" target="_blank">' . esc_attr(is_array($social_link['name']) ? implode('', $social_link['name']) : $social_link['name']) . '</a> ';
        }
    }
}

/**
 * Display Social Links Using Dashicons In Frontend If They Exist.
 * @param array $social_links
 * @return void
 */
if (!function_exists("CHARMING_PORTFOLIO_link_social_frontend")) {
    function CHARMING_PORTFOLIO_link_social_frontend($social_links) {
        /**
         * The $allowed_icons array contains the list of icons that available on dashicons.
         * The $svgs array contains the list of icons that available on svgs folder.
         */

        $allowed_icons = array(
            'twitter', 'facebook', 'instagram', 'youtube', 'linkedin', 'pinterest', 'podio', 'google', 'reddit', 'wordpress', 'rss', 'whatsapp', 'xing', 'twitch',
        );
        $svgs = array(
            'github'
        );
        foreach ($social_links as $social_link) {
            $icon = strtolower(is_array($social_link['name']) ? implode('', $social_link['name']) : $social_link['name']);
            if (in_array($icon, $allowed_icons)) {
                echo '<a class="simplecharm-portfolio-button-hover" href="' . esc_attr(is_array($social_link['url']) ? implode('', $social_link['url']) : $social_link['url']) . '" target="_blank"><span class="' . esc_attr('dashicons dashicons-' . $icon) . '"></span></a> ';
            }elseif(in_array($icon, $svgs)){
                echo svg_escape(
                        CHARMING_PORTFOLIO_return_template_part(
                            "template-parts/svgs/" . sanitize_file_name( $icon ),
                            null,
                            ['url' => esc_url( $social_link['url'] )]
                        ),
                    );

            } else {
                echo '<a class="simplecharm-portfolio-button-hover" href="' . esc_attr(is_array($social_link['url']) ? implode('', $social_link['url']) : $social_link['url']) . '" target="_blank"><span class="dashicons dashicons-admin-links"></span></a> ';
            }
        }
    }
}

/**
 * Sanitize Svg Content for Malicious Scripts and Escape Things
 * For Using on SVG to Escape it
 * @param string $svg_content
 * @return string
 */
if(!function_exists("svg_escape")){
    function svg_escape( $svg_content ) {
        // Load SVG as an XML document.
        $dom = new DOMDocument();
        libxml_use_internal_errors( true ); // Suppress XML errors for invalid SVG.

        $dom->loadXML( $svg_content, LIBXML_NOENT | LIBXML_DTDLOAD | LIBXML_NOERROR | LIBXML_NOWARNING );
        libxml_clear_errors();

        // Basic security: Remove script tags and on* attributes.
        $xpath = new DOMXPath( $dom );

        // Remove <script> tags.
        foreach ( $xpath->query( '//script' ) as $script ) {
            $script->parentNode->removeChild( $script );
        }

        // Remove attributes that start with "on" (e.g., onmouseover).
        foreach ( $xpath->query( '//*[@*[starts-with(name(), "on")]]' ) as $el ) {
            foreach ( iterator_to_array( $el->attributes ) as $attr ) {
                if ( stripos( $attr->nodeName, 'on' ) === 0 ) {
                    $el->removeAttribute( $attr->nodeName );
                }
            }
        }

        // Return the sanitized SVG as a string.
        return $dom->saveXML();
    }
}


/**
 * Returns An Array Of Skills In Easy To Iterate Format.
 * For Using The Complex Skills Array That Stored In Database In A Complex Array Format.
 * @param array $all_skills
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_load_skills")) {
	function CHARMING_PORTFOLIO_load_skills($all_skills) {
          $skillsArray = [];
          foreach($all_skills as $key => $single_skill) {
            foreach($single_skill as $single_data) {
              foreach($single_data as $index => $value){
                $skillsArray[$key][$index] = $value;
              }
            }
		}
        return $skillsArray;
    }
}

/**
 * Returns An Array Of Experience In Easy To Iterate Format.
 * For Using The Complex Experience Array That Stored In Database In A Simple Array Format.
 * @param array $experiences
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_load_experience")) {
    function CHARMING_PORTFOLIO_load_experience($experiences) {
        $sanitized_experiences = [];
        foreach ($experiences as $experience) {
            $temp_experience = [];
            foreach ($experience as $experience_data) {
                if (is_array($experience_data)) {
                    $temp_experience[] = $experience_data;
                }
            }
            $sanitized_experiences[] = $temp_experience;
        }
        return $sanitized_experiences;
    }
}

/**
 * Flatterns An Array Using Array Merge.
 * @param array $arr
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_flattern_array")) {
    function CHARMING_PORTFOLIO_flattern_array($arr) {
        return array_merge(...$arr);
    }
}

/**
 * Display Experiences Institution in Option Page.
 * @param array $experiences
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_experience_admin")) {
    function CHARMING_PORTFOLIO_experience_admin($experiences) {
        $experience_institutions = [];
        foreach ($experiences as $experience) {
            $flattern_experience = CHARMING_PORTFOLIO_flattern_array($experience);
            if (!is_array($flattern_experience) || empty($flattern_experience)) continue;
            if (!array_key_exists('institution', $flattern_experience)) continue;
            $experience_institutions[] = $flattern_experience['institution'];
        }
        return $experience_institutions;
    }
}

/**
 * Load The Responsibility Field as List if Responsibilities are Separated with Three Hyphens (---).
 * @param string $responsibilities
 * @return string
 * 
 * TODO: Make this function more easy to use.
 */
if (!function_exists("CHARMING_PORTFOLIO_experience_responsibility_list")) {
    function CHARMING_PORTFOLIO_experience_responsibility_list($responsibilities) {
        $html = '';
        $responsibility_array = explode('---', $responsibilities);
        $html .= '<ul class="list-disc">';
        foreach ($responsibility_array as $responsibility) {
            if (empty($responsibility)) continue;
            $html .= '<li>' . $responsibility . '</li>';
        }
        $html .= '</ul>';
        return $html;
    }
}

/**
 * Splits Project Tags Separated by Comma and Returns As List.
 * @param string $tags
 * @return string
 */
if (!function_exists("CHARMING_PORTFOLIO_split_tags")) {
    function CHARMING_PORTFOLIO_split_tags($tags) {
        $html = '';
        $tags_array = (!empty($tags) && explode(', ', $tags) !== null) ? explode(', ',$tags) : [];
        $html .= '<div class="work-tags">';
        foreach ($tags_array as $single_tag) {
            if (empty($single_tag)) continue;
            $html .= '<div class="min-w-max badge badge-neutral p-4 mx-2 my-2" tabindex="0">' . $single_tag . '</div>';
        }
        $html .= '</div>';
        return $html;
    }
}

/**
 * Returns An Array Of Project List In Easy To Iterate Format.
 * For Using The Complex Projects List Array That Stored In Database In A Complex Array Format.
 * @param array $works
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_load_works")) {
    function CHARMING_PORTFOLIO_load_works($works) {
        foreach ($works as $work_index => &$work) {
            foreach ($work as $work_data_index => $work_data) {
                if (!is_array($work_data) || empty($work_data)) continue;
                foreach ($work_data as $key => $single_work_data) {
                    $work[$key] = $single_work_data;
                }
                if (is_array($work_data)) unset($work[$work_data_index]);
            }
        }
        return $works;
    }
}

/**
 * Display All Project Title Institution in Option Page.
 * @param array $works
 * @return array
 */
if (!function_exists("CHARMING_PORTFOLIO_works_admin")) {
    function CHARMING_PORTFOLIO_works_admin($works) {
        $works_array = [];
        foreach ($works as $work) {
            $works_array[] = $work['title'];
        }
        return $works_array;
    }
}

/**
 * 1.make the word or phrase bold that between [bold][/bold]
 * 2.add [quote] instead of quotation
 * 3.add [squote] instead of single quote.
 * 4.add [break] instead of pressing enter.
 * @param string $textarea_value
 * @return string
 * 
 * USAGE:
 * [bold] bold text [/bold]
 * [quote] quoted text [quote] quotation
 * [squote] single quoted text [/quote]
 * [break] for line break
 */
if (!function_exists("CHARMING_PORTFOLIO_special_tag")) {
    function CHARMING_PORTFOLIO_special_tag($textarea_value) {
        if(empty($textarea_value)) return ;
        $bold_text = str_replace("[bold]", "<b>",$textarea_value);
        $bold_text_end = str_replace("[/bold]", "</b>",$bold_text);
        $quote_text = str_replace("[quote]", "\"", $bold_text_end);
        $single_quote_text = str_replace("[squote]", "'", $quote_text);
        $line_break_text = str_replace("[break]", "<br />", $single_quote_text);
        return $line_break_text;
    }
}

/**
 * Check if there are no blank projects.
 * @param array $works
 * @return bool
 */
if (!function_exists("CHARMING_PORTFOLIO_works_blank")) {
    function CHARMING_PORTFOLIO_works_blank($works) {
        $projects_count = 0;
        foreach ($works as $work_index => $work) {
            if (is_array($work) && !empty($work)) {
                if (array_key_exists('title', $work) && empty($work['title'])) continue;
                $projects_count++;
            }
        }
        return $projects_count === 0;
    }
}

/**
 * Check if Portfolio is Enabled
 * @return bool
 */
if(!function_exists("CHARMING_PORTFOLIO_enabled")) {
	function CHARMING_PORTFOLIO_enabled():bool {
		$portfolio_data = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance()->display_saved_value();
		if($portfolio_data){
			$portfolio_enabled = $portfolio_data['enabled'] ?? false;
			return $portfolio_enabled;
		}
		return false;
	}
}

/**
 * Check if Portfolio Client Side Render Enabled
 * @return bool
 */
if(!function_exists("CHARMING_PORTFOLIO_CLIENT_RENDER")) {
	function CHARMING_PORTFOLIO_CLIENT_RENDER():bool {
	    return true;	
	}
}

/**
 * Get Latest $n Posts
 */
if (!function_exists("CHARMING_PORTFOLIO_get_latest_posts")) {
    function CHARMING_PORTFOLIO_get_latest_posts($n = 5) {
        $args = [
            'posts_per_page' => $n,
            'post_status' => 'publish',
            'post_type' => 'post',
        ];
        $latest_posts = get_posts($args);
        $posts_array = [];
        foreach ($latest_posts as $post) {
            $posts_array[] = [
                'title' => get_the_title($post->ID),
                'url' => get_permalink($post->ID),
            ];
        }
        return $posts_array;
    }
}