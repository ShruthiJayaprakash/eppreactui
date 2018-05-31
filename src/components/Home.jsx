import React from 'react';
// import { Link } from 'react-router-dom';
import Parent from './Parent';

class Home extends React.Component {
    render() {
        return (
            // <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
            //     <ul className="nav nav-pills flex-column">
            //         <li className="nav-item">
            //         <Link to='/portal' className="nav-link">Overview <span className="sr-only">(current)</span></Link>
            //         </li>
            //         <li className="nav-item">
            //         <Link to='/about' className="nav-link">Users</Link>
            //         </li>
            //     </ul>
                <Parent />
            // </nav>

        );
    }
}

export default Home;
