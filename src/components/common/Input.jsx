import React from 'react'
import { form } from '../../utils/helper'
import { number } from '../../utils/helper'
import { email } from '../../utils/helper'
import { message } from '../../utils/helper'
const Input = () => {
    
  return (
    <div>
          <form className=' mt-4 mx-auto'>
              <div className='flex-wrap flex'>
                  {form.map((item, index) => (
                      <div key={index} className='md:w-1/2 w-full mb-4 md:pr-2 pr-0'>
                          <input
                              type="text"
                              name={item.name}
                              className="py-2 px-2 border w-full rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                              placeholder={item.placeholder}
                          />
                      </div>
                  ))}
              </div>
              {email.map((item, index) => (
                  <div key={index} className='w-full mb-4'>
                      <input
                          type={item.type}
                          name={item.name}
                          className="py-2 px-2 border w-full rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                          placeholder={item.placeholder}
                      />
                  </div>
              ))}
              <div className='flex-wrap flex'>
                  {number.map((value, index) => (
                      <div key={index} className='md:w-1/2 w-full mb-4 md:pr-2 pr-0'>
                          <input
                              type="number"
                              name={value.number}
                              className="py-2 px-2 border w-full rounded-[5px] border-[#00000066] text-[#000000B2] font-poppin"
                              placeholder={value.placeholder}
                          />
                      </div>
                  ))}
              </div>
              {message.map((field, index) => (
                  <div key={index} className='w-full mb-4'>
                      {field.type === "textarea" && (
                          <textarea
                              name={field.name}
                              className="border w-full rounded-[5px] pb-[90px] border-[#00000066] text-[#000000B2] px-2 pt-[10px] font-poppin"
                              placeholder={field.placeholder}
                          />
                      )}
                  </div>
              ))}              <button className='bg-[#2C49FE] text-white py-[11px] px-2 w-full rounded-[23px] mt-[37px] hover:text-blue-300 font-poppin '>Sign up</button>

          </form>
    </div>
  )
}

export default Input
