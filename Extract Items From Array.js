//Copy an existing array by value
let b = Array.from(a)
let b = Array.of(...a)

//Copy just some values from an existing array
let b = Array.from(a, x => x % 2 == 0)

//Copy portions of an array into the array itself, in other positions
let a = [1, 2, 3, 4]
a.copyWithin(0, 2) // [3, 4, 3, 4]
let b = [1, 2, 3, 4, 5]
b.copyWithin(0, 2) // [3, 4, 5, 4, 5]
//0 is where to start copying into,
// 2 is where to start copying from
let c = [1, 2, 3, 4, 5]
c.copyWithin(0, 2, 4) // [3, 4, 3, 4, 5]
//4  is an end index

//You can expand an array, an object or a string using the spread operator ....
let a = [1, 2, 3]
//you can create a new array using:
let b = [...a, 4, 5, 6]
//You can also create a copy of an array using:
let c = [...a]

//The spread operator has some pretty useful applications. The most important one is the ability to use an
//array as function argument in a very simple way:
let f = (foo, bar) => {} //creating function called f, that accepts 2 parameters and returns an object?
let a = [1, 2]
f(...a) // calling function f, using spread operator to pass array 'a' as a function argument

