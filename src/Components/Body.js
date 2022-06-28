import React from 'react';
import '../Style/Body.css'
import { Container, Grid } from '@mui/material'
import BodyHeader from './BodyHeader'
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BodyVideo from './BodyVideo'
function Body(props) {
    return (
        <Container style={{ marginTop: '40px', marginBottom: '40px' }} maxWidth={'lg'}>
            <Grid style={{ borderBottom: '3px solid #e5e5e5', paddingBottom: '20px' }} container spacing={2}>
                <BodyHeader></BodyHeader>
            </Grid>
            <Grid style={{ marginTop: '20px' }} container spacing={2}>
                <Grid xs={4}>
                    <BodyLeft></BodyLeft>
                </Grid>
                <Grid xs={8}>
                    <BodyRight></BodyRight>
                </Grid>
                <Grid style={{ borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', marginTop: '20px', display: 'flex', alignItems: 'center' }} xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AutoGraphIcon style={{ color: '#757575' }}></AutoGraphIcon>
                        <p style={{ fontWeight: '600', paddingLeft: '15px', color: '#757575' }}>Chủ đề</p>
                    </div>
                    <p style={{ color: '#9f224e', fontSize: '16px', fontWeight: '600', marginLeft: '20px', textDecoration:'underline' }}>Giá sách giáo khoa mới</p>
                    <p style={{ color: '#9f224e', fontSize: '16px', fontWeight: '600', marginLeft: '20px' , textDecoration:'underline'}} >Đề án 5 huyện</p>
                    <p style={{ color: '#9f224e', fontSize: '16px', fontWeight: '600', marginLeft: '20px', textDecoration:'underline' }} >Điện hạt nhân</p>
                    <p style={{ color: '#9f224e', fontSize: '16px', fontWeight: '600', marginLeft: '20px' , textDecoration:'underline'}}>Lương Thiện Phước</p>
                </Grid>
                <Grid xs={12}>
                    <BodyVideo></BodyVideo>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Body;