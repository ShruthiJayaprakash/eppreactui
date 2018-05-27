import React from 'react';
import { connect } from 'react-redux';
import ModalTemplate from '../components/modalcontents/ModalTemplate'
import cpnimg from '../resources/images/portal/cpn.png';
import oltimg from '../resources/images/portal/olt.png';
import apeimg from '../resources/images/portal/ape.png';
import NavBarPortal from '../components/includes/NavBarPortal';
import { getLocalStorage } from '../helpers/Utility';

class PortalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            app: 'none'
        };
    }
    handleClose() {
        this.setState({ show: false });
        this.setState({ app: 'none' });
    }
    handleShow(e) {
        this.setState({ show: true });
        switch (e.target.id) {
            case 'olt':
                this.setState({ app: 'olt' });
                break;
            case 'ape':
                this.setState({ app: 'ape' });
                break;
            default:
                console.log("nothing to be set");
        }
    }

    render() {
        console.log(getLocalStorage("isLoggedIn") + " : isLoggedIn in get localstorage in portala")
        console.log(this.props.user + " this.props.user")
        console.log(this.props.isEligibleForCPNUpload + " this.props.isEligibleForCPNUpload")
        console.log(this.props.team + " this.props.team")

        return (
            <div>
                {this.props.user && getLocalStorage("isLoggedIn") ? <main className="portal-container">
                    <section className="portal-background"></section>
                    <NavBarPortal />
                    <section>
                        <div className="portal-row-container">
                            <div className="portal-row-img">
                                <a>
                                    <img src={oltimg} alt="" id="olt" className="img-fluid" onClick={this.handleShow} />
                                </a>
                            </div>
                            <div className="portal-row-img">
                                <a>
                                    <img src={apeimg} alt="" id="ape" className="img-fluid" onClick={this.handleShow} />
                                </a>
                            </div>
                            <div className="portal-row-img">
                                <a>
                                    <img src={cpnimg} alt="" id="cpn" className="img-fluid" onClick={this.handleShow} />
                                </a>
                            </div>
                            {this.state.show && <ModalTemplate show={this.state.show} app={this.state.app} onHide={this.handleClose} />}
                        </div>
                    </section>
                </main> : null}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.logindata.user,
        team: state.logindata.team,
        isEligibleForCPNUpload: state.logindata.isEligibleForCPNUpload,
        isOLT: state.oltuploaddata.isOLT
    }
};

export default connect(
    mapStateToProps
)(PortalContainer)