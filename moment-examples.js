var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf());

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);

//console.log(timestampMoment.format());
	
//now.subtract(1, 'y');

// console.log(now.format());
console.log(timestampMoment.format('h:mm a')); // Sep 14th 2016, 3:45pm