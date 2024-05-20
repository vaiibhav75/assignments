const reader = require('fs');

reader.readFile('03File.txt', 'utf8',(err, data) => console.log(data))