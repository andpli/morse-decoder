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
    // write your solution here

    let c = '';
    for(let i=0; i < expr.length/10; i++){
   // Log to console
   let b = expr.substring(i*10,i*10+10);
   b = b.replace('**********',' ');
   b = b.replaceAll('10','.');
   b = b.replaceAll('11','-');
   b = b.replaceAll('0','');
   c = c + (b == ' ' ? b : MORSE_TABLE[b]);
   
   
   
   }
   return c;
}

module.exports = {
    decode
}