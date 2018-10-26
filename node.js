var cv = require('opencv');


// (B)lue, (G)reen, (R)ed

//var lower_threshold = [220, 220, 220];

// skin 103 113 155
// flow 165 143 220
// gray 161 170 167

var lower_threshold = [79, 103, 149];
var upper_threshold = [146,159 ,195];


/*var lower_threshold = [46, 57, 83];

var upper_threshold = [80, 96, 115];
*/

cv.readImage('/home/malab/test/test4.png', function(err, im) {
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');


im.inRange(lower_threshold, upper_threshold);

im.save('/home/malab/test/after4.jpg');

console.log('Image saved to /home/malab/test/after4.jpg');
});

