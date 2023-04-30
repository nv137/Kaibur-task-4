import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-body-tertiary border rounded py-5" >
        <div className="container-fluid">
    <a className="navbar-brand shadow rounded" href="#">Task 4- Rest API</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-light btn-lg"to="/">Show All</Link>
    <Link className="btn btn-light btn-lg" to="/addobj">Add Server Object</Link>
    <Link className="btn btn-light btn-lg"to="/delobj">Delete Server Object</Link>
    <Link className="btn btn-light btn-lg"to="/findobj">Find Server Object</Link>

    
  </div>
</nav>
    </div>
  )
}
