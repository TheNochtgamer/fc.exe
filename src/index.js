const os = require('os');
const fs = require('fs');
const cmd = require('node-cmd');
const colors = require('colors');
const { setTimeout: delay } = require('node:timers/promises');

const config = require('./config.json');
const tmpPath = os.tmpdir();
const folder = tmpPath + '/' + config.folderName;

if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
} else {
    fs.rmSync(folder, { 'recursive': true });
    setTimeout(_ => fs.mkdirSync(folder), 1000);
}

let msgParts = config.mensaje
    .replace('/', '')
    .replace('\\', '')
    .replace('<', '')
    .replace('>', '')
    .replace(':', '')
    .replace('"', '')
    .replace('*', '')
    .replace('?', '')
    .replace('|', '')
    .split(' ')
    .map(word => {
        return word.replace(/%space%/gi, ' ');
    });
let mensaje = config.mensaje
    .replace(/%space%/gi, ' ');

(async () => {
    await delay(1000);
    console.log(`Hey you`.green);
    await delay(1800);
    console.log(`\nI'm gonna hack your pc`.green);
    await delay(2400);
    console.log(`\nIn 3...`.green);
    await delay(1000);
    console.log(`In 2...`.green);
    await delay(1000);
    console.log(`In 1...`.green);
    await delay(1000);
    cmd.runSync(`start "" "${folder}"`);
    await delay(1600);
    for (let index = 0; index < msgParts.length; index++) {
        let word = msgParts[index];
        fs.writeFileSync(folder + `/${word}`, '');
        // console.log(word, (300 * word.length / 1000)+ 's')
        if ((index + 1) !== msgParts.length)
            await delay(450 * word.length);//(word.length < 4 ? 4 : word.length));
    }
    await delay(2000);
    console.log('\n' + mensaje);
    fs.writeFileSync(folder + `/mensaje.txt`, mensaje);
    await delay(1500);
    cmd.runSync(`start "" "${config.link}"`);
    await delay(30000);
})();