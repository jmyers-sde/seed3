import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'
import Books from './components/Books'
import About from './components/About'
import Home from './components/Home'
import './App.css'



export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="navBar sticky-top m-auto">
                    <ul className="mb-0">
                        <li className="navItem"><NavLink exact to="/">Home</NavLink></li>
                        <li className="navItem"><NavLink to="/books">Books</NavLink></li>
                        <li className="navItem"><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>

                <div className="pages">
                    <Route exact path="/" component={Home} />
                    <Route path="/books" component={Books} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        )
    }
}