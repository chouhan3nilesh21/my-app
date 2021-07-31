import React from 'react'
import Sidebar from './Sidebar'
import { Route,Switch} from 'react-router-dom'
import AdminPosts from './AdminPosts';
import Users from './Users';

export default function Dashboard() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Sidebar />
        <Switch>
            <Route path="/admin/posts" component={AdminPosts} />
            <Route path="/admin/users" component={Users} />
        </Switch>

        </div>
    )
}
