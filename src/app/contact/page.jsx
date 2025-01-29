import Link from "next/link";
import { FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { IoInformationCircle } from "react-icons/io5";
function Contact() {
  return (
    <>
      <main className="flex justify-between items-center min-h-[54vh]">
        <section className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-4xl font-semibold py-3">Əlaqə</h1>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl md:text-2xl" />
            <p className="text-xl md:text-xl font-medium">
              {" "}
              Bizimlə Əlaqə Saxlayın
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GiAutoRepair className="text-2xl text-gray-600" />
            <p className="text-[14px] md:text-xl font-medium">
              Kombi təmiri və quraşdırılması
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoInformationCircle className="text-5xl md:text-2xl" />
            <p className="text-[14px] md:text-xl font-medium">
              Xidmətlərimiz haqqında ətraflı məlumat almaq və ya təcili xidmət
              üçün bizimlə əlaqə saxlaya bilərsiniz.
            </p>
          </div>
          <div className="flex items-center gap-2 font-medium ">
            <FaSquarePhone className="text-xl md:text-2xl " />
            <div className="flex md:flex-row flex-col text-[14px] md:text-xl">
            <p>Telefon Nömrəmiz:</p>
            <Link href="tel:+994557748548" className="">
              +994 55 XXX XX XX
            </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegCalendarCheck className="md:text-2xl text-3xl" />
            <p className="text-[14px] md:text-xl font-medium">
              
              Əlaqə Üçün Saatlar: Həftənin 7 günü, saat 09:00 - 20:00 arası
              əlaqə saxlaya bilərsiniz.
            </p>
          </div>
        </section>
        <div className="md:block hidden">
          <img src="/plumber.png" alt="plumber" loading="lazy" />
        </div>
      </main>
    </>
  );
}
export default Contact;
