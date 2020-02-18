import React from 'react';
import { BookstoreServiceConsumer } from 'context';


const withBookstoreService = (WrappedContainer) => (props) => (
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


export default withBookstoreService;
