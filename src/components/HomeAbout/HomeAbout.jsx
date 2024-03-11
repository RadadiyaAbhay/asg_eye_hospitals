import React from 'react'
import about from './../../assets/homeabout.png'


const HomeAbout = () => {
    return (
        <>
            <div className=" pt-10 flex items-center">
                <div className="w-6/12">
                    <img src={about} alt="" />
                </div>
                <div className="w-6/12 ps-20 pe-24">
                    <p className='uppercase px-[20px] py-[10px] bg-[#9F37931A] inline rounded-md mulish font-[800] text-[14px] text-[#9F3793]'>About us</p>
                    <h5 className='mulish text-[48px] ps-1 font-semibold pt-6'>Know more about ASG</h5>
                    <p className='mulish text-[18px] ps-1 font-[400] pt-6'>ASG Eye Hospitals is a chain of super speciality eye hospitals in India. It offers a comprehensive range of eye care services including treatment and surgeries of Retina, Cataract, Squint, Oculoplasty, Cornea, Lasik, ICL, Glaucoma, and Pediatric Opthalmology. Currently, the group has 150 Eye Hospitals across 83 cities in India.</p>
                    <button className='text-white ms-1 flex items-center rounded-lg bg-[#FEA12D] mt-7 px-5 py-3 mulish text-[16px] uppercase font-[800]'><span className='pe-3'>Get in Touch</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="white" />
                    </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeAbout