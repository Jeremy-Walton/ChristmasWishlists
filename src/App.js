import React from 'react';
import './assets/css/App.css';

import List from  './models/List';

export default class App extends React.Component {
  constructor() {
    super();

    const data = localStorage.state ? JSON.parse(localStorage.state) : { lists: [] };
    let lists = data.lists.map(list => new List(list));

    this.state = { term: '', lists };
  }

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault()

    const { lists, term } = this.state
    const newList = new List({ term })

    this.setState({
      term: '',
      lists: [...lists, newList]
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
              this.state.lists.map((item, index) => <div className="wishlist" key={index}>{item.term}</div>)
            }
          </div>

          <form className="" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
        </div>

        <button onClick={() => { this.setState({ lists: [] }) }}>Clear Data</button>
      </div>
    );
  }
};
