import "./App.css";
import { Route, Routes } from 'react-router-dom';
import {Homepage,Notespage,Trashpage,Archivepage,Labelspage,Login,Signup} from "./pages";
import {Navbar,Footer,ScrollToTop} from "./components";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/notes" element={<Notespage/>} />
          <Route path="/trash" element={<Trashpage/>} />
          <Route path="/archive" element={<Archivepage/>} />
          <Route path="/labels" element={<Labelspage/>} />
      </Routes>
      </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default App;
