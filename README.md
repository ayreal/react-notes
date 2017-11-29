# React Notes

## Props and State

### Props
- Must be expressions (return a value). No if/else because that is a statement.
- PropTypes is a way for us to enforce that components receive the right props in the right form
- add the PropTypes node package to our node_modules folder: `npm install prop-types`
- propTypes is an object

### Props v. State
- While a component can't change its own props, it can change its state.
- Props and state are used as input for the render() method to determine its output
- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

### State
For each piece of state in your application:
- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

## Lifecycle Methods and Updates
https://learn.co/tracks/web-development-immersive-2-0-module-four/daily-schedules/74337
These methods always get called in the same order and the render() method which renders the React component into the DOM will be called just before componentDidUpdate, so the actual order of lifecycle methods being called is:
componentWillReceiveProps(nextProps)
shouldComponentUpdate(nextProps, nextState)
componentWillUpdate(nextProps, nextState)
render() (can access props and state via this.props and this.state - previous props are no longer available)
componentDidUpdate(prevProps, prevState) (can still access current props and state via this.props and this.state and this is the last time previous props and state will be available as they are passed into the function).
You can only put lifecycle methods in class components

`componentWillMount`:
`componentDidMount`: making API calls

## React Router
- React Router 4 is the preferred component
- BrowserRouter (use once and only once at the top of the application, eg App.js becomes a child of that component)
`npm install --save react-router-dom`
`import {BrowserRouter as Router} from 'browser-router'`
- Link: trigger rerender and change what the URL looks clicked
- Route: ocncitionnly render some component
- Switch: pick the first one that matched
