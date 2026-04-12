
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black mt-16 py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className='text-white'>
                    <h2 className="text-2xl font-bold text-purple-500 mb-3">HERO.IO</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Discover the best apps for your everyday life.
                        Productivity, entertainment, and more.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <FaGithub size={20} className="text-gray-500 hover:text-purple-500 cursor-pointer" />
                        <FaTwitter size={20} className="text-gray-500 hover:text-purple-500 cursor-pointer" />
                        <FaLinkedin size={20} className="text-gray-500 hover:text-purple-500 cursor-pointer" />
                    </div>
                </div>

                <div className='text-white'>
                    <h3 className="font-semibold mb-3">Explore</h3>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li><Link href="/" className="hover:text-purple-500">Home</Link></li>
                        <li><Link href="/apps" className="hover:text-purple-500">All Apps</Link></li>
                        <li><Link href="/
installation
" className="hover:text-purple-500">
                            Installation
                        </Link></li>
                        <li><Link href="/dashboard" className="hover:text-purple-500">Dashboard</Link></li>
                    </ul>
                </div>

                <div className='text-white'>
                    <h3 className="font-semibold mb-3 ">Categories</h3>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li className="hover:text-purple-500 cursor-pointer">Social Media</li>
                        <li className="hover:text-purple-500 cursor-pointer">Games</li>
                        <li className="hover:text-purple-500 cursor-pointer">Productivity</li>
                        <li className="hover:text-purple-500 cursor-pointer">Entertainment</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className="font-semibold mb-3">Contact</h3>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li>mdtanzid.525@.gmail.com</li>
                        <li>01798546510</li>
                        <li>Bogura, Bangladesh</li>
                    </ul>
                </div>

            </div>
            <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} tanzidMondol — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;