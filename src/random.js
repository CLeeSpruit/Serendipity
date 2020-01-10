/**
 * Shorthand method for Math.random. If no params are used, will generate a number from 0-1.
 *
 * @param {number} [max] - Max range, exclusive. Must be positive unless a lower min is defined.
 *     - Ex: random(5) - will generate integers 0-4
 * @param {number} [min] - Minimum range, inclusive.
 *     - Ex: random(5, 1) - will generate integers 1-4
 * @param {boolean} [useFractions] - will not round down
 * @export
 */
export function random(max, min, useFractions) {
	const rand = Math.random();
	const hasMax = !isNaN(max);
	const hasMin = !isNaN(min);
	max = hasMax ? (useFractions ? Math.floor(max) : max) : max;
	min = hasMin ? (useFractions ? Math.floor(min) : min) : 0;
	let finalRand = rand;
	if (hasMax) {
		if (max >= min) {
			finalRand = (rand * (max - min)) + min;
		} else {
			throw new Error('Random: Max must be greater than min.');
		}
	}

	return useFractions ? finalRand : Math.floor(finalRand);
}
