import React from 'react'
import '../Navbar/Navbar.css'
import { useHistory } from 'react-router-dom';

function Sidebar() {

    const history = useHistory();

    return (
        <div className="navbar">
            <h2 onClick={e =>history.push("/")}>Users</h2>
            <h2 onClick={e => history.push("/new")}>Create</h2>
        </div>
    )
}

export default Sidebar
