import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Theme from './Theme';
import TopBar from './components/appBar/TopBar';
import ContactList from "./components/contactList/ContactList";
import BackdropLoader from "./components/BackdropLoader";
import AddContactButton from "./components/contactList/AddContactButton";
import ContactModal from "./components/contactModal/ContactModal";

const HelloWorld = () => {
  return (
    <Provider store={store}>
      <Theme>
        <div className="app">
          <TopBar/>
          <ContactList/>
          <BackdropLoader/>
          <ContactModal/>
          <AddContactButton/>
        </div>
      </Theme>
    </Provider>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
