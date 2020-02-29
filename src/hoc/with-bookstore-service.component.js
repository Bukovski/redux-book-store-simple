import React from 'react';
import { BookstoreServiceConsumer } from 'context/bookstore.context';


const withBookstoreServiceComponent = (WrappedContainer) => (props) => (
  <BookstoreServiceConsumer>
    {
      (bookstoreService) => {
        return (<WrappedContainer
          { ...props }
          bookstoreService={ bookstoreService }
        />);
      }
    }
  </BookstoreServiceConsumer>
);


export default withBookstoreServiceComponent;
