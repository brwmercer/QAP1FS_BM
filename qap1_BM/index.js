
const arguments = process.argv.slice(2);

const helpMsg = `
Usage: pw [arguments]

Arguments:
--help     Show Help Message
--length   Desired Length of Password (defaulted at 8 characters)

`;

if (arguments.includes('--help')) {
    console.log(helpMsg);
    process.exit(0)
}

function errorMsg(Message) {
 console.error(`Error: ${Message}`);
 console.log('Enter "pw --help for help');
 process.exit(1)
}

function generatePassword() {
    const lowChar = 'abcdefghijklmnopqrstuvwxyz';
    let charSet = lowChar;
  
    // Use process.argv instead of arguments
    const lenIndex = process.argv.indexOf('--length'); 
  
    let length = 8; 
    if (lenIndex !== -1) {
      const lengthArgIndex = lenIndex + 1;
      if (lengthArgIndex < process.argv.length) {
        const potentialLength = process.argv[lengthArgIndex];
        if (!isNaN(potentialLength)) {
          length = parseInt(potentialLength);
        } 
        else {
          errorMsg('Enter a valid number for length of password.');
        }
      }
    }

    const password = Array.from({length}, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
    console.log(password);
}

generatePassword();
