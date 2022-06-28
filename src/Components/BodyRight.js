import React from 'react';
import '../Style/BodyRight.css'
import CardBodyRight from './CardBodyRight';
function BodyRight(props) {
    return (
        <div style={{ paddingLeft: '15px' }}>
            <CardBodyRight></CardBodyRight>
            <CardBodyRight></CardBodyRight>
            <CardBodyRight></CardBodyRight>
            <CardBodyRight></CardBodyRight>
            <CardBodyRight></CardBodyRight>
        </div>
    );
}

export default BodyRight;