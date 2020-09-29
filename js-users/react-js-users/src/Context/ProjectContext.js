import React, { useState, createContext, useEffect } from "react";
import { getUsers } from "../Api/ApiCalls";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      let data = await getUsers();
      setUsers(data);
      await console.log(data);
    }
    fetchUsers();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        users,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
