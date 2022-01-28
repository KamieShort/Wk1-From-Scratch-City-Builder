/* eslint-disable indent */
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCountString } from '../utils';

const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;

//     //Act
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

test('createCountString returns a formatted string'),
    (expect) => {
        const expected = `You have changed the Building 2 times, the Mayor 3 times, and the Pest 4 times`;

        const actual = createCountString(2, 3, 4);

        expect.equal(actual, expected);
    };
