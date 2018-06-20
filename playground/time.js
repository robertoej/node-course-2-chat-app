const moment = require('moment');

// Jan 1st 1970 00:00:00 UTC

// var date = new Date();
// console.log(date.getMonth());
var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));