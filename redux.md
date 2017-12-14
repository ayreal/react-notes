# Higher Order Components
# Redux and State Management
- Redux store: holds state and can be manipulated through a function called dispatch.
- State is read-only and you must dispatch an action to the store to make a change
- Action: plan js obj with a 'type' property
- "Do"-er, state changing function. Returns the new state.
- "mapStateToProps"
initial state => dispatch an action +> goes through our reducer => return new state
export default conpunent
- const store = createStore(reducer)
- connect is a function that returns a function that returns a component
- Action creator: a fn that returns an action. An action is just an object with a type key.
- We declare our state to equal an object {count: 0}. Then, we define our reducer and our new function dispatch. At the bottom, we call the dispatch function and pass through our action, {type: 'INCREASE_COUNT'}. When we call dispatch, this calls our changeState reducer, and passes the changeState reducer the action object. The changeState reducer references the already declared state and passes that through. And the changeState reducer has access to the state object because the state object is declared in global scope. Then in the reducer we return a new object that has a property count, whose corresponding value is one plus the previous state's count -- in this case the state is changed to one. Finally, back in the dispatch function we take the return value of {count: 1} and assign it to our state variable. Thus, our state is updated.
- dispatch always calls render:
- dispatch({ type: '@@INIT' }): @@INIT is a meaningless action that will by default return the initial state of the store
- by dispatching an initial action of type '@@INIT' we get two benefits: an initial rendering of the state, and the ability to set our initial state in our reducer. We set our initial state in our reducer by using a default argument for the state parameter. Because state is not initially defined, dispatching an action assigns our state to that default value, and then sets state as the default.



# LYNDA
- Start planning your Redux application by planning your actions:
  - Must have a type, which is a string
  - Likely to have payload, the information you want to use to change the state
- Make an initialstate.json based on JSON from your API(s)
- Create reducers to manage your state. Pure functions (aka rely only on the inputs given) that take the prevState and action being dispatched to return the nextState of the app
  ```JavaScript
  const counter = (state=0, action) => {
  // state=0 is the default argument in case the state sent through is undefined
    switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
    }
  }

  ```

# TODO

- Create your component
- When getting to the part where you want to set/change state, imoprt
- create store in the index.js  `store=createStore(store.getState())`
- need provider in index.js to wrap App component
- use connect to get store into your component
- function mapStateToProps = state => {
  grab the things from state that you want. You can name them whatever you want
    return { todos: this.state.todos}
 }
