import React from 'react';



export default function NavBar() {
    return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
             <div className="collapse navbar-collapse" id="navbarColor03">
                 <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                         <a className="nav-link active" href="#">Git Engine
                             <span className="visually-hidden">(current)</span>
                         </a>
                     </li>
                     <li className="nav-item mx-5">
                         <a className="nav-link" href="#">Users</a>
                     </li>
                 </ul>
             </div>
         </nav>
    )
}