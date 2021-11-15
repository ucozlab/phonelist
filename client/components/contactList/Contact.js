import React from 'react';
import {connect} from "react-redux";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ImageIcon from '@mui/icons-material/Image';
import ContactEditButton from "./ContactEditButton";


const Contact = (props) => {
  const {contact} = props;
  return (
    <ListItem secondaryAction={<ContactEditButton contact={contact}/>}>
      <ListItemAvatar>
        <Avatar style={contact.image ? {
          backgroundImage: `url(${contact.image})`,
          backgroundSize: 'cover',
        } : {}}>
          {contact.image ? <span/> : <ImageIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={contact.first_name + " " + contact.last_name} secondary={contact.countryCode + " " + contact.phone} />
    </ListItem>
  );
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
