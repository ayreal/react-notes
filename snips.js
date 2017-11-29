import React, { Component } from "react";
// import { message } from './components/foo';
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";

const title = React.createElement("h1", {}, "An Awesome Person");
const paragraph = React.createElement("p", {}, "Who is learning React");
const list = React.createElement("ul", { className: "my-interests" }, [
  React.createElement("li", { className: "brown" }, "JavaScript"),
  React.createElement("li", { className: "pink" }, "React"),
  React.createElement("li", { className: "yellow" }, "Movies"),
  React.createElement("li", { className: "yellow" }, "Ice cream")
]);

const list2 = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "My favorite ice cream flavors"),
  React.createElement("ul", {}, [
    React.createElement("li", {}, "Chocolate"),
    React.createElement("li", {}, "Vanilla"),
    React.createElement("li", {}, "Banana")
  ])
);
const container = React.createElement("div", { className: "me" }, [
  title,
  paragraph,
  list
]);

class App extends Component {
  render() {
    return container;
  }
}

export default App;

//////

const list = React.createElement(
  "ul",
  {},
  products.map(product => {
    return React.createElement("li", {}, product);
  })
);


/// Fetch from API
componentDidMount() {
    this.performSearch();
  }

  performSearch = (query, limit) => {
    const KEY = `tN2fD3YQhNyUOzryYy1oRTUs03F5QPrJ`;
    const URL = `https://api.giphy.com/v1/gifs/`;
    fetch(`${URL}search?api_key=${KEY}&q=${query}&limit=${limit}`)
      .then(res => res.json())
      .then(json => this.setState({ images: json.data }));
  };

/// Remember Fetch is async so you can get things rendering properly by passing a second argument to setstate as a callback
handleSearchInput = e => {
  this.setState(
    { searchText: e.target.value },
    this.props.onSearch(this.state.searchText, this.state.limit)
  );


///// SET state
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    // Update our state here...
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';

ReactDOM.render(
  <ClickityClick />,
  document.getElementById('root')
);


// Destructuring
   const { videos, currentVideo } = this.state;



/// FORM INPUT LOGGER
import React from "react";

class Typing extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.value} />
        <p>{this.state.value}</p>
      </form>
    );
  }
}

export default Typing;


/// Ticking Clock

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

   componentDidMount() {
    this = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }



  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


// bind in constructor
this.handleFormSubmit = this.handleFormSubmit.bind(this);

// Toggle over guests
toggleConfirmationAt = indexToChange =>
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if (index === indexToChange) {
        return { ...guest, isConfirmed: !guest.isConfirmed };
      }
      return guest;
    })
  });


  // turnary in JSX
  <button onClick={props.handleToggleEditing}>
    {props.isEditing ? "save" : "edit"}
  </button>

  // filter with a map
  const GuestList = props => (
  <ul>
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      // func returns FALSE if a guest shouldn't appear and true if they should.
      // eg, if isFiltered is true then !props.isFiltered is false and the right hand will be evaluated
      // that will filter by only confirmed guests before mapping
      .map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmationAt(index)}
          handleToggleEditing={() => props.toggleEditingAt(index)}
          setName={text => props.setNameAt(text, index)}
        />
      ))}
  </ul>
);


// Add input field contents into an array
newGuestSubmitHandler = e => {
  e.preventDefault();
  this.setState({
    guests: [
      {
        name: this.state.pendingGuest,
        isConfirmed: false,
        isEditing: false
      },
      ...this.state.guests
    ],
    pendingGuest: ""
  });
};

<input
  type="text"
  onChange={this.handleNameInput}
  value={this.state.pendingGuest}
  placeholder="Invite Someone"
/>

// destructuring for multiple form inputs

handleChange(e) {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}


// add and remove favorites

  addFavorite = gif => {
    if (!this.state.favorites.includes(gif)) {
      this.setState(pState => ({ favorites: [...pState.favorites, gif] }));
    }
  };

  removeFavorite = gif => {
    this.setState(pState => {
      const favorites = pState.favorites.filter(myGif => myGif.id !== gif.id);
      return { favorites };
    });
  };

  // turnary to handle rendering different things based on some condition

  toggleSearch = () => {
    if (this.state.searchStatus === "search") {
      return (
        <div>
          <input
            type="text"
            placeholder="Search Here"
            value={this.state.searchText}
            onChange={this.handleSearchInput}
          />
          <input
            type="text"
            placeholder="Limit"
            value={this.state.limit}
            onChange={this.handleLimitInput}
          />
        </div>
      );
    } else {
      return (
        <input
          type="text"
          placeholder="Limit"
          value={this.state.limit}
          onChange={this.handleLimitInput}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <button name="search" onClick={this.handleClick}>
          Search
        </button>
        <button name="trending" onClick={this.handleClick}>
          Trending
        </button>

        <br />

        {this.toggleSearch()}
      </div>
    );
  }
