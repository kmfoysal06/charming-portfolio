<?php
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
$current_page = $_SERVER['REQUEST_URI'];


global $submenu;
$cp_submenus = isset($submenu['CHARMING_PORTFOLIO_page']) ? $submenu['CHARMING_PORTFOLIO_page'] : [];
if( ! empty( $cp_submenus ) ) :
?>

<div class="portfolio-section-wrapper">
    <nav class="tablist">
        <ul class="charming-portfolio-tab-list">
            <?php
                foreach ( $cp_submenus as $index => $single_submenu ) {
                    if($index === 0) {
                        continue; // Skip the first submenu item
                    }
                    $parsed_current_page = parse_url( $current_page );
                    $query = isset( $parsed_current_page['query'] ) ? $parsed_current_page['query'] : '';

                    $submenu_query = isset( $single_submenu[2] ) ? $single_submenu[2] : '';
                    preg_match( '/page=([^&]+)/', $query, $matches );
                    $matches = isset( $matches[1] ) ? $matches[1] : '';
                    $active_class = ( strpos( $matches, $submenu_query ) !== false ) ? 'active' : '';
                    $submenu_url = admin_url( 'admin.php?page=' . $submenu_query );
                    echo '<li class="charming-portfolio-tab-link ' . $active_class . '"><a href="' . esc_url( $submenu_url ) . '">' . esc_html( $single_submenu[0] ) . '</a></li>';

                }
            ?>
        </ul>
    </nav>
</div>
<?php
    endif;
?>
