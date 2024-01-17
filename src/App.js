import "../src/resources/styles.css"
import { Element } from 'react-scroll';

import Header from "../src/components/header_footer/Header"
import Footer from "./components/header_footer/Footer"
import Featured from "./components/featured/index"
import VenueInfo from "./components/venueNfo"
import Highlights from "./components/highlights"
import Pricing from './components/pricing';
import Location from './components/location';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venueInfo">
        <VenueInfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>

    <Footer/>
    </div>
  );
}

export default App;
