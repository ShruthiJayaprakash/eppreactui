import React from 'react';

class OLTTableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th><input type="checkbox" /></th>
                <th>Steps</th>
                <th>Details</th>
            </tr>
        )
    }
}

export default OLTTableHeader;