//You can join multiple arrays by using concat(), which does not mutate the original arrays:
let a = [1, 2]
let b = [3, 4]
a.concat(b) //[1,2,3,4]
a //[1,2]
b //[3,4]


//Can also use the spread operator:
let c = [...a, ...b]
c //[1,2,3,4]
