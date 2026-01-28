const tinderUser=new Object();//create singleton object

tinderUser.id="123abc"
tinderUser.name="ABC"
tinderUser.LoggedIN=false

// console.log(tinderUser);

// const regularUser={
//     email:"a@gmail.com",
//     fullname:{
//         username:{
//             firstname:"h",
//             lastname:"s"
//         }
//     }
// }
// console.log(regularUser.fullname.username.firstname);

// const obj1={
//     1:"a", 2:"b"
// }
// const obj2={
//     3:"c", 4:"d"
// }
//                         //Target,Source
//                         //^
// //const obj =Object.assign({},obj1,obj2)
// //other method
// const obj={...obj1,...obj2}//spread opeator
// console.log(obj);


const users=[
    {
        id:1
        
    }
]
console.log(Object.keys(users));

const course={
    coursename:"js in hindi",
    price:"1",
    instructor:"a"
}
course.instructor