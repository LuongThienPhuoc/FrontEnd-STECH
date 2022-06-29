import React from 'react';
import { Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import '../Style/NavigationBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import ModalAppBar from './ModalAppBar';
function NavigationBar(props) {
    return (

        <div style={{ borderBottom: '1px solid #e5e5e5', padding: '5px 0', marginTop: '68px' }}>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} maxWidth={'xl'}>
                <div className='btn-navigation' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px', borderRadius: '50%' }}>
                    <HomeIcon style={{ fontSize: '16px' }}></HomeIcon>
                </div>
                <div className='btn-navigation-item'>
                    Thời sự
                    <ModalAppBar></ModalAppBar>
                </div>
                <div className='btn-navigation-item'>
                    Góc nhìn <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Thế giới <ModalAppBar></ModalAppBar>
                </div>
                <div className='btn-navigation-item'>Video <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Podcasts <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Kinh doanh <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Khoa học <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Giải trí <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Thể thao <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Pháp luật <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Giáo dục <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Sức khỏe <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Đời sống <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Ý kiến <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Tâm sự <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item'>Du Lịch <ModalAppBar></ModalAppBar></div>
                <div className='btn-navigation-item btn-all'>
                    <p style={{ paddingRight: '5px' }}>Tất cả</p>
                    <MenuIcon className='icon'></MenuIcon>
                    <ModalAppBar></ModalAppBar>
                </div>

            </Container>
        </div>
    );
}

export default NavigationBar;