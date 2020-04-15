
# West Elm Mock Website

LIVE AT: [https://williams-sonoma-app.web.app/](https://williams-sonoma-app.web.app/)

![](https://raw.githubusercontent.com/christineurban/williams-sonoma/master/src/images/demo.gif)

## Functionality
- Clicking on an product image will overlay with a carousel of the product's images, and clicking
on it again will bring back the original product image
- Clicking on the launch button in the bottom right corner of each tile will launch the live product page on West Elm in
a new tab
- Resizing the page will adjust the number of columns displayed

## Tech Stack
**JavaScript:** React, Material UI, Sass, JSS, JSX, Jest, Enzyme


## Setup/Installation

To have this app running on your local computer, please follow the below steps:

Clone repository into your folder of choice:
```
$ git clone https://github.com/christineurban/williams-sonoma.git
```
Navigate to the project folder:
```
$ cd williams-sonoma
```

Install dependencies:
```
$ npm i
```
Start the project and it will automatically open `http://localhost:3000/` in your browser
```
$ npm start
```

Run tests:
```
$ npm run test
```
## Instructions

Using the JSON file provided below, given an input of products, design a page that:
- Consumes the JSON of products
- Builds the product details page with all products
- Displays the product details, including price, product name and the main hero image
- Interacts intuitively; if you click on the image, you should see an overlay with a carousal of all thumbnail images

JSON URL: [https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json](https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json)

**Guidelines**
- Use any view framework of your choice
- As much as possible, stick to vanilla JavaScript for DOM handling (queries, events, etc.)
- Spend your time in design and implementation. We are not looking for the quickest solution.
- Detail your build system and tests in README.md– how do we run the tests and run the project?
- Showcase your ES6 skills and your UX/UI chops.

**Bonus**
- Responsive experience – 1 column on mobile to 3 columns on desktop
- Accessibility and SEO

## License

Copyright &copy; 2020 Christine Urban

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
