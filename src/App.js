import "./App.css";
import { Route, Routes } from 'react-router-dom';
import {Homepage,Notespage} from "./pages";
import {Navbar,Footer,ScrollToTop} from "./components";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/notes" element={<Notespage/>} />
      </Routes>
      </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default App;
