# FXSTREET Frontend Test

This repository contains the frontend test for FXStreet. The test involves implementing a prototype as specified in the provided Figma designs for both desktop and mobile.

## Prototypes

Figma prototypes can be found [here](https://www.figma.com/design/YBSLd3pKqEIKDYMMmvggfm/Frontend-test?node-id=0-1&t=pRrC4pxjAIGWQkrY-0).

## Acceptance Tests

1. **Public URL Navigation**: As a user, I can navigate to a public URL where I see the elements as in the prototype.
2. **GitHub Repository Review**: As a reviewer, I have a GitHub repository where I can check the code.
3. **Basic Structure**: As a user, I can see the basic structure without any interactions: Header, Left Menu, and Right Column.
4. **Navigation Between Sections**: As a user, I can navigate between "Latest" and "Popular" sections.
5. **Dropdown Interaction**: As a user, I can interact with the top-right Show drop-down, but it has no effect.
6. **Content Visibility**: As a user, I can see 2 pieces of content in "Latest" and 1 piece of content in "Popular".
7. **Post Type and Subtype**: As a user, I can see the type of piece of post and the subtype.
8. **Publication Time**: As a user, I can see the publication time in the top-right corner of every chip.
9. **Author Information**: As a user, I can see the author's picture, title, and company.
10. **Post Title**: As a user, I can see the title of the post.
11. **Post Content**: As a user, I can see the content of the post.
12. **Post Image**: As a user, I can see the image of the post.
13. **Like and Save Buttons**: As a user, I can see the Like and Save buttons with an animation (no effect on JS).
14. **Dropdown Interaction**: As a user, I can interact with the three dots and a dropdown as shown in the prototype.
15. **Mobile Interaction**: As a user, I can interact in the same way on my mobile device.

## Technical Tips

1. **Mocked API**: You can get the data from the [Mocked API](https://fxsfrontend.fxstreet.workers.dev/).
2. **Popular Post**: The property `isPopular` is set to true for popular posts.
3. **Post Order**: Order the list of posts as shown in the prototype.

## Installation

To set up the project locally, follow these steps:

1. Install the dependencies:

   ```sh
   npm install

   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment

[Go to the website](https://crisktina.github.io/FXSTREET/)
