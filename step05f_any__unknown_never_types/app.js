"use strict";
// Any
let myval;
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK
//Unknown
let value;
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK
// Assigning a value of type unknown to variables of other types
let val;
const val1 = val; // OK
const val2 = val; // OK
const val3 = val; // Will throw error
const val4 = val; // Will throw error
const val5 = val; // Will throw error
const val6 = val; // Will throw error
const val7 = val; // Will throw error
const val8 = val; // Will throw error
// Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
