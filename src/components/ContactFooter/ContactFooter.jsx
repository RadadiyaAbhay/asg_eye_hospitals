import React from 'react'
import logo from "./../../assets/logowhite.png"
import icons from "./../../assets/icons.png"
import location from "./../../assets/location.png"
import foo1 from "./../../assets/foo1.png"
import foo2 from "./../../assets/foo2.png"
import foo3 from "./../../assets/foo3.png"


const ContactFooter = () => {
    return (
        <footer className='px-24'>
            <div className="px-16">

                <div className='bg-[#F5FAFC] rounded-lg px-20 py-10 w-full flex flex-wrap items-center'>
                    <div className="w-full pb-5">
                        <p className='mulish font-[700] text-[32px] text-center'>Contact Us for Any Informations</p>
                    </div>
                    <div className='w-full flex '>
                        <div className="w-4/12 px-2">

                            <div className='rounded-lg bg-white shadow-md px-5 py-9'>
                                <div>
                                <div className='flex justify-center pb-6'>
                                        <img src={foo1} alt="" />
                                    </div>
                                    <p className='uppercase text-[#0173BC] mulish font-[700] text-[14px] text-center'>Phone</p>
                                    <p className='text-center pt-1 h-12 mulish font-[500] text-[20px]'>(+91) 1800 1200 111</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 px-2">

                            <div className='rounded-lg bg-white shadow-md px-5 py-9'>
                                <div>
                                    <div className='flex justify-center pb-6'>
                                        <img src={foo2} alt="" />
                                    </div>
                                    <p className='uppercase text-[#0173BC] mulish font-[700] text-[14px] text-center'>Address</p>
                                    <p className='text-center pt-1 h-12 mulish font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar,
                                        Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 px-2">

                            <div className='rounded-lg bg-white shadow-md px-5 py-9'>
                                <div>
                                <div className='flex justify-center pb-6'>
                                        <img src={foo3} alt="" />
                                    </div>
                                    <p className='uppercase text-[#0173BC] mulish font-[700] text-[14px] text-center'>Email</p>
                                    <p className='text-center pt-1 h-12 mulish font-[500] text-[20px]'>asg@eyehospitals.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-12 pt-20 flex border-b-2 border-slate-400'>
                <div className="w-5/12">
                    <div>
                        <img src={logo} alt="" className='w-5/12' />
                        <p className='pt-10 leading-[26px] w-9/12 mulish text-white font-[400] text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <div className='pt-10'>
                            <img src={icons} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-2/12 ps-4">
                    <p className='mulish text-white uppercase font-[800] pb-10 text-[12px] '>Quick Links</p>
                    <ul className='mulish text-white font-[400] text-[16px]'>
                        <li className='py-2'>About Us</li>
                        <li className='py-2'>Hospitals</li>
                        <li className='py-2'>Specialities</li>
                        <li className='py-2'>Blog & News</li>
                        <li className='py-2'>Contact Us</li>
                    </ul>
                </div>
                <div className="w-2/12 ps-4">
                    <p className='mulish text-white font-[800] pb-10 text-[12px] uppercase'>Contact Info</p>
                    <ul className='mulish text-white font-[400] text-[14px]'>
                        <li className='py-2 font-[500]'>Phone No.</li>
                        <li className='pt-2 pb-4'>(+91) 1800 1200 111</li>
                        <li className='py-2 font-[500]'>Email</li>
                        <li className='py-1'>asg@eyehospitals.com</li>
                    </ul>
                </div>
                <div className="w-3/12 ps-4">
                    <p className='mulish text-white font-[800] pb-10 text-[12px] uppercase'>Locations</p>
                    <div className='overflow-hidden h-48'>

                        <img src={location} className='w-full ' alt="" />
                    </div>
                </div>
            </div>
            <div className='py-6 text-[14px] font-[400]  mulish text-white flex justify-between'>
                <p>© Copyright 2023 Laversab Inc. All Rights Reserved.</p>
                <p>Teleconsultation  |  Terms and Conditions  |  Cancellation and Refund Policy</p>
            </div>
        </footer>
    )
}

export default ContactFooter