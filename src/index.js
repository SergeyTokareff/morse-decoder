const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = expr.match(/.{10}/g);  
  let arrLetter = [];
  
  for (let item of arr) {
    let arr2 = item.match(/.{1,2}/g);
    let str = '';
    for (let i of arr2) {      
      if (i === '10') {
        str += '.';
      } else if (i === '11') {
        str += '-';
      } else if (i === '**') {
        str += ' ';
        continue;
      }      
    }
    arrLetter.push(MORSE_TABLE[str]);
  }
 return arrLetter.join('');
}

module.exports = {
    decode
}