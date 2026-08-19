import Link from "next/link";
import Image from "next/image";
import { RiArrowRightLongLine } from "react-icons/ri";

export default function Collection() {
    return (
        <section className="max-w-360 mx-auto px-4 py-20">
            <div className="flex flex-wrap justify-between items-end mb-6 lg:mb-12">
                <h2 className="font-secondary uppercase text-page-dark text-4xl sm:text-5xl lg:text-[46px] xl:text-[80px] leading-[0.95] tracking-tight">Collections</h2>
                <Link href="/shop" className="ml-auto inline-flex items-center gap-2 text-sm rounded-[20px] py-1 pl-2.5 pr-1 text-secondary font-medium group hover:text-tertiary transition-colors duration-300">See All <RiArrowRightLongLine className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </div>
            <div className="grid grid-cols-3">
                <CollectionItem
                    image="/images/collection-1.webp"
                    name="Daily Classic"
                    link="/shop"
                    isFirst
                />
                <CollectionItem
                    image="/images/collection-2.webp"
                    name="Men"
                    link="/shop"
                />
                <CollectionItem
                    image="/images/collection-3.webp"
                    name="Women"
                    link="/shop"
                />
                <CollectionItem
                    image="/images/collection-4.webp"
                    name="Featured"
                    link="/shop"
                />
            </div>
        </section>
    )
}

type CollectionItemProps = {
    image: string;
    name: string;
    link: string;
    isFirst?: boolean;
}

const CollectionItem = ({ image, name, link, isFirst = false }: CollectionItemProps) => {
    return (
        <Link href={link} className={`border border-slate-300 grid group overflow-hidden ${isFirst ? "col-span-3" : ""}`}>
            <Image
                alt=""
                src={image}
                width={isFirst ? 1408 : 495}
                height={isFirst ? 555 : 590}
                className="col-span-full row-span-full transition-transform transition-300 ease-in group-hover:scale-[1.03]"
            />
            <div className="col-span-full row-span-full p-6 h-full flex items-end bg-linear-to-t from-black/75 to-transparent relative z-1" >
                <h3 className="font-secondary uppercase text-primary text-6xl group-hover:tracking-[2px] transition-all transition-300 ease-in" >{name}</h3>
            </div>
        </Link>
    )
}