import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
export const metadata = {
  title: "Kombi Ustası - Peşəkar Kombi Təmir və Servis Xidməti",
  description:
    "Kombi Ustasi | Yasamal | Xirdalan | Masazır | Sulutəpə | Zəng edin 📞 070 200 24 47 peşəkar kombi temiri xidmeti, keyfiyyətli servis, görülən işlərə zəmanət verilir",
};

export default function Home() {
  return (
    <>
      <main className=" flex flex-col gap-5 justify-center items-center ">
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </main>
    </>
  );
}
