import React, {Fragment} from 'react';
import {connect} from "react-redux";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {setContactModalOpened, setContactModalValue} from "../../actions/generalFunctions";
import ContactModalSubmitButton from "./ContactModalSubmitButton";
import {clearContactValues} from "../../reducers/contactModalReducer";

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
        <ul className="modal-content__list">
          {Object.keys(clearContactValues).map(inputKey => {
            if (inputKey === "_id" || inputKey === "image") {
              return null
            }
            // if (inputKey === "image") {
            //   return (
            //     <li className="modal-content__list-item" key={inputKey}>
            //       image input here soon...
            //     </li>
            //   )
            // }
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
        </ul>
        <div className="modal-content__buttons">
          <Button variant="outlined" onClick={() => setContactModalOpened(false)}>Cancel</Button>
          <ContactModalSubmitButton/>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (store) => {
  const {contactModalOpened, contactModalValues} = store.contactModalState;
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
