module.exports = WritableCounter;

var stream = require('stream');

function WritableCounter() {
  var countStream = new stream.Writable();
  countStream.count = 0;

  countStream._write = function (chunk, encoding, done) {
    countStream.count ++;
    done();
  };

  return countStream;
}
