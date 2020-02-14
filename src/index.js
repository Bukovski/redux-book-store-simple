import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { App } from 'containers/app';
import ErrorBoundry from "components/error-boundry";
import BookstoreAPIFake from "services/bookstore-api-fake";
import store from 'store';


const bookstoreAPI = new BookstoreAPIFake();


const app = (
  <Provider store={ store }>
    {
      <ErrorBoundry>
        <BookstoreServiceProvider value={ bookstoreAPI }>
          <App />
        </BookstoreServiceProvider>
      </ErrorBoundry>
    }
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
