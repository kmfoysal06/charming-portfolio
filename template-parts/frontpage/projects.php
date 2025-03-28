<?php
/**
 * Project List Template For Frontpage
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}



if (is_array($args) && array_key_exists("works", $args) && !empty($args['works']) && !empty(array_merge(...$args['works'])) && !CHARMING_PORTFOLIO_works_blank($args['works'])):

?>
	<div class="project-title my-3 flex flex-col items-center">
		<div class="badge badge-neutral py-3 px-4"><?php esc_html_e("Work","charming-portfolio"); ?></div>
		<p><?php esc_html_e("Some of the noteworthy projects I have built:","charming-portfolio"); ?></p>
	</div>
	<div class="single-work-info grid lg:grid-cols-2 md:grid-cols-2 gap-x-4 my-3">
	<?php 
	foreach($args['works'] as $work):
		if(is_array($work) && empty($work)) continue;
		if(array_key_exists('title', $work) && empty($work['title'])) continue;
	?>
		<div class="line-break-anywhere" tabindex="0">
			<div class="flex flex-col my-4 gap-y-3 p-6 pb-3 charming_portfolio_shadow_thin portfolio-project-bg">
			<h2 class="text-2xl">
				<?php echo esc_html(isset($work['title']) ? $work['title'] : ''); ?>
			</h2>
			<p class="overflow-y-auto">
				<?php 
					printf(wp_kses(
						isset($work['description']) ? CHARMING_PORTFOLIO_special_tag($work['description']) : ''
						,
						['b' => []]
					))
				 ?>
			</p>
			<?php printf(
				wp_kses(
					CHARMING_PORTFOLIO_split_tags(isset($work['tags']) ? $work['tags'] : ''),
					[
						'div' => [
							'class' => []
						]
					]
				)
			);
			?>

		<?php if(array_key_exists('link',$work) && !empty($work['link'])): ?>
			<div class="work-live-link">
			<a href="<?php echo esc_url(isset($work['link']) ? $work['link'] : ''); ?>" target="_blank" class="charming_portfolio_shadow_thin"><span class="dashicons dashicons-external"></span></i></a>
		</div>
	<?php endif; ?>
		</div>
		</div>
<?php endforeach; ?>
	</div>

<?php endif; ?>
