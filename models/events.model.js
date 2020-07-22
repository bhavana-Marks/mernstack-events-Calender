const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Events = new Schema({
    start: {type: Date},
    end: {type: Date},
    name: {type: String}
});
module.exports = mongoose.model('events', Events);