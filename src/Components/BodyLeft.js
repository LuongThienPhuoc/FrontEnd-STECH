import React from 'react';
import '../Style/BodyLeft.css'
import CardBodyLeft from './CardBodyLeft';
function BodyLeft(props) {
    return (
        <div style={{ paddingRight: '10px', borderRight: '1px solid #e5e5e5'}}>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyLeft></CardBodyLeft>
        </div>
    );
}

export default BodyLeft;