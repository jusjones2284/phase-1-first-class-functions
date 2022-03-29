const { returns } = require("chai-spies");

function Monday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps")
}

function Wednesday(){
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
function Friday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function runFiveMiles(){
    console.log("Go for a five-mile ddd run");
}

function liftWeights(){
    console.log("Pump iron");
}

function swimFortyLaps(){
    console.log("Swim 40 laps");
}

function Monday(){
    runFiveMiles();
    liftWeights();
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

function Monday(){
    exerciseRoutine(liftWeights)
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

/* functions in JavaScript are first class objects, which means they can be treated like any ohter object
they can be can be assigned to a variable, passed as values to other functions, returned as the value from
another function. */

exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
});


function morningRoutine(exercise){
    let breakfast;
    
    if(exercise === liftWeights){
        breakfast = "protien bar";
    }   else if(exercise === swimFortyLaps){

    }   else{
        breakfast = "granola";
    }
    exerciseRoutine(exercise);
    
    return function(){
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

const afterExercise = morningRoutine(liftWeights);

afterExercise;
afterExercise()

const message = function(){
    console.log("This message is shown after 3 seconds.")
}

setTimeout(message, 3000);
setTimeout(message, 5000);


function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    console.log('hello there')
    console.log(receivesAFunction.namess);
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}