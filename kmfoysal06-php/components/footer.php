<?php
/**
 * Footer Section Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<section id="contact" class="section-padding bg-gray-50">
    <!-- Contact Header -->
    <div class="text-center mb-16 animate-on-scroll" data-delay="100ms">
        <span class="badge">Get in Touch</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </h2>
    </div>
    
    <!-- Contact Information -->
    <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            <!-- Email -->
            <?php if (!empty($portfolio_data['email'])): ?>
                <div class="text-center md:text-left animate-on-scroll" data-delay="200ms">
                    <div class="bg-white p-8 rounded-lg card-shadow hover-scale">
                        <div class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-envelope text-blue-600 text-xl"></i>
                                </div>
                            </div>
                            <div class="flex-grow text-center md:text-left">
                                <h3 class="font-semibold text-gray-900 mb-2">Email</h3>
                                <p class="text-gray-600 break-all">
                                    <?php echo esc_html($portfolio_data['email']); ?>
                                </p>
                                <div class="flex justify-center md:justify-start space-x-4 mt-4">
                                    <a href="mailto:<?php echo esc_attr($portfolio_data['email']); ?>" 
                                       class="text-blue-600 hover:text-blue-800 transition-colors">
                                        <i class="fas fa-paper-plane mr-1"></i>
                                        Send Email
                                    </a>
                                    <button onclick="copyToClipboard('<?php echo esc_js($portfolio_data['email']); ?>')" 
                                            class="text-gray-600 hover:text-gray-800 transition-colors">
                                        <i class="fas fa-copy mr-1"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            
            <!-- Phone -->
            <?php if (!empty($portfolio_data['phone'])): ?>
                <div class="text-center md:text-left animate-on-scroll" data-delay="300ms">
                    <div class="bg-white p-8 rounded-lg card-shadow hover-scale">
                        <div class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-phone text-green-600 text-xl"></i>
                                </div>
                            </div>
                            <div class="flex-grow text-center md:text-left">
                                <h3 class="font-semibold text-gray-900 mb-2">Phone</h3>
                                <p class="text-gray-600 break-all">
                                    <?php echo esc_html($portfolio_data['phone']); ?>
                                </p>
                                <div class="flex justify-center md:justify-start space-x-4 mt-4">
                                    <a href="tel:<?php echo esc_attr($portfolio_data['phone']); ?>" 
                                       class="text-green-600 hover:text-green-800 transition-colors">
                                        <i class="fas fa-phone-alt mr-1"></i>
                                        Call Now
                                    </a>
                                    <button onclick="copyToClipboard('<?php echo esc_js($portfolio_data['phone']); ?>')" 
                                            class="text-gray-600 hover:text-gray-800 transition-colors">
                                        <i class="fas fa-copy mr-1"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        
        <!-- Social Links -->
        <?php if (!empty($portfolio_data['social_links']) && is_array($portfolio_data['social_links'])): ?>
            <div class="text-center animate-on-scroll" data-delay="400ms">
                <p class="text-gray-600 mb-6">
                    You may also find me on these platforms!
                </p>
                <div class="flex justify-center space-x-4 mb-8">
                    <?php foreach ($portfolio_data['social_links'] as $social): ?>
                        <?php if (!empty($social['link']) && !empty($social['icon'])): ?>
                            <a href="<?php echo esc_url($social['link']); ?>" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="social-icon hover-scale"
                               title="<?php echo esc_attr($social['name'] ?? 'Social Link'); ?>">
                                <i class="<?php echo esc_attr($social['icon']); ?>"></i>
                            </a>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
        
        <!-- Contact Form (Optional) -->
        <div class="bg-white p-8 rounded-lg card-shadow animate-on-scroll" data-delay="500ms">
            <h3 class="text-xl font-bold text-gray-900 mb-6 text-center">Send me a message</h3>
            <form id="contact-form" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" 
                               id="name" 
                               name="name" 
                               required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" 
                               id="email" 
                               name="email" 
                               required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    </div>
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" 
                           id="subject" 
                           name="subject" 
                           required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" 
                              name="message" 
                              rows="5" 
                              required
                              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" 
                            class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        <i class="fas fa-paper-plane mr-2"></i>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
    <div class="portfolio-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            <!-- About -->
            <div class="text-center md:text-left">
                <h3 class="text-xl font-bold mb-4">
                    <?php echo esc_html($portfolio_data['name'] ?? 'Portfolio'); ?>
                </h3>
                <p class="text-gray-400 mb-4">
                    <?php echo !empty($portfolio_data['short_description']) 
                        ? wp_kses(kmfoysal06_special_tag($portfolio_data['short_description']), ['b' => [], 'br' => []]) 
                        : 'Thank you for visiting my portfolio. Let\'s create something amazing together!'; ?>
                </p>
            </div>
            
            <!-- Quick Links -->
            <div class="text-center">
                <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                <div class="flex flex-col space-y-2">
                    <a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a>
                    <a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a>
                    <a href="#skills" class="text-gray-400 hover:text-white transition-colors">Skills</a>
                    <a href="#experience" class="text-gray-400 hover:text-white transition-colors">Experience</a>
                    <a href="#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
                </div>
            </div>
            
            <!-- Contact Info -->
            <div class="text-center md:text-right">
                <h3 class="text-xl font-bold mb-4">Get in Touch</h3>
                <?php if (!empty($portfolio_data['email'])): ?>
                    <p class="text-gray-400 mb-2">
                        <i class="fas fa-envelope mr-2"></i>
                        <?php echo esc_html($portfolio_data['email']); ?>
                    </p>
                <?php endif; ?>
                <?php if (!empty($portfolio_data['phone'])): ?>
                    <p class="text-gray-400 mb-4">
                        <i class="fas fa-phone mr-2"></i>
                        <?php echo esc_html($portfolio_data['phone']); ?>
                    </p>
                <?php endif; ?>
                
                <!-- Social Links -->
                <?php if (!empty($portfolio_data['social_links']) && is_array($portfolio_data['social_links'])): ?>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <?php foreach ($portfolio_data['social_links'] as $social): ?>
                            <?php if (!empty($social['link']) && !empty($social['icon'])): ?>
                                <a href="<?php echo esc_url($social['link']); ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="text-gray-400 hover:text-white transition-colors text-xl">
                                    <i class="<?php echo esc_attr($social['icon']); ?>"></i>
                                </a>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-800 pt-8 text-center">
            <p class="text-gray-400">
                © <?php echo date('Y'); ?> <?php echo esc_html($portfolio_data['name'] ?? 'Portfolio'); ?>. 
                Made with ❤️ using <strong>kmfoysal06-php</strong>
            </p>
        </div>
    </div>
</footer>

<!-- Back to top button -->
<button id="back-to-top" 
        class="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none">
    <i class="fas fa-arrow-up"></i>
</button>

<script>
// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const backToTop = document.getElementById('back-to-top');
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:<?php echo esc_js($portfolio_data['email'] ?? ''); ?>?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            const toast = document.createElement('div');
            toast.textContent = 'Opening your email client...';
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        });
    }
    
    // Back to top button
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.pointerEvents = 'auto';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.pointerEvents = 'none';
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
</script>