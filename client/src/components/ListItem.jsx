import React from 'react';
import PropTypes from 'prop-types';
// add image tag to each list item with item.source
const ListItem = ({ item }) => {
  if (item.championName === "Vel'Koz") { // reassigning these to load proper image
    item.championName = 'Velkoz';
  } else
    if (item.championName === "Kai'Sa") { // reassigning these to load proper image
      item.championName = 'Kaisa';
    } 
  item.championName = item.championName.replace(/ +/g, "");
  return (
    <li>
      <img src={`/images/tiles/${item.championName}_0.jpg`} alt="Character Portrait" />
      <p id="name"> <b>{item.championName} </b></p>
      <p><b>Estimated Games: </b>{item.quantity}</p>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
