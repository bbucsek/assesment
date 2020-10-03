import React, { useContext, useState, useEffect } from "react";
import "../List/List.css";
import { ProjectContext } from "../../Context/ProjectContext";
import User from "./User/User";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

function List() {
  const { users, page, setPage } = useContext(
    ProjectContext
  );
  const [resultPerPage] = useState(10);
  const [currentUsers, setCurrentUsers] = useState();

  const btnPreviousDisabled = () => {
    return page.start === 0 ? true : false;
  };

  const btnNextDisabled = () => {
    return page.end === users?.length ? true : false;
  };

  useEffect(() => {
    if (users.length > 0) {
      let nextUsers = [];
      for (let i = page.start; i < page.end; i++) {
        nextUsers.push(users[i]);
      }
      setCurrentUsers(nextUsers)
    }
  }, [users])

  useEffect(() => {
    if (currentUsers) {
      console.log(page)
      let nextUsers = [];
      for (let i = page.start; i < page.end; i++) {
        nextUsers.push(users[i]);
    }
    setCurrentUsers(nextUsers)
    }
  }, [page])


  const nextPage = () => {
    let start = page.start + resultPerPage;
    let end = page.end + resultPerPage >= users.length ? users.length : page.end + resultPerPage;
    setPage({
      start: start,
      end: end,
    });
    
  };

  const previousPage = () => {
    let start = page.start - resultPerPage <= 0 ? 0 : page.start -resultPerPage;
    let end = page.start;
    setPage({
      start: start,
      end: end,
    });
  };

  if (!currentUsers) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="list">
      <div className="list-userlist">
        {currentUsers?.map((user) => (
          <User key={user.id} user={user}/>
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
