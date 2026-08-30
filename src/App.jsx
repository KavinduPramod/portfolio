import { ThemeProvider } from './ThemeContext'
import StatusBar from './components/StatusBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Research from './components/Research'
import Toolbox from './components/Toolbox'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Research />
        <Toolbox />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
