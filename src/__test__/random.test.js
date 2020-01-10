import test from 'ava';
import {random} from '../random';

test('should generate a number', t => {
	const actual = random();
	t.assert(actual >= 0 && actual < 1);
});

test('should generate a number with a max', t => {
	const max = 5;
	const actual = random(max);
	t.assert(actual >= 0 && actual < max);
});

test('should generate a number with a max of 0', t => {
	t.is(random(0), 0);
});

test('should bail if max is negative and no min is provided', t => {
	t.throws(() => random(-5));
});

test('should generate a number with a range', t => {
	const max = 5;
	const min = 1;
	const actual = random(max, min);
	t.assert(actual >= min && actual < max);
});

test('should generate a number with a negative range', t => {
	const max = -5;
	const min = -10;
	const actual = random(max, min);
	t.assert(actual >= min && actual < max);
});

test('should generate a number as an integer', t => {
	const max = 5;
	const actual = random(max, 0, false);

	t.assert(actual >= 0 && actual < max);
	t.assert(actual - Math.floor(actual) === 0);
});

test('should generate a number with a fraction', t => {
	const max = 5;
	const actual = random(max, 0, true);

	t.assert(actual >= 0 && actual < max);
	t.assert(actual - Math.floor(actual));
});
