import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {Paper} from "@material-ui/core";
import Contact from "./Contact";
import {getContactsList} from "../../actions/contactFunctions";


const ContactList = (props) => {
  const {contactsList, getContactsList} = props;

  useEffect(() => {
    getContactsList();
  }, [])

  return (
    <Paper className="contacts">
      {contactsList.map((contact, contactIndex) => {
        return <Contact key={contact.id || contact._id || "contact" + contactIndex} contact={contact}/>
      })}
    </Paper>
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
