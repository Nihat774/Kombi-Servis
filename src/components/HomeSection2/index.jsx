import React from "react";

function HomeSection2() {
  return (
    <>
      <section className="flex md:flex-row flex-col  justify-between">
        <div className="flex flex-col gap-3 w-full md:w-[50%] ">
            <h2 className="text-xl font-semibold">
            Təcili kombi ustası lazımdır?

            </h2>
          <p className="text-lg">
            Sizə daha yaxşı xidmət göstərməyimiz üçün müştərilərimizin istəyini
            nəzərə alaraq təcili çağıra biləcəyiniz usta briqadası yaradılıb.
            Mütəxəssislərimiz evinizdə istiliyi bərpa etmək üçün daim
            xidmətinizdədir. İstər qəfil kombi xarab olsun, istərsə də nasaz bir
            sistem olsun, kombinin yenidən işləməsi üçün sürətli və səmərəli
            xidmət göstəririk. Gözləməyin - təcili təmir üçün bizimlə əlaqə
            saxlayın!
          </p>
        </div>

        <div>
            <img src="/section2.PNG" className="size-[300px]" alt="superman-image" loading="lazy" />
        </div>
      </section>
    </>
  );
}

export default HomeSection2;
