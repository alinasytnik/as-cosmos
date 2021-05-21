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
    <div>
      <Header />
      <main>
        <CardsSection />
        <RocketSection />
      </main>
      <BackgroundElements />
      <Footer />
    </div>
  );
}

export default App;
