import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import Pricing from './components/pricing/pricing.js'
import Footer from './components/footer/footer.js'
import { useRef } from "react";

function App() {
  const pageScrollMain = useRef(null); 
  const scrollMain = () => {
    pageScrollMain.current.scrollIntoView({ behavior: "smooth" });
  };
  const pageScrollMainTwo = useRef(null); 
  const scrollMainTwo = () => {
    pageScrollMainTwo.current.scrollIntoView({ behavior: "smooth" });
  };
  const pageScrollFooter = useRef(null); 
  const scrollFooter = () => {
    pageScrollFooter.current.scrollIntoView({ behavior: "smooth" });
  };
  const pageScrollFooterTwo= useRef(null); 
  const scrollFooterTwo= () => {
    pageScrollFooterTwo.current.scrollIntoView({ behavior: "smooth" });
  };

  const pageScrollPricing = useRef(null); 
  const scrollPricing= () => {
    pageScrollPricing.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div class="container">
  <Header scrollMain={scrollMain} scrollMainTwo={scrollMainTwo} scrollFooter={scrollFooter} scrollFooterTwo={scrollFooterTwo} scrollPricing={scrollPricing}/>
  <Main pageScrollMain={pageScrollMain} pageScrollMainTwo={pageScrollMainTwo}/>
  <Pricing pageScrollPricing={pageScrollPricing}/>
<Footer pageScrollFooter={pageScrollFooter} pageScrollFooterTwo={pageScrollFooterTwo}/>
    </div>
  );
}

export default App;
