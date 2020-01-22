//An array is a collection of elements. Arrays in JavaScript are not a type on their own. Arrays are objects.

//Can initialize an empty array in these 2 different ways:
let a = []  //array literal syntax
let a = Array()  //array built-in function

//Can pre-fill the array using this syntax:
let a = [1, 2, 3]
let a = Array.of(1, 2, 3)

//An array can hold any value, even value of different types:
let a = [1, 'Test', ['a', 'b']]

//Since we can add an array into an array, we can create multi-dimensional arrays, which have very useful 
//applications (e.g. a matrix):
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  matrix[0][0] //1
  matrix[2][0] //7
  
//You can access any element of the array by referencing its index, which starts from zero:
  a[0] //1
  a[1] //2
  a[2] //3

//You can initialize a new array with a set of values using this syntax, which first initializes an array 
//of 12 elements, and fills each element with the 0 number:
Array(12).fill(0)

//You can get the number of elements in the array by checking its length property:
const a = [1, 2, 3]
a.length //3

//You can set the length of the array. If you assign a bigger number than the arrays current capacity, 
//nothing happens. If you assign a smaller number, the array is cut at that position:
const a = [1, 2, 3]
a //[ 1, 2, 3 ]
a.length = 2
a //[ 1, 2 ]

//Internally, arrays are objects. Running typeof on an array tell you object:
typeof [] //object

//You can check if an object is an array by checking its constructor property:
[].constructor === Array //true

//while a regular object will have
{}.constructor === Object //true

