import BestDeal from "./components/BestDeal/BestDeal"
import ContactUs from "./components/ContactUs/ContactUs"
import Featured from "./components/Featured/Featured"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Properties from "./components/Properties/Properties"
import VideoView from "./components/VideoView/VideoView"

function App() {
  return (
    <>
     <NavBar/>
     <Hero/>
     <Featured/>
     <VideoView/>
     <BestDeal/>
     <Properties/>
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default App
