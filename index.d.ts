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
export function random(max?: number, min?: number, useFractions?: boolean) : number;