import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className=" flex justify-center min-h-[58vh] items-center">
        <section className="flex flex-col items-center justify-between gap-5">
          <p className="w-[35vw] text-4xl text-center h-fit">
            Kombilərinizin Problemi Bizim Peşəkar Ustalarımızla Həll Olunur.
          </p>
          <p className="w-[40vw] text-2xl text-center">
            Kombi texnologiyasını ən son yeniliklərlə təchiz edirik. Kombi
            təmirinizi peşəkar və sərfəli şəkildə həll edirik.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white rounded-md py-2 px-5 text-xl hover:bg-white hover:border duration-500 hover:border-blue-600 hover:text-blue-600">
            Əlaqə
          </Link>
        </section>
      </main>
    </>
  );
}
