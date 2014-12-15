var streamArray = require("stream-array");
var WritableCounter = require('./index.js');
var data = ["foo", "bar", "fizz", "baz"];

var counter = WritableCounter();

streamArray(data)
.pipe(counter)
.on('finish', function() {
  console.log(counter.count); // logs 4 to the console
});
