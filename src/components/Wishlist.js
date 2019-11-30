import React from 'react';
import PropTypes from "prop-types";

import List from '../models/List';

export default class Wishlist extends React.Component {
  static propTypes = {
    removeList: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { list: new List(props.list) };
  }

  removeList() {
    const { list } = this.state;
    const result = window.confirm(`Are you sure you want to delete the ${list.term}`);
    if (result) {
      this.props.removeList(list.id)
    }
  }

  render() {
    const { list } = this.state;

    return (
      <div className='wishlist'>
        <div className="wishlist__header">
          <h1 className='mt-0'>{list.term}</h1>
          <h1 className='wishlist__close' onClick={this.removeList.bind(this)}>X</h1>
        </div>
      </div>
    );
  }
};
