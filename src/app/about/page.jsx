import { FaBook, FaCheckCircle } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbClipboardList } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import React from "react";
function AboutPage() {
  const carts = [
    { id: 1, icon: "/icon1.jpg", text: "Keyfiyyətli xidmət" },
    { id: 2, icon: "/icon2.avif", text: "Dürüstlük və şəffaflıq" },
    { id: 3, icon: "/icon3.png", text: "Müştəri məmnuniyyəti" },
    { id: 4, icon: "/icon4.jpg", text: "İnnovasiya və effektivlik" },
  ];
  return (
    <>
      <main className="h-fit md:h-[140vh]">
        <section className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FcAbout className="text-3xl text-blue-500" />
              <p className="text-2xl font-semibold">Haqqımızda</p>
            </div>
            <p>
              Biz, kombi və istilik sistemlərinin təmiri və quraşdırılması
              sahəsində fəaliyyət göstərən bir layihəyik. Məqsədimiz,
              müştərilərimizə ən yüksək keyfiyyətli xidmətləri təqdim etmək və
              evlərində rahatlığı təmin etməkdir.
            </p>
          </div>
          <div className="w-full md:w-[60vw] h-[55vh]">
            <img
              className="w-full h-full object-cover rounded-md"
              src="/image1.jpg"
              alt="kombi"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaArrowTrendUp className="text-3xl text-blue-500" />
              <p className="text-2xl font-semibold">Missiyamız</p>
            </div>
            <p>
              Missiyamız, müştərilərimizə əla xidmətlər təqdim edərək onların
              istilik sistemlərini ən yüksək səmərəliliklə işlətmələrini təmin
              etməkdir.
            </p>
          </div>

          <div className="flex md:flew-row flex-col md:gap-0 gap-4 justify-around">
            {carts.map(({ icon, text, id }) => {
              return (
                <React.Fragment key={id}>
                  <div className="rounded-lg border p-5 flex flex-col justify-center items-center gap-4 bg-slate-200">
                    <div className="size-[70px] ">
                      <img src={icon} className="mix-blend-color-burn object-cover" alt="images" loading="lazy" />
                    </div>
                    <p className="w-28  text-center">{text}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <TbClipboardList className="text-3xl text-blue-500" />
              <h2 className="text-2xl font-semibold">Tarixçəmiz</h2>
            </div>
            <p>
              Bizim layihəmiz, istilik sistemləri və kombi sahəsindəki dərin
              bilik və təcrübələrə əsaslanaraq müştərilərimizin ehtiyaclarını ən
              yaxşı şəkildə qarşılamağı hədəfləyir.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
export default AboutPage;
