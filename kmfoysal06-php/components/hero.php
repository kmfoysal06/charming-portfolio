<?php
/**
 * Hero Section Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}

// Helper function to process special tags
function kmfoysal06_special_tag($text) {
    if (!$text) return "";
    
    $processed = $text;
    $processed = str_replace('[bold]', '<b>', $processed);
    $processed = str_replace('[/bold]', '</b>', $processed);
    $processed = str_replace('[quote]', '"', $processed);
    $processed = str_replace('[squote]', "'", $processed);
    $processed = str_replace('[break]', '<br />', $processed);
    
    return $processed;
}
?>

<section id="home" class="min-h-screen flex items-center justify-center section-padding pt-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        <!-- Text Content -->
        <div class="text-center lg:text-left animate-on-scroll" data-delay="100ms">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span class="text-blue-600"><?php echo esc_html($portfolio_data['name'] ?? 'Developer'); ?></span>
                <span class="inline-block animate-bounce">👋</span>
            </h1>
            
            <?php if (!empty($portfolio_data['short_description'])): ?>
                <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                    <?php echo wp_kses(kmfoysal06_special_tag($portfolio_data['short_description']), [
                        'b' => [],
                        'br' => [],
                        'strong' => [],
                        'em' => [],
                        'i' => []
                    ]); ?>
                </p>
            <?php endif; ?>
            
            <!-- Location and Availability -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 mb-8">
                <?php if (!empty($portfolio_data['address'])): ?>
                    <div class="flex items-center justify-center lg:justify-start">
                        <span class="dashicons dashicons-location-alt text-gray-500 mr-2"></span>
                        <span class="text-gray-600"><?php echo esc_html($portfolio_data['address']); ?></span>
                    </div>
                <?php endif; ?>
                
                <div class="flex items-center justify-center lg:justify-start">
                    <span class="w-3 h-3 rounded-full mr-2 <?php echo !empty($portfolio_data['available']) && $portfolio_data['available'] ? 'bg-green-500' : 'bg-red-500'; ?>"></span>
                    <span class="text-gray-600">
                        <?php echo !empty($portfolio_data['available']) && $portfolio_data['available'] 
                            ? 'Available for New Projects' 
                            : 'Currently Not Available for New Projects'; ?>
                    </span>
                </div>
            </div>
            
            <!-- Social Links -->
            <?php if (!empty($portfolio_data['social_links']) && is_array($portfolio_data['social_links'])): ?>
                <div class="flex justify-center lg:justify-start space-x-4 mb-8">
                    <?php foreach ($portfolio_data['social_links'] as $social): ?>
                        <?php if (!empty($social['link']) && !empty($social['icon'])): ?>
                            <a href="<?php echo esc_url($social['link']); ?>" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="social-icon hover-scale"
                               aria-label="<?php echo esc_attr($social['name'] ?? 'Social Link'); ?>">
                                <i class="<?php echo esc_attr($social['icon']); ?>"></i>
                            </a>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
                    Get in Touch
                </a>
                <?php if (!empty($portfolio_data['resume_link'])): ?>
                    <a href="<?php echo esc_url($portfolio_data['resume_link']); ?>" 
                       target="_blank"
                       class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center">
                        Download CV
                    </a>
                <?php endif; ?>
            </div>
        </div>
        
        <!-- Profile Image -->
        <div class="text-center animate-on-scroll" data-delay="200ms">
            <?php if (!empty($portfolio_data['user_image'])): ?>
                <div class="relative inline-block">
                    <img src="<?php echo esc_url($portfolio_data['user_image']); ?>" 
                         alt="<?php echo esc_attr($portfolio_data['name'] ?? 'Profile'); ?>"
                         class="w-80 h-80 object-cover rounded-full shadow-2xl mx-auto hover-scale">
                    <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                </div>
            <?php else: ?>
                <div class="w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <span class="text-white text-6xl font-bold">
                        <?php echo esc_html(substr($portfolio_data['name'] ?? 'U', 0, 1)); ?>
                    </span>
                </div>
            <?php endif; ?>
        </div>
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </a>
    </div>
</section>