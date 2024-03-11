import React from 'react'
import a1 from './../../assets/a1.png'
import a2 from './../../assets/a2.png'
import a3 from './../../assets/a3.png'
import a4 from './../../assets/a4.png'

const Award = () => {
    return (
        <>
            <div className="px-24">
                <h6 className='text-center w-full pb-8 mulish font-semibold text-[28px] text-black'>All India’s Achievers Award</h6>
                <div className="pb-10 border-b flex justify-center ">
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
        </>
    )
}

export default Award