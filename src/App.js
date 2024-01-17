import "../src/resources/styles.css"
import Header from "../src/components/header_footer/Header"
import Footer from "./components/header_footer/Footer"
import Featured from "./components/featured/index"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
