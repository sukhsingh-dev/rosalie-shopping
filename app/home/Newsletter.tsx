import { RiArrowRightUpLongLine } from "react-icons/ri";

export default function NewsLetter() {
    return (
        <section>
            <div className="max-w-360 mx-auto px-4 py-30 flex gap-40 justify-between items-center" >
                <div>
                    <h2 className="font-secondary uppercase text-page-dark text-4xl sm:text-5xl lg:text-[72px] leading-[0.95] tracking-tight">
                        Subscribe to <br />
                        Our Newsletter
                    </h2>
                    <p className="max-w-120 pt-5 uppercase text-page-dark/80 px-2 text-sm tracking-wider">Early access to drops, restock alerts and members-only offers. One email a week, never more.</p>
                </div>
                <div className="flex-1">
                    <form className="flex gap-2 items-center">
                        <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="w-full border border-slate-300 py-5 pl-4 text-[12px] tracking-wider" />
                        <button type="submit" className="inline-flex items-center gap-3 bg-primary text-white uppercase text-xs font-semibold px-6 py-3.5 tracking-widest transition-all duration-300 hover:bg-tertiary group -ml-41">
                            Subscribe
                            <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </button>
                    </form>
                    <div className="px-2 flex gap-15 pt-5 text-primary/80 uppercase text-sm tracking-wider">
                        <p>10% OFF First Order</p>
                        <p>Unsubscribe Anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
}