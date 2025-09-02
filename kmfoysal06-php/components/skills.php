<?php
/**
 * Skills Section Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<?php if (!empty($portfolio_data['skills']) && is_array($portfolio_data['skills'])): ?>
<section id="skills" class="section-padding">
    <div class="text-center mb-16 animate-on-scroll" data-delay="100ms">
        <span class="badge">Skills</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The skills, tools and technologies I am really good at:
        </h2>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <?php 
        $delay = 100;
        foreach ($portfolio_data['skills'] as $index => $skill): 
            if (empty($skill['name'])) continue;
            $delay += 50;
        ?>
            <div class="skill-card hover-scale animate-on-scroll" data-delay="<?php echo esc_attr($delay); ?>ms">
                <?php if (!empty($skill['image'])): ?>
                    <div class="mb-4">
                        <img src="<?php echo esc_url($skill['image']); ?>" 
                             alt="<?php echo esc_attr($skill['name']); ?>"
                             class="w-16 h-16 mx-auto object-contain">
                    </div>
                <?php else: ?>
                    <div class="mb-4">
                        <div class="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                            <i class="fas fa-code text-blue-600 text-2xl"></i>
                        </div>
                    </div>
                <?php endif; ?>
                
                <h3 class="font-semibold text-gray-900 text-center text-sm">
                    <?php echo esc_html($skill['name']); ?>
                </h3>
                
                <?php if (!empty($skill['level'])): ?>
                    <div class="mt-2">
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out skill-progress" 
                                 data-width="<?php echo esc_attr($skill['level']); ?>%"
                                 style="width: 0%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1 text-center">
                            <?php echo esc_html($skill['level']); ?>%
                        </p>
                    </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
    
    <!-- Skills Categories (if available) -->
    <?php if (!empty($portfolio_data['skill_categories'])): ?>
        <div class="mt-16">
            <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Expertise Areas</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php foreach ($portfolio_data['skill_categories'] as $category => $skills): ?>
                    <div class="text-center animate-on-scroll" data-delay="<?php echo esc_attr(200 + array_search($category, array_keys($portfolio_data['skill_categories'])) * 100); ?>ms">
                        <div class="bg-white p-6 rounded-lg card-shadow">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">
                                <?php echo esc_html(ucfirst($category)); ?>
                            </h4>
                            <div class="flex flex-wrap justify-center gap-2">
                                <?php foreach ($skills as $skill): ?>
                                    <span class="tag bg-gray-100 text-gray-700">
                                        <?php echo esc_html($skill); ?>
                                    </span>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    <?php else: ?>
        <!-- Default categories if none specified -->
        <div class="mt-16">
            <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Expertise Areas</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center animate-on-scroll" data-delay="300ms">
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-laptop-code text-blue-600 text-xl"></i>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h4>
                        <p class="text-gray-600 text-sm">Building responsive and interactive user interfaces</p>
                    </div>
                </div>
                
                <div class="text-center animate-on-scroll" data-delay="400ms">
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-server text-green-600 text-xl"></i>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Backend Development</h4>
                        <p class="text-gray-600 text-sm">Creating robust server-side applications and APIs</p>
                    </div>
                </div>
                
                <div class="text-center animate-on-scroll" data-delay="500ms">
                    <div class="bg-white p-6 rounded-lg card-shadow">
                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-mobile-alt text-purple-600 text-xl"></i>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Mobile Development</h4>
                        <p class="text-gray-600 text-sm">Developing cross-platform mobile applications</p>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
</section>

<script>
// Animate skill progress bars when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.width;
                    }, 500);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});
</script>
<?php endif; ?>