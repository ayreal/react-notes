# Setting Up React
Step zero: install create-react-app with `npm install -g create-react-app`. You only need do do this once. The following steps need to occur each time you create a new React App.
1) In the terminal run `create-react-app my-app`
2) cd into `my-app`
3) Run `npm install && npm start` to fire up server and open project in your browser.
4) Import PropTypes to your Component files (eg. App.js): `import PropTypes from "prop-types";`

At this point, these files in your src folder can look something like:
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App title="My App Title" />,
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
    return <div className="App">{this.props.title}</div>;
  }
}

App.propTypes = { title: PropTypes.string };

export default App;
```
