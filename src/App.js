import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menubar from './components/Menubar/Menubar';
import Speciality from './components/Speciality/Speciality';
import './components/style.css';

function App() {
  return (
    <div>
     <Menubar/>
     <Header/>
     <Speciality/>
     <Footer/>
    </div>
  );
}

export default App;
