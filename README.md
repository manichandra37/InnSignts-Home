# Project Showcase Website

A modern, responsive single-page website to showcase your Matrix project to customers.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling navigation, mobile menu, and form validation
- **Professional**: Contact form, feature highlights, and company information sections

## Files Structure

```
project-showcase/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Local development**: Use a local server for best experience:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

## Customization

### Content Updates

- **Project Name**: Update "Matrix" throughout the HTML file
- **Description**: Modify the hero section text and about section
- **Features**: Edit the feature cards in the features section
- **Contact Info**: Update email, phone, and address in the contact section
- **Technology Stack**: Modify the tech tags in the about section

### Styling

- **Colors**: Update the CSS variables and color values in `styles.css`
- **Fonts**: Change the Google Fonts import in the HTML head
- **Layout**: Modify grid layouts and spacing in the CSS

### Images

Replace the placeholder image section with your actual project screenshots or mockups.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The website is ready to deploy to any static hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your repository to Vercel
- **AWS S3**: Upload files to an S3 bucket with static website hosting

## Contact Form

The contact form includes client-side validation and simulates form submission. To make it functional:

1. Replace the JavaScript form handling with your backend API
2. Add proper form submission to your server
3. Implement email sending functionality

## License

This template is free to use and modify for your projects.
