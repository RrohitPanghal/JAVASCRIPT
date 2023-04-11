// if , else , if-else

let buget = 5000;

if(buget>6000) {
    console.log("Will do dinner in hotel")
}
else if(buget>4500){
    console.log("do dinner in 3star hotel")
} 
else if(buget>3000) {
    console.log("do dinner in 2star hotel")
}
else {
    console.log("run if all condition are false")
}


// nested if statment

let num = 23;

if(num > 22) {
    console.log("run if 1st condition is true");
    if(num > 25) {
        console.log("run if both condition true");
        if(num > 20) {
            console.log("run if all condtion true");
        }
    }
} 



// breaks and continue statements

// also called jumped statements

//continue statement

// used to skip some values of loop

for(let i=1;i<=10;i++) {
    if(i==2) {
        continue;
    } console.log("the value of i is =",i);
}


// break statement

// used to terminate the loop and controll transfer outside the loop

for(let j = 1; j<=10;j++) {
    if(j == 5) {
        console.log("our desierd value is = ",j)
        break;
    }console.log("the value of j is =",j);
}



// logical operators

// AND && , OR || , NOT  ! 

// example

// AND -ex

let password = "qwert";

if(password.length > 5 && password.includes("@")) {
    console.log("Password is strong");
} else {
    console.log("Change the password");
}

// NOT -ex true to false and false to true

let status = false;

if(!status){
    console.log("Your status is = ", status);
}



// variables and block scope

// scope -- area where variables is defined or accessible 

/*

{
    // block
}

*/

let score = 90; // global scope if it was written outside   (means kisi bhi function ya block k ander na ho)

if(true) {

    // let score  = 50;
    console.log(score);
}



// ternary operator
let age = 20;
let weight = 60;
if(age > 18){
    console.log("qualify");
}
else{
   console.log("fail");
}


// above code in single line

// let result = age > 18 ? weight > 50 ? "Qualify" : "fail";
// console.log(result)