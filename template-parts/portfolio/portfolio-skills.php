<?php
/**
 * Skills Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<!-- skills setting -->
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php esc_html_e("Skills Customization","charming-portfolio"); ?></h3>
<div class="portfolio-section-content charming-portfolio-skills admin">
    <table id="repeatable-fieldset-one" width="100%">
      <tbody>
	<?php
if (is_array($args) && array_key_exists("skills", $args)):
        foreach ($args['skills'] as $key => $skill):
        ?>
        <tr class="flex skill">
          <td>
            <label for="<?php echo esc_attr("skill-name-" . $key); ?>"></label>
				<input type="text" class="name" data-queue="<?php echo esc_attr($key); ?>" placeholder="<?php esc_attr_e("Skill Name","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key); ?>][][name]" value="<?php echo esc_attr($skill['name']); ?>" id="<?php echo esc_attr("skill-name-" . $key); ?>" maxlength="25" /></td>
			<td>
						<img width="50px" src="<?php echo esc_attr($skill['image']); ?>" class="image" data-queue="<?php echo esc_attr($key)?>"/>

						<input type="hidden" value="<?php echo esc_attr($skill['image']); ?>" class="image" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key) ?>][][image]" data-queue="<?php echo esc_attr($key)?>" />

				<td>
          <td><a class="button charming_portfolio_skills_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
        </tr>
    <?php
endforeach;
        endif;
        ?>

    <!-- empty hidden one for jQuery -->
    <tr class="charming_portfolio_empty-row__skills_link screen-reader-text flex skill">
	    <td>
        <label for="skill-name"></label>
	    <input type="text" class="name" data-queue="0" placeholder="<?php esc_attr_e("Skill Name","charming-portfolio"); ?>" name="" value="" id="skill-name" />
			</td>
			<td>
						<img width="50px" src="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/code.png") ?>" class="image" />
						<input type="hidden" name="" value="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/code.png") ?>" class="image-url" data-queue="0" />

			</td>
	    <td><a class="button charming_portfolio_skills_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
    </tr>
  </tbody>
</table>
<p><a id="charming_portfolio_skill_link_add" class="button" href="#"><?php esc_html_e("Add Another","charming-portfolio"); ?></a></p>
</div>
</div>
