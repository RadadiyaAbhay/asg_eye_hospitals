import React from 'react'


const Banner = ({data}) => {
    return (
        <div>

            <img src={data?.img} className='absolute w-full z-[-20] top-0 left-0' alt="" />
            <div className='px-24'>
                <div className="w-full pt-[180px] flex justify-center flex-wrap">
                    <h2 className='mulish w-full text-center font-semibold text-[48px] text-white'>
                    {data?.title}
                    </h2>
                    <p className='mulish w-full text-center text-white text-[20px] font-[600] '><span className='font-[400]'>Home </span>
                        {
                            data?.path.map((d)=>{
                                return(
                                    <>
                                    {d}
                                    </>
                                )
                            })
                        }
                    </p>
                    <p className='mulish pt-3 font-[400] w-9/12 text-center text-white text-[18px]'>
                        {data?.desc}
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner