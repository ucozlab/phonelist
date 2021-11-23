import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import Contact from "./Contact";
import {getContactsList} from "../../actions/contactModalFunctions";

const ContactList = (props) => {
  const {contactsList, getContactsList} = props;

  useEffect(() => {
    getContactsList();
  }, [])

  return (
    <Container maxWidth="md">
      <Paper className="contacts">
        {contactsList.map((contact, contactIndex) => {
          return <Contact key={contact.id || contact._id || "contact" + contactIndex} contact={contact}/>
        })}
      </Paper>
    </Container>
  );
}

const mapStateToProps = (store) => {
  const {contactsList} = store.contactsState;
  return {
    contactsList
  }
}

const mapDispatchToProps = {
  getContactsList
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
