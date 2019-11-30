import React from 'react';
import base from "./firebase";

import './assets/css/App.css';

import List from  './models/List';

export default class App extends React.Component {
  state = {
    term: '',
    lists: {}
  };

  componentDidMount() {
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem('christmas-wishlists');
    if (localStorageRef) {
      const data = JSON.parse(localStorageRef);

      // TODO: rehidrate items
      // let lists = data.lists.map(list => new List(list));

      this.setState({ term: '', lists: data.lists });
    }

    // next sync with database
    this.ref = base.syncState('/', {
      context: this,
      state: "lists"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      'christmas-wishlists',
      JSON.stringify(this.state)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault()

    const { lists, term } = this.state
    const id = new Date().getTime();
    const newList = new List({ id, term })

    this.setState({
      term: '',
      lists: { ...lists, [id]: newList }
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div>Christmas Wishlists</div>
          <a href='https://www.launchtabs.com/' className='home-link'>Other Cool Stuff</a>
        </header>
        <div className='header-fix'></div>

        <div className="container">
          <div className="wishlist-container">
            {
              Object.keys(this.state.lists).map((id, index) => {
                const item = this.state.lists[id];
                return <div className="wishlist" key={index}>{item.term}</div>
              })
            }
          </div>

          <form className="" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
};
