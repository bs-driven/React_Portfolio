import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';



function App () {
    return(
        <div className="portfolio-app">
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
}

export default App;
