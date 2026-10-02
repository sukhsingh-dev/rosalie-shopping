import Link from "next/link";
import HeaderSearchBar from "./HeaderSearchBar";
import Logo from "./Logo";
import { RiAccountCircle2Line, RiHeart2Line, RiMenu2Fill, RiShoppingBag4Line, RiUser5Line } from "react-icons/ri";

const Header = () => {
    return (
        <header className="border-b border-slate-300">
            <nav className="relative max-w-360 mx-auto px-4 py-2" >
                <ul className="flex flex-wrap gap-3 lg:gap-10 items-center uppercase text-sm font-medium text-page-dark sm:justify-between">
                    <li className="flex items-center gap-3 hover:text-tertiary transition-colors duration-150 sm:min-w-[165px] md:min-w-[213px]">
                        <button data-cursor-label="Open Menu" className="mt-1">
                            <RiMenu2Fill size={20} />
                        </button>
                    </li>
                    <li>
                        <Link href="/" data-cursor-label="Home Page">
                            <Logo />
                        </Link>
                    </li>
                    <li className="flex gap-4 md:gap-8 ml-auto sm:ml-0">
                        <HeaderSearchBar />
                        <button data-cursor-label="Login to Account">
                            <RiUser5Line size={20} />
                        </button>
                        <button data-cursor-label="Check Wishlist">
                            <RiHeart2Line size={20} />
                        </button>
                        <button data-cursor-label="Check Bag" className="py-1 px-2.5 text-white relative before:content-[''] before:absolute before:inset-0 before:bg-tertiary before:z-[-1] before:skew-x-[-20deg] flex gap-2 items-center">
                            <RiShoppingBag4Line size={20} />
                            <span>0</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;