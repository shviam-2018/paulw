# Raccoon Press - Portfolio Website

Welcome to the private repository for **Raccoon Press**, the portfolio website for children's book author **Paul Wennersberg-Løvholen**. This website showcases Paul's books, services, and his journey as an author. The site is designed to be responsive and provides a platform for readers and potential collaborators to learn more about his work.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Features](#features)
- [Development Guidelines](#development-guidelines)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

---

## Project Overview

This project serves as a portfolio and informational website for Paul Wennersberg-Løvholen, the author behind *Super Farty Pants* and other children’s books. It contains several pages including:

- **Home Page**: Introduction and links to featured books.
- **Books**: List of published works with descriptions.
- **About Me**: Biography of the author.
- **Video**: A section to share media (videos).
- **For Authors**: Information and services provided by Paul for fellow authors (editing, formatting, publishing).
- **Contact Me**: Contact form to reach out.

---

## Directory Structure

root
│   index.html               # Main homepage file
│   books.html               # Books listing page
│   about-me.html            # About the author
│   video.html               # Video media page
│   forAuthors.html          # Services for authors
│   contact.html             # Contact form page
│   README.md                # Project README file
│
├───CSS
│   │   style.css            # Main CSS file
│   │   about-me.css         # Styles for About Me page
│   └─── ...                 # Other page-specific stylesheets
│
├───assets
│   └─── ...                 # Images, fonts, and media assets
│
├───scripts
│   └─── script.js           # JavaScript for the navbar and interactivity

---

## Technologies Used

- **HTML5**: Structured content and semantic layout.
- **CSS3**: Styling with custom fonts and media queries for responsiveness.
- **JavaScript**: Added interactivity, particularly for the hamburger menu.
- **Custom Fonts**: Integrated with `@font-face` to use the JMH Typewriter fonts.

---

## Setup and Installation

To run the website locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. **Open in your browser**:
    Simply open any `.html` file (e.g., `index.html`) in a modern browser (Chrome, Firefox, etc.).

3. **Live Server (optional)**:
    If you're using VSCode, you can use the "Live Server" extension for live reloading.

---

## Features

- **Responsive Design**: The website is mobile-friendly, with a responsive navigation bar (hamburger menu on smaller screens).
- **Custom Fonts**: JMH Typewriter fonts are used to give the site a unique look.
- **Interactive Navbar**: A hamburger menu is available for easy navigation on mobile devices.
- **Content Sections**: 
    - **About Me**: Introduces Paul Wennersberg-Løvholen.
    - **Books**: Displays a list of books, their cover images, and descriptions.
    - **Video**: A section dedicated to embedding video content.
    - **For Authors**: Provides information about the services Paul offers to fellow authors.
    - **Contact**: A contact form for inquiries.
  
---

## Development Guidelines

- **Naming Conventions**: 
    - HTML and CSS files are named based on the page they represent (e.g., `about-me.html`, `about-me.css`).
    - Use kebab-case for file names and CSS classes.
  
- **CSS Structure**: Each major page has its own CSS file. Any shared styles should go in `style.css`. Keep specificity low where possible.

- **JavaScript**: Currently, a simple script is used to toggle the mobile navigation menu. Any additional scripts should be placed in the `scripts` folder.

- **Responsive Design**: Media queries are used for screen sizes below `768px`. All major components should remain functional and visually appealing on mobile devices.

---

## Future Enhancements

- **SEO Optimization**: Add meta tags, alt text for images, and proper heading structures for better SEO.
- **Blog Section**: Adding a blog page for regular updates and news.
- **CMS Integration**: Consider integrating a simple CMS for easier content management (e.g., Netlify CMS).
- **Newsletter Signup**: Implement an email signup form.
- **Accessibility**: Improve ARIA attributes and contrast for better accessibility.

---

## Contact

For any questions or issues related to this repository, please contact:

- **Author**: Paul Wennersberg-Løvholen
- **Email**: contact@raccoonpress.com

---

## Notes for Future Developers

- Keep the code modular and well-organized.
- Any major changes should be documented in this README under the relevant sections.
- Test on different screen sizes before pushing changes.

---
