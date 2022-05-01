// my-portfolio-first-project
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Team from './Components/Team/Team';



function App() {
  return (
    <>
    
     <Navbar />
     <Header />
     <AboutUs />
     <Services />
     <Experience />
     <Team />
    
    </>
  );
}

export default App;
