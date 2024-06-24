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
var z="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
z = z + " String!";


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

//task-10-Declare a Read-Only Variable with the const Keyword
// the keyword "let" is not the only way to declare variables.
//we can use "const" keyword to declare variables,and note that variables declared using "const" are read-only
//They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned

//this const is another way to declare variable name
const hero ="naruto";
console.log(hero)

//task-11-add of two numbers in js and also don't use var anymore because it is old

const sum = 10+20;
console.log(sum)

//subtraction between two numbers

const subtraction = 45-29;
console.log(subtraction)

//multiplication 

const multiplication = 20*38;
console.log(multiplication)

//division

const division = 20/4
console.log(division)

//task-12-Increment a Number with JavaScript
//we can increment or add one to a variable with the ++ operator.
//i++ which is equilvalent to i=i+1.
//so if we use the i++ method , The entire line becomes i++;eliminating the need for the equal sign.

let number = 20;
number++;
console.log(number)

//task-13-Decrement a Number with JavaScript
//We decrement or decrease a variable by one with the -- operator.
//i-- which is equilvalent to i=i-1.

let serial_no = 34;
serial_no--;
console.log(serial_no)

//task-14-Create Decimal Numbers with JavaScript
// We can store decimal numbers in variables too. 
// Decimal numbers are sometimes referred to as floating point numbers or floats

let decimal_nos = 3.44;
console.log(decimal_nos)

//task-15-Multiply Two Decimals with JavaScript

const product = 2.0 * 4.7;
console.log(product)

//task-16-Divide One Decimal by Another with JavaScript

const division_number = 3.5/5.0;
console.log(division_number)

//task-17-Finding a Remainder in JavaScript
//The remainder operator % gives the remainder of the division of two numbers.

const remainder = 30 % 2;
console.log(remainder) 

//task-18-Compound Assignment With Augmented Addition

let x = 3;
let y = 17;

x += 12;
y += 9;

console.log(x);
console.log(y);

//task-19-Compound Assignment With Augmented Subtraction

let d = 34;
let e = 45;

d -= 20;
e -= 35;

console.log(d);
console.log(e);

//task-20-Compound Assignment With Augmented Multiplication

let w = 23;
w*=20;
console.log(w)

//task-21-Compound Assignment With Augmented Division

let g = 30;
g/=20;
console.log(g)

//task-22-Escaping Literal Quotes in Strings
// When you are defining a string you must start and end with a single or double quote
// but we can also do it with the help of backslash(\)

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(sampleStr)
console.log(myStr)

//task-23-Quoting Strings with Single Quotes
var myNewStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myNewStr)
//task-24-Escape Sequences in Strings
//       Code	Output
//        \'	single quote
//        \"	double quote
//        \\	backslash
//        \n	newline
//        \t	tab
//        \r	carriage return
//        \b	backspace
//        \f	form feed
const mysecStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(mysecStr)

//task-25-Concatenating Strings with Plus Operator
// when the + operator is used with a String value, it is called the concatenation operator
const newStr = "Java" + "Script "
console.log(newStr)

//task-26-Concatenating Strings with the Plus Equals Operator
// We can also use the += operator to concatenate a string onto the end of an existing string variable. 
// Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

let lineOne = "This is the first sentence.";
lineOne += " This is the second sentence.";
console.log(lineOne)

// task-26-Constructing Strings with Variables
//By using the concatenation operator (+), you can insert one or more variables into a string you're building.
const myname = "kawaki";
const mySpeech = "My name is " + myname + " and I am well!";
console.log(mySpeech)

//task-27-Appending Variables to Strings
// can build a string over multiple lines out of string literals 
// we can also append variables to a string using the plus equals (+=) operator.

const someAdjective = "cool";
let line = "Learning to code is ";
line += someAdjective

//task-28-Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength)

//task-29-Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const newName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = newName[0]; // Change this line

//task-30-Understand String Immutability
// In JavaScript, String values are immutable, which means that they cannot be altered once created.
let newname = "Bob";
newname = "Job";
console.log(newname)

//task-31-Use Bracket Notation to Find the Nth Character in a String
// use bracket notation to get the character at other positions within a string.
const newline = "Lovelace";
const thirdLetterOfLastName = newline[2]; 
console.log(thirdLetterOfLastName)
//task-32-Use Bracket Notation to Find the Last Character in a String
// In order to get the last letter of a string, you can subtract one from the string's length.
const lastLetterOfLastName = newline[newline.length - 1]; 
console.log(lastLetterOfLastName)

//task-33-