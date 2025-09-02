<?php
/**
 * Experience Section Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}

// Helper function to format date
function kmfoysal06_format_date($date_string) {
    if (!$date_string) return "";
    $date = new DateTime($date_string);
    return $date->format('M Y');
}
?>

<?php if (!empty($portfolio_data['experiences']) && is_array($portfolio_data['experiences'])): ?>
<section id="experience" class="section-padding bg-gray-50">
    <div class="text-center mb-16 animate-on-scroll" data-delay="100ms">
        <span class="badge">Experience</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Here is a quick summary of my most recent experiences:
        </h2>
    </div>
    
    <div class="max-w-4xl mx-auto">
        <div class="relative">
            <!-- Timeline line -->
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            <?php 
            $delay = 200;
            foreach ($portfolio_data['experiences'] as $index => $experience):
                // Handle array of arrays or array of objects
                if (is_array($experience) && isset($experience[0])) {
                    $exp = $experience[0];
                } else {
                    $exp = $experience;
                }
                
                if (empty($exp['institution']) && empty($exp['post-title'])) continue;
                
                $delay += 100;
                $is_even = $index % 2 == 0;
            ?>
                <div class="relative mb-8 animate-on-scroll" data-delay="<?php echo esc_attr($delay); ?>ms">
                    <!-- Timeline dot -->
                    <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <!-- Experience card -->
                    <div class="md:w-1/2 <?php echo $is_even ? 'md:pr-8' : 'md:ml-auto md:pl-8'; ?>">
                        <div class="bg-white p-6 rounded-lg card-shadow hover-scale">
                            <!-- Company/Institution -->
                            <?php if (!empty($exp['institution'])): ?>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    <?php echo esc_html($exp['institution']); ?>
                                </h3>
                            <?php endif; ?>
                            
                            <!-- Position -->
                            <?php if (!empty($exp['post-title'])): ?>
                                <h4 class="text-lg font-semibold text-blue-600 mb-3">
                                    <?php echo esc_html($exp['post-title']); ?>
                                </h4>
                            <?php endif; ?>
                            
                            <!-- Date Range -->
                            <div class="flex items-center text-gray-500 mb-4">
                                <i class="fas fa-calendar-alt mr-2"></i>
                                <span>
                                    <?php 
                                    $start_date = !empty($exp['start_date']) ? kmfoysal06_format_date($exp['start_date']) : '';
                                    $working_now = !empty($exp['working']) && $exp['working'] === 'on';
                                    $end_date = !$working_now && !empty($exp['end_date']) ? kmfoysal06_format_date($exp['end_date']) : '';
                                    
                                    echo esc_html($start_date);
                                    echo ' - ';
                                    echo $working_now ? 'Present' : esc_html($end_date);
                                    ?>
                                </span>
                            </div>
                            
                            <!-- Responsibilities -->
                            <?php if (!empty($exp['responsibility'])): ?>
                                <div class="text-gray-600">
                                    <?php echo wp_kses(kmfoysal06_special_tag($exp['responsibility']), [
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
                            
                            <!-- Skills used -->
                            <?php if (!empty($exp['skills']) && is_array($exp['skills'])): ?>
                                <div class="mt-4">
                                    <div class="flex flex-wrap gap-2">
                                        <?php foreach ($exp['skills'] as $skill): ?>
                                            <span class="tag bg-blue-100 text-blue-800">
                                                <?php echo esc_html($skill); ?>
                                            </span>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                        
                        <!-- Mobile timeline indicator -->
                        <div class="md:hidden w-4 h-4 bg-blue-600 rounded-full mt-4 mx-auto"></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    
    <!-- Call to action -->
    <div class="text-center mt-16 animate-on-scroll" data-delay="600ms">
        <p class="text-gray-600 mb-6">
            Interested in my full work history?
        </p>
        <?php if (!empty($portfolio_data['resume_link'])): ?>
            <a href="<?php echo esc_url($portfolio_data['resume_link']); ?>" 
               target="_blank"
               class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                <i class="fas fa-download mr-2"></i>
                Download Full Resume
            </a>
        <?php else: ?>
            <a href="#contact" 
               class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                <i class="fas fa-envelope mr-2"></i>
                Request Full Resume
            </a>
        <?php endif; ?>
    </div>
</section>
<?php endif; ?>