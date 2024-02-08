# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Github](https://github.com/mroungou/bmi-calculator)
- Live Site URL: [Live Site](https://mroungou.github.io/bmi-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JavaScript
- SASS

### What I learned

I learned a lot about using JS functions, how to create clean code and not repeat myself. I also learned the power of using grids! I tried to avoid using absolute positioning and CSS grids came to the rescue.

```
```
```
```
```js
function BMIClassification(BMI) {
    if (BMI < 18.5) {
        classification.innerText = 'underweight'
    } else if (BMI >= 25 && BMI < 30) {
        classification.innerText = 'overweight'
    } else if (BMI >= 30) {
        classification.innerText = 'obese'
    } else {
        classification.innerText = 'a healthy weight'
    }
}
```

### Continued development

I would like to rebuild this project in the future using React or Vue, or any other popular JS framework. Maybe add more fitness functionality.


### Useful resources

- [Customizing CSS radio buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - this helped me with customizing the CSS buttons as I had no idea where to start. I definetely need to look into this. As I am not sure I completely understand the process


## Author

- Twitter - [@mroungou](https://www.twitter.com/mroungou)
