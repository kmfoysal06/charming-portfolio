<?php
/**
 * Projects Section Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}

// Helper function to split tags
function kmfoysal06_split_tags($tags_string) {
    if (!$tags_string) return [];
    return array_filter(array_map('trim', explode(',', $tags_string)));
}
?>

<?php if (!empty($portfolio_data['works']) && is_array($portfolio_data['works'])): ?>
<section id="projects" class="section-padding">
    <div class="text-center mb-16 animate-on-scroll" data-delay="100ms">
        <span class="badge">Works</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Some of the noteworthy projects I have built:
        </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <?php 
        $delay = 200;
        foreach ($portfolio_data['works'] as $index => $project):
            if (empty($project['title']) || empty($project['description'])) continue;
            $delay += 100;
            $tags = kmfoysal06_split_tags($project['tags'] ?? '');
        ?>
            <div class="project-card hover-scale animate-on-scroll" data-delay="<?php echo esc_attr($delay); ?>ms">
                
                <!-- Project Image -->
                <?php if (!empty($project['image'])): ?>
                    <div class="relative overflow-hidden">
                        <img src="<?php echo esc_url($project['image']); ?>" 
                             alt="<?php echo esc_attr($project['title']); ?>"
                             class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                <?php else: ?>
                    <div class="w-full h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <i class="fas fa-code text-white text-4xl"></i>
                    </div>
                <?php endif; ?>
                
                <!-- Project Content -->
                <div class="p-6">
                    <!-- Project Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3">
                        <?php echo esc_html($project['title']); ?>
                    </h3>
                    
                    <!-- Project Description -->
                    <p class="text-gray-600 mb-4 line-clamp-3">
                        <?php echo wp_kses(kmfoysal06_special_tag($project['description']), [
                            'b' => [],
                            'strong' => [],
                            'em' => [],
                            'i' => [],
                            'br' => []
                        ]); ?>
                    </p>
                    
                    <!-- Project Tags -->
                    <?php if (!empty($tags)): ?>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <?php foreach (array_slice($tags, 0, 5) as $tag): ?>
                                <span class="tag bg-gray-100 text-gray-700">
                                    <?php echo esc_html($tag); ?>
                                </span>
                            <?php endforeach; ?>
                            <?php if (count($tags) > 5): ?>
                                <span class="tag bg-gray-100 text-gray-500">
                                    +<?php echo count($tags) - 5; ?> more
                                </span>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                    
                    <!-- Project Links -->
                    <div class="flex justify-between items-center mt-6">
                        <div class="flex space-x-3">
                            <?php if (!empty($project['link'])): ?>
                                <a href="<?php echo esc_url($project['link']); ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                   title="View Live Project">
                                    <i class="fas fa-external-link-alt mr-1"></i>
                                    <span class="text-sm font-medium">Live Demo</span>
                                </a>
                            <?php endif; ?>
                            
                            <?php if (!empty($project['github_link'])): ?>
                                <a href="<?php echo esc_url($project['github_link']); ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                                   title="View Source Code">
                                    <i class="fab fa-github mr-1"></i>
                                    <span class="text-sm font-medium">Code</span>
                                </a>
                            <?php endif; ?>
                        </div>
                        
                        <!-- Project Status -->
                        <?php if (!empty($project['status'])): ?>
                            <span class="px-2 py-1 text-xs font-medium rounded-full 
                                <?php echo $project['status'] === 'completed' ? 'bg-green-100 text-green-800' : 
                                    ($project['status'] === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'); ?>">
                                <?php echo esc_html(ucfirst(str_replace('-', ' ', $project['status']))); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    
    <!-- Show More Projects -->
    <?php if (count($portfolio_data['works']) > 6): ?>
        <div class="text-center mt-12 animate-on-scroll" data-delay="800ms">
            <button id="show-more-projects" 
                    class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Show More Projects
            </button>
        </div>
    <?php endif; ?>
    
    <!-- GitHub Profile Link -->
    <?php if (!empty($portfolio_data['github_profile'])): ?>
        <div class="text-center mt-12 animate-on-scroll" data-delay="900ms">
            <p class="text-gray-600 mb-4">
                Want to see more of my work?
            </p>
            <a href="<?php echo esc_url($portfolio_data['github_profile']); ?>" 
               target="_blank" 
               rel="noopener noreferrer"
               class="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <i class="fab fa-github mr-2 text-xl"></i>
                View All Projects on GitHub
            </a>
        </div>
    <?php endif; ?>
</section>

<style>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.project-card .hidden-projects {
    display: none;
}

.project-card.show-all .hidden-projects {
    display: block;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('show-more-projects');
    if (showMoreBtn) {
        const allProjects = document.querySelectorAll('.project-card');
        const initialCount = 6;
        
        // Hide projects beyond initial count
        allProjects.forEach((project, index) => {
            if (index >= initialCount) {
                project.style.display = 'none';
            }
        });
        
        showMoreBtn.addEventListener('click', () => {
            const hiddenProjects = document.querySelectorAll('.project-card[style*="display: none"]');
            
            if (hiddenProjects.length > 0) {
                // Show next batch of projects
                const nextBatch = Array.from(hiddenProjects).slice(0, 3);
                nextBatch.forEach(project => {
                    project.style.display = 'block';
                    project.classList.add('animate-on-scroll');
                });
                
                // Update button text
                if (hiddenProjects.length <= 3) {
                    showMoreBtn.textContent = 'Show Less';
                }
            } else {
                // Hide extra projects
                allProjects.forEach((project, index) => {
                    if (index >= initialCount) {
                        project.style.display = 'none';
                    }
                });
                showMoreBtn.textContent = 'Show More Projects';
            }
        });
    }
});
</script>
<?php endif; ?>