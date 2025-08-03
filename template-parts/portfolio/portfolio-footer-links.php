<?php
/**
 * Customize  Footer Links Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<div class="portfolio-section-wrapper">
    <h3 class="portfolio-section-toggle"><?php esc_html_e("Footer Menu Links","charming-portfolio"); ?></h3>
<div class="portfolio-section-content charming-portfolio-footer-links">
<table id="repeatable-fieldset-footer-links" width="100%">
  <tbody>
  <?php
if (is_array($args) && array_key_exists("footer_links", $args)):
            foreach ($args['footer_links'] as $key => $single_link):
            ?>
              <tr class="footer_links flex">
                <td>
                  <label for="<?php echo esc_attr("footer_link_name_" . $key); ?>"></label>
                  <input type="text" class="name" data-queue="0" placeholder="footer link name" value="<?php echo is_array($single_link['name']) ? esc_attr(implode('', $single_link['url'])) : esc_attr($single_link['name'])  ?>" id="<?php echo esc_attr("footer_link_name_" . $key); ?>" /></td>
                <td>
                  <label for="<?php echo esc_attr("footer_link_url_" . $key); ?>"></label>
                  <input type="text" class="url" data-queue="0" placeholder="footer link" value="<?php echo is_array($single_link['url']) ? esc_url(implode('', $single_link['url'])) : esc_url($single_link['url']); ?>" id="<?php echo esc_attr("footer_link_url_" . $key); ?>" />
                </td>
                <td><a class="button charming_portfolio_footer_link_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
              </tr>
              <?php
    endforeach;
        endif;
        ?>

    <!-- empty hidden one for jQuery -->
    <tr class="charming_portfolio_empty-row__footer_link screen-reader-text footer_links flex">
           <td>
            <input type="text" class="name" data-queue="0" placeholder="footer link name" value="" id="footer_link_name" /></td>
          <td>
            <input type="text" class="url" data-queue="0" placeholder="footer link" value="" id="footer_link_url" />
          </td>
          <td><a class="button charming_portfolio_footer_link_remove" href="#"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
        </tr>
  </tbody>
</table>
<p><a id="charming_portfolio_footer_link_add" class="button" href="#"><?php esc_html_e("Add Another","charming-portfolio"); ?></a></p>
</div>
</div>