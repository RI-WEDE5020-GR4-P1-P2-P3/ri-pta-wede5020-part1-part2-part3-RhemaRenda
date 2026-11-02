# Savanna Flame Kitchen

## Student and assessment information

- Student: Rhema Muthurwana
- Student number: ST10527385
- Module: Web Development (Introduction)
- Module code: WEDE5020
- Submission: Part 3 - Enhancing Functionality and SEO
- Approved concept: Proposal 1, Savanna Flame Kitchen

## Project overview

Savanna Flame Kitchen is an independent restaurant in Thohoyandou. It combines traditional South African meals with popular fast food, operates 24 hours a day, and supports dine-in, collection and delivery orders. Its intended customers include students, workers, families, senior citizens and visitors.

## Goals and measurable objectives

1. Make the menu, service options, opening hours and contact information easy to find within two clicks from any page.
2. Present traditional meals, fast-food choices, student specials and senior-citizen discounts in clearly separated sections.
3. Give customers accessible forms for menu, collection, delivery, catering and general enquiries.
4. Maintain consistent branding and navigation across five semantic HTML pages.
5. Adapt without horizontal page scrolling at desktop (1440px), tablet (768px) and mobile (390px) widths.

## Part 3 features

- Six linked semantic HTML pages: Home, About, Menu, Enquiry, Contact and Cart.
- External CSS shared by every page.
- Responsive Grid and Flexbox layouts.
- Clear typography, relative spacing and responsive navigation.
- `picture`, `srcset` and `sizes` for the hero image.
- Hover, keyboard-focus, form-focus, checked-menu and active-page states for interactive elements.
- JavaScript-generated menu products with category filtering and live search.
- Add-to-cart, quantity editing, item removal and checkout using local storage.
- Responsive product gallery with a JavaScript lightbox.
- Interactive OpenStreetMap on the contact page.
- HTML and JavaScript validation with clear form responses.
- SEO title tags, descriptions, keywords, descriptive image text, `robots.txt` and `sitemap.xml`.
- Original AI-assisted food photographs and three responsive hero image sizes.

## File structure

```text
Savanna-Flame-Kitchen-Part2/
|-- index.html
|-- about.html
|-- menu.html
|-- enquiry.html
|-- contact.html
|-- cart.html
|-- README.md
|-- sitemap.md
|-- sitemap.xml
|-- robots.txt
|-- css/
|   `-- style.css
|-- js/
|   |-- app.js
|   `-- cart.js
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

## Part 3 testing

| Feature | Test completed |
|---|---|
| Menu search and category filter | Product cards update without reloading the page |
| Product lightbox | Clicking a food image opens a larger view and the close button works |
| Cart | Items can be added, removed and changed in quantity; total updates correctly |
| Checkout | Required fields are checked and an order confirmation number is displayed |
| Enquiry form | Invalid details show feedback and valid details are submitted asynchronously |
| Contact form | Required fields are checked and a correctly addressed email is prepared |
| Map | Thohoyandou map can be moved and zoomed |
| Responsive navigation | Hamburger menu works at 390px and desktop menu works at 1440px |

## Deployment

The project is prepared for GitHub Pages. After pushing the final Part 3 files, enable Pages from the `main` branch and test every page at the published URL. Replace the URL in `robots.txt` and `sitemap.xml` only if the published address differs from the repository address used in those files.

## Feedback and response

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
| Overall feedback raised excessive AI use | Simplified the design, removed the image logo and removed the unnecessary submission checklist. |

### Part 2 feedback addressed in Part 3

| Lecturer feedback | Part 3 response |
|---|---|
| Add cart and checkout features to create a complete online store | Added a working JavaScript cart, quantities, removal, totals and validated checkout form. |
| Submission checklist was unnecessary | Removed the submission checklist from the Part 3 project. |
| Reference list appeared divided into too many AI-generated entries | Replaced it with a short list of distinct sources actually used for JavaScript, validation, SEO and the map. |
| Improve README, changelog and GitHub evidence | Updated all Part 3 features and recorded detailed changes below. |

## Changelog

### 2 November 2026 - Part 3 functionality and SEO

- Added `js/app.js` with a beginner-friendly product array, dynamic product cards, search, category filtering, cart storage, lightbox controls and form validation.
- Added `js/cart.js` and `cart.html` with cart totals, quantity changes, item removal and a validated checkout form.
- Added immediate, readable validation feedback to the enquiry and contact forms.
- Added an interactive OpenStreetMap to the contact page.
- Added unique page titles, meta descriptions, keywords and descriptive image alternative text.
- Added `robots.txt` and `sitemap.xml` for search-engine crawling.
- Removed wording that described the restaurant as fictional or proposed.
- Removed the unnecessary submission checklist from the Part 3 package.
- Retained the simple dark design and responsive hamburger menu from Part 2.

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

Google (2026) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Mozilla (2026) *JavaScript Guide*. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide (Accessed: 2 November 2026).

Mozilla (2026) *Client-side form validation*. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 2 November 2026).

OpenStreetMap contributors (2026) *OpenStreetMap export and embedding*. Available at: https://wiki.openstreetmap.org/wiki/Export (Accessed: 2 November 2026).

## AI-use declaration

The student supplied the central Savanna Flame Kitchen decisions: Thohoyandou, traditional and fast-food meals, 24-hour operation, collection and delivery, student specials and senior-citizen discounts. ChatGPT assisted with organising content, responsive HTML/CSS scaffolding, generating original food and customer photographs, documentation and checks. The student remains responsible for reviewing and understanding the work, making their own final decisions, capturing genuine test evidence and following the institution's AI-disclosure requirements.

