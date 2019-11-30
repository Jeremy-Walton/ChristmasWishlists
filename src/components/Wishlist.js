import React from 'react';
import PropTypes from "prop-types";

export default class Wishlist extends React.Component {
  static propTypes = {
    list: PropTypes.object.isRequired
  };

  render() {
    const { list } = this.props;

    return (
      <div className='wishlist'>{list.term}</div>
    );
  }
};
