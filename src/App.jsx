import Header from "./components/Header"
import Main from "./components/Main"
import Contact from "./components/Contact"
import Section2 from "./components/Section2/Section2"
import Cards from "./components/Cards"
import Tecnologies from "./components/Tecnologies"
import Circulos from "./components/Circulos"
import Form from "./components/Form"
import Footer from "./components/Footer"
import {EmblaCarousel} from "../../hidra/src/components/PrimeiroCarrosel/"


function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Contact></Contact>
      <EmblaCarousel></EmblaCarousel>
      <Section2></Section2>
      <Cards></Cards>
      <Tecnologies></Tecnologies>
      <Circulos></Circulos>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default App
