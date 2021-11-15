import React from 'react';
import {connect} from "react-redux";

import Button from "@mui/material/Button";

import {setContactModalOpened, setShowLoader} from "../../actions/generalFunctions";
import {postAddContact} from "../../api/contacts-api";
import {getContactsList} from "../../actions/contactFunctions";

const ContactModalSubmitButton = (props) => {
  const {contactModalValues, setContactModalOpened, setShowLoader, getContactsList} = props;

  const submitForm = async () => {
    setContactModalOpened(false);
    setShowLoader(true);
    const response = await postAddContact(contactModalValues);
    if (response.acknowledged && response.insertedId) {
      await getContactsList(); // update contacts list
    }
    setShowLoader(false);
  }

  return (
    <Button variant="contained" onClick={submitForm}>Submit</Button>
  );
}

const mapStateToProps = (store) => {
  const {contactModalValues} = store.generalState;
  return {
    contactModalValues,
  }
}

const mapDispatchToProps = {
  setContactModalOpened,
  setShowLoader,
  getContactsList
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModalSubmitButton)
