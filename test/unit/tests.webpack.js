// Main entry point of all the tests
let testsContext = require.context('./../../src', true, /\.spec\.jsx$/);
testsContext.keys().forEach(testsContext);