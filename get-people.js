/**
 * Returns the fetched list of people with incremented ID's
 * @param {Array} listOfPeople 
 */

const getPeople = (listOfPeople) => {
  safeArray = listOfPeople || []

  safeArray.map((person, key) => {
    person.id = key
  }) 
  return safeArray
}

/**
 * Take an array of objects and just return each name
 * @param {Array} arr 
 */
const justNames = function (arr) {
  safeArray = arr || []
  return getPeople(safeArray).map((p) => p.name)
}

/**
 * Search an array for a name, by giving the persons age.
 * @param {Array} arr 
 * @param {Number} ageGiven 
 */
const findByAge = function (arr, ageGiven) {
	return getPeople(arr).filter((person) => person.age == ageGiven)
}

module.exports = { getPeople, justNames, findByAge }