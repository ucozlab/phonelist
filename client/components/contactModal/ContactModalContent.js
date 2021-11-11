import React, {Fragment} from 'react';
import {connect} from "react-redux";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

import {setContactModalValue} from "../../actions/generalFunctions";
import ContactModalSubmitButton from "./ContactModalSubmitButton";

const ContactModalContent = (props) => {
  const {contactModalValues, setContactModalValue} = props;

  const inputChange = (event) => {
    setContactModalValue(event.target.name, event.target.value)
  }

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
        {["first_name", "last_name", "phone", "image", "countryCode", "email"].map(inputKey => {
          return <TextField key={inputKey}
                            name={inputKey}
                            label={inputKey}
                            value={contactModalValues[inputKey]}
                            variant="outlined"
                            onChange={inputChange}/>
        })}
        <ContactModalSubmitButton/>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (store) => {
  const {contactModalOpened, contactModalValues} = store.generalState;
  return {
    contactModalOpened,
    contactModalValues,
  }
}

const mapDispatchToProps = {
  setContactModalValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModalContent)
