


/*
const
    dog = {
        name: "wokrsheet",
        age: 4,
        eye: "Hite"
    }

const keys = Object.keys(dog);

console.log(keys);

let num = [1,2,3,4,5,6,7,8,9,10];

for ( const elemets of num) {
    console.log(elemets);
}


let a = {value: 20}

let b = a;

a.value = 100;

console.log(a);
console.log(b);
let a = 10;
let b = a;

a = 20;

console.log(a);
console.log(b);


const Programmer = new Function(
    'name',
    `
    this.name = 'John'
    `

);

function add(num1,num2){
    return num1+num2;
}


const person = {
    name: "John",
}

console.log(person.constructor);

let newObj={};
let newObj = new Object();

new String();
new Boolean();
new Number();
new Object();


person.food=12;

person['favouriteIceCream'] = 'choco';


delete person['favouriteIceCream'];

console.log(person);

person.eat = function() {
    console.log('eat');
}

person.eat();

function getDog(name, breed, age, weight) {
    return{
        name,
        breed,
        age,
        weight,
        eat(){
            console.log('champ')
        }
        ,
        bark(){
            console.log('Wiofof');
        }
    }
}

function Dog(name, breed, age, weight) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;

    this.eat = function() {
        console.log(this.name + 'chomp');
    }
    this.bark = function() {
        console.log(this.name + 'Woof');
    }
}

const anotherDog = new Dog('Marl', 'Lab', 2,49);

console.log(anotherDog);

const anotherOne = getDog('Mumu', 'chocolate Lab', 2,60);

console.log(anotherOne);
const
dog = {
    name: 'Max',
    breed: 'Breed',
    age: 5,
    weight: 12,
    eat:
        function () {
            console.log('wuwu');
        },
    bark() {
        console.log('Wiofof');
    }
}


cosnt
dog = {
    name: 'marly',
    breed: 'Breed',
    age: 5,
    weight: 12,
    eat:
        function () {
            console.log('wuwu');
        },
    bark() {
        console.log('Wiofof');
    }
}*/


/*

function maxNum(n1,n2){
    return n1 >= n2 ? n1 : n2;

}

console.log(maxNum(2,1));
for (let i=0; i < 40; i++) {
    if(i % 2 === 0) {
        continue;
    }

    console.log(i);
}

const obj = {a:1, b:2, c:3};

for (let key in obj) {
    if(key==='b'){
        break;
    }
    console.log(obj[key]);
}

const arr = [1, 2, 3, 4, 5];

for(let elemnt of arr){
    if (elemnt==3){
        console.log(elemnt);
    }
}
let n = [1,2,3,4,5,6,7,8,9];

for(let x  of n){
    console.log(x);
}
const course = {
    name: 'John Doe',
    duration: 3,
    sections: 7
}


for (const key in course) {
    console.log(course[key])
}


console.log(course.name)
console.log(course.duration)
console.log(course.sections)

while(true){
    console.log('tik tak');
    break;
}




let n = [1,2,3,4,5,6,7,8,9];

let i  =0;

do {
    console.log(i);
    i++;
    }while (i<10);


for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}

let i = 0;

while (i < n.length) {
    console.log('++' + n[i]);
    i++;

}

let n = [1,2,3,4,5,6,7,8,9];


for(let num = 0; num<100; num++){
    console.log(num);
}
for (let i = 0; i <n.length; i++){
    console.log(n[i]);
}

let idx = 0;
let len = n.length;

console.log(n[idx++]);

let a = 'a';

switch (a){
    case 'aa':
        console.log('aaa');
        break;
        case 'b':
            console.log('bbb');
            break;
            case 'a':
                console.log('ccccc');
                break;
                default:
                    console.log('end');
}

let h = 10;

if (h >= 6 && h <= 12) {
    console.log('break');
} else if (h >= 12 && h <=14) {
    console.log('no break');
} else {
    console.log('dinner');
}


let a = 1;
let b = 2;

const c = b >= a

if (c){
    console.log('123');
} else {
    console.log('999');
}

let a = 1;
let b = 2;

const c = b >= a

if (c){
    console.log('123');
} else {
    console.log('999');
}
let n = 5 + 5*4;
console.log(n);

let a = 'blue';
let b = 'green';

const c = a || b;

console.log(c);

let a = null;

const b = a ?? false;

console.log(b);

let a = true;

const b = !a;

console.log(b);

let a = true;
let b = true;
let c = true;
let d = true;


console.log(a && b || c && d);
console.log((a && b) || (c && d) || (c && d));

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

let points = 110;

const type = points > 100 ?'gold' : 'silver';

console.log(type);

let age = 16;

const drive  = age >= 16 ? true : false;

console.log(drive);

let a = 2;
let b = 3;

console.log(a === b);



let num1 = 5;
let num2 = 2;

const isNumGreater=num1>num2;

console.log(isNumGreater);


function multiply (num1, num2) {
    const product=  num1 * num2;
}

console.log(multiply(2,2));s

function sayHi(name) {
    console.log('hi! ' + name);
}

sayHi('steven');

let productColors = ['blue', 'green', 'red', 'blue', 'purple'];

productColors[0] = 242;

console.log(typeof productColors.length);

let course = {
    name: 'course',
    hours: 3
};

let property = 'hours';


console.log(course[property]);



let favouriteFruit  = 'strawberry' ;
let favouriteCream  = "chocolate";
let favourite  = `JavaScript`;

let numberOfDonuts = 12;
let pi = 3.14;

let veryLargeNumber = 5454542552356262n;

let lovesCoding = true;

let favouriteColor;


console.log(favouriteColor);

favouriteFruit = null;

const uniqueKey = Symbol();

let course = {
    name: "JavaScript",
    hours: 3
};

let firstName = 'John';
console.log(typeof firstName);

firstName = 100;
console.log(typeof firstName);

firstName = true;
console.log(typeof firstName);*/