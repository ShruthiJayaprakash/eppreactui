import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchData } from '../../actions/index';
import Button from '../global/Button';
import * as constant from '../../helpers/constants';
import { API_HOST, API_PATH } from '../../helpers/Config';
import { setLocalStorage, getLocalStorage, generateSesssionID } from '../../helpers/Utility'
import FileBase64 from 'react-file-base64';

class OLTUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReadyForOLTUpload: false,
            files: [],
            activityType: 'new'
        };
        this.getFiles = this.getFiles.bind(this)
        this.handlebuttonclick = this.handlebuttonclick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handlebuttonclick(e) {
        console.log("in handle button click")
        console.log("e.value :" + e.target.name)
        this.setState({ activityType: e.target.name })
    }
    getFiles(files) {
        console.log(files.name + " : filename")
        let base64 = files.base64.split(',')[1]
        this.setState({ files: base64, isReadyForOLTUpload: true })
    }
    handleSubmit(){
        setLocalStorage("activityType",this.state.activityType)
        //generate session id for olt
        setLocalStorage("oltSession",generateSesssionID())
        let params = {
            "userName": this.props.user,
            "file": this.state.files,
            "session": getLocalStorage("oltSession"),
            "activityType": this.state.activityType
        }
        this.props.oltexcelupload(params)
    }
    render() {
        console.log("isOLT" + this.props.isOLT)
        console.log("file in state : " + this.state.files)
        console.log("file in activityType : " + this.state.activityType)
        return (
            <section>
                <div>
                    {/* <FileInput inputType="file" onChange={this.handlefile} idName="oltexcelupload"/> */}
                    <FileBase64
                        multiple={false}
                        onDone={this.getFiles} />
                </div>
                <div className="uploadbuttons">
                    <Button inputType="text" clsName={`btn ${this.state.activityType === 'new' ? 'btn-green' : 'btn-white'} rightradius`} name="new" value="new" onClick={this.handlebuttonclick} />
                    <Button inputType="text" clsName={`btn ${this.state.activityType === 'expansion' ? 'btn-green' : 'btn-white'} leftradius`} name="expansion" value="expansion" onClick={this.handlebuttonclick} />
                    {(this.state.isReadyForOLTUpload && (this.state.activityType === 'new' || this.state.activityType === 'expansion') )&& <Button inputType="submit" clsName="btn btn-white floatright" name="submit" value="Submit" onClick={this.handleSubmit} />}
                </div>
                {/* {this.props.isOLT && <Redirect to='/olt' />} */}
                <Redirect to='/olt'/>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        isOLT: state.oltuploaddata.isOLT,
        user: state.logindata.user
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        oltexcelupload: (params) => {
            setLocalStorage("oltCheckedData",JSON.stringify([]))
            console.log("params :"+ params.userName)
            console.log("params :"+ params.activityType)
            console.log("params :"+ params.session)
            console.log("ownProps value in our comp : " + JSON.stringify(ownProps))
            dispatch(fetchData(
                API_HOST.OLT + API_PATH.OLT + 'oltSubmitDataPlan',
                constant.oltexcelupload,
                'POST',
                params
            ))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OLTUpload)