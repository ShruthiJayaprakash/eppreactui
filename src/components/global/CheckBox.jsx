import React from 'react';
import { setLocalStorage, getLocalStorage } from '../../helpers/Utility'

class CheckBox extends React.Component {
    constructor(props){
        super()
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        var checklist
        if(this.props.appname === 'olt'){
            checklist = JSON.parse(getLocalStorage("oltCheckedData"))
        } else {
            console.log("i have no name")
        }
        var index = checklist.indexOf(e.target.name);
        if (index !== -1) checklist.splice(index, 1);
        if (e.target.checked) checklist.push(e.target.name)
        setLocalStorage("oltCheckedData",JSON.stringify(checklist))
    }
    render() {
        console.log("{this.props.id}"+ this.props.id)
        return (
            <div className="checkboxes">
                <input
                    id={this.props.id}
                    type="checkbox"
                    name={this.props.name}
                    onChange={this.handleChange}
                    data-name={this.props.appname}
                />
                <label className="green-background" htmlFor={this.props.id}></label>
            </div>
        )
    }
}
export default CheckBox;