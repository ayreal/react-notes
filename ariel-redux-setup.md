https://codesandbox.io/s/o9r61y03my

# Redux Jumpstart
- File structure of src: actions, components, containers, reducers
- Create the store and use the Provider to import Redux. Simple example looks like:
```JavaScript
// In index.js:
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
// within a subfolder, this is index.js by default
import "./index.css";
import App from "./App";

// createStore takes an argument of a reducer which will have an initial state we set to the shape of our store
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

```
- Start planning your Redux application by planning your actions:
  - Must have a type, which is a string
  - Likely to have payload, the information you want to use to change the state
  - Actions creators are FUNCTIONS that return ACTION OBJECTS.
```javascript
let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});
```

- Hook up a combineReducers to manage that state

```JavaScript
// in reducers/index.js
import { combineReducers } from "redux";
import todos from "./todos";

const appReducers = combineReducers({
  todos
  // other reducers here
});

export default appReducers;
```
- Create a barebones reducer: Pure functions (aka rely only on the inputs given) that take the prevState and action being dispatched to return the nextState of the app
```JavaScript
function dispatch(action){
  state = changeState(state, action);
  render();
}
```
```javascript
// reducers/Todos.js
const todos = (state = [], action) => {
  switch (action.type) {
    case "SOMETHING":
      return;
    // reducers here
    default:
      return state;
  }
};

export default todos;
```
- The container component will be your intermediary between the store and your previously stateful components.
- Import react-redux for access to `connect`, so you can connect it to the store.
- Dispatch actions that you import as handlers that take local react state as parameters.
``` JavaScript
// containers/AddTodo.js

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
```
