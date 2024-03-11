import React from 'react'
import news1 from "./../../assets/news1.png"
import ne3 from "./../../assets/ne3.png"
import news2 from "./../../assets/news2.png"
import r1 from "./../../assets/r1.png"


const HomeNews = ({ title }) => {
    return (
        <div>
            <div className="px-24 pb-24 pt-64">
                <h5 className='mulish text-center text-[48px] ps-1 font-semibold pt-6'>{title?.title}</h5>
                <div className='flex justify-center'>
                    <p className='mulish text-[17px] text-center pe-5 ps-1 w-6/12 font-[500] pt-4'>{title?.desc}</p>
                </div>

                <div className='flex'>
                    <div className="w-6/12 pt-5">
                        <div className=" w-full pe-2">
                            <div className='shadow-lg p-10 flex flex-wrap items-center rounded-xl'>
                                <div className='w-full rounded-lg overflow-hidden '>
                                    <img src={ne3} className='rounded-lg w-full h-[302px] object-cover' alt="" />
                                </div>
                                <div className='w-full'>
                                    <p className='mulish pt-4 font-[600] text-[26px]'>Eye Care for Professionals: Navigating <br />Digital Challenges</p>
                                    <div className='flex pt-3 items-center'>
                                        <div className='pe-5 flex items-center'>
                                            <div className='flex overflow-hidden rounded-full  me-3 w-7 h-7'>
                                                <img src={r1} className='object-cover' alt="" />
                                            </div>
                                            <p className='mulish  font-[600] text-[14px]'><span className='text-[#666666]'>by</span> Dr. Anup Kumar</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.49996 0.833496V2.50016H11.5V0.833496H13.1666V2.50016H16.5C16.9602 2.50016 17.3333 2.87326 17.3333 3.3335V16.6668C17.3333 17.1271 16.9602 17.5002 16.5 17.5002H1.49996C1.03973 17.5002 0.666626 17.1271 0.666626 16.6668V3.3335C0.666626 2.87326 1.03973 2.50016 1.49996 2.50016H4.83329V0.833496H6.49996ZM15.6666 9.16683H2.33329V15.8335H15.6666V9.16683ZM4.83329 4.16683H2.33329V7.50016H15.6666V4.16683H13.1666V5.8335H11.5V4.16683H6.49996V5.8335H4.83329V4.16683Z" fill="#0173BC" />
                                            </svg>

                                            <p className='mulish font-[500] ps-3 text-[14px] text-[#666666]'>Sep 08, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 pt-5 ps-10">
                        <div className="w-full pb-5 ">
                            <div className='shadow-lg p-7 flex items-center rounded-xl'>
                                <div className='w-4/12 rounded-lg overflow-hidden '>
                                    <img src={news1} className='rounded-lg object-center w-40 h-48 object-cover' alt="" />
                                </div>
                                <div className='w-8/12'>
                                    <p className='mulish font-[600] text-[22px]'>How to Give First Aid and Care for Eye Emergencies?</p>
                                    <div className='flex pt-3 items-center'>
                                        <div className='pe-5 flex items-center'>
                                            <div className='flex overflow-hidden rounded-full  me-3 w-7 h-7'>
                                                <img src={r1} className='object-cover' alt="" />
                                            </div>
                                            <p className='mulish  font-[600] text-[14px]'><span className='text-[#666666]'>by</span> Dr. Arun Singhvi</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.49996 0.833496V2.50016H11.5V0.833496H13.1666V2.50016H16.5C16.9602 2.50016 17.3333 2.87326 17.3333 3.3335V16.6668C17.3333 17.1271 16.9602 17.5002 16.5 17.5002H1.49996C1.03973 17.5002 0.666626 17.1271 0.666626 16.6668V3.3335C0.666626 2.87326 1.03973 2.50016 1.49996 2.50016H4.83329V0.833496H6.49996ZM15.6666 9.16683H2.33329V15.8335H15.6666V9.16683ZM4.83329 4.16683H2.33329V7.50016H15.6666V4.16683H13.1666V5.8335H11.5V4.16683H6.49996V5.8335H4.83329V4.16683Z" fill="#0173BC" />
                                            </svg>

                                            <p className='mulish font-[500] ps-3 text-[14px] text-[#666666]'>Sep 07, 2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='mulish font-[800] mt-7 flex items-center border border-[#FEA12D] text-[14px] text-[#FEA12D] border-2 rounded-md px-10 py-3'>READ MORE <svg width="22" className='ms-3' height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                                        </svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className='shadow-lg p-7 flex items-center rounded-xl'>
                                <div className='w-4/12 rounded-lg overflow-hidden '>
                                    <img src={news2} className='rounded-lg object-center w-40 h-48 object-cover' alt="" />
                                </div>
                                <div className='w-8/12'>
                                    <p className='mulish font-[600] text-[22px]'>5 Important Dermatologist Tips
                                        for Dry Eyelids (Blepharitis)</p>
                                    <div className='flex pt-3 items-center'>
                                        <div className='pe-5 flex items-center'>
                                            <div className='flex overflow-hidden rounded-full  me-3 w-7 h-7'>
                                                <img src={r1} className='object-cover' alt="" />
                                            </div>
                                            <p className='mulish  font-[600] text-[14px]'><span className='text-[#666666]'>by</span> Dr. Anup Kumar</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.49996 0.833496V2.50016H11.5V0.833496H13.1666V2.50016H16.5C16.9602 2.50016 17.3333 2.87326 17.3333 3.3335V16.6668C17.3333 17.1271 16.9602 17.5002 16.5 17.5002H1.49996C1.03973 17.5002 0.666626 17.1271 0.666626 16.6668V3.3335C0.666626 2.87326 1.03973 2.50016 1.49996 2.50016H4.83329V0.833496H6.49996ZM15.6666 9.16683H2.33329V15.8335H15.6666V9.16683ZM4.83329 4.16683H2.33329V7.50016H15.6666V4.16683H13.1666V5.8335H11.5V4.16683H6.49996V5.8335H4.83329V4.16683Z" fill="#0173BC" />
                                            </svg>

                                            <p className='mulish font-[500] ps-3 text-[14px] text-[#666666]'>Sep 08, 2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='mulish font-[800] mt-7 flex items-center border border-[#FEA12D] text-[14px] text-[#FEA12D] border-2 rounded-md px-10 py-3'>READ MORE <svg width="22" className='ms-3' height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM21.5303 7.03033C21.8232 6.73744 21.8232 6.26256 21.5303 5.96967L16.7574 1.1967C16.4645 0.903806 15.9896 0.903806 15.6967 1.1967C15.4038 1.48959 15.4038 1.96447 15.6967 2.25736L19.9393 6.5L15.6967 10.7426C15.4038 11.0355 15.4038 11.5104 15.6967 11.8033C15.9896 12.0962 16.4645 12.0962 16.7574 11.8033L21.5303 7.03033ZM1 7.25H21V5.75H1V7.25Z" fill="#FEA12D" />
                                        </svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeNews