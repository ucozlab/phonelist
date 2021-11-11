import React from 'react';
import {connect} from "react-redux";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AddIcon from '@mui/icons-material/Add';
import withStyles from "@mui/styles/withStyles";

import {setShowLoader} from "../../actions/generalFunctions";

const styles = theme => ({
  addButton: {
    backgroundColor: theme.palette.secondary.main,
  },
});

const AddContactButton = (props) => {
  const {setShowLoader, classes} = props;
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} onClick={() => setShowLoader(true)}>
      <SpeedDial
        className={classes.addButton}
        ariaLabel="Add contact"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<AddIcon />}
      />
    </Box>
  );
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = {
  setShowLoader
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AddContactButton)
)
