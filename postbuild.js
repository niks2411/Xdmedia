const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'build', 'static', 'css');

if (fs.existsSync(cssDir)) {
  const files = fs.readdirSync(cssDir);
  const mainCssFile = files.find(file => file.startsWith('main.') && file.endsWith('.css'));
  if (mainCssFile) {
    fs.copyFileSync(
      path.join(cssDir, mainCssFile),
      path.join(cssDir, 'main.css')
    );
    console.log(`Successfully copied ${mainCssFile} to main.css`);
  } else {
    console.log('No main.*.css file found.');
  }
} else {
  console.log('Build directory or CSS directory does not exist.');
}
