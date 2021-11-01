import React from 'react';
import {connect} from "react-redux";

import ImageIcon from "@material-ui/icons/Image";
import {ListItem, ListItemAvatar, Avatar, ListItemText} from "@material-ui/core";
import {postUpdateContact} from "../../actions/contactFunctions";

const Contact = (props) => {
  const {contact, postUpdateContact} = props;
  return (
    <ListItem onClick={() => postUpdateContact(contact)}>
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
  postUpdateContact
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
