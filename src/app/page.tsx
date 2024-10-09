import AboutSection from "@/sections/About/About"
import HomeSection from "@/sections/Home/Home"

const Home = () => {
  return (
    <main className="w-full  flex flex-col justify-center items-end">
      <HomeSection/>
      <AboutSection/>
    </main>
  )
}
export default Home