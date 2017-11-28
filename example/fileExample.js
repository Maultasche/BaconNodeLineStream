const createLineStream = require('../src/index');
const fs = require('fs');

if(process.argv.length < 3) {
	console.error('Please specify the name of the file to read');
}
else {
	const fileName = process.argv[2];

	//Create a read stream to read the file
	const readStream = fs.createReadStream(fileName);

	//Create a bacon line stream
	const lineStream = createLineStream(readStream);

	//Create an error handler
	lineStream.onError(error => console.error(error));

	//Output the lines from the text file
	lineStream.onValue(line => console.log(line));
}