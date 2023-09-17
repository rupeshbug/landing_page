import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import background from './assets/background.svg'

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
    </div>
  )
}

export default App
