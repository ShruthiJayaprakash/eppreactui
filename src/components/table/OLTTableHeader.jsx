import React from 'react';

class OLTTableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th><div className="checkboxes">
                        <input id="checkallcheckbox" type="checkbox" />
                        <label className="green-background" htmlFor="checkallcheckbox"></label>
                    </div></th>
                <th>Steps</th>
                <th>Details</th>
            </tr>
        )
    }
}

export default OLTTableHeader;