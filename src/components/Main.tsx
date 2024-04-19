import Aboutme from "./main/Aboutme"
import ButtonFixed from "./main/ButtonFixed"
import Contact from "./main/Contact"
import Hero from "./main/Hero"
import Proyects from "./main/Proyects"
import Skills from "./main/Skills"
import './style/Main.css'

type Props = {
  setShowNavBar:any
}

const Main = ({setShowNavBar}:Props) => {

  const handleShowNavBar = () => {
    setShowNavBar(true)
  }
  

  return (
    <main className={`main`}>
        <i onClick={handleShowNavBar} className='iconFloat__nav iconFloat__nav--menu bx bx-menu'></i>
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