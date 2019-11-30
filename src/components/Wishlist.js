import React from 'react';
import PropTypes from "prop-types";

import List from '../models/List';

export default class Wishlist extends React.Component {
  static propTypes = {
    removeList: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
  };

  removeList() {
    const { list, removeList } = this.props;
    const result = window.confirm(`Are you sure you want to delete the ${list.term}`);
    if (result) {
      removeList(list.id)
    }
  }

  render() {
    const list = new List(this.props.list)

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
