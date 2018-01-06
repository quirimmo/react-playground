describe('a passing test', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });
});

// var React = require('react');
// // var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
// // var TestUtils = require('react-addons-test-utils'); //I like using the Test Utils, but you can just use the DOM API instead.

// // var expect = require('expect');
// // var Root = require('./'); //my root-test lives in components/__tests__/, so this is how I require in my components.

// import { expect } from 'chai';

// describe('root', function () {
//     it('renders without problems', function () {
//         // var root = TestUtils.renderIntoDocument( < Root / > );
//         // expect(root).toExist();
//         expect(4).to.be.eql(4);
//     });
// });