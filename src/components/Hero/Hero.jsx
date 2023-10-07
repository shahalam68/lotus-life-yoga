import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='bg-[#d291bc] bg-opacity-10'>
            <div className='container mx-auto grid grid-cols-2 grid-gap-8 '>
                <div className='my-24' >
                    <TypeAnimation
                        className='text-7xl font-poppins font-extralight text-inherit '
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Flexibility is A Second Power.',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Effective Therapy Against Stress.',
                            1000,
                            'Inspiration For Joyful Living.',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '80px', display: 'inline-block', fontFamily: 'poppins', fontWeight: '200' }}
                        repeat={Infinity}
                    />
                    <h2 className='text-2xl font-poppins font-extralight my-3 text-inherit '>Do Yoga today for a better tomorrow</h2>
                    <button className='bg-[#d291bc] px-4 py-2 text-lg rounded-3xl text-white'> 15 Free days </button>
                </div>
                <div>
                    <img className='w-9/12' src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;