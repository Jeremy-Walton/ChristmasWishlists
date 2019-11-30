import React from 'react';
import base from "./firebase";

import './assets/css/App.css';

import Wishlist from  './components/Wishlist';

export default class App extends React.Component {
  state = {
    term: '',
    lists: {}
  };

  constructor() {
    super()

    const localStorageRef = localStorage.getItem('christmas-wishlists');
    const data = localStorageRef ? JSON.parse(localStorageRef) : { lists: {} };

    this.state = {
      term: '',
      lists: data.lists
    };
  }


  componentDidMount() {
    this.ref = base.syncState('/lists', {
      context: this,
      state: 'lists'
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

  updateTerm = event => {
    this.setState({ term: event.target.value });
  }

  addList = event => {
    event.preventDefault()

    // TODO: get term from form rather than state
    // TODO: ignore blank input

    this.setState(prevState => {
      const { lists, term } = prevState
      const id = new Date().getTime();
      const newList = { id, term, items: [] };

      return { term: '', lists: { ...lists, [id]: newList } };
    });
  }

  removeList = id => {
    let { ...newLists } = this.state.lists;
    newLists[id] = null;
    this.setState({ lists: newLists });
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
            {Object.keys(lists).map((id, index) => <Wishlist key={index} removeList={this.removeList} list={lists[id]} />) }
          </div>

          <form className="add-list" onSubmit={this.addList}>
            <input value={term} placeholder="List name" onChange={this.updateTerm} />
            <button className="btn btn--primary">Add New List</button>
          </form>
        </div>
      </div>
    );
  }
};
