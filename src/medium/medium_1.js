import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum  = 0;
    for (let i=0; i<array.length; i++) {
        sum += array[i]
    }
    return sum
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let mid = Math.floor(array.length / 2);
    let nums = [...array].sort((a,b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */

export function getStatistics(array) {
    let len = array.length;
    let sum = getSum(array);
    let avg = sum / len;
    let med = getMedian(array);
    let min = array.sort()[0];
    let max = array.sort()[array.length-1];
    let vari = variance(array, avg);
    let std_dev = Math.sqrt(vari);
    //return { length: len, sum: s, mean: avg, median: med, min: mi, max: ma, variance = vari, standard_deviation: std_dev}
    return `{  length: ${len},  sum: ${sum},  mean: ${avg},  median: ${med},  min: ${min},  max: ${max},  variance = ${vari},  standard_deviation: ${std_dev}}`
}

