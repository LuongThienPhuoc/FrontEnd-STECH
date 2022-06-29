import React from 'react';
import '../Style/SeeMore.css'
function SeeMore(props) {
    return (
        <div className='see-more'>
            <div className='title'>Xem nhiều</div>
            <div className='see-more-body' style={{ display: 'flex', flexWrap:'wrap' }}>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>1</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>2</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>3</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>4</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>5</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>6</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>7</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
                <div className='ratings' style={{ display: 'flex', width: '50%', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '50px', paddingRight: '20px', fontWeight: '600' }}>8</div>
                    <div className='description' style={{ fontSize: '16px', fontWeight: '500' }}>Tài xế xe khách bị đâm sau mâu thuẫn trên đường</div>
                </div>
            </div>
        </div>
    );
}

export default SeeMore;