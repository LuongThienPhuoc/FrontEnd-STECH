import React from 'react';
import '../Style/Body.css'
import { Grid, Avatar } from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function BodyHeader(props) {
    return (
        <Grid xs={9}>
            <div className='body-header'>
                <img alt='Ảnh' src='https://cdn-img.thethao247.vn//storage/files/quangduong/2022/06/28/29012021-quang-hai-afc-1-1656385535.jpg'></img>
                <div className='content' style={{ backgroundColor: '#f7f7f7', cursor: 'pointer' }}>
                    <p style={{ fontSize: '22px', fontWeight: '600', margin: '0', lineHeight: '30px' }}>Nga yêu cầu Ukraina đầu hàng</p>
                    <p className='description' style={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>
                        Điện Kremlin tuyên bố chiến dịch quân sự của nước này ở Ukraine sẽ kết thúc ngay khi Kiev lệnh cho quân đội hạ vũ khí đầu hàng.
                        Điện Kremlin tuyên bố chiến dịch quân sự của nước này ở Ukraine sẽ kết thúc ngay khi Kiev lệnh cho quân đội hạ vũ khí đầu hàng.
                        Điện Kremlin tuyên bố chiến dịch quân sự của nước này ở Ukraine sẽ kết thúc ngay khi Kiev lệnh cho quân đội hạ vũ khí đầu hàng.
                    </p>
                    <div className='body-header__type' style={{ display: 'flex' }}>
                        <div >Thế giới</div>
                        <ChatBubbleIcon className='icon'></ChatBubbleIcon>
                        <p style={{ fontSize: '13px', color: '#087cce' }}>10</p>
                    </div>
                </div>
            </div>
            <div className='body-footer'>
                <div style={{ width: '70%', display: 'flex', borderRight: '3px solid #e5e5e5' }}>
                    <div style={{ paddingRight: '20px', width: '50%', cursor: 'pointer' }}>
                        <p style={{ fontSize: '18px', fontWeight: '600', margin: '0', lineHeight: '25px' }}>Doanh nghiệp điện máy trong nước kinh doanh èo ruột</p>
                        <p style={{ fontSize: '13px', fontWeight: '500' }}>Sản phẩm ít xuất hiện tại các chuỗi bán lẻ, giá trị thương hiệu không cao, lợi nhuận thấp là tình trạng chung của các doanh nghiệp điện máy Việt hiện</p>
                    </div>
                    <div style={{ paddingRight: '20px', width: '50%', cursor: 'pointer' }}>
                        <p style={{ fontSize: '18px', fontWeight: '600', margin: '0', lineHeight: '25px' }}>Ukaraina nói Nga bắt thị trưởng Kherson</p>
                        <p style={{ fontSize: '13px', fontWeight: '500' }}>Sản phẩm ít xuất hiện tại các chuỗi bán lẻ, giá trị thương hiệu không cao, lợi nhuận thấp là tình trạng chung của các doanh nghiệp điện máy Việt hiện</p>
                    </div>
                </div>
                <div style={{ width: '33%', paddingLeft: '15px' }}>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#9f224e', marginBottom: '10px' }}>Góc nhìn</div>
                    <p style={{ fontSize: '18px', fontWeight: '600', margin: '0', lineHeight: '25px' }}>Ukaraina nói Nga bắt thị trưởng Kherson</p>
                    <p style={{ fontSize: '13px', fontWeight: '500' }}>Sản phẩm ít xuất hiện tại các chuỗi bán lẻ, giá trị thương hiệu không cao, lợi nhuận thấp là tình trạng chung của các doanh nghiệp điện máy Việt hiện</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <div>
                            <div style={{ color: '#757575', fontStyle: 'italic', fontWeight: '500', fontSize: '16px' }}>Lương Thiện Phước</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ChatBubbleIcon style={{ fontSize: '14px', paddingRight: '5px', color: '#757575' }} className='icon'></ChatBubbleIcon>
                                <p style={{ fontSize: '13px', color: '#087cce' }}>10</p>
                            </div>

                        </div>
                        <Avatar>TP</Avatar>
                    </div>
                </div>
            </div>
        </Grid>
    );
}

export default BodyHeader;