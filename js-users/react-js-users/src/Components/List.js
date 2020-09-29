import React, { useContext } from 'react'
import '../Components/List.css'
import { ProjectContext } from '../Context/ProjectContext'
import User from '../Components/User'

function List() {

    const { users } = useContext(ProjectContext);

    return (
        <div className="list">
            {users?.map(user => 
                <User key={user.id} user={user}/>
                )}
        </div>
    )
}

export default List
