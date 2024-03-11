import React from 'react'
import doc1 from './../../assets/doc1.png'
import doc2 from './../../assets/doc2.png'
import a1 from './../../assets/a1.png'
import a2 from './../../assets/a2.png'
import a3 from './../../assets/a3.png'
import a4 from './../../assets/a4.png'
import docback from './../../assets/docback.png'

const OurTeam = () => {
    const doctor = [
        {
            name: 'Dr. Arun Singhvi',
            desc: 'Co-founder, promoter, Chairman, and Managing Director',
            img: doc1
        },
        {
            name: 'Dr. Shilpi Gang',
            desc: 'Co-founder, promoter, and CEO',
            img: doc2
        },
        {
            name: 'Dr. Himanshu Shekhar',
            desc: 'Director On Board CSO (Chief Strategy Officer) Clinical,...',
            img: doc1
        },
        {
            name: 'Dr. Vikas Jain',
            desc: 'Director and CSO(Chief Strategy Officer) HR and new Establishment PHACO, MEDICAL-RETINA, SQUINT & CORNEA',
            img: doc2
        },
        {
            name: 'Dr. Arun Singhvi',
            desc: 'Co-founder, promoter, Chairman, and Managing Director',
            img: doc1
        },
        {
            name: 'Dr. Shilpi Gang',
            desc: 'Co-founder, promoter, and CEO',
            img: doc2
        },
        {
            name: 'Dr. Himanshu Shekhar',
            desc: 'Director On Board CSO (Chief Strategy Officer) Clinical,...',
            img: doc1
        },
        {
            name: 'Dr. Vikas Jain',
            desc: 'Director and CSO(Chief Strategy Officer) HR and new Establishment PHACO, MEDICAL-RETINA, SQUINT & CORNEA',
            img: doc2
        },
        {
            name: 'Dr. Arun Singhvi',
            desc: 'Co-founder, promoter, Chairman, and Managing Director',
            img: doc1
        },
        {
            name: 'Dr. Shilpi Gang',
            desc: 'Co-founder, promoter, and CEO',
            img: doc2
        },
        {
            name: 'Dr. Himanshu Shekhar',
            desc: 'Director On Board CSO (Chief Strategy Officer) Clinical,...',
            img: doc1
        },
        {
            name: 'Dr. Vikas Jain',
            desc: 'Director and CSO(Chief Strategy Officer) HR and new Establishment PHACO, MEDICAL-RETINA, SQUINT & CORNEA',
            img: doc2
        },
    ]
    return (
        <div className='relative px-24 pt-44  pb-20'>
            <img src={docback} className='absolute w-full z-[-20] top-0 left-0' alt="" />
            <div className=''>
                <div className="flex justify-center">
                    <p className='uppercase px-[20px]  py-[10px] bg-[#9F37931A] inline rounded-md mulish font-[800] text-[14px] text-[#9F3793]'>Our Team</p>
                </div>
                <h5 className='mulish text-[48px] text-center ps-1 font-semibold pt-5'>Meet Our Doctors</h5>
                <div className='pt-20  flex flex-wrap '>
                    {doctor.map((doc) => {
                        return (
                            <div className="w-3/12 px-2.5 pb-20">
                                <div className='shadow-md  p-7 bg-white relative rounded-2xl'>
                                    <div className="absolute rounded-full overflow-hidden border-4 border-[#0273BC] h-24 w-24 top-[0%] translate-y-[-50%] translate-x-[-50%] left-[50%]">
                                        <img src={doc.img} className=' ' alt="" />
                                    </div>
                                    <p className='text-center mulish font-[700] text-[22px] pt-16 pb-4'>{doc.name}</p>
                                    <p className='text-center mulish font-[400] text-[16px] pb-4 truncate'>{doc.desc}</p>
                                    <p className='text-center mulish flex items-center justify-center font-[700] text-[16px] text-[#FEA12D]'>Learn More <svg width="22" className='ms-3' height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                                    </svg></p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='flex justify-center pb-16'>
                    <button className='text-white ms-1 flex items-center rounded-lg bg-[#FEA12D] px-5 py-3 mulish text-[16px] uppercase font-[800]'><span className='pe-3'>View all Doctors</span> <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="white" />
                    </svg>
                    </button>
                </div>
                <hr />
                <div className="pt-16">
                    <h6 className='text-center w-full pb-8 mulish font-semibold text-[28px] text-black'>All India’s Achievers Award</h6>
                    <div className='w-full flex justify-center pb-8'>
                        <p className='mulish text-center w-11/12 font-[600] text-[16px]'>ASG has been awarded the <span className='text-[#0173BC]'>“Young Entrepreneur Award” for the year 2013 by the Times of </span>India. It has also been bestowed upon with the “All India Achievers Award” in 2009-10. Recently, <span className='text-[#0173BC]'>”Rajiv Gandhi Gold Medal Award” has also been received for Medicine & Management.</span></p>

                    </div>
                    <div className="  flex justify-center ">
                        <div className='flex w-11/12 '>

                            <div className="w-3/12 flex items-center">
                                <div className="w-3/12">
                                    <img src={a1} alt="" />
                                </div>
                                <div className="w-9/12 ps-3">
                                    <p className='mulish font-[600] text-[16px]'>International Achivers <br />
                                        Award 2009</p>
                                </div>
                            </div>
                            <div className="w-3/12 flex items-center">
                                <div className="w-3/12">
                                    <img src={a2} alt="" />
                                </div>
                                <div className="w-9/12 ps-3">
                                    <p className='mulish font-[600] text-[16px]'>Patrika - 2018 Youth Icon<br />
                                        Award for Healthcare</p>
                                </div>
                            </div>
                            <div className="w-3/12 flex items-center">
                                <div className="w-3/12">
                                    <img src={a3} alt="" />
                                </div>
                                <div className="w-9/12 ps-3">
                                    <p className='mulish font-[600] text-[16px]'>Times wellness Rajasthan<br />
                                        Health Award 2013</p>
                                </div>
                            </div>

                            <div className="w-3/12 flex items-center">
                                <div className="w-3/12">
                                    <img src={a4} alt="" />
                                </div>

                                <div className="w-9/12 ps-3">
                                    <p className='mulish font-[600] text-[16px]'>Rajeev Gandhi Gold<br />
                                        Medal Award 2013</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam