const id=Symbol('121')
const anotherId=Symbol('121')
//console.log(id === anotherId)
const heros=["a","b"]
console.log(typeof heros)

// +++++++++++++++++++
//  Stack(primitive), Heap(non primitive)
let userOne={
    email:"user@",
    upi:"user@ybl"

}
let usertwo=userOne

usertwo.email="my@"
console.log(userOne.email);
console.log(usertwo.email)

