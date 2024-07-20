<?php
/**
 * Experience Template For Frontpage
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
if (is_array($args) && array_key_exists("experiences", $args) && !empty($args['experiences']) && !empty(array_merge(...$args['experiences']))):
?>
<div class="experience-title my-3 flex flex-col items-center">
		<div class="badge badge-neutral"><?php esc_html_e("Experience","charming-portfolio"); ?></div>
		<p><?php esc_html_e("Here is a quick summary of my most recent experiences:","charming-portfolio"); ?></p>
	</div>
	<div class="experience-content">
		<?php
		
		$experiences = $args['experiences'];
		foreach($experiences as $single_experience):
		$flattern_experience = CHARMING_PORTFOLIO_flattern_array($single_experience);
		if(empty($flattern_experience)) continue;
		$start_date = array_key_exists('start_date',$flattern_experience) && !empty($flattern_experience['start_date']) ? gmdate('M o',strtotime($flattern_experience['start_date'])) : '';
		$working_now = array_key_exists('working',$flattern_experience) ? $flattern_experience['working'] : 'off';
		$end_date = array_key_exists('end_date',$flattern_experience) && !empty($flattern_experience['end_date']) ? gmdate('M o',strtotime($flattern_experience['end_date'])) : '';
		$end_date_status = strtolower($working_now) === 'on' ? __("Present","charming-portfolio") : $end_date;
		?>

		<!-- TODO: The Design Is Broken. -->
		<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 my-2 shadow-2xl" tabindex="0">
			<div class="experience-name flex justify-center items-center">
				<h2 class="text-5xl"><?php echo esc_html($flattern_experience['institution']); ?></h2>
			</div>
			<div class="experience-info experience-name flex flex-col justify-center p-4 gap-4">
				<h3 class="text-2xl lg:text-left md:text-left sm:text-center"><?php echo esc_html($flattern_experience['post-title']); ?></h3>
				<p>
				<?php
				

					printf(wp_kses(
		            isset($flattern_experience['responsibility']) ? CHARMING_PORTFOLIO_special_tag($flattern_experience['responsibility']) : '',
		            ['b' => [],
					  'ul' => [
					  	'li' => []
					  	]]
		          ))
				?>
				</p>
			</div>
			<div class="experience-date experience-name flex justify-center items-center lg:col-auto md:col-span-2">
				<?php
				if(!empty($start_date)):
				?>
				<h4><?php echo esc_html($start_date.' - '.$end_date_status); ?></h4>
			<?php endif; ?>
			</div>
		</div>
		<?php endforeach;?>
	</div>
	<?php endif; ?>