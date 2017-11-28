This is a package with a function that converts a Node.js readable stream to a [Bacon.js](https://baconjs.github.io/) stream that emits lines of text. So if the Node.js readable stream contains two lines of text (separated by a '\n' character), the corresponding Bacon stream will emit two events, with each event containing a single line of text.

## Installing

Via npm:

```
npm install --save bacon-node-line-stream
```

Via yarn:

```
yarn add bacon-node-line-stream
```

## Using

Here's an example of creating a readable stream from a file and then converting that to a Bacon stream.

```javascript
const createLineStream = require('bacon-node-line-stream');
const fs = require('fs');

//Create a read stream to read the file
const readStream = fs.createReadStream('textFile.txt');

//Create a bacon line stream
const lineStream = createLineStream(readStream);

//Create an error handler
lineStream.onError(error => console.error(error));

//Output the lines from the text file
lineStream.onValue(line => console.log(line));
```

## Running the Example

After downloading the source, you can run an example which reads from a file and outputs the contents of that file line by line:

```
yarn fileExample example/textFile.txt
```

This command runs the example/fileExample.js file and passes it the text file to read from.

You can replace "example/textFile.txt" with any text file. For example, we could output the example source file:

```
yarn fileExample example/fileExample.js
```

## Running the Tests

After downloading, install the dependencies:

```yarn install```


Then run the unit tests:

 ```yarn test```

## License

This package is licensed under the MIT license.