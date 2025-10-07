<?php
/**
 * contact form template
 * @package Charming Portfolio
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\PORTFOLIO::get_instance();
?>
<div class="charming-portfolio-container charming-portfolio-contact-section">
        <div class="section-header">
            <h2 class="badge">Contact Me</h2>
            <p>Want to know something else? Let me know:</p>
        </div>
        <div class="section-content">
            <div class="contact-header">
                <div class="name">
                    <h3><?php echo esc_html($args['name']) ?? "Charm"?></h3>
                    <p><?php echo esc_html($args['designation']) ?? "Ununemployed"?></p>
                </div>
                <div class="contact-info">
                    <p>Phone: <span><?php echo esc_html($args['phone']) ?></span></p>
                    <p>Email: <span><?php echo esc_html($args['email']) ?></span></p>
                </div>
            </div>
            <div class="contact-form">
                <div class="form-image">
                    <img src="<?php echo esc_url($args['user_image2']); ?>" width="300px" height="auto" alt="<?php echo esc_html($args['name']) ?>" loading="lazy" />
                </div>

                <div class="form-container">
                    <div class="form-field">
                        <label for="charming-portfolio-contact-name">Name:</label>
                        <input type="text" name="name" id="charming-portfolio-contact-name" placeholder="Your Name"
                            required>
                    </div>
                    <div class="form-field">
                        <label for="charming-portfolio-contact-email">Email:</label>
                        <input type="text" name="email" id="charming-portfolio-contact-email"
                            placeholder="Your Email" required>
                    </div>
                    <div class="form-field">
                        <label for="charming-portfolio-contact-message">Message:</label>
                        <textarea name="message" id="charming-portfolio-contact-message" placeholder="Your Message"
                            rows="10" required></textarea>
                    </div>
                    <div class="form-field">
                        <button type="submit" name="submit"> Submit </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
