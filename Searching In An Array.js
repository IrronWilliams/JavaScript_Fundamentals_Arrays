/* These 5 methods can help with searching for an item in the array.  includes() is most recent method

    indexOf() :     
    lastIndexOf()
    find()
    findIndex()
    includes()
*/

a.indexOf()        //Returns the index of the first matching item found, or -1 if not found
a.lastIndexOf()    //Returns the index of the last matching item found, or -1 if not found

//find() returns the first item that returns true. Returns undefined if not found.
a.find((element, index, array) => {
    //return true or false
  })

//A commonly used syntax is for find().  
a.find(x => x.id === my_id) //will return the first element in the array that has id === my_id.


//findIndex returns the index of the first item that returns true, and if not found, it returns undefined:
a.findIndex((element, index, array) => {
    //return true or false
  })

//includes() returns a true boolean value if the element is included in the array, or false otherwise:
  if (![1,2].includes(3)) {
    console.log('Not found')
  }
  
