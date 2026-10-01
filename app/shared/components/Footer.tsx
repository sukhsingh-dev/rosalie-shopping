import Link from "next/link"
import { RiArrowRightUpLongLine, RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiWhatsappFill } from "react-icons/ri";
import Logo from "./Logo";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#121214] text-white/90 relative">
            <Image alt="" src="/images/footer-dec.webp" width={176} height={300} quality={100} className="absolute top-10 right-0 pointer-none:" />
            <div className="max-w-360 mx-auto px-4 pb-10 pt-15 relative">
                <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
                    <div className="lg:col-span-2">
                        {/* <div className="font-secondary text-6xl mb-5">ROSALIE</div> */}
                        <Logo
                            logoFill="#ffffff"
                            logoClass="w-75 h-auto opacity-90"
                        />
                        <p className="text-sm leading-relaxed">Designed in UK, made for every day.<br /> Premium comfort, cut with care.</p>
                        <div className="mt-5 flex gap-5">
                            {/* ri social icons */}
                            <a target="_blank" href="#" className="border border-white rounded-full p-2 inline-flex items-center transition-colors duration-300 hover:bg-white hover:text-tertiary">
                                <RiWhatsappFill size={20} />
                            </a>
                            <a target="_blank" href="#" className="border border-white rounded-full p-2 inline-flex items-center transition-colors duration-300 hover:bg-white hover:text-tertiary">
                                <RiInstagramLine size={20} />
                            </a>
                            <a target="_blank" href="#" className="border border-white rounded-full p-2 inline-flex items-center transition-colors duration-300 hover:bg-white hover:text-tertiary">
                                <RiFacebookFill size={20} />
                            </a>
                            <a target="_blank" href="#" className="border border-white rounded-full p-2 inline-flex items-center transition-colors duration-300 hover:bg-white hover:text-tertiary">
                                <RiYoutubeFill size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="text-sm">
                        <h3 className="mb-4 uppercase text-secondary-light tracking-[2px]">Shop</h3>
                        <div className="border border-secondary-light w-10 mb-4" />
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
                        <div className="border border-secondary-light w-10 mb-4" />
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
                        <h3 className="mb-4 uppercase text-secondary-light tracking-[2px]">Address</h3>
                        <div className="border border-secondary-light w-10 mb-4" />
                        <ul className="space-y-2 tracking-[0.5px]">
                            <li className="mb-3">
                                25 Redchurch Street
                            </li>
                            <li className="mb-3">
                                Shoreditch, London
                            </li>
                            <li className="mb-3">
                                E1 6JJ, United Kingdom
                            </li>
                            <li className="mb-3">
                                <a href="mailto:support@rosalie.com" className="hover:text-tertiary transition-colors duration-300">support@rosalie.com</a>
                            </li>

                            <li className="mb-3">
                                <a href="tel:+447911123456" className="hover:text-tertiary transition-colors duration-300">+44 7911 123456</a>
                            </li>
                        </ul>
                    </div>



                </div>
                {/* <Logo
                    logoFill="#90a1b9"
                    logoClass="w-full h-auto px-20"
                /> */}
                <div className="border-t border-white/10 flex justify-between pt-5 px-4 text-xs tracking-[0.5px]" >
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