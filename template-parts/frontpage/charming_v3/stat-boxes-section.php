<?php
/**
 * stats template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$stat_boxes = $args['stat_boxes'] ?? false;
?>

<!-- STATS BAR -->
<?php if($stat_boxes && is_array($stat_boxes)): ?>
<?php
?>
<div class="stats-bar">

    <?php foreach($stat_boxes as $box): ?>
    <?php
    $content = isset($box['content']) ? $box['content'] : '';
    $label = isset($box['label']) ? $box['label'] : '';
    $postfix_allowed_signs = ["+", "%"];
    ?>
    <div class="stat-item">
        <?php if(strlen($content) > 1 && in_array(substr($content, -1), $postfix_allowed_signs)): ?>
            <?php
                $first_part = substr($content, 0, -1);
                $last_part = substr($content, -1); 
            ?>
                <div class="stat-number"><?php echo esc_html($first_part); ?><span><?php echo esc_html($last_part); ?></span></div>
        <?php else: ?>
        <div class="stat-number"><?php echo esc_html($content) ?></div>
        <?php endif; ?>
      <div class="stat-label"><?php echo esc_html($label) ?></div>
    </div>
    <?php endforeach; ?>
</div>
<?php endif; ?>
