import React from 'react'
import miss from './../../assets/mission.png'


const Mission = () => {
    return (
        <>
            <div className="  flex items-center">
                <div className="w-6/12">
                    <img src={miss} alt="" />
                </div>
                <div className="w-6/12 ps-20 pe-24">
                    <p className='uppercase px-[20px] py-[10px] bg-[#9F37931A] inline rounded-md mulish font-[800] text-[14px] text-[#9F3793]'>Our Mission</p>
                    <h5 className='mulish text-[48px] ps-1 font-semibold pt-6'>Enhancing Vision.
                        Touching Lives.</h5>
                    <p className='mulish text-[18px] ps-1 font-[400] pt-6'>To make available to every individual, the best quality of health care treatments and solutions irrespective of their awareness, knowledge and financial status.</p>
                </div>
            </div>
        </>
    )
}

export default Mission