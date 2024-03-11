import React from 'react'
import homeBanner from "./../../assets/homebanner.png"

const HomeBanner = () => {
    return (
        <div className='banner '>

            {/* <img src={homeBanner} className='absolute w-full z-[-20] top-0 left-0' alt="" /> */}
            <div className='flex items-center mx-auto max-w-8xl px-16'>
                <div className="w-6/12 py-[230px] ps-10">
                    <h2 className='mulish font-semibold text-[60px] text-white'>
                        Super speciality
                        <br />eye hospitals in India
                    </h2>
                    <p className='mulish text-white text-[20px] font-[400] py-8'>It offers a comprehensive range of eye care services including <br/> treatment and surgeries</p>
                    <div><button className='text-white uppercase rounded-lg bg-[#FEA12D] me-2 px-10 py-3 mulish font-[800] text-[18px]'>Consult Now</button> <button className='text-white rounded-lg border border-white px-10 py-3 mulish font-[800] text-[18px] uppercase'>See all doctors</button></div>
                    <div className='pt-8 flex items-center'>
                        <div className='pe-5'>
                            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.2119 18.7553C43.5007 16.8375 43.406 14.8743 42.9278 12.9865C42.2963 10.4927 40.9955 8.13105 39.0257 6.18088C37.0559 4.23072 34.6704 2.94299 32.1516 2.31769C30.2448 1.84434 28.2616 1.75059 26.3246 2.03645M34.5422 17.8471C34.8515 15.7927 34.2075 13.6249 32.6102 12.0435C31.0128 10.4621 28.8231 9.8244 26.7482 10.1306M11.9095 5.39712C12.7394 5.39712 13.5041 5.8427 13.9068 6.56106L16.7013 11.5446C17.0672 12.1971 17.0843 12.9863 16.7473 13.6538L14.0552 18.9843C14.0552 18.9843 14.8354 22.9553 18.1004 26.1877C21.3654 29.4202 25.3629 30.1792 25.3629 30.1792L30.7463 27.5144C31.421 27.1804 32.2187 27.1977 32.8781 27.5606L37.926 30.3391C38.6509 30.7381 39.1005 31.4947 39.1005 32.3159V38.0533C39.1005 40.9751 36.3592 43.0854 33.5628 42.1512C27.8197 40.2327 18.9048 36.5798 13.2543 30.9855C7.60363 25.3914 3.91393 16.5653 1.97605 10.8795C1.03252 8.11103 3.16407 5.39712 6.11526 5.39712H11.9095Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <p className='text-white mulish font-[400] text-[18px]'>Let's talk to doctor</p>
                            <p className='text-white mulish font-[800] text-[32px]'>1800 1200 111</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner