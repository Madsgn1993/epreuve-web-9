
import './App.scss';
import Header from './composant/Header'
import Main from './composant/Main'
import Footer from './composant/Footer'
import getDateNow from './functions/getDateNow'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
