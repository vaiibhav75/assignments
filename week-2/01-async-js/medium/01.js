const reader = require('fs');
let s = "";
reader.readFile('03File.txt', 'utf8',(err, data) => {
    s = data;
    s = s.replace(/\s+/g, ' ');

    reader.writeFile('03File.txt', s, (err) => {});
});

