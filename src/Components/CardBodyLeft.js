import React from 'react';
import '../Style/BodyLeft.css'

function CardBodyLeft(props) {
    return (
        <div style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '20px', marginBottom: '10px', cursor:'pointer' }}>
            <p className='card-title'>
                Chuyên gia Pau FC: 'Quang Hải có thể đá hộ công'
            </p>
            <div className='card-body'>
                <img alt='Ảnh' src='https://cdn-img.thethao247.vn//storage/files/quangduong/2022/06/28/29012021-quang-hai-afc-1-1656385535.jpg'></img>
                <p style={{ margin: '0', paddingLeft: '10px', fontSize: '14px' }}>Sản phẩm ít xuất hiện tại các chuỗi bán lẻ, giá trị thương hiệu không cao, lợi nhuận thấp là tình trạng chung của các doanh nghiệp điện máy Việt hiện</p>
            </div>
        </div>
    );
}

export default CardBodyLeft;