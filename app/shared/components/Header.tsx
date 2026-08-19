import Link from "next/link";
import HeaderSearchBar from "./HeaderSearchBar";
import Logo from "./Logo";

const Header = () => {
    const linkClass = "inline-block transition-colors duration-150 hover:text-tertiary";

    return (
        <header className="border-b border-slate-300">
            <nav className="relative max-w-360 mx-auto px-4 py-2" >
                <ul className="flex flex-wrap gap-10 items-center uppercase text-sm font-medium text-page-dark">
                    <li>
                        <Link href="/shop" className={linkClass}>Shop</Link>
                    </li>
                    <li>
                        <Link href="/about" className={linkClass}>About</Link>
                    </li>
                    <li>
                        <Link href="/faq" className={linkClass}>Faq</Link>
                    </li>
                    <li className="mx-auto">
                        <Link href="/" data-cursor-label="Home Page">
                            <Logo />
                        </Link>
                    </li>
                    <li className={linkClass}>
                        <HeaderSearchBar />
                    </li>
                    <li className={linkClass}>
                        <Link href="/wishlist">
                            Wishlist
                        </Link>
                    </li>
                    <li>
                        <button data-cursor-label="Bag" className="py-1 px-2.5 text-white relative before:content-[''] before:absolute before:inset-0 before:bg-tertiary before:z-[-1] before:skew-x-[-20deg]">
                            BAG 0
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;