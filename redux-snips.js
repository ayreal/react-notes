// Add an element to an array
const addEl = (list, el) => {
  return [...list, el];
};

// Remove an element form an array
const removeEl = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

// Replace a single value in the array
const replaceEl = (list, index) => {
  return [
    ...list.slice(0, index), // everything before
    list[index] + 1, // new element
    ...list.slice(index + 1)
  ]; // rest of original array
};

// Boilerplate ACTION
let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

// Boilerplate REDUCER
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
