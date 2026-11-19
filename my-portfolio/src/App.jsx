import '../src/component/header/css/style.css'
import Header from './component/header/header.jsx';
import Home from './component/header/home/home.jsx';
import About from './component/about/about.jsx'
import Skills from './component/Skills/Skills.jsx';
import Featured from './component/Featured Projects/Featured.jsx'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
   <Skills/>
   <Featured/>
    </>
  );
}

export default App;


