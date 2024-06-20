import {writeFile} from 'node:fs';

writeFile('./hello.html', '<h1>Learning Node.js</h>', () => {
    console.log('File was created');
});