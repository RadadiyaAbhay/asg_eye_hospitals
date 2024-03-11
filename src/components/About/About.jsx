import React from 'react'
import about from './../../assets/about.png'


const About = () => {
    return (
        <>
            <div className="pt-48 flex items-center">
                <div className="w-6/12 ps-24 pe-20">
                    <p className='uppercase px-[20px] py-[10px] bg-[#9F37931A] inline rounded-md mulish font-[800] text-[14px] text-[#9F3793]'>About us</p>
                    <h5 className='mulish text-[48px] ps-1 font-semibold pt-6'>Enhancing Vision.
                        Touching Lives.</h5>
                    <p className='mulish text-[18px] ps-1 font-[400] pt-6'>ASG was founded in the year 2005 by <b>Dr. Arun Singhvi</b> and                   Dr. Shilpi Gang. both of them are alumni of the prestigious All India Institute of medical science, New Delhi. The first hospital was established in the city of<b> Jodhpur in Dec 2005.</b><br /><br />
                        Majority of the hospitals of the group are in tier 2 and tier 3 cities of the country reflecting their mission statement which is to make available to every person the best of health care treatment and solutions irrespective of their awareness, knowledge and financial status.</p>
                </div>
                <div className="w-6/12">
                    <img src={about} alt="" />
                </div>
            </div>
        </>
    )
}

export default About