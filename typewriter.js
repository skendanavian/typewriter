const sentence = "hello there from lighthouse labs";

let timer = 0;


for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50
}

// find how long it will take to print entire string
let newLineTimer = (sentence.length + 1) * 50
// prints new line after string has been printed
setTimeout(() => {console.log('\n')}, newLineTimer)


