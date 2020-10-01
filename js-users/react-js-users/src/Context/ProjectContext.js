import React, { useState, createContext, useEffect } from "react";
import { getUsers } from "../Api/ApiCalls";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUser] = useState([]);
  const [page, setPage] = useState({
    start: 0,
    end: 10,
  });

  useEffect(() => {
    async function fetchUsers() {
      let data = await getUsers();
      setUsers(data);
      let startingUsers = [];
      for (let i = page.start; i < page.end; i++) {
        startingUsers.push(data[i]);
      }
      setCurrentUser(startingUsers);
    }
    fetchUsers();
  }, []);

  const searchUser = (id) => {
    return users.find(user => user.id == id)
  }

  return (
    <ProjectContext.Provider
      value={{
        currentUsers,
        users,
        page,
        setPage,
        setCurrentUser,
        searchUser,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
