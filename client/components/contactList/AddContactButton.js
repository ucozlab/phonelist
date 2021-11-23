import React from 'react';
import {connect} from "react-redux";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import {setActiveContact, setContactModalOpened} from "../../actions/generalFunctions";
import {clearContactValues} from "../../reducers/contactModalReducer";

const AddContactButton = (props) => {
  const {setContactModalOpened, setActiveContact} = props;

  const addButtonClick = () => {
    setContactModalOpened(true);
    setActiveContact({...clearContactValues});
  }

  return (
    <Fab className={"add-button"} color="secondary" aria-label="add" onClick={addButtonClick}>
      <AddIcon />
    </Fab>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContactButton)
