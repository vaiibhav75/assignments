const data = "File write testing";

const reader = require('fs');

reader.writeFile('03File.txt', data, (err) => {})