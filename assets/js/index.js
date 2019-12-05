"use strict";

/*
const firstSymbol = Symbol("first");
const secondSymbol = Symbol("first");

const str1 = String("first");
const str2 = String("second");

const test = {};

test[firstSymbol] = "Symbol property value";
test[secondSymbol] = "Second symbol property value";
test[str1] = "str1 value";
test[str2] = "str1 value";

console.log(test);

test[secondSymbol] = 123;

console.log(test);

const symbolProp = Symbol("test2Prop");

const test2 ={
  [symbolProp]: 2000, //обращаемся с помощью вычисляемого свойства
};

console.log(test2);

const test3 = {
    [firstSymbol]:"Symbol property value",
    [secondSymbol]:"Second symbol property value",
    name:"Name",
    surname: "Surname",
    age: 23,
};


console.group("for in");

for (let prop in test3){
    console.log(prop);
}

console.groupEnd();
*/

/*import test from 'module/index.js';

console.log(test);*/
// import obj from "./module/index.js"
z
class List{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next(){
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return{
                        value:value,
                        done: false,
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }

    add(value){

        const newItem = new ListItem(value);
        newItem.prev = this.tail;


        if(this.tail){
            this.tail.next = newItem;
        }

        if(!this.head){
            this.head = newItem;
        }
        this.tail = newItem;
        this.size++;
    }



    insert(){

    }

    delete(){

    }
}

class ListItem{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const list = new List();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

for (let item of list){
    console.log(item);
}