import React, {Fragment} from 'react';
import {connect} from "react-redux";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {setContactModalOpened, setContactModalValue} from "../../actions/generalFunctions";
import ContactModalSubmitButton from "./ContactModalSubmitButton";

const ContactModalContent = (props) => {
  const {contactModalValues, setContactModalValue, setContactModalOpened} = props;

  const inputChange = (event) => {
    setContactModalValue(event.target.name, event.target.value)
  }

  return (
    <Fragment>
      <Card className="modal-top">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="modal-top__text">
            {contactModalValues._id ? "Update New Contact" : "Add New Contact"}
          </Typography>
          <Typography variant="body2" className="modal-top__text">
            Please fill in all required fields to add a contact
          </Typography>
        </CardContent>
      </Card>
      <div className="modal-content">
        <ui className="modal-content__list">
          {["first_name", "last_name", "phone", "image", "countryCode", "email"].map(inputKey => {
            return (
              <li className="modal-content__list-item" key={inputKey}>
                <TextField name={inputKey}
                           label={inputKey}
                           value={contactModalValues[inputKey]}
                           variant="standard"
                           onChange={inputChange}/>
              </li>
            )
          })}
        </ui>
        <div className="modal-content__buttons">
          <Button variant="outlined" onClick={() => setContactModalOpened(false)}>Cancel</Button>
          <ContactModalSubmitButton/>
        </div>
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
  setContactModalOpened,
  setContactModalValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModalContent)
