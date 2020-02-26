import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { App } from 'containers/app';
import ErrorBoundry from "components/error-boundry";
import { BookstoreServiceProvider } from 'context';
import BookstoreAPIFake from "services/bookstore-api-fake";
import { store, persistor } from 'redux-reducers/store';


const bookstoreAPI = new BookstoreAPIFake();


const app = (
  <Provider store={ store }>
    {
      <ErrorBoundry>
        <BookstoreServiceProvider value={ bookstoreAPI }>
          <PersistGate persistor={ persistor } >
            <App />
          </PersistGate>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    }
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
