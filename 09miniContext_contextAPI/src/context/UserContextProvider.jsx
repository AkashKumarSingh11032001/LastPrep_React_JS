import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const userdata = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
  };
  const [user, setUser] = React.useState(userdata);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
