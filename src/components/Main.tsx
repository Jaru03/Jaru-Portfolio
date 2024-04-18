import Aboutme from "./main/Aboutme"
import ButtonFixed from "./main/ButtonFixed"
import Contact from "./main/Contact"
import Hero from "./main/Hero"
import Proyects from "./main/Proyects"
import Skills from "./main/Skills"
import './style/Main.css'

const Main = () => {
  return (
    <main className="main">
        <Hero/>
        <Aboutme/>
        <Proyects/>
        <Skills/>
        <Contact/>
        <ButtonFixed/>
    </main>
  )
}

export default Main