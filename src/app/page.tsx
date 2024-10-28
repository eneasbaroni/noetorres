import AboutSection from "@/sections/About/About"
import ContentSection from "@/sections/Content/Content"
import HomeSection from "@/sections/Home/Home"
import SocialSection from "@/sections/Social/Social"
import WorksSection from "@/sections/Works/Works"

const Home = () => {
  return (
    <main className="w-full  flex flex-col justify-center items-end">
      <HomeSection/>
      <AboutSection/>
      <WorksSection/>
      <SocialSection/>
      <ContentSection/>
      <div className="h-screen"></div>
    </main>
  )
}
export default Home