import React from 'react';
import Marquee from "react-fast-marquee";

export default function Infinite_iconScroll() {
    const imgStyle = {
        width: '140px',  // Set a fixed width
        height: 'auto',  // Maintain aspect ratio
        objectFit: 'contain',
        // margin:"0 30px"
    };

    return (
        <div className='flex h-24 '>
            <Marquee speed={100}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <img src="/Assets/adidas.png" alt="Adidas" className='mx-[30px] max-[450px]:mx-5' style={imgStyle} />
                    <img src="/Assets/puma.png" alt="Puma" style={imgStyle}  className='mx-[30px] max-[450px]:mx-5'/>
                    <img src="/Assets/north.png" alt="North" style={imgStyle}  className='mx-[30px] max-[450px]:mx-5'/>
                    <img src="/Assets/nike.png" alt="Nike" style={imgStyle}  className='mx-[30px] max-[450px]:mx-5'/>
                    <img src="/Assets/lacoste.png" alt="Lascoste" style={imgStyle}  className='mx-[30px] max-[450px]:mx-5'/>
                    <img src="/Assets/disel.png" alt="Disel" style={imgStyle} className='mx-[30px] max-[450px]:mx-5'/>
                    <img src="/Assets/champ.png" alt="Champ" style={imgStyle} className='mx-[30px] max-[450px]:mx-5'/>
                </div>
            </Marquee>
        </div>
    );
}
