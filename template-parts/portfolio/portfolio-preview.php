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
            <h1><?php echo esc_html($args['name'])?></h1>
            <div class="header-links">
                <?php
                    $header_links = isset($args['header_links']) ? $args['header_links'] : [];
                    foreach ($header_links as $header_link): ?>
                        <a href="<?php echo esc_attr(is_array($header_link['url']) ? implode('', $header_link['url']) : $header_link['url']); ?>" target="_blank">
                            <?php echo esc_html(is_array($header_link['name']) ? implode('', $header_link['name']) : $header_link['name']); ?>
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
            <p><?php echo esc_html($args['description']) ?></p>
            <div class="social-links">
                <?php
                    $social_links = isset($args['social_links']) ? $args['social_links'] : [];
                    foreach ($social_links as $link): ?>
                        <a href="<?php echo esc_attr(is_array($link['url']) ? implode('', $link['url']) : $link['url']); ?>" target="_blank">
                            <?php echo esc_html(is_array($link['name']) ? implode('', $link['name']) : $link['name']); ?>
                        </a>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="dashboard-sidebar">
            <h3>Skills</h3>
            <ul>
                <li>.</li>
            </ul>
            <h3>Experiences</h3>
            <ul>
                <li>Webermelon</li>
            </ul>
            <h3>Works</h3>
            <ul>
                <li>Dynamic CPR</li>
            </ul>
        </div>
    </div>

    <div class="dashboard-stats">
        <div class="dashboard-stat">
            <span>Skills</span>
            <div style="font-size:1.5rem;margin-top:8px;">1</div>
        </div>
        <div class="dashboard-stat">
            <span>Experience</span>
            <div style="font-size:1.5rem;margin-top:8px;">1</div>
        </div>
        <div class="dashboard-stat">
            <span>Works</span>
            <div style="font-size:1.5rem;margin-top:8px;">1</div>
        </div>
    </div>
            <div class="footer-links">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
                <a href="#">sdafsfas</a>
            </div>
</div>
