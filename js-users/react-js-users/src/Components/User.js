import React from 'react'
import '../Components/User.css'

function User({ user }) {
    return (
        <div>
            {user.first_name}
        </div>
    )
}

export default User
