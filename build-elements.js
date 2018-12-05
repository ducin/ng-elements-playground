const fs = require('fs-extra');
const concat = require('concat');

const projectName = 'ng-elements-playground';

(async function build() {
  const files = ['runtime', 'polyfills', 'scripts', 'main']
    .map(f => `./dist/${projectName}/${f}.js`)

  await fs.ensureDir('elements');
  await concat(files, `elements/${projectName}.js`);
  await fs.copy(`elements/${projectName}.js`, `demo/${projectName}.js`)
})();
