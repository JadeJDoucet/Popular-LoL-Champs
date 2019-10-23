import React from 'react';
import PropTypes from 'prop-types';
// add image tag to each list item with item.source?
const ListItem = ({ item }) => {
  console.log(item);
  return (
    <li>
      <img src={`/images/tiles/${item.championName}_0.jpg`} alt="Character Portrait" />
      <p className="des"> <b>{item.championName} </b></p>
      <p className="des"><b>Estimated Games: </b>{item.quantity}</p>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
