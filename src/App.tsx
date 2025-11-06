import Header from "./components/Header";
import Hero from "./components/Hero";
import Listing from "./components/Listing";
import CoHost from "./components/CoHost";
import AirCover from "./components/AirCover";
import HostingTools from "./components/HostingTools";
import ApartmentHosting from "./components/ApartmentHosting";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <Listing />
        <CoHost />
        <AirCover />
        <HostingTools />
        <ApartmentHosting />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
