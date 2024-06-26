<?php
/**
 * Skills Template For Portfolio Customization Option
 * @package SimpleCharm Portfolio Plugin
 */
if( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<!-- skills setting -->
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php _e("Skills Customization","charming-portfolio"); ?></h3>
<div class="portfolio-section-content simplecharm-portfolio-skills">
    <table id="repeatable-fieldset-one" width="100%">
      <tbody>
	<?php
if (is_array($args) && array_key_exists("skills", $args)):
        foreach ($args['skills'] as $key => $skill):
        ?>
        <tr class="flex">
          <td>
            <label for="<?php echo esc_attr("skill-name-" . $key); ?>"></label>
            <input type="text" class="name" data-queue="<?php echo esc_attr($key); ?>" placeholder="<?php _e("Skill Name","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key); ?>][][name]" value="<?php echo esc_attr($skill); ?>" id="<?php echo esc_attr("skill-name-" . $key); ?>" /></td>
          <td><a class="button simplecharm_skills_remove" href="#1"><?php _e("Remove","charming-portfolio"); ?></a></td>
        </tr>
    <?php
endforeach;
        endif;
        ?>

    <!-- empty hidden one for jQuery -->
    <tr class="simplecharm_portfolio_empty-row__skills_link screen-reader-text flex">
	    <td>
        <label for="skill-name"></label>
	    <input type="text" class="name" data-queue="0" placeholder="<?php _e("Skill Name","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[skills][0][][name]" value="" id="skill-name" />
	    </td>
	    <td><a class="button simplecharm_skills_remove" href="#1"><?php _e("Remove","charming-portfolio"); ?></a></td>
    </tr>
  </tbody>
</table>
<p><a id="simplecharm_skill_link_add" class="button" href="#"><?php _e("Add Another","charming-portfolio"); ?></a></p>
</div>
</div>