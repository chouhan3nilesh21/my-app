
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
           <ul>
               <li>
                   <Link to="/admin/posts">Admin Posts</Link>
               </li>
               <li>
                   <Link to="/admin/users">Users</Link>
               </li>
           </ul>
        </div>
    )
}



