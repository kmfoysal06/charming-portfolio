<?php
/**
 * Basic Info Template For Frontpage
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<div class="grid grid-cols-1 text-center lg:text-justify lg:grid-cols-2 lg:grid-flow-col-reverse p-4" tabindex="0">
    <div class="CHARMING_PORTFOLIO_primary-image-container">
      <img src="<?php echo esc_url($args["user_image"]); ?>" class="lg:max-w-sm rounded-lg shadow-2xl block m-auto sm:w-4/5" />
      <img src="<?php echo esc_url($args["user_image"]); ?>" class="lg:max-w-sm rounded-lg shadow-2xl m-auto sm:w-4/5 " />
    </div>
    <div>
      <h3 class="text-3xl font-bold mt-4"><?php echo esc_html("Hi, I'm ".$args['name'])." <span class='d-contents CHARMING_PORTFOLIO-welcome-emoji'>👋</span>"; ?></h3>
      <p class="py-4"><?php 
        printf(wp_kses(
            isset($args['short_description']) ? CHARMING_PORTFOLIO_special_tag($args['short_description']) : ''
            ,
            ['b' => []]
          ))
       ?></p>
      <br>
      <?php if(isset($args['address'])): ?>
      <p><span class="dashicons dashicons-location-alt mr-3"></span><?php echo esc_html($args['address']); ?></p>
      <?php endif;?>
      <p><span class="mr-3"><i class="<?php echo esc_attr($args['available'] == 'True' ? 'simplecharm-portfolio-available' : 'simplecharm-portfolio-available-false') ; ?>"></i></span> <?php echo esc_html($args['available'] == 'True' ? 'Available for New Projects' : 'Currently Not Available for New Projects') ; ?></p>
      <br>
      <?php 
        $social_links = CHARMING_PORTFOLIO_link_social_frontend($args['social_links'],5);
        $social_links;
       ?>
    </div>
  </div>