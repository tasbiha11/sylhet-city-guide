import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import {
  Routes, Route
} from "react-router-dom";
import Home from './components/pages/Home';
import News from './components/pages/News';
import ContactUs from './components/pages/ContactUs';
import Details from './components/pages/Details';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
