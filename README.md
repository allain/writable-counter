# writable-counter

Creates writable streams that do nothing but count the number of times data has been passed to them.

## Installing

``` bash
npm install --save writable-counter
```

## Usage

```javascript
var streamArray = require("stream-array");
var WritableCounter = require('writable-counter');
var data = ["foo", "bar", "fizz", "baz"];

var counter = WritableCounter();

streamArray(data)
  .pipe(counter)  
  .on('finish', function() {
    console.log(counter.count); // logs 4 to the console
  });
```
