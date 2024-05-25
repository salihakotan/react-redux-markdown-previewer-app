import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <div id='container'>
      <Header/>
      <Inputs/>
   
     </div>
     <Footer/>
    </div>
  );
}

export default App;
