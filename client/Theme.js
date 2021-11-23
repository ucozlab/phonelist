import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#CDDC39",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#03A9F4',
    },
  },
});

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
