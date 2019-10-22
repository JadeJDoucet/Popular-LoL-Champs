import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';

const List = ({ items }) => (
  <div>
    <h2> Here are the top {items.length} Champions! </h2>
    {items.map(item => <ListItem item={item} key={item.id} />)}
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

export default List;
