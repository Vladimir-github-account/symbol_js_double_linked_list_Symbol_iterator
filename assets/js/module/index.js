"use strict";
/*
const firstSymbol2 = Symbol("first");
const secondSymbol2 = Symbol("first");

export default {
    [firstSymbol2]:"Symbol property value",
    [secondSymbol2]:"Second symbol property value",
    name:"Name",
    surname: "Surname",
    age: 23,
};*/


const key = Symbol.for("id");


const obj = {
    [Symbol.for("id")]: "232123123",
};



