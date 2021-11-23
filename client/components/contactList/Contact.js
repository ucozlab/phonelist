import React from 'react';
import {connect} from "react-redux";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ImageIcon from '@mui/icons-material/Image';

import ContactEditButton from "./ContactEditButton";
import ContactDeleteButton from "./ContactDeleteButton";

const Contact = (props) => {
  const {contact} = props;

  const avatarStyle = contact.image ? {
    backgroundImage: `url(${contact.image})`,
    backgroundSize: 'cover',
  } : {};

  return (
    <ListItem className="contact"
              secondaryAction={[
                <ContactEditButton key={"edit"} contact={contact}/>,
                <ContactDeleteButton key={"delete"} contact={contact}/>
              ]}>
      <ListItemAvatar>
        <Avatar style={avatarStyle}>
          {contact.image ? <span/> : <ImageIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={contact.first_name + " " + contact.last_name} secondary={contact.countryCode + " " + contact.phone} />
    </ListItem>
  );
}

export default connect()(Contact)
