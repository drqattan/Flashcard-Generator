//exports the cloze deleted flashed card


//export the clause when running the file. 
// ask for an inquiry
// take the answer and compare it to the missing clause
//  show the complete card  


// Load the NPM Package inquirer
var inquirer = require("inquirer");

// The sentence with a blank area.
console.log(
    "Most common ethnicity affected by G6PD is-- -- -- - ."
);


//asking the question with inquirer
inquirer.prompt([

    {
        type: "input",
        message: "fill in the blank",
        name: "ethnicity"
    }

]).then(function(user) {
// checking the answer if correct or not. 
    if (user.ethnicity === "African") {
        console.log("correct",  "Most common ethnicity affected by G6PD is African." )
    } else {
        console.log(false)
    }

// second question prompted after first has ended
}).then(function(inquire) {


console.log("-- -- --appear on a G6PD smear.");

//asking the question with inquirer
inquirer.prompt([

    {
        type: "input",
        message: "fill in the blank",
        name: "smear"
    }

]).then(function(user) {
// checking the answer if correct or not. 
    if (user.smear === "Heinz bodies") {
        console.log("correct", "Heinz Bodies appear on a G6PD smear.")
    } else {
        console.log(false)
    }
   
});

// Third question prompted after first has ended
}).then(function(infeciton){
    console.log("-- -- -- -- -- -- -- - causes aplastic crisis in sickle cell disease.");

    
    //asking the question with inquirer
    inquirer.prompt([

        {
            type: "input",
            message: "fill in the blank",
            name: "infection"
        }

    ]).then(function(user) {
    // checking the answer if correct or not. 
        if (user.infection === "Parvovirus B19") {
            console.log("correct", "Parvovirus B19 causes aplastic crisis in sickle cell disease.")
        } else {
            console.log(false)
        }

    })
});