import React from 'react';
import '../Style/AppBar.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Button({ name }) {
    return (
        <div className='btn' style={{ display: 'flex', alignItems: 'center', color: '#757575', marginRight: '15px' }}>
            <AccessTimeIcon style={{ fontSize: '18px' }}></AccessTimeIcon>
            <p style={{ paddingLeft: '5px' }}>{name}</p>
        </div>
    );
}

export default Button;