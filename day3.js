// controll flow

// loops

// run the specific tasks 10 times

// for loop

for(let i = 1; i<=10;i++) {
    console.log("Run the task", i)
}


// usecase of the loop
let dishes = ["biryani" , "chana chat" , "pani-poori"]

// access the array values
for(i=0;i<dishes.length;i++ ) {
    console.log(dishes[i])
}


//while loop

for(i=1;i<=5;i++) {
   console.log("for loop" , i) 
}
console.log("*******")


// while(let j = 1; j<=5; j++) {
                  // while mein esa nhi kar skte 
// }

let j = 1;
while(j<=5) {
    console.log("while loop" , j)
    j++;
}

let k=0;
while(k<dishes.length) {
    console.log("favraite dishes" , dishes[k])
    k++;
}


// do while

let r=1;
do{
    console.log("at least run", r)
    r++;

} while(r<=1)  //condition false already 



// "if" , "else" , "if-else" statements

let budget = 4000;

if(budget > 6000) {
    console.log("will do dinner in hotel")
} else {
    console.log("run if all conditions are false")
}