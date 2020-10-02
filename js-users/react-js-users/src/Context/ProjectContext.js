import React, { useState, createContext, useEffect } from "react";
import { getUsers } from "../Api/ApiCalls";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState()
  const [page, setPage] = useState({
    start: 0,
    end: 10,
  });

  useEffect(() => {
    async function fetchUsers() {
      let data = await getUsers();
      setUsers(data);
      console.log(data)
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      let nextUsers = [];
      for (let i = page.start; i < page.end; i++) {
        nextUsers.push(users[i]);
      }
      setCurrentUsers(nextUsers)
    }
  }, [users])

  
  const searchUser = (id) => {
    return users.find(user => user.id == id)
  }

  return (
    <ProjectContext.Provider
      value={{
        users,
        page,
        setPage,
        searchUser,
        currentUsers,
        setCurrentUsers,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
