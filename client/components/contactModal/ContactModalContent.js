import React, {Fragment} from 'react';
import {connect} from "react-redux";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import {setContactModalOpened} from "../../actions/generalFunctions";

const ContactModalContent = (props) => {
  const {editActiveContact} = props;
  return (
    <Fragment>
      <Card className="modal-top">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="modal-top__text">
            Add New Contact
          </Typography>
          <Typography variant="body2" className="modal-top__text">
            Please fill in all required fields to add a contact
          </Typography>
        </CardContent>
      </Card>
      <div className="modal-content">
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (store) => {
  const {contactModalOpened, editActiveContact} = store.generalState;
  return {
    contactModalOpened,
    editActiveContact,
  }
}

const mapDispatchToProps = {
  setContactModalOpened
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModalContent)
