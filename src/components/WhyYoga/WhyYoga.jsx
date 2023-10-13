import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
const WhyYoga = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 grid-gap-8 my-20 bg-whyYoga bg-no-repeat  font-light	 '>
            <div>

            </div>
            <div>
                <h1 className='text-6xl mb-8'>Why You Should Go To Yoga</h1>
                <p className='text-base mr-12 font-normal text-[#b3b3b3] mb-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className='inline-flex items-baseline text-[#d291bc] gap-4 text-2xl mt-8 '> <FaCheckCircle />  Yoga boosts brain power</p>
                <br />
                <p className='inline-flex items-baseline text-[#d291bc] gap-4 text-2xl mt-6'> <FaCheckCircle /> Yoga helps you to breathe better</p>
                <br />
                <p className='inline-flex items-baseline text-[#d291bc] gap-4 text-2xl mt-6'> <FaCheckCircle /> Yoga improves your strength</p>
                <br />
                <p className='inline-flex items-baseline text-[#d291bc] gap-4 text-2xl mt-6'> <FaCheckCircle /> Yoga helps you to focus</p>
                <br />
                <p className='inline-flex items-baseline text-[#d291bc] gap-4 text-2xl mt-6 mb-16'> <FaCheckCircle /> Yoga helps give meaning to your day</p>

            </div>
        </div>
    );
};

export default WhyYoga;
