/*

*/

function trace(msg, value) {
	console.log(`${msg}, value ${value}, ${value.toString(2)}`);
}

let v15 = 0b00001111;
let a15 = 0b0000000010101010;
//          1234567890123456

let v48 = 0b00110000;
let a48 = 0b0000010100000000;
//          1234567890123456

let actual = 0b0000010110101010;
trace("actual ", actual);

let a15_48 = a15 | a48;
trace("a15_48 ", a15_48);
if (a15_48 !== actual) {
	console.error("ERROR; a15_48 ", a15_48, " should be ", actual);
}
