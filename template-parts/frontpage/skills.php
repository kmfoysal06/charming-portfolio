<?php
/**
 * Skills Template For Frontpage
 * @package Simplecharm Portfolio Plugin
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
if(is_array($args['skills']) && !empty($args['skills'])){
		?>
		<div class="skills-title my-3 flex flex-col items-center">
			<div class="badge badge-neutral"><?php _e("Skills","charming-portfolio"); ?></div>
			<p><?php _e("The skills, tools and technologies I am really good at:","charming-portfolio"); ?></p>
			</div>
		<div class="skills-container justify-center items-center gap-1 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
			<?php
			foreach($args['skills'] as $skill){
				?>
			<div class="simplecharm-skill-card gap-3 cursor-pointer p-5 bg-blue-700 flex justify-center items-center transition-all" tabindex="0">
				<h4 class="skill-name text-center text-lg"><?php echo esc_html($skill); ?></h4>
				<div class="simplecharm-skill-card-blank"></div>
			</div>
		<?php
			}
		?>
		</div>
<?php
}