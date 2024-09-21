<?php
/**
 * Customize  Experience For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!-- experience setting -->
<div class="portfolio-section-wrapper">
  <h3 class="portfolio-section-toggle"><?php esc_html_e("Experience Customization","charming-portfolio"); ?></h3>
<div class="portfolio-section-content charming-portfolio-experience">
    <table id="repeatable-fieldset-two" width="100%">
      <tbody>
  <?php
if (is_array($args) && array_key_exists("experiences", $args)):
    foreach ($args['experiences'] as $key => $experience):
        $key = $key + 1;
      $flattern_experience = CHARMING_PORTFOLIO_flattern_array($experience);
        if(!is_array($flattern_experience) || empty($flattern_experience)) continue;
        $working_now = (array_key_exists('working',$flattern_experience)) ? $flattern_experience['working'] : 'off';
    ?>
 <tr class="flex flex-col simplecharm-basic-border simplecharm-basic-padding">
    <td>
        <label for="<?php echo esc_attr("experience-institution-" . $key,'charming-portfolio'); ?>"><?php esc_html_e("Institution",'charming-portfolio'); ?></label>
        <input type="text" class="institution" placeholder="Experience Institution" name="CHARMING_PORTFOLIO[experiences][<?php echo esc_attr($key); ?>][][institution]" value="<?php echo (array_key_exists("institution",$flattern_experience)) ? esc_attr($flattern_experience['institution']) : "" ;?>" id="experience-institution-<?php echo esc_attr($key); ?>"  data-queue="<?php echo esc_attr($key); ?>" maxlength="30">
    </td>
    <td>
        <label for="<?php echo esc_attr("experience-post-title-" . $key); ?>" title="<?php esc_attr_e("enter your job post title eg:- Sr. Laravel Developer etc.","charming-portfolio"); ?>"><?php esc_html_e("Post Title","charming-portfolio"); ?></label>
        <input type="text" class="post-title" placeholder="<?php esc_html_e('Post Title','charming-portfolio'); ?>" name="CHARMING_PORTFOLIO[experiences][<?php echo esc_attr($key); ?>][][post-title]" value="<?php echo (array_key_exists("post-title",$flattern_experience)) ? esc_attr($flattern_experience['post-title']) : '' ;?>" id="<?php echo esc_attr("experience-post-title-" . $key,'charming-portfolio'); ?>" data-queue="<?php echo esc_attr($key); ?>" maxlength="30">
    </td>
    <td class="responsibilities" id="repeatable-fieldset-three">
        <label for="<?php echo esc_attr("responsibilities-" . $key); ?>" title="<?php esc_attr_e('You Can Not Use Quotation ("" and \'\') so You Can Use [quote], [squote] and [bold][/bold] for Adding Double and Single Quotation and Make Any Text Bold.','charming-portfolio'); ?>"><?php esc_html_e('Responsibilities','charming-portfolio'); ?></label>
        <textarea name="CHARMING_PORTFOLIO[experiences][<?php echo esc_attr($key,'charming-portfolio'); ?>][][responsibility]" id="<?php echo esc_attr("responsibilities-" . $key); ?>" cols="50" rows="5" class="responsibility" data-queue="<?php echo esc_attr($key); ?>" maxlength="800"><?php echo esc_textarea((array_key_exists("responsibility",$flattern_experience)) ? $flattern_experience['responsibility'] : '') ;?></textarea>
    </td>
    <td>
        <label for="<?php echo esc_attr("start-date-" . $key); ?>"><?php esc_html_e("Start Date",'charming-portfolio'); ?></label>
        <input type="date" class="start_date" name="CHARMING_PORTFOLIO[experiences][<?php echo esc_attr($key); ?>][][start_date]" placeholder="<?php esc_attr_e("Start Date",'charming-portfolio'); ?>" id="<?php echo esc_attr("start-date-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" value="<?php echo (array_key_exists("start_date",$flattern_experience)) ? esc_attr($flattern_experience['start_date']) : '' ;?>">
    </td>
    <td>
        <label for="<?php echo esc_attr("end-date-" . $key); ?>"><?php esc_html_e("End Date",'charming-portfolio'); ?></label>
        <input type="date" class="end_date" name="CHARMING_PORTFOLIO[experiences][<?php echo esc_attr($key); ?>][][end_date]" placeholder="<?php esc_attr_e("End Date",'charming-portfolio'); ?>" id="<?php echo esc_attr("end-date-" . $key); ?>" data-queue="<?php echo esc_attr($key); ?>" value="<?php echo (array_key_exists("end_date",$flattern_experience)) ? esc_attr($flattern_experience['end_date']) : '' ;?>" <?php disabled($working_now,'on');?>>
    </td>
    <td>
        <label for="<?php echo esc_attr("working-now-" . $key,'charming-portfolio'); ?>" title="<?php esc_attr_e("Are You Still Working Here?",'charming-portfolio'); ?>"><?php esc_html_e("Still Working?",'charming-portfolio'); ?></label>
        <input type="checkbox" id="<?php echo esc_attr("working-now-" . $key); ?>" name="CHARMING_PORTFOLIO[experiences][<?php echo esc_attr($key); ?>][][working]" class="working" data-queue="<?php echo esc_attr($key); ?>" <?php checked($working_now,'on'); ?>>
    </td>
    <td>
        <a class="button charming_portfolio_experience_remove" href="#1"><?php esc_html_e('Remove','charming-portfolio'); ?></a>
    </td>
</tr>

      <?php
endforeach;
endif;
?>

    <!-- empty hidden one for jQuery -->
    <tr class="charming_portfolio_empty-row__experience screen-reader-text flex flex-col simplecharm-basic-border simplecharm-basic-padding">
    <td>
        <label for="experience-institution"><?php esc_html_e("institution",'charming-portfolio'); ?></label>
        <input type="text" class="institution" placeholder="<?php esc_attr_e("Experience institution",'charming-portfolio'); ?>" name="charming_portfolio[experiences][0][institution]" value="" id="experience-institution" data-queue="0">
    </td>
    <td>
        <label for="experience-post-title" title="<?php esc_attr_e('enter your job post title eg:- Sr. Laravel Developer etc.','charming-portfolio'); ?>"><?php esc_html_e("Post Title",'charming-portfolio'); ?></label>
        <input type="text" class="post-title" placeholder="<?php esc_attr_e("Post Title",'charming-portfolio'); ?>" name="charming_portfolio[experiences][0][post-title]" value="" id="experience-post-title" data-queue="0">
    </td>
    <td class="responsibilities" id="repeatable-fieldset-three">
        <label for="responsibilities" title="<?php esc_attr_e('enter list separated by three dash (---) eg:- ---first responsibility --- second responsibility ---third responsibility etc.','charming-portfolio'); ?>"><?php esc_html_e("Responsibilities",'charming-portfolio'); ?></label>
        <textarea name="charming_portfolio[experiences][0][responsibility]" id="responsibilities" cols="50" rows="5" class="responsibility" data-queue="0"></textarea>
    </td>
    <td>
        <label for="start-date"><?php esc_html_e('Start Date','charming-portfolio'); ?></label>
        <input type="date" class="start_date" name="charming_portfolio[experiences][0][start_date]" placeholder="<?php esc_attr_e('Start Date','charming-portfolio'); ?>" id="start-date" data-queue="0">
    </td>
    <td>
        <label for="end-date"><?php esc_html_e('End Date','charming-portfolio'); ?></label>
        <input type="date" class="end_date" name="charming_portfolio[experiences][0][end_date]" placeholder="<?php esc_attr_e('End Date','charming-portfolio'); ?>" id="end-date" data-queue="0">
    </td>
    <td>
        <label for="working-now" title="<?php esc_attr_e('Are You Still Working Here','charming-portfolio'); ?>"><?php esc_html_e('Still Working?','charming-portfolio'); ?></label>
        <input type="checkbox" id="working-now" name="charming_portfolio[experiences][0][working]" class="working" data-queue="0">
    </td>
    <td>
        <a class="button charming_portfolio_experience_remove" href="#1"><?php esc_html_e('Remove','charming-portfolio'); ?></a>
    </td>
    </tr>
  </tbody>
</table>
<p><a id="charming_portfolio_experience_add" class="button" href="#"><?php esc_html_e('Add Another','charming-portfolio'); ?></a></p>
</div>
</div>