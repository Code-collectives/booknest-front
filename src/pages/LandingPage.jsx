import Children from '../components/children'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import Hero from '../components/Hero'
import LayoutWrapper from '../components/LayoutWrapper'
import Navbar from '../components/Navbar'
import NonFiction from '../components/Non-fiction'
function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Genres />
      <Children />
      <NonFiction />
      <Footer />
    </div>
  )
}

export default LandingPage
