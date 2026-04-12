import Image from 'next/image';
import React from 'react';
import HeroImg from '../assets/images/hero.png';
import Stats from './Stats';

const Hero = () => {
    return (
         <>
        <div className="hero min-h-screen mt-7 ">

            <div className="hero-content w-full">

                <div className="w-full text-center">

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                        We Build <br />
                        <span className="text-purple-500">Productive</span> Apps
                    </h1>

                    <p className="py-6 text-gray-500 max-w-md mx-auto text-sm sm:text-base">
                        At HERO.IO, we craft innovative apps designed to make everyday
                        life simpler, smarter, and more exciting. Our goal is to turn your
                        ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex items-center gap-3 justify-center mb-8">
                        <button className="btn btn-primary px-6">
                            App Store
                        </button>
                        <button className="btn btn-outline px-6">
                            Play Store
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={HeroImg}
                            alt="Hero image"
                            width={900}
                            height={600}
                            priority
                            className="object-contain drop-shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </div>
         </>
    );
};

export default Hero;