//This is an in-line comment.
//for printing don't use print instead use console.log
//a hello world funcion using console.log
//Task-1
console.log("Hello World");
console.log("Nice to meet you!!")

/*this a multiline comment */

//task-2
//Variables allow computers to store and manipulate data in a dynamic fashion
//To create or declare variable use "var" as keyword
//In JavaScript we end statements with semicolons. 

var myName;

//Task-3-storing values with assignment

//In JavaScript, you can store a value in a variable with the assignment operator (=).
var hello;
hello="world";
console.log(hello) //for printing don't use print instead use console.log


//task-4-Assigning the Value of One Variable to Another

//assigning a value of a variable to another variable using (=) operator
var myvar;
myvar = 10;

var mynum;
mynum = myvar //the value assign in myvar will be same as mynum
console.log(mynum)


//task-5-Initializing Variables with the Assignment Operator

var goat=1;
console.log(goat)

//task-6-Declare String Variables
//"luffy" is called a string literal which series of characters enclosed in single or double quotes
var myName= "luffy"
console.log(myName)

//task-7-Understanding Unintialized variables

//When JavaScript variables are declared, they have an initial value of undefined
//If you do a mathematical operation on an "undefined" variable your result will be NaN which means "Not a Number"
//if you go with a string operation on an "undefined" variable your result will be string of "undefined"

// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";


//task-8-Understanding Case Sensitivity in Variables

//In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
//Write variable names in JavaScript in camelCase.
//multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

//example 

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

//task-9-Explore Differences Between the var and let Keywords
//One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:
//, when you use "let" instead of "var" for declaring variable , a variable with the same name can only be declared once.

let catName = "Oliver";
let catSound = "Meow!";