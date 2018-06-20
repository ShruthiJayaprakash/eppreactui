import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchData } from '../../actions/index';
import Button from '../global/Button';
import * as constant from '../../helpers/constants';
import { API_HOST, API_PATH } from '../../helpers/Config';

class OLTUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'sdassd'
        };
    }
    render() {
        console.log("dis" + this.props.isOLT)
        return (
            <section>
                <div>
                    <input type="file" />
                </div>
                <div className="uploadbuttons">
                    <Button inputType="text" clsName="btn btn-green rightradius" name="new" value="NEW" />
                    <Button inputType="text" clsName="btn btn-green leftradius" name="expansion" value="EXPANSION" />

                    <Button inputType="submit" clsName="btn btn-green floatright" name="submit" value="Submit" onClick={this.props.oltexcelupload} />
                </div>
                {this.props.isOLT && <Redirect to='/olt'/>}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        isOLT: state.oltuploaddata.isOLT
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        oltexcelupload: () => {
            console.log("m i here in dispatch?")
            // console.log("own state in our comp : " + state.data)
            console.log("ownProps value in our comp : " + JSON.stringify(ownProps))
            dispatch(fetchData(
                API_HOST.CPN + API_PATH.CPN + 'getAllLinks',
                constant.oltexcelupload,
                'POST'
            ))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OLTUpload)