//There are 2 methods that mutate the original array, and return the element that was removed: pop() and shift().

//remove an item from the end of an array:
let fruits = ['banana', 'pear', 'apple']
fruits.pop() //apple
fruits //[ 'banana', 'pear' ]

//remove from the beginning of an array:
let fruits = ['banana', 'pear', 'apple']
fruits.shift() //banana
fruits //[ 'pear', 'apple' ]

//To remove elements at a random position in the middle of the array, you can use splice() 
//(not to be confused with slice()).  Splice also mutates the original array. 
a.splice(0, 2) // get the first 2 items
a.splice(3, 2) // get the  2 items starting from index 3


//All the method that follow do not mutate the original array, and instead create a new one.

/* To remove an item if you know its index:

   Suppose you have an array, and you want to remove an item in position i.
   One method is to use slice().  slice() creates a new array with the indexes it receives. 
   Create a new array, from start to the index we want to remove, and concatenate another 
   array from the first position following the one removed to the end of the array.
 */

//using slice to remove item from array
let items = ['a', 'b', 'c', 'd', 'e', 'f']
let i = 3
let filteredItems = items.slice(0, i-1).concat(items.slice(i, items.length))
// ["a", "b", "d", "e", "f"]

//To remove an item when you know its value.  filter() is a good option, which offers a more declarative approach:
//Approach uses the ES6 arrow functions.
let items = ['a', 'b', 'c', 'd', 'e', 'f']
let valueToRemove = 'c'
let filteredItems = items.filter(item => item !== valueToRemove)
// ["a", "b", "d", "e", "f"]

//Traditional approach 
let items = ['a', 'b', 'c', 'd', 'e', 'f']
let valueToRemove = 'c'
let filteredItems = items.filter(function(item) {
  return item !== valueToRemove
})
// ["a", "b", "d", "e", "f"]

//To remove ALL items from an array, you can set its length to zero.
let list = ['a', 'b', 'c']
list.length = 0

//Another method changes the original array reference, assigning an empty array to the original variable.
let list = ['a', 'b', 'c']
list = []

//To remove MULTIPLE items by index, create a function and remove items in series.
let items = ['a', 'b', 'c', 'd', 'e', 'f']

let removeItem = (items, i) =>
  items.slice(0, i-1).concat(items.slice(i, items.length))

let filteredItems = removeItem(items, 3)
filteredItems = removeItem(filteredItems, 5)
//["a", "b", "d", "e"]

//To remove MULTIPLE items by value, can search for inclusion inside the callback function
let items = ['a', 'b', 'c', 'd', 'e', 'f']
let valuesToRemove = ['c', 'd']
let filteredItems = items.filter(item => !valuesToRemove.includes(item))
// ["a", "b", "e", "f"]































