import React from 'react';
import {connect} from "react-redux";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const BackdropLoader = (props) => {
  const {showLoader} = props;

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showLoader}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

const mapStateToProps = (store) => {
  const {showLoader} = store.generalState;
  return {
    showLoader
  }
}

export default connect(mapStateToProps)(BackdropLoader)
