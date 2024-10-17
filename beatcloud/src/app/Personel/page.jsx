'use client'
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GiPodiumWinner } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { FaMedapps } from "react-icons/fa6";




 function Personel() {
    const [asideOpen, setAsideOpen] = useState(true);

    const toggleAside = () => {
        setAsideOpen(!asideOpen);
    };

    
    const linkDisplayStyle = asideOpen ? {} : { display: 'none' };
    const paddingLeftStyle = asideOpen ? { paddingLeft: '1rem' } : {};

    return (
        <>
            <header className="flex h-24 items-center bg-[#101010] text-white justify-between px-20 py-0">
                <span className="logo">
                    <span className="absolute top-7 left-8 text-xs">BeatCloud</span>
                </span>
                <div className="flex items-center gap-3">
                    <span className="px-2 bg-[#2D2E2F] py-3 rounded-lg">Importer Playlist</span>
                    <div className="flex flex-col items-center">
                        <span className="bg-[#1CB9F4] w-10 h-10 text-center rounded-full flex items-center justify-center">FF</span>
                        <span>FreeFlow</span>
                    </div>
                </div>
            </header>
            <main className="flex">
                <aside className={`text-white px-5 py-5 bg-[#262728] h-screen transition-all duration-300 ${asideOpen ? 'w-72' : 'w-20'}`} style={paddingLeftStyle}>
                    <div className="flex justify-end text-xl mb-3">
                        <span onClick={toggleAside} className="cursor-pointer"><IoMdArrowRoundBack /></span>
                    </div>
                    <div className="text-xl " >
                        <div className="flex flex-col">
                            <span className="px-1 py-2 gap-2 flex items-center cursor-pointer hover:text-[#1CB9F4]"> 
                                <GiPodiumWinner className="text-3xl" />
                                <a href="#" style={linkDisplayStyle}>Top Playlists</a>
                            </span>
                            <span className="px-1 flex gap-2 items-center py-2 cursor-pointer hover:text-[#1CB9F4]"> 
                                <IoIosSend className="text-3xl" />
                                <a href="#" style={linkDisplayStyle}>Transfert</a>
                            </span>
                            <span className="px-1 py-2 gap-2 flex items-center cursor-pointer hover:text-[#1CB9F4]">
                                <MdCreate className="text-3xl"/>
                                <a href="#" style={linkDisplayStyle}>Generer</a>
                            </span>
                        </div>
                    </div>
                    <div className="text-xl " >
                        <div className="flex flex-col">
                            <span className="px-1 py-2 gap-2 flex items-center cursor-pointer hover:text-[#1CB9F4]"> 
                                <MdOutlineFeaturedPlayList className="text-3xl" />
                                <a href="#" style={linkDisplayStyle}>Playlists</a>
                            </span>
                            <span className="px-1 py-2 gap-2 flex items-center cursor-pointer hover:text-[#1CB9F4]"> 
                                <IoAlbumsOutline className="text-3xl"/>
                                <a href="#" style={linkDisplayStyle}>Albums</a>
                            </span>
                            <span className="px-1 py-2 gap-2 flex items-center cursor-pointer hover:text-[#1CB9F4]"> 
                                <FaPerson className="text-3xl"/>
                                <a href="#" style={linkDisplayStyle}>Mes artistes</a>
                            </span>
                            <span className="px-1 py-2 gap-2 flex items-center cursor-pointer hover:text-[#1CB9F4]"> 
                                <FaMedapps className="text-3xl"/>
                                <a href="#" style={linkDisplayStyle}>Services</a>
                            </span>
                        </div>
                    </div>
                </aside>
                <section className="w-full h-screen back"></section>
            </main>
        </>
    );
}

export default Personel;