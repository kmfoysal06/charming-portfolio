<?php
/**
 * Preview All Update About Portfolio in a Basic Template
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!-- HTML and CSS for a simple black & white dashboard with slight accent colors for stats boxes -->

<div class="charming-portfolio-dashboard-container">
    <div class="header">
        <div class="header-images">
            <?php if(isset($args['user_image']) && !empty($args['user_image'])): ?>
                <img src="<?php echo esc_attr($args['user_image']); ?>" alt="User Image">
            <?php endif; ?>

            <?php if(isset($args['user_image']) && !empty($args['user_image'])): ?>
                <img src="<?php echo esc_attr($args['user_image2']); ?>" alt="User 2nd Image">
            <?php endif; ?>
        </div>
        <div class="header-info">
            <h1><?php echo esc_html($args['name'] ?? "Charm")?></h1>
            <div class="header-links">
                <?php
                    $header_links = isset($args['header_links']) ? $args['header_links'] : [];
                    foreach ($header_links as $header_link): ?>
                        <a href="<?php echo esc_attr(isset($header_link['url']) && is_array($header_link['url']) ? implode('', $header_link['url']) : ($header_link['url'] ?? '')); ?>" target="_blank">
                            <?php echo esc_html(isset($header_link['name']) && is_array($header_link['name']) ? implode('', $header_link['name']) : ($header_link['name'] ?? '')); ?>
                        </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <div class="dashboard-row">
        <div class="dashboard-main">
            <div class="profile-info">
                <p><strong>Mail:</strong> <?php echo esc_html($args['email'] ?? ""); ?></p>
                <p><strong>Phone:</strong> <?php echo esc_html($args['phone'] ?? ""); ?></p>
                <p><strong>Address:</strong> <?php echo esc_html($args['address'] ?? ""); ?></p>
                <p><strong>Available:</strong> <span class="<?php echo esc_html(isset($args['available']) && intval($args['available']) === 1 ? "available-yes" : "available-no"); ?>">
                    <?php echo esc_html(isset($args['available']) && intval($args['available']) === 1 ? "Yes" : "No"); ?></span>
                </p>
            </div>
            <div class="section-title">Short Description</div>
            <p><?php echo esc_html($args['short_description'] ?? ""); ?></p>
            <div class="section-title">Description</div>
            <p><?php echo esc_html($args['description'] ?? "") ?></p>
            <div class="social-links">
                <?php
                    $social_links = isset($args['social_links']) ? $args['social_links'] : [];
                    foreach ($social_links as $link): ?>
                        <a href="<?php echo esc_attr(isset($link['url']) && is_array($link['url']) ? implode('', $link['url']) : ($link['url'] ?? '')); ?>" target="_blank">
                            <?php echo esc_html(isset($link['name']) && is_array($link['name']) ? implode('', $link['name']) : ($link['name'] ?? "")); ?>
                        </a>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="dashboard-sidebar">
            <h3>Skills</h3>
                

            <ul>
                    <?php if(!isset($args['skills']) || empty($args['skills'])) {
                        echo "<li>No skills added.</li>";
                    } else {
                        echo implode(", ", array_map(function($skill){
                            return "<li>". esc_html($skill['name'] ?? "") ."</li>";
                          }, $args['skills']));
                    }

				?>
            </ul>
            <h3>Experiences</h3>
            <ul> 
                <?php if(!isset($args['experiences']) || empty($args['experiences'])) {
                        echo "<li>No experiences added.</li>";
                    } else {
                        echo implode(", ", array_map(function($experience){
                            return "<li>". esc_html($experience['institution'] ?? "") ."</li>";
                          }, $args['experiences']));
                    }

				?>

            </ul>
            <h3>Works</h3>
            <ul>
                <?php if(!isset($args['works']) || empty($args['works'])) {
                        echo "<li>No works added.</li>";
                    } else {
                        echo implode(", ", array_map(function($work){
                            return "<li>". esc_html($work['title'] ?? "") ."</li>";
                          }, $args['works']));
                    }

				?>
            </ul>
        </div>
    </div>

    <div class="dashboard-stats">
        <div class="dashboard-stat">
            <span>Skills</span>
            <div style="font-size:1.5rem;margin-top:8px;">
                <?php
                    $skills = isset($args['skills']) ? $args['skills'] : [];
                    echo count($skills); 
                ?>
            </div>
        </div>
        <div class="dashboard-stat">
            <span>Experience</span>
            <div style="font-size:1.5rem;margin-top:8px;">
                <?php
                    $experiences = isset($args['experiences']) ? $args['experiences'] : [];
                    echo count($experiences); 
                ?>
            </div>
        </div>
        <div class="dashboard-stat">
            <span>Works</span>
            <div style="font-size:1.5rem;margin-top:8px;">
                <?php
                    $works = isset($args['works']) ? $args['works'] : [];
                    echo count($works); 
                ?>
            </div>
        </div>
    </div>
            <div class="footer-links">
                <?php
                    $footer_links = isset($args['footer_links']) ? $args['footer_links'] : [];
                    foreach ($footer_links as $footer_link): ?>
                        <a href="<?php echo esc_attr(isset($footer_link['url']) && is_array($footer_link['url']) ? implode('', $footer_link['url']) : ($footer_link['url'] ?? '')); ?>" target="_blank">
                            <?php echo esc_html(isset($footer_link['name']) && is_array($footer_link['name']) ? implode('', $footer_link['name']) : ($footer_link['name'] ?? '')); ?>
                        </a>
                <?php endforeach; ?>

            </div>
</div>
