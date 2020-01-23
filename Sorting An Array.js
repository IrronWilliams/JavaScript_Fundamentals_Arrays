//Sort alphabetically (by ASCII value - 0-9A-Za-z)
let a = [1, 2, 3, 10, 11]
a.sort() //1, 10, 11, 2, 3

let b = [1, 'a', 'Z', 3, 2, 11]
b = b.sort() //1, 11, 2, 3, Z, a

//Sort by a custom function
let a = [1, 10, 3, 2, 11]
a.sort((a, b) => a - b) //1, 2, 3, 10, 11

//Reverse the sort order of an array
a.reverse()
