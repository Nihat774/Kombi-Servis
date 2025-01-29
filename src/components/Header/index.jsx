import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
function Header() {
  return (
    <>
      <header className="flex flex-col gap-5 text-white bg-blue-600 py-3 px-3 md:px-[14vw] sticky top-0 z-50 ">
        <div className="flex gap-2 justify-between items-center">
          <Link href="/" className="text-sm md:text-2xl font-semibold hover:underline">
            kombiustasixirdalan.az
          </Link>
          <div className="rounded-lg flex items-center border text-blue-600 bg-white p-2 md:p-3 hover:animate-shake">
            <Link
              href="tel:+994702002447"
              className="flex text-[10px] md:text-xl text-opacity-90  items-center gap-1 md:gap-2 "
            >
              <FaPhone />
              070 200 24 47
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
