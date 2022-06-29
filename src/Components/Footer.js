import React from 'react';
import '../Style/Footer.css'
import { Container, Grid } from '@mui/material'
import Button from './Button';
import EmailIcon from '@mui/icons-material/Email';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer(props) {
    return (
        <Container className='footer' style={{ borderTop: '5px solid #E5E5E5' }} maxWidth={'lg'}>
            <Grid spacing={2}>
                <Grid style={{ display: 'flex' }} xs={12}>
                    <div style={{ width: '15%', paddingLeft: '10px' }}>
                        <p className='footer-title-main'>Trang chủ</p>
                        <p className='footer-title-main'>Video</p>
                        <p className='footer-title-main'>Podcasts</p>
                        <p className='footer-title-main'>Ảnh</p>
                        <p style={{ borderBottom: '1px solid #E5E5E5', paddingBottom: '20px', margin: '0' }} className='footer-title-main'>Infograpphics</p>
                        <p className='footer-title-main'>Mới nhất</p>
                        <p className='footer-title-main'>Xem nhiều</p>
                        <p className='footer-title-main'>Tin nóng</p>
                    </div>
                    <div style={{ width: '15%', paddingLeft: '10px' }}>
                        <p className='footer-title'>Trang chủ</p>
                        <p className='footer-title'>Góc nhìn</p>
                        <p className='footer-title'>Thế giới</p>
                        <p className='footer-title'>Kinh doanh</p>
                        <p className='footer-title'>Giải trí</p>
                    </div>
                    <div style={{ width: '15%', paddingLeft: '10px' }}>
                        <p className='footer-title'>Thể thao</p>
                        <p className='footer-title'>Pháp luật</p>
                        <p className='footer-title'>Giáo dục</p>
                        <p className='footer-title'>Sức khỏe</p>
                        <p className='footer-title'>Đời sống</p>
                        <p className='footer-title'>Du lịch</p>
                    </div>
                    <div style={{ width: '15%', paddingLeft: '10px' }}>
                        <p className='footer-title'>Khoa học</p>
                        <p className='footer-title'>Số hóa</p>
                        <p className='footer-title'>Giáo dục</p>
                        <p className='footer-title'>Xe</p>
                        <p className='footer-title'>Ý kiến</p>
                        <p className='footer-title'>Tâm sự</p>
                        <p className='footer-title'>Hài</p>
                    </div>
                    <div className='footer-line' style={{ width: '15%', paddingLeft: '20px' }}>
                        <p className='footer-title'>Rao vặt</p>
                        <p className='footer-title'>Startup</p>
                        <p className='footer-title'>BNEXPRESS</p>
                        <p className='footer-title'>Vhome</p>
                        <p className='footer-title'>eBox</p>
                        <p className='footer-title'>eWork</p>
                    </div>
                    <div className='footer-line' style={{ width: '25%', paddingLeft: '20px' }}>
                        <p style={{ color: '#757575', fontWeight: '500', fontSize: '15px' }}>Tải ứng dụng</p>
                        <div style={{ display: 'flex' }}>
                            <Button name='VnExpress'></Button>
                            <Button name='International'></Button>
                        </div>
                        <p style={{ color: '#757575', fontWeight: '500', fontSize: '15px' }}>Tải ứng dụng</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', paddingBottom: '0', borderBottom: '1px solid #75757582' }}>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px 10px 0' }}>
                                <EmailIcon></EmailIcon>
                                <p style={{ paddingLeft: '5px', cursor: 'pointer', margin: '0' }}>Tòa soạn</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px 10px 0' }}>
                                <CoPresentIcon></CoPresentIcon>
                                <p style={{ paddingLeft: '5px', cursor: 'pointer', margin: '0' }}>Tòa soạn</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px 10px 0' }}>
                                <PriceChangeIcon></PriceChangeIcon>
                                <p style={{ paddingLeft: '5px', cursor: 'pointer', margin: '0' }}>Tòa soạn</p>
                            </div>
                        </div>
                        <p style={{ color: '#757575', fontWeight: '500', fontSize: '15px' }}>Đường dây nóng</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div >
                                <p style={{ fontWeight: '600', fontSize: '16px', margin: '0' }}>0387.527.010</p>
                                <p style={{ cursor: 'pointer', margin: '0', fontSize: '12px' }}>Hà nội</p>
                            </div>
                            <div >
                                <p style={{ fontWeight: '600', fontSize: '16px', margin: '0' }}>0387.527.010</p>
                                <p style={{ cursor: 'pointer', margin: '0', fontSize: '12px' }}>TPHCM</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid style={{ padding: '10px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid #e5e5e5', borderTop: '1px solid #bdbdbd' }} xs={12}>
                    <div style={{ display: 'flex' }}>
                        <p style={{ paddingRight: '10px', fontSize: '14px', fontWeight: '500' }}>Báo điện tử</p>
                        <img alt='Logo' src='/logo.svg'></img>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ paddingRight: '10px', fontSize: '14px', fontWeight: '500', color: '#757575' }}>Theo dõi VnExpress trên</p>
                        <div className='footer-icon facebook'>
                            <FacebookIcon className='icon facebook'></FacebookIcon>
                        </div>
                        <div className='footer-icon youtube'>
                            <YouTubeIcon className='icon youtube'></YouTubeIcon>
                        </div>
                        <div className='footer-icon twitter'>
                            <TwitterIcon className='icon twitter'></TwitterIcon>
                        </div>
                    </div>
                </Grid>
                <Grid style={{ display: 'flex', marginTop: '20px' }} xs={12}>
                    <div style={{ width: '33.33333%', padding: '10px' }}>
                        <div style={{ fontWeight: '600', marginBottom: '5px' }}>Báo tiếng Việt nhiều người xem nhất</div>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>Thuộc Bộ Khoa học Công nghệ</div>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</div>
                    </div>
                    <div style={{ width: '33.33333%', padding: '10px' }}>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>Tổng biên tập: Phạm Hiếu</div>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</div>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>Điện thoại: 024 7300 8899 - máy lẻ 4500</div>
                    </div>
                    <div style={{ width: '33.33333%', padding: '10px' }}>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;