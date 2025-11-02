// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const string1 = String(array1).replace(/,/g,'') 
  console.log(string1)
  const string2 = String(array2).replace(/,/g,'') 
  console.log(string2)
  return Number(string1) + Number(string2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringValue = String(value)
  const length = stringValue.length
  let halfIndex = length / 2
  if (length % 2 != 0)
    halfIndex += 1
  else
    halfIndex -= 1
  let i = 0, j = length - 1
  for(; i <= halfIndex && j >= halfIndex; i++, j--)
  {
    if (stringValue[i] != stringValue[j])
      return false
  }
  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input)
    return 'Required field'
  const numberValue = Number(input)
  if (!numberValue)
    return 'Must be a number besides 0'
  return ''
}
