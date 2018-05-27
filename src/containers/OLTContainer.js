import React from 'react';
import { connect } from 'react-redux';
import NavBarPortal from '../components/includes/NavBarPortal';
import Button from '../components/global/Button';
// import { getLocalStorage } from '../helpers/Utility';

class OLTContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
 
    render() {
        return (
           <main className="olt-container"> 
               <NavBarPortal />
           <section>
               <header className="olt-wrapper-header"><h4>OLT COMMISSIONING</h4></header>  
            </section> 
            <Button />
            </main>
        )
    }
}
const mapStateToProps = state => {
    return {
    }
};

export default connect(
    mapStateToProps
)(OLTContainer)