"use strict";
//tsc --watch ....watches changes
//Basic Types
let id = 5;
let company = 'Marketing Dynamics';
let isRegisterd = false;
let x = 'Hello';
//Initialize
let age;
age = 0;
//Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hi'];
//tuple
let person = [1, 'kevin', true];
//Tuple array
let employee;
employee = [
    [1, 'kevin'],
    [2, 'bill'],
    [3, 'zack'],
];
//union => can hold more types
let pid;
pid = '34';
//Enums => named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//Objects
const user = {
    id: 1,
    name: 'kevin'
};
const user2 = {
    id: 2,
    name: 'kevin2'
};
//Type Assertion treat entity as other type
let cid = 1;
//method 1
let customerId = cid;
//method 2
let customerId2 = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//void returning nothing
function log(message) {
    console.log(message);
}
const user3 = {
    id: 1,
    name: 'kevin3',
};
const add = (x, y) => x + y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registerd`;
    }
}
const kevin = new Person(1, 'Kevin marker');
console.log(kevin.register());
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Mark', 'Developer');
console.log(emp.name);
//Generics ==> Reusable components with any type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
