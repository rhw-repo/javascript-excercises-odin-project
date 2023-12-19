/*Given an array of objects representing people with a birth and death year, return the oldest person.

Hints
You should return the whole person object, but the tests mostly just check to make sure the name is correct.
this can be done with a couple of chained array methods, or by using reduce.
One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.*/

// Pass the array 'people' to the function to use reduce() on it
function findTheOldest(people) {
    // 'Oldest' is accumulator, 'current' is current element from 'people' array 
    return people.reduce((oldest, current) => {
  
      // Handle cases of empty array to prevent reduce() throwing error
      if (!oldest) return current;
  
      // Returns full year of the current date & time from newDate() object 
      const currentYear = new Date().getFullYear();
      // subtract from accumulator to get the age for first person
      const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
      // repeat for the next person
      const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
      // Evaluate if current person is older than accumulator
      // If so, assign them as the accumulator 
      return currentAge > oldestAge ? current : oldest;
    }, null);
  }
  
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
  
  console.log(findTheOldest(people));
  
  // Do not edit below this line
  module.exports = findTheOldest;
  
  
  