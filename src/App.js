import logo from './logo.svg';
import './App.css';
import Change from './onChange';
import MouseOver from './onMouseOver';

function App() {
  return(
    <section className="event">
      <MouseOver/>
      <Change/>
    </section>
  )
}

export default App;
