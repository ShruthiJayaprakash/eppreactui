import React from 'react';
import CheckBox from '../global/CheckBox';

class OLTTableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th><CheckBox id="oltcheckall" name="ALL" appname="olt"
                    /></th>
                <th>Steps</th>
                <th>Details</th>
            </tr>
        )
    }
}

export default OLTTableHeader;