import Link from "next/link"
import Logo from "./Logo"
import { RiArrowRightUpLongLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-page-dark text-slate-400">
            <div className="max-w-360 mx-auto px-4 py-10">
                <Logo
                    logoFill="#90a1b9"
                    logoClass="w-full h-auto px-10"
                />
                <div className="border-t border-slate-700 flex justify-between pt-5 px-4" >
                    <p>© {new Date().getFullYear()} Rosalie Fashion. All Rights Reserved.</p>
                    <div className="flex gap-10">
                        <Link href="/privacy" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">Privacy Policy <RiArrowRightUpLongLine className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
                        <Link href="/terms" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">Terms of Use <RiArrowRightUpLongLine className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}