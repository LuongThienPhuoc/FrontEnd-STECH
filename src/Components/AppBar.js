import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import '../Style/AppBar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const ResponsiveAppBar = () => {

    const renderTime = () => {
        let NowTime = new Date()
        let day = 'CN';
        switch (NowTime.getDay) {
            case 0:
                day = 'CN'
                break;
            case 1:
                day = 'Thứ 2'
                break;
            case 2:
                day = 'Thứ 3'
                break;
            case 3:
                day = 'Thứ 4'
                break;
            case 4:
                day = 'Thứ 5'
                break;
            case 5:
                day = 'Thứ 6'
                break;
            case 6:
                day = 'Thứ 7'
                break;
            default:
                day = 'CN';
                break;
        }

        return day + ', ' + NowTime.getDate() + '/' + NowTime.getMonth() + '/' + NowTime.getFullYear()
    }

    return (
        <AppBar style={{boxShadow: 'none', borderBottom:'1px solid #e5e5e5'}} color='transparent' position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <img alt='Logo' src='/logo.svg'></img>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        <div className='appbar-time'>{renderTime()}</div>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems:'center ' }}>
                        <div className='btn'  style={{ display: 'flex', alignItems: 'center', color: '#757575', marginRight:'15px' }}>
                            <AccessTimeIcon style={{fontSize: '18px'}}></AccessTimeIcon>
                            <p style={{paddingLeft:'5px'}}>Mới nhất</p>
                        </div>
                        <div className='btn'  style={{ display: 'flex', alignItems: 'center', color: '#757575', marginRight:'30px' }}>
                            <AccessTimeIcon style={{fontSize: '18px'}}></AccessTimeIcon>
                            <p style={{paddingLeft:'5px'}}>Mới nhất</p>
                        </div>
                        <div className='btn-search' style={{ display: 'flex', alignItems: 'center', color: '#757575' }}>
                            <input type={'text'} placeholder="Tìm kiếm"></input>
                            <SearchIcon></SearchIcon>
                        </div>
                        <div className='btn-login' style={{ display: 'flex', alignItems: 'center', color: '#757575' }}>
                            <PersonIcon></PersonIcon>
                            <p style={{ fontSize: '15px', fontWeight: '500', paddingLeft: '8px' }}>
                                Đăng nhập
                            </p>
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
