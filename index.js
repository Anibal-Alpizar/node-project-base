let userName = 'Max'
let age = 30
let hasHobbies = false
let point = [10, 20, 30]
let user = {
    name: 'Max',
    lastName: 'Mustermann',
}
const PI = 3.1415

console.log(userName)
console.log(age)
console.log(hasHobbies)
console.log(point)
console.log(user)
console.log(PI)

const names = ['joe', 'jane', 'jim']

for(let i = 0; i< names.length; i++){
    console.log(names[i])
}
const showUserInfo = (userName, userAge) => `Name is ${userName}, the user age is ${userAge} `;

console.log(showUserInfo("joe", 30));
console.log(showUserInfo("maria", 40));
