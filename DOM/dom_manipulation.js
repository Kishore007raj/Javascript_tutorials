// The Document Object Model (DOM) is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text

// accessing DOM elements
// To manipulate the DOM, we need to access its elements
// this can  be done by using "document" Object which represents the entire html document

// example

const headerElement = document.getElementById("header");

const paragraph = document.getElementsByClassName("paragraph");

const image = document.getElementsByTagName("img");