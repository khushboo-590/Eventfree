import React from 'react';
import heroiImg from '../assets/images/png/hero-img.png';
import Navbar from './common/Navbar';
import Header from './common/Header';

const Hero = () => {
  return (
    <section
      className='min-h-[986px] bg-cover bg-center flex flex-col relative w-full'
      style={{ backgroundImage: `url(${heroiImg})` }}
    >
      <div className="absolute inset-0 bg-[#00000091] " />
      <div className="relative z-10 w-full">
        <div className='container max-w-[1320px] mx-auto p-2'>
        <Navbar />
       
          <div className="mt-[173px] text-white max-w-[1044px] text-[38px] sm:text-[48px] md:text-[64px] leading-[120%] sm:leading-[130%] md:leading-[150%] font-poppin">
            <Header
              title="Sed tortor in quisque morbi"/>
            <svg className=' ml-100 hidden lg:block ' width="472" height="8" viewBox="0 0 472 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.49805" width="469.503" height="8" fill="#01C8FF" />
              <rect width="414.561" height="8" fill="#2C49FE" />
            </svg>
              <Header title="scelerisque etiam eu."
            />
          </div>
          <p className='font-normal text-[20px] leading-[100%] text-[#FFFFFF] max-w-[765px] mt-[18px] ff-yantramanav '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,</p>
          <div className=' flex gap-[23px] items-center mt-[33px] mb-[145px]'>
            <button className=' bg-[#2C49FE] rounded-[28px] py-3 px-5 mt-[24px] text-white hover:bg-white hover:text-[#2C49FE] font-poppin'>Get Started</button>
            <a href="/" className=' font-normal text-[20px] leading-[-150%] text-white pt-5 font-poppin'>Learn more</a>
          </div>
          <div class="flex flex-wrap items-center mb-5 py-3 relative bg-[#2C49FEBD] max-w-[962px]
            rounded-[10px] sm:rounded-[10px] md:rounded-[30px] lg:rounded-[150px]">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center mb-4 sm:mb-0">
              <div class="flex items-center justify-center">
                <p class="px-4 mt-2  ">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 16.7917C17.6401 16.7917 19.375 15.0569 19.375 12.9167C19.375 10.7766 17.6401 9.04175 15.5 9.04175C13.3599 9.04175 11.625 10.7766 11.625 12.9167C11.625 15.0569 13.3599 16.7917 15.5 16.7917Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.4993 2.58337C12.7588 2.58337 10.1305 3.67206 8.19258 5.60994C6.2547 7.54781 5.16602 10.1761 5.16602 12.9167C5.16602 15.3605 5.68527 16.9596 7.10352 18.7292L15.4993 28.4167L23.8952 18.7292C25.3134 16.9596 25.8327 15.3605 25.8327 12.9167C25.8327 10.1761 24.744 7.54781 22.8061 5.60994C20.8682 3.67206 18.2399 2.58337 15.4993 2.58337V2.58337Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </p>
                <p class="text-white text-[20px] font-medium leading-[100%] pt-2 pr-7  font-poppin">
                  Location<br /><span class="text-[14px] font-normal opacity-70 leadind-[100%] font-poppin">Search by city</span>
                </p>
                <svg className="hidden lg:block"   width="3" height="74" viewBox="0 0 3 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1.5" y1="6.55671e-08" x2="1.5" y2="74" stroke="white" stroke-width="3" />
                </svg>
              </div>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center mb-4 sm:mb-0 ">
              <div class="flex items-center justify-center">
                <p class="px-4 mt-2">
                 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-nan -nanL20.1673 2.33333H19.0007C18.3563 2.33333 17.834 1.811 17.834 1.16667C17.834 0.857247 17.7111 0.560501 17.4923 0.341709C17.2735 0.122916 16.9767 0 16.6673 0C16.3579 0 16.0612 0.122916 15.8424 0.341709C15.6236 0.560501 15.5007 0.857247 15.5007 1.16667C15.5007 1.811 14.9783 2.33333 14.334 2.33333H9.66732C9.02299 2.33333 8.50065 1.811 8.50065 1.16667C8.50065 0.857247 8.37774 0.560501 8.15894 0.341709C7.94015 0.122916 7.6434 0 7.33398 0C7.02457 0 6.72782 0.122916 6.50903 0.341709C6.29023 0.560501 6.16732 0.857247 6.16732 1.16667C6.16732 1.811 5.64498 2.33333 5.00065 2.33333H3.83398C2.90573 2.33333 2.01549 2.70208 1.35911 3.35846C0.702733 4.01484 0.333984 4.90508 0.333984 5.83333V19.8333C0.333984 20.7616 0.702733 21.6518 1.35911 22.3082C2.01549 22.9646 2.90573 23.3333 3.83398 23.3333H20.1673C21.0956 23.3333 21.9858 22.9646 22.6422 22.3082C23.2986 21.6518 23.6673 20.7616 23.6673 19.8333V5.83333C23.6673 4.90508 23.2986 4.01484 22.6422 3.35846C21.9858 2.70208 21.0956 2.33333 20.1673 2.33333L-nan -nanZM21.334 19.8333C21.334 20.1428 21.2111 20.4395 20.9923 20.6583C20.7735 20.8771 20.4767 21 20.1673 21H3.83398C3.52457 21 3.22782 20.8771 3.00903 20.6583C2.79023 20.4395 2.66732 20.1428 2.66732 19.8333C2.66732 15.323 6.32366 11.6667 10.834 11.6667H13.1673C17.6776 11.6667 21.334 15.323 21.334 19.8333ZM21.334 5.83333C21.334 7.76633 19.767 9.33333 17.834 9.33333H6.16732C4.23432 9.33333 2.66732 7.76633 2.66732 5.83333C2.66732 5.52391 2.79023 5.22717 3.00903 5.00838C3.22782 4.78958 3.52457 4.66667 3.83398 4.66667H5.00065C5.64498 4.66667 6.16732 5.189 6.16732 5.83333C6.16732 6.14275 6.29023 6.4395 6.50903 6.65829C6.72782 6.87708 7.02457 7 7.33398 7C7.6434 7 7.94015 6.87708 8.15894 6.65829C8.37774 6.4395 8.50065 6.14275 8.50065 5.83333C8.50065 5.189 9.02299 4.66667 9.66732 4.66667H14.334C14.9783 4.66667 15.5007 5.189 15.5007 5.83333C15.5007 6.14275 15.6236 6.4395 15.8424 6.65829C16.0612 6.87708 16.3579 7 16.6673 7C16.9767 7 17.2735 6.87708 17.4923 6.65829C17.7111 6.4395 17.834 6.14275 17.834 5.83333C17.834 5.189 18.3563 4.66667 19.0007 4.66667H20.1673C20.4767 4.66667 20.7735 4.78958 20.9923 5.00838C21.2111 5.22717 21.334 5.52391 21.334 5.83333Z" fill="white" />
                  </svg>


                </p>
                <p class="text-white text-[20px] font-medium leading-[100%] pt-3 pr-7 font-poppin">
                  Date<br /><span class="text-[14px] font-normal opacity-70 leadind-[100%] font-poppin">09/23/2021</span>
                </p>
                <svg className="hidden lg:block" width="3" height="74" viewBox="0 0 3 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1.5" y1="6.55671e-08" x2="1.5" y2="74" stroke="white" stroke-width="3" />
                </svg>

              </div>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center mb-4 sm:mb-0">
              <div class="flex items-center justify-center">
                <p class="px-4 mt-2">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8981 24.69L20.0981 18.285C19.9848 17.3778 19.5439 16.5432 18.8583 15.9383C18.1728 15.3333 17.2899 14.9996 16.3756 15H13.6206C12.7068 15.0003 11.8245 15.3342 11.1395 15.9391C10.4545 16.544 10.0139 17.3782 9.90062 18.285L9.09937 24.69C9.0554 25.0419 9.08679 25.3991 9.19147 25.7379C9.29615 26.0768 9.47171 26.3894 9.70651 26.6552C9.9413 26.921 10.2299 27.1338 10.5533 27.2794C10.8766 27.4251 11.2272 27.5003 11.5819 27.5H18.4169C18.7714 27.5001 19.1219 27.4248 19.4451 27.279C19.7683 27.1333 20.0567 26.9205 20.2914 26.6547C20.5261 26.389 20.7015 26.0764 20.8061 25.7376C20.9107 25.3989 20.9421 25.0418 20.8981 24.69V24.69Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 10C17.0711 10 18.75 8.32107 18.75 6.25C18.75 4.17893 17.0711 2.5 15 2.5C12.9289 2.5 11.25 4.17893 11.25 6.25C11.25 8.32107 12.9289 10 15 10Z" stroke="white" stroke-width="2" />
                    <path d="M5 13.75C6.38071 13.75 7.5 12.6307 7.5 11.25C7.5 9.86929 6.38071 8.75 5 8.75C3.61929 8.75 2.5 9.86929 2.5 11.25C2.5 12.6307 3.61929 13.75 5 13.75Z" stroke="white" stroke-width="2" />
                    <path d="M25 13.75C26.3807 13.75 27.5 12.6307 27.5 11.25C27.5 9.86929 26.3807 8.75 25 8.75C23.6193 8.75 22.5 9.86929 22.5 11.25C22.5 12.6307 23.6193 13.75 25 13.75Z" stroke="white" stroke-width="2" />
                    <path d="M5.00023 17.5H4.61773C4.02593 17.4999 3.4533 17.7098 3.0017 18.0923C2.5501 18.4747 2.24883 19.005 2.15148 19.5887L1.73523 22.0887C1.67549 22.4469 1.69451 22.8138 1.79094 23.1639C1.88738 23.514 2.05892 23.8389 2.29364 24.116C2.52836 24.393 2.82062 24.6156 3.1501 24.7683C3.47957 24.921 3.83835 25 4.20148 25H8.75023" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 17.5H25.3825C25.9743 17.4999 26.5469 17.7098 26.9985 18.0923C27.4501 18.4747 27.7514 19.005 27.8487 19.5887L28.265 22.0887C28.3247 22.4469 28.3057 22.8138 28.2093 23.1639C28.1129 23.514 27.9413 23.8389 27.7066 24.116C27.4719 24.393 27.1796 24.6156 26.8501 24.7683C26.5207 24.921 26.1619 25 25.7987 25H21.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </p>
                <p class="text-white text-[20px] font-medium leading-[100%] pt-3 pr-7 font-poppin">
                  Capacity<br /><span class="text-[14px] font-normal opacity-70 leadind-[100%] font-poppin">Search by city</span>
                </p>
                <svg className="hidden lg:block" width="3" height="74" viewBox="0 0 3 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1.5" y1="6.55671e-08" x2="1.5" y2="74" stroke="white" stroke-width="3" />
                </svg>

              </div>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
              <button class="bg-white text-[#2C49FE] font-bold  text-[20px]  leading-[100%] px-6 py-5 rounded-full hover: hover:text-blue-300 font-poppin ">
                GO CHECK
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


