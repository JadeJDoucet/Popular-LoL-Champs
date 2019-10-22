import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <div>
    <li> <b>{item.championName} </b>
      <p><b>Estimated Games: </b>{item.quantity}</p>
    </li>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
