"use strict";
function removeSpace() {
    const fs = require('fs');
    const file = 'content.txt';
    let str = '';
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            let darr = data.split(' ');
            let narr = [];
            for (let i of darr) {
                if (i == '') {
                    continue;
                }
                else {
                    narr.push(i);
                }
            }
            str = narr.join(' ');
            console.log(str);
        }
        fs.writeFileSync('newcontent.txt', str, 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('File Updated');
            }
        });
    });
    console.log(str);
}
removeSpace();
