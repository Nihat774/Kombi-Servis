import React from "react";

function HomeSection4() {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-3 w-full  md:w-[50%] ">
          <h2 className="text-xl font-semibold">İşimizə Zəmanət Veririk</h2>
          <p className="text-lg">
            Biz hərtərəfli zəmanətlə qızdırıcı təmir xidmətlərimizin
            arxasındayıq və gördüyümüz işə güvənirik. Təmirdən sonra hər hansı
            problem yaranarsa, biz onları heç bir əlavə ödəniş tələb etmədən
            həll edəcəyik. Zəmanətimiz kombinin ən yaxşı vəziyyətdə qalmasını
            təmin edir və sizə uzunmüddətli, etibarlı performans təklif edir.
          </p>
          <div className="flex gap-2">
            <p className="font-semibold">İş Saatları : </p>
            <p>Hər gün: 10:00-21:00</p>
          </div>
        </div>

        <div>
          <img
            src="/section4.PNG"
            className="size-[300px]"
            alt="superman-image"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default HomeSection4;
