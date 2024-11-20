import Image from "next/image";
import style from "./index.module.scss";
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
      Navbar content
    </nav>
  );
};

export default Navbar;
