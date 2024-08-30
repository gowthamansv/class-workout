alert("thisnweb site not complet" )
  
  
  let value=prompt("enter the age")
  console.log(value);
  //Arithmetic Operators
//   let name = prompt("What is your name?");
// alert("Hello, " + name + "!");

  
  let a=100;
  let b=50,c=3;
  console.log(a+a);
  console.log(a-b);
  console.log((a*b)+b);
  console.log((a/b)*b);
  console.log(((a+b)/b)%c);
  console.log(a**c);
  
  //Logical Operators
  //&& , || ,!
//   let a=true
//   let b=false
//   console.log((a&&b),(a||b),(!a));
// var name = "gowthaman";
// let age = 23;
// const state = "Tamilnadu";

// console.log(name);  
// console.log(age); 
// console.log(state); 

// functions

let name="gowthaman";
let age=23;
function myDetails(){
    console.log("My Details");
    console.log(name);
console.log(age);

}
myDetails()
//Arrow Function
const multiply = (x, y) => x * y;

let result = multiply(4, 5);
console.log(result);
//Higher-Order Function
function applyFunction(func, value) {
    return func(value);
}

// let result = applyFunction(x => x ** 2, 10);
// console.log(result);

// IIFE (Immediately Invoked Function Expression)

(function() {
    console.log("This is an IIFE!");
})();

function outerFunction(str) {
    function innerFunction() {
        console.log(str);
    }
    return innerFunction;
}

let greet = outerFunction("Hello Welcome!");
greet();  
function display() {
    return 10;
    
}

let retVal=display()
console.log(retVal);

function outerFunction() {
    console.log("outerFunction");
    
}
function innerFunction() {
        console.log("InnerFuntions");
        return outerFunction();
    }
const retRes=innerFunction();
retRes();

// If-Else Statement

function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(10);  
checkNumber(-5); 
checkNumber(0);  

// Nested if-else used Grading System Based on Marks


function getGrade(marks) {
    if (marks >= 90) {
        console.log("Grade: A");
    } else {
        if (marks >= 80) {
            console.log("Grade: B");
        } else {
            if (marks >= 70) {
                console.log("Grade: C");
            } else {
                if (marks >= 60) {
                    console.log("Grade: D");
                } else {
                    console.log("Grade: F");
                }
            }
        }
    }
}

getGrade(95);  
getGrade(85);  
getGrade(75);  
getGrade(65);  
getGrade(50);  


function getGrade(marks) {
    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 80) {
        console.log("Grade: B");
    } else if (marks >= 70) {
        console.log("Grade: C");
    } else if (marks >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}
getGrade(93)
getGrade(84)
getGrade(62)
getGrade(40)
getGrade(71)

// Ternary Operator (Shorthand If-Else)

function checkEvenOrOdd(num) {
    let result = (num % 2 === 0) ? "Even" : "Odd";
    console.log(`The number is ${result}.`);
}
checkEvenOrOdd(20); 
checkEvenOrOdd(123); 


// Switch Statement

function getDayOfWeek(dayNumber) {
    let dayName;
    
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    
    console.log(`Day of the week: ${dayName}`);
}

// Test the function with different values
getDayOfWeek(1);  // Output: Day of the week: Sunday
getDayOfWeek(4);  // Output: Day of the week: Wednesday
getDayOfWeek(7);  // Output: Day of the week: Saturday
getDayOfWeek(8);  // Output: Day of the week: Invalid day number

// While Loop

let count = 0;

while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

// Do-While Loop


// let count = 0;

// do {
//   console.log("Count is: " + count);
//   count++;
// } while (count < 5);

// for loop

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
  }
  

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Nested for Loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`i = ${i}, j = ${j}`);
    }
  } 