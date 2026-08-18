'use client'
import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiSearch2Line } from "react-icons/ri";

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
            <button aria-label="Open search" data-cursor-label="open" onClick={() => setOpenSearch(true)} className="flex items-center">
                <RiSearch2Line size={22} className="lg:hidden" />
                <span className="hidden lg:inline">SEARCH</span>
            </button>
            <div className={`bg-background absolute inset-0 z-1 transition-transform duration-300 ${openSeacrh ? 'translate-y-0' : '-translate-y-full'}`} >
                <div className={`max-w-260 mx-auto px-4 py-2 w-full h-full justify-center items-center gap-1 ${openSeacrh ? 'flex' : 'hidden'}`}>
                    <RiSearch2Line size={18} className="text-page-dark/60" />
                    <input ref={inputRef} placeholder="Search" className="border border-slate-300 py-3 -mx-4 px-8 sm:-mx-8 sm:px-10 w-full min-w-0 text-page-dark outline-0" />
                    <button aria-label="Close search" onClick={() => setOpenSearch(false)}><RiCloseFill size={20} className="text-page-dark/60" /></button>
                </div>
            </div>
        </>
    );
};

export default HeaderSearchBar;