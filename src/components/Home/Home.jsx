import React from 'react';
import logo from '/logo.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div>
            <TypeAnimation
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
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
    );
};

export default Home;