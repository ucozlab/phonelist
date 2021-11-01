import React from 'react';

import ImageIcon from "@material-ui/icons/Image";
import {ListItem, ListItemAvatar, Avatar, ListItemText} from "@material-ui/core";

const Contact = (props) => {
  const {contact} = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.countryCode + " " + contact.phone} />
    </ListItem>
  );
}

export default Contact
