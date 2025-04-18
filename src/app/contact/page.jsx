import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { IoInformationCircle } from "react-icons/io5";
export const metadata = {
  title: "Bizimlə Əlaqə | Kombi Ustası",
  description:
    "Kombi ustası ilə əlaqə saxlayın. Kombi Ustasi | Yasamal | Xirdalan | Masazır | Sulutəpə | Peşəkar kombi təmir və servis xidməti üçün bizə zəng edin və ya mesaj göndərin.",
};

function Contact() {
  return (
    <>
      <main className="flex justify-between items-center flex-[7]"> 
        <section className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-4xl font-semibold py-3">Əlaqə</h1>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl md:text-2xl" />
            <p className="text-xl md:text-xl font-medium">
             
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
          <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-2xl"/>
            <p className="text-[14px] md:text-xl font-medium">
              Ünvanlarımız:  | Yasamal | Xirdalan | Masazır | Sulutəpə | 20 Yanvar
            </p>
          </div>
          <div className="flex items-center gap-2 font-medium ">
            <FaSquarePhone className="text-xl md:text-2xl " />
            <div className="flex md:flex-row flex-col text-[14px] md:text-xl">
            <p>Telefon Nömrəmiz:</p>
            <Link href="tel:+994702002447" className="px-2 hover:text-blue-500">
            +994 70 200 24 47
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
