import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrendingApps from "@/components/TrendingApps";

export default function Home() {
  return (

    <>
    <main>
      <Hero></Hero>
      <Stats></Stats>
      <TrendingApps from = "home" ></TrendingApps> 

    </main>


    </>
  
     
     
   
  );
}
