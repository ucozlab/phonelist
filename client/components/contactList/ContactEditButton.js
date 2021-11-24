import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";

import {setActiveContact, setContactModalOpened} from "../../actions/generalFunctions";
import contactInterface from "../../interface/contactInterface";

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

ContactEditButton.propTypes = {
  contact: PropTypes.shape(contactInterface)
}

const mapDispatchToProps = {
  setContactModalOpened,
  setActiveContact
};

export default connect(null, mapDispatchToProps)(ContactEditButton)
