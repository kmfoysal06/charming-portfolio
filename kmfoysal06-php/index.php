<?php
/**
 * kmfoysal06-php Portfolio Implementation
 * A comprehensive PHP-based portfolio rendering system
 * @package Charming Portfolio
 * @author kmfoysal06
 * @version 1.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Get portfolio data
$portfolio = \CHARMING_PORTFOLIO\Inc\Classes\Portfolio::get_instance();
$portfolio_data = $portfolio->display_saved_value();

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo esc_html($portfolio_data['name']) ?> - Portfolio</title>
    
    <!-- Tailwind CSS CDN for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="<?php echo esc_url(plugins_url('assets/build/css/main.css', CHARMING_PORTFOLIO_DIR_PATH . '/portfolio.php')); ?>">
    
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- WordPress Dashicons -->
    <link rel="stylesheet" href="<?php echo includes_url('css/dashicons.min.css'); ?>">
    
    <style>
        /* Custom styles for kmfoysal06-php implementation */
        :root {
            --primary-color: #1f2937;
            --secondary-color: #6b7280;
            --accent-color: #3b82f6;
            --background-color: #ffffff;
            --card-bg: #f9fafb;
        }
        
        .dark-mode {
            --primary-color: #f9fafb;
            --secondary-color: #d1d5db;
            --background-color: #111827;
            --card-bg: #1f2937;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--background-color);
            color: var(--primary-color);
            line-height: 1.6;
        }
        
        .portfolio-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .section-padding {
            padding: 4rem 0;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card-shadow {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .hover-scale {
            transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
            transform: scale(1.05);
        }
        
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: var(--accent-color);
            color: white;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        
        .skill-card {
            background: var(--card-bg);
            padding: 1.5rem;
            border-radius: 0.5rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #e5e7eb;
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .project-card {
            background: var(--card-bg);
            border-radius: 0.5rem;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid #e5e7eb;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .social-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: var(--accent-color);
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            transform: scale(1.1);
            background-color: #2563eb;
        }
        
        .tag {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            background-color: #e5e7eb;
            color: var(--secondary-color);
            border-radius: 9999px;
            font-size: 0.75rem;
            margin: 0.25rem;
        }
    </style>
    
    <?php wp_head(); ?>
</head>
<body>
    <div id="kmfoysal06-portfolio" class="portfolio-container">
        <?php 
        // Include all portfolio sections
        include_once(__DIR__ . '/components/header.php');
        include_once(__DIR__ . '/components/hero.php');
        include_once(__DIR__ . '/components/about.php');
        include_once(__DIR__ . '/components/skills.php');
        include_once(__DIR__ . '/components/experience.php');
        include_once(__DIR__ . '/components/projects.php');
        include_once(__DIR__ . '/components/footer.php');
        ?>
    </div>
    
    <!-- JavaScript for animations and interactions -->
    <script>
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = entry.target.dataset.delay || '0ms';
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.animate-on-scroll');
            sections.forEach(section => observer.observe(section));
        });
        
        // Copy to clipboard functionality
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Show toast notification
                const toast = document.createElement('div');
                toast.textContent = 'Copied to clipboard!';
                toast.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                `;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
            });
        }
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
    
    <?php wp_footer(); ?>
</body>
</html>