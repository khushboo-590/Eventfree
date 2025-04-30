import React from 'react'
import Header from './common/Header'

const Hero2 = () => {
    return (
        <div className='bg-[url(./assets/images/png/bh-img.png)] min-w-screen h-[372px] bg-cover bg-center flex flex-col relative w-full'>
            <div className="absolute inset-0 bg-[##000000] " />
            <div className="relative z-4 w-full">
                <div className='container max-w-[1320px] mx-auto p-2 pt-50 flex-col flex'>
                    <p className='text-white text-base leading-[150%] font-normal'>Home &gt; Event</p>
                    <div className=' text-white  font-poppin text-[38px] sm:text-[48px] md:text-[64px]  '>
                        <Header title="Events" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero2
