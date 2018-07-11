import React from 'react';
import { connect } from 'react-redux';
import NavBarPortal from '../components/includes/NavBarPortal';
import Button from '../components/global/Button';
import OLTTableHeader from '../components/table/OLTTableHeader';
import OLTTableBody from '../components/table/OLTTableBody';
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
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <OLTTableHeader />
                            </thead>
                            <OLTTableBody />
                        </table>
                    </div>
                    <div>
                        <Button clsName="btn btn-white" name="run" value="RUN" />
                        <Button clsName="btn btn-white" name="cancel" value="CANCEL" />
                    </div>
                </section>
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