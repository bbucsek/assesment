import React, { useState, createContext, useEffect } from "react";
import { getUsers } from "../Api/ApiCalls";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      let data = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);
  
  const searchUser = (id) => {
    return users.find(user => user.id == id)
  }

  return (
    <ProjectContext.Provider
      value={{
        users,
        searchUser,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
