import React from 'react'
import s1 from './../../assets/s1.png'
import s2 from './../../assets/s2.png'
import s3 from './../../assets/s3.png'
import s4 from './../../assets/s4.png'
import s5 from './../../assets/s5.png'
import s6 from './../../assets/s6.png'
import { NavLink } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className='px-24 pb-24 pt-72 flex flex-wrap'>
                    <div className='w-4/12 pe-3 pb-5'>
                        <div className=" rounded-2xl p-11 service-card">
                            <img src={s1} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Cataract</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Cataract Opacify the eye’s natural lens and limit your ability to see clearly.</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 px-1.5 pb-5'>
                        <div className=" rounded-2xl p-11 service-card2 shadow-md">
                            <img src={s2} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Diabetic Retinopathy</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>This condition is one of the leading causes of blindness in people with diabetes...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 ps-3 pb-5'>
                        <div className=" rounded-2xl p-11 service-card">
                            <img src={s3} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Neuro Ophthalmology</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>We have a dedicated neuro-ophthalmology department that specializes in the diagn...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 pe-3 pb-5'>
                        <div className="rounded-2xl p-11 service-card">
                            <img src={s4} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Oculoplasty</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery,..</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 px-1.5 pb-5'>
                        <div className="rounded-2xl p-11 service-card">
                            <img src={s5} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Refractive Surgeries</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Refractive surgeries are elective procedures chosen byindividuals seeking to correct...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 ps-3 pb-5'>
                        <div className=" rounded-2xl p-11 bg-[#ffffff] service-card">
                            <img src={s6} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Q-Lasik Laser</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Q-LASIK, also known as Quick LASIK is an innovative and minimally invasive proc...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 pe-3 pb-5'>
                        <div className=" rounded-2xl p-11 service-card">
                            <img src={s1} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Cataract</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Cataract Opacify the eye’s natural lens and limit your ability to see clearly.</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 px-1.5 pb-5'>
                        <div className=" rounded-2xl p-11 service-card">
                            <img src={s2} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Diabetic Retinopathy</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>This condition is one of the leading causes of blindness in people with diabetes...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 ps-3 pb-5'>
                        <div className=" rounded-2xl p-11 bg-[#ffffff] service-card">
                            <img src={s3} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Neuro Ophthalmology</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>We have a dedicated neuro-ophthalmology department that specializes in the diagn...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 pe-3 pb-5'>
                        <div className="rounded-2xl p-11 service-card">
                            <img src={s4} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Oculoplasty</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery,..</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 px-1.5 pb-5'>
                        <div className="rounded-2xl p-11 service-card">
                            <img src={s5} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Refractive Surgeries</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Refractive surgeries are elective procedures chosen byindividuals seeking to correct...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                    <div className='w-4/12 ps-3 pb-5'>
                        <div className=" rounded-2xl p-11 bg-[#ffffff] service-card">
                            <img src={s6} alt="" className='pt-8 pb-6' />
                            <h6 className='mulish text-[24px] font-semibold pt-3'>Q-Lasik Laser</h6>
                            <p className='mulish text-[16px] font-[400] pt-3'>Q-LASIK, also known as Quick LASIK is an innovative and minimally invasive proc...</p>
                            <NavLink to={"/servicedetail"} className='mulish flex items-center text-[18px] text-[#FEA12D] font-[700] pt-3' type="button"><span className='pe-3'>Learn More</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                            </svg></NavLink>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Services