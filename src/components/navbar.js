import React from 'react'
import { Link } from 'react-router-dom'

const navbar =()=> {

    return (
      <div><nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/General">NEWSPANDA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link cat" to={"/Business"}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cat" to="/Entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cat" to="/General">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cat" to="/Health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cat" to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cat" to="/Technology">Technology</Link>
            </li>
            </ul>
            </div>
            </div>
            </nav>
            </div>
    )
}

export default navbar