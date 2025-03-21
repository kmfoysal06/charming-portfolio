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
		<div class="skills-title flex flex-col items-center">
			<div class="badge badge-neutral py-3 px-4"><?php esc_html_e("Skills","charming-portfolio"); ?></div>
			<p><?php esc_html_e("The skills, tools and technologies I am really good at:","charming-portfolio"); ?></p>
			</div>
		<div class="skills-container">
			<?php
			foreach($args['skills'] as $skill){
				?>
			<div class="charming-portfolio-skill-card charming_portfolio_shadow_thin cursor-pointer" tabindex="0">
				<img src="<?php echo esc_url($skill['image'])?>" alt="<?php esc_attr($skill['name'])?>" class="charming-portfolio-single-skill" width="70px" />
				<p class="skill-name"><?php echo esc_html($skill['name']); ?></p>
				<div class="simplecharm-skill-card-blank"></div>
			</div>
		<?php
			}
		?>
		</div>
<?php
}
