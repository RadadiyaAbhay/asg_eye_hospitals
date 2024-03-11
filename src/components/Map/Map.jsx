import React from 'react'
import map from './../../assets/map.png';

const Map = () => {
    return (
        <div className='px-24 pt-64 pb-10'>
            <div className='rounded-lg bg-[#0173bc0a] p-7'>
                <div className='h-80 overflow-hidden rounded-lg'>
                    <img src={map} className='object-cover rounded-lg' alt="" />
                </div>
                <div className='pt-4 flex'>
                    <div className="pe-1 w-4/12">
                        <input type="text" placeholder='Enter zipcode' className='w-full mulish bg-white block border  text-[16px] font-[400] rounded-lg px-5 py-3' />
                    </div>
                    <div className="ps-1.5 w-8/12">
                        <input type="text" placeholder='Search Hospital' className='w-full mulish bg-white block border  text-[16px] font-[400] rounded-lg px-5 py-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map