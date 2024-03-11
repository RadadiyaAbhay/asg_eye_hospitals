import React from 'react'
import logo from "./../../assets/logowhite.png"
import icons from "./../../assets/icons.png"
import location from "./../../assets/location.png"


const Footer = () => {
    return (
        <footer className='px-24'>
            <div className="px-16">

                <div className='bg-[#0173BC] rounded-lg px-20 py-10 w-full flex items-center'>
                    <div className=' w-8/12'>
                        <p className='mulish font-[800] text-[44px] text-white'>Get in Touch</p>
                        <p className='mulish font-[400]  pt-5 text-[20px] text-white'>Call us now if you are in a medical emergency need, we will<br />
                            reply swiftly and provide you with a medical aid.</p>
                    </div>
                    <div className="w-4/12">
                        <div className='w-full flex justify-center'>
                            <button className='text-white ms-1 flex items-center rounded-lg bg-[#FEA12D] mt-7 px-5 py-3 mulish text-[18px] uppercase font-[800]'><span className='pe-3'>Book appointment</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="white" />
                            </svg>
                            </button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <p className='mulish font-[800] flex items-center pt-4 text-[22px] text-white'><svg width="28" height="28" className='me-3' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5 19.1567V23.2821C24.5 23.8946 24.0264 24.4028 23.4156 24.446C22.9053 24.482 22.489 24.5 22.1667 24.5C11.8573 24.5 3.5 16.1427 3.5 5.83333C3.5 5.51099 3.51803 5.09468 3.55408 4.58442C3.59726 3.97353 4.10543 3.5 4.71784 3.5H8.84345C9.14291 3.5 9.39372 3.72682 9.42378 4.02477C9.45078 4.29225 9.47588 4.507 9.49908 4.66902C9.73507 6.31717 10.2171 7.88592 10.9068 9.33687C11.0175 9.56976 10.9453 9.84852 10.7355 9.9984L8.21747 11.7971C9.75044 15.3779 12.622 18.2496 16.2029 19.7826L17.9983 17.2689C18.1501 17.0565 18.4322 16.9835 18.6678 17.0954C20.1187 17.7845 21.6873 18.266 23.3352 18.5015C23.4962 18.5246 23.7096 18.5494 23.9752 18.5762C24.2732 18.6063 24.5 18.8572 24.5 19.1567Z" fill="white" />
                            </svg>
                                1800 1200 111</p>
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

export default Footer