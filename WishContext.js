import React from 'react';

const WishContext = React.createContext({
  name: '',
  userID: 1,
  login: (email,userId) => { },
  logout: () => { },
  });

export default WishContext;