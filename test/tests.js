import '../utils.js';
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('createCountString returns a formatted string', (expect) => {
    const expected = `You have changed the Building 2 times, the Mayor 3 times, and the Pest 4 times.`;

    const actual = createCountString(2, 3, 4);

    expect.equal(actual, expected);
});
