import React from 'react';
import {connect} from "react-redux";

import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";

import {setActiveContact, setContactModalOpened} from "../../actions/generalFunctions";

const ContactEditButton = (props) => {
  const {contact, setContactModalOpened, setActiveContact} = props;

  const editButtonClick = () => {
    setContactModalOpened(true);
    setActiveContact(contact);
  }

  return (
    <IconButton edge="end" aria-label="delete" onClick={editButtonClick}>
      <EditIcon />
    </IconButton>
  );
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = {
  setContactModalOpened,
  setActiveContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditButton)
