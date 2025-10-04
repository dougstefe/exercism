// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const timeByJuice = {
  'Pure Strawberry Joy': 30,
  'Energizer': 90,
  'Green Garden': 90,
  'Tropical Island': 180,
  'All or Nothing': 300,
  'Others': 150
}

const wedgesBySize = {
  'small': 6,
  'medium': 8,
  'large': 10
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const time = timeByJuice[name]
  return (time ?? timeByJuice['Others']) / 60
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0
  let limesCount = 0
  while (wedges < wedgesNeeded && limesCount < limes.length)
  {
    const lime = limes[limesCount]
    wedges += wedgesBySize[lime]
    limesCount++
  }
  return limesCount
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  console.log(timeLeft, orders)
  let remainingSeconds = timeLeft * 60
  let index = 0
  while (remainingSeconds > 0 && index < orders.length)
  {
    const order = orders[index]
    remainingSeconds -= timeToMixJuice(order) * 60
    index++
  }
  return orders.slice(index)
}
