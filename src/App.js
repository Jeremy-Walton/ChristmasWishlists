import React from 'react';
import base from "./firebase";

import './assets/css/App.css';

import List from  './models/List';

import Wishlist from  './components/Wishlist';

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

  updateTerm = (event) => {
    this.setState({ term: event.target.value });
  }

  addList = (event) => {
    event.preventDefault()

    // TODO: get term from form rather than state
    // TODO: ignore blank input

    const { lists, term } = this.state
    const id = new Date().getTime();
    const newList = new List({ id, term, items: [] })

    this.setState({
      term: '',
      lists: { ...lists, [id]: newList }
    });
  }

  render() {
    const { term, lists } = this.state;

    return (
      <div className="App">
        <header>
          <div>Christmas Wishlists</div>
          <a href='https://www.launchtabs.com/' className='home-link'>Other Cool Stuff</a>
        </header>
        <div className='header-fix'></div>

        <div className="container">
          <div className="wishlist-container">
            { Object.keys(lists).map((id, index) => <Wishlist key={index} list={lists[id]} />) }
          </div>

          <form className="add-list" onSubmit={this.addList}>
            <input id="add-list" value={term} placeholder="List name" onChange={this.updateTerm} />
            <button className="btn btn--primary">Add New List</button>
          </form>
        </div>
      </div>
    );
  }
};
