
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

