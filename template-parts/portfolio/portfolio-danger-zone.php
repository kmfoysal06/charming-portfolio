<?php
/**
 * Basic Settings Template For Portfolio Customization Option
 * @package Charming Portfolio
 */
if( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="portfolio-section-wrapper section-danger-zone">
    <h3 class="portfolio-section-toggle"><?php esc_html_e("Erase Portfolio Data:",'charming-portfolio'); ?></h3>
    <div class="portfolio-section portfolio-danger-zone portfolio-section-content">
        <p><?php esc_html_e("Warning: This action will erase all portfolio data including settings, projects, and enquiries. This action is irreversible. Please proceed with caution.",'charming-portfolio'); ?>
        </p>
        <div class="flex justify-between flex-wrap">
            <button type="button"
                class="button button-danger charming-portfolio-erase-data-btn"><?php esc_html_e("Erase Data", 'charming-portfolio'); ?></button>
        </div>
    </div>

    <div class="erase-data-challange">
        <div class="flex justify-between flex-wrap cp-modal-inner">
            <label
                for="erase-data-challange-input"><?php esc_html_e("Type 'cp/erase' to confirm:",'charming-portfolio'); ?></label>
            <input type="text" id="erase-data-challange-input" class="erase-data-challange-input"
                name="erase_data_challange_input" value="" autocomplete="false">
            <div class="flex justify-end flex-wrap gap-2 mt-4">
                <button type="button" class="button button-primary cp-erase-data-confirm-btn"
                disabled><?php esc_html_e("Confirm", 'charming-portfolio'); ?></button>
                <button type="button" class="button button-secondary cp-erase-data-cancel-btn"><?php esc_html_e("Cancel", 'charming-portfolio'); ?></button>
            </div>
            <div class="erase-data-challange-message"></div>
        </div>
    </div>

    <div class="portfolio-section portfolio-danger-zone portfolio-section-content">
        <p><?php esc_html_e("Note: Please ensure you have backed up any important data before proceeding with the erase action.",'charming-portfolio'); ?>
        </p>
    </div>
</div>
</div>