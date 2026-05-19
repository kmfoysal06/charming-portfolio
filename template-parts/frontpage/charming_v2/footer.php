<?php
/**
 * footer template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
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
                                <input type="text" placeholder="Search" value="" name="s" id="s"><button type="submit" class="submit charming-portfolio-header-search"
                                    aria-label="Search">
                                    <span class="dashicons dashicons-search"></span>
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

    </div>
    <div class="charming-portfolio-container copyright">
        <p>Powerd By Charming Portfolio</p>
    </div>
</footer>
