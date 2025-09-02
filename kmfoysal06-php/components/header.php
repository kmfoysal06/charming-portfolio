<?php
/**
 * Header Component for kmfoysal06-php Portfolio
 * @package Charming Portfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 animate-on-scroll" data-delay="0ms">
    <nav class="portfolio-container">
        <div class="flex items-center justify-between h-16">
            <!-- Logo/Name -->
            <div class="font-bold text-xl text-gray-900">
                <a href="#home" class="hover:text-blue-600 transition-colors">
                    <?php echo esc_html($portfolio_data['name'] ?? 'Portfolio'); ?>
                </a>
            </div>
            
            <!-- Navigation Menu -->
            <div class="hidden md:flex space-x-8">
                <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Skills</a>
                <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
                <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
                <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button id="mobile-menu-btn" class="text-gray-700 hover:text-blue-600 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden py-4 border-t border-gray-200">
            <div class="flex flex-col space-y-4">
                <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Skills</a>
                <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
                <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
                <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
        </div>
    </nav>
</header>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
</script>