import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchData } from '../../actions/index';
import Button from '../global/Button';
// import FileInput from '../global/FileInput'
import * as constant from '../../helpers/constants';
import { API_HOST, API_PATH } from '../../helpers/Config';
import FileBase64 from 'react-file-base64';

class OLTUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReadyForOLTUpload: false,
            files: []
        };
        // this.handlefile = this.handlefile.bind(this)
        this.handlebuttonclick = this.handlebuttonclick.bind(this)
    }
    handlebuttonclick(e){
        console.log("in handle button click")
        console.log("e.value" + e.target.value)
    }
    // handlefile(e){
    //     console.log("ïnside handlefile")
    //     this.setState({ this.state.files: files })
    //     // console.log("e.target.files[0]:"+ JSON.stringify(e.target.files[0]))
    //     // this.setState({file:e.target.files[0]})
    //     // console.log("file"+ this.state.file)
    // }
    getFiles(files){
        console.log(files[0])
        console.log(files[0].base65.split[','][1])
        debugger
        this.setState({ files: files })
      }
    render() {
        console.log("dis" + this.props.isOLT)
        console.log("file"+ this.state.files)
        debugger
        return (
            <section>
                <div>
                    {/* <FileInput inputType="file" onChange={this.handlefile} idName="oltexcelupload"/> */}
                    <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
                </div>
                <div className="uploadbuttons">
                    <Button inputType="text" clsName="btn btn-green rightradius" name="new" value="NEW" onClick={this.handlebuttonclick}/>
                    <Button inputType="text" clsName="btn btn-green leftradius" name="expansion" value="EXPANSION" onClick={this.handlebuttonclick}/>
        { this.state.isReadyForOLTUpload && <Button inputType="submit" clsName="btn btn-green floatright" name="submit" value="Submit" onClick={this.props.oltexcelupload} /> }
                </div>
                {this.props.isOLT && <Redirect to='/olt'/>}
                {/* <Redirect to='/olt'/> */}
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