import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Theme from './Theme';
import TopBar from './components/appBar/TopBar';
import ContactList from "./components/contactList/ContactList";

const HelloWorld = () => {
  return (
    <Provider store={store}>
      <Theme>
        <div className="app">
          <TopBar/>
          <ContactList/>
        </div>
      </Theme>
    </Provider>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
