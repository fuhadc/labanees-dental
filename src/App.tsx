import { Navbar } from "./components/layout/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Services } from "./components/sections/Services"
import { FeaturedService } from "./components/sections/FeaturedService"
import { WhyChooseUs } from "./components/sections/WhyChooseUs"
import { Footer } from "./components/sections/Footer"

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedService />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}

export default App
