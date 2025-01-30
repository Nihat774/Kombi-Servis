import React from 'react'
import Slider from '../Slider'
import Link from 'next/link'

function HomeSection1() {
  return (
    <>
      <Slider />
        <section className="flex flex-col items-center justify-between gap-5">
          <p className="w-full text-lg md:text-2xl  h-fit">
            Etibar edə biləcəyiniz təcili kombi ustasi axtarırsınız? Kombi
            təmiri üzrə mütəxəssis olan ustalarımızı başqasına yerdə axtarmayın.
            Stabil bir istilik sisteminə sahib olmağın, xüsusən də qış aylarında
            temperaturun aşağı düşdüyü vaxtlarda nə qədər vacib olduğunu başa
            düşürük. Təcrübəli texniklərimiz evinizi isti və rahat saxlamaq üçün
            sürətli, səmərəli və sərfəli təmir xidmətləri göstərmək üçün
            buradadır. İstilik problemlərinin rahatlığınızı pozmasına imkan
            verməyin. Xidmət təyin etmək və ya pulsuz məsləhət almaq üçün bu gün
            bizimlə əlaqə saxlayın. Bütün il boyu rahat qalmağınız üçün kombi
            təmirini bizə həvalə edin!
          </p>
          <p className="md:w-[40vw] w-full text-lg md:text-2xl text-center">
            Kombi texnologiyasını ən son yeniliklərlə təchiz edirik. Kombi
            təmirinizi peşəkar və sərfəli şəkildə həll edirik.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white rounded-md py-2 px-5 text-xl hover:bg-white hover:border duration-500 hover:border-blue-600 hover:text-blue-600"
          >
            Əlaqə
          </Link>
        </section> 
    </>
  )
}

export default HomeSection1
