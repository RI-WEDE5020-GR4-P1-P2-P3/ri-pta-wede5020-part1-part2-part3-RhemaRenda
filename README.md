# Savanna Flame Kitchen

## Student and assessment information

- Student: Rhema Muthurwana
- Student number: ST10527385
- Module: Web Development (Introduction)
- Module code: WEDE5020
- Submission: Part 2 - Designing the Visuals: CSS Styling and Responsive Design
- Approved concept: Proposal 1, Savanna Flame Kitchen

## Project overview

Savanna Flame Kitchen is a fictional independent restaurant proposed for Thohoyandou. It combines traditional South African meals with popular fast food, plans to operate 24 hours a day, and supports dine-in, collection and delivery enquiries. Its intended customers include students, workers, families, senior citizens and visitors.

## Goals and measurable objectives

1. Make the menu, service options, opening hours and contact information easy to find within two clicks from any page.
2. Present traditional meals, fast-food choices, student specials and senior-citizen discounts in clearly separated sections.
3. Give customers accessible forms for menu, collection, delivery, catering and general enquiries.
4. Maintain consistent branding and navigation across five semantic HTML pages.
5. Adapt without horizontal page scrolling at desktop (1440px), tablet (768px) and mobile (390px) widths.

## Features and current scope

- Five linked semantic HTML pages: Home, About, Menu, Enquiry and Contact.
- External CSS shared by every page.
- Responsive Grid and Flexbox layouts.
- Clear typography, relative spacing and responsive navigation.
- `picture`, `srcset` and `sizes` for the hero image.
- Hover, keyboard-focus, form-focus, checked-menu and active-page states for interactive elements.
- Menu/service enquiry form and separate general contact form.
- Original AI-assisted food photographs and three responsive hero image sizes.

JavaScript validation, live form responses, email processing, maps, galleries, search and deployment belong to Part 3.

## File structure

```text
Savanna-Flame-Kitchen-Part2/
|-- index.html
|-- about.html
|-- menu.html
|-- enquiry.html
|-- contact.html
|-- README.md
|-- sitemap.md
|-- SUBMISSION-CHECKLIST.md
|-- css/
|   `-- style.css
|-- images/
|   |-- venda-food-hero-640.jpg
|   |-- venda-food-hero-1024.jpg
|   |-- venda-food-hero-1440.jpg
|   |-- pap-beef-stew.jpg
|   |-- grilled-chicken-chips.jpg
|   |-- student-special.jpg
|   `-- senior-discount.jpg
|-- screenshots/
|   `-- README.md
`-- documents/
    |-- Website_Project_Proposals.docx
    |-- content-research.md
    `-- source-register.md
```

## Design choices

- **Black (`#0C0C0C`):** used as the main background for a simple evening takeaway identity.
- **Dark brown (`#7A3517`):** used for navigation highlights and buttons.
- **Gold (`#F2B544`):** used for borders, links and focus indicators.
- **Typography:** Arial and Helvetica are used throughout to keep the design simple and readable.
- **Branding:** the restaurant name is plain HTML text; no image logo is used.

## Responsive behaviour

| View | Width | Main adjustments |
|---|---:|---|
| Desktop | Above 800px | Horizontal navigation and two-column content grids |
| Tablet | 601-800px | Stacked header, adjusted headings and flexible media sections |
| Mobile | Up to 600px | Hamburger navigation, single-column content, smaller typography and full-width buttons |

Spacing and type use simple pixel and `rem` values, while the main layout uses percentages and two beginner-friendly media queries. The organisation name is plain HTML text rather than an image logo. On mobile screens, a three-line hamburger icon opens and closes the navigation menu using an HTML checkbox and CSS.

## Responsive test evidence

Open browser developer tools and save genuine screenshots in `screenshots/`:

| Evidence file | Test viewport |
|---|---:|
| `desktop-1440.png` | 1440px wide |
| `tablet-768.png` | 768px wide |
| `mobile-390.png` | 390px wide |

At each size, check navigation, text readability, image scaling, card columns, forms and horizontal overflow.

## Part 1 feedback and response

Part 1 result: **60/100**.

| Lecturer feedback | Part 2 response |
|---|---|
| Continue with approved Proposal 1 | Rebuilt the website for Savanna Flame Kitchen and removed the unapproved FreshBasket implementation. |
| Goals/objectives, analysis, features, aesthetic, technical requirements, timeline and budget needed detail | Added measurable objectives, detailed scope, design system, breakpoints and testing information to project documentation. |
| Wireframes needed more detail | Kept the approved proposal document and implemented clearer page sections matching the planned five-page structure. |
| Sitemap scored 2/5 | Replaced it with a detailed hierarchy, page purpose, content and navigation-flow table. |
| Code comments scored 2/5 | Added specific comments explaining major semantic sections, responsive images, forms and shared layout regions. |
| Changelog scored 0/5 | Added dated, detailed Part 1 and Part 2 development records below. |
| References scored 2/5 | Expanded and formatted the source register and README reference list. |
| Overall feedback raised excessive AI use | Recorded AI assistance honestly and added a student review checklist. The student must understand, test and disclose assisted work. |

## Changelog

### 18 September 2026 - Customer savings portraits

- Replaced the student and senior discount icon illustration with two original portrait images.
- Added a responsive two-card savings section that becomes one column on mobile screens.
- Kept the discount information short and easy to understand.

### 18 September 2026 - Local food photography and reference-inspired layout

- Added original AI-assisted photographs of pap, beef stew, morogo, chakalaka, grilled chicken, slap chips and bread.
- Exported the hero photograph at 640px, 1024px and 1440px for responsive loading.
- Changed the home hero to a dark photographic banner with readable overlay text.
- Added bordered food cards and text links inspired by the supplied layout references without copying their branding or content.
- Expanded the footer with restaurant information, quick links and project information.
- Kept the restaurant name as plain HTML text and retained the CSS-only mobile hamburger menu.

### 18 September 2026 - Simplified design and updated responsive navigation

- Removed the image logo and replaced it with the restaurant name in plain HTML text.
- Simplified the desktop design by removing large presentation-style panels, rounded corners and shadows.
- Changed the page to a basic Arial typeface, normal heading sizes and simple bordered content sections.
- Added a CSS-only hamburger menu to all five pages for mobile screens.
- Added clearer hover, keyboard-focus, form-focus and checked-menu states.
- Improved tablet and mobile typography adjustments to match the updated Part 2 rubric.
- Rechecked all five HTML pages and confirmed that the local navigation and asset paths are valid.

### 15 September 2026 - Part 2 correction after graded feedback

- Reviewed all 16 pages of the graded Part 1 rubric and recorded the 60/100 result.
- Confirmed that Proposal 1, Savanna Flame Kitchen, was the approved organisation.
- Replaced the FreshBasket direction with the approved Savanna concept.
- Updated Home, About, Menu, Enquiry and Contact content for Thohoyandou.
- Added 24/7 service, traditional and fast-food categories, collection/delivery, student specials and senior discounts.
- Added detailed explanatory HTML comments after feedback on insufficient comments.
- Rebuilt the sitemap and expanded the changelog and references.

### 15 September 2026 - Part 2 responsive design

- Created `css/style.css` and linked it on all five pages.
- Added a consistent reset, CSS variables, base typography and spacing.
- Implemented the terracotta, charcoal, cream, herb-green and gold palette.
- Used Flexbox for the header/navigation and Grid for page layouts, cards and forms.
- Added hover, focus-visible, active-page and reduced-motion rules.
- Added tablet and mobile media queries at 64rem and 40rem.
- Added responsive hero markup and 640px, 1024px and 1440px image files.
- Added a browser-testing procedure for desktop, tablet and mobile evidence.

### 14 August 2026 - Part 1 foundation

- Created the original project proposal, research, sitemap and five-page HTML foundation.
- Added semantic landmarks, shared navigation, forms, local assets and documentation.
- Created multiple descriptive Git commits and pushed the work to GitHub Classroom.

## References

Mozilla (2025a) 'CSS grid layout', *MDN Web Docs*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 15 September 2026).

Mozilla (2025b) 'Responsive images', *MDN Web Docs*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 15 September 2026).

Mozilla (2025c) 'Using media queries', *MDN Web Docs*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 15 September 2026).

Mozilla (2026) 'Semantic HTML', *MDN Web Docs*. Available at: https://developer.mozilla.org/en-US/curriculum/core/semantic-html/ (Accessed: 14 August 2026).

W3C (2024) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 14 August 2026).

OpenAI (2026) *ChatGPT* [Large language model]. Available at: https://chatgpt.com/ (Accessed: 15 September 2026).

## AI-use declaration

The student supplied the central Savanna Flame Kitchen decisions: Thohoyandou, traditional and fast-food meals, 24-hour operation, collection and delivery, student specials and senior-citizen discounts. ChatGPT assisted with organising content, responsive HTML/CSS scaffolding, generating original food and customer photographs, documentation and checks. The student remains responsible for reviewing and understanding the work, making their own final decisions, capturing genuine test evidence and following the institution's AI-disclosure requirements.

## Student review checklist

Before submission, the student must open and understand every HTML/CSS file, test all five pages and both forms, capture the three responsive screenshots, explain the main CSS rules, and include the required AI evidence or acknowledgement.
