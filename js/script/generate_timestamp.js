#!/usr/bin/env node
const TimeObj = require("../util/time/time_obj.js");
const time_obj = new TimeObj();
const fs = require('fs');

const dir = './build';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const result = JSON.stringify(time_obj.toJSON());
fs.writeFileSync('./build/timestamp.json', result);
