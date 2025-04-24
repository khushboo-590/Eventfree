import React from 'react';
import Header from './common/Header';
import { cardData } from './utils/helper';
import girlImg from '../assets/images/png/girl-img.png';

const Section3 = () => {
    return (
        <section
            className="relative bg-cover bg-center flex flex-col min-h-[513px]"
            style={{ backgroundImage: `url(${girlImg})` }}
        >
            <div className="absolute inset-0 bg-[#2C49FECC] z-0" />

            <div className="relative z-10 w-full">
                <div className="container max-w-[1320px] mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="text-center mt-[50px] w-full max-w-[708px] text-white text-[48px] leading-[130%] ">
                            <Header title="Lorem ipsum dolor sit amet, consectetur" />
                            <p className="text-white text-[16px] mt-[40px] font-normal leading-[24px] text-center max-w-[765px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit.
                                Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center mt-[79px] mb-[49px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px] sm:gap-[40px] md:gap-[100px] lg:gap-[190px] p-6">
                            {cardData.map((card, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="mb-4">
                                        <img src={card.icon} alt={card.description} className="w-[40px] h-[40px]" />
                                    </div>
                                    <h3 className="font-bold text-[35px] leading-[100%] text-white">{card.title}</h3>
                                    <p className="font-normal text-[18px] leading-[100%] text-white pt-4">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;


