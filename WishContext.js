import React from 'react';

const WishContext = React.createContext({
  name: '',
  login: (email) => { },
  updateLoggedIn: () => { },
  logout: () => { },
  LoggedIn: true
  });

export default WishContext;