<?php
/**
 * About Section Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<section id="about" class="section-padding bg-gray-50">
    <div class="text-center mb-16 animate-on-scroll" data-delay="100ms">
        <span class="badge">About Me</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curious about me? Here you have it:
        </h2>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- About Image -->
        <div class="text-center lg:text-left animate-on-scroll" data-delay="200ms">
            <?php if (!empty($portfolio_data['user_image2'])): ?>
                <img src="<?php echo esc_url($portfolio_data['user_image2']); ?>" 
                     alt="<?php echo esc_attr($portfolio_data['name'] ?? 'About'); ?>"
                     class="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg hover-scale">
            <?php elseif (!empty($portfolio_data['user_image'])): ?>
                <img src="<?php echo esc_url($portfolio_data['user_image']); ?>" 
                     alt="<?php echo esc_attr($portfolio_data['name'] ?? 'About'); ?>"
                     class="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg hover-scale">
            <?php else: ?>
                <div class="w-full max-w-md h-96 mx-auto lg:mx-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span class="text-white text-6xl font-bold">
                        <?php echo esc_html(substr($portfolio_data['name'] ?? 'U', 0, 1)); ?>
                    </span>
                </div>
            <?php endif; ?>
        </div>
        
        <!-- About Content -->
        <div class="animate-on-scroll" data-delay="300ms">
            <?php if (!empty($portfolio_data['description'])): ?>
                <div class="prose prose-lg text-gray-600 mb-6">
                    <?php echo wp_kses(kmfoysal06_special_tag($portfolio_data['description']), [
                        'p' => [],
                        'b' => [],
                        'strong' => [],
                        'em' => [],
                        'i' => [],
                        'br' => [],
                        'ul' => [],
                        'ol' => [],
                        'li' => []
                    ]); ?>
                </div>
            <?php endif; ?>
            
            <!-- Additional Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                
                <!-- Experience Years -->
                <?php if (!empty($portfolio_data['experience_years'])): ?>
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="text-3xl font-bold text-blue-600 mb-2">
                            <?php echo esc_html($portfolio_data['experience_years']); ?>+
                        </div>
                        <div class="text-gray-600">Years of Experience</div>
                    </div>
                <?php endif; ?>
                
                <!-- Projects Completed -->
                <?php if (!empty($portfolio_data['projects_completed'])): ?>
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="text-3xl font-bold text-blue-600 mb-2">
                            <?php echo esc_html($portfolio_data['projects_completed']); ?>+
                        </div>
                        <div class="text-gray-600">Projects Completed</div>
                    </div>
                <?php endif; ?>
                
                <!-- If no specific stats, show default ones -->
                <?php if (empty($portfolio_data['experience_years']) && empty($portfolio_data['projects_completed'])): ?>
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="text-3xl font-bold text-blue-600 mb-2">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="text-gray-600">Clean Code</div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="text-3xl font-bold text-blue-600 mb-2">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="text-gray-600">Responsive Design</div>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Skills Preview -->
            <?php if (!empty($portfolio_data['top_skills']) && is_array($portfolio_data['top_skills'])): ?>
                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Top Skills</h3>
                    <div class="flex flex-wrap gap-2">
                        <?php foreach (array_slice($portfolio_data['top_skills'], 0, 6) as $skill): ?>
                            <span class="tag bg-blue-100 text-blue-800">
                                <?php echo esc_html($skill); ?>
                            </span>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
            
            <!-- Call to Action -->
            <div class="mt-8">
                <a href="#contact" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Let's Work Together
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>