import React from 'react'

class OLTTableBody extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Data Plan</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Connection to NMS</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Connection to OLT</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Card Configuration</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Policy Configuration</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>VLAN Configuration</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Profile Configuration</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>EDR Reconcilation</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>ODF Update</td>
                    <td><button className="btn btn-lightgreen">View Details</button></td>
                </tr>
            </tbody>
        )
    }
}

export default OLTTableBody