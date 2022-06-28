import React from 'react';
import { Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import '../Style/NavigationBar.css'
import MenuIcon from '@mui/icons-material/Menu';
function NavigationBar(props) {
    return (

        <div style={{ borderBottom: '1px solid #e5e5e5', padding: '5px 0', marginTop:'68px' }}>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} maxWidth={'xl'}>
                <div className='btn-navigation' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px', borderRadius: '50%' }}>
                    <HomeIcon style={{ fontSize: '16px' }}></HomeIcon>
                </div>
                <div className='btn-navigation-item'>Thời sự</div>
                <div className='btn-navigation-item'>Góc nhìn</div>
                <div className='btn-navigation-item'>Thế giới</div>
                <div className='btn-navigation-item'>Video</div>
                <div className='btn-navigation-item'>Podcasts</div>
                <div className='btn-navigation-item'>Kinh doanh</div>
                <div className='btn-navigation-item'>Khoa học</div>
                <div className='btn-navigation-item'>Giải trí</div>
                <div className='btn-navigation-item'>Thể thao</div>
                <div className='btn-navigation-item'>Pháp luật</div>
                <div className='btn-navigation-item'>Giáo dục</div>
                <div className='btn-navigation-item'>Sức khỏe</div>
                <div className='btn-navigation-item'>Đời sống</div>
                <div className='btn-navigation-item'>Ý kiến</div>
                <div className='btn-navigation-item'>Tâm sự</div>
                <div className='btn-navigation-item'>Du Lịch</div>
                <div className='btn-navigation-item btn-all'>
                    <p style={{ paddingRight: '5px' }}>Tất cả</p>
                    <MenuIcon className='icon'></MenuIcon>
                </div>

            </Container>
        </div>
    );
}

export default NavigationBar;