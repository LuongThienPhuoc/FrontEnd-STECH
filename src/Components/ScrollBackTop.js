import React from 'react';
import '../Style/ScrollBackTop.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function ScrollBackTop(props) {

    const handleClickScrollBack = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div onClick={handleClickScrollBack} className='scroll-back-top'>
            <ArrowUpwardIcon className='icon-scroll-back'></ArrowUpwardIcon>
        </div>
    );
}

export default ScrollBackTop;