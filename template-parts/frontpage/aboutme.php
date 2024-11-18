<?php
/**
 * About Me Template For Frontpage
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
 <div class="flex flex-col" tabindex="0">
  <div class="aboutme-title my-3 flex flex-col items-center">
    <div class="badge badge-neutral"><?php esc_html_e("About Me","charming-portfolio"); ?></div>
    <h3 class="text-xl"><?php esc_html_e("Curious about me? Here you have it:","charming-portfolio"); ?></h3>
  </div>
  <div class="aboutme hero-content sm:flex-col md:flex-row lg:flex-row  sm:justify-between md:justify-between lg:justify-between">
        <img src="<?php echo esc_url($args["user_image2"]) ?>" class="sm:w-full md:w-2/4 lg:w-2/4 rounded-lg shadow-2xl" />
    <div>
      <p class="py-6">
        <?php
          printf(wp_kses(
            isset($args['description']) ? CHARMING_PORTFOLIO_special_tag($args['description']) : ''
            ,
            ['b' => []]
          ))
         ?>
      </p>
    </div>
  </div>
  </div>