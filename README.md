# Stick that footer!

[![npm version](https://badge.fury.io/js/fix-footer.svg)](https://badge.fury.io/js/fix-footer)

Sticks the footer to the bottom of the screen, only when the page is smaller than the viewport on medium to large screen sizes.

## Demo

[http://fix-footer.themekit.io](http://fix-footer.themekit.io)

## Installation

```bash
npm install fix-footer dom-factory
```
> Load the libraries and add the `.fix-js-footer` CSS class to your footer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="node_modules/fix-footer/dist/fix-footer.css">
</head>
<body>
  <footer class="fix-js-footer">
    Copyright &copy; 2016 - Sample footer
  </footer>

  <script src="node_modules/dom-factory/dist/dom-factory.js"></script>
  <script src="node_modules/fix-footer/dist/fix-footer.js" async defer></script>
</body>
</html>
```