import "./styles/global.scss";
import {
  Header,
  Footer,
  CardsSection,
  BackgroundElements,
  RocketSection,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <CardsSection />
        <RocketSection />
      </main>
      <BackgroundElements />
      <Footer />
    </>
  );
}

export default App;
