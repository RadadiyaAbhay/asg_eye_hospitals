import React from 'react'

const Form = () => {
    return (
        <>
            <div className='px-24 flex justify-center'>
                <div className='w-8/12 border bg-white mt-14 mb-20 shadow-md rounded-lg p-10'>
                    <p className='text-[20px] font-[600] mulish'>Our constant endeavor is to provide high-quality care to our patients. Your feedback is important to us and can help us improve our services.</p>
                    <div className='pt-10 flex w-full'>
                        <div className='pe-2 w-full'>
                            <label className='mulish flex items-center font-semibold text-[16px] pb-2 ps-1'><svg width="14" className='me-3' height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.333008 18.3333C0.333008 14.6514 3.31777 11.6667 6.99967 11.6667C10.6816 11.6667 13.6663 14.6514 13.6663 18.3333H11.9997C11.9997 15.5719 9.76109 13.3333 6.99967 13.3333C4.23825 13.3333 1.99967 15.5719 1.99967 18.3333H0.333008ZM6.99967 10.8333C4.23717 10.8333 1.99967 8.59584 1.99967 5.83334C1.99967 3.07084 4.23717 0.833336 6.99967 0.833336C9.76217 0.833336 11.9997 3.07084 11.9997 5.83334C11.9997 8.59584 9.76217 10.8333 6.99967 10.8333ZM6.99967 9.16667C8.84134 9.16667 10.333 7.675 10.333 5.83334C10.333 3.99167 8.84134 2.5 6.99967 2.5C5.15801 2.5 3.66634 3.99167 3.66634 5.83334C3.66634 7.675 5.15801 9.16667 6.99967 9.16667Z" fill="black" />
                            </svg>
                                Name</label>
                            <input type="text" placeholder='Full Name' className='mulish bg-[#F5FAFC] block border w-full text-[16px] font-[400] rounded-lg px-5 py-3' />
                        </div>
                        <div className='ps-2 w-full'>
                            <label className='mulish flex items-center font-semibold text-[16px] pb-2 ps-1'><svg width="20" height="20" className='me-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.80463 8.90175C8.585 10.274 9.726 11.415 11.0982 12.1953L11.8353 11.1634C12.0804 10.8204 12.543 10.7144 12.913 10.9165C14.0853 11.5569 15.3809 11.9461 16.7324 12.0531C17.1658 12.0874 17.5 12.4491 17.5 12.8838V16.6028C17.5 17.0301 17.1768 17.3881 16.7518 17.4318C16.3102 17.4772 15.8647 17.5 15.4167 17.5C8.28299 17.5 2.5 11.717 2.5 4.58333C2.5 4.13522 2.52285 3.68976 2.56824 3.24813C2.61192 2.82312 2.96995 2.5 3.39721 2.5H7.11618C7.55092 2.5 7.91261 2.8342 7.94692 3.26757C8.05389 4.61907 8.44308 5.9147 9.0835 7.08703C9.28558 7.457 9.17958 7.91962 8.83658 8.16464L7.80463 8.90175ZM5.70354 8.35433L7.28683 7.22341C6.83789 6.25428 6.53023 5.22652 6.37273 4.16667H4.17422C4.16919 4.30527 4.16667 4.44417 4.16667 4.58333C4.16667 10.7965 9.2035 15.8333 15.4167 15.8333C15.5558 15.8333 15.6947 15.8308 15.8333 15.8257V13.6272C14.7735 13.4697 13.7457 13.1621 12.7766 12.7132L11.6457 14.2965C11.1882 14.1187 10.7463 13.9096 10.3228 13.6717L10.2744 13.6442C8.64142 12.7156 7.28445 11.3586 6.35583 9.72558L6.32828 9.67717C6.09041 9.25367 5.88128 8.81183 5.70354 8.35433Z" fill="black" />
                            </svg>

                                Phone</label>
                            <input type="text" placeholder='Phone Number' className='mulish bg-[#F5FAFC] block border w-full text-[16px] font-[400] rounded-lg px-5 py-3' />
                        </div>
                    </div>
                    <div className='pt-5 flex w-full'>
                        <div className='pe-2 w-full'>
                            <label className='mulish flex items-center font-semibold text-[16px] pb-2 ps-1'><svg width="20" height="18" className='me-3' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66634 15.6667V10.6667H13.333V15.6667H15.833V2.33334H4.16634V15.6667H6.66634ZM8.33301 15.6667H11.6663V12.3333H8.33301V15.6667ZM17.4997 15.6667H19.1663V17.3333H0.833008V15.6667H2.49967V1.50001C2.49967 1.03977 2.87277 0.666672 3.33301 0.666672H16.6663C17.1266 0.666672 17.4997 1.03977 17.4997 1.50001V15.6667ZM9.16634 5.66667V4.00001H10.833V5.66667H12.4997V7.33334H10.833V9H9.16634V7.33334H7.49967V5.66667H9.16634Z" fill="black" />
                            </svg>

                                Select Hospital</label>
                            <select placeholder='Full Name' className='mulish bg-[#F5FAFC] block border w-full text-[16px] font-[400] rounded-lg px-5 py-3'>
                                <option value="-1" className='mulish text-[16px] font-[400]'>Jodhpur, Pal Link Road</option>
                            </select>
                        </div>
                        <div className='ps-2 w-full'>
                            <label className='mulish flex items-center font-semibold text-[16px] pb-2 ps-1'><svg width="18" height="16" className='me-3' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5013 0.5H16.5013C16.9616 0.5 17.3346 0.8731 17.3346 1.33333V14.6667C17.3346 15.1269 16.9616 15.5 16.5013 15.5H1.5013C1.04107 15.5 0.667969 15.1269 0.667969 14.6667V1.33333C0.667969 0.8731 1.04107 0.5 1.5013 0.5ZM15.668 4.0316L9.06114 9.94833L2.33464 4.01328V13.8333H15.668V4.0316ZM2.76085 2.16667L9.05289 7.71833L15.2521 2.16667H2.76085Z" fill="black" />
                            </svg>
                                Email</label>
                            <input type="text" placeholder='Email Address' className='mulish bg-[#F5FAFC] block border w-full text-[16px] font-[400] rounded-lg px-5 py-3' />
                        </div>
                    </div>
                    <div className='pt-5 flex w-full'>
                        <div className='w-full'>
                            <label className='mulish flex items-center font-semibold text-[16px] pb-2 ps-1'><svg width="16" height="16" className='me-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.16667 13.7417H3.34517L11.1066 5.98024L9.92808 4.80173L2.16667 12.5632V13.7417ZM15.5 15.4083H0.5V11.8728L11.6958 0.676943C12.0213 0.351501 12.5489 0.351501 12.8743 0.676943L15.2314 3.03396C15.5568 3.3594 15.5568 3.88703 15.2314 4.21248L5.7022 13.7417H15.5V15.4083ZM11.1066 3.62322L12.2851 4.80173L13.4636 3.62322L12.2851 2.44471L11.1066 3.62322Z" fill="black" />
                            </svg>

                                Remark</label>
                            <textarea type="text" rows={3} placeholder='Please enter your remark' className='mulish bg-[#F5FAFC] block border w-full text-[16px] font-[400] rounded-lg px-5 py-3' ></textarea>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Form