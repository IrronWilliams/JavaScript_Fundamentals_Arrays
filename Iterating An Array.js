/* Can use many different ways to iterate an array:
    
    For 
    ForEach
    For..of
    Every
    Some  
*/

//Iterates a, can be stopped using return or break and an iteration can be skipped using continue
for (let i = 0; i < a.length; i += 1) {
    //a[i]
  }
  

//a.forEach(f). Iterates f on a without a way to stop 
  a.forEach(v => {
    console.log(v)
  })


//for..of
for (let v of a) {
    console.log(v)
  }

//Every iterates a until f() returns false
a.every(f)

//Some iterates a until f() returns true
a.some(f)
