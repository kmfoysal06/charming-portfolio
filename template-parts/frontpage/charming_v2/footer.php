<?php
/**
 * footer template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<footer role="contentinfo" class="charming-portfolio-footer">
    <div class="charming-portfolio-container charming-portfolio-footer-inner">
        <div class="footer-section footer-owner-data">
            <div class="contactinfo">
                <h3><?php echo esc_html($args['name']) ?></h3>
                <p><?php echo esc_html($args['address']) ?? "Earth"?></p>
                <p><?php echo esc_html($args['designation']) ?? "Ununemployed"?></p>
                <p><?php echo esc_html($args['email']) ?></p>
            </div>
            <div class="footer-search">
                <div class="search-and-profile">
                    <div class="search">
                        <form role="search" method="get" id="searchform"
                            class="searchform charming-portfolio-search" action="/">
                            <div>
                                <label class="screen-reader-text" for="s">Search for Blogs:</label>
                                <input type="text" placeholder="Search" value="" name="s" id="s">
                                <button type="submit" class="submit charming-portfolio-header-search"
                                    aria-label="Search">
                                    <span class="dashicons dashicons-search"><span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-socials">
                <?php CHARMING_PORTFOLIO_get_template_part("template-parts/frontpage/charming_v2/partials/social_links", "", $args);?>
            </div>
        </div>
        <?php
            $latest_blogs = CHARMING_PORTFOLIO_get_latest_posts();
        ?>
        <?php if(is_array($latest_blogs) && !empty($latest_blogs)): ?>
            <div class="footer-section footer-section-menus">
                <div class="footer-subsection">
                    <h3>Latest Blogs:</h3>
                    <ul>
                            <?php foreach($latest_blogs as $blog): ?>
                                <li> <a href="<?php echo esc_url($blog['url']); ?>"><?php echo esc_html($blog['title']); ?></a> </li>
                            <?php endforeach; ?>
                    </ul>
                </div>
                <?php if(array_key_exists('footer_links', $args) && is_array($args['footer_links']) && !empty($args['footer_links'])): ?>
                    <div class="footer-subsection">
                        <h3>External Links:</h3>
                        <ul>
                            <?php foreach($args['footer_links'] as $single_link): ?>
                                <li> <a href="<?php echo esc_url($single_link['url']); ?>" target="_blank"><?php echo esc_html($single_link['name']); ?> <i class="fa fa-external-link" aria-hidden="true"></i></a>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>

    </div>
    <div class="charming-portfolio-container copyright">
        <p>Powerd By Charming Portfolio</p>
    </div>
</footer>
