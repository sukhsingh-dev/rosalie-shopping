import { RiArrowRightUpLongLine, RiMailSendLine, RiPriceTag3Line, RiGiftLine, RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import Logo from "../shared/components/Logo";

export default function NewsLetter() {
    return (
        <>
            <section className="bg-[#fce1ea]" >
                <div className="max-w-360 mx-auto grid grid-cols-3 relative">

                    <div className="px-4 py-20 col-span-2 relative">
                        {/* <Image src="/images/newsletter-text.svg" alt="" width={181} height={200} quality={100} className="absolute top-[10%] right-0 opacity-60" /> */}

                        <h2 className="font-secondary uppercase text-page-dark text-4xl sm:text-5xl lg:text-[72px] tracking-tight">
                            Subscribe to <br />
                            <span className="text-primary">Our Newsletter</span>
                        </h2>
                        <p className="max-w-120 pt-5 uppercase text-page-dark/80 px-2 text-sm tracking-wider">Early access to drops, restock alerts and members-only offers. One email a week, never more.</p>
                        <form className="flex items-center my-15">
                            <RiMailSendLine className="relative -mr-2.5 text-[#7f7f7f] -right-7.5" size={16} />
                            <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="bg-white w-full border border-slate-300 py-5 pl-12.5 text-[12px] tracking-wider max-w-150" />
                            <button type="submit" className="min-h-14.5 inline-flex items-center gap-3 bg-primary text-white uppercase text-xs font-semibold px-6 py-3.5 tracking-widest transition-all duration-300 hover:bg-tertiary group">
                                Subscribe
                                <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </button>
                        </form>
                        <div className="grid grid-cols-3" >
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
                    <div className="flex items-end justify-end">
                        <Image src="/images/nl-2.webp" alt="" width={480} height={576} quality={100} />
                    </div>
                </div>
            </section>
        </>
    );
}