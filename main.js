/*
1. Write a javascript (ES6) function that takes a single argument of an array of strings, 
and returns the total number of repeated strings. For instance, given the input 
['abc', '123', '123', 'Abc', 'xyz'] the function would return the number 4 
(2 instances of 'abc' (case-insensitive) plus 2 instances of '123'). The function should 
always return a number and not throw an exception or crash. 

2. Write unit tests for the function to make sure it works. Cover all the equivalence 
partitions and error conditions you can think of. 

If any aspects of the assignment are unclear, feel free to add a comment to your solution 
calling out the open question(s) and what decision(s) you made. 

Please spend at most an hour or two on this.
*/

const repeated_strings = array => {
    var array_check = []
    var array_check_multiple = []
    var counter = 0

    //Check to see if array includes anything other than a string in element
    //If so remove them
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] != "string"){
            array.splice(i,1);
            i--
        }
    }

    //After non string elements removed then convert all to lowercase
    var array = array.map(array => array.toLowerCase());

    //Loops through to count number of repeated strings
    for(var i = 0; i < array.length; i++){
        if ((array[i] == null) || (array[i].trim().length == 0)){
        }
        else if(array_check.includes(array[i]) && !array_check_multiple.includes(array[i])){
            counter = counter + 2
            array_check_multiple.push(array[i])
        } else if(array_check.includes(array[i]) && array_check_multiple.includes(array[i])) {
            counter = counter + 1
            array_check_multiple.push(array[i])
        } else {
        array_check.push(array[i])
        }
    }
    return counter;
}

module.exports = { repeated_strings };
