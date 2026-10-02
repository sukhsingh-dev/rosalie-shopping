'use client'
import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiSearch2Line, RiSearchLine } from "react-icons/ri";

const HeaderSearchBar = () => {
    const [openSeacrh, setOpenSearch] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (openSeacrh) {
            inputRef?.current?.focus();
        }
    }, [openSeacrh]);

    return (
        <>
            <button data-cursor-label="open search" onClick={() => setOpenSearch(true)}><RiSearchLine size={20} /></button>
            <div className={`bg-white absolute inset-0 z-1 transition-transform duration-300 ${openSeacrh ? 'translate-y-0' : '-translate-y-full'}`} >
                <div className={`max-w-260 mx-auto px-4 py-2 w-full h-full justify-center items-center ${openSeacrh ? 'flex' : 'hidden'}`}>
                    <RiSearch2Line size={18} className="text-page-dark/60" />
                    <input ref={inputRef} placeholder="Search" className="border border-slate-300 py-3 -mx-8 px-10 w-full text-page-dark outline-0" />
                    <button aria-label="Close search" onClick={() => setOpenSearch(false)}><RiCloseFill size={20} className="text-page-dark/60" /></button>
                </div>
            </div>
        </>
    );
};

export default HeaderSearchBar;