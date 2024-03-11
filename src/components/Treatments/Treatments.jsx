import React from 'react'
import tr1 from "./../../assets/tr1.png"
import tr2 from "./../../assets/tr2.png"
import tr3 from "./../../assets/tr3.png"
import tr4 from "./../../assets/tr4.png"
import tr5 from "./../../assets/tr5.png"

const Treatments = () => {
    return (
        <>
            <div className='flex justify-center '>
                <div className="w-10/12 pb-14 border-b">
                    <div>

                        <h6 className='mulish font-[700] text-[32px] text-center'>Treatments</h6>
                        <div className="flex justify-center pt-2 pb-8">

                            <p className='mulish font-[500] text-[16px] w-10/12 text-center'>The treatment for diabetic retinopathy depends on the severity and stage of the disease. Early detection and treatment can help prevent vision loss or slow down its progresion. Here are some of the treatment options for diabetic retinopathy:</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-wrap'>
                            <div className='w-6/12 px-2 pb-4'>
                                <div className='shadow-lg rounded-xl py-6 px-8 flex'>
                                    <div className='w-2/12'>
                                        <img src={tr1} alt="" />
                                    </div>
                                    <div className='w-10/12'>

                                        <p className='mulish pb-4 font-[700] text-[18px]'>Control of Blood Sugar Levels</p>
                                        <p className='mulish font-[400] text-[14px]'>Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or oral hypoglycemic agents.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-6/12 px-2 pb-4'>
                                <div className='shadow-lg rounded-xl py-6 px-8 flex'>
                                    <div className='w-2/12 pr-5'>
                                        <img src={tr2} alt="" />
                                    </div>
                                    <div className='w-10/12'>

                                        <p className='mulish pb-4 font-[700] text-[18px]'>Intravitreal injections</p>
                                        <p className='mulish font-[400] text-[14px]'>These are injections of medication directly into the eye. Anti-VEGF(vascular endothelial growth factor)injections can help reduce the growth of abnormal blood vessels and prevent them from leaking. Steroid injections can also be used to reduce inflammation in the eye.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-6/12 px-2 pb-4'>
                                <div className='shadow-lg rounded-xl py-6 px-8 flex'>
                                    <div className='w-2/12 pr-10'>
                                        <img src={tr3} alt="" />
                                    </div>
                                    <div className='w-10/12'>

                                        <p className='mulish pb-4 font-[700] text-[18px]'>Vitrectomy</p>
                                        <p className='mulish font-[400] text-[14px]'>In advanced cases of diabetic retinopathy, vitrectomy may be necessary. This surgical procedure involves removing the vitreous gel that fills the center of the eye and replacing it with a clear solution. This can help improve vision by reducing the amount of scar tissue and blood in the eye.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-6/12 px-2 pb-4'>
                                <div className='shadow-lg rounded-xl py-6 px-8 flex'>
                                    <div className='w-2/12 pr-10'>
                                        <img src={tr4} alt="" />
                                    </div>
                                    <div className='w-10/12'>

                                        <p className='mulish pb-4 font-[700] text-[18px]'>Laser Therapy</p>
                                        <p className='mulish font-[400] text-[14px]'>Laser therapy, also known as photocoagulation, is a common treatment for diabetic retinopathy. During this procedure, a laser beam is used to seal leaking blood vassals and prevent the growth of new ones. This can help prevent further damage to the retina and slow down the progression of the disease.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full px-2 pb-4'>
                                <div className='shadow-lg rounded-xl py-6 px-8 flex'>
                                    <div className='w-1/12 pr-10'>
                                        <img src={tr5} alt="" />
                                    </div>
                                    <div className='w-11/12'>

                                        <p className='mulish pb-4 font-[700] text-[18px]'>Anti-inflammatory Medication</p>
                                        <p className='mulish font-[400] text-[14px]'>Nonsteroidal anti-inflammatory drugs(NSAIDs) and corticosteroids can help reduce inflammation in the eye and prevent further damage.</p>
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

export default Treatments