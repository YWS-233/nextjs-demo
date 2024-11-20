import Image from "next/image";
import style from "./index.module.scss";
const navList = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "Artworks", href: "/artworks" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center h-[100px] bg-[#fff] text-[#09f]`}
    >
      <a>
        <Image
          src="https://www.operagallery.com/img/opera-gallery-logo.svg"
          alt="Opera Gallery is an international gallery specializing in modern and contemporary art with 16 locations worldwide."
          className={style.logo}
          width={200}
          height={50}
        />
      </a>
      <ul className="flex">
        {navList.map((navItem, index) => (
          <li key={index} className="mx-4">
            <a href={navItem.href}>{navItem.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
