const num = 35;
const num1 = 33;
const str1 = 'test';
const str = '99';

console.log(typeof num.toString())
console.log(typeof num1.toString())

console.log(typeof +str1, +str1)
console.log(typeof +str, +str)

console.log(typeof Number(str1), Number(str1))
console.log(typeof Number(str), Number(str))

// console.log(typeof num+ +str)
// console.log(typeof num+ +str1)

// console.log(typeof Number(str))

if(typeof str === 'test'){
    console.log('99')
} else {console.log('not 99')}

if(typeof str1 === 'test'){
    console.log('99')
} else {console.log('not 99')}

if(typeof str == 'test'){
    console.log('99')
} else {console.log('not 99')}

if(typeof str1 == 'test'){       //aici ma asteptam la alt rezultat str1='test' respectiv rezultatul trebuia sa mearga pe IF, dar a mers pe else str1=='test';'test'=='test' este true!
    console.log('99')               
} else {console.log('not 99')}

if(typeof str1 !== 'test'){
    console.log('99')
} else {console.log('not 99')}

if(typeof num1 === 'test'){
    console.log('99')
} else {console.log(33)}

if(typeof num1 != 'test'){
    console.log('99')
} else {console.log(33)}

if(typeof num1 !== 'test'){
    console.log('99')
} else {console.log(33)}

if(typeof num >= 45){
    console.log('45')
} else {console.log('not 45')}

if(typeof num >= 30){
    console.log(30)
} else {console.log(num)}  //aici la fel num=35 respectiv 35>=30 true, de ce a mers pe variant else?

if(typeof num > 30){
    console.log(30)
} else {console.log(num)} //la fel 35>30 dar a mers pe varianta else

if(typeof num1 >= num){
    console.log(str1)
} else if (num > num1){
    console.log(num1)
}

if(typeof num1 >= num){
    console.log(str1)
} else if (num < num1){
    console.log(str)} else if (num !== num1){console.log(str)}

const condition1 = false;
const condition2 = true;
const condition3 = true;

if( condition1 || condition2){
    console.log('name')
}

if(str === str1 || str !== str1){
    console.log('name')
}

const ternary = num === str1 ? 99: num +str1 ? 99 : 'test';
    
console.log(ternary)
