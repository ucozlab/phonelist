import React from 'react';
import {connect} from "react-redux";

import Button from "@mui/material/Button";

import {setContactModalOpened, setShowLoader} from "../../actions/generalFunctions";
import {postAddContact} from "../../api/contacts-api";

const ContactModalSubmitButton = (props) => {
  const {contactModalValues, setContactModalOpened, setShowLoader} = props;

  const submitForm = async () => {
    setContactModalOpened(false);
    setShowLoader(true);
    console.log("contactModalValues", contactModalValues);
    const response = postAddContact(contactModalValues);
    console.log("response", response);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModalSubmitButton)
