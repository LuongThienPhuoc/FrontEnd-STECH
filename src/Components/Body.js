import React from 'react';
import '../Style/Body.css'
import { Container, Grid } from '@mui/material'
import BodyHeader from './BodyHeader'
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';
function Body(props) {
    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'lg'}>
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
            </Grid>
        </Container>
    );
}
export default Body;