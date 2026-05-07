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
<?php if($stat_boxes && is_array($stat_boxes): ?>
<div class="stats-bar">

    <?php foreach($stat_boxes as $box): ?>
    <div class="stat-item">
        <?php if(substr($box['content'], -1) === "+"): ?>
        great
        <?php endif; ?>
      <div class="stat-number">15<span>+</span></div>
      <div class="stat-label">Projects Delivered</div>
    </div>
    <?php endforeach; ?>
</div>
<?php endif; ?>
