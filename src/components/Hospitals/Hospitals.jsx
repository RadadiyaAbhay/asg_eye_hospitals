import React from 'react'
import h1 from "./../../assets/h1.png"
import h2 from "./../../assets/h2.png"
import h3 from "./../../assets/h3.png"
import h4 from "./../../assets/h4.png"
import h5 from "./../../assets/h5.png"
import h6 from "./../../assets/h6.png"
import h7 from "./../../assets/h7.png"
import h8 from "./../../assets/h8.png"
import h9 from "./../../assets/h9.png"
import h10 from "./../../assets/h10.png"
import h11 from "./../../assets/h11.png"
import h12 from "./../../assets/h12.png"


const Hospitals = () => {
    return (
        <>
            <div className='pt-10 pb-20 px-24'>
                <div className='flex flex-wrap w-full '>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full pe-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h1} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Jodhpur, Pal Link Road</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full px-2">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h2} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Jodhpur, Paota</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full ps-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h3} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Amritsar</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full pe-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h4} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Guwahati (Down Town)</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full px-2">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h5} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Darbhanga</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full ps-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h6} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Dombivili</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full pe-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h7} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Guwahati (Paltan Bazaar)</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full px-2">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h8} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Patna (Danapur)</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full ps-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h9} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Hajipur</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full pe-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h10} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Patna (Rajendra Nagar)</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full px-2">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h11} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Jamshedpur</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 pt-5">
                        <div className=" w-full ps-4">
                            <div className='shadow-lg p-7 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={h12} className='rounded-lg w-full  object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[700] text-[22px]'>Dombivili</p>
                                    <div className='pt-3'>
                                        <div className=' flex items-center'>
                                            <div className='me-3'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2843 19.3965L16.8404 14.8404C19.3567 12.3241 19.3567 8.24443 16.8404 5.72816C14.3241 3.21188 10.2444 3.21188 7.72816 5.72816C5.21188 8.24443 5.21188 12.3241 7.72816 14.8404L12.2843 19.3965ZM12.2843 22L6.42641 16.1422C3.1912 12.9069 3.1912 7.66162 6.42641 4.42641C9.66162 1.1912 14.9069 1.1912 18.1422 4.42641C21.3774 7.66162 21.3774 12.9069 18.1422 16.1422L12.2843 22ZM12.2843 12.1252C13.301 12.1252 14.1252 11.301 14.1252 10.2843C14.1252 9.26755 13.301 8.44333 12.2843 8.44333C11.2675 8.44333 10.4433 9.26755 10.4433 10.2843C10.4433 11.301 11.2675 12.1252 12.2843 12.1252ZM12.2843 13.9662C10.2508 13.9662 8.60238 12.3177 8.60238 10.2843C8.60238 8.25082 10.2508 6.60238 12.2843 6.60238C14.3177 6.60238 15.9662 8.25082 15.9662 10.2843C15.9662 12.3177 14.3177 13.9662 12.2843 13.9662Z" fill="#0173BC" />
                                                </svg>

                                            </div>
                                            <p className='mulish  font-[500] text-[14px]'>1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                                        </div>
                                        <div className='flex pt-3 items-center '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.51192 10.7553C10.3963 12.3105 11.6895 13.6037 13.2447 14.488L14.08 13.3185C14.3578 12.9298 14.8821 12.8097 15.3014 13.0387C16.63 13.7645 18.0984 14.2056 19.6301 14.3268C20.1213 14.3657 20.5 14.7756 20.5 15.2683V19.4832C20.5 19.9674 20.1337 20.3732 19.6521 20.4226C19.1516 20.4741 18.6467 20.5 18.1389 20.5C10.0541 20.5 3.5 13.9459 3.5 5.86111C3.5 5.35325 3.5259 4.84839 3.57734 4.34788C3.62684 3.86621 4.03261 3.5 4.51684 3.5H8.73167C9.22437 3.5 9.63429 3.87876 9.67317 4.36992C9.79441 5.90161 10.2355 7.36999 10.9613 8.69864C11.1903 9.11793 11.0702 9.64223 10.6815 9.91993L9.51192 10.7553ZM7.13068 10.1349L8.92508 8.8532C8.41628 7.75485 8.0676 6.59006 7.88909 5.38889H5.39745C5.39175 5.54597 5.38889 5.70339 5.38889 5.86111C5.38889 12.9027 11.0973 18.6111 18.1389 18.6111C18.2966 18.6111 18.454 18.6083 18.6111 18.6025V16.1109C17.41 15.9324 16.2452 15.5837 15.1468 15.0749L13.8651 16.8694C13.3466 16.6679 12.8458 16.4309 12.3659 16.1613L12.311 16.1301C10.4603 15.0777 8.92238 13.5397 7.86994 11.689L7.83872 11.6341C7.56913 11.1542 7.33212 10.6534 7.13068 10.1349Z" fill="#0173BC" />
                                            </svg>
                                            <p className='mulish font-[700] ps-3 text-[14px] text-[#666666]'>+91 88877 77766</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-[#0173BC] border-2 border-[#0173BC] uppercase font-[700] text-[14px] text-white'>View Profile</button>
                                        </div>
                                        <div className='w-6/12 pe-2 pt-5' >
                                            <button className='px-6 rounded-md w-full py-3 bg-white border-2 border-[#0173BC] uppercase font-[700] text-[14px]  text-[#0173BC]'>Get direction</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hospitals