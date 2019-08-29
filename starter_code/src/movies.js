/* eslint no-restricted-globals: 'off' */

/*{
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
},*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  return (
    Math.round(
      (array.reduce((accu, element) => {
        return accu + parseFloat(element.rate);
      }, 0) /
        array.length) *
        100
    ) / 100
  );
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  return (
    Math.round(
      array
        .filter(element => {
          let result = element.genre.indexOf("Drama");
          if (result === -1) {
            return false;
          }
          return true;
        })
        .reduce((accu, element, index, currentArray) => {
          if (element.rate === "") {
            if (index + 1 === currentArray.length) {
              return accu / currentArray.length;
            } else return accu;
          }
          if (index + 1 === currentArray.length) {
            return (accu + parseFloat(element.rate)) / currentArray.length;
          } else return accu + parseFloat(element.rate);
        }, 0) * 100
    ) / 100
  );
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(array) {
  let newArray = array;
  newArray = turnHoursToMinutes(newArray);

  array.sort((a, b) =>
    a.duration === b.duration
      ? a.title.localeCompare(b.title)
      : a.duration - b.duration
  );
  return array;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array, searchValue) {}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  let newArray = Array.from(array);
  newArray = array.map(element => {
    if (isNaN(element.duration)) {
      let hPosition = element.duration.indexOf("h");
      let minPosition = element.duration.indexOf("m");
      let hValue = parseInt(element.duration.substring(0, hPosition) * 60);
      let minValue = 0;
      if (minPosition === -1) {
        minValue = parseInt(
          element.duration.substring(
            element.duration.indexOf("h") + 1,
            element.duration.length
          )
        );
      } else {
        minValue = parseInt(
          element.duration.substring(
            element.duration.indexOf("h") + 1,
            element.duration.length - 3
          )
        );
      }
      element.duration = hValue + minValue;
    }
  });
  return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
