import AboutSection from "@/sections/About/About"
import HomeSection from "@/sections/Home/Home"
import WorksSection from "@/sections/Works/Works"

const Home = () => {
  return (
    <main className="w-full  flex flex-col justify-center items-end">
      <HomeSection/>
      <AboutSection/>
      <WorksSection/>
      <div className="h-screen"></div>
    </main>
  )
}
export default Home