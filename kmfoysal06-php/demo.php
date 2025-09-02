<?php
/**
 * Demo/Preview file for kmfoysal06-php Portfolio Implementation
 * This file provides a standalone preview of the portfolio without WordPress dependencies
 * @package Charming Portfolio
 */

// Mock portfolio data for demonstration
$portfolio_data = [
    'name' => 'John Doe',
    'email' => 'john.doe@example.com',
    'phone' => '+1 (555) 123-4567',
    'address' => 'New York, NY',
    'user_image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    'user_image2' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    'short_description' => 'Full-stack developer passionate about creating [bold]amazing digital experiences[/bold] with modern technologies.',
    'description' => 'I am a passionate full-stack developer with over 5 years of experience in web development. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.[break][break]My expertise spans across frontend and backend technologies, with a strong focus on JavaScript ecosystem, PHP, and modern frameworks.',
    'available' => true,
    'social_links' => [
        [
            'name' => 'LinkedIn',
            'link' => 'https://linkedin.com/in/johndoe',
            'icon' => 'fab fa-linkedin'
        ],
        [
            'name' => 'GitHub',
            'link' => 'https://github.com/johndoe',
            'icon' => 'fab fa-github'
        ],
        [
            'name' => 'Twitter',
            'link' => 'https://twitter.com/johndoe',
            'icon' => 'fab fa-twitter'
        ]
    ],
    'skills' => [
        [
            'name' => 'JavaScript',
            'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            'level' => 95
        ],
        [
            'name' => 'React',
            'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'level' => 90
        ],
        [
            'name' => 'Node.js',
            'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            'level' => 88
        ],
        [
            'name' => 'PHP',
            'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
            'level' => 85
        ],
        [
            'name' => 'Python',
            'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            'level' => 80
        ],
        [
            'name' => 'MySQL',
            'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            'level' => 85
        ]
    ],
    'experiences' => [
        [
            [
                'institution' => 'Tech Solutions Inc.',
                'post-title' => 'Senior Full Stack Developer',
                'start_date' => '2021-03-01',
                'end_date' => null,
                'working' => 'on',
                'responsibility' => 'Lead development of web applications using React and Node.js[break]Mentor junior developers and conduct code reviews[break]Collaborate with design and product teams to implement new features'
            ]
        ],
        [
            [
                'institution' => 'Digital Agency Ltd.',
                'post-title' => 'Web Developer',
                'start_date' => '2019-06-01',
                'end_date' => '2021-02-28',
                'working' => 'off',
                'responsibility' => 'Developed responsive websites using HTML, CSS, and JavaScript[break]Built WordPress themes and plugins[break]Optimized website performance and SEO'
            ]
        ]
    ],
    'works' => [
        [
            'title' => 'E-commerce Platform',
            'description' => 'A modern e-commerce platform built with React and Node.js featuring real-time inventory management, payment processing, and admin dashboard.',
            'tags' => 'React, Node.js, MongoDB, Stripe',
            'link' => 'https://demo-ecommerce.example.com',
            'github_link' => 'https://github.com/johndoe/ecommerce-platform',
            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            'status' => 'completed'
        ],
        [
            'title' => 'Task Management App',
            'description' => 'A collaborative task management application with real-time updates, file sharing, and team collaboration features.',
            'tags' => 'Vue.js, Express, Socket.io, PostgreSQL',
            'link' => 'https://taskapp.example.com',
            'github_link' => 'https://github.com/johndoe/task-manager',
            'image' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            'status' => 'completed'
        ],
        [
            'title' => 'Weather Dashboard',
            'description' => 'A responsive weather dashboard showing current conditions, forecasts, and weather maps with location-based services.',
            'tags' => 'JavaScript, Chart.js, OpenWeather API',
            'link' => 'https://weather.example.com',
            'github_link' => 'https://github.com/johndoe/weather-dashboard',
            'image' => 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
            'status' => 'completed'
        ]
    ]
];

// Mock WordPress functions for demo
if (!function_exists('esc_html')) {
    function esc_html($text) { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }
}
if (!function_exists('esc_attr')) {
    function esc_attr($text) { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }
}
if (!function_exists('esc_url')) {
    function esc_url($url) { return htmlspecialchars($url, ENT_QUOTES, 'UTF-8'); }
}
if (!function_exists('wp_kses')) {
    function wp_kses($string, $allowed_html) { return strip_tags($string, '<' . implode('><', array_keys($allowed_html)) . '>'); }
}

// Include the special tag function
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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo esc_html($portfolio_data['name']); ?> - Portfolio Demo</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* Demo-specific styles */
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .demo-banner {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 1rem;
            font-weight: 500;
        }
        
        .demo-banner a {
            color: white;
            text-decoration: underline;
        }
        
        /* Include the same styles from index.php */
        :root {
            --primary-color: #1f2937;
            --secondary-color: #6b7280;
            --accent-color: #3b82f6;
            --background-color: #ffffff;
            --card-bg: #f9fafb;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .portfolio-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .section-padding {
            padding: 4rem 0;
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
        
        .animate-on-scroll {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Demo Banner -->
    <div class="demo-banner">
        🚀 <strong>kmfoysal06-php Portfolio Demo</strong> - 
        <a href="https://github.com/kmfoysal06/charming-portfolio" target="_blank">View on GitHub</a> | 
        This is a preview of the PHP implementation
    </div>
    
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
    
    <!-- Demo Scripts -->
    <script>
        // Simplified intersection observer for demo
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
        
        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.animate-on-scroll');
            sections.forEach(section => observer.observe(section));
            
            // Demo-specific: Add some dynamic content loading
            setTimeout(() => {
                console.log('kmfoysal06-php Portfolio Demo loaded successfully!');
            }, 1000);
        });
        
        // Copy to clipboard function
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
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
        
        // Smooth scrolling
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
</body>
</html>