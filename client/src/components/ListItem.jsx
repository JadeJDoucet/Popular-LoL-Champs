import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <div>
    { item.championName }
  </div>
);

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
