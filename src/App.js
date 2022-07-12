import "./App.css";
import { Route, Routes } from 'react-router-dom';
import {Homepage,Notespage,Trashpage,Archivepage,Labelspage,Login,Signup} from "./pages";
import {Navbar,Footer,ScrollToTop,RequiresAuth} from "./components";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/notes" element={<RequiresAuth><Notespage/></RequiresAuth>} />
          <Route path="/trash" element={<RequiresAuth><Trashpage/></RequiresAuth>} />
          <Route path="/archive" element={<RequiresAuth><Archivepage/></RequiresAuth>} />
          <Route path="/labels" element={<RequiresAuth><Labelspage/></RequiresAuth>} />
      </Routes>
      </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default App;
