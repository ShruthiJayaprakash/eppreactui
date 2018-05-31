import React from 'react';
import { Modal } from 'react-bootstrap';
import CreatePortal from '../global/CreatePortal';
import OLTUpload from './OLTUpload';
import APEUpload from './APEUpload';

export default class ModalTemplate extends React.Component {
    render() {
        return (
            <CreatePortal>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.app === 'olt' && 'OLT Master Sheet Upload'}{this.props.app === 'ape' && 'APE Master Sheet Upload'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.app === 'olt' && <OLTUpload app={this.props.app}/>}
                        {this.props.app === 'ape' && <APEUpload />}
                    </Modal.Body>
                </Modal>
            </CreatePortal>
        )
    }
}
