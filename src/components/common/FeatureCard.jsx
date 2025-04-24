import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    
          <div className='w-full md:w-1/2 p-4 flex justify-center  mb-4 mx-auto '>
              <div className='relative mx-auto'>
                  <div className='absolute flex justify-center items-center left-[90px] -translate-y-5'>
                      <div className='w-[79px] h-[79px] border-2 bg-white rounded-full border-[#2C49FE] flex justify-center items-center'>
                          {icon}
                      </div>
                  </div>
              <div className='max-w-[260px] bg-[#2C49FE] py-2 px-6 mt-4 rounded-[5px] border-2 border-transparent hover:bg-white hover:border-[#2C49FE] hover:text-[#2C49FE] transition-colors duration-300'>
                  <h4 className='text-white font-medium text-[25px] text-center pt-8 hover:text-[#2C49FE] transition-colors duration-300'>{title}</h4>
                  <p className='text-white text-[16px] text-center mx-auto pt-2 pb-2 max-w-[220px] px-2 hover:text-[#2C49FE] transition-colors duration-300'>{description}</p>
              </div>
              </div>
          </div>
        


      
  )
}

export default FeatureCard
