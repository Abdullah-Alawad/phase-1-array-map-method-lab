const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  return tutorials.map((element) => {
    const words = element.split(' ');
    const fullWord = words.map((el) => el.replace(el.at(0), el.at(0).toLocaleUpperCase()));
    return fullWord.join(" ");
  });
}


// const titleCased = () => {
//   return tutorials.map((el) => {
//     for(const char in el){
//       if(char)
//       el.replace(el.charAt(0), el.charAt(0).toUpperCase())

//     }});
// }
//const titleCased = tutorials.map((el) => el.replace(el.charAt(0), el.charAt(0).toUpperCase()));


console.log(titleCased());
