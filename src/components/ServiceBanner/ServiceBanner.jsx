import React from 'react'
import news1 from "./../../assets/news1.png"
import blur from "./../../assets/blur.png"
import blur2 from "./../../assets/blur2.png"
import blur3 from "./../../assets/blur3.png"
import blur5 from "./../../assets/blur5.png"
import servicedetail from "./../../assets/servicedetail.png"
import b5 from "./../../assets/b5.png"



const ServiceBanner = () => {
    return (
        <>
            <div className='pt-20 overflow-hidden  mb-5 h-[650px] flex justify-center'>
                <img src={news1} alt="" className='w-10/12 object-cover shadow-md rounded-xl' />
            </div>
            <div className='mb-12 flex justify-center'>
                <p className='mulish w-10/12 font-[400] text-[20px]'>This condition is one of the leading causes of blindness in people with diabetes. It is a serious eye condition that can occur in individuals with diabetes. It is caused by damage to the blood vessels in the retina, which is the light-sensitive tissue at the back of the eye. Here's a comprehensive overview of the causes, symptoms, diagnosis, and treatment of diabetic retinopathy.</p>
            </div>
            <div className='flex pb-20 justify-center'>
                <div className="w-10/12 flex items-center">
                    <div className="w-6/12">
                        <h6 className='font-[700] text-[24px] mulish pb-6'>Causes of Diabetic Retinopathy:</h6>
                        <ul>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>High Blood Sugar Levels</p>
                                <p className='font-[400] text-[16px] mulish pb-6'>Prolonged periods of elevatedblood sugar levels in people with diabetes can damage theblood vessels in the retina, leading to diabetic retinopathy.</p>
                            </li>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>Duration of Diabetes</p>
                                <p className='font-[400] text-[16px] mulish pb-6'>The longer a person has diabetes,the greater their risk of developing diabetic retinopathy.</p>
                            </li>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>Poor Blood Sugar Control</p>
                                <p className='font-[400] text-[16px] mulish pb-6'>Inadequate management ofblood sugar levels, such as irregular monitoring or failureto follow a diabetes management plan, can increase therisk of diabetic retinopathy.</p>
                            </li>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>High Blood Pressure</p>
                                <p className='font-[400] text-[16px] mulish'>Hypertension or high blood pressurecan further damage the blood vessels in the retina,worsening the condition.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-6/12 flex justify-end">
                        <img src={servicedetail} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center pb-16'>
                <div className="w-10/12 px-10 py-10 rounded-xl bg-[#F5FAFC]">
                    <p className='mulish text-[32px] font-[700] pb-2 text-center'>Types of Diabetic Retinopathy</p>
                    <p className='mulish text-[16px] font-[500] text-center'>There are two main types of diabetic retinopathy</p>
                    <div className='pt-8 flex'>
                        <div className='w-6/12  pe-2.5'>
                            <div className='flex px-10 py-6 rounded-xl shadow-lg mulish text-[20px] font-[500] bg-white items-center'>

                                <p className='pe-6 font-[700] text-[50px] text-[#0173BC]'>1.</p>
                                <p>Non-proliferative diabetic <br /> retinopathy (NPDR)</p>
                            </div>
                        </div>
                        <div className='w-6/12  ps-2.5'>
                            <div className='flex px-10 py-6 rounded-xl shadow-lg mulish text-[20px] font-[500] bg-white items-center'>

                                <p className='pe-6 font-[700] text-[50px] text-[#0173BC]'>2.</p>
                                <p>Proliferative diabetic<br />
                                    retinopathy (PDR)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-10">
                <div className="w-8/12 mulish font-[500] text-[20px]">
                    <p className='text-center'>The symptoms of Diabetic Retinopathy in the early stages, diabetic retinopathy may not cause any noticeable symptoms. As the condition progresses, symptoms may include:</p>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="w-10/12 flex border-b pb-10 mb-12">
                    <div className="w-1/5 px-2">
                        <div className="">
                            <img src={blur} alt="" className="w-full border border-black rounded-2xl" />
                        </div>
                        <p className='text-center mulish py-3 font-[800] text-[12px]'>Blurred vision</p>
                    </div>
                    <div className="w-1/5 px-2">
                        <div className="">
                            <img src={blur2} alt="" className="w-full border border-black rounded-2xl" />
                        </div>
                        <p className='text-center mulish py-3 font-[800] text-[12px]'>Fluctuating vision</p>
                    </div>
                    <div className="w-1/5 px-2">
                        <div className="">
                            <img src={blur3} alt="" className="w-full border border-black rounded-2xl" />
                        </div>
                        <p className='text-center mulish py-3 font-[800] text-[12px]'>Dark spots or<br/>
                            strings (floaters)</p>
                    </div>
                    <div className="w-1/5 px-2">
                        <div className="">
                            <img src={blur} alt="" className="w-full border border-black rounded-2xl" />
                        </div>
                        <p className='text-center mulish py-3 font-[800] text-[12px]'>Blurred or<br/>
                            distorted vision</p>
                    </div>
                    <div className="w-1/5 px-2">
                        <div className="">
                            <img src={blur5} alt="" className="w-full border border-black rounded-2xl" />
                        </div>
                        <p className='text-center mulish py-3 font-[800] text-[12px]'>Partial or<br/>
                            total loss of vision</p>
                    </div>
                </div>
            </div>
            <div className='flex pb-20 justify-center'>
                <div className="w-10/12 flex items-center">
                <div className="w-6/12  flex justify-end rounded-xl overflow-hidden">
                        <img src={b5} className='object-right object-cover h-[500px]' alt="" />
                    </div>
                    <div className="w-6/12 ps-16">
                        <h6 className='font-[700] text-[24px] mulish pb-6'>Diagnosis of Diabetic Retinopathy:</h6>
                        <ul>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>Dilated Eye Examination</p>
                                <p className='font-[400] text-[16px] mulish pb-6'>An ophthalmologist or retinaspecialist will perform a dilated eye examination toexamine the retina and blood vessels. This involves usingeye drops to enlarge the pupils and then examining theretina using specialized instruments and techniques.</p>
                            </li>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>Visual Acuity Testing</p>
                                <p className='font-[400] text-[16px] mulish pb-6'>This test measures how well you cansee at various distances.</p>
                            </li>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>Tonometry</p>
                                <p className='font-[400] text-[16px] mulish pb-6'>It measures the pressure inside the eye(intraocular pressure).</p>
                            </li>
                            <li>
                                <p className='font-[600] text-[18px] mulish pb-1'>Fluorescein Angiography</p>
                                <p className='font-[400] text-[16px] mulish'>This test involves injecting a dyeinto a vein in your arm, which travels to the blood vesselsin your eyes. Specialized photographs are taken toevaluate the blood flow and identify any abnormalities inthe blood vessels.</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ServiceBanner