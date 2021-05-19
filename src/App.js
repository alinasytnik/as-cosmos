import "./styles/global.scss";
import { Header, Footer, CardsSection, BackgroundElements } from "./components";

function App() {
  return (
    <div>
      <Header />
      <BackgroundElements />
      <main>
        <CardsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
