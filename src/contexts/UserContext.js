import React, { useState, createContext } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [username, setUsername] = useState('');

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <UserContext.Provider value={{ username, changeUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
