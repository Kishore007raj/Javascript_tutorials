// DOM - Document Object Model

// The Document Object Model (DOM) is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text

//step-1-adding and accessing DOM elements
const body = document.body;
// using append to append all elements
body.append("hello guys, how are you?");
// using appendChild to append elements like div,spans and anchors
body.appendChild("hello");

//step-2-creating elements

const div = document.createElement("div");
//now adding that div to the body
body.append(div);

//step-3-modifiying elements
//three types-innerhtml,innertext and textcontent

// innerhtml
//the innerHTML property sets or returns the HTML content of the element
//using querySelector to select an element
const html_element = document.querySelector("nav");
console.log(html_element.innerHTML);
//output will be <a>home</a><a>about</a><a>contact</a><a style="display: none">country</a>

//innertext
//the innerText property sets or returns the text content of the element and ignores the hidden content which is set to be none
const text_element = document.querySelector("nav");
console.log(text_element.innerText);
//output will be home about contact 

// textcontent
//the textContent property sets or returns the text content of the element and includes the hidden content
const text_content = document.querySelector("nav");
console.log(text_content.textContent);
//output will be home about contact country 

