import React from 'react';
import {connect} from "react-redux";

import Button from "@mui/material/Button";

import {postCreateContact, postUpdateContact} from "../../actions/contactModalFunctions";

const ContactModalSubmitButton = (props) => {
  const {contactModalValues, postCreateContact, postUpdateContact} = props;

  const submitForm = () => {
    if (contactModalValues._id) {
      postUpdateContact(contactModalValues);
    } else {
      let newContact = Object.assign({}, contactModalValues);
      delete newContact._id; // we should not pass it on the backend as it is empty
      postCreateContact(newContact);
    }
  }

  return (
    <Button variant="contained" onClick={submitForm}>Submit</Button>
  );
}

const mapStateToProps = (store) => {
  const {contactModalValues} = store.contactModalState;
  return {
    contactModalValues,
  }
}

const mapDispatchToProps = {
  postUpdateContact,
  postCreateContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModalSubmitButton)
