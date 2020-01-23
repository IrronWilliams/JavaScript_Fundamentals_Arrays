/* To sort an array of objects by a property value. 
 
   Say you have an array of objects like this:

let list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

You want to render this list, but first you want to order it by the value of one of the properties. For example, 
you want to order it by the color name, in alphabetical order: black, red, white.

*/

let list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
  ]

/*
You can use the sort() method of Array, which takes a callback function, which takes as parameters 2 objects 
contained in the array (which we call a and b):

When we return 1, the function communicates to sort() that the object b takes precedence in sorting over the object 
a. Returning -1 would do the opposite.

The callback function could calculate other properties too, to handle the case where the color is the same, and 
order by a secondary property as well:
*/

list.sort((a, b) => (a.color > b.color) ? 1 : -1)

list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 ) //when color is same

/*
To get the unique properties of an array of objects. 

Given an array of objects, if you want to get the values of a property, but not duplicated.

Suppose you have a bills array with this content and you want to extract the unique values of the 
category attribute of each item in the array.

let bills = [
  { date: '2018-01-20', amount: '220', category: 'Electricity' },
  { date: '2018-01-20', amount: '20', category: 'Gas' },
  { date: '2018-02-20', amount: '120', category: 'Electricity' }
]

Set is a new data structure. It’s a collection of unique values. We put into that the list of property values we 
get from using map(), which how we used it will return this array:

*/


/* Set will return ['Electricity', 'Gas', 'Electricity']. Passing through Set will remove the duplicates.
... is the spread operator, which will expand the set values into an array. */
let categories = [...new Set(bills.map(bill => bill.category))]  
