let greeting = "hello world";
console.log(greeting);

// var are variable that can be reassigned, function scope

// let and const are block scope


function printName(){
    var name = "Rayan";
    let nameLocal = "Vector"
    const age = 26
    console.log(name)
    console.log(nameLocal)
}


printName()


const person = {
    name: 'Bill',
    gender: 'male'
};
console.log(person)


const integers = [1,2,3];
const updatedIntegers = integers.map(function(number){
    return number+=1
})

console.log(integers)
console.log(updatedIntegers)

const updatedString = integers.map((number)=>number+ '-bob')
console.log(updatedString)


const ages = [11,21,31,41,51]
let adults = ages.filter(function(age){
    return age>20
})

adults = ages.filter((age) => age>30)
console.log(adults)


const format = require('string-format');

console.log(format("Function Mode, require, {0}}","const format = require('string-format');"));


format.extend(String.prototype, {})
console.log("Method mode,require: {0}".format("format.extend(String.prototype, {})"));



function Person(name,age){
    this.name = name;
    this.age = age 
}


// this is ES5 style
Person.prototype.speak = function(){
    console.log("Hi my name is {}".format(this.name));
}
const bill = new Person('Bill',50)
bill.speak();


class Pet{
    constructor(name,age,children){
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak(){
        console.log("My name is {}".format(this.name));
    }

    birth(child){
        this.children.push(child);
        return this.children
    }
}

const david = new Pet('david',5,[]);
console.log(david);
david.speak()
david.birth('jess')
console.log(david.children)

// spread operator 

const names = ['John','Bill','Sum']
const moreNames = ['William', 'Paul', 'Mike']

console.log(...names)

// ES5 way
// let allNames = []
// allNames=allNames.concat(names)
// allNames.push('Gio')
// allNames = allNames.concat(moreNames)
// console.log(allNames)

// ES6 way
const allNames = [...names,'Gio',...moreNames]
console.log(allNames)
