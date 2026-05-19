<?php
/**
 * Tab list
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio','global-tab');

?>
<div class="portfolio-section-wrapper">
    <nav class="tablist">
        <ul class="charming-portfolio-tab-list">
            <li class="charming-portfolio-tab active"><a href="#skills" data-target="skills">Skills</a></li>
            <li class="charming-portfolio-tab"><a href="#experience" data-target="experience">Experience</a></li>
            <li class="charming-portfolio-tab"><a href="#projects" data-target="projects">Projects</a></li>
        </ul>
    </nav>
</div>
