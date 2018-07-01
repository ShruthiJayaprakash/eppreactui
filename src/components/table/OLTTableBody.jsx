import React from 'react'

class OLTTableBody extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        <div className="checkboxes">
                            <input id="dataplancheckbox" type="checkbox" />
                            <label className="green-background" htmlFor="dataplancheckbox"></label>
                        </div>
                    </td>
                    <td>Data Plan</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="nmscheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="nmscheckbox"></label>
                    </div>
                    </td>
                    <td>Connection to NMS</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="oltcheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="oltcheckbox"></label>
                    </div></td>
                    <td>Connection to OLT</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="cardcheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="cardcheckbox"></label>
                    </div></td>
                    <td>Card Configuration</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="policycheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="policycheckbox"></label>
                    </div></td>
                    <td>Policy Configuration</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="vlancheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="vlancheckbox"></label>
                    </div></td>
                    <td>VLAN Configuration</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="profilecheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="profilecheckbox"></label>
                    </div></td>
                    <td>Profile Configuration</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="edrcheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="a"></label>
                    </div></td>
                    <td>EDR Reconcilation</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
                <tr>
                    <td><div className="checkboxes">
                        <input id="odfcheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="odfcheckbox"></label>
                    </div></td>
                    <td>ODF Update</td>
                    <td><button className="btn btn-lightgreen"><i className="fa fa-plus-square"></i> View Details</button></td>
                </tr>
            </tbody>
        )
    }
}

export default OLTTableBody