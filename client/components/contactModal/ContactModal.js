import React from 'react';
import {connect} from "react-redux";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";

import {setContactModalOpened} from "../../actions/generalFunctions";
import ContactModalContent from "./ContactModalContent";

const ContactModal = (props) => {
  const {contactModalOpened, setContactModalOpened} = props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={contactModalOpened}
      onClose={() => setContactModalOpened(true)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}
    >
      <Fade in={contactModalOpened}>
        <Paper className="modal" elevation={2}>
          <ContactModalContent/>
        </Paper>
      </Fade>
    </Modal>
  );
}

const mapStateToProps = (store) => {
  const {contactModalOpened} = store.generalState;
  return {
    contactModalOpened
  }
}

const mapDispatchToProps = {
  setContactModalOpened
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal)
