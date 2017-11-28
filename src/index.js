const Bacon = require('baconjs');
const readline = require('readline');

/**
 * Creates a Bacon stream that emits lines of text read from a
 * readable stream
 *
 * @param readStream - A readable stream
 * @returns a Bacon stream that emits lines of text
 */
function createLineStream(readStream) {
	//Use readline to read the lines of text
	const lineReader = readline.createInterface({
		input: readStream
	});
	
	return Bacon.fromBinder(sink => {
		//Set an event handler for the error events
		readStream.on('error', error => sink(new Bacon.Error(error)));
		lineReader.on('error', error => sink(new Bacon.Error(error)));
			
		//Set an event handler for the line event
		lineReader.on('line', lineString => {
			//Emit the line of text
			sink(lineString);
		});
		
		//Set an event handler for the close event, which indicates
		//that we've read all the lines
		lineReader.on('close', () => {
			sink(new Bacon.End());
		});
		
		return () => {};
	});
}

module.exports = createLineStream;