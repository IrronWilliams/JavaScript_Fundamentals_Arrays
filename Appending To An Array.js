//To append a single item at the end of an array, use the push() method provided by the Array object. push() mutates the original array.
let fruits = ['banana', 'pear', 'apple']
fruits.push('mango')

//To create a new array instead, use the concat() Array method:
let fruits = ['banana', 'pear', 'apple']
let allfruits = fruits.concat('mango')

//concat() does not actually add an item to the array, but creates a new array, which you can assign to another variable
//or reassign to the original array (declaring it as let, as you cannot reassign a let):
let fruits = ['banana', 'pear', 'apple']
fruits = fruits.concat('mango')

//can add at the beginning of an array using the unshift() method:
let fruits = ['banana', 'pear', 'apple']
fruits.unshift('orange')
fruits //[ 'orange', 'banana', 'pear', 'apple' ]

//To append a multiple item to an array, you can use push() by calling it with multiple arguments:
let fruits = ['banana', 'pear', 'apple']
fruits.push('mango', 'melon', 'avocado')

//You can also use the concat() method, passing a list of items separated by a comma:
let fruits = ['banana', 'pear', 'apple']
let allfruits = fruits.concat('mango', 'melon', 'avocado')

//Can also use an array:
let fruits = ['banana', 'pear', 'apple']
let allfruits = fruits.concat(['mango', 'melon', 'avocado'])
