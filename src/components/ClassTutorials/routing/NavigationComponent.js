import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationComponent() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">TopGups</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/posts">Posts</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin">Admin</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}
