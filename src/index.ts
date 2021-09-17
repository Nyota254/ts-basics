//tsc --watch ....watches changes

//Basic Types

let id:number = 5
let company:string = 'Marketing Dynamics'
let isRegisterd: boolean = false
let x:any = 'Hello'
//Initialize
let age:number
age = 0

//Arrays
let ids:number[] = [1,2,3,4,5]
let arr:any[] = [1,true,'hi']

//tuple
let person: [number,string,boolean] = [1,'kevin',true]

//Tuple array
let employee:[number,string][]

employee = [
    [1,'kevin'],
    [2,'bill'],
    [3,'zack'],
]

//union => can hold more types
let pid:string | number
pid = '34'

//Enums => named constants
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

//Objects

const user:{
    id:number,
    name:string
} = {
    id:1,
    name: 'kevin'
}

//cleaner method to the above code => using type
type User = {
    id:number
    name:string
}

const user2:User = {
    id:2,
    name:'kevin2'
}

//Type Assertion treat entity as other type
let cid: any = 1
//method 1
let customerId = <number>cid

//method 2
let customerId2 = cid as number


//Functions
function addNum(x: number,y: number): number{
    return x + y 
}

console.log(addNum(1,2))

//void returning nothing
function log(message:string | number) : void {
    console.log(message)
}

//Interfaces => specific type for object
interface UserInterface {
    readonly id:number
    name:string
    age?:number //Optional property
}

const user3:UserInterface = {
    id:1,
    name:'kevin3',
}
 //cant use interface with unions or primitives but type can be used

 interface MathFunc {
     (x:number , y:number):number
 }

 const add:MathFunc = (x:number,y:number) : number => x + y

//Class interface we use implements
interface PersonInterface {
    id:number
    name:string
    register():string
}

 //Classes
 class Person implements PersonInterface {
     id: number // can be privatised e.g private id : id  // can also be protected id : id  protected from classes also extending the class
     name:string

     constructor(id:number,name:string){
        this.id = id,
        this.name = name      
     }

     register() {
         return `${this.name} is now registerd`
     }
 }

 const kevin = new Person(1,'Kevin marker')

 console.log(kevin.register())

 //Subclass
 class Employee extends Person {
     position:string

     constructor(id:number,name:string,position:string){
        super(id,name)
        this.position = position
     }
 }

 const emp = new Employee(3,'Mark','Developer')

 console.log(emp.name)

 //Generics ==> Reusable components with any type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
