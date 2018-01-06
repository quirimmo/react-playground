// /* dom.js */
// var JSDOM = require('jsdom').JSDOM;
// var exposedProperties = ['window', 'navigator', 'document'];

// global.document = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = document.parentWindow;


// // console.log(document);

// // Object.keys(document.defaultView).forEach((property) => {
// //   if (typeof global[property] === 'undefined') {
// //     exposedProperties.push(property);
// //     global[property] = global.document.defaultView[property];
// //   }
// // });

// // global.navigator = {
// //   userAgent: 'node.js'
// // };

// // const JSDOM = require('jsdom').JSDOM;

// // global.document = new JSDOM('<!doctype html><html><body></body></html>');
// // global.window = document.parentWindow;