import React from 'react';
import {connect} from "react-redux";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import {setContactModalOpened} from "../../actions/generalFunctions";

const AddContactButton = (props) => {
  const {setContactModalOpened} = props;
  return (
    <Fab className={"add-button"} color="secondary" aria-label="add" onClick={() => setContactModalOpened(true)}>
      <AddIcon />
    </Fab>
  );
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = {
  setContactModalOpened
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContactButton)
