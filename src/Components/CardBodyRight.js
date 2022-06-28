import React from 'react';
import '../Style/BodyRight.css'

function CardBodyRight(props) {
    return (
        <div className='card-body-right'>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='card-body-right__btn' style={{ fontSize: '20px', fontWeight: '600', borderBottom: '1px solid #9f224e', paddingBottom: '5px', marginRight: '15px' }}>Kinh doanh</div>
                    <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Quốc tế</div>
                    <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Doanh nghiệp</div>
                    <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Chứng khoán</div>
                    <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Bất động sản</div>
                    <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Bảo hiểm</div>
                </div>
                <div className='card-body-right__img' style={{ display: 'flex', borderBottom: '1px solid  #e5e5e5', paddingBottom: '15px' }}>
                    <div style={{ width: '33.333%' }}>
                        <img alt='Ảnh' src='http://topdiemden.com/wp-content/uploads/2019/10/bitexco.jpg?x72370'></img>
                    </div>
                    <div style={{ width: '33.333%', borderRight: '1px solid  #e5e5e5', cursor: 'pointer' }}>
                        <div style={{ padding: '0 15px' }}>
                            <p style={{ margin: '0', fontSize: '16px', lineHeight: '22px', fontWeight: '600', marginBottom: '10px' }}>Giá thuê văn phòng TP HCM về mức trước đại dịch</p>
                            <p style={{ margin: '0', fontSize: '13px', lineHeight: '18px' }}>Thiếu hụt nguồn cung mới khiến tỷ lệ văn phòng còn trống ở TP HCM xuống thấp, đưa giá thuê tăng lên, bằng mức trước đại dịch. </p>
                        </div>
                    </div>
                    <div style={{ width: '33.333%', cursor: 'pointer' }}>
                        <div style={{ padding: '0 15px' }}>
                            <p style={{ margin: '0', fontSize: '16px', lineHeight: '22px', fontWeight: '600', marginBottom: '10px' }}>Giá thuê văn phòng TP HCM về mức trước đại dịch</p>
                            <p style={{ margin: '0', fontSize: '13px', lineHeight: '18px' }}>Thiếu hụt nguồn cung mới khiến tỷ lệ văn phòng còn trống ở TP HCM xuống thấp, đưa giá thuê tăng lên, bằng mức trước đại dịch. </p>
                        </div>
                    </div>
                </div>
                <div className='card-body-right__footer'>
                    <div style={{ width: '33.333%', cursor: 'pointer' }}>
                        <ul style={{ padding: '0 15px' }}>
                            <li style={{ margin: '0', fontSize: '16px', lineHeight: '22px', fontWeight: '600', marginBottom: '10px', listStyleType:'circle' }}> Giá thuê văn phòng TP HCM về mức trước đại dịch</li>
                        </ul>
                    </div>
                    <div style={{ width: '33.333%', cursor: 'pointer' }}>
                        <ul style={{ padding: '0 15px' }}>
                            <li style={{ margin: '0', fontSize: '16px', lineHeight: '22px', fontWeight: '600', marginBottom: '10px', listStyleType:'circle' }}> Giá thuê văn phòng TP HCM về mức trước đại dịch</li>
                        </ul>
                    </div>
                    <div style={{ width: '33.333%', cursor: 'pointer' }}>
                        <ul style={{ padding: '0 15px' }}>
                            <li style={{ margin: '0', fontSize: '16px', lineHeight: '22px', fontWeight: '600', marginBottom: '10px', listStyleType:'circle' }}> Giá thuê văn phòng TP HCM về mức trước đại dịch</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default CardBodyRight;