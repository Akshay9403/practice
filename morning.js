let students = [

    {
        fullname: 'alshay pardeshi',
        marks: 54,
        village: 'bhokardan',
        pincode: 431114,
    },
    {
        fullname: 'shruti lohar',
        marks: 60,
        village: 'mumbai',
        pincode: 404041,
    },
    {
        fullname: 'jyoti pardeshi',
        marks: 90,
        village: 'aurangabad',
        pincode: 505050,
    }
]
//console.log(students)
// //console.log(students[1]['fullname'])
// for(let key in students){
//     console.log(key,students[key])

// students.forEach(function(el,index){
//     console.log(el.fullname)
// })

// students.forEach(function(el){
//     console.log('${el.fullname}: ${el.pincode}')
// })

// students.forEach(function (el) {
//     el.country= 'india'
// })

// students.forEach(function (el) {
//     console.log(el)
// })

// students.forEach(function(el){
//     el.marks=el.marks+2
// })
// students.forEach(function(el){
//     console.log(el)
// // })

// students.forEach(function(el,index){
//     console.log(`Student info ${index+1}`)
//     console.log(el.fullname)
//     console.log(el.marks)
//     console.log(el.village)
//     console.log(el.pincode)
// })

// for(i=0;i<=10;i++){
//     console.log(i)
// }
// console.log('=====================')
// ia=0
// while(ia<11){
//     console.log(ia)
//     ia=ia+1
// }

// let i = 10
// if( i > 11){
//     console.log('i is greater than 10')
// }
// else
// console.log('hhahhaha')

// for (let i = 0; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(`is a even number ${i}`)

//     } 
//     else{
//         console.log(`is a odd number ${i}`)
//     }

// }

let fruits = ['mango', 'apple', 'banana', 'graphs']
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == 'banana') {
        console.log('fruits is awailable')
        continue

    }
    else {
        console.log('fruits not awailable')
    }
}