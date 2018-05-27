import React from 'react';
import { Link } from 'react-router-dom'

export default class APEUpload extends React.Component{
    render(){
        return(
            <div>
            <h4>I am APE MODAL contents</h4>
            <input type="file" />
            <Link to='/portal' className="nav-link">clickme</Link>
        </div>
        )
    }
}
