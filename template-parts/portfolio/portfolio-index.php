<?php
/**
 * Portfolio Index - All file for portfolio settings will be indexed here
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
    exit;
}
$charming_portfolio             = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
$charming_portfolio_saved_data = $charming_portfolio->display_saved_value();

//tabs
CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio','tab-list', $charming_portfolio_saved_data);
?>
<div class="charming-portfolio-tabs">
    <div class="tab-content active" id="basic-settings" data-tab="basic-settings">
        <?php
        //     basic settings 
            CHARMING_PORTFOLIO_get_template_part('template-parts/portfolio/portfolio','basic', $charming_portfolio_saved_data);
        ?>
    </div>
    
    <div class="tab-content" id="hero-section" data-tab="hero-section">
        <?php
        
        // About Me  
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "aboutme", $charming_portfolio_saved_data);
        
        // Floating box of hero image 
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "hero-img-floating-box", $charming_portfolio_saved_data);
        ?>
    </div>
    
    
    <div class="tab-content" id="stat-boxes-section" data-tab="stat-boxes-section">
        <?php
        // Stat Boxes Section (v3+) 
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "stat-boxes", $charming_portfolio_saved_data);
        ?>
    
    </div>
    
    <div class="tab-content" id="contact-informations" data-tab="contact-informations">
        <?php
        // Contact Options 
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "contact", $charming_portfolio_saved_data);
        ?>
    </div>
    
    <div class="tab-content" id="links" data-tab="links">
        <?php
        
        // social links 
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "social-links", $charming_portfolio_saved_data);
        
        // links to show on header menu 
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "header-links", $charming_portfolio_saved_data);
        
        // links to show on footer 
        CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "footer-links", $charming_portfolio_saved_data);
    
    ?>
    </div>
    
    <div class="tab-content" id="choose-theme" data-tab="choose-theme">
    <?php
    // choose theme 
    CHARMING_PORTFOLIO_get_template_part("template-parts/portfolio/portfolio", "themes", $charming_portfolio_saved_data);
    ?>
    </div>
</div>
