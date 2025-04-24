import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import insta from '../assets/images/svg/insta.svg'
import face from '../assets/images/svg/face.svg'
import twitter from '../assets/images/svg/twitter.svg'
import footerImg from '../assets/images/png/footerImg.png'
import footer1 from '../assets/images/png/footer1.png'
import footer2 from '../assets/images/png/footer2.png'
import footer3 from '../assets/images/png/footer3.png'
import footer4 from '../assets/images/png/footer-4.png'

const Footer = () => {
  return (
      <section className='bg-black    '>
          <div className=' container max-w-[1320px] mx-auto pt-[90px] justify-center '>
          <div className=' flex flex-wrap justify-between p-2'>
                  <div className=' w-full lg:w-1/4 mb-2  mx-auto '>
                      <img src={logo} alt="logo"></img>
                      <p className=' font-normal text-[14px] leading-[21px] text-white max-w-[346px] mt-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c </p>
                      <div className=' flex gap-[15px] mt-[24px] pb-[96px] '>
                          <a href="/" className='transition-transform duration-300 hover:scale-110 inline-block'><img src={insta} alt="insta"></img></a>
                          <a href="/" className='transition-transform duration-300 hover:scale-110 inline-block'>  <img src={face} alt="face"></img></a>
                          <a href="/" className='transition-transform duration-300 hover:scale-110 inline-block'> <img src={twitter} alt="twitter"></img></a>

                      </div>
                  </div>
                  <div className=' w-full lg:w-2/4 mb-2   mx-auto'>
                      <div className=' flex flex-wrap p-2'>
                          <div className='w-full md:w-2/8 sm:w-3/12 mb-2'>
                              <ul className='list-none flex flex-col '>
                                  <li>
                                      <a href="/" className='text-white text-[14px] font-bold leading-[100%] '>SERVICES</a>
                                  </li>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>About</a>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>News</a>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>ullamcorper</a>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>contact</a>

                              </ul>
                          </div>
                          <div className='w-full md:w-2/8 sm:w-3/8 mb-2   mx-auto'>
                              <ul className='list-none flex flex-col '>
                                  <li>
                                      <a href="/" className='text-white text-[14px] font-bold leading-[100%] '>Event</a>
                                  </li>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>ullamcorper</a>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>ullamcorper</a>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>ullamcorper</a>
                                  <a href="/" className='text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE]'>ullamcorper</a>


                              </ul>
                          </div>
                          <div className='w-full md:w-4/8 sm:w-3/8 mb-2'>
                              <ul className='list-none flex flex-col '>
                                  <li>
                                      <a href="/" className='text-white text-[14px] font-bold leading-[100%] pt-2'>Gallery</a>
                                  </li>
                                  <div className='flex  gap-2 mt-4'>
                                      <a href="/" >
                                          <img src={footerImg}></img></a> <a href="/" >
                                          <img src={footer1}></img></a> <a href="/" >
                                          <img src={footer2}></img></a>
                                  </div>
                                  <div className='flex wrap gap-2 mt-2'>
                                      <a href="/" >
                                          <img src={footer3}></img></a> <a href="/" >
                                          <img src={footer4}></img></a> <a href="/" >
                                          <img src={footerImg}></img></a>
                                  </div>
                                  
                                  

                              </ul>
                          </div>
                      </div>
                    </div>
              </div>
              <p className='text-center justify-center flex text-white text-[14px] font-normal leading-[100%]  pb-[25px]'>© Credits of companyName belong to companyName.</p>
          </div>
    </section>
  )
}

export default Footer


