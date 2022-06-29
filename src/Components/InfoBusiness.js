import '../Style/InfoBusiness.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useRef, useState, useEffect } from "react";

function InfoBusiness(props) {

    const scrollRef = useRef()
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    const scrollCheck = () => {
        setscrollX(scrollRef.current.scrollLeft);
        if (
            Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
            scrollRef.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const slide = (shift) => {
        scrollRef.current.scrollLeft += shift;
    };

    useEffect(() => {
        if (
            scrollRef.current &&
            scrollRef?.current?.scrollWidth === scrollRef?.current?.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
        return () => { };
    }, [scrollRef?.current?.scrollWidth, scrollRef?.current?.offsetWidth]);

    return (
        <div className='info-business'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='card-body-right__btn' style={{ fontSize: '20px', fontWeight: '600', borderBottom: '1px solid #9f224e', paddingBottom: '5px', marginRight: '15px' }}>Thông tin doanh nghiệp</div>
                <div style={{ display: 'flex' }}>
                    <ArrowBackIosIcon onClick={() => slide(-270)} style={{ cursor: 'pointer', color: scrollX === 0 ? '#bdbdbd' : '#222' }}></ArrowBackIosIcon>
                    <ArrowForwardIosIcon onClick={() => slide(270)} style={{ cursor: 'pointer', color: scrolEnd ? '#bdbdbd' : '#222' }}></ArrowForwardIosIcon>
                </div>
            </div>
            <ul ref={scrollRef} onScroll={scrollCheck} className='scrollbar'>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-kinhdoanh.vnecdn.net/2022/06/29/4-1656495040-7610-1656495313.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=VvqsD-1pIrVCGqxf0IuOrg'></img>
                    <p>Thực phẩm bổ sung Colos Mutli Pedia hổ trợ bé ăn ngon</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-kinhdoanh.vnecdn.net/2022/06/29/Image-70094892-ExtractWord-0-O-3363-5288-1656495771.png?w=300&h=180&q=100&dpr=1&fit=crop&s=w5SFo9XopYF4Y_ePoj9rEw'></img>
                    <p>Long Phát khai trương showroom trưng bày máy bơm Wilo tại TP.HCM</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-giadinh.vnecdn.net/2022/03/25/1-jpg-1648142623-6571-1648143428.png?w=300&h=180&q=100&dpr=1&fit=crop&s=X_dQBKT_MGooCoq4A7XXZg'></img>
                    <p>Dịch bệnh làm tăng nhu cầu điều hòa bảo vệ sức khỏe</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-sohoa.vnecdn.net/2022/05/09/1-jpg-1652098312-9462-1652098333.png?w=300&h=180&q=100&dpr=1&fit=crop&s=IfBZFE8r_nMNkGvyBcJJQw'></img>
                    <p>Những sự cố thường gặp ở dàn nóng làm giảm tuổi thọ điều hòa</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-kinhdoanh.vnecdn.net/2022/06/29/4-1656495040-7610-1656495313.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=VvqsD-1pIrVCGqxf0IuOrg'></img>
                    <p>Thực phẩm bổ sung Colos Mutli Pedia hổ trợ bé ăn ngon</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-kinhdoanh.vnecdn.net/2022/06/29/Image-70094892-ExtractWord-0-O-3363-5288-1656495771.png?w=300&h=180&q=100&dpr=1&fit=crop&s=w5SFo9XopYF4Y_ePoj9rEw'></img>
                    <p>Long Phát khai trương showroom trưng bày máy bơm Wilo tại TP.HCM</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-giadinh.vnecdn.net/2022/03/25/1-jpg-1648142623-6571-1648143428.png?w=300&h=180&q=100&dpr=1&fit=crop&s=X_dQBKT_MGooCoq4A7XXZg'></img>
                    <p>Dịch bệnh làm tăng nhu cầu điều hòa bảo vệ sức khỏe</p>
                </li>
                <li className='scrollbar-item'>
                    <img alt='ảnh' src='https://i1-sohoa.vnecdn.net/2022/05/09/1-jpg-1652098312-9462-1652098333.png?w=300&h=180&q=100&dpr=1&fit=crop&s=IfBZFE8r_nMNkGvyBcJJQw'></img>
                    <p>Những sự cố thường gặp ở dàn nóng làm giảm tuổi thọ điều hòa</p>
                </li>
            </ul>
        </div>
    );
}

export default InfoBusiness;