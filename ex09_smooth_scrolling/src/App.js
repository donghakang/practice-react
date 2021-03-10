import './App.scss';

import Navbar from './component/Navbar'
import Main from './sections/Main'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return ( 
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Contact />
    </div>
  );
}

export default App;
