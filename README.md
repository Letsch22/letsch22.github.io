# Portfolio

Build instructions ([documentation](https://fomantic-ui.com/introduction/getting-started.html)):

Install package dependencies:
```
npm install
```

Build CSS/JS:
```
cd semantic
npx gulp build
```

Copy CSS/JS to public folder:
```
cp dist/semantic.min.css ../public/css/semantic.min.css
cp dist/semantic.min.js ../public/js/semantic.min.js
cp dist/themes/portfolio/assets/fonts ../public/fonts
```