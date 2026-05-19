<?php
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
$charming_portfolio_current_page = isset($_SERVER['REQUEST_URI']) ? sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI'])) : '';


global $submenu;
$charming_portfolio_submenus = isset($submenu['CHARMING_PORTFOLIO_page']) ? $submenu['CHARMING_PORTFOLIO_page'] : [];
if( ! empty( $charming_portfolio_submenus ) ) :
?>

<div class="portfolio-section-wrapper">
    <nav class="tablist">
        <ul class="charming-portfolio-tab-list">
            <?php
                foreach ( $charming_portfolio_submenus as $index => $single_submenu ) {
                    if($index === 0) {
                        continue; // Skip the first submenu item
                    }
                    $parsed_current_page = wp_parse_url( $charming_portfolio_current_page );
                    $query = isset( $parsed_current_page['query'] ) ? $parsed_current_page['query'] : '';

                    $submenu_query = isset( $single_submenu[2] ) ? $single_submenu[2] : '';
                    preg_match( '/page=([^&]+)/', $query, $matches );
                    $matches = isset( $matches[1] ) ? $matches[1] : '';
                    $active_class = ( strpos( $matches, $submenu_query ) !== false ) ? 'active' : '';
                    $submenu_url = admin_url( 'admin.php?page=' . $submenu_query );
            ?>
                <li class="charming-portfolio-tab-link <?php echo esc_attr($active_class) ?>"><a href="<?php echo esc_attr($submenu_url) ?>"><?php echo esc_html( $single_submenu[0] ); ?></a></li>

            <?php

                }
            ?>
        </ul>
    </nav>
</div>
<?php
    endif;
?>
