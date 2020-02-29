import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import BookstoreAPIFake from "services/bookstore-api-fake";

import { store, persistor } from 'redux-reducers/store';
import { BookstoreServiceProvider } from 'context/bookstore.context';

import ErrorBoundry from "components/error-boundry/error-boundry.component";

import App from 'containers/app/app.component';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";


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
