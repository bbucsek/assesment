import React from 'react'
import '../Components/Navbar.css'
import { useHistory } from 'react-router-dom';

function Sidebar() {

    const history = useHistory();

    return (
        <div className="navbar">
            <h2 onClick={e =>history.push("/")}>List</h2>
            <h2 onClick={e => history.push("/new")}>New</h2>
        </div>
    )
}

export default Sidebar