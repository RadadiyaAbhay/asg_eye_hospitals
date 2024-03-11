import React from 'react'
import logo from "./../../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='absolute px-24 pt-10 w-full '>
                <div className="bg-white border-[2px] border-[#0173BC] px-8 py-3 text-[16px]  items-center rounded-2xl  w-full flex items-center">

                    <div className="w-2/12">
                        <img src={logo} alt="" className='object-contain w-10/12' />
                    </div>
                    <div className="w-8/12">
                        <ul className='flex justify-center items-center gap-10'>
                            <li><NavLink className="text-[#020F17] font-[400] focus:border-b-[2px] focus:pb-1 focus:border-[#0173BC] mulish text-[18px]" to={'/'}>Home</NavLink></li>
                            <li><NavLink className="text-[#020F17] font-[400] focus:border-b-[2px] focus:pb-1 focus:border-[#0173BC] mulish text-[18px]" to={'/about'}>About</NavLink></li>
                            <li><NavLink className="text-[#020F17] font-[400] focus:border-b-[2px] focus:pb-1 focus:border-[#0173BC] mulish text-[18px]" to={'/Hospitals'}>Hospitals</NavLink></li>
                            <li><NavLink className="text-[#020F17] font-[400] focus:border-b-[2px] focus:pb-1 focus:border-[#0173BC] mulish text-[18px]" to={'/service'}>Specialities</NavLink></li>
                            <li><NavLink className="text-[#020F17] font-[400] focus:border-b-[2px] focus:pb-1 focus:border-[#0173BC] mulish text-[18px]" to={'/blog'}>Blog</NavLink></li>
                            <li><NavLink className="text-[#020F17] font-[400] focus:border-b-[2px] focus:pb-1 focus:border-[#0173BC] mulish text-[18px]" to={'/contact'}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-2/12 flex justify-end">
                        <button className='text-white rounded-lg bg-[#FEA12D] w-full px-5 py-3 mulish font-semibold'>Book an Appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header