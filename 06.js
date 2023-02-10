/*
Refactor Global Variables Out of Functions
So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
Waiting:add(bookList, "A Brief History of Time") should return ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
Waiting:remove(bookList, "On The Electrodynamics of Moving Bodies") should return ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
Waiting:remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"); should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
Hints
Hint 1
If you’re having trouble with changing bookList, try using a copy of the array in your functions.
Hint 2
Here’s some more information about how JavaScript handles function arguments 7.6k. (https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)




*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    newArr.push(bookName); // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
  }
 /* This function should remove a book from the list and return the list
  // New parameters should come before the bookName one
  
  // Add your code below this line
*/
  function remove(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
      // Check whether the bookName parameter is in new array.
      newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
      return newArr; // Return the new array.
    }
  }

  var newBookList = add(bookList, 'A Brief History of Time');

  var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
  var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
 
  console.log(bookList);
  console.log(newBookList);
  console.log(newerBookList);
  console.log(newestBookList);
  console.log(bookList);

/*
Code Explanation

 */
/*
console results

[ 'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae' ]
[ 'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
  'A Brief History of Time' ]
[ 'The Hound of the Baskervilles',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae' ]
[ 'The Hound of the Baskervilles',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
  'A Brief History of Time' ]
[ 'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae' ]

*/