import { RiArrowRightUpLongLine, RiMailSendLine, RiPriceTag3Line, RiGiftLine, RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import Logo from "../shared/components/Logo";

export default function NewsLetter() {
    return (
        <>
            <section className="bg-[#fce1ea]" >
                <div className="max-w-360 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 relative">
                    <div className="px-4 py-10 lg:py-20 lg:col-span-2 relative z-1">
                        <h2 className="font-secondary uppercase text-page-dark text-4xl sm:text-5xl lg:text-[72px] tracking-tight">
                            Subscribe to <br />
                            <span className="text-primary">Our Newsletter</span>
                        </h2>
                        <p className="max-w-120 pt-5 uppercase text-page-dark/80 px-2 text-sm tracking-wider">Early access to drops, restock alerts and members-only offers. One email a week, never more.</p>
                        <form className="flex items-center my-5 lg:my-10 xl:my-15">
                            <RiMailSendLine className="relative -mr-2.5 text-[#7f7f7f] -right-7.5 hidden lg:block" size={16} />
                            <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="bg-white w-full border border-slate-300 md:py-5 lg:pl-12.5 p-3 text-[12px] tracking-wider max-w-150" />
                            <button type="submit" className="md:min-h-14.5 inline-flex items-center gap-3 bg-primary text-white uppercase text-xs font-semibold md:px-6 md:py-3.5 p-3.25 tracking-widest transition-all duration-300 hover:bg-tertiary group">
                                Subscribe
                                <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </button>
                        </form>
                        <div className="grid lg:grid-cols-3 gap-5" >
                            <div className="flex gap-4">
                                <RiPriceTag3Line size={40} className="text-secondary/60" />
                                <div className="">
                                    <div className="text-black uppercase font-medium">Exculsive Offer</div>
                                    <div className="text-slate-600 text-[14px]">For our subscribers</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <RiGiftLine size={40} className="text-secondary/60" />
                                <div className="">
                                    <div className="text-black uppercase font-medium">New Arrivals</div>
                                    <div className="text-slate-600 text-[14px]">Strait to your inbox</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <RiHeart2Line size={40} className="text-secondary/60" />
                                <div className="">
                                    <div className="text-black uppercase font-medium">Style insporation</div>
                                    <div className="text-slate-600 text-[14px]">Tips, Trends and more</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-end justify-end absolute bottom-0 opacity-30 sm:relative sm:opacity-100">
                        <Image src="/images/nl-2.webp" alt="" width={480} height={576} quality={100} />
                    </div>
                </div>
            </section>
        </>
    );
}