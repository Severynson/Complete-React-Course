// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string = 'Max';

let isInstructor: boolean;

isInstructor = true;

// let hobbies: null | number;

// hobbies = 12;

// More complex types:

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

// let person: {
//     name: string;
//     age: number;
//     // isEmployee: true;
// };

let person: Person;
person = {
    name: 'Max',
    age: 32,
}

let people: {
    name: string;
    age: number;
}[];

let course: string | number = "React - The Complete Guide";

course = 12345;

// Functions & types;

function adds(a: number, b: number) {
    return a + b;
};

function print(value: any) {
    console.log(value);
};

// Generics:

function insertAtBegginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1, 2, 3];

const updateArray = insertAtBegginning(demoArray, -1);