import logo from './logo.svg';
import './App.css';
import Change from './onChange';
import MouseOver from './onMouseOver';
import Languages from './reactProps';
import Counter from './counter';
import Condition from './conditional';

function App() {
  return(
    <section className="event">
      <MouseOver/>
      <div className="wrap">
      <Languages general="Javascript" front="React.js" back="Node.js"/>
        <Change/>
      </div>
      <Counter/>
      <Condition/>
    </section>
  )
}

export default App;
