<?php
/**
 * Skills Template For Frontpage
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
if(is_array($args['skills']) && !empty($args['skills'])){
		?>
		<div class="skills-title my-3 flex flex-col items-center">
			<div class="badge badge-neutral"><?php esc_html_e("Skills","charming-portfolio"); ?></div>
			<p><?php esc_html_e("The skills, tools and technologies I am really good at:","charming-portfolio"); ?></p>
			</div>
		<div class="skills-container justify-center items-center gap-1 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
			<?php
			foreach($args['skills'] as $skill){
				?>
			<div class="simplecharm-skill-card cursor-pointer p-2 flex justify-center items-center transition-all" tabindex="0">
				<h4 class="skill-name text-center lg:text-2xl md:text-2xl sm:text-xl"><?php echo esc_html($skill); ?></h4>
				<div class="simplecharm-skill-card-blank"></div>
			</div>
		<?php
			}
		?>
		</div>
<?php
}