import React, { useContext, useState, useEffect } from "react";
import "../Components/List.css";
import { ProjectContext } from "../Context/ProjectContext";
import User from "../Components/User";
import Button from "@material-ui/core/Button";

function List() {

  const { currentUsers, users, page } = useContext(ProjectContext);

  const btnPreviousDisabled = () => {
      return page.start === 0 ? true : false;
  };

  const btnNextDisabled = () => {
    return page.last !== users?.length ? false : true;
  };

  return (
    <div className="list">
      <div className="list-userlist">
        {currentUsers?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <div className="list-buttons">
        <Button disabled={btnPreviousDisabled()} variant="contained" color="primary">
          Previous
        </Button>
        <Button disabled={btnNextDisabled()} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default List;
