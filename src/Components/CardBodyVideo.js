import React from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function CardBodyVideo(props) {
    return (
        <div className='card-body-video' style={{ borderBottom: '1px solid #e5e5e5' }}>
            <img alt='Ảnh' src='https://znews-photo.zingcdn.me/w660/Uploaded/aobhuua/2021_09_06/mercedes_benz_concept_eqg_1.jpg'></img>
            <div style={{ padding: '0 10px' }}>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Keo dáng chống dính đinh lốp ô tô</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginRight: '15px' }}>Xe</div>
                    <ChatBubbleIcon style={{ fontSize: '14px', paddingRight: '5px', color: '#757575' }} className='icon'></ChatBubbleIcon>
                    <p style={{ fontSize: '13px', color: '#087cce' }}>10</p>
                </div>
            </div>
        </div>
    );
}

export default CardBodyVideo;