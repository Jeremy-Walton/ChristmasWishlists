import React from 'react';
import PropTypes from "prop-types";
import base from "../firebase";

export default class Wishlist extends React.Component {
  static propTypes = {
    removeList: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const localStorageRef = localStorage.getItem('christmas-wishlists-items');
    const data = localStorageRef ? JSON.parse(localStorageRef) : { items: {} };

    this.state = {
      term: '',
      items: data.items
    };
  }

  componentDidMount() {
    this.ref = base.syncState('/items', {
      context: this,
      state: 'items'
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      'christmas-wishlists-items',
      JSON.stringify(this.state)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  removeList() {
    const { list, removeList } = this.props;
    const result = window.confirm(`Are you sure you want to delete ${list.term}`);
    if (result) {
      removeList(list.id)
    }
  }

  updateTerm = event => {
    this.setState({ term: event.target.value });
  }

  addItem = event => {
    event.preventDefault()

    const { list } = this.props;

    if (this.state.term) {
      this.setState(prevState => {
        const { items, term } = prevState
        const id = new Date().getTime();
        const newItem = { id, list_id: list.id, text: term };

        return { term: '', items: { ...items, [id]: newItem } };
      });
    }
  }

  removeItem = id => {
    let { ...newItems } = this.state.items;
    const result = window.confirm(`Are you sure you want to delete ${newItems[id].text}`);
    if (result) {
      newItems[id] = null;
      this.setState({ items: newItems });
    }
  }

  stringBetween(string, startChar, endChar) {
    return string.substring(
      string.lastIndexOf(startChar) + 1,
      string.lastIndexOf(endChar)
    )
  }

  renderItems() {
    const { items } = this.state;
    const { list } = this.props;

    const filteredItems = {}
    Object.keys(items).forEach(key => {
      const item = items[key];
      if (item.list_id === list.id) {
        filteredItems[item.id] = item;
      }
    })

    return Object.keys(filteredItems).map((id, index) => {
      return this.renderItem({ id, text: items[id].text }, index)
    })
  }

  renderItem(item, index) {
    const { text, id } = item;

    return (
      <div key={index} className="item">
        {
          text.startsWith('[') && text.endsWith(')') ? this.renderLink(text) : (<div className="item__text">{text}</div>)
        }
        <div className="item__close" onClick={this.removeItem.bind(this, id)}>X</div>
      </div>
    );
  }

  renderLink(text) {
    const label = this.stringBetween(text, '[', ']');
    const url = this.stringBetween(text, '(', ')');

    return <a href={url} className="item__text">{label}</a>
  }

  render() {
    const { term } = this.state;
    const { list } = this.props;

    return (
      <div className='wishlist'>
        <div className="wishlist__header">
          <h1 className='mt-0'>{list.term}</h1>
          <h1 className='wishlist__close' onClick={this.removeList.bind(this)}>X</h1>
        </div>
        <div className="item-container">
          {this.renderItems()}
        </div>
        <form className="add-form" onSubmit={this.addItem}>
          <input value={term} placeholder="Item" onChange={this.updateTerm} />
          <button type='submit' className="btn btn--primary">Add</button>
        </form>
      </div>
    );
  }
};
