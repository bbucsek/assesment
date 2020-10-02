import React, { useContext, useState, useEffect } from "react";
import "../Components/List.css";
import { ProjectContext } from "../Context/ProjectContext";
import User from "../Components/User";
import Button from "@material-ui/core/Button";
import { VerifiedUserSharp } from "@material-ui/icons";
import CircularProgress from '@material-ui/core/CircularProgress';

function List() {
  const { users, page, setPage, currentUsers, setCurrentUsers } = useContext(
    ProjectContext
  );
  const [progress] = useState(10);


  const btnPreviousDisabled = () => {
    return page.start === 0 ? true : false;
  };

  const btnNextDisabled = () => {
    return page.end === users?.length ? true : false;
  };

/*   useEffect(() => {
    async function fetchUsers() {
      let nextUsers = [];
      for (let i = page.start; i < page.end; i++) {
        nextUsers.push(users[i]);
      }
      setCurrentUsers(nextUsers)
    }
    fetchUsers();
  }, [users]); */

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
    let start = page.start + 10 >= users.length - 10 ? users.length -10 : page.start + 10;
    let end = page.end + 10 >= users.length ? users.length : page.end + 10;
    setPage({
      start: start,
      end: end,
    });
    
  };

  const previousPage = () => {
    let start = page.start - 10 <= 0 ? 0 : page.start -10;
    let end = page.end - 10 < 10 ? 10 : page.end - 10;
    setPage({
      start: start,
      end: end,
    });
  };

  if (!currentUsers) {
    return (
      <div className="list-loading">
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
