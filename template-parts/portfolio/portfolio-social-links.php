<?php
/**
 * Customize  Social Links Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<div class="portfolio-section-wrapper">
    <h3 class="portfolio-section-toggle"><?php esc_html_e("Social Links","charming-portfolio"); ?></h3>
<div class="portfolio-section-content">
<table id="repeatable-fieldset-one" width="100%">
  <tbody>
  <?php
if (is_array($args) && array_key_exists("social_links", $args)):
            foreach ($args['social_links'] as $key => $social):
            ?>
              <tr class="flex">
                <td>
                  <label for="<?php echo esc_attr("social_link_name_" . $key); ?>"></label>
                  <input type="text" class="name" data-queue="0" placeholder="social link name" name="CHARMING_PORTFOLIO[social_link][<?php echo esc_attr($key); ?>][][name]" value="<?php echo is_array($social['name']) ? esc_attr(implode('', $social['url'])) : esc_attr($social['name'])  ?>" id="<?php echo esc_attr("social_link_name_" . $key); ?>" /></td>
                <td>
                  <label for="<?php echo esc_attr("social_link_url_" . $key); ?>"></label>
                  <input type="text" class="url" data-queue="0" placeholder="social link" name="CHARMING_PORTFOLIO[social_link][<?php echo esc_attr($key); ?>][][url]" value="<?php echo is_array($social['url']) ? esc_url(implode('', $social['url'])) : esc_url($social['url']); ?>" id="<?php echo esc_attr("social_link_url_" . $key); ?>" />
                </td>
                <td><a class="button charming_portfolio_social_link_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
              </tr>
              <?php
    endforeach;
        endif;
        ?>

    <!-- empty hidden one for jQuery -->
    <tr class="charming_portfolio_empty-row__social_link screen-reader-text flex">
           <td>
            <input type="text" class="name" data-queue="0" placeholder="social link name" name="CHARMING_PORTFOLIO[social_link][0][][name]" value="" id="social_link_name" /></td>
          <td>
            <input type="text" class="url" data-queue="0" placeholder="social link" name="CHARMING_PORTFOLIO[social_link][0][][url]" value="" id="social_link_url" />
          </td>
          <td><a class="button charming_portfolio_social_link_remove" href="#"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
        </tr>
  </tbody>
</table>
<p><a id="charming_portfolio_social_link_add" class="button" href="#"><?php esc_html_e("Add Another","charming-portfolio"); ?></a></p>
</div>
</div>