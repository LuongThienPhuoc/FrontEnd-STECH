import React from 'react';
import '../Style/BodyBox.css'
function BodyBox(props) {
    return (
        <div className='body-box dulich'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div className='card-body-right__btn' style={{ fontSize: '18px', fontWeight: '600', borderBottom: '1px solid #9f224e', paddingBottom: '5px', marginRight: '15px' }}>Du lịch</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Điểm đến</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Ẩm thực</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Dấu chân</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Tư vấn</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Cẩm nang</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Ảnh</div>
                <div className='card-body-right__btn' style={{ marginRight: '15px', fontSize: '13px' }}>Ăn và chơi</div>
            </div>
            <div className='body-box-content'>
                <div style={{ display: 'flex', flexDirection: 'column', width: '45%', boxSizing: 'border-box', paddingRight: '20px', borderRight: '1px solid #e5e5e5' }}>
                    <img src='https://i1-dulich.vnecdn.net/2022/06/28/4-1656409435-1656409443-1221-1656409512.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Tik1mnw3TCvcNYn0hQgaoQ' alt='Ảnh'></img>
                    <p style={{ fontWeight: '600', fontSize: '23px' }}>Mẹo không bị móc túi nơi trời Âu của cô gái Hải phỏng</p>
                    <p style={{ marginTop: '0', fontWeight: '400', lineHeight: '18px' }}>
                        Phượng Trần, làm kinh doanh, chia sẻ bí quyết không gặp lừa đảo, móc túi trong chuyến du lịch tự túc 14 ngày tới Pháp - Italy và Áo.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', boxSizing: 'border-box', padding: '10px 20px',borderRight: '1px solid #e5e5e5' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #e5e5e5', marginBottom: '20px' }}>
                        <img src='https://i1-dulich.vnecdn.net/2022/06/29/hoian-1656486794-4966-1656489662.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=Nozk_AEZWF0rY5UHEuB-Fg' alt='ảnh'></img>
                        <p style={{ fontWeight: '600', fontSize: '18px' }}>Hội An vào top điểm đến tháng 7</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <img src='https://i1-dulich.vnecdn.net/2022/06/29/4-copy-jpg-1656479011-1656479221-1656479235.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=lsu7HMTwM8MKnYwlOhSFnQ' alt='ảnh'></img>
                        <p style={{ fontWeight: '600', fontSize: '18px' }}>Lễ hội ẩm thực đường phố bên sông Hương</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '30%', boxSizing: 'border-box', padding: '10px 20px' }}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center',  borderBottom: '1px solid #e5e5e5', marginBottom:'10px'}}>
                        <p style={{ fontWeight: '600', fontSize: '18px' }}>Đến Cam Bình check-in với hải đăng 'tí hon'</p>
                        <img height={70} src='https://i1-dulich.vnecdn.net/2022/06/27/hingcambnh01-1656332186-165633-7725-1159-1656344484.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=y6A8pErHmH86AJ2HvrwkeA' alt='Ảnh'></img>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center',  borderBottom: '1px solid #e5e5e5', marginBottom:'10px'}}>
                        <p style={{ fontWeight: '600', fontSize: '18px' }}>Bốn ngày khám phá Huế của gia đình 9 người</p>
                        <img height={70} src='https://i1-dulich.vnecdn.net/2022/06/29/7bf07c9248bc8be2d2ad-6882-1656-8948-1121-1656472430.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=3wwPiLXSDWMNlLNzZ8QUrQ' alt='Ảnh'></img>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center',  borderBottom: '1px solid #e5e5e5', marginBottom:'10px'}}>
                        <p style={{ fontWeight: '600', fontSize: '18px' }}>Cắm trại trốn nóng ở Thái Nguyên</p>
                        <img height={70} src='https://i1-dulich.vnecdn.net/2022/06/28/cam-trai-thai-nguyen-4-1656410387.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=cbTRUojpClFlUWgpJXe89A' alt='Ảnh'></img>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center',  borderBottom: '1px solid #e5e5e5', marginBottom:'10px'}}>
                        <p style={{ fontWeight: '600', fontSize: '18px' }}>Ba bài học KOL rút ra sau khi đi khắp thế giới</p>
                        <img height={70} src='https://i1-dulich.vnecdn.net/2022/06/22/httpcdncnncomcnnnextdamassets2-6245-8702-1655909896.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=i1fbKyh5CiqPWAd9Iviaeg' alt='Ảnh'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyBox;