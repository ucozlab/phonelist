import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {Paper} from "@material-ui/core";
import Contact from "./Contact";
import {postContacts} from "../../api/contacts-api";


const ContactList = (props) => {
  const {contactsList} = props;

  useEffect(() => {
    const getList = async () => {
      const list = await postContacts();
      console.log("list", list);
    }
    getList();
  }, [])

  return (
    <Paper className="contacts">
      {contactsList.map(contact => <Contact key={contact.id} contact={contact}/>)}
    </Paper>
  );
}

const mapStateToProps = (store) => {
  const {contactsList} = store.contactsState;
  return {
    contactsList
  }
}

export default connect(mapStateToProps)(ContactList)
