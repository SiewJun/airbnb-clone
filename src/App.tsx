import Header from "./components/Header";
import Hero from "./components/Hero";
import Listing from "./components/Listing";
import CoHost from "./components/CoHost";
import AirCover from "./components/AirCover";

function App() {
  return (
    <>
      <div className="sm:block container mx-auto">
        <Header />
        <Hero />
        <Listing />
        <CoHost />
        <AirCover />
      </div>
    </>
  );
}

export default App;
