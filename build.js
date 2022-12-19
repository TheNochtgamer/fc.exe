const exe = require('@angablue/exe');
const fs = require('fs');
const config = require('./build-config.json');

const outFolder = './bin';

if (!fs.existsSync(outFolder)) {
    fs.mkdirSync(outFolder);
}

const build = exe({
    entry: './src/index.js',
    out: `./bin/${config.filename}`,
    // pkg: ['--no-bytecode'],
    version: config.ver,
    target: config.target,
    // icon: './src/icon.ico',
    icon: (config.iconfile ? `./src/${config.iconfile}` : null),
    properties: {
        FileDescription: config.filedesc,
        ProductName: (config.productname ? config.productname : config.filename),
        LegalCopyright: config.copyright,
        OriginalFilename: config.filename
    }
});

build.then(() => console.log('Build completed!'));