import React, { useContext, useState, useEffect } from "react";
import "../Components/List.css";
import { ProjectContext } from "../Context/ProjectContext";
import User from "../Components/User";
import Button from "@material-ui/core/Button";

function List() {
  const { currentUsers, users, page, setPage, setCurrentUser } = useContext(
    ProjectContext
  );

  const btnPreviousDisabled = () => {
    return page.start === 0 ? true : false;
  };

  const btnNextDisabled = () => {
    return page.end !== users?.length ? false : true;
  };

  useEffect(() => {
    let nextUsers = [];
    for (let i = page.start; i < page.end; i++) {
      nextUsers.push(users[i]);
    }
    console.log(page)
  }, [page]);

  const nextPage = () => {
    setPage({
      start: page.start + 10 >= users.length - 10 ? page.end -10: page.start + 10,
      end: page.end + 10 >= users.length ? users.length : page.end + 10,
    });
  };

  const previousPage = () => {
    setPage({
      start: page.start - 10 <= 0 ? 0 : page.start -10,
      end: page.end - 10,
    });
  };

  return (
    <div className="list">
      <div className="list-userlist">
        {users?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <div className="list-buttons">
        <Button
          disabled={btnPreviousDisabled()}
          variant="contained"
          color="primary"
          onClick={previousPage}
        >
          Previous
        </Button>
        <Button
          disabled={btnNextDisabled()}
          variant="contained"
          color="primary"
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default List;
