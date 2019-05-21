import React from 'react';

const WishContext = React.createContext({
    name: '',
    login: (email, password) => {},
    logout: () => {}
  });

  export default WishContext;