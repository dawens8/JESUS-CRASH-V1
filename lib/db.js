const fs = require('fs');
const path = './lib/antiLeft.json';

let data = {};

if (fs.existsSync(path)) {
  data = JSON.parse(fs.readFileSync(path));
}

function setAntiLeft(groupId, value) {
  data[groupId] = value;
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function getAntiLeft(groupId) {
  return data[groupId] || false;
}

module.exports = { setAntiLeft, getAntiLeft };
