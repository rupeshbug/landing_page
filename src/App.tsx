import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import background from './assets/background.svg'
import Features from './components/Features'
import KnowMore from './components/KnowMore'

function App() {
  return (
    <div className='text-white' style={{
      background: `url(${background})`,
      backgroundSize: 'cover', 
      backgroundAttachment: 'fixed', 
      minHeight: '100vh',
    }}>
      <Navbar />
      <HeroSection />
      <Features />
      <KnowMore />
    </div>
  )
}

export default App
