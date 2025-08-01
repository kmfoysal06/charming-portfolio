<?php
/**
 * Charming V2 Theme Index File
 * @package Charming Portfolio
 */
if(!defined("ABSPATH")) {
    exit;
}
// var_dump($args);
// die;
$site_icon = get_site_icon_url();
$site_title = get_bloginfo('name');
?>
<link rel="stylesheet" href="https://kmfoysal06.github.io/css-practice/baler-portfolio/header.css" type="text/css" media="all" />
<link rel="stylesheet" href="https://kmfoysal06.github.io/css-practice/baler-portfolio/style.css" type="text/css" media="all" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<header class="charming-portfolio-header charming-portfolio-container" role="banner">
    <?php if($site_icon): ?>
    <img src="<?php echo esc_url( $site_icon ); ?>" class="site-icon" alt="site logo" width="auto" height="50px" />
    <?php else: ?>
        <h3><?php echo esc_html( $site_title ); ?></h3>
    <?php endif; ?>
    <ul class="header-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="github.com" class="header-icon">
        <i class="fa-brands fa-github"></i>
    </a>
    <div class="menu-icons">
        <i class="fa-solid fa-bars menu-toggle"></i>
    </div>

</header>
<main role="main">
    <div class="charming-portfolio-container charming-portfolio-hero-section">
        <div class="hero-text hero__inner">
            <h2>Hello, I am <span class="highlight"><?php echo esc_html($args['name']) ?></span></h2>
            <p class="short-description"><?php echo esc_html($args['description']) ?></p>
            <ul class="charming-portfolio-social-links">
                <li><a href="facebook"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="twitter"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="linkedin"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="instagram"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="github"><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
        <div class="hero-image hero__inner">
            <img src="<?php echo esc_url($args['user_image']); ?>" alt="<?php echo esc_attr($args['name']) ?>" width="400px" height="auto" />
        </div>
    </div>
    <div class="charming-portfolio-container charming-portfolio-skills-section">
        <div class="section-header">
            <h2 class="badge">Skills</h2>
            <p>The skills, tools and technologies I am really good at:</p>


        </div>
        <div class="section-content">
            <?php foreach($args['skills'] as $skill): ?>
                <div class="single-skill">
                    <img src="<?php echo esc_url($skill['image']); ?>" width="100px"
                        height="100px" alt="<?php echo esc_attr($skill['name']); ?>" />
                    <h3><?php echo esc_html($skill['name']); ?></h3>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="charming-portfolio-container charming-portfolio-projects-section">
        <div class="section-header">
            <h2 class="badge">Projects</h2>
            <p>Some of the noteworthy projects I have built:</p>
        </div>
        <div class="section-content">
            <div class="single-project">
                <img src="https://ps.w.org/charming-portfolio/assets/screenshot-9.png?rev=3138395" width="300px"
                    height="auto" alt="Project 1" />
                <div class="project-details">
                    <h3>Charming Portfolio</h3>
                    <p>Charming Portfolio is a simple plugin that updates the frontpage as a portfolio landing page with user provided information. This plugin is very easy to use and user friendly..</p>
                    <small>#wordpress #html #css</small>
                </div>
            </div>
            <div class="single-project">
                <img src="https://ps.w.org/charming-portfolio/assets/screenshot-9.png?rev=3138395" width="300px"
                    height="auto" alt="Project 1" />
                <div class="project-details">
                    <h3>Open Directory</h3>
                    <p>Open Directory is a WordPress Plugin That Will Allow You To Have a Directory of Anything Hosted on Any WordPress Site</p>
                    <small>#wordpress #html #css</small>
                </div>
            </div>
            <div class="single-project">
                <img src="https://ps.w.org/charming-portfolio/assets/screenshot-9.png?rev=3138395" width="300px"
                    height="auto" alt="Project 1" />
                <div class="project-details">
                    <h3>SimpleCharm</h3>
                    <p>SimpleCharm is a clean and minimalist WordPress theme designed for those who appreciate simplicity and elegance in their online presence. With its uncluttered layout and understated design, SimpleCharm lets your content take center stage without distraction.</p>
                    <small>#wordpress #html #css</small>
                </div>

            </div>

        </div>

    </div>


    <div class="charming-portfolio-container charming-portfolio-experience-section">
        <div class="section-header">
            <h2 class="badge">Experience</h2>
            <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div class="section-content">
            <div class="single-experience" tabindex="0">
                <img src="https://webermelon.com/wp-content/uploads/2022/09/Group-171.png" width="300px"
                    height="auto" alt="Project 1" />
                <div class="experience-details">
                    <div class="primary-details">
                        <h3>Webermelon</h3>
                        <p class="timerange">Oct 2024 - Present</p>
                    </div>
                    <p class="designation">WordPress Developer</p>
                    <p>Webermelon is a company.</p>
                    <small>#php #js #wordpress #html #css</small>
                </div>
            </div>

        </div>

    </div>



    <div class="charming-portfolio-container charming-portfolio-contact-section">
        <div class="section-header">
            <h2 class="badge">Contact Me</h2>
            <p>Want to know something else? Let me know:</p>
        </div>
        <div class="section-content">
            <div class="contact-header">
                <div class="name">
                    <h3><?php echo esc_html($args['name']) ?></h3>
                    <p>WordPress Developer</p>
                </div>
                <div class="contact-info">
                    <p>Phone: <span>+880 1234567890</span></p>
                    <p>Email: <span>info@kmfoysal06.com</span></p>
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

</main>
<footer role="contentinfo" class="charming-portfolio-footer">
    <div class="charming-portfolio-container charming-portfolio-footer-inner">
        <div class="footer-section footer-owner-data">
            <div class="contactinfo">
                <h3><?php echo esc_html($args['name']) ?></h3>
                <p>Web Developer</p>
                <p>Anowara, Chittagong, Bangladesh</p>
                <p>info@kmfoysal06.com</p>
            </div>
            <div class="footer-search">
                <div class="search-and-profile">
                    <div class="search">
                        <form role="search" method="get" id="searchform"
                            class="searchform charming-portfolio-search" action="/">
                            <div>
                                <label class="screen-reader-text" for="s">Search for Blogs:</label>
                                <input type="text" placeholder="Search" value="" name="s" id="s">
                                <button type="submit" class="submit charming-portfolio-header-search"
                                    aria-label="Search">
                                    <span class="dashicons dashicons-search"><span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-socials">
                <ul class="charming-portfolio-social-links">
                    <li><a href="facebook"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="twitter"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="linkedin"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="instagram"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="github"><i class="fa-brands fa-github"></i></a></li>
                </ul>

            </div>
        </div>
        <div class="footer-section footer-section-menus">
            <div class="footer-subsection">
                <h3>Latest Blogs:</h3>
                <ul>
                    <li> <a href="">PHP PSR</a> </li>
                    <li> <a href="">Learn PHP Laravel</a> </li>
                    <li> <a href="">SimpleReveal</a> </li>
                    <li> <a href="">FullCalendar</a> </li>
                </ul>
            </div>
            <div class="footer-subsection">
                <h3>External Links:</h3>
                <ul>
                    <li> <a href="" target="_blank">My Portfolio <i class="fa fa-external-link"
                                aria-hidden="true"></i>
                        </a> </li>
                    <li> <a href="" target="_blank">Github <i class="fa fa-external-link" aria-hidden="true"></i>
                        </a> </li>
                    <li> <a href="" target="_blank">Blockblog Theme <i class="fa fa-external-link"
                                aria-hidden="true"></i>
                        </a> </li>
                    <li> <a href="" target="_blank">Charming Portfolio <i class="fa fa-external-link"
                                aria-hidden="true"></i>
                        </a> </li>
                    <li> <a href="" target="_blank">WordPress <i class="fa fa-external-link" aria-hidden="true"></i>
                        </a> </li>
                </ul>
            </div>
        </div>

    </div>
    <div class="charming-portfolio-container copyright">
        <p> Copy RIght Bro Copy Right</p>
    </div>
</footer>
<script src="http://kmfoysal06.github.io/css-practice/baler-portfolio/nav.js"></script>