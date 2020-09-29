import React from 'react'
import '../Components/Sidebar.css'
import { useHistory } from 'react-router-dom';

function Sidebar() {

    const history = useHistory();

    return (
        <div className="sidebar">
            <h2 onClick={e =>history.push("/")}>List</h2>
            <h2 onClick={e => history.push("/new")}>New</h2>
            <h2 onClick={e => history.push("/edit")}>Edit</h2>
        </div>
    )
}

export default Sidebar
