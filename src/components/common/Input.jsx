import React from 'react'

const Input = () => {
    
  return (
    <div>
          <form className=' mt-4 mx-auto'>
              <div className='flex-wrap flex '>
                  <div className='md:w-1/2  w-full  mb-4  md:pr-2  pr-0'>
                      <input type="text"
                          className=" py-2 px-2 border w-full  rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                          placeholder="Firstname" ></input>
                  </div>
                  <div className='md:w-1/2  w-full  mb-4'>
                      <input type="text"
                          class=" py-2 px-2 border w-full  rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                          placeholder="Lastname" ></input>
                  </div>
              </div>
              <input type="text"
                  className=" py-2 px-2  border w-full  rounded-[5px] border-[#00000066] text-[#000000B2] mb-4 font-poppin"
                  placeholder="Email Address" />
              <div className='flex-wrap flex'>
                  <div className='md:w-1/2  w-full  mb-4  md:pr-2  pr-0'>
                      <input type="number"
                          className=" py-2 px-2 border w-full  rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                          placeholder="Password" ></input>
                  </div>
                  <div className='md:w-1/2  w-full  mb-4'>
                      <input type="number"
                          className=" py-2 px-2  border w-full  rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                          placeholder="Confirm password" ></input>
                  </div>
              </div>
              <textarea placeholder="About Me" class=" border w-full  rounded-[5px] pb-[90px] border-[#00000066] text-[#000000B2] px-2  pt-[10px] font-poppin"></textarea>
              <button className='bg-[#2C49FE] text-white py-[11px] px-2 w-full rounded-[23px] mt-[37px] hover:text-blue-300 font-poppin '>Sign up</button>

          </form>
    </div>
  )
}

export default Input
