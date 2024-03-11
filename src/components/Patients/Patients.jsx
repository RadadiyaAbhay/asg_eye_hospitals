import React from 'react'
import pa2 from './../../assets/pa2.png'
import pa3 from './../../assets/pa3.png'
import paback from './../../assets/paback.png'


const Patients = () => {
    return (
        <>
            <div className='relative'>
            <img src={paback} className='absolute w-full z-[-20] top-0 left-0' alt="" />

                <h5 className='mulish font-[700] text-[48px] text-center pt-24 pb-16'>Our patients speak about us</h5>
                <div className='flex justify-center items-center overflow-hidden pb-24'>
                    <div className='w-5/12 overflow-hidden image-container1 rounded-xl ml-[-50%] mr-40'>
                        <img src={pa2} alt="" className='object-cover' srcset="" />
                    </div>
                    <div className='w-7/12 flex items-center gap-10'>
                        <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2L3 14L15 26" stroke="black" stroke-width="3" />
                        </svg>
                        <div className='image-container w-full h-full rounded-xl'>
                        <iframe className=' rounded-xl h-[400px] w-full' src="https://www.youtube.com/embed/SbztY6DMX3A?si=7epUiXGM8-pf8w2l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L14 14L2 26" stroke="black" stroke-width="3" />
                        </svg>

                    </div>
                    <div className='w-5/12 overflow-hidden image-container1 rounded-xl ml-40  mr-[-50%]'>
                        <img src={pa3} alt="" className='object-cover' srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Patients