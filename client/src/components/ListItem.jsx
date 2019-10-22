import React from 'react';
import PropTypes from 'prop-types';
// add image tag to each list item with item.source?
const ListItem = ({ item }) => {
  console.log(item);
  return (
    <div>
    {/* <img src="Aatrox_0.jpg" /> */}
    <img src={`/images/tiles/${item.championName}_0.jpg`} alt="Character Portrait" />
    <li> <b>{item.championName} </b>
      <p><b>Estimated Games: </b>{item.quantity}</p>
    </li>
  </div>
  )
; };

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
