import Link from "next/link"
import Logo from "./Logo"
import { RiArrowRightUpLongLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-page-dark text-white/90">
            <div className="max-w-360 mx-auto px-4 pb-10 pt-15">
                <div className="pb-10 border-b border-slate-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2">
                        <div className="font-secondary text-6xl mb-5">ROSALIE</div>
                        <p className="text-sm leading-relaxed">Designed in UK, made for every day.<br /> Premium comfort, cut with care.</p>
                    </div>
                    <div className="text-sm">
                        <h3 className="mb-4 uppercase text-secondary-light tracking-[2px]">Shop</h3>
                        <ul className="space-y-2 tracking-[0.5px]">
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    New Arrivals
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Most Popular
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Collections
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Men
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Women
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h3 className="mb-4 uppercase text-secondary-light tracking-[2px]">Company</h3>
                        <ul className="space-y-2 tracking-[0.5px]">
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Stores
                                </Link>
                            </li>

                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Sustainbility
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h3 className="mb-4 uppercase text-secondary-light tracking-[2px]">Help</h3>
                        <ul className="space-y-2 tracking-[0.5px]">
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Order Tracking
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Returns & Exchanges
                                </Link>
                            </li>

                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    Size Guide
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-tertiary group">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>



                </div>
                <Logo
                    logoFill="#90a1b9"
                    logoClass="w-full h-auto px-20"
                />
                <div className="border-t border-slate-700 flex justify-between pt-5 px-4 text-xs tracking-[0.5px]" >
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