import React, { useState, createContext, useEffect } from "react";
import { getUsers } from "../Api/ApiCalls";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUser] = useState([]);
  const [page, setPage] = useState({
    start: 0,
    last: 10,
  });

  useEffect(() => {
    async function fetchUsers() {
      let data = await getUsers();
      setUsers(data);
      let startingUsers = []
      for (let i = page.start; i < page.last; i++) {
        startingUsers.push(data[i])
      }
      setCurrentUser(startingUsers)
    }
    fetchUsers();
  }, []);

 

  return (
    <ProjectContext.Provider
      value={{
        currentUsers,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
