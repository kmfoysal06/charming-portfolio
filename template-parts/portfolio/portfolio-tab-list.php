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
            <li class="charming-portfolio-tab active"><a href="#basic-settings" data-target="basic-settings">Basic Settings</a></li>
            <li class="charming-portfolio-tab"><a href="#hero-section" data-target="hero-section">Hero Section</a></li>
            <li class="charming-portfolio-tab"><a href="#stat-boxes-section" data-target="stat-boxes-section">Stat Boxes</a></li>
            <li class="charming-portfolio-tab"><a href="#contact-informations" data-target="contact-informations">Contact Informations</a></li>
            <li class="charming-portfolio-tab"><a href="#links" data-target="links">Links</a></li>
            <li class="charming-portfolio-tab"><a href="#choose-theme" data-target="choose-theme">Choose Theme</a></li>
        </ul>
    </nav>
</div>
