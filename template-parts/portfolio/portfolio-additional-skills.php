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
        $key = $key + 1;
        $skill_info = isset($skill['description']) ? $skill['description'] : '';
        $skill_tags = isset($skill['tags']) ? $skill['tags'] : '';
        ?>
        <tr class="flex flex-wrap skill">
          <td>
          <label for="<?php echo esc_attr("skill-name-" . $key); ?>"><?php echo esc_attr_e("Skill", "charming-portfolio"); ?></label>
				<input type="text" class="name" data-queue="<?php echo esc_attr($key); ?>" placeholder="<?php esc_attr_e("Skill","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key); ?>][][name]" value="<?php echo esc_attr($skill['name']); ?>" id="<?php echo esc_attr("skill-name-" . $key); ?>" maxlength="25" /></td>
			<td>
            <label for="<?php echo esc_attr("skill-image-" . $key); ?>"><?php esc_html_e("Skill Relevent Image (1:1)","charming-portfolio"); ?></label>

            <input type="hidden" value="<?php echo esc_attr($skill['image']); ?>" class="image-url" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key) ?>][][image]" data-queue="<?php echo esc_attr($key)?>" />

            <img width="50px" src="<?php echo esc_attr($skill['image']); ?>" class="image" data-queue="<?php echo esc_attr($key)?>"/>
<td>
<label for="<?php echo esc_attr("skill-info-" . $key); ?>"><?php esc_html_e("Description (highly recommended to fill in to use if you are using v3 theme)","charming-portfolio"); ?></label>
<textarea class="description" placeholder="<?php esc_attr_e("Description","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key); ?>][][description]" id="<?php echo esc_attr("skill-info-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" cols="50" rows="5" maxlength="800"><?php echo esc_textarea($skill_info); ?></textarea>
</td>
<td>
<label for="skill-tags-<?php echo esc_attr($key); ?>"><?php esc_html_e("Tags (comma separated - highly recommended to fill in to use if you are using v3 theme)","charming-portfolio"); ?></label>
<textarea class="tags" placeholder="<?php esc_attr_e("Tags (comma separated)","charming-portfolio"); ?>" name="CHARMING_PORTFOLIO[skills][<?php echo esc_attr($key); ?>][][tags]" id="<?php echo esc_attr("skill-tags-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" cols="50" rows="5" maxlength="200"><?php echo esc_textarea($skill_tags); ?></textarea>
</td>

          <td><a class="button charming_portfolio_skills_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
        </tr>
    <?php
endforeach;
        endif;
        ?>

    <!-- empty hidden one for jQuery -->
    <tr class="charming_portfolio_empty-row__skills_link screen-reader-text flex flex-wrap skill empty_blueprint">
	    <td>
        <label for="skill-name"><?php esc_attr_e("Skill","charming-portfolio"); ?> </label>
	    <input type="text" class="name" data-queue="0" placeholder="<?php esc_attr_e("Skill","charming-portfolio"); ?>" name="" value="" id="skill-name" />
			</td>
			<td>
            <label for="skill-image"><?php esc_html_e("Skill Relevent Image (1:1)","charming-portfolio"); ?></label>
						<input type="hidden" name="" value="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/code.png") ?>" class="image-url" data-queue="0" />

						<img width="50px" src="<?php echo esc_url(CHARMING_PORTFOLIO_DIR_URI . "/assets/build/img/code.png") ?>" class="image" />

			</td>
<td>
<label for="skill-info"><?php esc_html_e("Description (highly recommended to fill in to use if you are using v3 theme)","charming-portfolio"); ?></label>
<textarea class="description" placeholder="<?php esc_attr_e("Description","charming-portfolio"); ?>" name="" id="skill-info" data-queue="0" cols="50" rows="5" maxlength="800"></textarea>
</td>
<td>
<label for="skill-tags"><?php esc_html_e("Tags (comma separated - highly recommended to fill in to use if you are using v3 theme)","charming-portfolio"); ?></label>
<textarea class="tags" placeholder="<?php esc_attr_e("Tags (comma separated)","charming-portfolio"); ?>" name="" id="skill-tags" data-queue="0" cols="50" rows="5" maxlength="200"></textarea>
</td>

	    <td><a class="button charming_portfolio_skills_remove" href="#1"><?php esc_html_e("Remove","charming-portfolio"); ?></a></td>
    </tr>
  </tbody>
</table>
<p class="cp__add-another-btn-wrapper"><a id="charming_portfolio_skill_link_add" class="button" href="#"><?php esc_html_e("Add Another","charming-portfolio"); ?></a></p>
</div>
</div>
