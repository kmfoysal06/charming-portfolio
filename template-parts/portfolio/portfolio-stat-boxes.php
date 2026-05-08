<?php
/**
 * State Boxes Template For Portfolio Customization Option
 *
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
// hardcoded to 4 as per the design
$stat_boxes_count = 4;
$stat_boxes_saved = isset($args['stat_boxes']) ? $args['stat_boxes'] : [];
$stat_boxes = array_fill(0, $stat_boxes_count, array('content' => '', 'label' => ''));
// loop through empty stat_boxes and fill if data exists in saved $args
for($i=0;$i < 4; $i++) {
    if(isset($stat_boxes_saved[$i])) {
        $stat_boxes[$i] =  $stat_boxes_saved[$i];
    }
}
?>
<div class="portfolio-section-wrapper">
	<h3 class="portfolio-section-toggle"><?php esc_html_e("State Boxes Section (Recommended For Layout v3+)",'charming-portfolio'); ?></h3>
    <div class="portfolio-section portfolio-section-content">
        <table class="stat-boxes-table">
        <tbody>
        <?php foreach($stat_boxes as $index => $stat_box) : ?>
<?php
$content = isset($stat_box['content']) ? $stat_box['content'] : '';
$label = isset($stat_box['label']) ? $stat_box['label'] : '';
?>
        <tr class="single_stat_box flex">
            <td>
            <label for="stat-box-content-<?php echo esc_attr($index); ?>"></label>
                  <input type="text" class="content" data-queue="0" placeholder="100+" name="CHARMING_PORTFOLIO[stat_boxes][<?php echo esc_attr($index); ?>][content]" value="<?php echo esc_attr($content); ?>" id="stat-box-content-<?php echo esc_attr($index); ?>" />
            </td>
            <td>
                  <label for="stat-box-label-<?php echo esc_attr($index); ?>"></label>
                  <input type="text" class="label" placeholder="eg: Project Delivered" name="CHARMING_PORTFOLIO[stat_boxes][0<?php echo esc_attr($index); ?>][label]" value="<?php echo esc_attr($label); ?>" id="stat-box-label-<?php echo esc_attr($index); ?>" />            
            </td>
        </tr>
        <?php endforeach; ?>
        </tbody>
        </table>

    </div>
</div>
