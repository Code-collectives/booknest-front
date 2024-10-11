
import Hero from "./Hero"
import Navbar from "./Navbar"
import Footer from "./Footer"

function LayoutWrapper({Children, showHero}) {
  return (
    <>
     <Navbar />
     {showHero && <Hero />} 
     {Children}
     <Footer />
    </>
  )
}

export default LayoutWrapper
