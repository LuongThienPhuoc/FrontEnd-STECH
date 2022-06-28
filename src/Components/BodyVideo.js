import React from 'react';
import '../Style/BodyVideo.css'
import CardBodyVideo from './CardBodyVideo';
function BodyVideo(props) {
    return (
        <div className='body-video'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div className='card-body-right__btn' style={{ fontSize: '20px', fontWeight: '600', borderBottom: '1px solid #9f224e', paddingBottom: '5px', marginRight: '15px' }}>Kinh doanh</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Quốc tế</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Doanh nghiệp</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Chứng khoán</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Bất động sản</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Bảo hiểm</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '70%' }}>
                    <iframe width="100%" style={{ height: '35vw' }} src="https://www.youtube.com/embed/S7ElVoYZN0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p style={{ fontSize: '25px', fontWeight: '500' }}>Keo tráng chống dính đinh lốp ô tô giá tiền triệu</p>
                </div>
                <div style={{ width: '30%', overflow: 'auto', overflowX: 'hidden', padding: '0 0 0 20px', height: '40vw' }}>
                    <CardBodyVideo></CardBodyVideo>
                    <CardBodyVideo></CardBodyVideo>
                    <CardBodyVideo></CardBodyVideo>
                    <CardBodyVideo></CardBodyVideo>
                    <CardBodyVideo></CardBodyVideo>
                    <CardBodyVideo></CardBodyVideo>
                    <CardBodyVideo></CardBodyVideo>
                </div>
            </div>
        </div>
    );
}

export default BodyVideo;