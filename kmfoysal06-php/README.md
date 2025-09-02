# kmfoysal06-php Portfolio Implementation

A comprehensive PHP-based portfolio rendering system for the Charming Portfolio WordPress plugin.

## Overview

This implementation provides a complete PHP alternative to the React components, offering server-side rendering with all the modern design elements and functionality.

## Features

### ✨ Complete Portfolio Sections
- **Header** - Fixed navigation with mobile menu
- **Hero** - Introduction with profile image and social links
- **About** - Personal information with stats and description
- **Skills** - Interactive skill cards with progress bars
- **Experience** - Timeline-based experience showcase
- **Projects** - Project gallery with tags and links
- **Contact** - Contact form and information
- **Footer** - Comprehensive footer with links and copyright

### 🎨 Design & UX
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Intersection Observer for scroll animations
- **Hover Effects** - Interactive hover states and transitions
- **Dark Mode Ready** - CSS custom properties for easy theming
- **Accessibility** - Semantic HTML and ARIA labels

### 🛠️ Technical Features
- **WordPress Integration** - Seamless integration with existing plugin data
- **Performance Optimized** - Minimal dependencies, optimized loading
- **SEO Friendly** - Semantic HTML structure
- **Cross-browser Compatible** - Modern CSS with fallbacks
- **Mobile Responsive** - Works perfectly on all device sizes

## File Structure

```
kmfoysal06-php/
├── index.php              # Main portfolio page
├── README.md              # This documentation
└── components/
    ├── header.php         # Navigation header
    ├── hero.php           # Hero/intro section
    ├── about.php          # About me section
    ├── skills.php         # Skills showcase
    ├── experience.php     # Work experience timeline
    ├── projects.php       # Projects gallery
    └── footer.php         # Contact & footer
```

## Integration

### Using as Template Override

To use this implementation instead of the default templates, you can:

1. **Option 1: Direct Integration**
   - Copy the `kmfoysal06-php` folder to your active theme
   - Include in your theme's `front-page.php`:
   ```php
   if (CHARMING_PORTFOLIO_enabled()) {
       include get_template_directory() . '/kmfoysal06-php/index.php';
       return;
   }
   ```

2. **Option 2: Plugin Integration**
   - Modify the plugin's template loader to include this implementation
   - Add a new layout option in the admin settings

3. **Option 3: Shortcode**
   - Create a shortcode that renders this template
   - Use `[kmfoysal06_portfolio]` anywhere on your site

### Data Structure

The implementation expects the following data structure from `$portfolio_data`:

```php
$portfolio_data = [
    'name' => 'Your Name',
    'email' => 'your@email.com',
    'phone' => '+1234567890',
    'address' => 'Your Location',
    'user_image' => 'path/to/image.jpg',
    'user_image2' => 'path/to/about-image.jpg',
    'short_description' => 'Brief intro text',
    'description' => 'Detailed about text',
    'available' => true,
    'social_links' => [
        [
            'name' => 'LinkedIn',
            'link' => 'https://linkedin.com/in/username',
            'icon' => 'fab fa-linkedin'
        ]
        // ... more social links
    ],
    'skills' => [
        [
            'name' => 'PHP',
            'image' => 'path/to/php-icon.png',
            'level' => 90
        ]
        // ... more skills
    ],
    'experiences' => [
        [
            'institution' => 'Company Name',
            'post-title' => 'Position Title',
            'start_date' => '2020-01-01',
            'end_date' => '2023-12-31',
            'working' => 'off',
            'responsibility' => 'Job description...'
        ]
        // ... more experiences
    ],
    'works' => [
        [
            'title' => 'Project Title',
            'description' => 'Project description...',
            'tags' => 'React, Node.js, MongoDB',
            'link' => 'https://project-demo.com',
            'github_link' => 'https://github.com/user/repo',
            'image' => 'path/to/project-image.jpg'
        ]
        // ... more projects
    ]
];
```

## Styling

### CSS Custom Properties

The implementation uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #1f2937;
    --secondary-color: #6b7280;
    --accent-color: #3b82f6;
    --background-color: #ffffff;
    --card-bg: #f9fafb;
}
```

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Animation Classes

- `.animate-on-scroll` - Elements that animate when scrolled into view
- `.fade-in` - Fade in animation
- `.hover-scale` - Scale on hover
- `.card-shadow` - Card shadow effect

## JavaScript Features

### Intersection Observer
- Smooth scroll animations
- Performance-optimized visibility detection
- Staggered animation delays

### Interactive Elements
- Mobile navigation toggle
- Copy to clipboard functionality
- Smooth scrolling navigation
- Back to top button
- Show more projects toggle

### Contact Form
- Client-side validation
- mailto: link generation
- Toast notifications

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- **Minimal Dependencies** - Only Tailwind CSS and Font Awesome
- **Optimized Images** - Responsive image loading
- **Efficient Animations** - CSS transitions and transforms
- **Lazy Loading** - Intersection Observer for performance

## Customization

### Adding New Sections

1. Create a new component in `/components/`
2. Include it in `index.php`
3. Add navigation link in `header.php`

### Modifying Styles

1. Update CSS custom properties for colors
2. Modify Tailwind classes for layout
3. Add custom CSS in the `<style>` section

### Extending Functionality

1. Add new data fields to the expected structure
2. Update components to display new data
3. Add corresponding JavaScript if needed

## Security

- All output is properly escaped with `esc_html()`, `esc_url()`, `esc_attr()`
- User input is sanitized with `wp_kses()`
- No direct database queries
- WordPress security best practices followed

## Credits

- **Design Inspiration**: Based on modern portfolio trends
- **Icons**: Font Awesome 6.0
- **Styling**: Tailwind CSS
- **Author**: kmfoysal06
- **License**: GPL v3

## Support

For support and questions, please refer to the main Charming Portfolio plugin documentation or create an issue in the repository.

---

*Made with ❤️ for the WordPress community*