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


## Running the Tests

After downloading, install the dependencies:

```yarn install```


Then run the unit tests:

 ```yarn test```
