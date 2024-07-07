const body = document.body
const div = document.createElement("div")
// for writing and changing style of div use innerHTML
// div.innerHTML = "<strong>hello there </strong>"
// body.append(div) 

//alt way and a secure way
const strong = document.createElement("strong")
strong.innerText = "hello world"
div.append(strong)
body.append(div)

//removing elements
const hi = document.querySelector("")