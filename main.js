// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(`line 8 displayDate: ${new Date}`)
const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
// This function takes a number from index.html
const numToString = (n) => {
  console.log(`line 17 numToString: ${typeof(n)}`)
  const num = n.toString()
  console.log(`line 19 numToString: ${typeof(num)}`)
}

numToString(2);

// Write a JavaScript program to convert a string to the number.
const stringToNumber = (s) => {
  console.log(`line 26 stringToNumber: ${typeof(s)}`)
  const num = parseInt(s);
  console.log(`line 28 stringToNumber: ${num}`)
  console.log(`line 29 stringToNumber: ${typeof(num)}`)
}

stringToNumber('ylime');

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const dataTypes = (v) => {
  console.log(`${v} is type of ${typeof(v)}`)
  switch(typeof(v)) {
    case 'boolean':
      console.log(`${v} is a boolean!`)
      break;
    case null:
      console.log(`${v} is null!`)
      break;
    case undefined:
      console.log(`${v} is undefined!`)
      break;
    case 'number':
      console.log(`${v} is a number!`)
      break;
    case NaN:
      console.log(`${v} is not a number!`)
      break;
    case 'string':
      console.log(`${v} is a string!`)
      break;
    default:
      console.error(`Nothing matches`)
  }
}

dataTypes([1,2,3]);

// Write a JavaScript program that adds 2 numbers together.
// +
const addition = (s, a) => {
  const sum = s+a
  console.log(sum)
}

addition(2, 4);

// Write a JavaScript program that runs only when 2 things are true.
// &&


// Write a JavaScript program that runs when 1 of 2 things are true.
// ||


// Write a JavaScript program that runs when both things are not true.  
// !

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
