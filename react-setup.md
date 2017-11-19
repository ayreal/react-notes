# Setting Up React
Step zero: install create-react-app with `npm install -g create-react-app webpack`. You only need do do this once. If you setup your app with create-react-app, all the common node modules are already there and Babel is already listed as a dependency in your package.json file so you don't need to worry about that. The following steps need to occur each time you create a new React App.
1) In the terminal run `create-react-app my-app`
2) cd into `my-app` and open it in your text editor.
3) Run `npm install && npm start` to fire up server and open project in your browser.
4) You'll notice there's a bunch of node modules already there. You don't need to npm install them if you want to use them, just import them when you need them in your components!
5) Import PropTypes to your Component files (eg. App.js): `import PropTypes from "prop-types";`

At this point, these files in your src folder can look something like:
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App title="My App Title" number={1}/>,
// renders virtual DOM, on actual DOM
document.getElementById("root"));
// this is the element in the actual DOM in index.html where your virtual DOM will be rendered

```
```javascript
// App.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">{this.props.title}: App #{this.props.number}</div>;
  }
}

App.propTypes = { title: PropTypes.string };

export default App;
```
