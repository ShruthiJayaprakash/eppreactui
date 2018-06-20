import React from 'react';
import { NavLink } from 'react-router-dom'

export default class APEUpload extends React.Component{
    render(){
        return(
            <div>
            <h4>I am APE MODAL contents</h4>
            <input type="file" />
            <NavLink to='/portal' className="nav-link">clickme</NavLink>
        </div>
        )
    }
}
