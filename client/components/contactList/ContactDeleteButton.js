  import React from 'react';
import {connect} from "react-redux";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {postDeleteContact} from "../../actions/contactModalFunctions";


const ContactDeleteButton = (props) => {
  const {contact, postDeleteContact} = props;

  const editButtonClick = () => {
    // setContactModalOpened(true);
    postDeleteContact(contact);
  }

  return (
    <IconButton edge="end" aria-label="delete" onClick={editButtonClick} className="contact-delete">
      <DeleteIcon />
    </IconButton>
  );
}

const mapDispatchToProps = {
  postDeleteContact,
};

export default connect(null, mapDispatchToProps)(ContactDeleteButton)
